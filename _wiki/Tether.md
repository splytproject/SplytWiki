---
title: Tether
description: Tether (USDT), the largest US-dollar stablecoin — history since 2014, how issuance and reserves work, governance, controversies over reserves and illicit use, and regulatory actions including the 2021 NYAG and CFTC settlements and the GENIUS Act, as of October 2026
aliases: [USDT, Tether (cryptocurrency), Tether stablecoin, USDt, USAT, Tether Limited]
categories: [Cryptocurrencies, Stablecoins]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: tether.svg
  caption: Tether emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: USDT
    - Type: "[Stablecoin](../Stablecoin/) pegged to the US dollar"
    - Launch date: "6 October 2014 (as Realcoin, on the Omni Layer)"
    - Founders: "Brock Pierce, Reeve Collins, Craig Sellars"
    - Issuer: "Tether Limited / Tether Operations (British Virgin Islands; headquarters in El Salvador from 2025)"
    - header: Technology
    - Consensus: "None of its own; issued as a token on other blockchains"
    - Supply policy: "Issued and redeemed on demand against reserves"
    - Main networks: "Tron, Ethereum and others"
    - Written in: "Not applicable (token contracts on other chains)"
    - License: "Proprietary (token contracts are published on-chain)"
    - header: Links
    - Website: "[tether.to](https://tether.to/)"
    - Repository: "None for a full node; token contracts are public"
---

> **In plain terms:** Tether is a cryptocurrency meant to be worth exactly one US dollar. The company Tether issues a token when someone deposits dollars and destroys it when they cash out. It says it holds reserves to back every token. It is the most widely used stablecoin, but its reserves and history have drawn repeated criticism.

**Tether** (ticker **USDT**) is a [stablecoin](../Stablecoin/), a cryptocurrency designed to hold a stable value. Each token is intended to be redeemable for one US dollar from its issuer, Tether.[^whitepaper][^transparency] It does not run its own blockchain; USDT is issued as a token on networks such as Tron and [Ethereum](../Ethereum/).[^transparency]

USDT is mainly used on cryptocurrency exchanges and for cross-border transfers. It has been the subject of legal settlements over its reserve claims, and of debate over its use in illicit finance.[^nyag][^cftc]

## History

Tether began in 2014 as **Realcoin**, founded by Brock Pierce, Reeve Collins and Craig Sellars, and was renamed Tether that November.[^whitepaper] Its first tokens were issued on the Omni Layer, a protocol built on top of [Bitcoin](../Bitcoin/).[^whitepaper] Tether shares executives and owners with the Bitfinex exchange.[^nyag]

USDT later expanded to other blockchains, especially Ethereum and Tron, where most of it now circulates.[^transparency] In 2021 New York's attorney general and the US Commodity Futures Trading Commission (CFTC) settled with Tether over past statements about its reserves.[^nyag][^cftc]

In January 2026 Tether launched **USAT**, a separate dollar stablecoin for the US market. It is issued by Anchorage Digital Bank under the GENIUS Act, with Cantor Fitzgerald as custodian.[^block-usat][^coindesk-usat]

## How it works

1. A verified customer sends dollars to Tether, which issues the same number of USDT tokens.
2. The tokens can be traded or transferred on any network where USDT exists.
3. A customer can redeem tokens with Tether for dollars, after which the tokens are destroyed.[^whitepaper]

Tether publishes quarterly reports on its reserves, prepared by an accounting firm. These are attestations: snapshots on a single date, not full audits.[^transparency] Its reserves include US Treasury bills, but also assets such as precious metals, secured loans and bitcoin.[^transparency][^techtimes-genius]

Tether can **freeze** USDT at specific addresses. It has done so at the request of law enforcement, including in sanctions and scam cases.[^transparency]

## Governance

Tether is a private company. Holders of USDT have no vote; the company alone decides on issuance, reserves, freezes and which networks to support.[^whitepaper] In 2025 the company said it would move its headquarters to El Salvador.

## Controversies and criticism

- **Reserves.** For years Tether said each token was backed one-to-one by dollars. New York's attorney general found that from 2017 Tether had at times not held enough reserves to back its tokens.[^nyag] The CFTC found Tether's claims of full dollar backing were untrue for much of 2016–2018.[^cftc]
- **Audits.** Critics note Tether has published attestations rather than full audits of its finances.[^coindesk-usat]
- **Market influence.** Researchers and critics have long debated whether new USDT issuance affects bitcoin prices.
- **Illicit use.** USDT, particularly on Tron, is widely used in scams and money laundering, according to blockchain-analysis firms and law-enforcement cases.[^doj-prince]
- **Separate US product.** Commentators argue USAT lets Tether keep USDT outside US rules. Tether says it intends to bring USDT into compliance.[^forbes-usat]

## Regulatory actions

| Date | Action |
|---|---|
| Feb 2021 | New York Attorney General settlement with Tether and Bitfinex: $18.5 million, quarterly reserve reports, and a ban on trading with New Yorkers.[^nyag] |
| Oct 2021 | CFTC order: Tether pays $41 million for untrue statements about its reserves.[^cftc] |
| Jul 2025 | US GENIUS Act sets reserve rules for payment stablecoins sold in the US.[^techtimes-genius] |
| Jan 2026 | USAT launched through Anchorage Digital Bank to comply with the GENIUS Act.[^block-usat] |

Under the GENIUS Act, reserves must be held in highly liquid assets such as cash and short-term Treasuries. About a quarter of USDT's reserves fell outside those assets in its latest disclosure in 2026.[^techtimes-genius] USDT is also not authorised as an e-money token under the EU's MiCA regulation.[^techtimes-genius]

## Developer notes

On Ethereum, USDT is an ERC-20-like token with an owner able to issue, redeem, freeze and pause. Its contract address is `0xdAC17F958D2ee523a2206206994597C13D831ec7`.[^transparency] Integrators should handle its non-standard return values: the contract's `transfer` does not return a boolean.

## See also

- [Stablecoin](../Stablecoin/)
- [USD Coin](../USD_Coin/)
- [Dai](../Dai/)
- [Tron](../Tron/)
- [Cryptocurrency regulation and tax in the United States](../Cryptocurrency_regulation_and_tax_in_the_United_States/)

## References

[^whitepaper]: Tether (2016). ["Tether: Fiat currencies on the Bitcoin blockchain"](https://tether.to/en/whitepaper/) (white paper). *tether.to*.
[^transparency]: Tether. ["Transparency"](https://tether.to/en/transparency/). Reserve reports, supported networks and contract addresses. Retrieved October 2026.
[^nyag]: New York State Attorney General (23 February 2021). ["Attorney General James Ends Virtual Currency Trading Platform Bitfinex's Illegal Activities in New York"](https://ag.ny.gov/press-release/2021/attorney-general-james-ends-virtual-currency-trading-platform-bitfinexs-illegal). Press release.
[^cftc]: Commodity Futures Trading Commission (15 October 2021). ["CFTC Orders Tether and Bitfinex to Pay Fines Totaling $42.5 Million"](https://www.cftc.gov/PressRoom/PressReleases/8450-21). Release 8450-21.
[^block-usat]: ["Anchorage releases first USAT attestation showing $17.6 million in reserves backing Tether's US stablecoin"](https://www.theblock.co/news/markets/2026-03-02-anchorage-usat-reserve-17-6-million-assets-backing-tether-us-stablecoin-391762). *The Block*. 2 March 2026.
[^coindesk-usat]: ["Tether taps Deloitte for first USAT reserve report"](https://www.coindesk.com/business/2026/03/03/tether-taps-deloitte-for-first-usat-reserve-report). *CoinDesk*. 3 March 2026.
[^techtimes-genius]: ["GENIUS Act Gets Criminal Teeth: Treasury Defines Who Can Sell Stablecoins; Tether Needs $47B Fix"](https://www.techtimes.com/articles/324819/20260818/genius-act-gets-criminal-teeth-treasury-defines-who-can-sell-stablecoins-tether-needs-47b-fix.htm). *Tech Times*. 18 August 2026.
[^forbes-usat]: ["Tether's USAT Exists So USDT Never Has To Comply"](https://www.forbes.com/sites/digital-assets/2026/05/27/tethers-usat-exists-so-usdt-never-has-to-comply/). *Forbes*. 27 May 2026.
[^doj-prince]: U.S. Department of Justice (14 October 2025). ["Chairman of Prince Group Indicted for Operating Cambodian Forced Labor Scam Compounds Engaged in Cryptocurrency Fraud Schemes"](https://www.justice.gov/opa/pr/chairman-prince-group-indicted-operating-cambodian-forced-labor-scam-compounds-engaged).
