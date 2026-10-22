---
title: Monero
description: Monero (XMR), the privacy-focused cryptocurrency — history since 2014, how ring signatures, stealth addresses, RingCT and RandomX mining work, its tail emission, governance, criticism, exchange delistings and the 2025 Qubic hash-rate episode, as of October 2026
aliases: [XMR, Monero cryptocurrency, BitMonero, RandomX, RingCT]
categories: [Cryptocurrencies, Privacy, Proof-of-work cryptocurrencies]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: monero.svg
  caption: Monero emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: XMR
    - Launch date: "18 April 2014"
    - Founders: "Pseudonymous developer \"thankful_for_today\"; then a community core team"
    - header: Technology
    - Consensus: "[Proof of work](../Proof_of_work/) (RandomX, since November 2019)"
    - Supply policy: "Main emission ended 2022; tail emission of 0.6 XMR per block"
    - Written in: "C++"
    - License: "BSD 3-clause"
    - header: Links
    - Website: "[getmonero.org](https://www.getmonero.org/)"
    - Repository: "[monero-project/monero](https://github.com/monero-project/monero)"
---

> **In plain terms:** Monero is a cryptocurrency built for privacy. Every transaction hides who sent it, who received it and how much was sent, by default. Anyone with an ordinary computer can mine it. That privacy makes it popular with people who value confidentiality, and has led many exchanges and regulators to treat it with suspicion.

**Monero** (ticker **XMR**) is a [proof-of-work](../Proof_of_work/) cryptocurrency that makes transactions private by default.[^moneropedia-ringct] Unlike [Bitcoin](../Bitcoin/), where amounts and addresses are public, Monero hides the sender, the receiver and the amount of every payment.

## History

Monero began on 18 April 2014 as **BitMonero**, a fork of the CryptoNote-based Bytecoin, released by a pseudonymous developer. The community took over development within weeks and renamed it Monero, Esperanto for "coin".[^repo]

Key upgrades:[^moneropedia-ringct][^moneropedia-randomx][^moneropedia-tail]

| Date | Change |
|---|---|
| Jan 2017 | **RingCT** hides transaction amounts |
| 2018 | **Bulletproofs** make private amounts smaller and cheaper |
| Nov 2019 | **RandomX** mining algorithm favours ordinary CPUs |
| May 2022 | Main emission ends; permanent **tail emission** begins |

In 2025 a project called **Qubic** directed large amounts of hash rate at Monero and claimed a majority. It produced chain reorganizations, including an 18-block reorg in September 2025.[^coindesk-qubic][^ct-reorg]

## How it works

- **Ring signatures** mix a payment's real input with decoys from the chain, so outsiders cannot tell which output was spent.[^moneropedia-ringct]
- **Stealth addresses** give each payment a one-time address, so a recipient's public address never appears on-chain.[^repo]
- **RingCT** hides amounts while still letting the network check no coins are created from nothing.[^moneropedia-ringct]
- **RandomX** is a mining algorithm designed to run best on general-purpose CPUs, resisting specialised mining chips.[^moneropedia-randomx]
- **Tail emission.** After the main emission, every block pays a fixed 0.6 XMR forever, to keep paying miners.[^moneropedia-tail]

## Governance

Monero has no formal on-chain governance. Development is coordinated by a volunteer core team and contributors, and upgrades happen through scheduled hard forks that node operators adopt.[^repo] Research is published through the Monero Research Lab.[^mrl]

## Controversies and criticism

- **Illicit use.** Monero's privacy makes it attractive for darknet markets and ransomware, which critics and regulators cite.
- **Delistings.** Binance delisted XMR in February 2024, and Kraken stopped offering it in the European Economic Area in October 2024, citing regulation.[^decrypt-kraken]
- **Auditability.** Because amounts are hidden, users cannot directly audit total supply on-chain; they rely on cryptographic proofs that inflation is impossible.[^moneropedia-ringct]
- **Hash-rate attacks.** The 2025 Qubic episode showed that a well-funded miner could reorganize recent blocks. Developers disputed whether it amounted to a full 51% attack.[^coindesk-qubic][^ct-reorg]

## Regulatory actions

| Date | Action |
|---|---|
| Feb 2024 | Binance delists XMR.[^decrypt-kraken] |
| Oct 2024 | Kraken delists XMR for European Economic Area customers.[^decrypt-kraken] |
| Jul 2027 (scheduled) | EU AML Regulation bars regulated firms from keeping accounts that allow privacy coins.[^amlr] |

## Developer notes

The daemon is `monerod`; `monero-wallet-cli` and `monero-wallet-rpc` manage wallets.[^repo]

```
monerod --detach
monero-wallet-cli --stagenet
```

**Stagenet** and **testnet** are public test networks.[^repo]

## See also

- [Zcash](../Zcash/)
- [Proof of work](../Proof_of_work/)
- [Cryptocurrency regulation and tax in the European Union](../Cryptocurrency_regulation_and_tax_in_the_European_Union/)
- [51% attack](../glossary/51_percent_attack/) (glossary)

## References

[^repo]: Monero Project. ["monero-project/monero"](https://github.com/monero-project/monero). GitHub. Retrieved October 2026.
[^moneropedia-ringct]: Monero Project. ["Moneropedia: RingCT"](https://www.getmonero.org/resources/moneropedia/ringCT.html). *getmonero.org*.
[^moneropedia-randomx]: Monero Project. ["Moneropedia: RandomX"](https://www.getmonero.org/resources/moneropedia/randomx.html). *getmonero.org*.
[^moneropedia-tail]: Monero Project. ["Moneropedia: Tail emission"](https://www.getmonero.org/resources/moneropedia/tail-emission.html). *getmonero.org*.
[^mrl]: Monero Project. ["Monero Research Lab"](https://www.getmonero.org/resources/research-lab/). *getmonero.org*.
[^coindesk-qubic]: ["Qubic Claims Majority Control of Monero Hashrate, Raising 51% Attack Fears"](https://www.coindesk.com/business/2025/08/12/qubic-claims-majority-control-of-monero-hashrate-raising-51-attack-fears). *CoinDesk*. 12 August 2025.
[^ct-reorg]: ["Monero Rises Over 7% Despite Suffering 18-Block Reorg"](https://cointelegraph.com/news/monero-rallies-7-percent-hours-after-18-block-reorg). *Cointelegraph*. September 2025.
[^decrypt-kraken]: ["Monero Dips 7% as Kraken Says It's Delisting XMR for European Customers"](https://decrypt.co/284276/monero-kraken-delisting-xmr-european). *Decrypt*. October 2024.
[^amlr]: Regulation (EU) 2024/1624, Article 79. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1624/oj).
