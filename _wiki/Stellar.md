---
title: Stellar
description: Stellar and its currency the lumen (XLM) — history since 2014, how the Stellar Consensus Protocol, anchors and Soroban smart contracts work, the 2019 burn to a fixed 50 billion supply, governance by the Stellar Development Foundation, criticism and regulatory status, as of October 2026
aliases: [XLM, Lumen, Stellar Lumens, Stellar Development Foundation, Stellar Consensus Protocol, SCP, Soroban]
categories: [Cryptocurrencies, Payment networks]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: stellar.svg
  caption: Stellar emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: XLM
    - Launch date: "July 2014"
    - Founders: "Jed McCaleb, Joyce Kim"
    - header: Technology
    - Consensus: "Stellar Consensus Protocol (federated Byzantine agreement)"
    - Supply policy: "Fixed at about 50 billion XLM since the 2019 burn"
    - Written in: "C++ (stellar-core); Rust (Soroban)"
    - License: "Apache 2.0"
    - header: Links
    - Website: "[stellar.org](https://www.stellar.org/)"
    - Repository: "[stellar/stellar-core](https://github.com/stellar/stellar-core)"
---

> **In plain terms:** Stellar is a payments network. Banks, apps and other "anchors" issue tokens on it that stand for real money, such as dollars. People can send them worldwide in seconds for a tiny fee. Its own currency, the lumen, pays those fees. A non-profit foundation stewards the network.

**Stellar** is an open payment network. Its ledger records balances of the native currency, the **lumen** (XLM), and of tokens issued by **anchors**, companies that hold the real assets.[^docs] Its **Stellar Consensus Protocol** (SCP) lets participants choose whom to trust, instead of relying on mining.[^scp]

The non-profit **Stellar Development Foundation** (SDF) supports development and holds a large share of lumens.[^sdf-2019]

## History

Jed McCaleb, a co-founder of Ripple, and Joyce Kim launched Stellar in 2014, starting from a fork of the Ripple code.[^docs] In 2015 Stanford professor David Mazières published the Stellar Consensus Protocol, and the network was rebuilt around it.[^scp]

In November 2019 SDF burned about 55 billion lumens. That left a fixed supply of about 50 billion, and SDF said it would not burn any more.[^sdf-2019] Inflation had already been switched off earlier in 2019.[^sdf-2019]

In 2024 Stellar added **Soroban**, a smart-contract platform written in Rust.[^docs]

## How it works

- **SCP.** Each node chooses **quorum slices**, sets of nodes it trusts. When these overlap enough, the whole network agrees, closing a ledger every few seconds.[^scp]
- **Anchors and assets.** Regulated firms issue tokens for currencies such as dollars or euros, and users trust the issuers they choose.[^docs]
- **Built-in exchange.** The ledger has native order books and liquidity pools, and payments can convert between assets along the way.[^docs]
- **Fees.** Each operation costs a tiny fee in XLM, and accounts must hold a minimum balance.[^docs]

## Governance

Protocol changes are proposed as Core Advancement Proposals and take effect when validators vote to upgrade.[^docs] SDF runs validators and funds much of development.[^sdf-2019]

## Controversies and criticism

- **Ledger fork.** In December 2014, before SCP, a consensus bug briefly split the ledger, prompting the redesign.[^scp]
- **Foundation holdings.** SDF holds a large share of lumens, which critics see as centralising.[^sdf-2019]
- **Usage.** Critics argue that, despite partnerships, on-chain payment volume has stayed modest.

## Regulatory actions

| Date | Action |
|---|---|
| 17 Mar 2026 | SEC and CFTC interpretation names XLM a "digital commodity".[^sec-2026][^lowenstein] |

## Developer notes

`stellar-core` validates the ledger, and the **Horizon** API and **Stellar RPC** serve applications.[^docs] Developers can test on **Testnet** and **Futurenet**.[^docs]

```
curl -s https://horizon.stellar.org/ledgers?order=desc&limit=1
```

## See also

- [XRP](../XRP/)
- [Stablecoin](../Stablecoin/)
- [Smart contract](../Smart_contract/)

## References

[^docs]: ["Stellar Developer Docs"](https://developers.stellar.org/docs). Retrieved October 2026.
[^scp]: Mazières, David (2015). ["The Stellar Consensus Protocol: A Federated Model for Internet-level Consensus"](https://www.stellar.org/papers/stellar-consensus-protocol). *Stellar Development Foundation*.
[^sdf-2019]: Stellar Development Foundation (4 November 2019). ["SDF's Next Steps"](https://stellar.org/blog/foundation-news/sdfs-next-steps). *Stellar blog*.
[^sec-2026]: U.S. Securities and Exchange Commission (17 March 2026). ["SEC Clarifies the Application of Federal Securities Laws to Crypto Assets"](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets). Press release 2026-30; Release No. 33-11412.
[^lowenstein]: ["SEC Issues Interpretive Framework for Crypto Asset Classification"](https://www.lowenstein.com/news-insights/publications/client-alerts/sec-issues-interpretive-framework-for-crypto-asset-classification-fctm). *Lowenstein Sandler*. March 2026.
