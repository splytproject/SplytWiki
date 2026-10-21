---
title: SplytWiki auf Deutsch
display_title: SplytWiki auf Deutsch
permalink: /de/
lang: de
description: SplytWiki, die freie Krypto-Enzyklopädie, auf Deutsch – übersetzte Artikel über Bitcoin, Ethereum und mehr.
---
{%- assign translated = site.pages | where: "lang", "de" | where_exp: "p", "p.ref" | sort: "title" -%}
Willkommen bei **{{ site.title }}**, der freien Krypto-Enzyklopädie. Wir übersetzen nach und nach unsere Artikel ins Deutsche. Alle anderen Artikel sind vorerst auf [Englisch](../) verfügbar.

## Übersetzte Artikel

{% for p in translated -%}
- **[{{ p.title }}]({{ p.url | relative_url }})** – {{ p.description }}
{% endfor %}

## Über SplytWiki

- [Über SplytWiki](../de/about/)
- [Mitmachen](../de/contribute/)
- [Kontakt](../de/contact/)
- [Allgemeiner Haftungsausschluss](../de/disclaimer/)
- [Datenschutzerklärung](../de/privacy/)

Nichts auf {{ site.title }} ist eine Finanz- oder Anlageberatung.
