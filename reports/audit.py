"""Audit SplytWiki articles. Usage: python -I audit.py <site_root> <out_csv>"""
import csv, os, re, sys, concurrent.futures as cf
import urllib.request, urllib.error, socket, ssl

ROOT, OUT = sys.argv[1], sys.argv[2]
DIRS = ["_wiki", "de/wiki", "es/wiki"]
SKIP_SECTIONS = {"see also", "references", "notes and further reading", "further reading",
                 "external links", "developer notes", "siehe auch", "einzelnachweise",
                 "véase también", "referencias", "weblinks", "enlaces externos"}
SIGNAL = re.compile(r"\d|\"[^\"]{8,}\"|“|\b(first|largest|biggest|most|only|never|always|"
                    r"according|estimated?|reported|billion|million|percent|record|majority)\b", re.I)
rows, ext_links = [], {}


def slug_title(slug):
    return slug.replace("_", " ")


def anchors_of(text):
    ids = set()
    for h in re.findall(r"^#{1,6}\s+(.+?)\s*#*$", text, re.M):
        t = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", h)
        t = re.sub(r"[^\w\- ]", "", t.lower()).strip().replace(" ", "-")
        ids.add(t)
    return ids


def add(page, issue, line, fix):
    rows.append([page, issue, line, fix])


for d in DIRS:
    base = os.path.join(ROOT, d)
    names = {f[:-3] for f in os.listdir(base) if f.endswith(".md")}
    for fname in sorted(os.listdir(base)):
        if not fname.endswith(".md"):
            continue
        page = f"{d}/{fname}"
        text = open(os.path.join(base, fname), encoding="utf-8").read()
        lines = text.split("\n")
        # front matter end
        fm_end = 0
        if lines[0].strip() == "---":
            for i in range(1, len(lines)):
                if lines[i].strip() == "---":
                    fm_end = i
                    break
        fn_used, fn_def = {}, {}
        in_code, section, has_refs = False, "", False
        headings = []  # (idx, level, text)
        unit_start, unit_text = None, ""
        lead_cited = [False]

        def flush_unit():
            global unit_text
            if unit_start is None:
                return
            t = unit_text
            if section.lower() in SKIP_SECTIONS or t.lstrip().startswith(">"):
                return
            if "[^" in t or re.search(r"\]\(https?://", t):
                lead_cited[0] = re.sub(r"(\[\^[^\]]+\])+$", "", t.rstrip()).endswith(":")
                return
            is_item = bool(re.match(r"^\s*([-*+]|\d+\.)\s", t))
            if is_item and lead_cited[0]:
                return
            if not is_item:
                lead_cited[0] = False
            if re.search(r"\b(fictional|hypothetical|imagine)\b", t, re.I):
                return
            plain = re.sub(r"`[^`]*`", "", t)
            plain = re.sub(r"^\s*([-*+]|\d+\.)\s+", "", plain).replace("**", "")
            m = SIGNAL.search(plain)
            if m:
                snippet = re.sub(r"\s+", " ", re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", plain)).strip(" -*")
                snippet = snippet[:90] + ("…" if len(snippet) > 90 else "")
                add(page, f'Uncited claim: "{snippet}"', unit_start,
                    "Add a numbered footnote to a primary source (BIP, release notes, official doc, filing, paper) or remove the claim")

        for i in range(fm_end + 1, len(lines)):
            ln, raw = i + 1, lines[i]
            s = raw.strip()
            if s.startswith("```"):
                in_code = not in_code
                continue
            if in_code:
                continue
            if re.match(r"^( {4}|	)", raw) and unit_start is None:
                continue
            nocode = re.sub(r"`[^`]*`", "", raw)

            # footnotes
            md = re.match(r"^\[\^([^\]]+)\]:\s*(.*)", s)
            if md:
                fn_def.setdefault(md.group(1), ln)
                for u in re.findall(r"https?://[^\s)\]>\"]+", md.group(2)):
                    ext_links.setdefault(u.rstrip(".,;"), []).append((page, ln))
                if re.search(r"bitcointalk\.org|reddit\.com|forum", md.group(2), re.I):
                    add(page, "Weak source: forum thread cited as reference", ln,
                        "Replace with a primary source (BIP, Bitcoin Core docs/release notes, mailing-list post, paper)")
                continue
            for m in re.finditer(r"\[\^([^\]]+)\](?!:)", nocode):
                fn_used.setdefault(m.group(1), ln)

            # headings
            mh = re.match(r"^(#{1,6})\s*(.*?)\s*#*$", s)
            if mh and (s.startswith("# ") or s.startswith("##") or s == "#"):
                flush_unit(); unit_start, unit_text = None, ""
                level, title = len(mh.group(1)), mh.group(2)
                headings.append((ln, level, title))
                if not title:
                    add(page, "Empty heading (no text)", ln, "Delete the heading or give it a title")
                section = title
                if title.lower() in {"references", "notes and further reading", "einzelnachweise", "referencias"}:
                    has_refs = True
                continue

            # editor notes
            for pat, fix in [
                (r"\(Add sourcing where appropriate[^)]*\)", "Replace with real numbered references for the topics listed, then delete the note"),
                (r"\b(TODO|TBD|FIXME)\b|\[citation needed\]", "Resolve the note or remove it"),
                (r"Based on standard [^.]*behaviou?r[^.]*\.", "Vague sourcing note: replace with specific references (e.g. Bitcoin Core docs/release notes)"),
                (r"\(linked, not summari[sz]ed here\)", "Editor aside: remove, or summarise and cite a primary source"),
                (r'every article ends with "Add sourcing where appropriate"', "Outdated meta-statement: reword to describe how to add citations"),
            ]:
                m = re.search(pat, nocode)
                if m:
                    add(page, f'Editor note: "{m.group(0)[:80]}"', ln, fix)

            # links
            for m in re.finditer(r"(?<!!)\[([^\]\^][^\]]*)\](\(([^)]*)\))?", nocode):
                txt, target = m.group(1), m.group(3)
                if target is None:
                    nxt = nocode[m.end():m.end() + 1]
                    if nxt in "[:" and nxt != "":
                        continue
                    if re.fullmatch(r"[xX ]", txt):
                        continue
                    slug = txt.strip()
                    if slug in names:
                        fix = f"Make it a link: [{slug_title(slug)}](../{slug}/)"
                    elif re.fullmatch(r"[\w\-]+", slug) and "_" in slug:
                        fix = f"No article '{slug}' exists: unlink to plain text '{slug_title(slug)}' or create the article"
                    else:
                        fix = "Bracketed text is not a link: add a target or remove the brackets"
                    add(page, f"Raw-slug / unlinked bracket: [{txt}]", ln, fix)
                    continue
                if re.fullmatch(r"[A-Za-z0-9\-]+(_[A-Za-z0-9\-]+)+", txt.strip()) and not re.fullmatch(r"[A-Z0-9_]+", txt.strip()):
                    add(page, f"Raw-slug link text: [{txt}]", ln, f"Use readable text: [{slug_title(txt.strip())}]({target})")
                if target.startswith("http"):
                    ext_links.setdefault(target.split()[0], []).append((page, ln))
                    if re.search(r"bitcointalk\.org|reddit\.com", target):
                        add(page, "Weak source: forum thread linked as source", ln,
                            "House style bars forum threads as primary sources: replace with a primary source")
                    continue
                mi = re.match(r"^\.\./([^/#)]+)/?(#[^)]*)?$", target)
                if mi:
                    slug = mi.group(1)
                    if slug not in names:
                        alt = [n for n in names if n.lower() == slug.lower()]
                        if alt:
                            fix = f"Case mismatch (GitHub Pages is case-sensitive): use ../{alt[0]}/"
                        elif d != "_wiki" and os.path.exists(os.path.join(ROOT, "_wiki", slug + ".md")):
                            fix = f"No {d[:2]} translation exists (live URL 404s): link the English article with ../../../wiki/{slug}/"
                        else:
                            fix = f"No article '{slug}' exists: create it or unlink to plain text '{slug_title(slug)}'"
                        add(page, f"Broken internal link: {target}", ln, fix)
                    elif mi.group(2):
                        tgt = open(os.path.join(base, slug + ".md"), encoding="utf-8").read()
                        if mi.group(2)[1:] not in anchors_of(tgt):
                            add(page, f"Broken anchor: {target}", ln, "Point to an existing heading id")
                elif target.startswith("#"):
                    if target[1:] not in anchors_of(text):
                        add(page, f"Broken anchor: {target}", ln, "Point to an existing heading id")

            # claim units
            if not s or s.startswith(("|", "<", "{%", "{{")):
                flush_unit(); unit_start, unit_text = None, ""
                continue
            if re.match(r"^([-*+]|\d+\.)\s", s):
                flush_unit(); unit_start, unit_text = ln, s
            elif unit_start is None:
                unit_start, unit_text = ln, s
            else:
                unit_text += " " + s
        flush_unit()

        # empty sections
        for k, (ln, level, title) in enumerate(headings):
            nxt = headings[k + 1] if k + 1 < len(headings) else None
            end = nxt[0] - 1 if nxt else len(lines)
            body = "\n".join(lines[ln:end]).strip()
            if not body and (nxt is None or nxt[1] <= level):
                add(page, f'Empty section: "{title}"', ln, "Write the section with cited content or delete the heading")
        for k, ln in fn_used.items():
            if k not in fn_def:
                add(page, f"Broken footnote: [^{k}] has no definition", ln, f"Add a [^{k}]: reference entry or remove the marker")
        for k, ln in fn_def.items():
            if k not in fn_used:
                add(page, f"Unused footnote definition: [^{k}]", ln, "Cite it in the text or delete it")
        if not fn_def:
            add(page, "No numbered references on page", "", "Add a References section with numbered footnotes to primary sources")

# external link check
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
ctx = ssl.create_default_context()


def check(u):
    for method in ("HEAD", "GET"):
        try:
            req = urllib.request.Request(u, method=method, headers={"User-Agent": UA, "Accept": "*/*"})
            with urllib.request.urlopen(req, timeout=20, context=ctx) as r:
                return u, r.status, ""
        except urllib.error.HTTPError as e:
            if method == "HEAD" and e.code in (403, 404, 405, 429, 400, 501):
                continue
            return u, e.code, ""
        except (urllib.error.URLError, socket.timeout, ConnectionError, ssl.SSLError) as e:
            reason = str(getattr(e, "reason", e))
            if method == "HEAD":
                continue
            return u, None, reason
    return u, None, "unknown"


with cf.ThreadPoolExecutor(16) as ex:
    results = list(ex.map(check, ext_links))
import subprocess
def curl_check(u):
    try:
        out = subprocess.run(["curl", "-s", "-o", "/dev/null", "-L", "--max-time", "25", "-w", "%{http_code}",
                              "-A", "SplytWiki link audit (contact: editors@splytwiki.invalid) " + UA, u],
                             capture_output=True, text=True, timeout=40).stdout.strip()
        return int(out) if out.isdigit() and out != "000" else None
    except Exception:
        return None
fixed = []
for u, code, reason in results:
    if code is None or code >= 400:
        c2 = curl_check(u)
        if c2 is not None and c2 < 400:
            code, reason = c2, ""
        elif c2 is not None:
            code = c2
    fixed.append((u, code, reason))
results = fixed
unverified = 0
for u, code, reason in results:
    dead = code in (404, 410) or (code is None and re.search(r"getaddrinfo|Name or service|refused|No address", reason or ""))
    for page, ln in ext_links[u]:
        if dead:
            add(page, f"Broken external link (HTTP {code or reason[:40]}): {u}", ln,
                "Replace with a working URL (check web.archive.org) or another primary source")
        elif code is None or code >= 400:
            unverified += 1
            add(page, f"Unverified external link (HTTP {code or reason[:40]}; may block bots): {u}", ln,
                "Open manually to confirm; replace if dead")

order = {"Edi": 0, "Raw": 1, "Emp": 2, "Bro": 3, "Unu": 3, "Unv": 4, "Wea": 5, "No ": 6, "Unc": 7}
seen=set(); rows=[r for r in rows if not ((r[0],r[1],r[2]) in seen or seen.add((r[0],r[1],r[2])))]
rows.sort(key=lambda r: (r[0], order.get(r[1][:3], 9), r[2] if isinstance(r[2], int) else 0))
with open(OUT, "w", newline="", encoding="utf-8-sig") as f:
    w = csv.writer(f)
    w.writerow(["page", "issue", "line", "suggested fix"])
    w.writerows(rows)
from collections import Counter
print("rows", len(rows), "external urls", len(ext_links))
print(Counter(re.sub(r"[:(].*", "", r[1]).strip() for r in rows).most_common())
