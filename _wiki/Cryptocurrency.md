---
title: Cryptocurrency
description: Digital currency secured by cryptography and recorded on a decentralized ledger
aliases: [Crypto, Cryptocurrencies, Crypto asset, Cryptoasset]
categories: [Cryptocurrencies, Digital currencies]
updated: 2026-10-12
hatnote: "\"Crypto\" redirects here. For the study of secure communication, see cryptography."
---
A **cryptocurrency** (often shortened to **crypto**) is a digital currency that is created and transferred using cryptography and recorded on a decentralized ledger, usually a [blockchain](../Blockchain/), rather than being issued or controlled by a central bank or company. The first cryptocurrency, [Bitcoin](../Bitcoin/), was launched in 2009, and many thousands of others have been created since.

Cryptocurrencies are held in [wallets](../Cryptocurrency_wallet/) controlled by private keys and can be sent directly from one user to another over the internet. Most are not legal tender, are not backed by any government and can be extremely volatile in price. They are used for payments, speculation and saving, as the basis of [decentralized finance](../Decentralized_finance/) applications, and, in some cases, for illegal activity. Regulators often use the broader term **cryptoasset**.

## History

### Precursors

The idea of private digital cash is older than Bitcoin. In 1983 the cryptographer David Chaum described *blind signatures*, a technique that let a bank issue digital money that could not be traced back to the person spending it.[^chaum] His company DigiCash put this into practice in the 1990s but went bankrupt in 1998. In the same year the computer engineer Wei Dai proposed *b-money*, an anonymous, distributed electronic cash system,[^bmoney] and the computer scientist Nick Szabo described *bit gold*, in which units of value would be created by solving computational puzzles. Neither was fully implemented, but both influenced Bitcoin's design.

All of these systems either depended on a trusted central party or failed to solve the *double-spending problem*: preventing someone from spending the same digital token twice without a central authority checking every transaction.

### Bitcoin

In 2008 the pseudonymous [Satoshi Nakamoto](../Satoshi_Nakamoto/) published a paper describing Bitcoin, which solved double-spending by having a peer-to-peer network agree on a single public history of transactions, secured by [proof of work](../Proof_of_work/).[^whitepaper] The Bitcoin network launched in January 2009, making it the first decentralized cryptocurrency.

### Altcoins and tokens

Other cryptocurrencies, often called *altcoins*, soon followed. **Namecoin** (2011) adapted Bitcoin's code to run a decentralized domain-name system, **Litecoin** (2011) offered faster block times, and **Dogecoin** (2013) began as a joke based on an internet meme. [Ethereum](../Ethereum/), launched in 2015, added programmable [smart contracts](../Smart_contract/), which made it easy to create new *tokens* on top of an existing blockchain instead of launching a new network. This led to the initial coin offering (ICO) boom of 2017, in which many projects raised money by selling tokens, often with little regulation and many failures.

Later developments included [stablecoins](../Stablecoin/), designed to track the value of a currency such as the US dollar; [decentralized finance](../Decentralized_finance/); [non-fungible tokens](../Non-fungible_token/); and newer high-throughput blockchains such as [Solana](../Solana/).

## How cryptocurrencies work

### Ledger and consensus

A cryptocurrency's transactions are recorded on a ledger that is copied across many computers, or *nodes*. To decide which transactions are valid and in what order they happened, the network uses a *consensus mechanism*. The two most common are [proof of work](../Proof_of_work/), in which *miners* compete to add blocks by doing computational work, and [proof of stake](../Proof_of_stake/), in which *validators* lock up coins as collateral.

### Keys and ownership

Ownership is based on public-key cryptography. Each user has one or more *private keys*, which are kept secret and used to sign transactions, and corresponding *addresses*, which can be shared to receive funds. Whoever controls a private key controls the coins associated with it. If the key is lost, the coins are usually lost permanently, and if it is stolen, the thief can spend them. Transactions generally cannot be reversed.

### Supply

Unlike government currencies, many cryptocurrencies follow a fixed, publicly known issuance schedule written into their software. Bitcoin, for example, has a maximum supply of 21 million coins, and its rate of issuance [halves](../Bitcoin_halving/) about every four years. Others, such as ether, have no fixed cap.

## Types

- **Coins** are the native currency of their own blockchain, such as bitcoin, ether or SOL, and are usually used to pay transaction fees.
- **Tokens** are created by smart contracts on an existing blockchain, for example ERC-20 tokens on Ethereum.
- **[Stablecoins](../Stablecoin/)** aim to keep a steady value relative to a reference asset, usually the US dollar.
- **Privacy coins**, such as Monero and Zcash, use additional cryptography to hide transaction details.
- **Memecoins** are tokens driven mainly by internet culture and speculation rather than any particular function.

Central bank digital currencies (CBDCs) are digital forms of government money and, despite some similarities, are not generally considered cryptocurrencies because they are centrally issued and controlled.

## Legal status and regulation

The legal treatment of cryptocurrency varies widely between countries. In 2021 El Salvador became the first country to make bitcoin legal tender, and the Central African Republic followed in 2022 before reversing its decision the next year. China, by contrast, declared all cryptocurrency transactions illegal in 2021.

The European Union adopted the **Markets in Crypto-Assets Regulation** (MiCA) in 2023, which created a single licensing regime for crypto service providers and stablecoin issuers across the EU and fully applied from 30 December 2024.[^mica] In the United States, regulators have long disagreed over whether particular tokens are securities or commodities; in 2025 Congress passed the GENIUS Act, the first federal law governing payment stablecoins.

## Criticism and risks

Cryptocurrencies have been criticised for:

- **Volatility**: prices can rise or fall by large percentages within days, which limits their usefulness as money.
- **Fraud and theft**: investors have lost large sums to scams, hacks of exchanges and smart contracts, and the collapse of companies such as [Mt. Gox](../Mt_Gox_collapse/) (2014) and [FTX](../FTX_collapse/) (2022).
- **Illicit use**: cryptocurrencies have been used for ransomware payments, money laundering and darknet markets, although blockchain analysis shows that most activity is legal.
- **Energy use**: proof-of-work mining, especially for Bitcoin, consumes large amounts of electricity.
- **Lack of consumer protection**: lost or stolen funds usually cannot be recovered, and many services are lightly regulated.

Supporters argue that cryptocurrencies give people control over their own money, provide an alternative for those with limited access to banks or living under high inflation, and enable new kinds of open financial services.

## See also

- [Bitcoin](../Bitcoin/)
- [Blockchain](../Blockchain/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)
- [Decentralized finance](../Decentralized_finance/)
- [Stablecoin](../Stablecoin/)

## References

[^chaum]: Chaum, David (1983). "Blind Signatures for Untraceable Payments". *Advances in Cryptology: Proceedings of Crypto 82*. Springer. pp. 199–203.
[^bmoney]: Dai, Wei (1998). ["b-money"](http://www.weidai.com/bmoney.txt). *weidai.com*.
[^whitepaper]: Nakamoto, Satoshi (2008). ["Bitcoin: A Peer-to-Peer Electronic Cash System"](https://bitcoin.org/bitcoin.pdf) (PDF). *bitcoin.org*.
[^mica]: ["Regulation (EU) 2023/1114 on markets in crypto-assets"](https://eur-lex.europa.eu/eli/reg/2023/1114/oj). *EUR-Lex*. Official Journal of the European Union.
