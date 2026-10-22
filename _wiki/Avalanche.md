---
title: Avalanche
description: Avalanche (AVAX), the proof-of-stake platform built on the Snow family of consensus protocols — history since 2018, how its primary network and Avalanche L1s work, the Avalanche9000 upgrade, governance, criticism, and regulatory status including the first US spot AVAX ETF, as of October 2026
aliases: [AVAX, Avalanche blockchain, Ava Labs, Avalanche L1, Subnet, Snowman]
categories: [Cryptocurrencies, Smart contract platforms, Proof-of-stake cryptocurrencies]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: avalanche.svg
  caption: Avalanche emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: AVAX
    - Launch date: "21 September 2020 (mainnet)"
    - Founders: "Emin Gün Sirer, Kevin Sekniqi, Maofan \"Ted\" Yin (Ava Labs)"
    - header: Technology
    - Consensus: "Snow protocols (Avalanche and Snowman) with [proof of stake](../Proof_of_stake/)"
    - Supply policy: "Maximum 720 million AVAX; transaction fees burned"
    - Written in: "Go (AvalancheGo)"
    - License: "BSD 3-clause"
    - header: Links
    - Website: "[avax.network](https://www.avax.network/)"
    - Repository: "[ava-labs/avalanchego](https://github.com/ava-labs/avalanchego)"
---

> **In plain terms:** Avalanche is a blockchain platform where validators reach agreement by repeatedly polling small random groups of each other. This makes confirmation very fast. Besides its main chains, anyone can launch their own customised blockchain, called an Avalanche L1, using Avalanche's tools.

**Avalanche** is a [proof-of-stake](../Proof_of_stake/) blockchain platform developed by **Ava Labs**. Its token is **AVAX**.[^docs] Its consensus protocols, the "Snow" family, were first described in a 2018 paper by a pseudonymous group called Team Rocket.[^snow]

## History

The Snow consensus paper appeared in 2018 and was later revised by Maofan Yin, Kevin Sekniqi, Robbert van Renesse and Emin Gün Sirer.[^snow] Sirer, a Cornell professor, co-founded Ava Labs. The mainnet launched on 21 September 2020.[^platform]

In December 2024 the **Avalanche9000** upgrade replaced "subnets" with cheaper, more flexible **Avalanche L1s**, cutting the cost for validators to run them.[^docs]

The first US spot AVAX exchange-traded fund, Bitwise's BAVA, launched in 2026.[^nansen]

## How it works

- **Snow consensus.** A validator asks a small random sample of other validators what they prefer, and switches if a large majority disagrees. Repeating this quickly drives the network to agreement.[^snow]
- **Primary network.** It has three chains. The **X-Chain** handles asset transfers and the **P-Chain** validators and L1s. The **C-Chain** runs the Ethereum Virtual Machine.[^platform]
- **Avalanche L1s.** Projects can launch their own blockchains with custom rules, validators and fee tokens.[^docs]
- **Fees and supply.** All transaction fees are burned. Total supply is capped at 720 million AVAX, with staking rewards issued from the remainder.[^platform]

## Governance

There is no general on-chain token governance. Changes are proposed as **Avalanche Community Proposals** (ACPs) and adopted when validators upgrade.[^docs] Ava Labs leads most development.

## Controversies and criticism

- **Influence of Ava Labs.** Critics note that Ava Labs and the Avalanche Foundation hold large token allocations and lead development.[^platform]
- **Fragmentation.** Activity is spread across many L1s, which critics say splits liquidity.[^docs]

## Regulatory actions

| Date | Action |
|---|---|
| 17 Mar 2026 | SEC and CFTC interpretation names AVAX a "digital commodity".[^sec-2026][^lowenstein] |
| 2026 | First US spot AVAX ETF launches; CME lists AVAX futures.[^nansen] |

## Developer notes

The node is `avalanchego`. The C-Chain accepts Ethereum JSON-RPC at `/ext/bc/C/rpc`, with chain ID `43114` on mainnet. **Fuji** is the public testnet.[^docs]

```
curl -s -X POST -H 'content-type:application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"info.getNodeVersion"}' \
  http://127.0.0.1:9650/ext/info
```

## See also

- [Proof of stake](../Proof_of_stake/)
- [Ethereum](../Ethereum/)
- [Blockchain scaling](../Blockchain_scaling/)
- [Polkadot](../Polkadot/)

## References

[^snow]: Rocket, Team; Yin, Maofan; Sekniqi, Kevin; van Renesse, Robbert; Sirer, Emin Gün (2019). ["Scalable and Probabilistic Leaderless BFT Consensus through Metastability"](https://arxiv.org/abs/1906.08936). arXiv:1906.08936.
[^platform]: Sekniqi, Kevin; Laine, Daniel; Buttolph, Stephen; Sirer, Emin Gün (2020). ["Avalanche Platform"](https://assets.website-files.com/5d80307810123f5ffbb34d6e/6008d7bbf8b10d1eb01e7e16_Avalanche%20Platform%20Whitepaper.pdf) (PDF) white paper. *Ava Labs*.
[^docs]: ["Avalanche Builder Hub documentation"](https://build.avax.network/docs). *Ava Labs*. Retrieved October 2026.
[^nansen]: ["Avalanche Q2 2026 Report"](https://nansen.ai/post/avalanche-q2-2026-report). *Nansen*. 2026.
[^sec-2026]: U.S. Securities and Exchange Commission (17 March 2026). ["SEC Clarifies the Application of Federal Securities Laws to Crypto Assets"](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets). Press release 2026-30; Release No. 33-11412.
[^lowenstein]: ["SEC Issues Interpretive Framework for Crypto Asset Classification"](https://www.lowenstein.com/news-insights/publications/client-alerts/sec-issues-interpretive-framework-for-crypto-asset-classification-fctm). *Lowenstein Sandler*. March 2026.
