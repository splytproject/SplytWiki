---
title: Litecoin
description: Litecoin (LTC), one of the oldest cryptocurrencies — history since 2011, how its Scrypt mining, 84 million supply cap and MimbleWimble extension blocks work, governance, criticism, and regulatory actions including the first US spot Litecoin ETF, as of October 2026
aliases: [LTC, Litecoin Foundation, MWEB]
categories: [Cryptocurrencies, Proof-of-work cryptocurrencies]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: litecoin.svg
  caption: Litecoin symbol, Ł (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: LTC
    - Symbol: "Ł"
    - Launch date: "7 October 2011"
    - Founder: Charlie Lee
    - header: Technology
    - Consensus: "[Proof of work](../Proof_of_work/) (Scrypt)"
    - Supply policy: "Maximum 84 million LTC; reward halves every 840,000 blocks"
    - Written in: "C++"
    - License: "MIT"
    - header: Links
    - Website: "[litecoin.org](https://litecoin.org/)"
    - Repository: "[litecoin-project/litecoin](https://github.com/litecoin-project/litecoin)"
---

> **In plain terms:** Litecoin is an early copy of Bitcoin with a few changes. Blocks arrive four times as often and there will be four times as many coins. Mining also uses a different algorithm. It has often been a testing ground for upgrades later used on Bitcoin, and since 2022 it has offered optional private transactions.

**Litecoin** (ticker **LTC**) is a [proof-of-work](../Proof_of_work/) cryptocurrency created in 2011 by Charlie Lee as a modified version of [Bitcoin](../Bitcoin/).[^repo] It has a 2.5-minute block time and a maximum supply of 84 million coins, four times Bitcoin's.[^repo]

## History

Charlie Lee, then a Google engineer, released Litecoin in October 2011.[^repo] He later worked at Coinbase and founded the non-profit **Litecoin Foundation** in 2017.

Litecoin activated [Segregated Witness](../Segregated_Witness/) in May 2017, a few months before Bitcoin.[^repo] In December 2017 Lee announced he had sold or given away nearly all his LTC, citing a conflict of interest.

In May 2022 Litecoin activated **MimbleWimble Extension Blocks** (MWEB), adding optional confidential transactions.[^lip2] Its third halving, in August 2023, cut the block reward to 6.25 LTC.

The first US spot Litecoin exchange-traded fund, Canary's LTCC, began trading on Nasdaq in October 2025.[^canary]

## How it works

- **Mining.** Litecoin uses **Scrypt**, designed to need more memory than Bitcoin's SHA-256. Specialised Scrypt miners now dominate anyway.[^repo]
- **Blocks and supply.** Blocks target 2.5 minutes. The reward halves every 840,000 blocks, about every four years, toward the 84 million cap.[^repo]
- **Merged mining.** Litecoin miners can also mine [Dogecoin](../Dogecoin/), which shares the Scrypt algorithm.
- **MWEB.** Users can move coins into an extension block where amounts are hidden, and back out.[^lip2]

## Governance

Litecoin has no on-chain governance. Changes are proposed as Litecoin Improvement Proposals (LIPs), developed by Litecoin Core contributors and adopted when miners and node operators upgrade.[^lip2]

## Controversies and criticism

- **Purpose.** Critics argue Litecoin offers few advantages over Bitcoin or newer networks; supporters point to its long uptime and lower fees.
- **Privacy and exchanges.** After MWEB launched, several South Korean exchanges delisted LTC, citing rules against privacy features.
- **Founder sale.** Lee's 2017 sale near a price peak was criticised, though he disclosed it publicly.

## Regulatory actions

| Date | Action |
|---|---|
| Oct 2025 | First US spot Litecoin ETF begins trading.[^canary] |
| 17 Mar 2026 | SEC and CFTC interpretation names LTC a "digital commodity".[^sec-2026][^lowenstein] |

## Developer notes

Litecoin Core mirrors Bitcoin Core, with `litecoind` and `litecoin-cli`.[^repo] MWEB addresses begin with `ltcmweb1`.[^lip2]

```
litecoin-cli getblockchaininfo
litecoin-cli getmininginfo
```

## See also

- [Bitcoin](../Bitcoin/)
- [Dogecoin](../Dogecoin/)
- [Proof of work](../Proof_of_work/)
- [Segregated Witness](../Segregated_Witness/)

## References

[^repo]: Litecoin Core developers. ["litecoin-project/litecoin"](https://github.com/litecoin-project/litecoin). GitHub. Retrieved October 2026.
[^lip2]: Burkett, David; Yang, Andrew (2019). ["LIP-0002: Extension Blocks"](https://github.com/litecoin-project/lips/blob/master/lip-0002.mediawiki). *Litecoin Improvement Proposals*.
[^canary]: Canary Litecoin ETF (2025). ["Form 10-Q for the quarter ended 30 September 2025"](https://www.sec.gov/Archives/edgar/data/2039461/000199937125019914/ltcc-10q_093025.htm). *SEC EDGAR*.
[^sec-2026]: U.S. Securities and Exchange Commission (17 March 2026). ["SEC Clarifies the Application of Federal Securities Laws to Crypto Assets"](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets). Press release 2026-30; Release No. 33-11412.
[^lowenstein]: ["SEC Issues Interpretive Framework for Crypto Asset Classification"](https://www.lowenstein.com/news-insights/publications/client-alerts/sec-issues-interpretive-framework-for-crypto-asset-classification-fctm). *Lowenstein Sandler*. March 2026.
