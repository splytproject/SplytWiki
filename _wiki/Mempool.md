---
title: Mempool
description: Explanation of the memory pool of unconfirmed transactions, relay policy, and fee-bumping
aliases: [Memory pool, Transaction pool, Unconfirmed transactions, RBF, CPFP]
categories: [Bitcoin, Protocol, Transactions, Policy]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: Mempool
  rows:
    - header: Overview
    - Holds: Valid, unconfirmed transactions
    - Scope: Per node (not a shared global list)
    - header: Related mechanisms
    - Fee bumping: RBF (BIP-125), CPFP
    - Useful RPCs: getmempoolinfo, getrawmempool, testmempoolaccept
---

> **In plain terms:** When you broadcast a payment it doesn't land in a block instantly. Each node keeps a waiting room (the mempool) of valid transactions it has heard about, and miners pick from their own waiting room.

The **mempool** is a node's local collection of valid transactions that have not yet been included in a block. There is no single global mempool: each node has its own, shaped by its own settings.

## Consensus vs policy

This is the most important idea on this page.

- **Consensus rules** decide whether a transaction or block is *valid at all*. Every node must agree.
- **Policy (standardness) rules** decide what a node is *willing to relay or mine by default*. They are stricter, can differ between nodes, and can be changed without a fork.

A transaction can be consensus-valid but non-standard. It will not propagate through default nodes, though a miner can still include it in a block. (See [Multisignature](../Multisignature/) for an example.)

## How it works

When a node receives a transaction it checks consensus rules and policy (fee rate above the minimum relay fee, size limits, standard script types, and so on). If acceptable, it adds the transaction to its mempool and relays it. The mempool has a memory limit (`-maxmempool`); when full, lowest-fee-rate transactions are evicted.

Miners typically build blocks by selecting transactions by **fee rate** (fee per virtual byte; see [Segregated_Witness](../Segregated_Witness/)).

## Fee bumping

- **Replace-by-fee (RBF, BIP-125):** replace an unconfirmed transaction with a version that pays a higher fee.
- **Child-pays-for-parent (CPFP):** spend an output of a stuck transaction with a high-fee child, so a miner wants both.

## Developer notes

- `bitcoin-cli getmempoolinfo` shows size, usage and minimum fee.
- `bitcoin-cli getrawmempool true` lists entries with fee and ancestor information.
- `bitcoin-cli testmempoolaccept '["<rawtx>"]'` checks whether a transaction would be accepted, without broadcasting it.
- Mempool code is in `src/txmempool.cpp`; policy checks are in `src/policy/`.

## See also

- [Bitcoin_node](../Bitcoin_node/)
- [Segregated_Witness](../Segregated_Witness/)
- [OP_RETURN](../OP_RETURN/)
- [Chain_reorganization](../Chain_reorganization/)

## Notes and further reading

- Based on standard Bitcoin Core behaviour; BIP-125 for RBF.
- Policy-vs-consensus examples appear in GitHub discussions such as [Bitcoin Core PR #26348](https://github.com/bitcoin/bitcoin/pull/26348) on multisig standardness.
- (Add sourcing where appropriate: current default relay-fee settings and policy changes by release.)
