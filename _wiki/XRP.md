---
title: XRP
description: XRP and the XRP Ledger — history since 2012, how the federated consensus and built-in exchange work, governance through validator amendments, criticism over Ripple's holdings, and the SEC v. Ripple case, spot ETFs and 2026 classification, as of October 2026
aliases: [XRP Ledger, XRPL, Ripple (cryptocurrency), XRP token]
categories: [Cryptocurrencies, Payment networks]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: xrp.svg
  caption: XRP emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: XRP
    - Launch date: "June 2012 (XRP Ledger)"
    - Founders: "Jed McCaleb, Arthur Britto, David Schwartz; Chris Larsen co-founded Ripple"
    - header: Technology
    - Consensus: "XRP Ledger consensus protocol (validators with unique node lists)"
    - Supply policy: "100 billion XRP created at launch; small amounts destroyed as fees"
    - Written in: "C++ (rippled)"
    - License: "ISC"
    - header: Links
    - Website: "[xrpl.org](https://xrpl.org/)"
    - Repository: "[XRPLF/rippled](https://github.com/XRPLF/rippled)"
---

> **In plain terms:** XRP is the currency of the XRP Ledger, a blockchain built for fast, cheap payments. Instead of miners, a set of trusted servers agree on transactions every few seconds. The company Ripple, which holds much of the XRP supply, promotes it for cross-border payments. A long US court case decided that some of Ripple's XRP sales were securities offerings.

**XRP** is the native cryptocurrency of the **XRP Ledger** (XRPL), a public blockchain designed for payments and currency exchange.[^docs] All 100 billion XRP were created when the ledger launched in 2012; none are mined.[^docs] A small amount of XRP is destroyed with every transaction as a fee.[^docs]

XRP is closely associated with **Ripple Labs**, a company that received most of the original supply and uses XRP in its payment products.[^sec-2020]

## History

Jed McCaleb, Arthur Britto and David Schwartz developed the XRP Ledger and launched it in June 2012. They gave 80 billion XRP to the company that became Ripple, co-founded with Chris Larsen.[^sec-2020] In 2014 Schwartz, Youngs and Britto published a paper describing its consensus algorithm.[^whitepaper]

In 2017 Ripple locked 55 billion XRP in escrow contracts that release up to 1 billion a month.[^docs]

In December 2020 the US Securities and Exchange Commission (SEC) sued Ripple and two executives. It alleged they raised over $1.3 billion through unregistered sales of XRP.[^sec-2020] In July 2023 a federal judge ruled that Ripple's direct sales to institutions were securities transactions, but its anonymous sales on exchanges were not.[^ripple-op] Both sides dropped their appeals in 2025, leaving a $125 million penalty in place.[^yahoo-appeal]

The first US spot XRP exchange-traded fund, Canary's XRPC, began trading on 13 November 2025.[^fm-etf]

## How it works

- **Consensus.** Each server chooses a **unique node list** (UNL) of validators it trusts not to collude. Servers repeatedly propose and vote on transactions until a supermajority agrees, closing a new ledger every few seconds.[^whitepaper][^docs]
- **Fees and reserves.** Each transaction destroys a small fee in XRP. Accounts must hold a minimum **reserve** of XRP to exist, discouraging spam.[^docs]
- **Built-in exchange.** The ledger has a native order book and automated market maker, so users can trade issued tokens and XRP directly.[^docs]
- **Issued currencies.** Anyone can issue tokens representing dollars or other assets on the ledger. Ripple's own dollar stablecoin, RLUSD, is one example.[^docs]

## Governance

Protocol changes are proposed as **amendments**. An amendment activates if more than 80% of trusted validators support it for two weeks.[^docs] Most servers use a default validator list published by the XRP Ledger Foundation or Ripple, which critics see as centralising.[^docs]

## Controversies and criticism

- **Centralisation.** Critics argue that reliance on default validator lists makes the network less decentralised than proof-of-work chains.[^docs]
- **Ripple's holdings.** Ripple received most of the initial supply and has sold XRP over time, which the SEC described as funding its operations.[^sec-2020]
- **Name confusion.** "Ripple" (the company) and "XRP" (the asset) are often confused, though the ledger runs independently of the company.[^docs]

## Regulatory actions

| Date | Action |
|---|---|
| 22 Dec 2020 | SEC sues Ripple, Brad Garlinghouse and Chris Larsen over unregistered XRP sales.[^sec-2020] |
| 13 Jul 2023 | Court rules institutional sales were investment contracts; programmatic exchange sales were not.[^ripple-op] |
| Aug 2025 | Appeals dismissed; $125 million penalty and injunction stand.[^yahoo-appeal] |
| 13 Nov 2025 | First US spot XRP ETF begins trading.[^fm-etf] |
| 17 Mar 2026 | SEC and CFTC interpretation names XRP among "digital commodities".[^sec-2026][^lowenstein] |

## Developer notes

The reference server is `rippled`. Its JSON-RPC and WebSocket APIs include `server_info`, `account_info`, `ledger` and `submit`.[^docs] Developers can test on the public **XRPL Testnet** and **Devnet**, whose XRP has no value.[^docs]

```
curl -s -X POST https://s1.ripple.com:51234/ -d '{"method":"server_info","params":[{}]}'
```

## See also

- [Stablecoin](../Stablecoin/)
- [Cryptocurrency regulation and tax in the United States](../Cryptocurrency_regulation_and_tax_in_the_United_States/)
- [Stellar](../Stellar/)
- [Altcoins and tokens](../Altcoins_and_tokens/)

## References

[^docs]: XRP Ledger Foundation. ["XRP Ledger Documentation"](https://xrpl.org/docs). *xrpl.org*. Retrieved October 2026.
[^whitepaper]: Schwartz, David; Youngs, Noah; Britto, Arthur (2014). ["The Ripple Protocol Consensus Algorithm"](https://ripple.com/files/ripple_consensus_whitepaper.pdf) (PDF). *Ripple Labs*.
[^sec-2020]: U.S. Securities and Exchange Commission (22 December 2020). ["SEC Charges Ripple and Two Executives with Conducting $1.3 Billion Unregistered Securities Offering"](https://www.sec.gov/news/press-release/2020-338). Press release 2020-338.
[^ripple-op]: *SEC v. Ripple Labs, Inc.*, No. 20-cv-10832 (S.D.N.Y. 13 July 2023). [Opinion and order](https://www.nysd.uscourts.gov/sites/default/files/2023-07/SEC%20vs%20Ripple%207-13-23.pdf) (PDF).
[^yahoo-appeal]: ["Second Circuit Court officially dismisses Ripple-SEC appeals, ending four-year legal battle"](https://finance.yahoo.com/news/second-circuit-court-officially-dismisses-192900751.html). *Yahoo Finance*. August 2025.
[^fm-etf]: ["XRP Joins ETF Market as Canary Capital Debuts First U.S. Spot Fund"](https://www.financemagnates.com/trending/xrp-joins-etf-market-as-canary-capital-debuts-first-us-spot-fund). *Finance Magnates*. November 2025.
[^sec-2026]: U.S. Securities and Exchange Commission (17 March 2026). ["SEC Clarifies the Application of Federal Securities Laws to Crypto Assets"](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets). Press release 2026-30; Release No. 33-11412.
[^lowenstein]: ["SEC Issues Interpretive Framework for Crypto Asset Classification"](https://www.lowenstein.com/news-insights/publications/client-alerts/sec-issues-interpretive-framework-for-crypto-asset-classification-fctm). *Lowenstein Sandler*. March 2026. Lists the named digital commodities.
