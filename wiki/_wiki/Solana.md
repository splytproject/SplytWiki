---
title: Solana
description: High-throughput proof-of-stake blockchain and its cryptocurrency, SOL
aliases: [SOL]
categories: [Cryptocurrencies, Smart contract platforms, Proof-of-stake cryptocurrencies]
updated: 2026-10-12
infobox:
  rows:
    - header: Denominations
    - Currency: SOL
    - Smallest unit: "lamport (10⁻⁹ SOL)"
    - header: Development
    - Created by: Anatoly Yakovenko, Raj Gokal
    - White paper: November 2017
    - Mainnet beta: 16 March 2020
    - Developers: "Solana Labs, Anza, Jump Crypto and others"
    - Programs written in: "Rust (also C and C++)"
    - header: Ledger
    - Consensus: "[Proof of stake](../Proof_of_stake/) with proof of history"
    - Slot time: About 400 milliseconds
---
**Solana** is a public [blockchain](../Blockchain/) platform designed for high transaction speed and low fees. Its native [cryptocurrency](../Cryptocurrency/) is **SOL**, which is used to pay transaction fees and to secure the network through [proof of stake](../Proof_of_stake/). Like [Ethereum](../Ethereum/), Solana supports [smart contracts](../Smart_contract/), called *programs* on Solana, and it hosts [decentralized finance](../Decentralized_finance/) applications, [stablecoins](../Stablecoin/), [NFTs](../Non-fungible_token/) and large numbers of memecoins.

Solana was proposed in 2017 by the software engineer Anatoly Yakovenko, who introduced a technique called **proof of history** to give the network a shared sense of time.[^whitepaper] Its mainnet beta launched in March 2020. The network has been praised for its speed and low costs and criticised for a series of outages in its early years and for the high hardware requirements of running a validator.

## History

Yakovenko, a former engineer at the chip company Qualcomm, published the Solana white paper in November 2017. He founded the company that became **Solana Labs** with Raj Gokal; it was originally called Loom and was renamed after Solana Beach, California, where the founders had lived and surfed. The non-profit **Solana Foundation**, based in Zug, Switzerland, supports the network's development and ecosystem.

The network's mainnet beta went live on 16 March 2020. Solana grew quickly during the cryptocurrency boom of 2021, attracting DeFi and NFT projects. It was closely associated with the FTX exchange and its affiliated trading firm, Alameda Research, which were prominent investors and users; when FTX collapsed in November 2022, the price of SOL fell sharply and several Solana projects were hit.

Activity on the network recovered in 2023 and 2024, driven partly by a wave of memecoin trading through token-launch platforms such as pump.fun. In 2023 Solana Mobile released *Saga*, an Android phone with built-in cryptocurrency features.

## Technology

### Proof of history

In most blockchains, nodes must communicate to agree on the order and timing of transactions. Solana's **proof of history** (PoH) is a cryptographic clock: a validator repeatedly runs a hash function, each time feeding in the previous output, so the sequence of hashes proves that a certain amount of time has passed between events. Transactions are inserted into this sequence, giving them a verifiable order before validators vote. PoH is not a consensus mechanism by itself; it works together with a proof-of-stake voting system called *Tower BFT*.[^whitepaper]

### Performance

Solana produces blocks in short **slots** of about 400 milliseconds. Its design includes several other components intended to increase speed, such as *Sealevel*, which runs transactions that touch different accounts in parallel, and *Turbine*, which splits blocks into small pieces to spread them across the network quickly. Transaction fees are typically a small fraction of a cent.

### Programs and accounts

Solana programs are usually written in the Rust programming language. Unlike Ethereum contracts, Solana programs are *stateless*: they store their data in separate *accounts* that are passed into each transaction, which is what allows the network to work out which transactions can safely run in parallel.[^docs]

### Validator clients

Solana was originally run almost entirely on one software client written by Solana Labs and later maintained by the developer company Anza as *Agave*. To reduce the risk that a single bug could halt the network, the trading firm Jump Crypto developed an independent validator client called **Firedancer**.

## Outages

Solana suffered several major outages in its first years of operation. In September 2021 the network stopped producing blocks for about 17 hours after being flooded with transactions during a token launch, and it went down several more times in 2022, often due to spam from automated trading bots. Each time, validators had to coordinate a restart. A further outage of about five hours occurred in February 2024. Developers responded with changes to how transactions are prioritised and how the network handles congestion.

## Criticism

Critics argue that Solana is less decentralized than networks such as Bitcoin or Ethereum, because running a validator requires powerful and expensive hardware and because a large share of its token supply was initially held by insiders and early investors. Its history of outages has also raised questions about reliability. Supporters counter that the network's performance makes it practical for uses, such as high-frequency trading and payments, that are too slow or costly on other blockchains.

## See also

- [Ethereum](../Ethereum/)
- [Proof of stake](../Proof_of_stake/)
- [Smart contract](../Smart_contract/)
- [Decentralized finance](../Decentralized_finance/)

## References

[^whitepaper]: Yakovenko, Anatoly (2017). ["Solana: A new architecture for a high performance blockchain"](https://solana.com/solana-whitepaper.pdf) (PDF). *solana.com*.
[^docs]: ["Solana Documentation"](https://solana.com/docs). *solana.com*.

## External links

- [solana.com](https://solana.com/), official website
