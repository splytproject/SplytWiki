---
title: Bitcoin
ref: Bitcoin
description: Erste dezentrale Kryptowährung, gestartet 2009
categories: [Cryptocurrencies, Bitcoin, Proof-of-work cryptocurrencies]
updated: 2026-10-17
hatnote: "Dieser Artikel behandelt die Kryptowährung. Zur zugrunde liegenden Technik siehe [Blockchain](../../../wiki/Blockchain/)."
infobox:
  image: bitcoin.svg
  caption: Bitcoin-Symbol
  rows:
    - header: Einheiten
    - Plural: Bitcoins
    - Symbol: "₿"
    - Kürzel: "BTC, XBT"
    - Kleinste Einheit: "Satoshi (0,000 000 01 BTC)"
    - header: Entwicklung
    - Urheber: "[Satoshi Nakamoto](../../../wiki/Satoshi_Nakamoto/)"
    - Whitepaper: "„Bitcoin: A Peer-to-Peer Electronic Cash System“"
    - Erstveröffentlichung: "0.1 / 9. Januar 2009"
    - Software: "Bitcoin Core (Referenzimplementierung)"
    - Programmiersprache: C++
    - Lizenz: MIT-Lizenz
    - header: Ledger
    - Beginn des Ledgers: 3. Januar 2009
    - Zeitstempelverfahren: "[Proof of Work](../../../wiki/Proof_of_work/)"
    - Hashfunktion: "SHA-256 (zweifach angewendet)"
    - Blockzeit: Etwa 10 Minuten
    - Blockbelohnung: "₿3,125 (seit April 2024)"
    - Maximale Menge: "₿21.000.000"
---
**Bitcoin** (Abkürzung: **BTC**; Zeichen: **₿**) ist die erste dezentrale [Kryptowährung](../../../wiki/Cryptocurrency/). Sie wurde 2008 in einem Whitepaper einer Person oder Gruppe unter dem Pseudonym [Satoshi Nakamoto](../../../wiki/Satoshi_Nakamoto/) beschrieben, und das Netzwerk nahm im Januar 2009 seinen Betrieb auf.[^whitepaper] Mit Bitcoin können Menschen einander über das Internet direkt Werte senden, ohne auf eine Bank, einen Zahlungsdienstleister oder einen anderen vertrauenswürdigen Vermittler angewiesen zu sein.

Transaktionen werden von einem Netzwerk von Computern, sogenannten *Knoten* (Nodes), überprüft und in einem öffentlichen, nur erweiterbaren Kassenbuch festgehalten, der [Blockchain](../../../wiki/Blockchain/). Neue Blöcke werden von *Minern* hinzugefügt, die im Wettbewerb ein Rechenrätsel lösen – ein Verfahren namens [Proof of Work](../../../wiki/Proof_of_work/) – und dafür mit neu geschaffenen Bitcoins und Transaktionsgebühren belohnt werden. Die Gesamtmenge ist auf knapp 21 Millionen Bitcoins begrenzt, und die Rate, mit der neue Coins entstehen, wird etwa alle vier Jahre [halbiert](../../../wiki/Bitcoin_halving/).[^supply]

Bitcoin wird als zensurresistente Alternative zu staatlichem Geld gelobt und wegen seiner Kursschwankungen, seines Energieverbrauchs und seiner Nutzung für illegale Geschäfte kritisiert. Es ist mit Abstand die bekannteste Kryptowährung.

## Geschichte

### Entstehung

Der Domainname *bitcoin.org* wurde am 18. August 2008 registriert. Am 31. Oktober 2008 veröffentlichte Satoshi Nakamoto auf einer Kryptografie-Mailingliste ein Papier mit dem Titel *Bitcoin: A Peer-to-Peer Electronic Cash System*.[^mailing-list] Es beschrieb ein System für elektronische Zahlungen, das das Problem der *Doppelausgabe* (Double Spending) ohne zentrale Instanz löste: Die Teilnehmer einigen sich auf eine einzige, durch Proof of Work gesicherte Transaktionsgeschichte.

Nakamoto erzeugte den ersten Block, den sogenannten *Genesis-Block*, am 3. Januar 2009. Darin eingebettet war der Text „The Times 03/Jan/2009 Chancellor on brink of second bailout for banks“, eine Schlagzeile der britischen Zeitung *The Times*. Sie dient als Zeitstempel und wird weithin als Kommentar zur Zerbrechlichkeit des Bankensystems gelesen.[^genesis] Die erste Version der Software erschien am 9. Januar 2009. Drei Tage später schickte Nakamoto dem Informatiker Hal Finney 10 Bitcoins – die erste Transaktion zwischen zwei Personen.

Nakamoto arbeitete bis Ende 2010 gemeinsam mit anderen Freiwilligen an der Software, übergab die Leitung des Projekts dann an andere Entwickler und stellte 2011 die öffentliche Kommunikation ein.

### Frühe Nutzung

Anfangs hatte Bitcoin keinen Marktpreis. Im Oktober 2009 veröffentlichte ein Dienst namens New Liberty Standard den ersten bekannten Wechselkurs: Ein US-Dollar entsprach 1.309,03 Bitcoins. Am 22. Mai 2010 bezahlte der Programmierer Laszlo Hanyecz 10.000 Bitcoins für zwei Pizzas – der erste weithin dokumentierte Kauf von Waren mit der Währung.[^pizza] Der Jahrestag wird von Anhängern als „Bitcoin Pizza Day“ gefeiert.

2011 und 2012 wurde Bitcoin mit Silk Road in Verbindung gebracht, einem Online-Schwarzmarkt, der ausschließlich Bitcoin akzeptierte, bis das FBI die Seite im Oktober 2013 schloss. Die größte frühe Börse, Mt. Gox, stellte im Februar 2014 den Handel ein und meldete Insolvenz an, nachdem Hunderttausende Bitcoins ihrer Kunden verloren gegangen waren.

### Wachstum und Verbreitung

Der Bitcoin-Kurs stieg in einer Reihe von Boom-und-Bust-Zyklen: Ende 2013 überschritt er erstmals 1.000 US-Dollar, im Dezember 2017 näherte er sich 20.000 US-Dollar, und 2021 übertraf er 60.000 US-Dollar. Im September 2021 erklärte El Salvador Bitcoin als erstes Land zum gesetzlichen Zahlungsmittel; 2025 änderte das Land im Rahmen einer Vereinbarung mit dem Internationalen Währungsfonds das Gesetz, sodass Unternehmen Bitcoin nicht mehr annehmen müssen.

Im Januar 2024 genehmigte die US-Börsenaufsicht SEC die ersten börsengehandelten Spot-Bitcoin-Fonds (ETFs), über die auch Privatanleger mit einem gewöhnlichen Depot in Bitcoin investieren können. Im Dezember 2024 stieg der Kurs erstmals über 100.000 US-Dollar. Im März 2025 schuf eine US-Präsidialverordnung eine strategische Bitcoin-Reserve aus Bitcoins, die zuvor von der Regierung beschlagnahmt worden waren.

## Aufbau

{% include figure.html image="blockchain-diagram.svg" caption="Jeder Bitcoin-Block enthält den Hash des vorherigen Blocks; so entsteht eine Kette." width="300" %}

### Einheiten und Geldmenge

Die Rechnungseinheit ist der *Bitcoin*. Der kleinste Betrag, der auf der Blockchain erfasst werden kann, ist ein Hundertmillionstel Bitcoin (0,00000001 BTC). Er heißt zu Ehren des Erfinders **Satoshi**.

Neue Bitcoins entstehen nur als Belohnung für den Miner eines Blocks. Die Belohnung betrug anfangs 50 Bitcoins pro Block und halbiert sich alle 210.000 Blöcke, also etwa alle vier Jahre. Nach der [vierten Halbierung](../../../wiki/Bitcoin_halving/) im April 2024 liegt sie bei 3,125 Bitcoins. Durch diesen Zeitplan wird die Gesamtzahl der Bitcoins 20.999.999,9769 nie überschreiten; die letzten neuen Bruchteile eines Coins werden voraussichtlich um das Jahr 2140 ausgegeben.[^supply]

### Blockchain und Mining

Die Bitcoin-[Blockchain](../../../wiki/Blockchain/) ist ein öffentliches Kassenbuch aller jemals getätigten Transaktionen. Transaktionen werden zu Blöcken zusammengefasst, von denen jeder den kryptografischen Hash des vorherigen Blocks enthält. Wer einen alten Block verändern wollte, müsste daher die gesamte danach geleistete Arbeit wiederholen.

Um einen Block hinzuzufügen, muss ein Miner einen Wert (eine *Nonce*) finden, durch den der doppelte SHA-256-Hash des Blocks unter einer Zielzahl liegt. Der einzige bekannte Weg dorthin ist Ausprobieren, was enorme Rechenleistung erfordert. Das Netzwerk passt die Zielzahl alle 2.016 Blöcke (etwa zwei Wochen) automatisch an, sodass ungefähr alle zehn Minuten ein Block gefunden wird – unabhängig davon, wie viel Rechenleistung gerade mitarbeitet.[^whitepaper] Gemint wird heute meist mit Spezialchips, sogenannten ASICs, und Miner bündeln ihre Leistung in der Regel in *Mining-Pools*.

### Transaktionen, Schlüssel und Adressen

Der Besitz von Bitcoins wird über kryptografische Schlüssel gesteuert. Die [Wallet](../../../wiki/Cryptocurrency_wallet/) eines Nutzers enthält *private Schlüssel*, aus denen öffentliche Schlüssel und *Adressen* abgeleitet werden. Um Coins auszugeben, signiert der Nutzer eine Transaktion mit dem privaten Schlüssel; jeder kann die Signatur mit dem öffentlichen Schlüssel prüfen, sie aber nicht fälschen. Bitcoin verwendete ursprünglich das Signaturverfahren ECDSA auf der Kurve secp256k1 und ergänzte mit dem Taproot-Upgrade 2021 Schnorr-Signaturen.

Bitcoin-Adressen sind *pseudonym*: Auf der Blockchain selbst sind sie nicht mit realen Identitäten verknüpft. Da aber jede Transaktion öffentlich ist, lassen sie sich durch Analyse von Nutzungsmustern oft zurückverfolgen.

## Software und Upgrades

Das Netzwerk wird von Open-Source-Software betrieben. Die am weitesten verbreitete Implementierung, **Bitcoin Core**, geht auf Nakamotos ursprünglichen Code zurück. Änderungen am Protokoll werden als *Bitcoin Improvement Proposals* (BIPs) vorgeschlagen und müssen von Knotenbetreibern und Minern freiwillig übernommen werden.

Wichtige Upgrades sind unter anderem:

- **Segregated Witness (SegWit)**, aktiviert im August 2017. Es änderte die Speicherung von Signaturdaten und behob eine als Transaction Malleability bekannte Schwachstelle.
- **Taproot**, aktiviert im November 2021. Es führte Schnorr-Signaturen ein und machte komplexe Transaktionen privater und effizienter.

Streit über die Skalierung des Netzwerks führte im August 2017 zu einer Abspaltung: Eine Gruppe, die größere Blöcke wollte, schuf eine eigene Währung, **Bitcoin Cash**.

Das **Lightning-Netzwerk** ist ein „Layer-2“-System, das auf Bitcoin aufbaut. Nutzer können Zahlungskanäle öffnen und darüber viele kleine, schnelle Zahlungen außerhalb der Blockchain austauschen; nur der Endsaldo wird auf der Haupt-Blockchain abgerechnet.[^lightning]

## Rezeption

Befürworter argumentieren, dass Bitcoin wegen seiner festen Geldmenge vor Inflation schütze, und bezeichnen es mitunter als „digitales Gold“. Zudem biete es Menschen ohne Zugang zum Bankensystem oder unter repressiven Regierungen eine Möglichkeit, Werte zu speichern und zu versenden.

Kritiker verweisen auf die extremen Kursschwankungen, die geringe Nutzung für alltägliche Einkäufe und den Energieverbrauch des Proof-of-Work-Minings, der laut dem Cambridge Bitcoin Electricity Consumption Index mit dem eines mittelgroßen Landes vergleichbar ist.[^cbeci] Bitcoin wurde außerdem für Lösegeldzahlungen bei Ransomware-Angriffen und andere Straftaten genutzt. Firmen für Blockchain-Analyse berichten allerdings, dass illegale Aktivitäten nur einen kleinen Teil des gesamten Transaktionsvolumens ausmachen.

## Siehe auch

- [Blockchain](../../../wiki/Blockchain/)
- [Bitcoin-Halving](../../../wiki/Bitcoin_halving/)
- [Kryptowährungs-Wallet](../../../wiki/Cryptocurrency_wallet/)
- [Ethereum](../Ethereum/)
- [Satoshi Nakamoto](../../../wiki/Satoshi_Nakamoto/)

## Einzelnachweise

[^whitepaper]: Nakamoto, Satoshi (31. Oktober 2008). ["Bitcoin: A Peer-to-Peer Electronic Cash System"](https://bitcoin.org/bitcoin.pdf) (PDF, englisch). *bitcoin.org*.
[^mailing-list]: Nakamoto, Satoshi (31. Oktober 2008). ["Bitcoin P2P e-cash paper"](https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html) (englisch). *The Cryptography Mailing List*.
[^genesis]: ["Block 0 (genesis block)"](https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f). Block-Explorer *mempool.space*.
[^pizza]: ["Laszlo Hanyecz"](https://en.bitcoin.it/wiki/Laszlo_Hanyecz) (englisch). *Bitcoin Wiki*.
[^supply]: ["Controlled supply"](https://en.bitcoin.it/wiki/Controlled_supply) (englisch). *Bitcoin Wiki*.
[^lightning]: Poon, Joseph; Dryja, Thaddeus (2016). ["The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments"](https://lightning.network/lightning-network-paper.pdf) (PDF, englisch).
[^cbeci]: ["Cambridge Bitcoin Electricity Consumption Index"](https://ccaf.io/cbnsi/cbeci) (englisch). Cambridge Centre for Alternative Finance.

## Weblinks

- [bitcoin.org](https://bitcoin.org/), Projektwebsite
- [Bitcoin Core](https://github.com/bitcoin/bitcoin), Quellcode auf GitHub
