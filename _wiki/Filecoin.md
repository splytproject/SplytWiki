---
title: Filecoin
description: Filecoin (FIL), the decentralised storage network from Protocol Labs — history from the 2017 token sale to the 2020 mainnet, how proof of replication and proof of spacetime work, the FVM and fast finality, governance, criticism and regulatory status, as of October 2026
aliases: [FIL, Filecoin network, Protocol Labs, Proof of spacetime, Proof of replication, FVM, IPFS]
categories: [Cryptocurrencies, Decentralized storage]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: filecoin.svg
  caption: Filecoin emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: FIL
    - Launch date: "15 October 2020 (mainnet, block 148,888)"
    - Founder: "Juan Benet (Protocol Labs)"
    - header: Technology
    - Consensus: "Expected Consensus, weighted by storage power, with fast finality (F3) since 2025"
    - Supply policy: "Maximum 2 billion FIL"
    - Written in: "Go (Lotus); also Rust (Forest)"
    - License: "Apache 2.0 / MIT"
    - header: Links
    - Website: "[filecoin.io](https://filecoin.io/)"
    - Repository: "[filecoin-project/lotus](https://github.com/filecoin-project/lotus)"
---

> **In plain terms:** Filecoin is a marketplace for storing files. People with spare disk space become storage providers and earn FIL for keeping other people's data. The network regularly checks with cryptographic proofs that they really are storing it. It builds on IPFS, a system for addressing files by their content.

**Filecoin** is a decentralised storage network in which **storage providers** earn FIL for storing data and proving they continue to store it.[^whitepaper][^spec] It was created by **Protocol Labs**, which also developed the InterPlanetary File System (IPFS).[^whitepaper]

## History

Juan Benet founded Protocol Labs in 2014 and published the Filecoin white paper.[^whitepaper] In 2017 Filecoin raised over $205 million from accredited investors using a **SAFT**, a contract for future tokens.[^block-saft]

After several delays, the mainnet launched on 15 October 2020 at block 148,888.[^decrypt-launch] The **Filecoin Virtual Machine** (FVM) added smart contracts in March 2023.[^docs] **Fast Finality** (F3) went live on 29 April 2025, cutting the time to finality from hours to minutes.[^docs]

## How it works

- **Storage deals.** Clients agree terms with storage providers to store data for a period.[^docs]
- **Proof of replication.** A provider proves it has stored a unique, encoded copy of the data.[^spec]
- **Proof of spacetime.** The provider proves repeatedly over time that it still holds the data, or loses collateral.[^spec]
- **Storage power.** A provider's chance to win the right to produce a block rises with the storage it proves.[^spec]
- **FVM.** Smart contracts, including Ethereum-compatible ones, run on the chain.[^docs]

## Governance

Changes are proposed as **Filecoin Improvement Proposals** (FIPs) and adopted in network upgrades. The Filecoin Foundation and other groups take part in development.[^docs]

## Controversies and criticism

- **Demand.** Critics argue that much stored data is subsidised, for example through "verified deal" incentives, rather than paid for by genuine demand.[^docs]
- **Token unlocks.** Large early allocations to investors and Protocol Labs vested over time, adding supply.[^block-saft]
- **Launch delays.** The mainnet came three years after the token sale.[^decrypt-launch]

## Regulatory actions

| Date | Action |
|---|---|
| 2017 | Token sale structured as a SAFT for accredited US investors.[^block-saft] |
| Jun 2023 | SEC complaint against Coinbase describes FIL as a security.[^sec-coinbase] |
| Feb 2025 | SEC dismisses the Coinbase case.[^outlook] |

## Developer notes

**Lotus** is the reference client (`lotus` and `lotus-miner`); **Forest** is a Rust alternative.[^repo] Filecoin exposes an Ethereum-compatible JSON-RPC, so `eth_blockNumber` works.[^docs] **Calibration** is the main testnet.[^docs]

## See also

- [Proof of work](../Proof_of_work/)
- [Smart contract](../Smart_contract/)
- [Altcoins and tokens](../Altcoins_and_tokens/)

## References

[^whitepaper]: Protocol Labs (2017). ["Filecoin: A Decentralized Storage Network"](https://research.protocol.ai/publications/filecoin-a-decentralized-storage-network/). *Protocol Labs Research*.
[^spec]: ["Filecoin Spec"](https://spec.filecoin.io/). *Filecoin*. Retrieved October 2026.
[^docs]: ["Filecoin Docs"](https://docs.filecoin.io/). Retrieved October 2026.
[^repo]: ["filecoin-project/lotus"](https://github.com/filecoin-project/lotus). GitHub.
[^block-saft]: ["CoinList to distribute Filecoin tokens after the network's mainnet launch in August"](https://www.theblock.co/news/ecosystems/2020-06-26-coinlist-to-distribute-filecoin-tokens-after-the-networks-mainnet-launch-in-august-69654). *The Block*. June 2020.
[^decrypt-launch]: ["$205 Million ICO Project Filecoin Finally Sets a Launch Date"](https://decrypt.co/43156/filecoin-launch-date-mainnet). *Decrypt*. 2020.
[^sec-coinbase]: U.S. Securities and Exchange Commission (6 June 2023). ["SEC Charges Coinbase for Operating as an Unregistered Securities Exchange, Broker, and Clearing Agency"](https://www.sec.gov/news/press-release/2023-102). Press release 2023-102.
[^outlook]: ["US SEC dismisses lawsuit against crypto exchange Coinbase"](https://www.outlookmoney.com/invest/us-sec-dismisses-lawsuit-against-crypto-exchange-coinbase). *Outlook Money*. February 2025.
