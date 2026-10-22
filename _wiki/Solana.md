---
title: Solana
description: High-throughput proof-of-stake blockchain and its cryptocurrency, SOL
aliases: [SOL]
categories: [Cryptocurrencies, Smart contract platforms, Proof-of-stake cryptocurrencies]
updated: 2026-10-23
last_modified: 2026-10-23
infobox:
  image: solana.svg
  caption: Solana emblem (SplytWiki illustration)
  rows:
    - header: Denominations
    - Currency: SOL
    - Smallest unit: "lamport (10⁻⁹ SOL)"
    - header: Development
    - Founders: Anatoly Yakovenko, Raj Gokal
    - White paper: November 2017
    - Launch date: "16 March 2020 (mainnet beta)"
    - Developers: "Solana Labs, Anza, Jump Crypto and others"
    - Programs written in: "Rust (also C and C++)"
    - header: Ledger
    - Consensus: "[Proof of stake](../Proof_of_stake/) with proof of history"
    - Slot time: About 400 milliseconds
    - Supply policy: "No cap; inflation started at 8% a year and falls 15% a year toward 1.5%"
    - header: Software
    - Written in: "Rust (Agave); C (Firedancer)"
    - License: "Apache 2.0 (Agave)"
    - header: Links
    - Website: "[solana.com](https://solana.com/)"
    - Repository: "[anza-xyz/agave](https://github.com/anza-xyz/agave)"
---
**Solana** is a public [blockchain](../Blockchain/) platform designed for high transaction speed and low fees. Its native [cryptocurrency](../Cryptocurrency/) is **SOL**, which is used to pay transaction fees and to secure the network through [proof of stake](../Proof_of_stake/). Like [Ethereum](../Ethereum/), Solana supports [smart contracts](../Smart_contract/), called *programs* on Solana, and it hosts [decentralized finance](../Decentralized_finance/) applications, [stablecoins](../Stablecoin/), [NFTs](../Non-fungible_token/) and large numbers of memecoins.

Solana was proposed in 2017 by the software engineer Anatoly Yakovenko. He introduced a technique called **proof of history** to give the network a shared sense of time.[^whitepaper] Its mainnet beta launched in March 2020. The network has been praised for its speed and low costs. It has been criticised for outages in its early years and for the high hardware requirements of running a validator.

## History

Yakovenko, a former engineer at the chip company Qualcomm, published the Solana white paper in November 2017. He founded the company that became **Solana Labs** with Raj Gokal. It was originally called Loom and was renamed after Solana Beach, California, where the founders had lived and surfed. The non-profit **Solana Foundation**, based in Zug, Switzerland, supports the network's development and ecosystem.

The network's mainnet beta went live on 16 March 2020. Solana grew quickly during the cryptocurrency boom of 2021, attracting DeFi and NFT projects. It was closely associated with the [FTX](../FTX_collapse/) exchange and its affiliated trading firm, Alameda Research, which were prominent investors and users. When FTX collapsed in November 2022, several Solana projects were hit.

Activity on the network recovered in 2023 and 2024, driven partly by a wave of memecoin trading through token-launch platforms such as pump.fun. In 2023 Solana Mobile released *Saga*, an Android phone with built-in cryptocurrency features.

## Technology

### Proof of history

In most blockchains, nodes must communicate to agree on the order and timing of transactions. Solana's **proof of history** (PoH) is a cryptographic clock. A validator repeatedly runs a hash function, each time feeding in the previous output. The sequence of hashes proves that a certain amount of time has passed between events. Transactions are inserted into this sequence, giving them a verifiable order before validators vote. PoH is not a consensus mechanism by itself; it works together with a proof-of-stake voting system called *Tower BFT*.[^whitepaper]

### Performance

Solana produces blocks in short **slots** of about 400 milliseconds. Its design includes several other components intended to increase speed. *Sealevel* runs transactions that touch different accounts in parallel. *Turbine* splits blocks into small pieces to spread them across the network quickly. Transaction fees are typically a small fraction of a cent.

### Programs and accounts

Solana programs are usually written in the Rust programming language. Unlike Ethereum contracts, Solana programs are *stateless*: they store their data in separate *accounts* that are passed into each transaction. This lets the network work out which transactions can safely run in parallel.[^docs]

### Validator clients

Solana was originally run almost entirely on one software client written by Solana Labs and later maintained by the developer company Anza as *Agave*. To reduce the risk that a single bug could halt the network, the trading firm Jump Crypto developed an independent validator client called **Firedancer**.

## Outages

Solana suffered several major outages in its first years of operation. In September 2021 the network stopped producing blocks for about 17 hours after being flooded with transactions during a token launch. It went down several more times in 2022, often due to spam from automated trading bots. Each time, validators had to coordinate a restart. A further outage of about five hours occurred in February 2024. Developers responded with changes to how transactions are prioritised and how the network handles congestion.

## Controversies and criticism

Critics argue that Solana is less decentralized than networks such as Bitcoin or Ethereum. Running a validator requires powerful and expensive hardware, and insiders and early investors initially held a large share of its token supply. Its history of outages has also raised questions about reliability. Supporters counter that its performance makes it practical for uses such as high-frequency trading and payments. Those uses are too slow or costly on other blockchains, they say.

## Governance

Protocol changes are proposed as **Solana Improvement Documents** (SIMDs).[^simd] Some, such as changes to economics, are put to votes in which validators signal support with their stake. Others are adopted when validator clients enable new features.[^simd] The Solana Foundation supports development, and client teams such as Anza and Jump's Firedancer team write the software.

## Regulatory actions

| Date | Action |
|---|---|
| Jun 2023 | SEC complaints against Binance and Coinbase describe SOL as a security.[^sec-coinbase] |
| 2025 | SEC drops those cases.[^sec-dismiss] |
| 28 Oct 2025 | Bitwise's BSOL, the first US spot Solana exchange-traded product with full SOL exposure, begins trading.[^bsol] |
| 17 Mar 2026 | SEC and CFTC interpretation names SOL a "digital commodity".[^sec-2026][^lowenstein] |

## See also

- [Ethereum](../Ethereum/)
- [Proof of stake](../Proof_of_stake/)
- [Smart contract](../Smart_contract/)
- [Decentralized finance](../Decentralized_finance/)

## References

[^simd]: ["Solana Improvement Documents"](https://github.com/solana-foundation/solana-improvement-documents). *Solana Foundation*, GitHub.
[^sec-coinbase]: U.S. Securities and Exchange Commission (6 June 2023). ["SEC Charges Coinbase for Operating as an Unregistered Securities Exchange, Broker, and Clearing Agency"](https://www.sec.gov/news/press-release/2023-102). Press release 2023-102.
[^sec-dismiss]: ["Binance calls SEC dismissal of lawsuit against crypto exchange 'landmark moment'"](https://cybernews.com/crypto/us-sec-binance-civil-lawsuit-dismissed-crypto-exchange/). *Cybernews*. May 2025.
[^bsol]: Bitwise (October 2025). ["Bitwise Launches BSOL, First Spot Solana ETP in U.S."](https://bitwiseinvestments.com/newsroom/bitwise-launches-bsol-first-spot-solana-etp-in-us/). Press release.
[^sec-2026]: U.S. Securities and Exchange Commission (17 March 2026). ["SEC Clarifies the Application of Federal Securities Laws to Crypto Assets"](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets). Press release 2026-30; Release No. 33-11412.
[^lowenstein]: ["SEC Issues Interpretive Framework for Crypto Asset Classification"](https://www.lowenstein.com/news-insights/publications/client-alerts/sec-issues-interpretive-framework-for-crypto-asset-classification-fctm). *Lowenstein Sandler*. March 2026.

[^whitepaper]: Yakovenko, Anatoly (2017). ["Solana: A new architecture for a high performance blockchain"](https://solana.com/solana-whitepaper.pdf) (PDF). *solana.com*.
[^docs]: ["Solana Documentation"](https://solana.com/docs). *solana.com*.

## External links

- [solana.com](https://solana.com/), official website
