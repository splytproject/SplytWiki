---
title: Mitwirken
display_title: "SplytWiki:Mitwirken"
permalink: /de/contribute/
description: Wie man über das GitHub-Repository Korrekturen, neue Artikel und bessere Quellen für SplytWiki vorschlägt.
lang: de
---

<div id="splyt-request" class="ambox" hidden></div>

{{ site.title }} wird von seinem Maintainer-Team mit Unterstützung der Leserschaft geschrieben und geprüft. Die gesamte Website mit allen Artikeln liegt in einem öffentlichen GitHub-Repository: **[github.com/{{ site.repository }}](https://github.com/{{ site.repository }})**. Jeder Vorschlag wird von einer Person gelesen.

## Was Sie vorschlagen können

- **Korrekturen.** Eine Tatsache, die falsch, unklar oder veraltet ist.
- **Fehlende Quellen.** Eine verlässliche Quelle, die etwas in einem Artikel belegt (oder widerlegt).
- **Neue Artikel.** Eine Kryptowährung, ein Protokoll, eine Person, ein Unternehmen oder ein Konzept, das eine eigene Seite verdient. Links in <span style="color:var(--link-new)">rot</span> verweisen auf noch nicht existierende Artikel.
- **Verbesserungen.** Bessere Erklärungen, Diagramme oder Beispiele.

## Möglichkeit 1: ein Issue eröffnen (ohne Programmierkenntnisse)

Am einfachsten helfen Sie, indem Sie auf GitHub ein Issue eröffnen. Dafür brauchen Sie ein kostenloses GitHub-Konto.

<p><a id="splyt-issue-link" class="mw-ui-button" href="https://github.com/{{ site.repository }}/issues/new">Issue auf GitHub eröffnen →</a></p>

Bitte geben Sie an:

1. Den Namen des Artikels (oder den Artikel, den Sie sich wünschen).
2. Was sich ändern soll und warum.
3. Mindestens eine verlässliche Quelle, z. B. ein Whitepaper, offizielle Dokumentation, Gerichtsunterlagen oder einen seriösen Pressebericht.

Issues dürfen auf Deutsch oder Englisch verfasst werden.

## Möglichkeit 2: den Artikel selbst bearbeiten

Jeder Artikel ist eine Markdown-Datei im Repository; deutsche Übersetzungen liegen im Ordner [`de/wiki`](https://github.com/{{ site.repository }}/tree/main/de/wiki). Wenn Sie mit GitHub vertraut sind:

1. Öffnen Sie die Datei und wählen Sie **Edit** (Stiftsymbol). GitHub erstellt dafür eine Kopie (einen „Fork“).
2. Nehmen Sie Ihre Änderung vor und belegen Sie sie mit Fußnoten.
3. Wählen Sie **Propose changes** und dann **Create pull request** und beschreiben Sie Ihre Änderung.

Ein Maintainer prüft den Pull Request und übernimmt ihn oder antwortet mit Rückfragen.

## Was wir nicht veröffentlichen

Um {{ site.title }} vertrauenswürdig zu halten, akzeptieren wir nicht:

- werblichen Text, Preisprognosen oder „next 100×“-Behauptungen;
- Empfehlungslinks, Token-Verkaufslinks oder Wallet-Adressen, die um Geld bitten;
- Vorschläge, die vom beschriebenen Projekt bezahlt oder in dessen Auftrag geschrieben wurden, sofern dies nicht offengelegt wird;
- unbelegte Gerüchte oder persönliche Angriffe.

Issues und Pull Requests sind öffentlich. Geben Sie keine privaten Daten an und **veröffentlichen Sie niemals eine Seed-Phrase, einen privaten Schlüssel oder ein Passwort**.

Danke, dass Sie helfen, {{ site.title }} zu verbessern.
