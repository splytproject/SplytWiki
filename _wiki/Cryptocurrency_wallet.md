---
title: Cryptocurrency wallet
description: Software or device that stores the keys used to send and receive cryptocurrency
aliases: [Wallet, Crypto wallet, Hardware wallet, Seed phrase, Private key]
categories: [Cryptocurrency wallets, Cryptography, Security]
updated: 2026-10-12
---
A **cryptocurrency wallet** is a piece of software, a physical device or a service that stores the cryptographic **keys** needed to use [cryptocurrency](../Cryptocurrency/). Despite the name, a wallet does not actually contain coins. The coins exist only as entries on a [blockchain](../Blockchain/); what the wallet holds is the **private key** that proves ownership of them and is used to authorise, or *sign*, transactions.[^bip32]

Wallets range from apps on a phone or browser, to dedicated **hardware wallets**, to accounts at exchanges that hold keys on the customer's behalf. Choosing and securing a wallet is one of the most important practical decisions for a cryptocurrency user, because transactions cannot be reversed and lost or stolen keys usually mean the funds are gone for good.

## Keys and addresses

{% include figure.html image="wallet-keys.svg" caption="A wallet derives a public key and an address from a private key. Each step is a one-way function." width="340" %}

Cryptocurrency wallets rely on **public-key cryptography**:

- A **private key** is a very large, randomly chosen secret number. Anyone who knows it can spend the associated funds, so it must be kept secret.
- A **public key** is mathematically derived from the private key, in [Bitcoin](../Bitcoin/) and [Ethereum](../Ethereum/) using elliptic-curve cryptography on the *secp256k1* curve. It can be shared, and it allows others to check signatures, but the private key cannot feasibly be worked out from it.
- An **address** is a shorter identifier derived from the public key by hashing and encoding it. It is what a user gives to others to receive funds. Modern Bitcoin addresses often begin with `bc1`, while Ethereum addresses begin with `0x`.

To send funds, the wallet creates a transaction and signs it with the private key. The network checks the signature against the public key before accepting the transaction.

### Seed phrases

Most modern wallets are **hierarchical deterministic** (HD) wallets, a design introduced for Bitcoin in 2012. Instead of storing many unrelated keys, an HD wallet generates all of its keys from a single master secret, so one backup covers every address the wallet will ever use.[^bip32]

That master secret is usually shown to the user as a **seed phrase** (also called a *recovery phrase* or *mnemonic*) of 12 or 24 ordinary words taken from a standard list of 2,048 words.[^bip39] Anyone who has the seed phrase can recreate the whole wallet on another device, which makes it both the user's backup and their greatest security risk. Legitimate services never ask users to reveal their seed phrase.

## Types of wallet

### Custodial and non-custodial

- In a **custodial wallet**, a third party, typically a cryptocurrency exchange, holds the private keys and manages the funds for the user, much like a bank account. This is convenient and allows password recovery, but users depend on the custodian's honesty and solvency. When exchanges such as [Mt. Gox](../Mt_Gox_collapse/) (2014) and [FTX](../FTX_collapse/) (2022) collapsed, many customers lost access to their funds. The slogan "**not your keys, not your coins**" expresses this risk.
- In a **non-custodial** (or *self-custody*) wallet, the user alone holds the keys. This gives full control but also full responsibility: if the keys or seed phrase are lost, nobody can recover the funds.

### Hot and cold

- **Hot wallets** are connected to the internet, such as mobile apps, desktop programs and browser extensions. They are convenient for frequent use but more exposed to malware and phishing.
- **Cold wallets** keep private keys offline. The most common are **hardware wallets**, small dedicated devices, first sold in 2014, that store keys in secure chips and sign transactions internally, so the keys never touch an internet-connected computer. *Paper wallets*, with keys printed on paper, were once popular but are now generally discouraged.

### Multi-signature and smart-contract wallets

A **multi-signature** (multisig) wallet requires several keys to approve a transaction, for example any two out of three. This protects against the loss or theft of a single key and is common among businesses and organisations. On Ethereum, **smart-contract wallets** use programmable rules for features such as spending limits, social recovery through trusted contacts, and paying fees in tokens other than ether.

## Security

Common threats to wallet users include:

- **Phishing**: fake websites, apps and messages that trick users into revealing their seed phrase or signing malicious transactions.
- **Malware**: software that steals keys or swaps a copied address for the attacker's.
- **Malicious approvals**: signing a transaction that gives a [smart contract](../Smart_contract/) permission to spend one's tokens.
- **Loss**: forgetting passwords, losing devices or discarding backups. Large amounts of bitcoin are believed to have been lost permanently in this way.
- **Physical coercion**: threats or violence against people known to hold large amounts of cryptocurrency.

Recommended practices include keeping the seed phrase offline and private, using a hardware wallet for significant amounts, checking addresses carefully, and being sceptical of any unsolicited offer of help.

## See also

- [Cryptocurrency](../Cryptocurrency/)
- [Bitcoin](../Bitcoin/)
- [Blockchain](../Blockchain/)
- [Decentralized finance](../Decentralized_finance/)

## References

[^bip32]: Wuille, Pieter (2012). ["BIP 32: Hierarchical Deterministic Wallets"](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki). *Bitcoin Improvement Proposals*.
[^bip39]: Palatinus, Marek; Rusnak, Pavol; Voisine, Aaron; Bowe, Sean (2013). ["BIP 39: Mnemonic code for generating deterministic keys"](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). *Bitcoin Improvement Proposals*.
