---
title: Chainlink
description: Chainlink (LINK), the decentralised oracle network — history since the 2017 white paper, how price feeds, off-chain reporting and CCIP work, governance by Chainlink Labs, criticism over centralisation and token sales, and regulatory status, as of October 2026
aliases: [LINK, Chainlink oracle, CCIP, Chainlink Labs, SmartContract]
categories: [Cryptocurrencies, Oracles, Decentralized finance]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: chainlink.svg
  caption: Chainlink emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: LINK
    - Launch date: "30 May 2019 (mainnet); token sale September 2017"
    - Founders: "Sergey Nazarov, Steve Ellis; white paper co-authored with Ari Juels"
    - header: Technology
    - Consensus: "None of its own; oracle networks report to other blockchains"
    - Supply policy: "Fixed total of 1 billion LINK"
    - Written in: "Go (node), Solidity (contracts)"
    - License: "MIT (with portions under other licences)"
    - header: Links
    - Website: "[chain.link](https://chain.link/)"
    - Repository: "[smartcontractkit/chainlink](https://github.com/smartcontractkit/chainlink)"
---

> **In plain terms:** Blockchains cannot see the outside world, such as the price of a currency or the result of a match. Chainlink is a network of independent operators that fetch that information and agree on it before delivering it to smart contracts. Most large lending apps rely on it for prices. LINK pays the operators.

**Chainlink** is a decentralised **[oracle](../glossary/Oracle/)** network: a system for delivering outside data to [smart contracts](../Smart_contract/).[^docs] Its token, **LINK**, is an ERC-677 token on [Ethereum](../Ethereum/) used to pay node operators and, since 2022, for staking.[^docs]

Chainlink price feeds are used by many [decentralized finance](../Decentralized_finance/) applications to value collateral and trigger liquidations.[^docs]

## History

Sergey Nazarov and Steve Ellis, of the company SmartContract, published the Chainlink white paper in September 2017 with Cornell professor Ari Juels.[^whitepaper-v1] A LINK token sale was held the same month. The mainnet launched on 30 May 2019.[^docs]

In April 2021 a second white paper described "decentralized oracle networks" as a broader computation layer.[^whitepaper-v2] Staking launched in December 2022, and the **Cross-Chain Interoperability Protocol** (CCIP) in 2023.[^docs]

## How it works

- **Decentralised oracle networks.** Independent node operators each fetch data from multiple sources.[^whitepaper-v2]
- **Off-chain reporting.** Nodes agree off-chain and submit one signed report, which cuts gas costs.[^docs]
- **Price feeds.** Aggregated prices are published on-chain and updated when they move past a threshold or after a time limit.[^docs]
- **CCIP.** A messaging protocol for moving data and tokens between blockchains.[^docs]
- **Staking.** LINK holders and node operators can stake LINK, which can be penalised for poor performance under the staking rules.[^docs]

## Governance

There is no on-chain token governance. **Chainlink Labs** develops the software and manages key contracts, including multi-signature wallets that can upgrade price feeds.[^docs]

## Controversies and criticism

- **Centralisation.** Critics note that feed contracts are controlled by multi-signature wallets run by Chainlink-linked parties, which could change feeds.[^docs]
- **Token sales.** A large share of LINK supply is held by the company and has been moved to exchanges over time. Critics say this adds selling pressure.
- **Dependence.** Because so much DeFi relies on Chainlink, a faulty feed could cause losses across many protocols at once.[^whitepaper-v2]

## Regulatory actions

| Date | Action |
|---|---|
| 17 Mar 2026 | SEC and CFTC interpretation names LINK a "digital commodity".[^sec-2026][^lowenstein] |

## Developer notes

Contracts read price feeds through the `AggregatorV3Interface`, for example calling `latestRoundData()`.[^docs] Node operators run the Go `chainlink` node from the repository.[^repo]

```solidity
(, int256 answer, , uint256 updatedAt, ) = priceFeed.latestRoundData();
```

Integrators should check `updatedAt` so stale prices are not used.[^docs]

## See also

- [Oracle](../glossary/Oracle/) (glossary)
- [Smart contract](../Smart_contract/)
- [Decentralized finance](../Decentralized_finance/)
- [Aave](../Aave/)

## References

[^whitepaper-v1]: Ellis, Steve; Juels, Ari; Nazarov, Sergey (2017). ["ChainLink: A Decentralized Oracle Network"](https://research.chain.link/whitepaper-v1.pdf) (PDF).
[^whitepaper-v2]: Breidenbach, Lorenz; et al. (2021). ["Chainlink 2.0: Next Steps in the Evolution of Decentralized Oracle Networks"](https://research.chain.link/whitepaper-v2.pdf) (PDF).
[^docs]: ["Chainlink Documentation"](https://docs.chain.link/). Retrieved October 2026.
[^repo]: Chainlink Labs. ["smartcontractkit/chainlink"](https://github.com/smartcontractkit/chainlink). GitHub.
[^sec-2026]: U.S. Securities and Exchange Commission (17 March 2026). ["SEC Clarifies the Application of Federal Securities Laws to Crypto Assets"](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets). Press release 2026-30; Release No. 33-11412.
[^lowenstein]: ["SEC Issues Interpretive Framework for Crypto Asset Classification"](https://www.lowenstein.com/news-insights/publications/client-alerts/sec-issues-interpretive-framework-for-crypto-asset-classification-fctm). *Lowenstein Sandler*. March 2026.
