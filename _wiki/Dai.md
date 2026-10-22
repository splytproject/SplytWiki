---
title: Dai
description: Dai (DAI), the crypto-collateralised dollar stablecoin of MakerDAO, now Sky — history since 2017, how vaults, liquidations and the savings rate work, governance by MKR and SKY holders, the 2020 "Black Thursday" crisis, criticism over USDC and real-world-asset backing, and the 2024 move to USDS, as of October 2026
aliases: [DAI, MakerDAO, Maker, Sky, USDS, Sky Dollar, MKR, Dai Savings Rate]
categories: [Cryptocurrencies, Stablecoins, Decentralized finance]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: dai.svg
  caption: Dai emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: DAI (and USDS since 2024)
    - Launch date: "18 December 2017 (single-collateral); November 2019 (multi-collateral)"
    - Founder: "Rune Christensen (MakerDAO)"
    - header: Technology
    - Consensus: "None of its own; smart contracts on Ethereum"
    - Supply policy: "Minted against over-collateralised vaults; soft peg to US$1"
    - Written in: "Solidity"
    - License: "AGPL-3.0"
    - header: Links
    - Website: "[sky.money](https://sky.money/)"
    - Repository: "[sky-ecosystem/dss](https://github.com/sky-ecosystem/dss)"
---

> **In plain terms:** Dai is a dollar-pegged token created by smart contracts rather than a company. Users lock up crypto worth more than the Dai they borrow; if the collateral's value falls too far, it is sold automatically. Holders of a governance token vote on the rules. In 2024 its creators rebranded as Sky and launched a successor, USDS.

**Dai** (ticker **DAI**) is a decentralised [stablecoin](../Stablecoin/) designed to hold a value of one US dollar. It is issued by the **Maker Protocol** on [Ethereum](../Ethereum/).[^whitepaper] Unlike [Tether](../Tether/) or [USD Coin](../USD_Coin/), Dai is created when users borrow against [collateral](../glossary/Collateral/) locked in smart contracts.[^whitepaper]

In August 2024 MakerDAO rebranded as **Sky** and introduced **USDS**, an upgraded stablecoin to which Dai can be converted one-for-one. Dai remains in circulation.[^theblock-sky][^docs]

## History

Rune Christensen founded MakerDAO in 2014–2015. "Single-collateral Dai", backed only by ether, launched on 18 December 2017. **Multi-collateral Dai**, accepting several assets, followed in November 2019.[^whitepaper]

On 12 March 2020, "**Black Thursday**", ether's price crashed and Ethereum became congested. Some liquidation auctions closed with zero bids, letting bidders take collateral for free and leaving the system short of funds.[^whitepaper]

Afterwards MakerDAO added the **Peg Stability Module**, which swaps USDC for Dai one-for-one. Over time it also invested in real-world assets such as US Treasury bills.[^docs] In August 2024 it rebranded as Sky; MKR could be converted to SKY at 1 to 24,000.[^theblock-sky]

## How it works

- **Vaults.** A user locks collateral, such as ether, in a vault and mints Dai up to a limit set by the **collateralisation ratio**.[^whitepaper]
- **Stability fee.** Borrowers pay interest on their Dai debt.[^whitepaper]
- **Liquidation.** If collateral falls below the required ratio, it is auctioned to repay the debt.[^whitepaper]
- **Savings rate.** Holders can deposit Dai in the **Dai Savings Rate** (DSR), or USDS in the Sky Savings Rate. Both pay interest funded by the protocol.[^docs]

## Governance

Holders of **MKR**, and since 2024 **SKY**, vote on collateral types, fees, the savings rate and other parameters through on-chain polls and executive votes.[^docs]

## Controversies and criticism

- **Dependence on USDC.** Much Dai was backed by USDC through the Peg Stability Module. When USDC briefly lost its peg in March 2023, Dai fell with it.[^circle-svb]
- **Real-world assets.** Holding Treasuries and loans brings returns but adds legal and counterparty risk, which critics say undermines decentralisation.[^docs]
- **Rebrand.** The Sky rebrand and the new token were controversial; founder Rune Christensen acknowledged the naming caused confusion.[^theblock-sky]

## Regulatory actions

Dai has not been the subject of a major enforcement action. Under the US GENIUS Act and the EU's MiCA rules, only authorised issuers may offer payment stablecoins to the public. That raises open questions for issuer-less designs like Dai.[^genius][^mica]

## Developer notes

The core contracts are the **Multi-Collateral Dai** system (`dss`): `Vat` (accounting), `Jug` (fees), `Pot` (savings) and `Dog`/`Clipper` (liquidations).[^repo] Dai's Ethereum address is `0x6B175474E89094C44Da98b954EedeAC495271d0F`.[^docs]

## See also

- [Stablecoin](../Stablecoin/)
- [Decentralized finance](../Decentralized_finance/)
- [USD Coin](../USD_Coin/)
- [Decentralized autonomous organization](../Decentralized_autonomous_organization/)
- [Terra](../Terra/)

## References

[^whitepaper]: Maker Foundation (2020). ["The Maker Protocol White Paper"](https://makerdao.com/en/whitepaper/). *MakerDAO*.
[^docs]: ["Sky Protocol Docs"](https://developers.sky.money/). *Sky Ecosystem*. Retrieved October 2026.
[^repo]: ["sky-ecosystem/dss"](https://github.com/sky-ecosystem/dss). GitHub. Multi-Collateral Dai contracts.
[^theblock-sky]: ["MakerDAO rebrands to Sky, DAI stablecoin optionally upgradeable to USDS"](https://www.theblock.co/amp/post/313235/makerdao-mkr-sky-dai-stablecoin-usds). *The Block*. August 2024.
[^circle-svb]: Circle (March 2023). ["An Update on USDC and Silicon Valley Bank"](https://www.circle.com/blog/an-update-on-usdc-and-silicon-valley-bank). *Circle blog*.
[^genius]: Guiding and Establishing National Innovation for U.S. Stablecoins Act (GENIUS Act), Pub. L. 119-27 (18 July 2025). [Text](https://www.congress.gov/bill/119th-congress/senate-bill/1582). *Congress.gov*.
[^mica]: Regulation (EU) 2023/1114 (MiCA). [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2023/1114/oj).
