# SplytWiki

**SplytWiki, the free crypto encyclopedia.** It's an online encyclopedia about cryptocurrency, blockchain and decentralized finance. It looks and feels like Wikipedia, and A-ADS ([aads.com](https://aads.com)) ads pay for it.

- **Hosting:** GitHub Pages, at `https://splytproject.github.io/SplytWiki/`.
- **Engine:** Jekyll. GitHub Pages builds the site from the Markdown files every time you push, so there's nothing to install.
- **Size:** one CSS file, one small JavaScript file, no frameworks and no web fonts.

> **Status:** the whole site is written (layouts, design, JavaScript, Main Page, special pages, images and 14 articles). It has not been built or tested yet; the first real build will happen on GitHub Pages. See [Build plan & progress](#build-plan--progress).

---

## Contents
1. [How the site works](#how-the-site-works)
2. [Folder structure](#folder-structure)
3. [Writing an article](#writing-an-article)
4. [Translating an article](#translating-an-article)
5. [Setting up A-ADS ads](#setting-up-a-ads-ads)
6. [Publishing on GitHub Pages](#publishing-on-github-pages)
7. [Previewing on your own computer (optional)](#previewing-on-your-own-computer-optional)
8. [Build plan & progress](#build-plan--progress)

---

## How the site works

| Piece | What it does |
|---|---|
| `_wiki/*.md` | One Markdown file per article. Each one becomes a page at `/wiki/<File_name>/`. |
| `_layouts/` | Page templates: the header, sidebars and footer that wrap every page. |
| `_includes/` | Reusable parts: menu, infobox, footer, ad slots. |
| `assets/css/splytwiki.css` | The whole visual design, with light and dark mode. |
| `assets/js/splytwiki.js` | Search suggestions, table of contents, references, link previews, appearance settings. |
| `_config.yml` | Site name, web address, ad settings. |

**Look and layout.** The design follows Wikipedia's current desktop design:
- A header with the ☰ menu, logo and search box.
- A sticky **Contents** list on the left.
- The article in the middle, with an infobox and `[1]`-style references.
- An **Appearance** panel on the right (text size, width, light/dark) with an ad below it.
- A grey **Categories** box and a "last edited" footer at the bottom.

The logo and wordmark belong to SplytWiki. Wikipedia's puzzle globe and wordmark are not used because they are Wikimedia trademarks.

---

## Folder structure

```
SplytWiki/
├─ _config.yml              site settings (name, URL, baseurl, ads)
├─ _layouts/
│  ├─ default.html          page shell: header, left column, content, right column, footer
│  ├─ article.html          article: title, tabs, infobox, body, in-article ad, categories
│  └─ page.html             project and special pages (About, Contents, Search…)
├─ _includes/
│  ├─ head.html             <head>: title, SEO tags, CSS, saved appearance settings
│  ├─ header.html           menu button, logo, search box
│  ├─ main-menu.html        Main page, Contents, Categories, Random, About, Contact…
│  ├─ appearance.html       Text / Width / Color settings panel
│  ├─ infobox.html          grey summary box built from an article's front matter
│  ├─ figure.html           image with caption ("thumbnail")
│  ├─ footer.html           last edited, licence, footer links
│  ├─ ad-slot.html          wraps an ad, or shows a placeholder if empty
│  └─ ads/
│     ├─ top.html           ← paste A-ADS code: banner above the page title
│     ├─ sidebar.html       ← paste A-ADS code: right column
│     ├─ article.html       ← paste A-ADS code: inside articles and on the Main Page
│     └─ head.html          optional extra <head> code (verification tags)
├─ _wiki/                   the articles (Bitcoin.md, Ethereum.md, …)
├─ _data/
│  ├─ mainpage.yml          featured articles, "Did you know…", featured picture
│  └─ on_this_day.yml       dated events in crypto history
├─ assets/
│  ├─ css/splytwiki.css
│  ├─ js/splytwiki.js
│  └─ img/                  logo.svg and article images (SVG)
├─ index.html               Main Page
├─ about.md, contribute.md, contact.md, privacy.md, disclaimer.md
├─ contents.html            all articles A–Z
├─ categories.html          every category and its articles
├─ search.html              search results page
├─ random.html              jumps to a random article
├─ search.json              search index, generated automatically
├─ 404.html                 "SplytWiki does not have an article with this exact name"
└─ Gemfile                  only for previewing locally (GitHub ignores it)
```

---

## Writing an article

Create a file in `_wiki/`. Use underscores instead of spaces in the file name, for example `_wiki/Proof_of_stake.md`. The page will be at `/wiki/Proof_of_stake/`.

```markdown
---
title: Bitcoin
description: First decentralized cryptocurrency
categories: [Cryptocurrencies, Bitcoin]
updated: 2026-10-11
hatnote: "For the unit of currency, see [Bitcoin (unit)](../Bitcoin_(unit)/)."
infobox:
  image: bitcoin.svg
  caption: Bitcoin logo
  rows:
    - header: Denominations
    - Symbol: "₿, BTC"
    - Smallest unit: satoshi
    - header: Development
    - Original author: "[Satoshi Nakamoto](../Satoshi_Nakamoto/)"
---
**Bitcoin** (₿) is the first decentralized cryptocurrency.[^whitepaper]

## History
Text of the section…

{% include figure.html image="blockchain-diagram.svg" caption="How blocks are linked" width="300" %}

Main article: [Bitcoin halving](../Bitcoin_halving/)
{: .hatnote}

## See also
- [Ethereum](../Ethereum/)

## References

[^whitepaper]: Nakamoto, Satoshi (2008). ["Bitcoin: A Peer-to-Peer Electronic Cash System"](https://bitcoin.org/bitcoin.pdf).
```

**Front matter fields** (the part between the `---` lines):

| Field | Purpose |
|---|---|
| `title` | Article title, shown as the page heading. |
| `description` | One-line summary. Used in search suggestions, link previews and Google results. |
| `categories` | Shown in the Categories box and listed on the Categories page. |
| `updated` | Date shown as "This page was last edited on…". |
| `hatnote` | Optional italic note above the article. |
| `infobox` | Optional grey summary box. `header:` rows start a section, other rows are `Label: Value`. |

**Writing rules:**
- **Links to other articles** are relative: `[Ethereum](../Ethereum/)`. If the linked article doesn't exist yet, it shows red, like on Wikipedia.
- **References** use footnotes: put `[^name]` in the text and `[^name]: source…` at the bottom. They display as `[1]`, `[2]`… and are listed under the `## References` heading.
- **Headings:** `##` is a section and `###` is a subsection. Both appear in the Contents sidebar automatically.
- **Tables:** normal Markdown tables are styled like Wikipedia tables.
- **Images** go in `assets/img/`. Place them in the text with `{% include figure.html … %}`.
- **The in-article ad** goes in automatically before the article's second section. You don't add it yourself.

---

## Translating an article

Translations live in `de/wiki/` (German) and `es/wiki/` (Spanish). The file name must match the English one, for example `de/wiki/Bitcoin.md` for `_wiki/Bitcoin.md`, and the page appears at `/de/wiki/Bitcoin/`.

1. Copy the English file into `de/wiki/` or `es/wiki/`.
2. Add `ref:` to the front matter, set to the **English article's title**, for example `ref: Bitcoin`. This is what links the language versions together.
3. Translate the `description`, `hatnote`, infobox rows and the article text. Keep `categories` in English: they are translated automatically using `_data/i18n.yml`.
4. Use `## Einzelnachweise` (German) or `## Referencias` (Spanish) as the references heading, and translate "See also" / "External links".

Once a translation exists, the article shows a **Languages** button next to its title, and Google is told about the other versions. Links inside a translation to articles that aren't translated yet go to the English page automatically. Interface text for each language, such as the tabs, footer and dates, is in `_data/i18n.yml`.

Translated so far: **Bitcoin** and **Ethereum** (German and Spanish).

---

## Setting up A-ADS ads

There are three ad slots. Each has a **desktop** unit and a **mobile** unit in its own file. The site inserts only the unit that matches the visitor's screen (mobile below 1000px wide), so a hidden ad never loads.

| Slot | Desktop file | Mobile file | Where it appears | A-ADS size | Units |
|---|---|---|---|---|---|
| Top banner | `_includes/ads/top.html` | `_includes/ads/top-mobile.html` | Above the title on every page | Adaptive | 2458811 / 2458512 |
| Sidebar | `_includes/ads/sidebar.html` | `_includes/ads/sidebar-mobile.html` | Right column on wide screens; end of each article on narrow screens | Fixed 120×600 | 2458513 / 2458812 |
| In-article | `_includes/ads/article.html` | `_includes/ads/article-mobile.html` | Inside articles, and between boxes on the Main Page | Fixed 300×250 | 2458514 / 2458813 |

1. Sign in at [aads.com](https://aads.com) and create **one ad unit per slot and device** for your site address (`https://splytproject.github.io/SplytWiki/`).
2. Copy each unit's embed code and paste it into the matching file, **below** the comment block at the top.
3. Commit and push. The ad then appears on every page that uses that slot.
4. Once all slots are filled, set `show_placeholders: false` in `_config.yml`. Until then, empty slots show a dashed "Advertisement" box so you can see where ads will go.

Ads only load when the site is served over the web (https). They won't show if you open an HTML file directly from your computer.

---

## Publishing on GitHub Pages

*(We'll do this once the website is finished.)*

1. Create a GitHub repository named exactly **`SplytWiki`**. It must match `baseurl: "/SplytWiki"` in `_config.yml`.
2. In `_config.yml`, replace `USERNAME` in `url:` with your GitHub username.
3. Push this folder to the repository's `main` branch.
4. On GitHub, open the repo, go to **Settings → Pages**, and under "Build and deployment" choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
5. After a minute or two the site is live at `https://splytproject.github.io/SplytWiki/`. The **Actions** tab shows each build.

**Custom domain later** (for example `splytwiki.com`): set `baseurl: ""` and `url: "https://splytwiki.com"` in `_config.yml`, add a file called `CNAME` containing the domain, and point your domain's DNS at GitHub Pages.

---

## Previewing on your own computer (optional)

GitHub builds the site for you, so this step is optional. To preview before pushing you need Ruby:

1. Install Ruby from [rubyinstaller.org](https://rubyinstaller.org/), choosing the "with Devkit" version.
2. In this folder, run:
   ```
   bundle install
   bundle exec jekyll serve
   ```
3. Open `http://localhost:4000/SplytWiki/`.

Docker is another option, but on this computer it needs WSL (Windows Subsystem for Linux), which isn't installed.

---

## Build plan & progress

### Goal
The goal is a lightweight Wikipedia-style crypto encyclopedia on GitHub Pages, with A-ADS ad slots and around 14 well-sourced starter articles. Adding a new article should only take one Markdown file.

### 1. Foundation ✅ done
- [x] `_config.yml`: site name, tagline, `baseurl: /SplytWiki`, `wiki` collection at `/wiki/<name>/`, footnote settings, ad settings, `jekyll-seo-tag` + `jekyll-sitemap` plugins
- [x] `Gemfile` for optional local preview

### 2. Layouts & shared parts ✅ done
- [x] `_layouts/default.html`: three-column page shell (Contents/menu · content · Appearance + sidebar ad), top ad, footer
- [x] `_layouts/article.html`: title, Article/Read/Suggest edit tabs, "From SplytWiki…", hatnote, infobox, in-article ad before the 2nd section, Categories box
- [x] `_layouts/page.html`: project and special pages
- [x] `_includes/`: `head`, `header` (menu, logo, search), `main-menu`, `appearance`, `footer`, `infobox`, `figure`
- [x] `_includes/ad-slot.html` + `ads/top`, `ads/sidebar`, `ads/article`, `ads/head`

### 3. Visual design ✅ done
- [x] `assets/css/splytwiki.css`:
  - Wikipedia colours and type (serif headings, `#36c` links, grey infobox)
  - Header, search box and suggestions
  - Sticky contents list, Appearance panel
  - Article content, infobox, thumbnails, tables, `[1]` references, category box
  - Ad slots and placeholders, footer, link-preview cards
  - Main Page boxes (green, blue, purple), search results, Contents and Categories lists
  - Dark mode
  - Responsive breakpoints at 1200, 1000 and 720px, plus print styles

### 4. JavaScript ✅ done
`assets/js/splytwiki.js`, plain JavaScript with no libraries:
- [x] Appearance settings: text size, width and light/dark, saved in the browser
- [x] Header buttons on small screens: search, appearance, contents (with overlay)
- [x] Search suggestions while typing, from `search.json`: title, description, thumbnail, "Search for pages containing…"
- [x] Search results page: full-text match, bold snippets, "Results 1 – N of N"
- [x] Contents sidebar built from the `##`/`###` headings, highlighting the current section while scrolling
- [x] References: move the footnote list under "References", with `^` back-links at the front like Wikipedia
- [x] Red links for articles that don't exist yet; external-link icon on outside links
- [x] Hover link previews (excerpt and image), turned off on touch screens
- [x] Random article
- [x] Main Page: featured article of the day, "On this day" events for the visitor's date
- [x] Contribute page reads `?page=` / `?new=`; 404 page shows the missing title

### 5. Main Page & special pages ✅ done
- [x] `index.html` Main Page:
  - Welcome banner ("…the free crypto encyclopedia that anyone can read. *N* articles")
  - Green box: **From today's featured article** + **Did you know…**
  - Blue box: **Crypto basics** + **On this day**
  - Purple box: **Today's featured picture**
  - **Browse by category** and **Other areas of SplytWiki**
- [x] `_data/mainpage.yml` and `_data/on_this_day.yml`
- [x] `contents.html` (all pages A–Z), `categories.html` (each category with its articles), `search.html`, `random.html`, `404.html`
- [x] `search.json`: index generated automatically from all articles
- [x] Article list embedded in each page, used for red links and Random

### 6. Project pages ✅ done
- [x] About SplytWiki
- [x] Contribute (how to suggest edits and new articles)
- [x] Contact
- [x] Privacy policy (names A-ADS as the third-party ad network)
- [x] General disclaimer (not financial advice)

### 7. Images ✅ done
Original SVGs in `assets/img/`:
- [x] `logo.svg`: grey "split coin" logo, also used as the favicon
- [x] `bitcoin.svg`, `ethereum.svg`
- [x] `blockchain-diagram.svg` (also the featured picture)
- [x] `wallet-keys.svg` (private key → public key → address)

### 8. Starter articles ✅ done
14 articles, each with an infobox where it fits, sections, references to primary sources (whitepapers, ethereum.org, BIPs/EIPs, academic papers) and categories. They contain no live prices or market caps, because those go out of date quickly.

- [x] Cryptocurrency
- [x] Bitcoin
- [x] Ethereum
- [x] Blockchain
- [x] Satoshi Nakamoto
- [x] Proof of work
- [x] Proof of stake
- [x] Smart contract
- [x] Stablecoin
- [x] Decentralized finance
- [x] Non-fungible token
- [x] Cryptocurrency wallet
- [x] Bitcoin halving
- [x] Solana

### Add Translations
in Nigerian Pidgin, Dutch, Turkish, Arabic, Spanish, and German.

### 9. Testing ⏳ to do
- [ ] Build the site, either with Ruby/Jekyll locally or by pushing to GitHub Pages, and fix any errors
- [ ] Check the Main Page, an article, Contents, Categories, Search, the About page and a 404 under `/SplytWiki/`, with no broken links or images
- [ ] Features:
  - Typing "eth" suggests Ethereum
  - Searching "halving" lists results
  - Random works
  - The contents list highlights the current section while scrolling
  - Link previews appear
  - Light/dark and text size persist after a reload
- [ ] Screen widths 1400, 1100, 800 and 375px: no sideways scrolling, and the small-screen buttons work
- [ ] Ad placeholders show in all three slots; real ads appear once A-ADS code is pasted and the site is live
- [ ] CSS + JS total stays under about 30 KB

### 10. Publish ⏳ after the site is finished
- [ ] Create the GitHub repo, push, turn on Pages (see [Publishing on GitHub Pages](#publishing-on-github-pages))
- [ ] Create the A-ADS ad units for the live URL and paste in the codes
- [ ] Turn off ad placeholders

---

## Licence

Article text is published under the [Creative Commons Attribution-ShareAlike 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/). Nothing on SplytWiki is financial or investment advice.
