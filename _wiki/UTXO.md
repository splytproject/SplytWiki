---
title: UTXO
description: Explanation of unspent transaction outputs, the model Bitcoin uses to track ownership
aliases: [Unspent transaction output, UTXO set, UTXO model, Coins]
categories: [Bitcoin, Protocol, Data model]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: UTXO
  rows:
    - header: Overview
    - Full name: Unspent transaction output
    - Model: Output-based (not account-based)
    - header: Developer reference
    - Node storage: chainstate database
    - Useful RPCs: gettxout, gettxoutsetinfo, dumptxoutset
---

> **In plain terms:** Bitcoin has no account balances. It has a big list of "coins", each with an amount and a lock. Spending means destroying whole coins and creating new ones. Your "balance" is the sum of the coins your keys can unlock.

An **unspent transaction output (UTXO)** is an output of an earlier transaction that has not yet been used as an input to a later one. The collection of all UTXOs at a given moment is the **UTXO set**, and it is the state that every full node must hold to validate new transactions.

## How it works

Every transaction consumes existing outputs (its *inputs*) and creates new outputs. Each output carries an amount and a locking condition (see [Bitcoin_Script](../Bitcoin_Script/)). An output is identified by the transaction id that created it plus its index, for example `txid:0`.

Rules a node enforces:

- Each input must reference an output that exists in the UTXO set and has not been spent.
- The input's unlocking data must satisfy that output's locking condition.
- Total input value must be at least total output value; the difference is the fee.
- An output is spent **entirely**, so paying 0.3 BTC from a 1.0 BTC output creates a payment output plus a **change** output back to the sender.

## Why it exists

The UTXO model makes validation local and parallelizable: to check one input, a node only needs to look up one entry. Double-spending reduces to "does this entry still exist?" Account-style systems instead track mutable balances and ordering (nonces), which couples transactions together.

## Developer notes

- Bitcoin Core keeps the UTXO set in a LevelDB database (`chainstate/`), with a configurable in-memory cache (`-dbcache`).
- `bitcoin-cli gettxout <txid> <n>` returns an output if it is unspent.
- `bitcoin-cli gettxoutsetinfo` summarizes the whole set (it can take a while).
- `bitcoin-cli dumptxoutset` and `loadtxoutset` export and load UTXO snapshots, the basis of *assumeUTXO* (see [Partial_UTXO_set](../Partial_UTXO_set/)).
- Wallet tools such as `listunspent` show only the UTXOs your wallet can spend.

## Common misconceptions

- "My wallet holds coins." It holds keys. The coins exist on the network.
- "Change is a fee." It is not; only the input-minus-output difference is the fee.
- "Reusing an address is harmless." It links your UTXOs together publicly, a privacy cost.

## See also

- [Bitcoin_node](../Bitcoin_node/)
- [Partial_UTXO_set](../Partial_UTXO_set/)
- [OP_RETURN](../OP_RETURN/)
- [How_to_contribute_to_Bitcoin](../how-to-contribute-to-bitcoin/)

## Notes and further reading

- Based on standard protocol behaviour and Bitcoin Core's RPC documentation.
- Forum discussion of UTXO snapshots and partial sets: [Can a Bitcoin node build a partial UTXO set from recent N blocks?](https://bitcointalk.org/index.php?topic=5593895.0)
- (Add sourcing where appropriate: chainstate size measurements, coin-selection research.)
