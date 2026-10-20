"""Build _wiki/BIP_index.md from a bitcoin/bips checkout.
Usage: python -I build_bip_index.py <bips_repo> <site_root> <commit> <commit_date>"""
import os, re, sys

REPO, SITE, COMMIT, CDATE = sys.argv[1:5]
GH = "https://github.com/bitcoin/bips/blob/master/"
STATUS_ORDER = ["Deployed", "Complete", "Draft", "Closed"]


def parse_header(path):
    text = open(path, encoding="utf-8").read()
    m = re.search(r"<pre>(.*?)</pre>", text, re.S) or re.search(r"```\s*\n(.*?)```", text, re.S)
    if not m:
        return None
    fields, key = {}, None
    for line in m.group(1).split("\n"):
        mk = re.match(r"^\s{0,4}([A-Za-z-]+):\s*(.*)$", line)
        if mk and not line.startswith("     "):
            key = mk.group(1)
            fields.setdefault(key, []).append(mk.group(2).strip())
        elif key and line.strip():
            fields[key].append(line.strip())
    return fields


def names(lines):
    out = []
    for l in lines:
        for part in re.split(r",\s*(?=[^<>]*(?:<|$))", l):
            n = re.sub(r"<[^>]*>", "", part).strip(" ,")
            if n:
                out.append(n)
    return out


def cell(s):
    return str(s).replace("|", "\\|")


# README cross-check: number -> status
readme = open(os.path.join(REPO, "README.mediawiki"), encoding="utf-8").read()
readme_status = {}
for row in readme.split("|-")[1:]:
    cells = [c.strip() for c in row.split("\n| ")[1:]]
    mnum = re.search(r"\[\[bip-\d+\.\w+\|(\d+)\]\]", row)
    if mnum and len(cells) >= 6:
        readme_status[int(mnum.group(1))] = cells[5].split("\n")[0].strip()

bips, problems = [], []
for f in sorted(os.listdir(REPO)):
    m = re.fullmatch(r"bip-(\d{4})\.(mediawiki|md)", f)
    if not m:
        continue
    h = parse_header(os.path.join(REPO, f))
    if not h:
        problems.append(f"{f}: no header")
        continue
    num = int(m.group(1))
    get = lambda k: (h.get(k) or [""])[0]
    b = {
        "num": num, "file": f, "title": get("Title"), "type": get("Type"), "status": get("Status"),
        "layer": get("Layer"), "authors": ", ".join(names(h.get("Authors") or h.get("Author") or [])),
        "created": get("Assigned") or get("Created"),
    }
    if num in readme_status and readme_status[num] != b["status"]:
        problems.append(f"BIP {num}: header status {b['status']!r} vs README {readme_status[num]!r}")
    if b["status"] not in STATUS_ORDER:
        problems.append(f"BIP {num}: unexpected status {b['status']!r}")
    bips.append(b)
missing = sorted(set(readme_status) - {b["num"] for b in bips})
if missing:
    problems.append(f"In README but no file parsed: {missing}")

wiki_pages = {fn[:-3] for fn in os.listdir(os.path.join(SITE, "_wiki")) if fn.endswith(".md")}
counts = {s: sum(1 for b in bips if b["status"] == s) for s in STATUS_ORDER}

out = []
w = out.append
w("---")
w("title: BIP index")
w("description: Sortable index of every Bitcoin Improvement Proposal in the bitcoin/bips repository, grouped by status, with links to SplytWiki pages")
w("aliases: [BIP list, List of BIPs, Bitcoin Improvement Proposals]")
w("categories: [Bitcoin, BIPs]")
w(f"updated: 2026-10-20")
w(f"last_modified: 2026-10-20")
w("has_toc: true")
w("---")
w("")
w("> **In plain terms:** A Bitcoin Improvement Proposal (BIP) is a numbered design document for Bitcoin. "
  "This page lists every BIP in the official repository. Click a column heading to sort a table.")
w("")
w("A **Bitcoin Improvement Proposal** (BIP) is a design document that describes a feature, process or piece of "
  "information for Bitcoin.[^bip3] BIPs are published in the bitcoin/bips repository on GitHub.[^readme]")
w("")
w(f"This index lists all {len(bips)} BIPs in that repository as of commit `{COMMIT[:12]}` ({CDATE}). "
  "Each table is grouped by status and can be sorted by any column.")
w("")
w("## The BIP process")
w("")
w("### Publication is not approval")
w("")
w("Authors first discuss an idea on the bitcoindev mailing list. They open a pull request once the draft is "
  "well advanced. A BIP editor assigns the number; authors never choose their own.[^readme]")
w("")
w("The repository describes itself as a publication medium and archive. A published BIP has met formal criteria. "
  "That does not mean it is a good idea, has consensus, or will be adopted.[^readme] Adoption rests with "
  "Bitcoin's users.[^readme]")
w("")
w("### From BIP-2 to BIP-3")
w("")
w("For most of the repository's history, the process was defined by [BIP-2](#bip-2), assigned in 2016.[^bip2] "
  "BIP-2 used a larger set of statuses: Draft, Proposed, Final, Active, Deferred, Rejected, Withdrawn, Replaced "
  "and Obsolete.[^bip2] It set objective adoption criteria for reaching Final. For example, a soft fork needed "
  "a clear miner majority.[^bip2]")
w("")
w("[BIP-3](#bip-3) replaced BIP-2 with a streamlined process.[^bip3] BIP-2 now has status Closed.[^bip2] "
  "Under BIP-3, existing BIPs were moved to the new status values.[^bip3] The **Created** header was also renamed "
  "**Assigned**: the date the number was assigned.[^bip3] The **Created** column below shows that date.")
w("")
w("### Status meanings (BIP-3)")
w("")
w("| Status | Meaning |")
w("|---|---|")
w("| Draft | Assigned a number and merged; still being developed by its authors.[^bip3] |")
w("| Complete | The authors consider it finished and recommend adoption. Specification BIPs need a reference "
  "implementation and test vectors first. Most successful Informational BIPs stop here.[^bip3] |")
w("| Deployed | Settled, with evidence of active use, such as mainnet software releases or a soft fork's "
  "activation. Considered final.[^bip3] |")
w("| Closed | Of historical interest only; not actively worked on, promoted or used. BIPs are never deleted.[^bip3] |")
w("")
w("### Types and layers")
w("")
w("BIP-3 defines three types.[^bip3] A **Specification** BIP sets technical rules that implementations can "
  "comply with. An **Informational** BIP gives guidance or describes a design issue. A **Process** BIP "
  "describes a process around Bitcoin, such as the BIP process itself.[^bip3]")
w("")
w("The **Layer** column follows [BIP-123](#bip-123): Consensus, Peer Services, API/RPC or Applications.[^bip123] "
  "Process and Informational BIPs often have no layer.[^readme]")
w("")
w("### SplytWiki links")
w("")
w("The last column links to a SplytWiki article where one exists. Otherwise it links to the BIP's text in the "
  "repository. Other articles link to a BIP's row here, using anchors such as `#bip-341`.")
w("")
w("## Summary")
w("")
w("| Status | BIPs |")
w("|---|---|")
for s in STATUS_ORDER:
    w(f"| [{s}](#{s.lower()}) | {counts[s]} |")
w(f"| **Total** | **{len(bips)}** |")
w("")
for s in STATUS_ORDER:
    group = [b for b in bips if b["status"] == s]
    w(f"## {s}")
    w("")
    w("| Number | Title | Type | Status | Layer | Authors | Created | SplytWiki link |")
    w("|---|---|---|---|---|---|---|---|")
    for b in group:
        slug = f"BIP-{b['num']}"
        link = f"[{slug}](../{slug}/)" if slug in wiki_pages else f"[Spec text]({GH}{b['file']})"
        w(f"| <span id=\"bip-{b['num']}\"></span>{b['num']} | {cell(b['title'])} | {cell(b['type'])} | "
          f"{cell(b['status'])} | {cell(b['layer']) or '—'} | {cell(b['authors'])} | {cell(b['created'])} | {link} |")
    w("{: .sortable}")
    w("")
w("## See also")
w("")
w("- [BIP-350](../BIP-350/)")
w("- [Soft fork and hard fork](../Soft_fork_and_hard_fork/)")
w("- [How to contribute to Bitcoin](../how-to-contribute-to-bitcoin/)")
w("")
w("## References")
w("")
w(f"[^readme]: [\"Bitcoin Improvement Proposals\" (README.mediawiki)](https://github.com/bitcoin/bips/blob/master/README.mediawiki). *bitcoin/bips* repository, commit `{COMMIT[:12]}` ({CDATE}). Table data from each BIP's header preamble at the same commit.")
w("[^bip2]: Dashjr, Luke. [\"BIP 2: BIP process, revised\"](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki). *Bitcoin Improvement Proposals*.")
w("[^bip3]: Murch. [\"BIP 3: Updated BIP Process\"](https://github.com/bitcoin/bips/blob/master/bip-0003.md). *Bitcoin Improvement Proposals*.")
w("[^bip123]: Lombrozo, Eric. [\"BIP 123: BIP Classification\"](https://github.com/bitcoin/bips/blob/master/bip-0123.mediawiki). *Bitcoin Improvement Proposals*.")
w("")

open(os.path.join(SITE, "_wiki", "BIP_index.md"), "w", encoding="utf-8", newline="\n").write("\n".join(out))
print("bips", len(bips), counts)
print("problems:", *problems, sep="\n  ") if problems else print("problems: none")
for b in bips[:3] + [x for x in bips if x["num"] in (173, 341, 350)]:
    print(b)
