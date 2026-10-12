---
title: Blockchain
description: Shared, append-only ledger made of cryptographically linked blocks
aliases: [Block chain, Distributed ledger]
categories: [Blockchain technology, Cryptography]
updated: 2026-10-12
hatnote: "For the first cryptocurrency built on a blockchain, see [Bitcoin](../Bitcoin/)."
---
A **blockchain** is a shared, append-only ledger made up of records called *blocks*, which are linked together using cryptography. Each block contains a batch of transactions, a timestamp and the cryptographic hash of the block before it, so the blocks form a chain.[^whitepaper] Because changing any block would change its hash and break every link after it, a blockchain is very difficult to alter once data has been added.

Blockchains are usually maintained by a peer-to-peer network of computers that follow a common protocol, called a *consensus mechanism*, to agree on which new blocks to add. This allows mutually distrustful parties to keep a single, consistent record without relying on a central authority. Blockchains are the foundation of [cryptocurrencies](../Cryptocurrency/) such as [Bitcoin](../Bitcoin/) and [Ethereum](../Ethereum/), and have been proposed for uses ranging from supply-chain tracking to digital identity.

## History

The idea of a cryptographically secured chain of blocks was described in 1991 by the researchers Stuart Haber and W. Scott Stornetta, who wanted a way to timestamp digital documents so that the timestamps could not be backdated or tampered with.[^haber] In a follow-up paper with Dave Bayer, they added Merkle trees, a data structure invented by Ralph Merkle, so that many documents could be collected into a single block efficiently.

The first decentralized blockchain was created by [Satoshi Nakamoto](../Satoshi_Nakamoto/) in 2008 as the ledger for Bitcoin. Nakamoto's design combined a chain of blocks with [proof of work](../Proof_of_work/), allowing an open, anonymous network to agree on the order of transactions without a trusted timestamping server. Nakamoto's paper referred to a "chain of blocks"; the term **blockchain** came into common use later, as the technology attracted interest beyond Bitcoin. In 2015 the magazine *The Economist* called it "the trust machine".[^economist]

## Structure

{% include figure.html image="blockchain-diagram.svg" caption="Simplified structure of a blockchain. Each block stores the hash of the previous one." width="340" %}

### Blocks

A block typically has two parts:

- a **header**, which contains metadata such as the hash of the previous block, a timestamp, and a single hash, the *Merkle root*, that summarises all the transactions in the block;
- a **body**, which contains the transactions themselves.

The first block in a chain, which has no predecessor, is called the **genesis block**.

### Hashing and immutability

A cryptographic hash function turns any input into a fixed-length output that changes completely if even one bit of the input changes. Because each block header includes the previous block's hash, editing an old transaction would change that block's hash, which would no longer match the value recorded in the next block, and so on up the chain. An attacker would therefore have to rebuild every later block, and, on a public blockchain, do so faster than the rest of the network. This property is often described as **immutability**, although it is more precisely *tamper-evidence*: changes are not impossible, but they are easy to detect and very costly to make.

### Consensus

Because many independent computers keep copies of the ledger, they need a rule for agreeing on which version is correct. Common consensus mechanisms include:

- **[Proof of work](../Proof_of_work/)**, used by Bitcoin, in which *miners* spend computing power to earn the right to add a block, and the chain with the most accumulated work is treated as valid.
- **[Proof of stake](../Proof_of_stake/)**, used by Ethereum and many newer networks, in which *validators* lock up cryptocurrency as collateral and are chosen to propose and confirm blocks.
- **Byzantine fault-tolerant** voting protocols, often used by permissioned networks with a known set of participants.

When two valid blocks are produced at nearly the same time, the chain can temporarily *fork*. The consensus rules decide which branch survives. A permanent change to the rules that older software does not accept is called a **hard fork**.

## Types of blockchain

- **Public (permissionless) blockchains**, such as Bitcoin and Ethereum, can be read and joined by anyone.
- **Private (permissioned) blockchains** restrict who can take part, and are typically run by a single company.
- **Consortium blockchains** are run jointly by a group of organisations, such as a group of banks.

Critics argue that private blockchains offer few advantages over conventional shared databases, since their participants already trust a central operator.

## Uses

Besides cryptocurrencies, blockchains are used or proposed for:

- [smart contracts](../Smart_contract/) and [decentralized finance](../Decentralized_finance/);
- [stablecoins](../Stablecoin/) and tokenised real-world assets;
- digital collectibles and [non-fungible tokens](../Non-fungible_token/);
- supply-chain tracking, land registries and digital identity.

## Limitations

Public blockchains face a well-known trade-off, sometimes called the *blockchain trilemma*, between decentralization, security and scalability: because every node must process every transaction, they handle far fewer transactions per second than centralised payment systems. Proof-of-work blockchains consume large amounts of electricity. Data written to a public blockchain is visible to everyone and, in practice, cannot be deleted, which raises privacy and regulatory concerns. A blockchain also cannot guarantee that information entered into it from the outside world is true, a limitation sometimes called the *oracle problem*.

## See also

- [Bitcoin](../Bitcoin/)
- [Proof of work](../Proof_of_work/)
- [Proof of stake](../Proof_of_stake/)
- [Smart contract](../Smart_contract/)

## References

[^whitepaper]: Nakamoto, Satoshi (2008). ["Bitcoin: A Peer-to-Peer Electronic Cash System"](https://bitcoin.org/bitcoin.pdf) (PDF). *bitcoin.org*.
[^haber]: Haber, Stuart; Stornetta, W. Scott (1991). ["How to time-stamp a digital document"](https://doi.org/10.1007/BF00196791). *Journal of Cryptology*. **3** (2): 99–111.
[^economist]: ["The trust machine"](https://www.economist.com/leaders/2015/10/31/the-trust-machine). *The Economist*. 31 October 2015.
