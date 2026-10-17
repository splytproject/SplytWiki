---
title: SplytWiki
display_title: "SplytWiki"
permalink: /es/readme/
description: Información sobre el sitio, la estructura de carpetas y cómo publicar en GitHub Pages.
lang: es
---

# SplytWiki

**SplytWiki, la enciclopedia cripto gratuita.** Es una enciclopedia en línea sobre criptomonedas, blockchain y finanzas descentralizadas. Se parece y siente como Wikipedia, y A-ADS ([aads.com](https://a-ads.com)) sirve la publicidad.

- **Alojamiento:** GitHub Pages, en `https://splytproject.github.io/SplytWiki/`.
- **Motor:** Jekyll. GitHub Pages construye el sitio a partir de los archivos Markdown cada vez que haces push, por lo que no hay nada que instalar.
- **Tamaño:** un archivo CSS, un pequeño archivo JavaScript, sin frameworks ni fuentes web.

## Contenido y estructura

Las páginas del sitio se organizan como en la rama principal: los artículos están en `_wiki/`, las plantillas en `_layouts/` y las piezas reutilizables en `_includes/`. Las imágenes van en `assets/img/`.

## Publicación

Para publicar en GitHub Pages:

1. Crea un repositorio llamado exactamente `SplytWiki`.
2. En `_config.yml`, reemplaza `USERNAME` en `url:` por tu usuario de GitHub.
3. Empuja a la rama `main`.
4. En la configuración del repositorio → Pages, despliega desde la rama `main` y la carpeta `/ (root)`.

(Traducción parcial del README para uso rápido. Para una traducción completa, se puede traducir el resto del documento.)
