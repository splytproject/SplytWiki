---
title: Proof of work
description: Explanation of how Bitcoin blocks are produced, how difficulty adjusts, and how nodes choose the best chain
aliases: [Mining, Block header, Difficulty, Hash target, PoW]
categories: [Bitcoin, Protocol, Consensus, Mining]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: Proof of work
  rows:
    - header: Overview
    - Hash function: SHA-256 applied twice
    - Header size: 80 bytes
    - header: Parameters
    - Target block interval: About 10 minutes
    - Difficulty retarget: Every 2,016 blocks
---

> **In plain terms:** To add a block, a miner must find a number that makes the block's hash unusually small. That takes enormous trial and error, but anyone can verify the answer instantly. The chain with the most accumulated work wins.

**Proof of work (PoW)** is the mechanism that makes creating blocks costly and verifying them cheap, which in turn makes rewriting history expensive.

## The block header

A block header is 80 bytes:

| Field | Size |
|---|---|
| Version | 4 bytes |
| Previous block hash | 32 bytes |
| Merkle root of transactions | 32 bytes |
| Timestamp | 4 bytes |
| Bits (compact target) | 4 bytes |
| Nonce | 4 bytes |

A block is valid proof of work if `SHA256(SHA256(header))`, read as a number, is **at or below the target** encoded in `bits`. Miners vary the nonce (and other fields such as part of the coinbase transaction, which changes the Merkle root) until a hash meets the target.

## Difficulty adjustment

Every 2,016 blocks, the target is retargeted so blocks keep arriving about every 10 minutes: if the previous 2,016 blocks came faster than two weeks, the target gets smaller (harder); if slower, larger (easier). The adjustment is clamped to a factor of four per period.

## Choosing the best chain

Nodes follow the valid chain with the **greatest cumulative work**, not simply the most blocks. Work per block derives from the target; a numerically lucky hash does not count extra. When two valid blocks compete, the tie resolves when the next block extends one of them (see [Chain_reorganization](../Chain_reorganization/)).

## Why it exists

Without a cost to produce blocks, anyone could create alternative histories for free. PoW ties the right to extend the chain to real-world resource expenditure, giving participants a way to agree on one history without a central authority.

## Developer notes

- `bitcoin-cli getblockheader <hash>` shows `bits`, `nonce` and `difficulty`.
- `bitcoin-cli getdifficulty` returns the current difficulty.
- Core's difficulty logic is in `src/pow.cpp`.
- On regtest, difficulty is minimal; `generatetoaddress` mines blocks instantly (see [Testnet](../Testnet/)).

## See also

- [Chain_reorganization](../Chain_reorganization/)
- [Bitcoin_node](../Bitcoin_node/)
- [Testnet](../Testnet/)
- [Soft_fork_and_hard_fork](../Soft_fork_and_hard_fork/)

## Notes and further reading

- Based on the original Bitcoin design and Bitcoin Core's implementation.
- Forum discussion of competing blocks and cumulative work: [Isn't block reorganization the most common phenomenon in the Bitcoin blockchain?](https://bitcointalk.org/index.php?topic=5593881.0)
- (Add sourcing where appropriate: the Bitcoin white paper, the timewarp-attack literature.)
