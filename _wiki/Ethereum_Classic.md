---
title: Ethereum Classic
description: Ethereum Classic (ETC), the original Ethereum chain that rejected the 2016 DAO bailout — history, how its proof-of-work and fixed monetary policy work, governance, the 2019 and 2020 51% attacks, criticism and regulatory status, as of October 2026
aliases: [ETC, Ethereum Classic blockchain, Code is law]
categories: [Cryptocurrencies, Smart contract platforms, Proof-of-work cryptocurrencies]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: ethereum-classic.svg
  caption: Ethereum Classic emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: ETC
    - Launch date: "30 July 2015 (shared genesis with Ethereum); separate chain from 20 July 2016"
    - Founders: "Original Ethereum founders; continued by a community that rejected the DAO fork"
    - header: Technology
    - Consensus: "[Proof of work](../Proof_of_work/) (Etchash)"
    - Supply policy: "Block reward cut 20% every 5 million blocks; about 210 million ETC maximum"
    - Written in: "Go (Core-Geth)"
    - License: "LGPL-3.0"
    - header: Links
    - Website: "[ethereumclassic.org](https://ethereumclassic.org/)"
    - Repository: "[etclabscore/core-geth](https://github.com/etclabscore/core-geth)"
---

> **In plain terms:** In 2016 Ethereum changed its own history to undo a large hack of a project called The DAO. A minority refused, saying the blockchain's record should never be rewritten, and kept running the original chain. That chain is Ethereum Classic. It still uses mining, which Ethereum abandoned in 2022.

**Ethereum Classic** (ticker **ETC**) is the continuation of the original [Ethereum](../Ethereum/) blockchain that did not adopt the July 2016 hard fork reversing The DAO hack.[^etc] It supports [smart contracts](../Smart_contract/) and uses [proof of work](../Proof_of_work/).[^etc]

Its supporters' motto is "code is law": the idea that transactions confirmed on a blockchain should not be reversed by human intervention.[^etc]

## History

In June 2016 an attacker drained about 3.6 million ether from The DAO, an investment fund built as a smart contract. On 20 July 2016, at block 1,920,000, Ethereum hard-forked to move the funds to a recovery contract.[^etc] Miners and users who rejected the change kept running the original chain, which became Ethereum Classic.[^etc]

Ethereum Classic suffered several **51% attacks**. In January 2019 an attacker reorganized the chain and double-spent about $1.1 million of ETC, according to Coinbase.[^secaffairs] In August 2020 three attacks in one month reorganized thousands of blocks.[^coindesk-2020]

When Ethereum switched to proof of stake in September 2022, some miners moved to Ethereum Classic.[^etc]

## How it works

- **Smart contracts.** ETC runs the Ethereum Virtual Machine, so most Ethereum contracts and tools work on it.[^etc]
- **Mining.** It uses **Etchash**, a version of Ethereum's original Ethash adapted in 2020 by ECIP-1099.[^ecip1099]
- **Monetary policy.** Under ECIP-1017, the block reward falls by 20% every 5 million blocks, capping total supply at about 210 million ETC.[^ecip1017]

## Governance

Changes are proposed as **Ethereum Classic Improvement Proposals** (ECIPs) and adopted through hard forks implemented by client developers and accepted by miners and node operators.[^ecip1017]

## Controversies and criticism

- **Security.** The 2019 and 2020 attacks showed the cost of attacking a smaller proof-of-work chain. Some exchanges raised confirmation requirements to around two weeks.[^coindesk-2020]
- **Relevance.** Critics argue ETC has far less development and usage than Ethereum. Supporters value its immutability and fixed supply.[^etc]

## Regulatory actions

No major enforcement action has targeted Ethereum Classic itself. It was not among the assets named in the SEC's 2026 classification, so its status is assessed case by case.[^lowenstein]

## Developer notes

**Core-Geth** is the main client and accepts Ethereum-style JSON-RPC calls such as `eth_blockNumber`.[^repo] The chain ID is `61`, and **Mordor** is the public testnet.[^etc]

## See also

- [Ethereum](../Ethereum/)
- [Decentralized autonomous organization](../Decentralized_autonomous_organization/)
- [Soft fork and hard fork](../Soft_fork_and_hard_fork/)
- [Chain reorganization](../Chain_reorganization/)

## References

[^etc]: ["Ethereum Classic"](https://ethereumclassic.org/). *ethereumclassic.org*. History, FAQ and network information. Retrieved October 2026.
[^ecip1017]: ["ECIP-1017: Monetary Policy and Final Modification to the Ethereum Classic Emission Schedule"](https://ecips.ethereumclassic.org/ECIPs/ecip-1017). *Ethereum Classic Improvement Proposals*.
[^ecip1099]: ["ECIP-1099: Calibrate Epoch Duration"](https://ecips.ethereumclassic.org/ECIPs/ecip-1099). *Ethereum Classic Improvement Proposals*.
[^repo]: ETC Labs Core. ["etclabscore/core-geth"](https://github.com/etclabscore/core-geth). GitHub.
[^secaffairs]: ["Coinbase suspended Ethereum Classic (ETC) trading after a successful 51% attack"](https://securityaffairs.com/79628/hacking/ethereum-classic-51-attack.html). *Security Affairs*. January 2019.
[^coindesk-2020]: ["Ethereum Classic Hit by Third 51% Attack in a Month"](https://coindesk.com/markets/2020/08/29/ethereum-classic-hit-by-third-51-attack-in-a-month/). *CoinDesk*. 29 August 2020.
[^lowenstein]: ["SEC Issues Interpretive Framework for Crypto Asset Classification"](https://www.lowenstein.com/news-insights/publications/client-alerts/sec-issues-interpretive-framework-for-crypto-asset-classification-fctm). *Lowenstein Sandler*. March 2026.
