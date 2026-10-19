---
title: Bitcoin node
description: Overview of what a Bitcoin full node does, how it syncs, and the main node modes
aliases: [Full node, Bitcoin Core, Node software, Pruned node, Initial block download]
categories: [Bitcoin, Protocol, Nodes, Development]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: Bitcoin node
  audience: Developers
  rows:
    - header: Overview
    - Role: Independently validates blocks and transactions
    - Reference implementation: Bitcoin Core
    - header: Modes
    - Variants: Archival, pruned, blocks-only
    - Alternatives: SPV and filter-based light clients
dev: true
---

> **In plain terms:** A node is a program that checks every rule itself instead of trusting anyone. It downloads blocks, verifies them, and passes valid data to other nodes.

A **Bitcoin node** is software that connects to peers, downloads blocks and transactions, validates them against the consensus rules, and relays valid data. A node that checks everything from the genesis block forward is a **full node**. The most widely used implementation is **Bitcoin Core**.

Developer summary

- Who this is for: developers building wallets, explorers, or network tools that must validate or query chain data.
- Focus: initial block download (IBD), UTXO maintenance, node modes (pruned vs archival) and RPCs you will need when integrating with a node.
- Quick tasks: run a regtest node, inspect chainstate with RPCs, and trace a transaction from mempool to confirmed block.

## What a full node does

1. **Initial block download (IBD).** Fetches headers first, then blocks, validating each one: proof of work, transaction scripts, and that no output is spent twice.
2. **Maintains state.** Builds the [UTXO](../UTXO/) set as it goes.
3. **Relays.** Passes on valid unconfirmed transactions (see [Mempool](../Mempool/)) and new blocks.
4. **Serves.** Answers queries from its wallet, RPC clients and peers.

## Node modes

| Mode | What it keeps | Validates everything? |
|---|---|---|
| Archival | All blocks plus UTXO set | Yes |
| Pruned (`-prune=N`) | UTXO set plus only recent block files | Yes (old blocks are deleted after validation) |
| Blocks-only (`-blocksonly`) | Same chain data, but doesn't relay loose transactions | Yes |
| Light client (SPV / filters) | Headers only | No: relies on full nodes |

Pruning has a minimum target of 550 MiB of block files in Bitcoin Core.

## Why run one

A wallet connected to your own node does not have to trust a third party's view of the chain, and does not leak which addresses it cares about to someone else's server.

## Developer notes

- Core's validation logic lives mainly in `src/validation.cpp`; script evaluation is in `src/script/interpreter.cpp`.
- Useful RPCs: `getblockchaininfo`, `getnetworkinfo`, `getpeerinfo`, `getmempoolinfo`.
- Start a private test chain with `bitcoind -regtest` (see [Testnet](../Testnet/)).
- Hardware: initial sync is dominated by disk and CPU; the `-dbcache` setting trades memory for faster sync.

## See also

- [UTXO](../UTXO/)
- [Partial UTXO set](../Partial_UTXO_set/)
- [Chain reorganization](../Chain_reorganization/)
- [How to contribute to Bitcoin](../how-to-contribute-to-bitcoin/)

## Notes and further reading

- Forum discussions touching on node trade-offs: [Can a Bitcoin node build a partial UTXO set from recent N blocks?](https://bitcointalk.org/index.php?topic=5593895.0); the board also has a thread on hardware requirements for a full node: [Hardware requirements for running a full node with the official client](https://bitcointalk.org/index.php?topic=5593377.0).
