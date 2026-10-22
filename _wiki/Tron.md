---
title: Tron
description: Tron (TRX), the delegated-proof-of-stake blockchain founded by Justin Sun — history since 2017, how its Super Representatives and resource model work, its role as the main network for Tether, criticism including the 2018 white-paper plagiarism allegations, and the SEC case settled in 2026, as of October 2026
aliases: [TRX, TRON, Tron blockchain, Tron DAO, Justin Sun]
categories: [Cryptocurrencies, Smart contract platforms, Proof-of-stake cryptocurrencies]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: tron.svg
  caption: Tron emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: TRX
    - Launch date: "May 2018 (mainnet); token sale August–September 2017"
    - Founder: Justin Sun
    - header: Technology
    - Consensus: "Delegated proof of stake (27 Super Representatives)"
    - Supply policy: "No fixed cap; new TRX issued per block and fees burned"
    - Written in: "Java (java-tron)"
    - License: "LGPL-3.0"
    - header: Links
    - Website: "[tron.network](https://tron.network/)"
    - Repository: "[tronprotocol/java-tron](https://github.com/tronprotocol/java-tron)"
---

> **In plain terms:** Tron is a blockchain run by 27 elected block producers, which makes transfers fast and cheap. Its biggest use is moving the Tether stablecoin: more USDT moves on Tron than on any other network. Its founder, Justin Sun, settled a US fraud case in 2026 without admitting wrongdoing.

**Tron** is a public blockchain that supports [smart contracts](../Smart_contract/) compatible with [Ethereum](../Ethereum/)'s and uses **delegated proof of stake**.[^devhub] Its native token is **TRX**.

Tron is the largest network for the [Tether](../Tether/) stablecoin, which makes it a major channel for dollar transfers in emerging markets and in illicit finance.[^tether-transparency]

## History

Justin Sun founded Tron in 2017 and sold TRX in a token sale that year.[^sec-2023] In January 2018 developers accused Tron's English white paper of copying material from the IPFS and Filecoin papers without attribution. Sun said volunteer translators had dropped the citations.[^fm-plagiarism]

The mainnet launched in 2018 and TRX moved from an Ethereum token to its own chain.[^whitepaper] Sun's company acquired BitTorrent in 2018.[^sec-2023]

In March 2023 the US Securities and Exchange Commission (SEC) sued Sun and his companies. It alleged unregistered offers of TRX and BTT and manipulation through wash trading.[^sec-2023] The case was paused in 2025 and settled in March 2026.[^unchained-settle]

## How it works

- **Super Representatives.** TRX holders stake and vote for 27 **Super Representatives**, who take turns producing a block every three seconds.[^devhub]
- **Resources.** Instead of paying gas for each transaction, accounts can stake TRX for **bandwidth** and **energy**, which cover transfers and contract execution. Otherwise TRX is burned as a fee.[^devhub]
- **TVM.** The Tron Virtual Machine is largely compatible with Ethereum's, so Solidity contracts can be ported.[^devhub]

## Governance

Super Representatives vote on network parameters through on-chain proposals.[^devhub] Because only 27 producers exist and voting follows stake, critics argue large holders, including entities linked to Sun, have outsized influence.[^sec-2023]

## Controversies and criticism

- **Plagiarism.** The 2018 white-paper allegations damaged Tron's reputation, though no formal finding was made.[^fm-plagiarism]
- **Centralisation.** With few block producers, critics say Tron is closer to a consortium than an open network.[^devhub]
- **Illicit finance.** Investigators have linked USDT on Tron to scams and money laundering, including pig-butchering operations.[^doj-prince]

## Regulatory actions

| Date | Action |
|---|---|
| 22 Mar 2023 | SEC charges Justin Sun and his companies with unregistered offerings and market manipulation.[^sec-2023] |
| 2025 | Case paused for settlement talks.[^unchained-settle] |
| 5 Mar 2026 | Settlement filed: Rainberry, owner of BitTorrent, pays a $10 million penalty; remaining claims dismissed. Sun neither admits nor denies the allegations.[^unchained-settle] |

## Developer notes

`java-tron` is the full-node client. Its HTTP API includes `/wallet/getnowblock` and `/wallet/getaccount`.[^devhub] **Shasta** and **Nile** are test networks.[^devhub]

```
curl -s https://api.trongrid.io/wallet/getnowblock
```

## See also

- [Tether](../Tether/)
- [Ethereum](../Ethereum/)
- [Cryptocurrency scams](../Cryptocurrency_scams/)
- [Proof of stake](../Proof_of_stake/)

## References

[^whitepaper]: Tron Foundation (2018). ["TRON: Advanced Decentralized Blockchain Platform"](https://tron.network/static/doc/white_paper_v_2_0.pdf) (PDF), white paper version 2.0.
[^devhub]: ["TRON Developer Hub"](https://developers.tron.network/). Retrieved October 2026.
[^tether-transparency]: Tether. ["Transparency"](https://tether.to/en/transparency/). Supply by network. Retrieved October 2026.
[^fm-plagiarism]: ["Allegations Surrounding Tron's Whitepaper Spark Twitter Backlash"](https://www.financemagnates.com/cryptocurrency/news/allegations-surrounding-trons-whitepaper-sparks-twitter-backlash/). *Finance Magnates*. January 2018.
[^sec-2023]: U.S. Securities and Exchange Commission (22 March 2023). ["SEC Charges Crypto Entrepreneur Justin Sun and His Companies for Fraud and Other Securities Law Violations"](https://www.sec.gov/news/press-release/2023-59). Press release 2023-59.
[^unchained-settle]: ["SEC Settles With Justin Sun, Closes Long Running Tron Case"](https://unchainedcrypto.com/sec-settles-with-justin-sun-ends-tron-trx-and-bittorrent-btt-securities-case/). *Unchained*. March 2026.
[^doj-prince]: U.S. Department of Justice (14 October 2025). ["Chairman of Prince Group Indicted for Operating Cambodian Forced Labor Scam Compounds Engaged in Cryptocurrency Fraud Schemes"](https://www.justice.gov/opa/pr/chairman-prince-group-indicted-operating-cambodian-forced-labor-scam-compounds-engaged).
