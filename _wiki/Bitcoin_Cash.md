---
title: Bitcoin Cash
description: Bitcoin Cash (BCH), the 2017 hard fork of Bitcoin with larger blocks — history from the block size wars, how it differs from Bitcoin, later splits, upgrades including CashTokens and the 2026 CashVM upgrade, governance, criticism and regulatory actions, as of October 2026
aliases: [BCH, Bitcoin Cash Node, BCHN, Bitcoin ABC, CashTokens]
categories: [Cryptocurrencies, Proof-of-work cryptocurrencies, Bitcoin forks]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: bitcoin-cash.svg
  caption: Bitcoin Cash emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: BCH
    - Launch date: "1 August 2017 (fork at block 478,558)"
    - Founders: "Developers of Bitcoin ABC, backed by miners and investors who opposed SegWit"
    - header: Technology
    - Consensus: "[Proof of work](../Proof_of_work/) (SHA-256)"
    - Supply policy: "Maximum 21 million BCH; same halving schedule as Bitcoin"
    - Written in: "C++ (Bitcoin Cash Node)"
    - License: "MIT"
    - header: Links
    - Website: "[bitcoincash.org](https://bitcoincash.org/)"
    - Repository: "[Bitcoin Cash Node (GitLab)](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node)"
---

> **In plain terms:** Bitcoin Cash split from Bitcoin in 2017 after a long argument about how to scale. Its supporters wanted bigger blocks so more payments fit on-chain and fees stay low. Everyone who held bitcoin at the split also received the same amount of Bitcoin Cash.

**Bitcoin Cash** (ticker **BCH**) is a cryptocurrency created by a [hard fork](../Soft_fork_and_hard_fork/) of [Bitcoin](../Bitcoin/) on 1 August 2017.[^docs] It raised the block size limit instead of adopting [Segregated Witness](../Segregated_Witness/), aiming to be cheap "peer-to-peer electronic cash".[^docs]

## History

Bitcoin Cash came out of the **block size wars** of 2015–2017, a dispute over whether to scale Bitcoin by raising its 1 MB block limit. When Bitcoin moved to activate SegWit, a group of developers and miners launched Bitcoin Cash with 8 MB blocks. The chains split at block 478,558.[^docs]

Later events:[^docs][^bchn-v29]

| Date | Event |
|---|---|
| May 2018 | Block size limit raised to 32 MB |
| Nov 2018 | Dispute splits off **Bitcoin SV** after a "hash war" |
| Nov 2020 | New difficulty algorithm (ASERT); a further split creates eCash |
| May 2023 | **CashTokens** add native tokens and NFTs |
| 15 May 2026 | **CashVM** upgrade adds big-integer arithmetic, loops and pay-to-script outputs |

Prominent early backer Roger Ver later faced US tax charges. In October 2025 he entered a deferred prosecution agreement after paying nearly $50 million.[^doj-ver]

## How it works

Bitcoin Cash keeps Bitcoin's basic design: SHA-256 proof of work, a [UTXO](../UTXO/) model, 10-minute blocks and the same 21 million coin cap.[^docs] The main differences are larger blocks, a different difficulty adjustment, no SegWit, and new script opcodes added in yearly upgrades.[^docs]

## Governance

There is no on-chain governance. Changes are proposed as **CHIPs** (Cash Improvement Proposals). They are activated in a scheduled upgrade each May, once node software such as Bitcoin Cash Node implements them.[^bchn-v29]

## Controversies and criticism

- **Name.** Supporters long promoted BCH as the "real" Bitcoin; critics called this misleading.
- **Security.** BCH shares SHA-256 with Bitcoin but has a small fraction of its hash rate, which critics say makes attacks cheaper.
- **Splits.** Repeated splits, into Bitcoin SV and eCash, divided its community.[^docs]

## Regulatory actions

| Date | Action |
|---|---|
| 14 Oct 2025 | Roger Ver resolves his US tax case through a deferred prosecution agreement.[^doj-ver] |
| 17 Mar 2026 | SEC and CFTC interpretation names BCH a "digital commodity".[^sec-2026][^lowenstein] |

## Developer notes

Bitcoin Cash Node provides `bitcoind` and `bitcoin-cli` with Bitcoin-style RPCs such as `getblockchaininfo`.[^bchn-v29] Users must upgrade before each May activation; BCHN v29.0.0 implements the 2026 rules.[^bchn-v29]

## See also

- [Bitcoin](../Bitcoin/)
- [Soft fork and hard fork](../Soft_fork_and_hard_fork/)
- [Segregated Witness](../Segregated_Witness/)
- [Litecoin](../Litecoin/)

## References

[^docs]: ["Bitcoin Cash Protocol Documentation"](https://documentation.cash/). *documentation.cash*. Retrieved October 2026.
[^bchn-v29]: Bitcoin Cash Node (2026). ["Announcing Bitcoin Cash Node v29.0.0"](https://bitcoincashnode.org/en/newsroom/Announcing-Bitcoin-Cash-Node-v29-0-0). *bitcoincashnode.org*.
[^doj-ver]: U.S. Department of Justice (14 October 2025). ["Roger Ver Admits to Misconduct and Enters into Deferred Prosecution Agreement"](https://www.justice.gov/opa/pr/roger-ver-admits-misconduct-and-enters-deferred-prosecution-agreement). Office of Public Affairs.
[^sec-2026]: U.S. Securities and Exchange Commission (17 March 2026). ["SEC Clarifies the Application of Federal Securities Laws to Crypto Assets"](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets). Press release 2026-30; Release No. 33-11412.
[^lowenstein]: ["SEC Issues Interpretive Framework for Crypto Asset Classification"](https://www.lowenstein.com/news-insights/publications/client-alerts/sec-issues-interpretive-framework-for-crypto-asset-classification-fctm). *Lowenstein Sandler*. March 2026.
