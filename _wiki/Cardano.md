---
title: Cardano
description: Cardano (ADA), a proof-of-stake blockchain built on the Ouroboros protocol — history since 2017, how its eras and extended UTXO model work, on-chain governance after the 2025 Plomin hard fork, criticism, and regulatory actions, as of October 2026
aliases: [ADA, Cardano blockchain, Ouroboros, IOHK, Input Output]
categories: [Cryptocurrencies, Smart contract platforms, Proof-of-stake cryptocurrencies]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: cardano.svg
  caption: Cardano emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: ADA
    - Launch date: "29 September 2017"
    - Founders: "Charles Hoskinson, Jeremy Wood (Input Output, IOHK)"
    - header: Technology
    - Consensus: "[Proof of stake](../Proof_of_stake/) (Ouroboros)"
    - Supply policy: "Fixed maximum of 45 billion ADA"
    - Written in: "Haskell"
    - License: "Apache 2.0"
    - header: Links
    - Website: "[cardano.org](https://cardano.org/)"
    - Repository: "[IntersectMBO/cardano-node](https://github.com/IntersectMBO/cardano-node)"
---

> **In plain terms:** Cardano is a blockchain that, like Ethereum, can run smart contracts. It secures itself by proof of stake rather than mining. Its design is based on peer-reviewed research. Since 2025 ADA holders vote on upgrades and on spending from a shared treasury.

**Cardano** is a public [blockchain](../Blockchain/) that uses [proof of stake](../Proof_of_stake/) and supports [smart contracts](../Smart_contract/). Its currency is **ada** (ADA).[^docs] Its consensus protocol, **Ouroboros**, was the first proof-of-stake protocol published with a formal security proof.[^ouroboros]

Cardano is developed mainly by Input Output (IOHK), the Cardano Foundation and Emurgo. Since 2025 a community governance body called Intersect has coordinated its development.[^intersect]

## History

Cardano was founded by Charles Hoskinson, an early [Ethereum](../Ethereum/) co-founder, and Jeremy Wood. ADA was sold to investors, mainly in Japan, between 2015 and 2017. The network launched on 29 September 2017.[^docs]

Development has been divided into named eras:[^docs]

| Era | Main change |
|---|---|
| Byron (2017) | Launch; a federated network run by the founding entities |
| Shelley (2020) | Decentralised block production by community stake pools |
| Goguen (2021) | Smart contracts in the Alonzo upgrade, September 2021 |
| Basho | Scaling work |
| Voltaire (2024–2025) | On-chain governance, through the Chang and Plomin hard forks |

The **Plomin** hard fork on 29 January 2025 completed the governance era. It enabled treasury withdrawals, constitutional amendments and no-confidence motions decided by ADA holders.[^intersect][^block-plomin]

## How it works

- **Ouroboros.** Time is split into slots and epochs. Each slot's block producer is chosen at random, weighted by stake.[^ouroboros] ADA holders can **delegate** their stake to stake pools without giving up control of their coins.[^docs]
- **Extended UTXO.** Cardano tracks coins as unspent outputs, like [Bitcoin](../Bitcoin/), but lets outputs carry data and scripts. This makes smart-contract behaviour more predictable than account-based models.[^docs]
- **Smart contracts.** Contracts are written in **Plutus**, based on Haskell, or in higher-level languages that compile to it.[^docs]

## Governance

Cardano's governance follows **CIP-1694**. Three groups vote on governance actions: ADA holders through elected **delegated representatives** (DReps), stake pool operators, and a **Constitutional Committee**.[^intersect] The Cardano Constitution was ratified after Plomin and took effect in February 2025.[^block-plomin]

## Controversies and criticism

- **Pace.** Critics noted that smart contracts arrived four years after launch, later than competitors.[^docs]
- **Research-first approach.** Supporters see formal methods as a strength; critics say they slowed adoption.
- **Influence of founding entities.** The founding organisations held large stakes and steered early development, which governance aims to reduce.[^intersect]

## Regulatory actions

| Date | Action |
|---|---|
| Jun 2023 | SEC complaints against Binance and Coinbase describe ADA as a security.[^sec-coinbase] |
| 2025 | SEC drops those cases.[^cybernews-sec] |
| 17 Mar 2026 | SEC and CFTC interpretation names ADA a "digital commodity".[^sec-2026][^lowenstein] |

## Developer notes

The node is `cardano-node`, and `cardano-cli` queries it.[^repo]

```
cardano-cli query tip --mainnet
cardano-cli query utxo --address <addr> --mainnet
```

Test networks include **Preprod** and **Preview**, whose ADA has no value.[^docs]

## See also

- [Proof of stake](../Proof_of_stake/)
- [UTXO](../UTXO/)
- [Decentralized autonomous organization](../Decentralized_autonomous_organization/)
- [Ethereum](../Ethereum/)

## References

[^docs]: ["Cardano Docs"](https://docs.cardano.org/). *Cardano*. Retrieved October 2026.
[^ouroboros]: Kiayias, Aggelos; Russell, Alexander; David, Bernardo; Oliynykov, Roman (2017). ["Ouroboros: A Provably Secure Proof-of-Stake Blockchain Protocol"](https://eprint.iacr.org/2016/889). *CRYPTO 2017*. IACR ePrint 2016/889.
[^intersect]: Intersect (January 2025). ["Chang upgrade completed – Plomin hard fork achieved!"](https://www.intersectmbo.org/news/chang-upgrade-completed-plomin-hard-fork-achieved). *Intersect*.
[^block-plomin]: ["Cardano plans transition to 'full decentralized governance' after Wednesday's Plomin hard fork"](https://www.theblock.co/post/337680/cardano-plans-transition-to-full-decentralized-governance-after-wednesdays-plomin-hard-fork). *The Block*. January 2025.
[^repo]: ["IntersectMBO/cardano-node"](https://github.com/IntersectMBO/cardano-node). GitHub.
[^sec-coinbase]: U.S. Securities and Exchange Commission (6 June 2023). ["SEC Charges Coinbase for Operating as an Unregistered Securities Exchange, Broker, and Clearing Agency"](https://www.sec.gov/news/press-release/2023-102). Press release 2023-102.
[^cybernews-sec]: ["Binance calls SEC dismissal of lawsuit against crypto exchange 'landmark moment'"](https://cybernews.com/crypto/us-sec-binance-civil-lawsuit-dismissed-crypto-exchange/). *Cybernews*. May 2025.
[^sec-2026]: U.S. Securities and Exchange Commission (17 March 2026). ["SEC Clarifies the Application of Federal Securities Laws to Crypto Assets"](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets). Press release 2026-30; Release No. 33-11412.
[^lowenstein]: ["SEC Issues Interpretive Framework for Crypto Asset Classification"](https://www.lowenstein.com/news-insights/publications/client-alerts/sec-issues-interpretive-framework-for-crypto-asset-classification-fctm). *Lowenstein Sandler*. March 2026.
