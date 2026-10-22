---
title: Tezos
description: Tezos (XTZ), the self-amending proof-of-stake blockchain — history from the 2014 white paper and record 2017 ICO, how its on-chain amendment process and baking work, governance, the founders' dispute and lawsuits, criticism and regulatory status, as of October 2026
aliases: [XTZ, Tez, Tezos blockchain, Baking, Octez, Tezos Foundation]
categories: [Cryptocurrencies, Smart contract platforms, Proof-of-stake cryptocurrencies]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: tezos.svg
  caption: Tezos emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: XTZ
    - Launch date: "30 June 2018 (betanet); 17 September 2018 (mainnet)"
    - Founders: "Arthur Breitman, Kathleen Breitman"
    - header: Technology
    - Consensus: "[Proof of stake](../Proof_of_stake/) (\"baking\"; Tenderbake)"
    - Supply policy: "No cap; new tez issued to stakers"
    - Written in: "OCaml (Octez)"
    - License: "MIT"
    - header: Links
    - Website: "[tezos.com](https://tezos.com/)"
    - Repository: "[tezos/tezos (GitLab)](https://gitlab.com/tezos/tezos)"
---

> **In plain terms:** Tezos is a blockchain that can upgrade itself. Instead of splitting into rival chains when people disagree, holders of its currency, tez, vote on proposed changes, and approved upgrades switch on automatically. Validation is called "baking".

**Tezos** is a [proof-of-stake](../Proof_of_stake/) blockchain with built-in governance for upgrading its own protocol.[^whitepaper] Its currency is the **tez** (XTZ).[^docs] It was designed to avoid contentious [hard forks](../Soft_fork_and_hard_fork/) by letting stakeholders vote on amendments.[^whitepaper]

## History

Arthur Breitman published the Tezos white paper in 2014 under the pseudonym L.M. Goodman.[^whitepaper] In July 2017 the Swiss **Tezos Foundation** raised about $232 million in bitcoin and ether, then a record token sale.[^ab-ico]

A dispute between the Breitmans and the foundation's first president delayed the launch. Investors filed class-action lawsuits claiming the sale was an unregistered securities offering.[^siliconangle] The network launched in 2018. In 2020 the defendants agreed to a $25 million settlement without admitting wrongdoing.[^siliconangle]

## How it works

- **Baking.** Bakers stake tez to produce and attest blocks. Since 2023 the **Tenderbake** algorithm gives blocks deterministic finality.[^docs]
- **Delegation.** Holders can delegate tez to a baker without giving up ownership.[^docs]
- **Smart contracts.** Contracts are written in **Michelson**, a language designed for formal verification, or in higher-level languages that compile to it.[^docs]

## Governance

Protocol amendments go through a multi-stage on-chain vote: proposal, exploration vote, testing period, promotion vote and adoption. If approved, the new protocol activates automatically.[^docs] Each upgrade is named after a city in alphabetical order.[^docs]

## Controversies and criticism

- **Launch dispute and lawsuits.** The 2017–2018 dispute and litigation damaged early trust.[^siliconangle]
- **Low participation.** Critics argue few holders vote, so decisions rest with large bakers.[^docs]
- **Adoption.** Despite early enthusiasm, Tezos has seen less application activity than larger smart-contract platforms.

## Regulatory actions

| Date | Action |
|---|---|
| 2020 | $25 million class-action settlement over the 2017 ICO.[^siliconangle] |
| 17 Mar 2026 | SEC and CFTC interpretation names XTZ a "digital commodity".[^sec-2026][^lowenstein] |

## Developer notes

**Octez** is the main implementation, with `octez-node` and `octez-client`.[^docs]

```
octez-client rpc get /chains/main/blocks/head/header
octez-client get balance for <address>
```

**Ghostnet** is the long-running public testnet.[^docs]

## See also

- [Proof of stake](../Proof_of_stake/)
- [Soft fork and hard fork](../Soft_fork_and_hard_fork/)
- [Decentralized autonomous organization](../Decentralized_autonomous_organization/)
- [Algorand](../Algorand/)

## References

[^whitepaper]: Goodman, L.M. (2014). ["Tezos — a self-amending crypto-ledger"](https://tezos.com/whitepaper.pdf) (PDF) white paper.
[^docs]: ["Octez and Protocol Documentation"](https://octez.tezos.com/docs/). *Tezos*. Retrieved October 2026.
[^ab-ico]: ["Tezos raises $232 million for new cryptocurrency project"](https://americanbanker.com/news/tezos-raises-232-million-for-new-cryptocurrency-project). *American Banker*. July 2017.
[^siliconangle]: ["Tezos Foundation settles lawsuit with investors for $25M"](https://siliconangle.com/2020/03/22/tezos-foundation-settles-lawsuit-investors-25m/). *SiliconANGLE*. 22 March 2020.
[^sec-2026]: U.S. Securities and Exchange Commission (17 March 2026). ["SEC Clarifies the Application of Federal Securities Laws to Crypto Assets"](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets). Press release 2026-30; Release No. 33-11412.
[^lowenstein]: ["SEC Issues Interpretive Framework for Crypto Asset Classification"](https://www.lowenstein.com/news-insights/publications/client-alerts/sec-issues-interpretive-framework-for-crypto-asset-classification-fctm). *Lowenstein Sandler*. March 2026.
