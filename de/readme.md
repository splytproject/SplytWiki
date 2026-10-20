---
title: SplytWiki
display_title: "SplytWiki"
permalink: /de/readme/
description: Informationen über die Seite, Ordnerstruktur und wie man auf GitHub Pages veröffentlicht.
lang: de
---

# SplytWiki

**SplytWiki, die kostenlose Krypto-Enzyklopädie.** Es ist eine Online-Enzyklopädie über Kryptowährungen, Blockchain und dezentrale Finanzen. Das Erscheinungsbild ähnelt Wikipedia.

- **Hosting:** GitHub Pages, unter `https://splytproject.github.io/SplytWiki/`.
- **Engine:** Jekyll. GitHub Pages baut die Seite aus den Markdown-Dateien bei jedem Push, deshalb muss nichts installiert werden.
- **Größe:** eine CSS-Datei, eine kleine JavaScript-Datei, keine Frameworks und keine Webfonts.

## Inhalt und Struktur

Die Seiten der Site sind wie im Hauptzweig organisiert: Artikel in `_wiki/`, Layouts in `_layouts/` und wiederverwendbare Teile in `_includes/`. Bilder liegen in `assets/img/`.

## Veröffentlichen

Zum Veröffentlichen auf GitHub Pages:

1. Erstelle ein Repository mit genau dem Namen `SplytWiki`.
2. Ersetze in `_config.yml` `USERNAME` in `url:` durch deinen GitHub-Benutzernamen.
3. Push auf den `main`-Branch.
4. In den Repository-Einstellungen → Pages, wähle Deployment von Branch `main`, Ordner `/ (root)`.

(Teilübersetzung der README zur schnellen Verwendung. Auf Wunsch kann der Rest vollständig übersetzt werden.)
