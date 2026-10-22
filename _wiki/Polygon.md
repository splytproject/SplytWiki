---
title: Polygon
description: Polygon (POL, formerly MATIC), the Ethereum scaling network — history from Matic Network in 2017 to the 2024 POL migration, how the Polygon PoS chain with Heimdall and Bor works, governance, criticism over centralisation and outages, and regulatory actions, as of October 2026
aliases: [POL, MATIC, Matic Network, Polygon PoS, Polygon Labs, AggLayer, Heimdall, Bor]
categories: [Cryptocurrencies, Layer 2, Proof-of-stake cryptocurrencies]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: polygon.svg
  caption: Polygon emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: "POL (MATIC until 2024)"
    - Launch date: "30 May 2020 (Matic mainnet)"
    - Founders: "Jaynti Kanani, Sandeep Nailwal, Anurag Arjun; later Mihailo Bjelic"
    - header: Technology
    - Consensus: "[Proof of stake](../Proof_of_stake/) (Heimdall validators, Bor block producers), checkpointed to Ethereum"
    - Supply policy: "10 billion POL at migration, plus about 2% new issuance a year"
    - Written in: "Go (Bor, a go-ethereum fork; Heimdall)"
    - License: "LGPL-3.0"
    - header: Links
    - Website: "[polygon.technology](https://polygon.technology/)"
    - Repository: "[0xPolygon/bor](https://github.com/0xPolygon/bor)"
---

> **In plain terms:** Polygon is a cheaper, faster network that works alongside Ethereum. Its main chain runs its own validators but regularly records snapshots of its state on Ethereum. Ethereum apps and wallets work on it with few changes. Its token was renamed from MATIC to POL in 2024.

**Polygon** is a set of networks for scaling [Ethereum](../Ethereum/). Its best-known chain, **Polygon PoS**, is an Ethereum-compatible [proof-of-stake](../Proof_of_stake/) chain that posts checkpoints to Ethereum.[^docs] Its token is **POL**, which replaced **MATIC** in September 2024.[^decrypt-pol][^docs-pol]

Strictly, Polygon PoS is a **[sidechain](../glossary/Sidechain/)** with its own validators, not a rollup that inherits Ethereum's security.[^docs]

## History

Matic Network was founded in 2017 by Jaynti Kanani, Sandeep Nailwal and Anurag Arjun, and published its white paper that year.[^whitepaper] Its mainnet launched on 30 May 2020. In February 2021 it rebranded as **Polygon**.[^docs]

Polygon later expanded into zero-knowledge technology and the **AggLayer**, a system for connecting chains.[^docs] On 4 September 2024 MATIC was migrated to POL at a one-to-one ratio; balances on Polygon PoS converted automatically.[^decrypt-pol]

On 10 July 2025 the **Heimdall v2** hard fork aimed to cut finality to about five seconds.[^block-heimdall]

## How it works

- **Heimdall** is the validator layer. Validators stake POL on Ethereum, manage the validator set and submit **checkpoints** of Polygon PoS to Ethereum.[^docs]
- **Bor** is the block-producing layer, a fork of go-ethereum, so the chain runs the Ethereum Virtual Machine.[^repo]
- **Bridges** move assets between Ethereum and Polygon PoS.[^docs]

## Governance

Changes are proposed as **Polygon Improvement Proposals** (PIPs). Polygon Labs leads development, and validators adopt upgrades.[^docs]

## Controversies and criticism

- **Centralisation.** Critics note a limited validator set and, historically, multi-signature control of key contracts, which Polygon has worked to reduce.[^docs]
- **Security model.** Because it is a sidechain, users rely on Polygon's validators rather than Ethereum's.[^docs]
- **Disruptions.** Upgrades and incidents have at times slowed or paused finality, such as the planned delay during Heimdall v2.[^block-heimdall]

## Regulatory actions

| Date | Action |
|---|---|
| Jun 2023 | SEC complaints against Binance and Coinbase describe MATIC as a security.[^sec-coinbase] |
| 2025 | SEC drops those cases.[^cybernews] |

## Developer notes

Polygon PoS accepts standard Ethereum JSON-RPC, with chain ID `137` on mainnet. **Amoy** is the testnet.[^docs]

```
curl -s -X POST -H 'content-type:application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber"}' https://polygon-rpc.com
```

## See also

- [Ethereum](../Ethereum/)
- [Blockchain scaling](../Blockchain_scaling/)
- [Sidechain](../glossary/Sidechain/) (glossary)
- [Avalanche](../Avalanche/)

## References

[^whitepaper]: Matic Network (2017). ["Matic whitepaper"](https://github.com/maticnetwork/whitepaper). GitHub.
[^docs]: ["Polygon Developer Docs"](https://docs.polygon.technology/). Retrieved October 2026.
[^docs-pol]: ["MATIC to POL"](https://docs.polygon.technology/pos/get-started/matic-to-pol/). *Polygon Developer Docs*.
[^repo]: ["0xPolygon/bor"](https://github.com/0xPolygon/bor). GitHub.
[^decrypt-pol]: ["Polygon Is Migrating From MATIC to POL: Here's Everything You Need to Know"](https://decrypt.co/247763/polygon-matic-pol-migration-september-4). *Decrypt*. September 2024.
[^block-heimdall]: ["Polygon Heimdall v2 upgrade set for July 10 aims to cut finality to 5 seconds and address technical debt"](https://www.theblock.co/post/361715/polygon-heimdall-upgrade). *The Block*. July 2025.
[^sec-coinbase]: U.S. Securities and Exchange Commission (6 June 2023). ["SEC Charges Coinbase for Operating as an Unregistered Securities Exchange, Broker, and Clearing Agency"](https://www.sec.gov/news/press-release/2023-102). Press release 2023-102.
[^cybernews]: ["Binance calls SEC dismissal of lawsuit against crypto exchange 'landmark moment'"](https://cybernews.com/crypto/us-sec-binance-civil-lawsuit-dismissed-crypto-exchange/). *Cybernews*. May 2025.
