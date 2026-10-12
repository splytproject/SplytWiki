---
title: Ethereum
description: Decentralized blockchain platform for smart contracts, with its own currency, ether
aliases: [ETH, Ether]
categories: [Cryptocurrencies, Ethereum, Smart contract platforms, Proof-of-stake cryptocurrencies]
updated: 2026-10-12
infobox:
  image: ethereum.svg
  image_width: 90
  caption: The ether diamond
  rows:
    - header: Denominations
    - Currency: ether
    - Code: ETH
    - Symbol: "Ξ"
    - Smallest unit: "wei (10⁻¹⁸ ETH)"
    - Other units: "gwei (10⁻⁹ ETH)"
    - header: Development
    - Proposed by: Vitalik Buterin
    - White paper: 2013–2014
    - Mainnet launch: 30 July 2015
    - Developer: "Ethereum Foundation and community"
    - header: Ledger
    - Consensus: "[Proof of stake](../Proof_of_stake/) (since September 2022)"
    - Previous consensus: "[Proof of work](../Proof_of_work/) (2015–2022)"
    - Block time: "12 seconds (one slot)"
    - Supply limit: "None (fee burning offsets issuance)"
---
**Ethereum** is a decentralized [blockchain](../Blockchain/) platform that lets anyone create and run programs called [smart contracts](../Smart_contract/). Its native currency is **ether** (ticker **ETH**, symbol **Ξ**), which is used to pay for computation on the network and is the second-largest [cryptocurrency](../Cryptocurrency/) after [Bitcoin](../Bitcoin/).

Ethereum was proposed in 2013 by the programmer Vitalik Buterin and went live on 30 July 2015.[^history] Where Bitcoin was designed mainly as digital money, Ethereum was designed as a general-purpose "world computer": its blockchain stores not only balances but also code and data, which any user can call. This made it the foundation for most of the [decentralized finance](../Decentralized_finance/) (DeFi) applications, [stablecoins](../Stablecoin/) and [non-fungible tokens](../Non-fungible_token/) that followed.

In September 2022 Ethereum switched from [proof of work](../Proof_of_work/) to [proof of stake](../Proof_of_stake/) in an upgrade known as **The Merge**, which reduced its energy use by an estimated 99.95%.[^energy]

## History

### Conception and crowdsale

Buterin, a co-founder of *Bitcoin Magazine*, described Ethereum in a white paper in late 2013, arguing that blockchains needed a built-in programming language so that developers would not have to create a new blockchain for every application.[^whitepaper] The project was announced publicly in January 2014. Its early co-founders included Gavin Wood, who wrote the formal technical specification known as the *Yellow Paper*,[^yellowpaper] as well as Charles Hoskinson, Anthony Di Iorio, Joseph Lubin, Mihai Alisie, Amir Chetrit and Jeffrey Wilcke.

Development was funded by an online crowdsale in July and August 2014, in which participants bought ether with bitcoin. The non-profit **Ethereum Foundation**, based in Zug, Switzerland, was set up to support the project.

### Launch and The DAO

The network launched on 30 July 2015 with a release called *Frontier*. In 2016 a smart-contract investment fund called **The DAO** raised ether worth about $150 million. In June 2016 an attacker exploited a flaw in its code and drained about 3.6 million ether. After intense debate, the community adopted a *hard fork* on 20 July 2016 that moved the stolen funds to a recovery contract. A minority who rejected the change on principle kept running the original chain, which continues as **Ethereum Classic**.

### Growth

The ERC-20 token standard, proposed in 2015, made it simple to create new tokens on Ethereum, fuelling the "initial coin offering" (ICO) boom of 2017. The DeFi and NFT booms of 2020–2021 drove heavy demand for block space, pushing transaction fees to high levels and encouraging the growth of *layer-2* networks.

### Move to proof of stake

A separate proof-of-stake chain, the **Beacon Chain**, launched on 1 December 2020. On 15 September 2022, in **The Merge**, the original Ethereum chain stopped using mining and joined the Beacon Chain, so that blocks were thereafter produced by validators who lock up, or *stake*, ether.[^merge] The Shanghai–Capella upgrade of April 2023 allowed validators to withdraw their staked ether.

## Technology

### Ethereum Virtual Machine

Every Ethereum node runs the **Ethereum Virtual Machine** (EVM), a standardised environment that executes smart-contract code. Because every node runs the same code on the same data, they all arrive at the same result. Contracts are usually written in the high-level language **Solidity** (or alternatives such as Vyper) and compiled into EVM bytecode. Many other blockchains are "EVM-compatible", meaning they can run the same contracts.

Ethereum has two kinds of accounts: *externally owned accounts*, controlled by private keys held by people, and *contract accounts*, controlled by their code.

### Gas and fees

Every operation in the EVM costs a fixed amount of **gas**, a unit of computational work. Users pay for gas in ether, which prevents infinite loops and spam. Since the London upgrade of August 2021 (EIP-1559), each block has a *base fee* that rises and falls with demand and is **burned** (permanently destroyed), plus an optional *priority fee* or tip that goes to the validator.[^eip1559] When network activity is high, the amount of ether burned can exceed the amount newly issued, making the supply shrink.

Ether is divided into smaller units. The smallest, the **wei** (10<sup>−18</sup> ether), is named after the computer scientist Wei Dai. Gas prices are usually quoted in **gwei** (10<sup>−9</sup> ether).

### Consensus

Ethereum uses a proof-of-stake protocol called *Gasper*. Validators must deposit 32 ETH to participate. Time is divided into 12-second *slots*, in each of which one validator is randomly chosen to propose a block while committees of other validators vote, or *attest*, to it. Groups of 32 slots form an *epoch*, and blocks become *finalized*, practically irreversible, after about two epochs. Validators who act dishonestly can have part of their stake destroyed, a penalty called *slashing*.[^pos]

### Scaling and layer 2

To handle more transactions without making it too expensive to run a node, Ethereum's roadmap focuses on **rollups**: separate "layer-2" networks such as Arbitrum, Optimism and Base, which execute transactions off the main chain and post compressed data and proofs back to it. The Dencun upgrade of March 2024 (EIP-4844) introduced a cheaper type of data storage called *blobs* specifically for rollups, sharply lowering their fees.[^eip4844]

## Upgrades

| Upgrade | Date | Main change |
|---|---|---|
| Frontier | 30 July 2015 | Network launch |
| DAO fork | 20 July 2016 | Reversed The DAO hack |
| Byzantium | October 2017 | Protocol improvements; reduced mining reward |
| London | 5 August 2021 | EIP-1559 fee burning |
| The Merge | 15 September 2022 | Switch to proof of stake |
| Shanghai–Capella | 12 April 2023 | Staking withdrawals enabled |
| Dencun | 13 March 2024 | Blob data for rollups (EIP-4844) |
| Pectra | 7 May 2025 | Staking and account improvements |

## Criticism

Critics have pointed to Ethereum's high transaction fees during busy periods, the complexity of its upgrade path, and the security risks of smart contracts, which have lost users billions of dollars through bugs and exploits. Some argue that staking concentrates influence among large holders and staking services. Supporters reply that the network has run continuously since 2015 and that layer-2 systems have brought fees down substantially.

## See also

- [Smart contract](../Smart_contract/)
- [Proof of stake](../Proof_of_stake/)
- [Decentralized finance](../Decentralized_finance/)
- [Non-fungible token](../Non-fungible_token/)
- [Solana](../Solana/)

## References

[^history]: ["The history of Ethereum"](https://ethereum.org/en/history/). *ethereum.org*.
[^energy]: ["Ethereum energy consumption"](https://ethereum.org/en/energy-consumption/). *ethereum.org*.
[^whitepaper]: Buterin, Vitalik (2014). ["Ethereum Whitepaper"](https://ethereum.org/en/whitepaper/). *ethereum.org*.
[^yellowpaper]: Wood, Gavin. ["Ethereum: A Secure Decentralised Generalised Transaction Ledger"](https://ethereum.github.io/yellowpaper/paper.pdf) (PDF). *Ethereum Yellow Paper*.
[^merge]: ["The Merge"](https://ethereum.org/en/roadmap/merge/). *ethereum.org*.
[^eip1559]: Buterin, Vitalik; et al. (2019). ["EIP-1559: Fee market change for ETH 1.0 chain"](https://eips.ethereum.org/EIPS/eip-1559). *Ethereum Improvement Proposals*.
[^pos]: ["Proof-of-stake (PoS)"](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/). *ethereum.org*.
[^eip4844]: Buterin, Vitalik; et al. (2022). ["EIP-4844: Shard Blob Transactions"](https://eips.ethereum.org/EIPS/eip-4844). *Ethereum Improvement Proposals*.

## External links

- [ethereum.org](https://ethereum.org/), official website
- [Ethereum Improvement Proposals](https://eips.ethereum.org/)
