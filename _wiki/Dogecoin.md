---
title: Dogecoin
description: Dogecoin (DOGE), the original meme coin — history since its 2013 launch as a joke, how its Scrypt mining, merged mining and uncapped supply work, governance, criticism, and regulatory actions including the 2025 SEC staff statement on meme coins and the first US spot ETF, as of October 2026
aliases: [DOGE, Doge coin, Dogecoin Foundation]
categories: [Cryptocurrencies, Proof-of-work cryptocurrencies, Meme coins]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: dogecoin.svg
  caption: Dogecoin symbol, Ð (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: DOGE
    - Symbol: "Ð"
    - Launch date: "6 December 2013"
    - Founders: "Billy Markus, Jackson Palmer"
    - header: Technology
    - Consensus: "[Proof of work](../Proof_of_work/) (Scrypt), merged-mined with Litecoin"
    - Supply policy: "No cap; 10,000 DOGE created per block"
    - Written in: "C++"
    - License: "MIT"
    - header: Links
    - Website: "[dogecoin.com](https://dogecoin.com/)"
    - Repository: "[dogecoin/dogecoin](https://github.com/dogecoin/dogecoin)"
---

> **In plain terms:** Dogecoin began as a joke based on an internet meme of a Shiba Inu dog. It works much like Bitcoin and Litecoin, but blocks come every minute and new coins are created forever. Celebrity attention, especially from Elon Musk, has driven big price swings.

**Dogecoin** (ticker **DOGE**) is a [proof-of-work](../Proof_of_work/) cryptocurrency created in 2013 as a light-hearted alternative to [Bitcoin](../Bitcoin/).[^readme] It is widely regarded as the first **meme coin**, a cryptocurrency built around a joke or internet culture.[^sec-meme]

Dogecoin's code is derived from [Litecoin](../Litecoin/), which was itself derived from Bitcoin.[^readme]

## History

Software engineers Billy Markus and Jackson Palmer launched Dogecoin on 6 December 2013. It was named after the "Doge" meme of a Shiba Inu.[^readme] Its community became known for tipping and charity fundraising.

In 2014 Dogecoin adopted **merged mining** with Litecoin, so miners can secure both chains with the same work.[^readme] In 2015 its block reward became a fixed 10,000 DOGE.[^readme]

From 2019, public posts by Elon Musk repeatedly coincided with sharp price moves. Jackson Palmer left the project and became a public critic of the cryptocurrency industry in 2021.

The first US spot Dogecoin exchange-traded fund, from Grayscale, began trading on 24 November 2025.[^davispolk][^unchained]

## How it works

- **Mining.** Dogecoin uses the **Scrypt** hash function, the same as Litecoin. Blocks arrive about once a minute.[^readme]
- **Merged mining.** Miners of Litecoin can also mine Dogecoin blocks at no extra cost, which adds to Dogecoin's security.[^readme]
- **Supply.** There is no maximum supply. A fixed 10,000 DOGE per block means about 5.2 billion new coins a year, so inflation falls slowly as a percentage of supply.[^readme]

## Governance

Like Bitcoin, Dogecoin has no formal on-chain governance. Changes are made by volunteer developers of Dogecoin Core and adopted when miners and node operators upgrade.[^readme] The **Dogecoin Foundation**, revived in 2021, supports development.

## Controversies and criticism

- **Celebrity influence.** Prices have swung on comments by public figures, leading critics to call it a vehicle for speculation.
- **No cap.** Critics say unlimited supply makes it a poor store of value; supporters say mild inflation suits a currency meant for spending.[^readme]
- **Concentration.** A small number of addresses hold a large share of the supply.

## Regulatory actions

| Date | Action |
|---|---|
| 27 Feb 2025 | SEC staff statement: typical meme coins are not securities.[^sec-meme] |
| 24 Nov 2025 | First US spot Dogecoin ETF begins trading.[^davispolk] |
| 17 Mar 2026 | SEC and CFTC interpretation names DOGE a "digital commodity".[^sec-2026][^lowenstein] |

## Developer notes

Dogecoin Core works like Bitcoin Core, with the binaries `dogecoind` and `dogecoin-cli`.[^readme]

```
dogecoin-cli getblockchaininfo
dogecoin-cli getnetworkhashps
```

## See also

- [Litecoin](../Litecoin/)
- [Bitcoin](../Bitcoin/)
- [Proof of work](../Proof_of_work/)
- [Altcoins and tokens](../Altcoins_and_tokens/)

## References

[^readme]: Dogecoin Core developers. ["dogecoin/dogecoin: README"](https://github.com/dogecoin/dogecoin/blob/master/README.md). GitHub. Retrieved October 2026.
[^sec-meme]: U.S. Securities and Exchange Commission, Division of Corporation Finance (27 February 2025). ["Staff Statement on Meme Coins"](https://www.sec.gov/newsroom/speeches-statements/staff-statement-meme-coins).
[^davispolk]: ["Grayscale Dogecoin Trust ETF launches as first U.S. Dogecoin ETF"](https://www.davispolk.com/experience/grayscale-dogecoin-trust-etf-launches-first-u-s-dogecoin-etf). *Davis Polk*. November 2025.
[^unchained]: ["Grayscale Launches First Spot DOGE ETF"](https://unchainedcrypto.com/grayscale-launches-first-spot-doge-etf/). *Unchained*. November 2025.
[^sec-2026]: U.S. Securities and Exchange Commission (17 March 2026). ["SEC Clarifies the Application of Federal Securities Laws to Crypto Assets"](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets). Press release 2026-30; Release No. 33-11412.
[^lowenstein]: ["SEC Issues Interpretive Framework for Crypto Asset Classification"](https://www.lowenstein.com/news-insights/publications/client-alerts/sec-issues-interpretive-framework-for-crypto-asset-classification-fctm). *Lowenstein Sandler*. March 2026.
