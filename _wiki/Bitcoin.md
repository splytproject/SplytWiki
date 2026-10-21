---
title: Bitcoin
description: First decentralized cryptocurrency, launched in 2009
aliases: [BTC, XBT]
categories: [Cryptocurrencies, Bitcoin, Proof-of-work cryptocurrencies]
updated: 2026-10-12
hatnote: "This article is about the cryptocurrency. For the technology underlying it, see [Blockchain](../Blockchain/)."
infobox:
  image: bitcoin.svg
  caption: Bitcoin symbol
  rows:
    - header: Denominations
    - Plural: bitcoins
    - Symbol: "₿"
    - Code: "BTC, XBT"
    - Smallest unit: "satoshi (0.000 000 01 BTC)"
    - header: Development
    - Original author: "[Satoshi Nakamoto](../Satoshi_Nakamoto/)"
    - White paper: '"Bitcoin: A Peer-to-Peer Electronic Cash System"'
    - Initial release: "0.1 / 9 January 2009"
    - Software: "Bitcoin Core (reference client)"
    - Written in: C++
    - License: MIT License
    - header: Ledger
    - Ledger start: 3 January 2009
    - Timestamping: "[Proof of work](../Proof_of_work/)"
    - Hash function: "SHA-256 (applied twice)"
    - Block time: About 10 minutes
    - Block reward: "₿3.125 (since April 2024)"
    - Supply limit: "₿21,000,000"
---
**Bitcoin** (abbreviation: **BTC**; sign: **₿**) is the first decentralized [cryptocurrency](../Cryptocurrency/). It was described in a 2008 white paper by a person or group using the pseudonym [Satoshi Nakamoto](../Satoshi_Nakamoto/), and the network began operating in January 2009.[^whitepaper] Bitcoin allows people to send value directly to one another over the internet without relying on a bank, payment company or any other trusted intermediary.

Transactions are verified by a network of computers, called *nodes*, and recorded in a public, append-only ledger known as a [blockchain](../Blockchain/). New blocks are added by *miners*, who compete to solve a computational puzzle in a process called [proof of work](../Proof_of_work/) and are rewarded with newly created bitcoins and transaction fees. The total supply is capped at just under 21 million bitcoins, and the rate at which new coins are created is [cut in half](../Bitcoin_halving/) roughly every four years.[^supply]

Bitcoin has been praised as a censorship-resistant alternative to government-issued money and criticised for its price volatility, its energy consumption and its use in illicit transactions. It is by far the best-known cryptocurrency.

## History

### Creation

The domain name *bitcoin.org* was registered on 18 August 2008. On 31 October 2008 Satoshi Nakamoto posted a paper titled *Bitcoin: A Peer-to-Peer Electronic Cash System* to a cryptography mailing list.[^mailing-list] It described a system for electronic payments that solved the *double-spending* problem without a central authority, by having participants agree on a single history of transactions secured by proof of work.

Nakamoto mined the first block, known as the *genesis block*, on 3 January 2009. Embedded in it was the text "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks", a headline from the British newspaper *The Times* that serves as a timestamp and is widely read as a comment on the fragility of the banking system.[^genesis] The first version of the software was released on 9 January 2009. Three days later, Nakamoto sent 10 bitcoins to the computer scientist Hal Finney in the first transaction between two people.

Nakamoto continued to work on the software with other volunteers until late 2010, then handed control of the project to other developers and stopped communicating publicly in 2011.

### Early use

Bitcoin had no market price at first. In October 2009 a service called New Liberty Standard published the first known exchange rate, valuing one US dollar at 1,309.03 bitcoins. On 22 May 2010 the programmer Laszlo Hanyecz paid 10,000 bitcoins for two pizzas, the first widely documented purchase of goods with the currency.[^pizza] The anniversary is celebrated by enthusiasts as "Bitcoin Pizza Day".

In 2011 and 2012 Bitcoin became associated with the Silk Road, an online black market that accepted only bitcoin, until the site was shut down by the FBI in October 2013. The largest early exchange, [Mt. Gox](../Mt_Gox_collapse/), suspended trading and filed for bankruptcy in February 2014 after losing hundreds of thousands of its customers' bitcoins.

### Growth and mainstream adoption

The price of bitcoin rose in a series of boom-and-bust cycles: it first passed $1,000 in late 2013, approached $20,000 in December 2017 and passed $60,000 in 2021. In September 2021 El Salvador became the first country to make bitcoin legal tender; in 2025, as part of an agreement with the International Monetary Fund, it amended the law so that businesses were no longer required to accept it.

In January 2024 the US Securities and Exchange Commission approved the first spot [bitcoin exchange-traded funds](../Bitcoin_exchange-traded_funds/), letting ordinary investors gain exposure through regular brokerage accounts. The price rose above $100,000 for the first time in December 2024. In March 2025 a US executive order created a Strategic Bitcoin Reserve made up of bitcoins previously seized by the government.

## Design

{% include figure.html image="blockchain-diagram.svg" caption="Each Bitcoin block contains the hash of the previous block, forming a chain." width="300" %}

### Units and supply

The unit of account is the *bitcoin*. The smallest amount that can be recorded on the blockchain is one hundred-millionth of a bitcoin (0.00000001 BTC), called a **satoshi** in honour of the creator.

New bitcoins are created only as a reward to the miner of each block. The reward started at 50 bitcoins per block and halves every 210,000 blocks, about every four years. After the [fourth halving](../Bitcoin_halving/) in April 2024 it stands at 3.125 bitcoins. Because of this schedule the total number of bitcoins will never exceed 20,999,999.9769, and the last new fractions of a coin are expected to be issued around the year 2140.[^supply]

### Blockchain and mining

The Bitcoin [blockchain](../Blockchain/) is a public ledger of every transaction ever made. Transactions are grouped into blocks, each of which includes the cryptographic hash of the previous block, so altering any past block would require redoing all the work that came after it.

To add a block, a miner must find a value (a *nonce*) that makes the block's double SHA-256 hash fall below a target number. The only known way to do this is by trial and error, which requires enormous amounts of computation. The network automatically adjusts the target every 2,016 blocks (about two weeks) so that a block is found roughly every ten minutes regardless of how much computing power is mining.[^whitepaper] Most mining today is done with specialised chips called ASICs, and miners usually combine their power in *mining pools*.

### Transactions, keys and addresses

Ownership of bitcoins is controlled by cryptographic keys. A user's [wallet](../Cryptocurrency_wallet/) holds *private keys*, from which public keys and *addresses* are derived. To spend coins, a user signs a transaction with the private key; anyone can verify the signature using the public key, but cannot forge it. Bitcoin originally used the ECDSA signature scheme over the secp256k1 curve and added Schnorr signatures with the Taproot upgrade in 2021.

Bitcoin addresses are *pseudonymous*: they are not linked to real-world identities on the blockchain itself, but because every transaction is public, they can often be traced by analysing patterns of use.

## Software and upgrades

The network is maintained by open-source software. The most widely used implementation, **Bitcoin Core**, descends from Nakamoto's original code. Changes to the protocol are proposed through *Bitcoin Improvement Proposals* (BIPs) and must be adopted voluntarily by node operators and miners.

Notable upgrades include:

- **Segregated Witness (SegWit)**, activated in August 2017, which changed how signature data is stored and fixed a flaw known as transaction malleability.
- **Taproot**, activated in November 2021, which added Schnorr signatures and made complex transactions more private and efficient.

Disagreements over how to scale the network led to a split in August 2017, when a group that wanted larger blocks created a separate currency, **Bitcoin Cash**.

The **Lightning Network** is a "layer-2" system built on top of Bitcoin. It lets users open payment channels and exchange many small, fast payments off-chain, settling only the final balance on the main blockchain.[^lightning]

## Reception

Supporters argue that Bitcoin's fixed supply makes it a hedge against inflation, sometimes calling it "digital gold", and that it gives people who are excluded from the banking system, or who live under repressive governments, a way to store and send value.

Critics point to its extreme price volatility, its limited use for everyday purchases and the energy used by proof-of-work mining, which is comparable to that of a medium-sized country according to the Cambridge Bitcoin Electricity Consumption Index.[^cbeci] Bitcoin has also been used for ransomware payments and other crimes, although blockchain analysis firms report that illicit activity makes up a small share of total transaction volume.

## See also

- [Blockchain](../Blockchain/)
- [Bitcoin halving](../Bitcoin_halving/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)
- [Ethereum](../Ethereum/)
- [Satoshi Nakamoto](../Satoshi_Nakamoto/)

## References

[^whitepaper]: Nakamoto, Satoshi (31 October 2008). ["Bitcoin: A Peer-to-Peer Electronic Cash System"](https://bitcoin.org/bitcoin.pdf) (PDF). *bitcoin.org*.
[^mailing-list]: Nakamoto, Satoshi (31 October 2008). ["Bitcoin P2P e-cash paper"](https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html). *The Cryptography Mailing List*.
[^genesis]: ["Block 0 (genesis block)"](https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f). *mempool.space* block explorer.
[^pizza]: ["Laszlo Hanyecz"](https://en.bitcoin.it/wiki/Laszlo_Hanyecz). *Bitcoin Wiki*.
[^supply]: ["Controlled supply"](https://en.bitcoin.it/wiki/Controlled_supply). *Bitcoin Wiki*.
[^lightning]: Poon, Joseph; Dryja, Thaddeus (2016). ["The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments"](https://lightning.network/lightning-network-paper.pdf) (PDF).
[^cbeci]: ["Cambridge Bitcoin Electricity Consumption Index"](https://ccaf.io/cbnsi/cbeci). Cambridge Centre for Alternative Finance.

## External links

- [bitcoin.org](https://bitcoin.org/), project website
- [Bitcoin Core](https://github.com/bitcoin/bitcoin) source code on GitHub
