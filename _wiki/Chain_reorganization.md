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

A **chain reorganization** (or **reorg**) occurs when a Bitcoin node replaces the blocks at the tip of its best chain with a competing branch that has more accumulated proof of work. The replaced blocks become *stale blocks*. Reorgs are an expected part of how the network resolves competing blocks, not a malfunction.

## Cause

Two miners sometimes find valid blocks at the same height at nearly the same time. Because blocks take time to propagate, different parts of the network see different blocks first, and two competing tips briefly exist. When the next block is found on top of one of them, nodes follow the chain with the most total work, and nodes that had accepted the other block switch over.

## Frequency

- **Single-block reorgs** occur occasionally. Public stale-block datasets, cited in community discussion, put the historical share of stale blocks at a few percent of all blocks, with a lower share in recent years. Some months contain several, and others none.
- **Deeper reorgs** of two or more blocks are very rare in modern times. A six-block reorg would be considered highly unusual.
- A temporary fork does not mean every node experiences a reorg; a node may never see the losing block.

The rate of single-block reorgs is largely explained by block propagation time: the slower blocks spread, the more often two are found within the gap.

## Tie-breaking and cumulative work

Competing blocks at the same height usually add the same amount of work, because work per block is derived from the difficulty target rather than from how small an individual block hash happens to be. A block with a numerically smaller hash is not counted as "heavier". When the chains have equal work, a node typically keeps the block it saw first.

## Relevance to confirmations

Transactions in the replaced block generally return to the mempool and are mined again in the winning chain, often in the very next block. Waiting for one or two confirmations makes a single-block reorg irrelevant to the recipient, which is one reason exchanges and payment processors require more than one confirmation.

## Observing reorgs

A node operator can list known chain tips with the `getchaintips` RPC. A tip with a `branchlen` above zero and a status such as `valid-fork` is a side branch the node has seen.

## See also

- [Soft_fork_and_hard_fork](../Soft_fork_and_hard_fork/)
- [Bitcoin_node](../Bitcoin_node/)
- [Proof_of_work](../Proof_of_work/)
- [Block_propagation](../Block_propagation/)

## Notes and further reading

- ["Isn't block reorganization the most common phenomenon in the Bitcoin blockchain?" discussion thread](https://bitcointalk.org/index.php?topic=5593881.0), Bitcoin Forum, September 2026
- [fork.observer](https://fork.observer/?network=mainnet), a live fork monitor, and the [stale blocks dataset](https://bitcoin-data.github.io/stale-blocks/)
- (Add sourcing where appropriate: measurements of propagation delay and stale rate, and descriptions of notable historical reorgs.)
