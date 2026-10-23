---
title: Stablecoin
description: Cryptocurrency designed to keep a stable value against a reference asset such as the US dollar
aliases: [Stablecoins, USDT, USDC, Tether]
categories: [Stablecoins, Cryptocurrencies, Decentralized finance]
updated: 2026-10-23
last_modified: 2026-10-23
---
A **stablecoin** is a type of [cryptocurrency](../Cryptocurrency/) designed to keep a stable value relative to a reference asset, most commonly the US dollar. Stablecoins aim to combine the speed and programmability of blockchain tokens with the price stability of conventional money. They are widely used for trading, payments, cross-border transfers and as the main currency of [decentralized finance](../Decentralized_finance/).

Most stablecoins by value are issued by private companies that promise to redeem each token for one dollar. These companies hold reserves of cash and short-term government debt to back them. Others are created by [smart contracts](../Smart_contract/) backed by other cryptocurrencies, or rely on algorithms. The collapse of the algorithmic stablecoin TerraUSD in 2022 showed that a stablecoin's peg can fail. Since then, governments, including the European Union and the United States, have introduced specific laws for stablecoin issuers.[^mica]

## History

The first major stablecoin, **Tether** (USDT), launched in 2014 under the name *Realcoin* and was renamed later that year. It allowed traders to move dollar value between cryptocurrency exchanges quickly, at a time when many exchanges struggled to maintain bank accounts. Tether has repeatedly faced questions about whether its reserves fully backed its tokens. In 2021 it paid settlements to the New York Attorney General and the US Commodity Futures Trading Commission over misleading statements about its reserves.

**Dai**, created by the MakerDAO project on [Ethereum](../Ethereum/) in 2017, was the first widely used decentralized stablecoin, backed by cryptocurrency locked in smart contracts. **USD Coin** (USDC) was launched in 2018 by the payments company Circle together with the exchange Coinbase, promoting regular reserve reports by an accounting firm.

### Collapse of TerraUSD

**TerraUSD** (UST) was an *algorithmic* stablecoin on the Terra blockchain that was not backed by reserves. Instead, it relied on an arbitrage mechanism: one UST could always be exchanged for one dollar's worth of a sister token, LUNA. Demand for UST was boosted by a lending platform, Anchor, that paid depositors interest of around 20% a year. In May 2022 large withdrawals caused UST to lose its peg. Holders rushed to redeem UST for LUNA, creating huge amounts of new LUNA and driving its price towards zero. This pattern is known as a *death spiral*. Tens of billions of dollars of market value were wiped out within days, contributing to a wider crisis in the crypto industry that year.

### Regulation

The European Union's **Markets in Crypto-Assets Regulation** (MiCA) introduced rules for stablecoin issuers, which began to apply in June 2024, including licensing and reserve requirements.[^mica] In the United States the **GENIUS Act**, signed into law in July 2025, created the first federal framework for payment stablecoins. It requires issuers to hold reserves of high-quality liquid assets such as cash and short-term Treasury bills that fully back their tokens.[^genius]

## Types

### Fiat-backed

Fiat-backed stablecoins are issued by a central company that holds reserves of conventional assets, such as bank deposits and short-term government bonds. The issuer promises to redeem tokens one-for-one. Examples include Tether (USDT), USD Coin (USDC) and PayPal USD (PYUSD). They are simple to understand and closely track the dollar in normal conditions. However, users must trust the issuer to manage its reserves and honour redemptions, and issuers can freeze tokens held at particular addresses.

In March 2023 USDC briefly fell to about 87 cents. The fall followed Circle's disclosure that some of its reserves were held at Silicon Valley Bank, which had just failed. It regained its peg after US authorities guaranteed the bank's deposits.

### Crypto-backed

Crypto-backed stablecoins are created by smart contracts that lock up other cryptocurrencies as collateral. Because the collateral is itself volatile, these systems are **overcollateralized**: a user might lock $150 worth of ether to borrow $100 of stablecoins. If the collateral's value falls too far, the contract automatically sells it to keep the system solvent. Dai is the best-known example.

### Algorithmic

Algorithmic stablecoins try to maintain their peg by automatically expanding or contracting supply, often using a second token, rather than holding full reserves. Several, most notably TerraUSD, have failed when confidence was lost.

### Commodity-backed

Some stablecoins track the price of a commodity, most often gold, and are backed by physical reserves held by the issuer.

## Uses

- **Trading**: stablecoins are the main unit of account on many crypto exchanges. They let traders move in and out of positions without converting to bank money.
- **Decentralized finance**: they are borrowed, lent and supplied as liquidity in [DeFi](../Decentralized_finance/) protocols.
- **Payments and remittances**: they can be sent worldwide in minutes, at any time of day, often for low fees.
- **Store of value**: in countries with high inflation or capital controls, some people hold dollar stablecoins as an alternative to the local currency.

## Risks

Stablecoins carry several risks. The issuer may not hold the reserves it claims, and reserves may lose value or become temporarily inaccessible. A sudden rush of redemptions can break the peg. Smart contracts can contain bugs, and centrally issued tokens can be frozen. Regulators have also expressed concern that large stablecoins could affect the traditional financial system. For example, they could force rapid sales of government bonds in a crisis.

## See also

- [Decentralized finance](../Decentralized_finance/)
- [Ethereum](../Ethereum/)
- [Cryptocurrency](../Cryptocurrency/)
- [Smart contract](../Smart_contract/)

## References

[^mica]: ["Regulation (EU) 2023/1114 on markets in crypto-assets"](https://eur-lex.europa.eu/eli/reg/2023/1114/oj). *EUR-Lex*. Official Journal of the European Union.
[^genius]: ["S.1582 – GENIUS Act"](https://www.congress.gov/bill/119th-congress/senate-bill/1582). *Congress.gov*. 119th United States Congress.
