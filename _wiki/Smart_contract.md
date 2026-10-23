---
title: Smart contract
description: Program stored on a blockchain that runs automatically when its conditions are met
aliases: [Smart contracts]
categories: [Smart contracts, Blockchain technology, Ethereum]
updated: 2026-10-23
last_modified: 2026-10-23
---
A **smart contract** is a computer program stored on a [blockchain](../Blockchain/) that runs automatically when predetermined conditions are met. Once deployed, a smart contract's code and state are visible to everyone. Its execution is carried out and verified by the network rather than by any single party.[^ethdocs] Smart contracts can hold and transfer cryptocurrency, which allows them to act as self-executing agreements. One example is an escrow that releases funds only when both sides have done what they promised.

The concept was introduced by the computer scientist Nick Szabo in the 1990s. It became practical only with the launch of [Ethereum](../Ethereum/) in 2015, which was designed specifically to run them. Smart contracts are the building blocks of [decentralized finance](../Decentralized_finance/), [stablecoins](../Stablecoin/), [non-fungible tokens](../Non-fungible_token/) and many other blockchain applications.

Despite the name, most smart contracts are neither especially "smart" nor legal contracts: they are simply programs that do exactly what their code says.

## History

Nick Szabo coined the term in 1994 and developed the idea in a 1996 essay. He described a smart contract as "a set of promises, specified in digital form, including protocols within which the parties perform on these promises".[^szabo] He used the **vending machine** as a simple example. It accepts coins and automatically dispenses a product and change, enforcing the terms of the sale without a shopkeeper.

[Bitcoin](../Bitcoin/) (2009) included a limited scripting language that allows simple conditions on spending, such as requiring several signatures or a time delay. Vitalik Buterin's Ethereum proposal of 2013 argued for a blockchain with a fully programmable language,[^whitepaper] and Ethereum went live in July 2015. Many other blockchains, including [Solana](../Solana/), Cardano and Avalanche, now support smart contracts.

## How they work

On Ethereum, smart contracts are usually written in a high-level programming language such as **Solidity** or **Vyper**. The code is then compiled into *bytecode* that runs on the **Ethereum Virtual Machine** (EVM). A developer *deploys* a contract by sending a special transaction containing this bytecode, after which the contract receives its own address on the blockchain.

Users and other contracts interact with a smart contract by sending transactions that call its functions. Every node on the network runs the same code with the same inputs and must reach the same result. This means the outcome cannot be altered by any individual party. Each computational step costs a fee, paid in **gas**, which compensates the network and stops programs from running forever.

Common patterns include:

- **Tokens**: contracts that keep track of balances of a digital asset. Examples include contracts following the ERC-20 standard for interchangeable tokens or the ERC-721 standard for [NFTs](../Non-fungible_token/).
- **Decentralized exchanges**: contracts that hold pools of tokens and let users swap between them at algorithmically determined prices.
- **Lending protocols**: contracts that accept deposits, issue loans against collateral and automatically sell collateral if a loan becomes undercollateralized.
- **DAOs** (decentralized autonomous organizations): contracts that hold a shared treasury and let members vote on how it is spent.

### Oracles

Smart contracts can only see data that is on their own blockchain. To react to outside events, such as asset prices, weather or sports results, they rely on **oracles**: services that publish external data on-chain. The reliability of an oracle is a key weakness, since a contract is only as trustworthy as the data it receives.

## Risks and failures

Because deployed code usually cannot be changed and transactions cannot be reversed, bugs in smart contracts can be extremely costly. Notable incidents include:

- **The DAO (2016)**: an attacker exploited a flaw known as *reentrancy* to drain about 3.6 million ether from an investment fund contract. This led Ethereum to hard-fork to recover the funds.
- **Parity wallet (2017)**: a bug in a widely used multi-signature wallet library let a user accidentally disable it, permanently freezing more than 500,000 ether.
- **DeFi exploits**: attackers have repeatedly drained lending protocols, cross-chain bridges and exchanges, often by manipulating price oracles or exploiting logic errors.

Developers try to reduce these risks through code audits, bug bounty programmes, formal verification and *upgradeable* contract designs. However, upgradeability reintroduces trust in whoever controls the upgrade.

## Legal status

Whether a smart contract creates legally binding obligations depends on the jurisdiction and circumstances. Some places have passed laws recognising that a contract may not be denied legal effect because it contains a smart contract term. The US state of Arizona did so in 2017. In 2021 the Law Commission of England and Wales reached a conclusion on this question. It found that the existing law of contract is generally able to accommodate "smart legal contracts" without major reform.[^lawcom]

## See also

- [Decentralized autonomous organization](../Decentralized_autonomous_organization/)
- [Ethereum](../Ethereum/)
- [Decentralized finance](../Decentralized_finance/)
- [Non-fungible token](../Non-fungible_token/)
- [Blockchain](../Blockchain/)

## References

[^ethdocs]: ["Introduction to smart contracts"](https://ethereum.org/en/developers/docs/smart-contracts/). *ethereum.org*.
[^szabo]: Szabo, Nick (1996). ["Smart Contracts: Building Blocks for Digital Markets"](https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart_contracts_2.html). *Extropy*. **16**.
[^whitepaper]: Buterin, Vitalik (2014). ["Ethereum Whitepaper"](https://ethereum.org/en/whitepaper/). *ethereum.org*.
[^lawcom]: Law Commission (November 2021). *Smart legal contracts: Advice to Government*. Law Com No 401.
