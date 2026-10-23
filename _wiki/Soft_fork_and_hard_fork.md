---
title: Soft fork and hard fork
description: Overview of the two kinds of Bitcoin consensus rule changes and how developers choose between them
aliases: [Soft fork, Hard fork, Bitcoin forks, Soft_fork, Hard_fork]
categories: [Bitcoin, Protocol, Consensus, Governance]
updated: 2026-10-23
last_modified: 2026-10-23
infobox:
  image: bitcoin.svg
  caption: Soft fork and hard fork
  rows:
    - header: Topic
    - Subject: Changing Bitcoin's consensus rules
    - header: Types
    - Soft fork: Tightens rules; old nodes still accept new blocks
    - Hard fork: Loosens or changes rules; old nodes reject new blocks
---

In Bitcoin, a **soft fork** and a **hard fork** are the two kinds of change to the network's consensus rules. A soft fork restricts the set of valid blocks and remains compatible with nodes that have not upgraded. A hard fork, by contrast, changes the rules in a way that is incompatible with older software. It can split the network if not everyone upgrades.

## Definitions

The distinction rests on one question: does the change make something that was valid become invalid, or make something that was invalid become valid?

| Change | Classification | Effect on non-upgraded nodes |
|---|---|---|
| New valid set is a subset of the old valid set | Soft fork | Still accept blocks that follow the new rules |
| Blocks that old nodes reject become valid | Hard fork | Reject the new blocks, risking a chain split |

A soft fork can take effect without universal upgrading, provided enough of the mining power enforces the new rules. A hard fork requires every participant to upgrade in order to remain on the same chain.

## How developers choose

Developers generally prefer the least disruptive route that achieves a goal, roughly in this order:

1. **No fork.** Achieve the goal within existing rules, with no consensus change, for example through script-level techniques or relay policy.
2. **Soft fork.** Requires broad agreement and an activation process, and may fail if support is insufficient.
3. **Hard fork.** Requires all participants to move together. A hard fork pursued without broad agreement can result in a minority chain, which is how several alternative cryptocurrencies originated.

The choice is also influenced by technical and risk trade-offs. For example, SegWit could arguably have been implemented more cleanly as a hard fork. However, proponents judged the coordination risks of a hard fork to be considerably greater, so it was deployed as a soft fork.

## Why hard forks are difficult

If hard forks were routine, those controlling the reference software could change the rules at will. The difficulty of coordinating a hard fork is therefore regarded by many as a protection for users against unwanted rule changes.

## Review and activation

Classifying a change is the comparatively simple step. Most of the effort lies in review, testing, and gathering support from miners, exchanges, wallet developers and node operators. Even soft forks are now considered politically difficult, which has increased interest in no-fork approaches.

## See also

- [Taproot](../Taproot/)
- [Segregated Witness](../Segregated_Witness/)
- [Chain reorganization](../Chain_reorganization/)

## Notes and further reading

- ["How do developers decide whether a Bitcoin upgrade will be a soft or hard fork?" discussion thread](https://bitcointalk.org/index.php?topic=5596302.0), Bitcoin Forum, October 2026
