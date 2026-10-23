---
title: Decentralized finance
description: Financial services such as lending and trading built from smart contracts on public blockchains
aliases: [DeFi, Decentralised finance]
categories: [Decentralized finance, Ethereum, Smart contracts]
updated: 2026-10-23
last_modified: 2026-10-23
---
**Decentralized finance** (commonly **DeFi**) refers to financial services provided by [smart contracts](../Smart_contract/) on public [blockchains](../Blockchain/) rather than by banks, brokers or exchanges.[^ethdefi] These services include trading, lending, borrowing and earning interest. Anyone with a cryptocurrency [wallet](../Cryptocurrency_wallet/) and an internet connection can use DeFi applications directly, without opening an account or asking permission. Every transaction is recorded publicly on the blockchain.

Most DeFi activity takes place on [Ethereum](../Ethereum/) and on blockchains and layer-2 networks compatible with it, as well as on [Solana](../Solana/). DeFi grew rapidly from 2020 onwards. It has been praised for creating open, transparent and programmable financial infrastructure. It has been criticised for frequent hacks and scams, high risk, and its limited connection to the wider economy.

## History

Early building blocks appeared on Ethereum in 2017 and 2018. **MakerDAO** launched the Dai [stablecoin](../Stablecoin/), backed by ether locked in smart contracts, in 2017. **Uniswap**, a decentralized exchange created by the engineer Hayden Adams, launched in November 2018. Lending protocols such as **Compound** and **Aave** appeared around the same time. The term "DeFi" came into wide use in 2018.

In mid-2020 a period nicknamed **"DeFi summer"** began when Compound started rewarding users with its own governance token. This practice is called *liquidity mining* or *yield farming*. Other protocols copied the idea, and the value of assets deposited in DeFi applications grew rapidly through 2021. The crypto downturn of 2022, including the collapse of TerraUSD and several lending firms, sharply reduced activity, though the leading protocols continued operating.

## Main applications

### Decentralized exchanges

**Decentralized exchanges** (DEXs) let users swap one token for another directly from their wallets. Instead of matching buyers and sellers through an order book, most DEXs use **automated market makers** (AMMs). These are smart contracts holding pools of two tokens, whose price is set by a formula based on the amounts in the pool. Uniswap's original design keeps the product of the two token balances constant (*x* × *y* = *k*).[^uniswap] Anyone can deposit tokens into a pool as a **liquidity provider** and earn a share of trading fees. This carries the risk of *impermanent loss* if prices move.

### Lending and borrowing

Lending protocols such as Aave and Compound let users deposit tokens to earn interest and borrow other tokens against them. Loans are **overcollateralized**: a borrower must deposit more value than they borrow. If the value of the collateral falls below a set threshold, the contract allows other users to *liquidate* it. They repay the loan and keep a bonus. Interest rates are set automatically according to supply and demand.

A distinctive DeFi innovation is the **flash loan**, an uncollateralized loan that must be borrowed and repaid within a single blockchain transaction. If it is not repaid, the whole transaction is cancelled as if it never happened.

### Stablecoins

[Stablecoins](../Stablecoin/) provide a dollar-like unit of account for DeFi. Some, such as Dai, are themselves DeFi protocols; others, such as USDC, are issued by companies but used heavily inside DeFi.

### Other services

Other DeFi applications include derivatives and perpetual futures exchanges, synthetic assets, and insurance against smart-contract failure. They also include yield aggregators that move deposits between protocols automatically, and liquid staking services for [proof-of-stake](../Proof_of_stake/) networks.

## Characteristics

- **Permissionless**: anyone can use, or build on, DeFi protocols without approval.
- **Non-custodial**: users keep control of their assets in their own wallets until they interact with a contract.
- **Transparent**: contract code and all transactions are publicly visible.
- **Composable**: protocols can be combined like building blocks, sometimes called "money legos". For example, a token earned from a lending pool can be traded on a DEX or used as collateral elsewhere.

The size of DeFi is often measured by **total value locked** (TVL), the value of all assets deposited in its smart contracts.

## Risks and criticism

- **Smart-contract bugs and hacks**: DeFi protocols and cross-chain *bridges* have lost billions of dollars to exploits. In 2022, for example, attackers stole about $620 million from the Ronin bridge used by the game Axie Infinity. The FBI attributed the attack to North Korea's Lazarus Group.
- **Oracle manipulation**: protocols that rely on external price data can be tricked into mispricing assets.
- **Scams**: the openness of DeFi also allows fraudulent projects, including "rug pulls" in which developers abandon a project and take investors' funds.
- **Leverage and contagion**: because protocols are interconnected, a failure in one can spread to others.
- **Decentralization in name only**: critics note that many protocols are controlled in practice by small teams or a few large token holders. Critics also note that most users reach these protocols through centralized websites and services.
- **Regulation**: DeFi raises unresolved questions about consumer protection, money laundering rules and who, if anyone, is legally responsible for a protocol.

## See also

- [Decentralized autonomous organization](../Decentralized_autonomous_organization/)
- [Smart contract](../Smart_contract/)
- [Stablecoin](../Stablecoin/)
- [Ethereum](../Ethereum/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)

## References

[^ethdefi]: ["Decentralized finance (DeFi)"](https://ethereum.org/en/defi/). *ethereum.org*.
[^uniswap]: Adams, Hayden; Zinsmeister, Noah; Robinson, Dan (March 2020). ["Uniswap v2 Core"](https://uniswap.org/whitepaper.pdf) (PDF). *uniswap.org*.
