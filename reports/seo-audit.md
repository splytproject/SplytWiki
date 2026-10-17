# SplytWiki SEO audit

**Date:** 17 October 2026
**Site:** https://splytproject.github.io/SplytWiki/ (live, GitHub Pages status "built")
**Pages checked:** homepage, Bitcoin, Ethereum, Cryptocurrency, Blockchain, Decentralized finance. Checked on the live HTML plus the source files.

## What's already good

- Every page returns 200 quickly (0.4–0.9 s) and is small (21–37 KB HTML). There are no web fonts or frameworks, and ads now load only when scrolled into view.
- Each page has a unique `<title>`, a meta description, a canonical URL, Open Graph tags and JSON-LD.
- There is one H1 per page and a clean H2 structure (6–7 sections per article).
- `sitemap.xml` is generated automatically.
- Articles are long enough to rank (about 800–1,250 words) and cite primary sources.
- Internal linking is strong. Smart contract has 30 inbound links, Blockchain 26, Bitcoin and Ethereum 21 each.
- Translated articles carry `hreflang` tags.

## Prioritized fixes

### P0: do first (blocks traffic or exposes things)

| # | Issue | Fix | Status |
|---|---|---|---|
| 1 | **The site isn't registered with Google or Bing.** It's a project site, so `splytproject.github.io/robots.txt` returns 404 and can't advertise the sitemap. | In [Google Search Console](https://search.google.com/search-console), add a **URL-prefix** property for `https://splytproject.github.io/SplytWiki/`. Verify it with the **HTML tag** method by pasting the `<meta>` tag into `_includes/ads/head.html`. Then submit `sitemap.xml`. Do the same in Bing Webmaster Tools, which can import from Search Console. | To do |
| 2 | **Internal notes are public and in the sitemap:** `ad-slot-code`, `de/es` readme and `research_notes/*` (8 URLs). Google would index them as thin pages. | Excluded from the build in `_config.yml`. | Done locally, push needed |
| 3 | **No share image.** `twitter:card` is plain "summary", so links shared on X, Facebook, LinkedIn and Telegram show no picture. | Added a 1200×630 `og-default.png`, `og:image` size and alt tags, article dates and tags, and Article JSON-LD (`_includes/og-meta.html`). | Done locally, push needed |
| 4 | **Search, Random and 404 pages could be indexed.** | They now have `noindex, follow`. | Done locally, push needed |

### P1: on-page, high impact and quick

**5. Meta descriptions are too short (52–95 characters).** Google shows about 150–160 characters. Short descriptions waste the snippet, and Google may replace them with random text. Paste-ready replacements for `description:`:

| Article | New description (≤155 chars) |
|---|---|
| Bitcoin | Bitcoin (BTC) explained: the first decentralized cryptocurrency, how mining and the 21 million supply cap work, its history since 2009, and key criticisms. |
| Ethereum | Ethereum (ETH) explained: how the smart-contract blockchain works, gas fees and ether, the 2022 switch to proof of stake, major upgrades and criticisms. |
| Cryptocurrency | What is cryptocurrency? A clear guide to how digital currencies like Bitcoin work, wallets and keys, coins vs tokens, regulation and the main risks. |
| Blockchain | What is a blockchain? How blocks, hashing and consensus create a tamper-evident shared ledger, the main types of blockchain, real uses and limits. |
| Decentralized finance | Decentralized finance (DeFi) explained: how DEXs, lending protocols and stablecoins run on smart contracts, plus the risks of hacks and scams. |

**6. Title tags have no search phrasing.** "Bitcoin - SplytWiki" doesn't match how people search ("what is bitcoin", "how does bitcoin work"). Articles now support an optional `seo_title:` front-matter field. The on-page H1 stays Wikipedia-style. Suggested values (≤48 characters, so the full title stays under 60):

| Article | `seo_title:` |
|---|---|
| Bitcoin | Bitcoin (BTC): What It Is and How It Works |
| Ethereum | Ethereum (ETH): What It Is and How It Works |
| Cryptocurrency | What Is Cryptocurrency? How It Works and Risks |
| Blockchain | What Is a Blockchain? How It Works, Simply |
| Decentralized finance | Decentralized Finance (DeFi) Explained |

**7. The homepage H1 was "Main Page".** It's now "SplytWiki – the free crypto encyclopedia". Status: done locally, push needed.

**8. Two links lead to pages that don't exist.** The script turns them into red links for visitors, but Google's crawler follows the raw link to a 404.
- `Vitalik_Buterin` (from Smart contract). Writing this article is a good idea, because his name is searched often.
- `Global_cryptocurrency_regulation` (from Altcoins and tokens). Point it to `Cryptocurrency_regulation`.

**9. Orphan pages.** *Cryptocurrency history* has 0 inbound links and *Decentralized application* has 1. Link to them from Cryptocurrency, Ethereum and the Main Page "Crypto basics" box.

### P2: worth doing, more effort

| # | Issue | Fix |
|---|---|---|
| 10 | **Thin sourcing on money topics.** Blockchain has 3 references and DeFi 2. Crypto counts as "Your Money or Your Life" content, where Google weighs trustworthiness heavily. | Add 3–5 more primary or authoritative sources to each (BIS, ECB, SEC, academic papers). |
| 11 | **The github.io address.** A subdomain of github.io builds authority slowly, and you can't control robots.txt. | Move to a custom domain (for example `splytwiki.com`): set `baseurl: ""`, add a `CNAME` file and point DNS at GitHub. GitHub redirects the old github.io URLs automatically. Do it early, before many links point at the old address. |
| 12 | **Underscore URLs** (`/wiki/Decentralized_finance/`). Google recommends hyphens as word separators. | Optional. Wikipedia ranks fine with underscores. If you switch, do it **before** pages are indexed, because changing URLs later loses ranking. |
| 13 | **`og:locale` is "en"**, where the standard form is `en_US`. | Minor; leave it. |
| 14 | **Core Web Vitals and ads.** The top banner sits above the H1. | Ad slots now reserve their height, so the page doesn't jump when an ad loads. Watch the Core Web Vitals report in Search Console once it has data. |
| 15 | **Content gaps.** The site answers "what is X" but not comparison, how-to and safety questions, which have high search intent. | See `article-outlines.md` for five quick wins. |

## Next steps after the fixes

1. Push the local changes and confirm the build is green.
2. Set up Search Console and submit the sitemap (fix 1).
3. Paste the new descriptions and titles (fixes 5 and 6).
4. Fix the 2 broken links and the orphan pages (fixes 8 and 9).
5. Publish the five outlined articles over the next 2–3 weeks.
6. After 4–6 weeks, check the Search Console "Queries" report. Rewrite titles and descriptions for pages with many impressions but a low click-through rate.
