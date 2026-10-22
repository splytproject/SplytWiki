---
title: USD Coin
description: USD Coin (USDC), the dollar stablecoin issued by Circle — history since 2018, how reserves and redemptions work, the 2023 Silicon Valley Bank depeg, governance, criticism, and regulation including MiCA, Circle's 2025 listing and its national trust charter, as of October 2026
aliases: [USDC, Circle USDC, USD Coin stablecoin, Centre Consortium]
categories: [Cryptocurrencies, Stablecoins]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: usd-coin.svg
  caption: USD Coin emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: USDC
    - Type: "[Stablecoin](../Stablecoin/) pegged to the US dollar"
    - Launch date: "26 September 2018"
    - Founders: "Circle and Coinbase (Centre Consortium); Circle alone since 2023"
    - Issuer: "Circle Internet Group (NYSE: CRCL)"
    - header: Technology
    - Consensus: "None of its own; issued on Ethereum, Solana and other chains"
    - Supply policy: "Minted and redeemed 1:1 against dollar reserves"
    - Written in: "Solidity (EVM token contracts)"
    - License: "Apache 2.0 (token contracts)"
    - header: Links
    - Website: "[circle.com/usdc](https://www.circle.com/usdc)"
    - Repository: "[circlefin/stablecoin-evm](https://github.com/circlefin/stablecoin-evm)"
---

> **In plain terms:** USD Coin is a digital dollar. The US company Circle creates a token when a customer deposits a dollar and destroys it when the customer cashes out. Its reserves are kept mostly in cash and short-term US government debt, and it publishes regular reports on them.

**USD Coin** (ticker **USDC**) is a dollar [stablecoin](../Stablecoin/) issued by **Circle Internet Group**. Each token is designed to be redeemable for one US dollar.[^circle-usdc] USDC exists as a token on many blockchains, including [Ethereum](../Ethereum/) and [Solana](../Solana/).[^circle-usdc]

USDC is the second-largest dollar stablecoin after [Tether](../Tether/). It is widely used in [decentralized finance](../Decentralized_finance/), payments and trading.

## History

Circle and the exchange Coinbase launched USDC in September 2018 through a joint body called the **Centre Consortium**. Circle took full control of USDC in 2023.

In March 2023 USDC briefly lost its peg. Circle disclosed that $3.3 billion of its reserves were held at **Silicon Valley Bank**, which had failed. The price recovered once US authorities guaranteed the bank's deposits.[^circle-svb]

Circle listed its shares on the New York Stock Exchange on 5 June 2025, raising about $1.05 billion.[^ipo] In 2026 it received approval from the US Office of the Comptroller of the Currency (OCC) for a national trust bank, Circle National Trust.[^ab-charter]

## How it works

1. An approved business sends dollars to Circle, which mints the same number of USDC.
2. USDC moves freely on supported blockchains.
3. Holders who are Circle customers can redeem USDC for dollars, and the tokens are burned.[^circle-usdc]

Circle says its reserves are held in cash and short-dated US Treasury bills, mostly through a government money-market fund. It publishes weekly reserve details and monthly attestations by an accounting firm.[^circle-transparency]

The token contracts let Circle **blacklist** addresses, freezing the USDC they hold, for example in response to sanctions or court orders.[^repo]

## Governance

USDC is controlled by Circle. Holders have no vote on reserves, freezes or supported networks.[^circle-usdc]

## Controversies and criticism

- **Bank risk.** The 2023 depeg showed that even cash reserves depend on the banks that hold them.[^circle-svb]
- **Freezing.** Supporters of censorship-resistant money criticise Circle's ability to freeze addresses. Others see it as a requirement for regulated money.[^repo]
- **Concentration in DeFi.** Many DeFi protocols, including some decentralised stablecoins, hold large amounts of USDC. A failure at Circle could spread to them; see [Dai](../Dai/).[^circle-svb]

## Regulatory actions

| Date | Action |
|---|---|
| Jul 2024 | Circle becomes one of the first stablecoin issuers authorised under the EU's MiCA regulation.[^cryptotimes-charter] |
| Jun 2025 | Circle lists on the NYSE as CRCL.[^ipo] |
| Jul 2025 | US GENIUS Act sets federal rules for payment stablecoins.[^cryptotimes-charter] |
| Dec 2025 | OCC conditionally approves Circle's national trust bank charter.[^bw-charter] |
| Jul 2026 | OCC grants final approval; the trust bank may open from 10 July 2026.[^ab-charter] |

## Developer notes

USDC on EVM chains is a proxy contract with an upgradeable implementation, following the `FiatToken` design in Circle's repository. On Ethereum, its address is `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`.[^repo] The contracts include `mint`, `burn`, `blacklist` and `pause` functions restricted to Circle-controlled roles.[^repo]

## See also

- [Stablecoin](../Stablecoin/)
- [Tether](../Tether/)
- [Dai](../Dai/)
- [Cryptocurrency regulation and tax in the United States](../Cryptocurrency_regulation_and_tax_in_the_United_States/)
- [Cryptocurrency regulation and tax in the European Union](../Cryptocurrency_regulation_and_tax_in_the_European_Union/)

## References

[^circle-usdc]: Circle. ["USDC"](https://www.circle.com/usdc). *circle.com*. Retrieved October 2026.
[^circle-transparency]: Circle. ["Transparency & Stability"](https://www.circle.com/transparency). Reserve reports. Retrieved October 2026.
[^circle-svb]: Circle (March 2023). ["An Update on USDC and Silicon Valley Bank"](https://www.circle.com/blog/an-update-on-usdc-and-silicon-valley-bank). *Circle blog*.
[^repo]: Circle. ["circlefin/stablecoin-evm"](https://github.com/circlefin/stablecoin-evm). GitHub. Token contracts and documentation.
[^ipo]: ["Circle raises $1.05 billion in long-awaited IPO, shares price at $31"](https://finance.yahoo.com/news/circle-raises-1-05-billion-230325081.html). *Fortune*, via *Yahoo Finance*. 4 June 2025.
[^bw-charter]: Circle (10 December 2025). ["Circle Receives Conditional Approval from OCC for National Trust Charter"](https://www.circle.com/pressroom/circle-receives-conditional-approval-from-occ-for-national-trust-charter). Press release.
[^ab-charter]: ["Circle is granted a trust bank charter from the OCC"](https://www.americanbanker.com/news/circle-is-granted-a-trust-bank-charter-from-the-occ). *American Banker*. July 2026.
[^cryptotimes-charter]: ["Circle Wins OCC Approval to Launch National Trust Bank for USDC"](https://www.cryptotimes.io/2026/07/10/circle-wins-occ-approval-to-launch-national-trust-bank-for-usdc/). *The Crypto Times*. 10 July 2026.
