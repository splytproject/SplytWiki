---
title: SplytWiki en español
display_title: SplytWiki en español
permalink: /es/
lang: es
description: SplytWiki, la enciclopedia libre de criptomonedas, en español – artículos traducidos sobre Bitcoin, Ethereum y más.
---
{%- assign translated = site.pages | where: "lang", "es" | where_exp: "p", "p.ref" | sort: "title" -%}
Te damos la bienvenida a **{{ site.title }}**, la enciclopedia libre de criptomonedas. Estamos traduciendo nuestros artículos al español poco a poco. El resto de los artículos está disponible por ahora en [inglés](../).

## Artículos traducidos

{% for p in translated -%}
- **[{{ p.title }}]({{ p.url | relative_url }})** – {{ p.description }}
{% endfor %}

## Acerca de SplytWiki

- [Acerca de SplytWiki](../es/about/)
- [Contribuir](../es/contribute/)
- [Contacto](../es/contact/)
- [Descargo de responsabilidad general](../es/disclaimer/)
- [Política de privacidad](../es/privacy/)

Nada en {{ site.title }} constituye asesoramiento financiero o de inversión.
