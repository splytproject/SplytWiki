---
title: BNB
description: BNB, the token of the Binance exchange and BNB Smart Chain — history since the 2017 ICO, how the proof-of-staked-authority chain and token burns work, governance, criticism over centralisation, and regulatory actions including the 2023 US plea deal and the 2025 pardon of Changpeng Zhao, as of October 2026
aliases: [Binance Coin, BNB Smart Chain, BSC, BNB Chain, Build and Build]
categories: [Cryptocurrencies, Smart contract platforms, Exchanges]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: bnb.svg
  caption: BNB emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: BNB
    - Launch date: "July 2017 (ERC-20 token); BNB Smart Chain mainnet September 2020"
    - Founders: "Changpeng Zhao and the Binance team"
    - header: Technology
    - Consensus: "Proof of staked authority (a small set of elected validators)"
    - Supply policy: "200 million at launch; burns aim to reduce supply to 100 million"
    - Written in: "Go (BSC client, a fork of go-ethereum)"
    - License: "LGPL-3.0"
    - header: Links
    - Website: "[bnbchain.org](https://www.bnbchain.org/)"
    - Repository: "[bnb-chain/bsc](https://github.com/bnb-chain/bsc)"
---

> **In plain terms:** BNB started as a discount token for Binance, the world's largest crypto exchange. It now also pays fees on BNB Smart Chain, a cheaper copy of Ethereum run by a small group of validators. Binance regularly destroys BNB to shrink the supply. In 2023 Binance and its founder pleaded guilty to US money-laundering charges.

**BNB** is the cryptocurrency of the **Binance** ecosystem. It pays transaction fees on **BNB Smart Chain** (BSC), an Ethereum-compatible blockchain, and gives discounts on Binance's exchange.[^docs] BSC is run by a small number of validators elected by BNB stakers.[^docs]

BNB is closely tied to Binance and its founder, Changpeng Zhao ("CZ"), whose legal troubles have affected the token.[^doj-2023][^dlnews-pardon]

## History

Binance sold BNB in an initial coin offering (ICO) in July 2017, as an ERC-20 token on [Ethereum](../Ethereum/). Of the 200 million BNB created, half was sold to the public.[^cointelegraph-burn]

In 2019 BNB moved to Binance's own chain, Binance Chain. In September 2020 Binance launched **Binance Smart Chain**, an Ethereum-compatible network with smart contracts.[^docs] The two chains were merged under the name **BNB Chain** in 2022.

In November 2023 Binance pleaded guilty to US anti-money-laundering and sanctions violations and agreed to pay $4.3 billion. Zhao pleaded guilty and stepped down as chief executive.[^doj-2023] He served four months in prison in 2024 and was pardoned by President Donald Trump in October 2025.[^dlnews-pardon]

## How it works

- **Consensus.** BSC uses **proof of staked authority**. A small set of validators, elected according to staked BNB, take turns producing blocks every few seconds.[^docs]
- **Compatibility.** BSC runs the Ethereum Virtual Machine, so Ethereum wallets, tools and contracts work with small changes.[^repo]
- **Burns.** Binance runs a quarterly **Auto-Burn** that destroys BNB according to a formula based on its price and block production. Separately, the **BEP-95** rule burns part of every block's gas fees in real time. The aim is to cut supply to 100 million BNB.[^bep95][^cointelegraph-burn]

## Governance

Validators and BNB stakers vote on BNB Chain Evolution Proposals (BEPs).[^docs] In practice Binance and its affiliates have strong influence over development, the validator set and the burns.[^cointelegraph-burn]

## Controversies and criticism

- **Centralisation.** With few validators and a close link to one company, critics argue BSC is far less decentralised than Ethereum.[^docs]
- **Bridge hack.** On 6 October 2022 an attacker exploited a proof-verification bug in the BSC Token Hub bridge to mint 2 million BNB. Validators halted the chain for several hours, and about $100 million was moved off the chain.[^block-hack]
- **Compliance failures.** US prosecutors found Binance had let users from sanctioned countries trade and had failed to report suspicious transactions.[^doj-2023]

## Regulatory actions

| Date | Action |
|---|---|
| 5 Jun 2023 | SEC sues Binance and Zhao, alleging unregistered offers of securities including BNB.[^sec-2023] |
| 21 Nov 2023 | Binance pleads guilty to Bank Secrecy Act and sanctions violations; $4.3 billion resolution. Zhao pleads guilty.[^doj-2023] |
| 29 May 2025 | SEC case against Binance and Zhao dismissed with prejudice.[^cybernews-sec] |
| Oct 2025 | President Trump pardons Zhao.[^dlnews-pardon] |

## Developer notes

BSC is a fork of go-ethereum, so its node is configured much like Geth. Standard Ethereum JSON-RPC calls such as `eth_blockNumber` and `eth_getBalance` work on BSC endpoints.[^repo] The chain ID is `56` on mainnet and `97` on the testnet.[^docs]

## See also

- [Ethereum](../Ethereum/)
- [FTX collapse](../FTX_collapse/)
- [KYC and AML](../KYC_and_AML/)
- [Smart contract](../Smart_contract/)

## References

[^docs]: BNB Chain. ["BNB Chain Documentation"](https://docs.bnbchain.org/). Retrieved October 2026.
[^repo]: BNB Chain. ["bnb-chain/bsc"](https://github.com/bnb-chain/bsc). GitHub. Go client for BNB Smart Chain.
[^bep95]: BNB Chain. ["Introducing BEP-95 With a Real-Time Burning Mechanism"](https://www.bnbchain.org/en/blog/introducing-bep-95-with-a-real-time-burning-mechanism/). *BNB Chain blog*.
[^cointelegraph-burn]: ["What is BNB Auto-Burn and how does it work?"](https://cointelegraph.com/magazine/what-is-bnb-auto-burn-and-how-does-it-work). *Cointelegraph*.
[^doj-2023]: U.S. Department of Justice (21 November 2023). ["Binance and CEO Plead Guilty to Federal Charges in $4B Resolution"](https://www.justice.gov/opa/pr/binance-and-ceo-plead-guilty-federal-charges-4b-resolution). Office of Public Affairs.
[^sec-2023]: U.S. Securities and Exchange Commission (5 June 2023). ["SEC Files 13 Charges Against Binance Entities and Founder Changpeng Zhao"](https://www.sec.gov/news/press-release/2023-101). Press release 2023-101.
[^cybernews-sec]: ["Binance calls SEC dismissal of lawsuit against crypto exchange 'landmark moment'"](https://cybernews.com/crypto/us-sec-binance-civil-lawsuit-dismissed-crypto-exchange/). *Cybernews*. May 2025.
[^block-hack]: ["BNB Chain resumes service after hacker siphons at least $100 million"](https://www.theblock.co/post/175437/biance-bnb-chain-is-back-up-after-bridge-exploit). *The Block*. October 2022.
[^dlnews-pardon]: ["Biden's 'war on crypto is over' as Trump pardons ex-Binance CEO Changpeng Zhao"](https://www.dlnews.com/articles/regulation/biden-war-on-crypto-is-over-as-trump-pardons-ex-binance-ceo/). *DL News*. October 2025.
