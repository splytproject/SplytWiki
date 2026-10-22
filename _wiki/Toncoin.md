---
title: Toncoin
description: Toncoin and The Open Network (TON) — history from Telegram's 2018 Gram sale and the SEC's 2020 case to the community relaunch, how its masterchain and sharded workchains work, governance, criticism, and regulatory matters including Pavel Durov's 2024 French indictment, as of October 2026
aliases: [TON, The Open Network, Telegram Open Network, Gram, Toncoin cryptocurrency, TON Foundation]
categories: [Cryptocurrencies, Smart contract platforms, Proof-of-stake cryptocurrencies]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: toncoin.svg
  caption: Toncoin emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: TON
    - Launch date: "2019–2020 (test network by Telegram); community mainnet from 2020"
    - Founders: "Nikolai and Pavel Durov (Telegram); continued by the TON community"
    - header: Technology
    - Consensus: "[Proof of stake](../Proof_of_stake/) (BFT among validators)"
    - Supply policy: "About 5 billion initially; small ongoing issuance to validators"
    - Written in: "C++"
    - License: "LGPL-2.0"
    - header: Links
    - Website: "[ton.org](https://ton.org/)"
    - Repository: "[ton-blockchain/ton](https://github.com/ton-blockchain/ton)"
---

> **In plain terms:** TON is a blockchain originally designed by the founders of the Telegram messaging app. US regulators stopped Telegram's own launch in 2020, so a community of developers took over the open-source code. It is now tightly linked to Telegram, which uses it for in-app payments and wallets.

**The Open Network** (TON) is a [proof-of-stake](../Proof_of_stake/) blockchain whose native currency is **Toncoin**.[^docs] It was designed by Nikolai and Pavel Durov, the founders of Telegram, as the "Telegram Open Network".[^whitepaper]

## History

Nikolai Durov's white paper described TON as a fast, sharded blockchain.[^whitepaper] In 2018 Telegram raised about $1.7 billion from investors for tokens called **Grams**.[^sec-2020]

In October 2019 the US Securities and Exchange Commission (SEC) obtained a court order stopping the Gram distribution, arguing it was an unregistered securities offering. In June 2020 Telegram agreed to return about $1.2 billion to investors and pay an $18.5 million penalty, and abandoned the project.[^sec-2020]

Independent developers continued the open-source code, and the network was relaunched with **Toncoin**.[^docs] Telegram later integrated TON into its app, including a built-in wallet.[^docs]

On 24 August 2024 French authorities arrested Pavel Durov. He was indicted on charges linked to criminal activity on Telegram, in a case that concerns the messaging app rather than TON. As of October 2026 no trial date has been set.[^durov]

## How it works

- **Masterchain and workchains.** A **masterchain** coordinates the network and records the state of **workchains**, which can split into many **shardchains** as load grows.[^whitepaper]
- **Actor model.** Smart contracts communicate by sending each other asynchronous messages.[^docs]
- **Languages.** Contracts are written in FunC, Tact or Tolk and run on the TON Virtual Machine.[^docs]
- **Validators.** Validators stake Toncoin and are elected for fixed rounds.[^docs]

## Governance

Network parameters can be changed by validator votes. The **TON Foundation** supports development and the ecosystem.[^docs]

## Controversies and criticism

- **Telegram dependence.** Much of TON's growth comes from Telegram, so critics say it depends heavily on one company and its founder's legal situation.[^durov]
- **Supply concentration.** Critics have noted that a small number of early wallets held a large share of Toncoin.[^docs]
- **Scams.** Telegram's built-in wallet and mini-apps have been used to promote scam tokens and games.

## Regulatory actions

| Date | Action |
|---|---|
| Oct 2019 | SEC obtains a temporary restraining order against the Gram distribution.[^sec-2020] |
| 26 Jun 2020 | Telegram agrees to return $1.2 billion and pay $18.5 million.[^sec-2020] |
| 24–28 Aug 2024 | Pavel Durov arrested and indicted in France over Telegram's moderation.[^durov] |

## Developer notes

The repository builds `validator-engine` and `lite-client`; most developers use public APIs or SDKs.[^repo] **Testnet** is available for free test coins.[^docs]

## See also

- [Proof of stake](../Proof_of_stake/)
- [Blockchain scaling](../Blockchain_scaling/)
- [Cryptocurrency regulation and tax in the United States](../Cryptocurrency_regulation_and_tax_in_the_United_States/)

## References

[^whitepaper]: Durov, Nikolai (2017). ["The Open Network"](https://ton.org/whitepaper.pdf) (PDF) white paper.
[^docs]: ["TON Docs"](https://docs.ton.org/). Retrieved October 2026.
[^repo]: ["ton-blockchain/ton"](https://github.com/ton-blockchain/ton). GitHub.
[^sec-2020]: U.S. Securities and Exchange Commission (26 June 2020). ["Telegram to Return $1.2 Billion to Investors and Pay $18.5 Million Penalty to Settle SEC Charges"](https://www.sec.gov/news/press-release/2020-146). Press release 2020-146.
[^durov]: ["Arrest and indictment of Pavel Durov"](https://en.wikipedia.org/wiki/Arrest_and_indictment_of_Pavel_Durov). *Wikipedia*. Retrieved October 2026.
