---
title: Contribuir
display_title: "SplytWiki:Contribuir"
permalink: /es/contribute/
description: Cómo sugerir correcciones, nuevos artículos y mejores fuentes para SplytWiki a través de su repositorio de GitHub.
lang: es
---

<div id="splyt-request" class="ambox" hidden></div>

{{ site.title }} lo escriben y revisan sus mantenedores, con la ayuda de los lectores. Todo el sitio, incluidos todos los artículos, está en un repositorio público de GitHub: **[github.com/{{ site.repository }}](https://github.com/{{ site.repository }})**. Cada sugerencia la lee una persona.

## Qué puedes sugerir

- **Correcciones.** Un dato que es incorrecto, confuso o está desactualizado.
- **Fuentes que faltan.** Una fuente fiable que respalde (o contradiga) algo en un artículo.
- **Nuevos artículos.** Una criptomoneda, protocolo, persona, empresa o concepto que merezca su propia página. Los enlaces en <span style="color:var(--link-new)">rojo</span> apuntan a artículos que aún no existen.
- **Mejoras.** Mejores explicaciones, diagramas o ejemplos.

## Opción 1: abrir una incidencia (sin programar)

La forma más fácil de ayudar es abrir una incidencia (*issue*) en GitHub. Necesitas una cuenta gratuita de GitHub.

<p><a id="splyt-issue-link" class="mw-ui-button" href="https://github.com/{{ site.repository }}/issues/new">Abrir una incidencia en GitHub →</a></p>

Incluye:

1. El nombre del artículo (o el artículo que te gustaría ver).
2. Qué debe cambiar y por qué.
3. Al menos una fuente fiable, como un white paper, documentación oficial, un documento judicial o un informe periodístico de reputación.

Puedes escribir la incidencia en español o en inglés.

## Opción 2: editar tú mismo el artículo

Cada artículo es un archivo Markdown del repositorio; las traducciones al español están en la carpeta [`es/wiki`](https://github.com/{{ site.repository }}/tree/main/es/wiki). Si sabes usar GitHub:

1. Abre el archivo y elige **Edit** (el icono del lápiz). GitHub creará una copia (un *fork*) para ti.
2. Haz el cambio y añade las fuentes como notas al pie.
3. Elige **Propose changes** y después **Create pull request**, y describe lo que has cambiado.

Un mantenedor revisará la *pull request* y la incorporará o te responderá con preguntas.

## Qué no publicamos

Para mantener la confianza en {{ site.title }}, no aceptamos:

- texto promocional, predicciones de precio o afirmaciones de «próximo 100×»;
- enlaces de referidos, enlaces de venta de tokens o direcciones de monedero que pidan fondos;
- sugerencias pagadas por el proyecto descrito, o escritas en su nombre, salvo que se indique claramente;
- rumores sin fuentes o ataques personales.

Las incidencias y las *pull requests* son públicas. No incluyas datos privados y **nunca publiques una frase semilla, una clave privada o una contraseña**.

Gracias por ayudar a mejorar {{ site.title }}.
