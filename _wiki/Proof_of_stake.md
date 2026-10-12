---
title: Proof of stake
description: Consensus mechanism in which validators lock up cryptocurrency to secure a blockchain
aliases: [PoS, Proof-of-stake, Staking]
categories: [Consensus mechanisms, Blockchain technology]
updated: 2026-10-12
---
**Proof of stake** (**PoS**) is a class of consensus mechanisms for [blockchains](../Blockchain/) in which the right to propose and confirm new blocks is given to participants who lock up, or **stake**, some of the network's cryptocurrency as collateral. These participants, usually called **validators**, earn rewards for following the rules and can lose part of their stake if they act dishonestly.[^pos]

Proof of stake was developed as an alternative to [proof of work](../Proof_of_work/), which secures a network by making participants spend computing power and electricity. Because proof of stake replaces that physical cost with an economic one, it uses far less energy: [Ethereum](../Ethereum/)'s move to proof of stake in 2022 cut its energy consumption by an estimated 99.95%.[^energy] Proof of stake is now used by most major blockchains other than [Bitcoin](../Bitcoin/).

## History

The idea of using coin ownership instead of computing power to secure a blockchain was discussed on the Bitcoin forum as early as 2011. The first cryptocurrency to use it was **Peercoin**, launched in 2012 by the pseudonymous developer Sunny King and Scott Nadal, which combined proof of work with proof of stake.[^peercoin] Later designs, including Daniel Larimer's *delegated proof of stake* (2014) and the academic *Ouroboros* protocol used by Cardano (2017), refined the approach.

The largest adoption came on 15 September 2022, when Ethereum completed **The Merge**, switching its main network from proof of work to proof of stake after years of research and the launch of a separate proof-of-stake chain, the Beacon Chain, in December 2020.

## How it works

Details differ between blockchains, but most proof-of-stake systems share the same basic steps:

1. **Staking.** A user deposits cryptocurrency into a special contract or account, where it is locked. On Ethereum, running a validator requires 32 ETH.
2. **Selection.** For each new block, the protocol chooses a validator to propose it, usually at random, with the chance of selection depending on the amount staked.
3. **Attestation.** Other validators check the proposed block and vote, or *attest*, that it is valid.
4. **Finality.** Once enough validators, typically two-thirds of the total stake, have voted for a block and its successors, it becomes *finalized* and cannot be reversed without destroying a large amount of stake.
5. **Rewards and penalties.** Validators earn newly issued coins and transaction fees for doing their job. Those who are offline lose small amounts, and those who break the rules, for example by signing two conflicting blocks, are **slashed**: part of their stake is destroyed and they are removed from the validator set.

## Variants

- **Delegated proof of stake (DPoS)**: coin holders vote for a small number of delegates who produce blocks on their behalf.
- **Nominated proof of stake**: used by Polkadot, in which *nominators* back validators with their stake and share in rewards and penalties.
- **Liquid staking**: services such as Lido pool users' coins, run validators for them and issue a token representing the staked position, which can be traded or used elsewhere.
- **Hybrid systems** combine proof of stake with other mechanisms. [Solana](../Solana/), for example, uses proof of stake together with a timekeeping technique called *proof of history*.

## Advantages

- **Energy efficiency**: validators need only ordinary computers, not large amounts of specialised hardware and electricity.
- **Economic security**: attacking the network requires acquiring a large share of the staked cryptocurrency, which would be destroyed by slashing if the attack were detected.
- **Faster finality**: many proof-of-stake protocols can finalize blocks in seconds or minutes, rather than relying on blocks gradually becoming more secure over time.

## Criticism

Critics argue that proof of stake favours those who already hold large amounts of cryptocurrency, since rewards are proportional to stake, which can concentrate wealth and influence. Large exchanges and liquid staking services control significant shares of the stake on some networks, raising concerns about centralization and regulatory pressure.

Researchers have also identified theoretical weaknesses. The **nothing-at-stake problem** arises because, unlike miners, validators can cheaply vote for several competing chains at once; modern protocols address this with slashing. **Long-range attacks** involve rewriting history using old keys that no longer have anything staked; protocols such as Ethereum's address this with *weak subjectivity* checkpoints, which require new nodes to start from a recent trusted state.

Some Bitcoin supporters argue that proof of work's physical cost provides a more objective and robust form of security than proof of stake.

## See also

- [Proof of work](../Proof_of_work/)
- [Ethereum](../Ethereum/)
- [Solana](../Solana/)
- [Blockchain](../Blockchain/)

## References

[^pos]: ["Proof-of-stake (PoS)"](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/). *ethereum.org*.
[^energy]: ["Ethereum energy consumption"](https://ethereum.org/en/energy-consumption/). *ethereum.org*.
[^peercoin]: King, Sunny; Nadal, Scott (19 August 2012). "PPCoin: Peer-to-Peer Crypto-Currency with Proof-of-Stake" (white paper).
