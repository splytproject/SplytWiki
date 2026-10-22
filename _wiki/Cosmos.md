---
title: Cosmos
description: Cosmos and its hub token ATOM — history since the 2016 white paper and 2017 fundraiser, how Tendermint consensus, the Cosmos SDK and the Inter-Blockchain Communication protocol work, on-chain governance including the rejected ATOM 2.0 plan, criticism, and regulatory actions, as of October 2026
aliases: [ATOM, Cosmos Hub, Cosmos SDK, Tendermint, CometBFT, IBC, Inter-Blockchain Communication, Interchain]
categories: [Cryptocurrencies, Interoperability, Proof-of-stake cryptocurrencies]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: cosmos.svg
  caption: Cosmos emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: ATOM
    - Launch date: "13 March 2019 (Cosmos Hub)"
    - Founders: "Jae Kwon, Ethan Buchman"
    - header: Technology
    - Consensus: "Tendermint / CometBFT [proof of stake](../Proof_of_stake/)"
    - Supply policy: "No cap; inflation varies with the share of ATOM staked"
    - Written in: "Go (Cosmos SDK, Gaia)"
    - License: "Apache 2.0"
    - header: Links
    - Website: "[cosmos.network](https://cosmos.network/)"
    - Repository: "[cosmos/gaia](https://github.com/cosmos/gaia)"
---

> **In plain terms:** Cosmos is a toolkit and a network for building many separate blockchains that can talk to each other. Each chain runs its own rules, but they can send tokens and messages through a shared standard called IBC. The Cosmos Hub is the first such chain, and ATOM is its token.

**Cosmos** is an ecosystem of independent, interoperable blockchains, often called the "internet of blockchains".[^whitepaper] Chains are built with the **Cosmos SDK** and connect through the **Inter-Blockchain Communication** (IBC) protocol.[^docs][^ibc] The **Cosmos Hub** is the original chain, and its staking and governance token is **ATOM**.[^hub]

## History

Jae Kwon designed the **Tendermint** consensus algorithm in 2014.[^tendermint] With Ethan Buchman he published the Cosmos white paper in 2016.[^whitepaper] The Interchain Foundation raised about $17 million in a 2017 fundraiser.

The Cosmos Hub launched on 13 March 2019.[^hub] IBC went live in 2021, linking the Hub to other chains, and over a hundred chains have since connected.[^ibc]

In November 2022 ATOM holders rejected **Proposal 82**, the "ATOM 2.0" plan to change ATOM's role and issuance.[^prop82]

## How it works

- **Tendermint/CometBFT.** Validators take turns proposing blocks and vote in rounds; a block is final once more than two-thirds of stake signs it.[^tendermint]
- **Cosmos SDK.** A framework for building application-specific blockchains from modules such as staking, governance and bank.[^docs]
- **IBC.** Chains verify each other's light clients, so tokens and messages can move between them without a central bridge.[^ibc]
- **Staking.** ATOM holders delegate to validators; misbehaving validators are slashed.[^hub]

## Governance

Cosmos Hub governance is on-chain. ATOM stakers vote on text, parameter, software-upgrade and community-pool spending proposals, and delegators can override their validator's vote.[^hub]

## Controversies and criticism

- **Value capture.** Critics argue that chains built with the SDK do not need ATOM, so the Hub's token gains little from the ecosystem's growth. ATOM 2.0 was one attempt to address this.[^prop82]
- **Governance disputes.** Disagreements over funding and direction have repeatedly split the community.[^prop82]

## Regulatory actions

| Date | Action |
|---|---|
| Jun 2023 | SEC complaint against Coinbase describes ATOM as a security.[^sec-coinbase] |
| Feb 2025 | SEC dismisses the Coinbase case.[^cybernews] |

## Developer notes

The Cosmos Hub client is `gaiad`.[^repo]

```
gaiad status
gaiad query staking validators
```

Cosmos SDK chains expose gRPC, a REST gateway and CometBFT RPC endpoints such as `/status`.[^docs]

## See also

- [Polkadot](../Polkadot/)
- [Proof of stake](../Proof_of_stake/)
- [Terra](../Terra/)
- [Blockchain scaling](../Blockchain_scaling/)

## References

[^whitepaper]: Kwon, Jae; Buchman, Ethan (2016). ["Cosmos: A Network of Distributed Ledgers"](https://github.com/cosmos/cosmos/blob/master/WHITEPAPER.md). GitHub.
[^tendermint]: Kwon, Jae (2014). ["Tendermint: Consensus without Mining"](https://tendermint.com/static/docs/tendermint.pdf) (PDF).
[^docs]: ["Cosmos Developer Documentation"](https://docs.cosmos.network/). Retrieved October 2026.
[^hub]: ["Cosmos Hub documentation"](https://hub.cosmos.network/). Retrieved October 2026.
[^ibc]: ["IBC: The Blockchain Interoperability Protocol"](https://ibcprotocol.dev/). Retrieved October 2026.
[^prop82]: ["Cosmos Hub Proposal 82"](https://www.mintscan.io/cosmos/proposals/82). *Mintscan*. Voting record.
[^repo]: ["cosmos/gaia"](https://github.com/cosmos/gaia). GitHub.
[^sec-coinbase]: U.S. Securities and Exchange Commission (6 June 2023). ["SEC Charges Coinbase for Operating as an Unregistered Securities Exchange, Broker, and Clearing Agency"](https://www.sec.gov/news/press-release/2023-102). Press release 2023-102.
[^cybernews]: ["US SEC dismisses lawsuit against crypto exchange Coinbase"](https://www.outlookmoney.com/invest/us-sec-dismisses-lawsuit-against-crypto-exchange-coinbase). *Outlook Money*. February 2025.
