---
title: Polkadot
description: Polkadot (DOT), the multi-chain network designed by Gavin Wood — history since the 2016 white paper, how the relay chain, parachains and agile coretime work, OpenGov governance, the 2025 supply cap, criticism, and regulatory status, as of October 2026
aliases: [DOT, Polkadot network, Relay chain, Parachain, Substrate, Kusama, Web3 Foundation]
categories: [Cryptocurrencies, Smart contract platforms, Proof-of-stake cryptocurrencies]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: polkadot.svg
  caption: Polkadot emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: DOT
    - Launch date: "26 May 2020 (mainnet genesis)"
    - Founders: "Gavin Wood, Robert Habermeier, Peter Czaban (Web3 Foundation, Parity Technologies)"
    - header: Technology
    - Consensus: "Nominated [proof of stake](../Proof_of_stake/) (BABE and GRANDPA)"
    - Supply policy: "Capped at 2.1 billion DOT since 2025; issuance falls every two years"
    - Written in: "Rust (Polkadot SDK)"
    - License: "GPL-3.0 with Classpath exception, and Apache 2.0"
    - header: Links
    - Website: "[polkadot.com](https://polkadot.com/)"
    - Repository: "[paritytech/polkadot-sdk](https://github.com/paritytech/polkadot-sdk)"
---

> **In plain terms:** Polkadot is a network of blockchains. A central chain provides shared security, and specialised chains called parachains plug into it and can pass messages to each other. DOT holders stake to secure the network and vote on every change, including how the treasury spends money.

**Polkadot** is a [proof-of-stake](../Proof_of_stake/) network that connects multiple blockchains through a central **relay chain**.[^wiki] Its token, **DOT**, is used for staking, governance and buying blockspace for connected chains.[^wiki]

Polkadot was designed by Gavin Wood, a co-founder of [Ethereum](../Ethereum/) and author of its formal specification.[^whitepaper]

## History

Wood published the Polkadot white paper in 2016.[^whitepaper] The Web3 Foundation sold DOT in October 2017. In November 2017 a bug in Parity's multi-signature wallet library froze a large share of that sale's ether. Reports at the time put it at about 60%.[^techcrunch-parity]

The mainnet launched on 26 May 2020.[^wiki] **Parachain auctions** began in November 2021, letting projects lease slots on the relay chain.[^wiki] A sister network, **Kusama**, serves as an experimental "canary" network.[^wiki]

In September 2025 DOT holders passed Referendum 1710, capping supply at 2.1 billion DOT. Issuance was cut from 120 million a year on 14 March 2026, with further cuts every two years.[^block-cap]

## How it works

- **Relay chain.** Validators on the relay chain secure the whole network and finalise blocks using the BABE and GRANDPA protocols.[^wiki]
- **Parachains.** Independent chains, often built with the **Substrate** framework, connect to the relay chain and share its security.[^docs]
- **Messaging.** Cross-chain messaging (XCM) lets parachains exchange assets and data.[^docs]
- **Agile coretime.** Since 2024 projects buy blockspace ("coretime") in bulk or on demand, replacing long slot leases.[^docs]

## Governance

Polkadot uses **OpenGov**, an on-chain system in which DOT holders vote on referenda. Votes can be weighted more heavily by locking tokens for longer.[^wiki] Referenda cover upgrades, treasury spending and parameters such as issuance.[^block-cap]

## Controversies and criticism

- **Complexity.** Critics argue parachain auctions locked up capital and that the design is hard for developers to use; coretime aims to address this.[^docs]
- **Inflation.** Before the 2025 cap, DOT had no supply limit, which critics said diluted holders.[^block-cap]
- **Parity freeze.** The 2017 frozen funds were never recovered.[^techcrunch-parity]

## Regulatory actions

| Date | Action |
|---|---|
| 17 Mar 2026 | SEC and CFTC interpretation names DOT a "digital commodity".[^sec-2026][^lowenstein] |

## Developer notes

The node binary is `polkadot`, built from the Polkadot SDK, which also contains Substrate and Cumulus for parachains.[^repo] Its JSON-RPC interface includes `system_health` and `chain_getBlock`.[^docs] **Westend** and **Paseo** are test networks.[^docs]

## See also

- [Ethereum](../Ethereum/)
- [Cosmos](../Cosmos/)
- [Proof of stake](../Proof_of_stake/)
- [Blockchain scaling](../Blockchain_scaling/)

## References

[^whitepaper]: Wood, Gavin (2016). ["Polkadot: Vision for a Heterogeneous Multi-Chain Framework"](https://assets.polkadot.network/Polkadot-whitepaper.pdf) (PDF). *Web3 Foundation*.
[^wiki]: Web3 Foundation. ["Polkadot Wiki"](https://wiki.polkadot.network/). Retrieved October 2026.
[^docs]: ["Polkadot Developer Docs"](https://docs.polkadot.com/). Retrieved October 2026.
[^repo]: Parity Technologies. ["paritytech/polkadot-sdk"](https://github.com/paritytech/polkadot-sdk). GitHub.
[^techcrunch-parity]: ["A major vulnerability has frozen hundreds of millions of dollars of Ethereum"](https://techcrunch.com/2017/11/07/a-major-vulnerability-has-frozen-hundreds-of-millions-of-dollars-of-ethereum). *TechCrunch*. 7 November 2017.
[^block-cap]: ["Polkadot to tighten tokenomics by capping DOT supply at 2.1 billion"](https://www.theblock.co/post/370594/polkadot-dao-caps-dot-supply). *The Block*. September 2025.
[^sec-2026]: U.S. Securities and Exchange Commission (17 March 2026). ["SEC Clarifies the Application of Federal Securities Laws to Crypto Assets"](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets). Press release 2026-30; Release No. 33-11412.
[^lowenstein]: ["SEC Issues Interpretive Framework for Crypto Asset Classification"](https://www.lowenstein.com/news-insights/publications/client-alerts/sec-issues-interpretive-framework-for-crypto-asset-classification-fctm). *Lowenstein Sandler*. March 2026.
