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

**Specifications:** [BIP-174](../BIP_index/#bip-174) · [BIP-370](../BIP_index/#bip-370)

> **Plain language:** Bitcoin does not maintain an account balance for your wallet. It maintains a giant ledger of spendable outputs — unspent transaction outputs. Think of it as a pile of digital coins, each with an amount and a lock on it.

This is the conceptual heart of Bitcoin. The UTXO model is what makes Bitcoin so different from a bank ledger or a database of balances. Instead of "Alice has 2.5 BTC," Bitcoin says: "Here are the outputs that can be spent with Alice's keys, and they sum to 2.5 BTC."

If you look at Bitcoin as accounting, the UTXO model is the accounting language the whole network speaks.

## Why Bitcoin uses UTXOs

A normal bank account is a mutable balance: deposit, withdraw, subtract, add. Bitcoin works differently.

- Every transaction consumes existing outputs.
- Every transaction creates new outputs.
- An output is either spent or unspent.
- The wallet's balance is just the sum of all unspent outputs it can unlock.

This model is simple to validate, especially for a distributed system. A node does not need to read every historical transaction to know if an output is valid; it can look up the specific output by its transaction id and index.

## A simple example

Imagine I have a UTXO worth 1 BTC. I want to send 0.3 BTC to you and 0.6 BTC back to myself as change.

- Input: 1 BTC UTXO
- Outputs:
  - 0.3 BTC to you
  - 0.6 BTC back to me
  - 0.1 BTC fee to miners

The original 1 BTC output is destroyed. New outputs are created. Nothing is "subtracted" from a bank account; the chain simply encodes a new state.

This is why change addresses are normal in Bitcoin. The wallet does not "move 0.3 BTC out of a balance"; it chooses inputs, spends them, and creates outputs.

## How nodes validate this

A full node enforces a few basic rules:

- Each input must reference an output that exists and has not already been spent.
- The unlocking script must satisfy the output's locking conditions.
- Total input value must be at least total output value.
- The difference is the fee.

That last point is crucial. If your input is 1 BTC and your outputs total 0.99 BTC, then 0.01 BTC is paid as a fee to the miner who mines the block.

## The UTXO set

The UTXO set is the complete collection of all valid, unspent outputs at a given moment in the chain. It is not a list of addresses; it is a list of outputs.

A node keeps this data in its chainstate database, which is conceptually a key-value store mapping output references to values and scripts.

This is why Bitcoin Core can do things like:

- look up whether a transaction input is valid
- estimate whether a wallet has enough funds
- reject attempts to double-spend outputs

## Why this matters for privacy and wallet design

UTXOs are part of why wallet software is a little more complex than a simple bank-app balance.

A wallet usually has many small UTXOs from different transactions. If you spend one UTXO, the wallet may create change outputs, causing a new UTXO to appear. That is normal.

This is also why address reuse is a privacy problem: a reused address often makes it easier to cluster a wallet's outputs together. That is one reason Bitcoin wallets often encourage fresh addresses and change handling.

## Developer notes

- Bitcoin Core stores the UTXO set in the chainstate database, with a configurable cache size.
- Useful RPCs:
  - `bitcoin-cli gettxout <txid> <n>`
  - `bitcoin-cli gettxoutsetinfo`
  - `bitcoin-cli dumptxoutset` and `loadtxoutset`
- Wallets usually expose a higher-level view such as `listunspent`, which aggregates the wallet's spendable outputs.

## Common misconceptions

- "My wallet has a balance." Not exactly. Your wallet has a set of spendable UTXOs, and the wallet can compute a balance from them.
- "Change is a fee." No. Change is a new output back to you. The fee is whatever is left over after outputs are created.
- "Bitcoin is just a ledger of balances." It is not. It is a ledger of transactions that create and destroy outputs.

## Why the model matters for developers

If you are building a wallet, a block explorer, a payment processor, or a node integration, the UTXO model affects almost every decision:

- how you compute wallet balances
- how you pick inputs for a spend
- how you detect double-spends
- how you reason about transaction fees
- how you build block explorers and indexing systems

This is also why a naive "balance by address" implementation can be misleading. In Bitcoin, balance is not just a stored field — it is a derived view over the current unspent outputs.

## See also

- [Bitcoin node](../Bitcoin_node/)
- [Partial UTXO set](../Partial_UTXO_set/)
- [OP_RETURN](../OP_RETURN/)
- [How to contribute to Bitcoin](../how-to-contribute-to-bitcoin/)

## Notes and further reading

- Study Bitcoin Core's chainstate implementation, the UTXO rules in the consensus docs, and wallet coin-selection logic.
- The UTXO model is one of the most important conceptual differences between Bitcoin and traditional banking systems.
