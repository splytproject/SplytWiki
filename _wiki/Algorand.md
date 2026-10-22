---
title: Algorand
description: Algorand (ALGO), the pure proof-of-stake blockchain founded by Turing Award winner Silvio Micali — history since 2017, how cryptographic sortition and its Byzantine agreement work, governance, criticism, and regulatory actions, as of October 2026
aliases: [ALGO, Algorand blockchain, Algorand Foundation, Pure proof of stake, Cryptographic sortition]
categories: [Cryptocurrencies, Smart contract platforms, Proof-of-stake cryptocurrencies]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: algorand.svg
  caption: Algorand emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: ALGO
    - Launch date: "19 June 2019 (mainnet)"
    - Founder: "Silvio Micali"
    - header: Technology
    - Consensus: "Pure [proof of stake](../Proof_of_stake/) with cryptographic sortition"
    - Supply policy: "Fixed total of 10 billion ALGO"
    - Written in: "Go (go-algorand)"
    - License: "AGPL-3.0 (node); MIT for SDKs"
    - header: Links
    - Website: "[algorand.co](https://algorand.co/)"
    - Repository: "[algorand/go-algorand](https://github.com/algorand/go-algorand)"
---

> **In plain terms:** Algorand is a proof-of-stake blockchain that picks a small random committee for each block in secret. Attackers therefore cannot know whom to target. Blocks are final as soon as they are added, so payments cannot later be reversed by a fork.

**Algorand** is a public [blockchain](../Blockchain/) designed by MIT professor **Silvio Micali**, a winner of the 2012 Turing Award for work in cryptography.[^paper] Its currency is **ALGO**.[^devportal]

Algorand blocks have **instant finality**: once added, a block is never reversed.[^consensus]

## History

Micali and colleagues described Algorand in a 2016 paper; a peer-reviewed version appeared at the SOSP conference in 2017.[^paper] The company Algorand Inc. and the **Algorand Foundation** launched the mainnet on 19 June 2019.[^devportal] Smart contracts and later upgrades such as state proofs were added over time.[^devportal]

## How it works

- **Cryptographic sortition.** Each account privately runs a verifiable random function, weighted by its stake. The result tells it whether it is selected for a role in the next round.[^consensus]
- **Byzantine agreement.** Selected committee members propose and vote on a block in a few steps. A new committee is chosen each step, limiting targeted attacks.[^consensus]
- **Participation.** Any account with ALGO can take part; there is no minimum stake for consensus.[^consensus]
- **Smart contracts.** Programs run on the Algorand Virtual Machine and are written in languages such as TEAL or Python-based tools.[^devportal]

## Governance

Protocol changes are made by the developers and adopted when nodes upgrade.[^repo] The Algorand Foundation also ran a "governance" programme in which holders committed ALGO and voted on foundation policies in return for rewards.[^devportal]

## Controversies and criticism

- **Token distribution.** A large share of ALGO was held by the foundation and early backers and released over time. Critics said this caused persistent selling pressure.
- **Wallet hack.** In 2023 the popular third-party MyAlgo wallet was compromised and users' funds were stolen. The protocol itself was not breached.
- **Adoption.** Despite strong research credentials, application usage has trailed larger networks.

## Regulatory actions

| Date | Action |
|---|---|
| Jun 2023 | SEC complaints against Binance and Coinbase describe ALGO as a security.[^sec-coinbase] |
| 2025 | SEC drops those cases.[^cybernews] |
| 17 Mar 2026 | SEC and CFTC interpretation cites ALGO as an example of a digital commodity.[^lowenstein][^sec-2026] |

## Developer notes

`algod` is the node daemon and `goal` the command-line tool.[^repo]

```
goal node status -d ~/node/data
goal account balance -a <address>
```

**TestNet** and **BetaNet** are public test networks.[^devportal]

## See also

- [Proof of stake](../Proof_of_stake/)
- [Tezos](../Tezos/)
- [Cardano](../Cardano/)

## References

[^paper]: Chen, Jing; Micali, Silvio (2016). ["Algorand"](https://arxiv.org/abs/1607.01341). arXiv:1607.01341. Peer-reviewed version: Gilad, Hemo, Micali, Vlachos, Zeldovich, "Algorand: Scaling Byzantine Agreements for Cryptocurrencies", *SOSP 2017*.
[^consensus]: ["Consensus Overview"](https://developer.algorand.org/docs/get-details/algorand_consensus/). *Algorand Developer Portal*.
[^devportal]: ["Algorand Developer Portal"](https://developer.algorand.org/). Retrieved October 2026.
[^repo]: ["algorand/go-algorand"](https://github.com/algorand/go-algorand). GitHub.
[^sec-coinbase]: U.S. Securities and Exchange Commission (6 June 2023). ["SEC Charges Coinbase for Operating as an Unregistered Securities Exchange, Broker, and Clearing Agency"](https://www.sec.gov/news/press-release/2023-102). Press release 2023-102.
[^cybernews]: ["Binance calls SEC dismissal of lawsuit against crypto exchange 'landmark moment'"](https://cybernews.com/crypto/us-sec-binance-civil-lawsuit-dismissed-crypto-exchange/). *Cybernews*. May 2025.
[^sec-2026]: U.S. Securities and Exchange Commission (17 March 2026). ["SEC Clarifies the Application of Federal Securities Laws to Crypto Assets"](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets). Press release 2026-30; Release No. 33-11412.
[^lowenstein]: ["SEC Issues Interpretive Framework for Crypto Asset Classification"](https://www.lowenstein.com/news-insights/publications/client-alerts/sec-issues-interpretive-framework-for-crypto-asset-classification-fctm). *Lowenstein Sandler*. March 2026.
