---
title: Ethereum
ref: Ethereum
description: Dezentrale Blockchain-Plattform für Smart Contracts mit eigener Währung Ether
categories: [Cryptocurrencies, Ethereum, Smart contract platforms, Proof-of-stake cryptocurrencies]
updated: 2026-10-17
infobox:
  image: ethereum.svg
  image_width: 90
  caption: Die Ether-Raute
  rows:
    - header: Einheiten
    - Währung: Ether
    - Kürzel: ETH
    - Symbol: "Ξ"
    - Kleinste Einheit: "Wei (10⁻¹⁸ ETH)"
    - Weitere Einheiten: "Gwei (10⁻⁹ ETH)"
    - header: Entwicklung
    - Vorgeschlagen von: Vitalik Buterin
    - Whitepaper: 2013–2014
    - Start des Mainnets: 30. Juli 2015
    - Entwickler: "Ethereum Foundation und Community"
    - header: Ledger
    - Konsens: "[Proof of Stake](../Proof_of_stake/) (seit September 2022)"
    - Früherer Konsens: "[Proof of Work](../Proof_of_work/) (2015–2022)"
    - Blockzeit: "12 Sekunden (ein Slot)"
    - Maximale Menge: "Keine (Gebührenverbrennung gleicht Ausgabe aus)"
---
**Ethereum** ist eine dezentrale [Blockchain](../Blockchain/)-Plattform, auf der jeder Programme, sogenannte [Smart Contracts](../Smart_contract/), erstellen und ausführen kann. Ihre native Währung ist **Ether** (Kürzel **ETH**, Symbol **Ξ**). Ether wird zur Bezahlung von Rechenleistung im Netzwerk verwendet und ist nach [Bitcoin](../Bitcoin/) die zweitgrößte [Kryptowährung](../Cryptocurrency/).

Ethereum wurde 2013 von dem Programmierer Vitalik Buterin vorgeschlagen und ging am 30. Juli 2015 in Betrieb.[^history] Während Bitcoin vor allem als digitales Geld gedacht war, wurde Ethereum als universeller „Weltcomputer“ entworfen: Seine Blockchain speichert nicht nur Kontostände, sondern auch Code und Daten, die jeder Nutzer aufrufen kann. Damit wurde Ethereum zur Grundlage der meisten Anwendungen für [dezentrale Finanzen](../Decentralized_finance/) (DeFi), [Stablecoins](../Stablecoin/) und [Non-Fungible Tokens](../Non-fungible_token/), die danach entstanden.

Im September 2022 wechselte Ethereum mit einem als **The Merge** bekannten Upgrade von [Proof of Work](../Proof_of_work/) zu [Proof of Stake](../Proof_of_stake/) und senkte dadurch seinen Energieverbrauch Schätzungen zufolge um 99,95 %.[^energy]

## Geschichte

### Konzept und Crowdsale

Buterin, Mitgründer des *Bitcoin Magazine*, beschrieb Ethereum Ende 2013 in einem Whitepaper. Er argumentierte, dass Blockchains eine eingebaute Programmiersprache bräuchten, damit Entwickler nicht für jede Anwendung eine neue Blockchain schaffen müssten.[^whitepaper] Das Projekt wurde im Januar 2014 öffentlich vorgestellt. Zu den frühen Mitgründern gehörten Gavin Wood, der die formale technische Spezifikation, das sogenannte *Yellow Paper*, verfasste,[^yellowpaper] sowie Charles Hoskinson, Anthony Di Iorio, Joseph Lubin, Mihai Alisie, Amir Chetrit und Jeffrey Wilcke.

Finanziert wurde die Entwicklung durch einen Online-Crowdsale im Juli und August 2014, bei dem Teilnehmer Ether mit Bitcoin kauften. Zur Unterstützung des Projekts wurde die gemeinnützige **Ethereum Foundation** mit Sitz in Zug in der Schweiz gegründet.

### Start und The DAO

Das Netzwerk startete am 30. Juli 2015 mit einer Version namens *Frontier*. 2016 sammelte ein als Smart Contract umgesetzter Investmentfonds namens **The DAO** Ether im Wert von etwa 150 Millionen US-Dollar ein. Im Juni 2016 nutzte ein Angreifer einen Fehler in dessen Code aus und zog rund 3,6 Millionen Ether ab. Nach heftiger Debatte beschloss die Community am 20. Juli 2016 eine *Hard Fork*, mit der die gestohlenen Mittel in einen Rückerstattungsvertrag verschoben wurden. Eine Minderheit, die die Änderung aus Prinzip ablehnte, betrieb die ursprüngliche Kette weiter; sie besteht heute als **Ethereum Classic** fort.

### Wachstum

Der 2015 vorgeschlagene Token-Standard ERC-20 machte es einfach, neue Token auf Ethereum zu erstellen, und befeuerte 2017 den Boom der „Initial Coin Offerings“ (ICOs). Durch den DeFi- und NFT-Boom 2020–2021 stieg die Nachfrage nach Blockplatz stark an, die Transaktionsgebühren erreichten hohe Werte, und *Layer-2*-Netzwerke gewannen an Bedeutung.

### Wechsel zu Proof of Stake

Eine separate Proof-of-Stake-Kette, die **Beacon Chain**, ging am 1. Dezember 2020 an den Start. Am 15. September 2022 stellte die ursprüngliche Ethereum-Kette beim **Merge** das Mining ein und schloss sich der Beacon Chain an. Seitdem werden Blöcke von Validatoren erzeugt, die Ether hinterlegen, also *staken*.[^merge] Das Shanghai-Capella-Upgrade vom April 2023 ermöglichte es Validatoren, ihre gestakten Ether abzuheben.

## Technik

### Ethereum Virtual Machine

Jeder Ethereum-Knoten betreibt die **Ethereum Virtual Machine** (EVM), eine standardisierte Umgebung zur Ausführung von Smart-Contract-Code. Da alle Knoten denselben Code mit denselben Daten ausführen, kommen sie zum selben Ergebnis. Verträge werden meist in der Hochsprache **Solidity** (oder Alternativen wie Vyper) geschrieben und zu EVM-Bytecode kompiliert. Viele andere Blockchains sind „EVM-kompatibel“, können also dieselben Verträge ausführen.

Ethereum kennt zwei Arten von Konten: *extern verwaltete Konten*, die von Menschen über private Schlüssel kontrolliert werden, und *Vertragskonten*, die von ihrem Code gesteuert werden.

### Gas und Gebühren

Jede Operation in der EVM kostet eine feste Menge **Gas**, eine Einheit für Rechenaufwand. Nutzer bezahlen Gas in Ether, was Endlosschleifen und Spam verhindert. Seit dem London-Upgrade vom August 2021 (EIP-1559) hat jeder Block eine *Grundgebühr* (Base Fee), die mit der Nachfrage steigt und fällt und **verbrannt**, also dauerhaft vernichtet, wird, sowie ein optionales *Trinkgeld* (Priority Fee) für den Validator.[^eip1559] Bei hoher Netzwerkaktivität kann die verbrannte Menge Ether die neu ausgegebene übersteigen, sodass die Gesamtmenge schrumpft.

Ether wird in kleinere Einheiten unterteilt. Die kleinste, das **Wei** (10<sup>−18</sup> Ether), ist nach dem Informatiker Wei Dai benannt. Gaspreise werden üblicherweise in **Gwei** (10<sup>−9</sup> Ether) angegeben.

### Konsens

Ethereum verwendet ein Proof-of-Stake-Protokoll namens *Gasper*. Validatoren müssen 32 ETH hinterlegen, um teilzunehmen. Die Zeit ist in *Slots* von 12 Sekunden unterteilt; in jedem Slot wird ein Validator zufällig ausgewählt, einen Block vorzuschlagen, während Komitees anderer Validatoren darüber abstimmen, also ihn *attestieren*. Jeweils 32 Slots bilden eine *Epoche*, und nach etwa zwei Epochen gelten Blöcke als *finalisiert* und damit praktisch unumkehrbar. Validatoren, die unehrlich handeln, kann ein Teil ihres Einsatzes entzogen werden; diese Strafe heißt *Slashing*.[^pos]

### Skalierung und Layer 2

Um mehr Transaktionen zu verarbeiten, ohne den Betrieb eines Knotens zu verteuern, setzt Ethereums Roadmap auf **Rollups**: separate „Layer-2“-Netzwerke wie Arbitrum, Optimism und Base, die Transaktionen außerhalb der Hauptkette ausführen und komprimierte Daten und Nachweise an sie zurückmelden. Das Dencun-Upgrade vom März 2024 (EIP-4844) führte eine günstigere Datenspeicherung namens *Blobs* speziell für Rollups ein und senkte deren Gebühren deutlich.[^eip4844]

## Upgrades

| Upgrade | Datum | Wichtigste Änderung |
|---|---|---|
| Frontier | 30. Juli 2015 | Start des Netzwerks |
| DAO-Fork | 20. Juli 2016 | Rückabwicklung des DAO-Hacks |
| Byzantium | Oktober 2017 | Protokollverbesserungen; geringere Mining-Belohnung |
| London | 5. August 2021 | Gebührenverbrennung nach EIP-1559 |
| The Merge | 15. September 2022 | Wechsel zu Proof of Stake |
| Shanghai-Capella | 12. April 2023 | Abhebungen beim Staking ermöglicht |
| Dencun | 13. März 2024 | Blob-Daten für Rollups (EIP-4844) |
| Pectra | 7. Mai 2025 | Verbesserungen bei Staking und Konten |

## Kritik

Kritiker bemängeln die hohen Transaktionsgebühren in Spitzenzeiten, den komplizierten Weg der Upgrades und die Sicherheitsrisiken von Smart Contracts, durch deren Fehler und Ausnutzung Nutzer Milliarden von Dollar verloren haben. Manche argumentieren, Staking bündele den Einfluss bei großen Haltern und Staking-Diensten. Befürworter entgegnen, dass das Netzwerk seit 2015 ununterbrochen läuft und Layer-2-Systeme die Gebühren erheblich gesenkt haben.

## Siehe auch

- [Smart Contract](../Smart_contract/)
- [Proof of Stake](../Proof_of_stake/)
- [Dezentrale Finanzen](../Decentralized_finance/)
- [Non-Fungible Token](../Non-fungible_token/)
- [Solana](../Solana/)

## Einzelnachweise

[^history]: ["The history of Ethereum"](https://ethereum.org/en/history/) (englisch). *ethereum.org*.
[^energy]: ["Ethereum energy consumption"](https://ethereum.org/en/energy-consumption/) (englisch). *ethereum.org*.
[^whitepaper]: Buterin, Vitalik (2014). ["Ethereum Whitepaper"](https://ethereum.org/en/whitepaper/) (englisch). *ethereum.org*.
[^yellowpaper]: Wood, Gavin. ["Ethereum: A Secure Decentralised Generalised Transaction Ledger"](https://ethereum.github.io/yellowpaper/paper.pdf) (PDF, englisch). *Ethereum Yellow Paper*.
[^merge]: ["The Merge"](https://ethereum.org/en/roadmap/merge/) (englisch). *ethereum.org*.
[^eip1559]: Buterin, Vitalik; et al. (2019). ["EIP-1559: Fee market change for ETH 1.0 chain"](https://eips.ethereum.org/EIPS/eip-1559) (englisch). *Ethereum Improvement Proposals*.
[^pos]: ["Proof-of-stake (PoS)"](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/) (englisch). *ethereum.org*.
[^eip4844]: Buterin, Vitalik; et al. (2022). ["EIP-4844: Shard Blob Transactions"](https://eips.ethereum.org/EIPS/eip-4844) (englisch). *Ethereum Improvement Proposals*.

## Weblinks

- [ethereum.org](https://ethereum.org/), offizielle Website
- [Ethereum Improvement Proposals](https://eips.ethereum.org/)
