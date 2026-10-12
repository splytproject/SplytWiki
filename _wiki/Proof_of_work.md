---
title: Proof of work
description: Consensus mechanism in which participants expend computing power to add blocks
aliases: [PoW, Proof-of-work, Mining, Bitcoin mining]
categories: [Consensus mechanisms, Blockchain technology]
updated: 2026-10-12
---
**Proof of work** (**PoW**) is a method by which one party proves to others that it has spent a certain amount of computational effort. In [cryptocurrencies](../Cryptocurrency/) such as [Bitcoin](../Bitcoin/), proof of work is used as a *consensus mechanism*: participants called **miners** compete to solve a difficult puzzle, and the winner earns the right to add the next block to the [blockchain](../Blockchain/) and collect a reward.[^whitepaper]

Because producing a proof takes real resources (hardware and electricity) but checking one is almost instant, proof of work makes it very expensive for an attacker to rewrite transaction history or flood a network with fake blocks. The main criticism of the method is its high energy consumption.

## History

The idea was first proposed by the computer scientists Cynthia Dwork and Moni Naor in 1992 as a way to combat junk email: a sender would have to perform a small computation for each message, which would be negligible for normal users but costly for spammers sending millions.[^dwork] The term "proof of work" was coined by Markus Jakobsson and Ari Juels in 1999.

In 1997 the cryptographer Adam Back created **Hashcash**, which required finding a value whose hash began with a certain number of zero bits, again as an anti-spam measure.[^hashcash] Hal Finney's *reusable proofs of work* (2004) explored using such proofs as tokens of value. In 2008 [Satoshi Nakamoto](../Satoshi_Nakamoto/) adapted Hashcash-style proof of work for Bitcoin, using it not only to make blocks costly to produce but to let an open network agree on a single chain of transactions.

## How it works

{% include figure.html image="blockchain-diagram.svg" caption="Miners repeatedly change a block's nonce until its hash is below the target." width="300" %}

### The mining puzzle

In Bitcoin, a miner assembles a candidate block containing recent transactions and a header that includes the hash of the previous block. The miner then repeatedly changes a field called the **nonce** and computes the SHA-256 hash of the header (twice). The block is valid only if the resulting hash, read as a number, is **below a target value** set by the network. Since the output of a hash function is effectively random, the only way to find a valid hash is by trial and error, and a lower target means more attempts are needed on average.

When a miner finds a valid block, it broadcasts it to the network. Other nodes can check it with a single hash calculation, and if it is valid they add it to their copy of the chain and start working on the next block.

### Difficulty adjustment

To keep the rate of new blocks steady as miners join or leave, the network periodically recalculates the target. Bitcoin adjusts its **difficulty** every 2,016 blocks (about two weeks) so that blocks are found roughly every ten minutes on average.

### Longest chain rule

If two miners find blocks at about the same time, the network temporarily splits. Nodes follow the chain with the **most accumulated work**, usually loosely called the "longest chain", and the other branch is abandoned. For this reason, a transaction is usually considered more secure the more blocks have been added on top of it, called *confirmations*.

### Rewards

Each successful miner receives a **block reward**, made up of newly created coins (the *block subsidy*) plus the fees paid by the transactions in the block. In Bitcoin the subsidy [halves](../Bitcoin_halving/) every 210,000 blocks, so over time miners are expected to rely increasingly on fees.

## Mining hardware and pools

Early Bitcoin mining was done on ordinary computer processors (CPUs), then on graphics cards (GPUs). Since about 2013 Bitcoin mining has been dominated by **ASICs** (application-specific integrated circuits), chips designed to do nothing but compute SHA-256 hashes. Because a single miner might wait a very long time to find a block, most miners join **mining pools**, which combine their computing power and share rewards in proportion to the work each contributes.

Different cryptocurrencies use different proof-of-work algorithms. Litecoin and Dogecoin use *Scrypt*, Ethereum used *Ethash* until 2022, and Monero uses *RandomX*, which is designed to be efficient on ordinary CPUs and resist ASICs.

## Security

The security of a proof-of-work blockchain depends on honest miners controlling most of the total computing power, or **hash rate**. An attacker with more than half of it could carry out a **51% attack**, building a private chain faster than the rest of the network and using it to reverse their own recent transactions (a *double spend*). Such attacks are considered impractical against Bitcoin because of the enormous hash rate involved, but they have succeeded against smaller networks, including Ethereum Classic in 2019 and 2020.

## Energy consumption

Because miners compete by performing as many hashes as possible, proof of work consumes large amounts of electricity. The Cambridge Bitcoin Electricity Consumption Index estimates that Bitcoin's annual electricity use is comparable to that of a medium-sized country.[^cbeci] Critics argue this is wasteful and contributes to carbon emissions; supporters argue that the energy expenditure is what secures the network, that miners increasingly use cheap renewable or otherwise wasted energy, and that mining can help balance electricity grids.

Concerns about energy use were a major reason [Ethereum](../Ethereum/) switched to [proof of stake](../Proof_of_stake/) in 2022.

## See also

- [Proof of stake](../Proof_of_stake/)
- [Bitcoin](../Bitcoin/)
- [Bitcoin halving](../Bitcoin_halving/)
- [Blockchain](../Blockchain/)

## References

[^whitepaper]: Nakamoto, Satoshi (2008). ["Bitcoin: A Peer-to-Peer Electronic Cash System"](https://bitcoin.org/bitcoin.pdf) (PDF). *bitcoin.org*.
[^dwork]: Dwork, Cynthia; Naor, Moni (1993). "Pricing via Processing or Combatting Junk Mail". *Advances in Cryptology – CRYPTO '92*. Lecture Notes in Computer Science. **740**. Springer. pp. 139–147.
[^hashcash]: Back, Adam (2002). ["Hashcash – A Denial of Service Counter-Measure"](http://www.hashcash.org/papers/hashcash.pdf) (PDF). *hashcash.org*.
[^cbeci]: ["Cambridge Bitcoin Electricity Consumption Index"](https://ccaf.io/cbnsi/cbeci). Cambridge Centre for Alternative Finance.
