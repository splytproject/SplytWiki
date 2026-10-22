---
title: Aave
description: Aave (AAVE), the decentralised lending protocol — history from ETHLend in 2017 to Aave v4 in 2026, how pools, overcollateralised loans, flash loans and the GHO stablecoin work, governance and the 2025–2026 DAO–Aave Labs dispute, criticism, and regulatory actions including the closed SEC investigation, as of October 2026
aliases: [AAVE, Aave protocol, ETHLend, LEND, GHO, Aave Labs, Aave DAO, Flash loan]
categories: [Cryptocurrencies, Decentralized finance, Lending]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: aave.svg
  caption: Aave emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: AAVE
    - Launch date: "January 2020 (Aave v1); ETHLend from 2017"
    - Founder: "Stani Kulechov"
    - header: Technology
    - Consensus: "None of its own; smart contracts on Ethereum and other chains"
    - Supply policy: "16 million AAVE (from LEND at 100:1 in 2020)"
    - Written in: "Solidity"
    - License: "Business Source License 1.1 (v3 origin), converting to MIT"
    - header: Links
    - Website: "[aave.com](https://aave.com/)"
    - Repository: "[aave-dao/aave-v3-origin](https://github.com/aave-dao/aave-v3-origin)"
---

> **In plain terms:** Aave lets people lend crypto to earn interest, or borrow by putting up other crypto as collateral, all through smart contracts. If a borrower's collateral falls too far in value, it is sold automatically to repay the loan. Holders of the AAVE token vote on the rules.

**Aave** is a [decentralized finance](../Decentralized_finance/) lending protocol on [Ethereum](../Ethereum/) and other blockchains.[^docs] Lenders deposit assets into pools and earn interest; borrowers lock [collateral](../glossary/Collateral/) worth more than their loan.[^docs] **AAVE** is its governance token.[^docs]

## History

Stani Kulechov founded **ETHLend**, a peer-to-peer lending platform, which sold LEND tokens in 2017. It rebranded as Aave, Finnish for "ghost", in 2018.[^docs] Aave v1, with shared lending pools, launched in January 2020.[^whitepaper-v1]

| Version | Date | Change |
|---|---|---|
| v1 | Jan 2020 | Pooled lending and **flash loans**[^whitepaper-v1] |
| v2 | Dec 2020 | Debt tokenisation and collateral swaps[^docs] |
| v3 | Mar 2022 | Efficiency mode, isolation mode, cross-chain portals[^docs] |
| v4 | 30 Mar 2026 | New "hub and spoke" design, launched on Ethereum[^aave-v4] |

In 2020 LEND converted to AAVE at 100 to 1. In July 2023 Aave launched its own stablecoin, **GHO**.[^docs]

## How it works

- **Pools and interest.** Interest rates rise as more of a pool is borrowed, to attract lenders and discourage borrowing.[^docs]
- **Health factor.** Each loan has a health factor; below 1, part of the collateral can be **liquidated** by third parties at a discount.[^docs]
- **Flash loans.** Borrowers can take uncollateralised loans that must be repaid within the same transaction.[^whitepaper-v1]
- **Safety Module.** AAVE holders can stake tokens to cover shortfalls, in return for rewards.[^docs]

## Governance

AAVE holders vote through **Aave Governance** on markets, risk parameters and treasury spending, with delegation.[^docs] In December 2025 a dispute broke out between the DAO and **Aave Labs**, the main developer, over fees from Aave's interface. In April 2026 the DAO approved a $25 million funding package for Aave Labs. Under the "Aave Will Win" framework, revenue from Aave-branded products goes to the DAO.[^cryptotimes-dao]

## Controversies and criticism

- **Bad debt.** Volatile or manipulable collateral has occasionally left the protocol with debt not fully covered by collateral.[^docs]
- **Flash-loan attacks.** Flash loans have been used in attacks on other protocols that relied on manipulable prices.[^whitepaper-v1]
- **DAO–Labs tension.** The 2025–2026 dispute raised questions about who controls value from a "decentralised" protocol.[^cryptotimes-dao]

## Regulatory actions

| Date | Action |
|---|---|
| Dec 2025 | The SEC tells Aave it has concluded a four-year investigation without recommending enforcement action.[^cryptobriefing-sec] |

## Developer notes

In v3, the `Pool` contract exposes `supply`, `borrow`, `repay`, `withdraw` and `flashLoan`.[^repo] Risk parameters are set per asset through governance.[^docs]

## See also

- [Decentralized finance](../Decentralized_finance/)
- [Uniswap](../Uniswap/)
- [Dai](../Dai/)
- [Chainlink](../Chainlink/)
- [Liquidation](../glossary/Liquidation/) (glossary)

## References

[^whitepaper-v1]: Aave (2020). ["Aave Protocol Whitepaper v1.0"](https://github.com/aave/aave-protocol/blob/master/docs/Aave_Protocol_Whitepaper_v1_0.pdf) (PDF). GitHub.
[^docs]: ["Aave Protocol Overview"](https://aave.com/docs). *Aave*. Retrieved October 2026.
[^repo]: ["aave-dao/aave-v3-origin"](https://github.com/aave-dao/aave-v3-origin). GitHub.
[^aave-v4]: Aave Labs (March 2026). ["Aave V4 is Live on Ethereum"](https://aave.com/blog/aave-v4-live-ethereum). *Aave blog*.
[^cryptotimes-dao]: ["Aave DAO Passes $25M Funding Deal for Aave Labs With 75% Support"](https://www.cryptotimes.io/2026/04/14/aave-dao-passes-25m-funding-deal-for-aave-labs-with-75-support/). *The Crypto Times*. 14 April 2026.
[^cryptobriefing-sec]: ["SEC concludes 4-year investigation into Aave Protocol"](https://cryptobriefing.com/aave-sec-investigation-conclusion/). *Crypto Briefing*. December 2025.
