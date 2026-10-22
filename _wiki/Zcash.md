---
title: Zcash
description: Zcash (ZEC), the privacy cryptocurrency based on zero-knowledge proofs — history since the 2014 Zerocash paper and 2016 launch, how shielded pools and Equihash mining work, its development funding, the 2026 Orchard flaw and Ironwood upgrade, criticism and regulatory issues, as of October 2026
aliases: [ZEC, Zerocash, zk-SNARK, Electric Coin Company, Zcash Foundation, Zebra, Orchard, Sapling, Ironwood]
categories: [Cryptocurrencies, Privacy, Proof-of-work cryptocurrencies]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: zcash.svg
  caption: Zcash emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: ZEC
    - Launch date: "28 October 2016"
    - Founders: "Zooko Wilcox-O'Hearn; based on Zerocash research by Ben-Sasson, Chiesa, Garman, Green, Miers, Tromer and Virza"
    - header: Technology
    - Consensus: "[Proof of work](../Proof_of_work/) (Equihash)"
    - Supply policy: "Maximum 21 million ZEC; Bitcoin-like halvings"
    - Written in: "Rust (Zebra node, since zcashd's 2026 end of life)"
    - License: "Apache 2.0 / MIT"
    - header: Links
    - Website: "[z.cash](https://z.cash/)"
    - Repository: "[ZcashFoundation/zebra](https://github.com/ZcashFoundation/zebra)"
---

> **In plain terms:** Zcash works much like Bitcoin, but users can choose to hide who paid whom and how much. It does this with advanced cryptography called zero-knowledge proofs. Private and public transactions sit side by side. In 2026 a flaw in one of its privacy systems forced an emergency upgrade.

**Zcash** (ticker **ZEC**) is a [proof-of-work](../Proof_of_work/) cryptocurrency that offers optional privacy through **zero-knowledge proofs**.[^protocol] It descends from the **Zerocash** protocol, published by academic cryptographers in 2014.[^zerocash]

Zcash has both **transparent** addresses, which work like [Bitcoin](../Bitcoin/)'s, and **shielded** addresses, whose transactions hide sender, receiver and amount.[^protocol]

## History

The Zerocash paper was presented at the IEEE Symposium on Security and Privacy in 2014.[^zerocash] Zooko Wilcox-O'Hearn's company, later named the **Electric Coin Company** (ECC), launched Zcash on 28 October 2016.[^zcash-site] For the first four years, 20% of mining rewards funded the founders, investors and the non-profit **Zcash Foundation**.[^protocol]

| Year | Upgrade |
|---|---|
| 2016 | Launch with "Sprout" shielded pool and a trusted-setup ceremony |
| 2018 | **Sapling** makes shielded transactions faster and cheaper |
| 2022 | **NU5** introduces **Orchard**, using Halo 2 proofs that need no trusted setup |
| 2024 | **NU6** redirects part of the reward to a lockbox for future funding decisions |
| Jul 2026 | **NU6.3 "Ironwood"** replaces the Orchard pool after a security flaw |

In late May 2026 developers found a soundness flaw in the Orchard circuit that could have allowed undetectable counterfeiting. They said they found no evidence it was exploited.[^cryptobriefing] Orchard was restricted, and Ironwood, a new shielded pool, activated on 28 July 2026. Remaining Orchard funds can exit through a public "turnstile", so total supply can be checked.[^cryptobriefing][^eol]

The original `zcashd` node reached its scheduled end of life on 18 July 2026 at block 3,417,100. The network now runs on the Zebra node.[^eol]

## How it works

- **zk-SNARKs.** Shielded transactions include a short proof that they are valid, without revealing their details.[^protocol]
- **Shielded pools.** Funds sit in separate pools, such as Sapling and Ironwood. Moving funds between pools passes through a "turnstile" that tracks each pool's balance.[^protocol][^eol]
- **Viewing keys.** Users can share a key that lets an auditor see their shielded transactions.[^protocol]
- **Mining.** Zcash uses **Equihash**, a memory-hard proof of work, with a Bitcoin-like 21 million cap.[^protocol]

## Governance

Upgrades are specified as **Zcash Improvement Proposals** (ZIPs) and deployed in network upgrades.[^zip1015] ECC, the Zcash Foundation and other groups develop software, and funding is set by ZIPs such as ZIP 1015.[^zip1015]

## Controversies and criticism

- **Optional privacy.** Critics argue that because many transactions are transparent, the private ones stand out.[^protocol]
- **Trusted setups.** Early pools needed ceremonies; if their secret values had leaked, counterfeit coins could have been created undetectably. Orchard removed that need.[^protocol]
- **Funding.** Diverting mining rewards to development organisations has repeatedly divided the community.[^zip1015]
- **The 2026 flaw** showed the limits of proving that no counterfeiting happened in a private pool.[^cryptobriefing]

## Regulatory actions

Like other privacy coins, ZEC has been delisted by some exchanges. It also faces restrictions under rules such as the EU's 2024 Anti-Money Laundering Regulation, which applies from 2027.[^amlr]

## Developer notes

`zebrad` is the consensus node, and **Zallet** replaces the `zcashd` wallet. Some legacy `zcashd` RPC methods are not available.[^eol] The full specification is the Zcash Protocol Specification.[^protocol]

## See also

- [Monero](../Monero/)
- [Bitcoin](../Bitcoin/)
- [Proof of work](../Proof_of_work/)

## References

[^zerocash]: Ben-Sasson, Eli; Chiesa, Alessandro; Garman, Christina; Green, Matthew; Miers, Ian; Tromer, Eran; Virza, Madars (2014). ["Zerocash: Decentralized Anonymous Payments from Bitcoin"](http://zerocash-project.org/media/pdf/zerocash-extended-20140518.pdf) (PDF). *IEEE Symposium on Security and Privacy*.
[^protocol]: Hopwood, Daira-Emma; Bowe, Sean; Hornby, Taylor; Wilcox, Nathan. ["Zcash Protocol Specification"](https://zips.z.cash/protocol/protocol.pdf) (PDF). *Zcash*.
[^zcash-site]: ["Zcash"](https://z.cash/). *Electric Coin Company*. Retrieved October 2026.
[^zip1015]: ["ZIP 1015: Block Subsidy Allocation for Non-Direct Development Funding"](https://zips.z.cash/zip-1015). *Zcash Improvement Proposals*.
[^eol]: ["End of Life – The zcashd Book"](https://zcash.github.io/zcash/user/end-of-life.html). *Zcash developers*. Retrieved October 2026.
[^cryptobriefing]: ["Zcash migration reaches 85% completion as Orchard pool winds down to 3% of supply"](https://cryptobriefing.com/zcash-ironwood-migration-85-percent/). *Crypto Briefing*. 2026.
[^amlr]: Regulation (EU) 2024/1624, Article 79. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1624/oj).
