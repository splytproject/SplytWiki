<div align="center">

<img src="assets/img/logo.svg" alt="SplytWiki logo" width="96" height="96">

# SplytWiki

**The free crypto encyclopedia.**

Neutral, sourced articles about cryptocurrency, Bitcoin, blockchain technology and decentralized finance, in a familiar encyclopedia layout.

[![Website](https://img.shields.io/badge/website-splytproject.github.io%2FSplytWiki-36c)](https://splytproject.github.io/SplytWiki/)
[![Content licence: CC BY-SA 4.0](https://img.shields.io/badge/content-CC%20BY--SA%204.0-lightgrey)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Built with Jekyll](https://img.shields.io/badge/built%20with-Jekyll-c00)](https://jekyllrb.com/)
[![Hosted on GitHub Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-222)](https://pages.github.com/)

[**Read SplytWiki**](https://splytproject.github.io/SplytWiki/) · [**Contribute**](#contributing) · [**Report an issue**](https://github.com/splytproject/SplytWiki/issues/new)

</div>

---

## Contents

- [About](#about)
- [What's on the site](#whats-on-the-site)
- [Features](#features)
- [Contributing](#contributing)
- [Writing an article](#writing-an-article)
- [Translating an article](#translating-an-article)
- [Project structure](#project-structure)
- [Running the site locally](#running-the-site-locally)
- [Deployment](#deployment)
- [Maintenance scripts](#maintenance-scripts)
- [Editorial policies](#editorial-policies)
- [Maintainers and contact](#maintainers-and-contact)
- [Licence](#licence)

---

## About

SplytWiki explains crypto the way a good encyclopedia explains any subject: clearly, neutrally and with sources. Every article is written for two readers at once. A short **"In plain terms"** box serves beginners, and the body gives the full detail, down to specifications, court filings and developer notes.

The site is a static [Jekyll](https://jekyllrb.com/) site hosted free on GitHub Pages. It has no database, no user accounts, no tracking and no build step on your computer. Every article is a Markdown file in this repository, so the whole encyclopedia and its edit history are public.

## What's on the site

| | |
|---|---|
| **Articles** | 75 in English, in [`_wiki/`](_wiki/) |
| **Translations** | German and Spanish versions of Bitcoin and Ethereum |
| **Languages in the interface** | English, Deutsch, Español |

**Topics covered**

- **Foundations:** cryptocurrency, Bitcoin, Ethereum, blockchain, wallets, stablecoins, NFTs, DeFi, DAOs, and a 120-term [glossary](_wiki/Crypto_glossary.md).
- **Bitcoin protocol:** proof of work and mining, SegWit, Taproot, Schnorr signatures, Script and Miniscript, PSBT, the mempool, AssumeUTXO, BIP-324, compact block filters, covenant proposals, a full BIP index and Bitcoin Core release history.
- **Layer 2:** the Lightning Network, channels and routing.
- **Markets and history:** bitcoin ETFs, the halving, cryptocurrency history, and case studies of Mt. Gox, FTX and the Bybit hack.
- **Security:** seed phrases and self-custody, cryptocurrency scams, quantum computing and Bitcoin.
- **Regulation and tax:** an overview, plus country guides for India, the United States, the United Kingdom, the European Union, Japan, Singapore and the United Arab Emirates.

## Features

SplytWiki follows the layout of Wikipedia's current desktop design, built from scratch with one CSS file and one dependency-free JavaScript file.

- **Search** with instant suggestions, a full-text results page and bolded snippets.
- **Table of contents** in a sticky sidebar, highlighting the section you're reading.
- **Infoboxes** generated from each article's front matter.
- **Numbered references** from Markdown footnotes, collected under *References*.
- **Link previews** that show an article summary on hover.
- **Red links** for articles that don't exist yet, inviting contributions.
- **Sortable tables**, random article, categories and an A–Z contents page.
- **Appearance settings** for text size, width and light or dark mode, saved in the browser.
- **Language switcher** and `hreflang` tags linking translations.
- **SEO and sharing:** canonical URLs, Open Graph and Article structured data, a sitemap and a default share image.
- **Responsive** down to phone width, with print styles.

## Contributing

Everyone can help, and you don't need to code.

### Report an error or suggest an article

[Open an issue](https://github.com/splytproject/SplytWiki/issues/new). Include:

1. the article's name, or the article you'd like to see;
2. what should change, and why;
3. at least one reliable source.

The **Suggest edit** tab on every article opens the site's [Contribute page](https://splytproject.github.io/SplytWiki/contribute/), which fills in an issue for you.

### Edit an article yourself

1. Open the article's file in [`_wiki/`](_wiki/) and choose **Edit** (the pencil icon). GitHub will fork the repository for you.
2. Make your change, following the [house style](#house-style) below.
3. Choose **Propose changes**, then **Create pull request**, and explain what you changed and why.

A maintainer will review your pull request and either merge it or reply with questions.

> **Never post a seed phrase, private key or password** in an issue or pull request. Issues and pull requests are public.

### House style

| Rule | Detail |
|---|---|
| **Neutral point of view** | No promotion, price talk, predictions or "not financial advice" filler. Include criticisms and open disputes alongside benefits. |
| **Sources for every claim** | Prefer primary sources: BIPs and specifications, source code and release notes, mailing-list posts, court filings, regulators' documents, official statistics and peer-reviewed papers. Forum threads are not primary sources. |
| **Plain English** | Sentences under 25 words. Define jargon on first use and link it to its article. |
| **Dates** | Mark anything that changes over time with "as of *month year*". |
| **Structure** | Infobox → "In plain terms" box → lead → sections → "Developer notes" (where relevant) → See also → References. |

## Writing an article

Technical deep dives follow the section skeleton and checklist in [`docs/STYLE.md`](docs/STYLE.md); start from [`_templates/deep-article.md`](_templates/deep-article.md). The rules in [`CLAUDE.md`](CLAUDE.md) apply to every edit, whether made by hand or with an AI assistant.

Create `_wiki/Article_title.md`, using underscores for spaces. The page appears at `/wiki/Article_title/`.

```markdown
---
title: Bitcoin halving
description: One-line summary used in search, link previews and Google results
aliases: [Halving, Halvening]
categories: [Bitcoin, Monetary policy]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: bitcoin.svg
  caption: Bitcoin halving
  rows:
    - header: Overview
    - Interval: "Every 210,000 blocks"
    - Next halving: "Block 1,050,000 (expected 2028)"
---

> **In plain terms:** Two or three sentences a beginner can follow.

The **Bitcoin halving** is the scheduled cut in the block subsidy…[^bip42]

## History

Text with a link to another article: [Proof of work](../Proof_of_work/).

## See also

- [Bitcoin](../Bitcoin/)

## References

[^bip42]: Wuille, Pieter (2014). ["BIP 42: A finite monetary supply for Bitcoin"](https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki). *Bitcoin Improvement Proposals*.
```

**Front-matter fields**

| Field | Purpose |
|---|---|
| `title` | Page heading. |
| `description` | Summary for search suggestions, link previews and search engines. |
| `aliases` | Other names that should find this article in search. |
| `categories` | Shown in the categories box and on the Categories page. |
| `updated` / `last_modified` | Date shown as "This page was last edited on…". |
| `infobox` | Optional summary box. `header:` rows start a section; other rows are `Label: value`. |
| `hatnote` | Optional italic note above the article, such as "For other uses, see…". |
| `seo_title` | Optional search-engine title, if it should differ from `title`. |
| `verified_against` | Deep articles: the software or spec version the facts were checked against, for example `Bitcoin Core v30.0`. |
| `last_verified` | Deep articles: the date of that check. |
| `difficulty` | Deep articles: `intro`, `intermediate` or `advanced`. |
| `prerequisites` | Deep articles: slugs of articles to read first. |
| `source_repos` | Deep articles: GitHub `owner/repo` names the article explains. |

**Formatting tips**

- Link to other articles with relative links: `[Ethereum](../Ethereum/)`.
- Add references as footnotes: `[^name]` in the text and `[^name]: source` under `## References`.
- `##` headings are sections and `###` are subsections; both appear in the table of contents.
- Add `{: .sortable}` on the line after a table to make it sortable.
- Maths, highlighted source excerpts, Mermaid diagrams and callout boxes are documented in [`docs/COMPONENTS.md`](docs/COMPONENTS.md).
- Put images in [`assets/img/`](assets/img/) and place them with `{% include figure.html image="file.svg" caption="…" %}`.

## Translating an article

Translations live in [`de/wiki/`](de/wiki/) (German) and [`es/wiki/`](es/wiki/) (Spanish), with the same file name as the English article.

1. Copy the English file into the language folder.
2. Add `ref:` to the front matter, set to the English article's title. This links the language versions.
3. Translate the text, description and infobox rows. Keep `categories` in English; they are translated automatically from [`_data/i18n.yml`](_data/i18n.yml).
4. Use the translated headings: `## Einzelnachweise` (German) or `## Referencias` (Spanish) for references.

Interface text such as tab names, dates and the footer is in [`_data/i18n.yml`](_data/i18n.yml). Languages shown in the header menu are listed under `languages:` in [`_config.yml`](_config.yml).

## Project structure

```
SplytWiki/
├── _config.yml           Site settings: title, URL, repository, languages, plugins
├── _wiki/                English articles (one Markdown file each)
├── de/, es/              Translated articles and project pages
├── _layouts/             Page templates: default, article, page
├── _includes/            Header, footer, infobox, figures, SEO tags, language switcher
├── _data/                Main Page content, "On this day" events, interface translations
├── assets/
│   ├── css/splytwiki.css The entire visual design, light and dark
│   ├── js/splytwiki.js   Search, contents, references, previews, appearance, sorting
│   └── img/              Logo, article images, social share image
├── index.html            Main Page
├── about.md, contribute.md, contact.md, privacy.md, disclaimer.md
├── contents.html         All articles A–Z
├── categories.html       Articles by category
├── search.html           Search results page
├── search.json           Search index, generated at build time
├── random.html           Random article
├── 404.html              "SplytWiki does not have an article with this exact name"
├── reports/              Maintenance scripts (not published)
├── _audit/               Article audit, rebuild backlog and fact-checks (not published)
├── docs/                The deep-article standard and component guide (not published)
├── _templates/           Copy-ready article template (not published)
├── CLAUDE.md             Editorial rules for AI-assisted editing sessions (not published)
└── Gemfile               Only needed for local preview
```

## Running the site locally

GitHub Pages builds the site automatically, so local preview is optional.

1. Install [Ruby](https://www.ruby-lang.org/) with its development kit (on Windows, use [RubyInstaller](https://rubyinstaller.org/) "with Devkit").
2. From the repository folder, run:

   ```bash
   bundle install
   bundle exec jekyll serve
   ```

3. Open <http://localhost:4000/SplytWiki/>.

The [`Gemfile`](Gemfile) uses the `github-pages` gem, so local builds match the live site's Jekyll version and plugins.

## Deployment

Every push to `main` triggers GitHub Pages to rebuild and publish the site at <https://splytproject.github.io/SplytWiki/>. Build status appears in the repository's **Actions** tab.

To move to a custom domain later, set `url` to the domain and `baseurl` to `""` in [`_config.yml`](_config.yml), add a `CNAME` file, and point the domain's DNS at GitHub Pages. All internal links use `relative_url`, so nothing else needs to change.

## Maintenance scripts

These scripts in [`reports/`](reports/) are not part of the website. Run them with Python 3.

| Script | What it does |
|---|---|
| `audit.py` | Checks every article, including translations, for uncited claims, broken or unused footnotes, broken internal links and anchors, forum threads used as sources, empty sections, leftover editor notes and broken external links. It writes the results to a CSV file. Usage: `python -I reports/audit.py . reports/article-audit.csv` |
| `check_style.py` | Checks footnotes (defined, used, valid names), internal links and the 25-word sentence rule. Usage: `python -I reports/check_style.py [files]` (no files = every English article). |
| `build_bip_index.py` | Rebuilds [`_wiki/BIP_index.md`](_wiki/BIP_index.md) from a local checkout of [bitcoin/bips](https://github.com/bitcoin/bips). |

## Editorial policies

- **Neutrality.** Articles describe; they don't promote. Significant criticism is always included.
- **No paid content.** Projects can't pay to be covered, change an article or remove criticism. Suggestions written on behalf of a project must say so.
- **No live prices.** Prices and market capitalisations go out of date within hours, so articles avoid them.
- **Not advice.** SplytWiki is an educational reference. Nothing on it is financial, investment, legal or tax advice. See the [general disclaimer](https://splytproject.github.io/SplytWiki/disclaimer/).
- **Privacy.** The site sets no tracking or advertising cookies; appearance settings stay in your browser. See the [privacy policy](https://splytproject.github.io/SplytWiki/privacy/).

## Maintainers and contact

SplytWiki is run by a small team of maintainers. The way to reach them is [**GitHub Issues**](https://github.com/splytproject/SplytWiki/issues). Use an issue for corrections, article requests, questions, and press or legal enquiries (start the title with "Press" or "Legal").

The maintainers will never ask for your seed phrase, private keys or money. Anyone claiming to be from SplytWiki and offering to "recover" crypto is running a scam.

## Licence

Article text is available under the [Creative Commons Attribution-ShareAlike 4.0 International licence](https://creativecommons.org/licenses/by-sa/4.0/). You may share and adapt it, including commercially, if you credit SplytWiki and share your changes under the same licence.

The SplytWiki name and logo are not covered by that licence. SplytWiki is an independent project and is not affiliated with Wikipedia or the Wikimedia Foundation.
