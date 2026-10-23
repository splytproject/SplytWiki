# CLAUDE.md — working on SplytWiki

Instructions for every Claude Code session in this repository. Read this file in full before editing anything. The long-form article standard is in [`docs/STYLE.md`](docs/STYLE.md); the copy-ready skeleton is [`_templates/deep-article.md`](_templates/deep-article.md).

## 1. Project summary

SplytWiki is a Wikipedia-style crypto encyclopedia. It is a plain Jekyll site built by **GitHub Pages** (Jekyll 3.10, `github-pages` gem, whitelisted plugins only: `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-redirect-from`). There is no build step on the maintainers' machines. Every push to `main` rebuilds <https://splytproject.github.io/SplytWiki/>.

| Path | What it holds |
|---|---|
| `_wiki/<Title_with_underscores>.md` | English articles (the `wiki` collection, output to `/wiki/<Title>/`) |
| `_wiki/glossary/<Term>.md` | One dictionary-style page per glossary term (`layout: glossary`, `glossary: true`) |
| `de/wiki/`, `es/wiki/` | German and Spanish translations (`ref:` points at the English title) |
| `_layouts/` | `default`, `article`, `page`, `glossary` |
| `_includes/` | `infobox.html`, `figure.html`, header, footer, SEO and language includes |
| `_data/` | Main Page content, "On this day", interface strings (`i18n.yml`) |
| `assets/css/splytwiki.css`, `assets/js/splytwiki.js` | The whole design and all client-side behaviour |
| `assets/img/` | Article images and coin emblems (original SplytWiki SVGs, not official logos) |
| `reports/` | Maintenance scripts and audit output (not published) |
| `_audit/` | Article audit and fact-check reports (not published) |
| `docs/`, `_templates/` | Editorial standard and article template (not published) |

**Preview locally (optional).** With Ruby installed: `bundle install` then `bundle exec jekyll serve`, and open <http://localhost:4000/SplytWiki/>. Without Ruby, push and check the "pages build and deployment" run in the Actions tab, or `gh api repos/splytproject/SplytWiki/pages/builds/latest`.

### Front matter

```yaml
title: Bitcoin halving                # page heading
description: One-line summary          # search, previews, meta description
aliases: [Halving, Halvening]          # extra search terms
categories: [Bitcoin, Monetary policy]
updated: 2026-10-23                    # shown as "last edited"
last_modified: 2026-10-23
infobox:                               # optional; rendered by _includes/infobox.html
  image: bitcoin.svg                   # file in assets/img
  caption: Bitcoin emblem (SplytWiki illustration)
  rows:
    - header: Overview                 # header rows start a section
    - Interval: "Every 210,000 blocks" # Label: value (Markdown allowed)
# Deep-article fields (defaults in _config.yml; see docs/STYLE.md)
verified_against: "Bitcoin Core v30.0" # software or spec version the facts were checked against
last_verified: 2026-10-23              # date of that check
difficulty: advanced                   # intro | intermediate | advanced
prerequisites: [Bitcoin, Proof_of_work] # article slugs a reader should know first
source_repos: [bitcoin/bitcoin, bitcoin/bips] # GitHub owner/repo the article explains
```

Optional: `hatnote`, `seo_title`, `math: true`, `redirect_from`.

### Links and references

- Article to article: `[Ethereum](../Ethereum/)`. Article to glossary: `[nonce](../glossary/Nonce/)`. Glossary entry to article: `../../Bitcoin/`. Never use absolute site URLs for internal links.
- References are kramdown footnotes: `[^key]` in the text and `[^key]: source` lines under `## References`. `splytwiki.js` renders them as Wikipedia-style numbered references. Every `[^key]` must be defined and every definition used.
- Citation format: `Author (date). ["Title"](URL). *Publisher*.` Code and specs: link a pinned tag or commit, never `master`/`main`.

## 2. House style (all articles)

- **Neutral point of view.** No promotion, predictions or "not financial advice" filler. Criticism and open disputes sit alongside benefits.
- **No prices, market capitalisations or rankings.** They go stale within hours. Do not write "second-largest", "top 10" or price milestones.
- **Sentences under 25 words.** Define jargon once, on first use, and link it to its article or glossary entry.
- **Dates.** Anything that changes is marked "as of *month year*".
- **Order.** Infobox → `> **In plain terms:**` box → lead → sections → Developer notes (or the deep-article sections) → See also → References.
- **Team wording.** The people who run SplytWiki are the **maintainers**, never the owners. Readers contact them through GitHub Issues on `splytproject/SplytWiki`.

## 3. THE DEPTH RULE

Every article must answer **"how does it work under the hood?"**, not only "what is it?". If a section could appear unchanged on the first page of a Google search, it is too shallow. Mechanics come step by step, with the data structures, messages, parameters and state changes involved. Technical articles follow the section skeleton in [`docs/STYLE.md`](docs/STYLE.md); sections that do not apply are skipped, never padded.

## 4. SOURCE RULES (non-negotiable)

1. **Code is fetched, never remembered.** Every code excerpt is copied from the real upstream repository, fetched during the session, at a pinned release tag or commit hash. Excerpts stay under about 25 lines and show the file path, line range and permalink (`github.com/OWNER/REPO/blob/<TAG-OR-SHA>/path#Lx-Ly`). Note the upstream licence (for example "MIT, Bitcoin Core").
2. **Every number has a source and a version.** Each parameter (slashing quotients, block weights, gas costs, epoch lengths, intervals) cites the spec or source file it comes from and the version it applies to, for example "as of Bitcoin Core v30.0" or "as of consensus-specs Electra".
3. **Primary sources first:** source code, BIPs, EIPs, BOLTs, consensus-specs, white papers, mailing-list posts, developer-call notes, court filings, regulators' documents and peer-reviewed papers. Secondary sources (reputable journalism) only for history and context. Forum threads and other wikis are not sources.
4. **If a fact cannot be verified, leave it out or mark it** `[citation needed]`. Never guess. A plausible wrong number costs more trust than a missing one.
5. **Check links before committing.** Use pinned GitHub permalinks. sec.gov and some news sites block scripted requests; confirm those in a browser or with a fetch tool rather than deleting them.

## 5. NEUTRALITY WITH TEETH

Describe debates with **named sides**, their actual arguments and links to their own words. Explain engineering trade-offs bluntly: "this raises throughput but raises node hardware requirements, which reduces who can verify". Attribute opinions ("Peter Todd argued…", "the Bitcoin Core maintainers replied…"); do not take sides on contested questions, and do not deliver verdicts on open ones. Report what actually happened and what the data shows, with sources.

## 6. Writing style

- Precise and dense. No filler, no marketing words ("revolutionary", "game-changing", "seamless", "cutting-edge"), no "In conclusion", no rhetorical questions.
- Short paragraphs (two to four sentences). Prefer a table or a numbered list for parameters and steps.
- Use the glossary: link each glossary term once per article. Add a glossary entry when a needed term has none.
- British or American spelling consistently within an article; keep the existing article's choice.

## 7. Scope rules

- **Never touch `de/` or `es/`** unless the task explicitly asks for translations.
- Do not invent images of real logos or people. Coin emblems are SplytWiki's own drawings; captions say "(SplytWiki illustration)".
- Keep CSS and JavaScript dependency-free. Libraries (KaTeX, Mermaid) load from a CDN only on pages that use them.

## 8. Before every commit

1. Run the style check on the articles you changed:
   `python -I reports/check_style.py _wiki/Article.md [...]`
   It must report no undefined or unused footnotes, no missing internal links and no sentences over 25 words.
2. For larger changes, run `python -I reports/audit.py . reports/article-audit.csv` and read the new rows.
3. Stage files **by path**. Never `git add -A` blindly: untracked local notes and prompt files must never be committed.
4. Bump `updated` and `last_modified` on every article whose content changed; bump `last_verified` only after re-checking facts against sources.
5. After pushing, confirm the GitHub Pages build finished (`built`) and spot-check the live page.
