---
title: Uniswap
description: Uniswap and its governance token UNI — history since the 2018 launch, how automated market makers, concentrated liquidity and v4 hooks work, governance and the 2025 UNIfication fee switch, criticism, and regulatory actions including the CFTC order and the closed SEC investigation, as of October 2026
aliases: [UNI, Uniswap Labs, Uniswap protocol, Uniswap v4, Automated market maker, AMM]
categories: [Cryptocurrencies, Decentralized finance, Decentralized exchanges]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: uniswap.svg
  caption: Uniswap emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: UNI
    - Launch date: "2 November 2018 (protocol); 16 September 2020 (UNI token)"
    - Founder: "Hayden Adams (Uniswap Labs)"
    - header: Technology
    - Consensus: "None of its own; smart contracts on Ethereum and other chains"
    - Supply policy: "1 billion UNI over four years, then up to 2% a year; burns since 2025"
    - Written in: "Solidity"
    - License: "Business Source License 1.1, converting to GPL (v3) and MIT (v4)"
    - header: Links
    - Website: "[uniswap.org](https://uniswap.org/)"
    - Repository: "[Uniswap/v4-core](https://github.com/Uniswap/v4-core)"
---

> **In plain terms:** Uniswap is a set of smart contracts that let anyone swap one token for another without a company in the middle. Instead of matching buyers and sellers, it uses pools of tokens supplied by users, and prices move automatically with each trade. UNI holders vote on how the protocol is run.

**Uniswap** is a [decentralised exchange](../glossary/DEX/) protocol on [Ethereum](../Ethereum/) and other blockchains.[^docs] It popularised the **automated market maker** (AMM), where trades are made against [liquidity pools](../glossary/Liquidity_pool/) rather than an order book.[^v1] Its governance token is **UNI**.[^docs]

## History

Hayden Adams launched Uniswap on 2 November 2018, building on an idea by Vitalik Buterin.[^docs]

| Version | Date | Change |
|---|---|---|
| v1 | Nov 2018 | Ether–token pools[^docs] |
| v2 | May 2020 | Direct token–token pools and price oracles[^v1] |
| v3 | May 2021 | **Concentrated liquidity**: providers choose a price range[^docs] |
| v4 | 31 Jan 2025 | **Hooks** and a single "singleton" contract for all pools[^v4-blog][^v4] |

On 16 September 2020 Uniswap airdropped 400 UNI to each address that had used the protocol.[^docs] In December 2025 UNI holders passed the **UNIfication** proposal. It turns on protocol fees that fund UNI buybacks and burns, and burned 100 million UNI from the treasury.[^block-unification]

## How it works

- **Constant product.** In basic pools the product of the two token balances stays constant, so buying one token raises its price.[^v1]
- **Liquidity providers.** Users deposit pairs of tokens and earn trading fees. They can suffer [impermanent loss](../glossary/Impermanent_loss/) when prices move.[^docs]
- **Concentrated liquidity.** In v3 and v4, providers place liquidity within chosen price ranges, using capital more efficiently.[^docs]
- **Hooks.** In v4, pool creators can attach contracts that run custom logic before or after swaps.[^v4]

## Governance

UNI holders vote on proposals through on-chain governance, with delegation. Changes include fee settings, treasury grants and deployments to new chains.[^docs] Uniswap Labs builds the main interface and wallet but does not control the core contracts.[^docs]

## Controversies and criticism

- **Fee switch debate.** For years holders debated turning on protocol fees; UNIfication finally did so in 2025.[^block-unification]
- **Scam tokens.** Because anyone can create a pool, many tokens traded on Uniswap are worthless or fraudulent.[^docs]
- **MEV.** Trades on AMMs are exposed to front-running and sandwich attacks.[^docs]

## Regulatory actions

| Date | Action |
|---|---|
| Apr 2024 | SEC sends Uniswap Labs a Wells notice.[^uni-sec] |
| 4 Sep 2024 | CFTC orders Uniswap Labs to pay $175,000 over leveraged tokens offered through its interface.[^cftc] |
| 25 Feb 2025 | SEC closes its investigation without action.[^uni-sec] |

## Developer notes

Swaps in v4 go through the `PoolManager` singleton, and hooks implement functions such as `beforeSwap` and `afterSwap`.[^v4] Each Business Source License version converts to an open licence after its change date: v3 to GPL-2.0-or-later in 2023, v4 to MIT by June 2027.[^repo]

## See also

- [Decentralized finance](../Decentralized_finance/)
- [Aave](../Aave/)
- [DEX](../glossary/DEX/) (glossary)
- [Decentralized autonomous organization](../Decentralized_autonomous_organization/)

## References

[^v1]: Adams, Hayden; Zinsmeister, Noah; Robinson, Dan (2020). ["Uniswap v2 Core"](https://uniswap.org/whitepaper.pdf) (PDF). *Uniswap*.
[^v4]: ["Uniswap v4 Core"](https://app.uniswap.org/whitepaper-v4.pdf) (PDF). *Uniswap Labs*.
[^docs]: ["Uniswap Docs"](https://docs.uniswap.org/). Retrieved October 2026.
[^repo]: ["Uniswap/v4-core"](https://github.com/Uniswap/v4-core). GitHub. Licence files.
[^v4-blog]: Uniswap Labs (31 January 2025). ["Uniswap v4 is Here"](https://blog.uniswap.org/uniswap-v4-is-here). *Uniswap blog*.
[^block-unification]: ["Uniswap governance passes major 'UNIfication' proposal; 100 million token burn imminent"](https://www.theblock.co/post/383742/uniswap-passes-unification-proposal). *The Block*. December 2025.
[^uni-sec]: Uniswap Labs (25 February 2025). ["A Win for DeFi – SEC Closes Investigation into Uniswap Labs"](https://blog.uniswap.org/a-win-for-defi). *Uniswap blog*.
[^cftc]: Commodity Futures Trading Commission (4 September 2024). ["CFTC Issues Order Against Uniswap Labs for Offering Illegal Digital Asset Derivatives Trading"](https://www.cftc.gov/PressRoom/PressReleases/8961-24). Release 8961-24.
