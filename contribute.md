---
title: Contribute
display_title: "SplytWiki:Contribute"
permalink: /contribute/
description: How to suggest corrections, new articles and better sources for SplytWiki through its GitHub repository.
---
<div id="splyt-request" class="ambox" hidden></div>

{{ site.title }} is written and reviewed by its maintainers, with help from readers. The whole site, including every article, lives in a public GitHub repository: **[github.com/{{ site.repository }}](https://github.com/{{ site.repository }})**. Every suggestion is read by a person.

## What you can suggest

- **Corrections.** A fact that is wrong, unclear or out of date.
- **Missing sources.** A reliable source that supports (or contradicts) something in an article.
- **New articles.** A cryptocurrency, protocol, person, company or concept that deserves its own page. Links shown in <span style="color:var(--link-new)">red</span> point to articles that have not been written yet.
- **Improvements.** Better explanations, diagrams or examples.

## Option 1: open an issue (no coding needed)

The easiest way to help is to open an issue on GitHub. You need a free GitHub account.

<p><a id="splyt-issue-link" class="mw-ui-button" href="https://github.com/{{ site.repository }}/issues/new"><b>Open an issue on GitHub →</b></a></p>

Please include:

1. The name of the article (or the article you would like to see).
2. What should change, and why.
3. At least one reliable source, such as a white paper, official documentation, court filing or reputable news report.

If you came here from an article's **Suggest edit** tab, the issue is already filled in with the article's name.

## Option 2: edit the article yourself

Every article is a Markdown file in the [`_wiki` folder](https://github.com/{{ site.repository }}/tree/main/_wiki). If you are comfortable with GitHub:

1. Open the article's file and choose **Edit** (the pencil icon). GitHub will make a copy (a "fork") for you.
2. Make your change and add sources as footnotes, for example `[^name]` in the text and `[^name]: source…` under *References*.
3. Choose **Propose changes**, then **Create pull request**, and describe what you changed and why.

A maintainer will review the pull request and either merge it or reply with questions. The [repository's README](https://github.com/{{ site.repository }}#readme) explains the article format and house style.

## What we won't publish

To keep {{ site.title }} trustworthy, we don't accept:

- promotional text, price predictions or "next 100×" claims;
- referral links, token sale links or wallet addresses asking for funds;
- suggestions paid for by, or written on behalf of, the project being described, unless this is clearly disclosed;
- unsourced rumours or personal attacks.

Issues and pull requests are public. Never include private information, and **never post a seed phrase, private key or password**.

Thank you for helping make {{ site.title }} better.
