---
title: Chain reorganization
description: Overview of block reorganizations in Bitcoin, why they occur, how frequent they are, and their relevance to confirmations
aliases: [Reorg, Blockchain reorganization, Block reorganization, Stale block, Orphan block]
categories: [Bitcoin, Protocol, Consensus, Mining]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: Chain reorganization
  rows:
    - header: Topic
    - Subject: Replacement of one chain tip by a heavier one
    - Common form: Single-block (depth-1) reorg
    - header: Resolution
    - Rule: Chain with the most accumulated work wins
    - Losing block: Stale block
---

> **In plain terms:** A chain reorganization (reorg) is what happens when the network briefly disagrees about which blocks are the tip of the chain. Imagine two miners find a block at the same height: until the next block arrives, some nodes prefer one block and others prefer the other. When the network later sees a longer/heavier chain, nodes switch.

Chain reorganizations are a normal part of how Bitcoin's decentralized block production resolves temporary disagreements. They are not a bug — they're the protocol doing its job — but they matter for how quickly you can trust a transaction.

Why this matters to you as a developer

- Safety model: waiting for confirmations reduces the chance your transaction is undone by a reorg. For small payments one confirmation is often fine; for high-value transfers services commonly use 6+ confirmations.
- Mempool behavior: transactions in a replaced block typically return to mempools and are re-mined; your code should handle re-broadcasts and RPC errors gracefully.
- Monitoring and automation: automated systems that act on new blocks must detect reorgs and reconcile state if a transaction they consumed disappears.

## A concrete example (story)

Alice broadcasts a transaction and sees it included in block A. Bob, elsewhere on the network, also sees block B at the same height (different miner). A few minutes later, a miner finds a new block that builds on B, making the chain that includes B heavier. Nodes that had A switch to the B chain: block A becomes stale, and Alice's transaction (if only in A) returns to the mempool. If it is not included again, Alice's payment is not finalized.

## Frequency and depth

- Most reorganizations are simple, depth‑1 events: a single later block replaces a competing tip. These happen occasionally because of network propagation delay.
- Deeper reorganizations (2 or more blocks) are rare on Bitcoin mainnet; anything beyond a few blocks is unusual and typically the result of a miner reorg (an actor withholding blocks) or a significant consensus split.

## Practical guidance for developers

- Confirmations: pick a confirmation policy that matches your threat model. For retail values 1–2 confirmations may be acceptable; for exchanges or large transfers consider 6 or more.
- Idempotency: make your block-handling idempotent. When a reorg happens, transactions you thought were confirmed may vanish — ensure your system can roll back state or re-check tx presence via `getrawtransaction`/`gettxout` and mempool queries.
- Reconciliation: track `blockhash` used in state changes and re-verify after reorgs. Use `getchaintips` to find side branches and `getblock` to inspect blocks.

## Developer notes and commands

- `bitcoin-cli getchaintips` shows known tips and branch lengths.
- `bitcoin-cli getblock <hash>` and `getrawtransaction <txid> true` help you inspect whether a transaction is on-chain or just in the mempool.
- In automated systems, subscribe to new block notifications (ZeroMQ or RPC polling) and keep a short history buffer so you can detect and undo actions if a reorg removes a block your system used.

## Common pitfalls and anti-patterns

- Assuming the first seen block is permanent. Always design to handle reorgs.
- Treating confirmations as purely time-based. It's the number of blocks on top of a transaction's block that matters, not elapsed time.
- Not considering the mempool: transactions that reappear in the mempool may be assigned a different fee and wait longer to be re-mined.

## See also

- [Proof of work](../Proof_of_work/)
- [Bitcoin node](../Bitcoin_node/)

## Notes and further reading

- Live tools such as fork.observer and stale-block datasets help measure reorg frequency. Historical community discussions and measurements provide context for how often and how deep reorgs typically are.
