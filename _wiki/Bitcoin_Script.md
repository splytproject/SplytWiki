---
title: Bitcoin Script
description: Overview of Bitcoin's stack-based scripting language, standard script types, and how scripts are evaluated
aliases: [Script, scriptPubKey, scriptSig, Opcodes, P2PKH, P2SH, P2WPKH, P2WSH, P2TR]
categories: [Bitcoin, Protocol, Scripting]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: Bitcoin Script
  rows:
    - header: Overview
    - Type: Stack-based, not Turing-complete
    - Loops: None
    - header: Developer reference
    - Evaluation code: src/script/interpreter.cpp
    - Useful RPCs: decodescript, decoderawtransaction
---

> **In plain terms:** Every coin is locked by a tiny program. To spend it, you supply data that makes the program succeed. Usually that data is a signature proving you hold a key, but it can be more complex.

**Bitcoin Script** is the simple, stack-based language used to express spending conditions. Each [UTXO](../UTXO/) has a **locking script** (`scriptPubKey`); each spending input supplies an **unlocking script** (`scriptSig`) and/or **witness** that must make the combined evaluation succeed.

## How it works

- Scripts are a list of **opcodes** and data pushes, run left to right against a **stack**.
- Spending succeeds if execution finishes without error and leaves a true value on top of the stack.
- There are no loops, which keeps execution cost bounded and predictable.

Example: the classic **pay-to-public-key-hash (P2PKH)** locking script:

    OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG

The spender provides `<signature> <publicKey>`. The script duplicates the key, hashes it, compares with `<pubKeyHash>`, then verifies the signature.

## Standard script types

| Type | Idea | Notes |
|---|---|---|
| P2PKH | Hash of a public key | Legacy |
| P2SH | Hash of an arbitrary script, revealed at spend | Enables [multisig](../Multisignature/) addresses |
| P2WPKH / P2WSH | SegWit v0 versions of the above | See [Segregated Witness](../Segregated_Witness/) |
| P2TR | Taproot output key | See [Taproot](../Taproot/) |
| OP_RETURN | Unspendable data carrier | See [OP_RETURN](../OP_RETURN/) |

## Consensus vs standardness

Many scripts are valid by consensus but not *standard*, so default nodes won't relay them (see [Mempool](../Mempool/)). New script features generally arrive through [soft forks](../Soft_fork_and_hard_fork/).

## Developer notes

- `bitcoin-cli decodescript <hex>` disassembles a script.
- `bitcoin-cli decoderawtransaction <hex>` shows scripts and witnesses in a transaction.
- Practice on regtest (see [Testnet](../Testnet/)); mistakes with real coins can make them permanently unspendable.
- Miniscript and output descriptors provide safer, composable ways to build scripts.

## See also

- [Multisignature](../Multisignature/)
- [Taproot](../Taproot/)
- [ECDSA](../ECDSA/)
- [UTXO](../UTXO/)

