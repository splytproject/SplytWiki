---
title: Segregated Witness
description: Overview of SegWit, the witness section of transactions, block weight, and the witness discount
aliases: [SegWit, BIP-141, BIP-143, BIP-144, Witness data, Weight units, vbytes]
categories: [Bitcoin, Protocol, Transactions, Soft forks]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: Segregated Witness
  rows:
    - header: Overview
    - Specification: BIP-141, BIP-143, BIP-144
    - Deployment: Soft fork (2017)
    - header: Key ideas
    - Block limit: 4,000,000 weight units
    - Address style: Bech32 (bc1…)
---

**Specifications:** [BIP-141](../BIP_index/#bip-141) · [BIP-143](../BIP_index/#bip-143) · [BIP-144](../BIP_index/#bip-144) · [BIP-173](../BIP_index/#bip-173) · [BIP-350](../BIP-350/)

> **In plain terms:** SegWit moved the signature data of a transaction into a separate section. That fixed a bug that let third parties tweak transaction ids, and it let blocks hold more transactions.

**Segregated Witness (SegWit)** separates a transaction's unlocking data (signatures and similar items, called the **witness**) from the rest of the transaction. It was deployed as a [soft fork](../Soft_fork_and_hard_fork/) in 2017.

## What changed

- **Witness separated from the txid.** The transaction id (`txid`) no longer commits to signatures, so changing a signature cannot change the `txid` (this removed a form of transaction malleability, important for protocols that build on unconfirmed transactions). A separate `wtxid` commits to the witness too.
- **Witness versions.** Output scripts carry a version number, allowing future upgrades. Version 0 covers P2WPKH and P2WSH; version 1 is [Taproot](../Taproot/).
- **New signature hash (BIP-143)** that fixes quadratic hashing costs for large transactions.
- **Weight-based block limit.**

## Weight and the witness discount

    weight = base_size × 3 + total_size      (virtual size = weight / 4)

A block may contain at most 4,000,000 weight units. Base (non-witness) bytes count four units each, witness bytes one, so witness data is discounted. Fees are usually quoted per **virtual byte (vbyte)**, which is weight ÷ 4.

Only bytes in the witness section are discounted. Outputs, including [OP_RETURN](../OP_RETURN/) outputs, are base data.

## Why it exists

It addressed malleability, enabled script upgrades via versioning, and raised effective capacity without a hard fork.

## Developer notes

- Bech32 addresses (BIP-173) start with `bc1q` (v0) and Bech32m (BIP-350) with `bc1p` (v1/Taproot).
- `bitcoin-cli decoderawtransaction` shows `size`, `vsize` and `weight`.
- Old nodes see SegWit outputs as "anyone-can-spend" scripts, which is why it needed broad miner enforcement.

## See also

- [Taproot](../Taproot/)
- [OP_RETURN](../OP_RETURN/)
- [Mempool](../Mempool/)
- [Bitcoin Script](../Bitcoin_Script/)

## Notes and further reading

- Based on BIP-141, BIP-143, BIP-144, BIP-173, BIP-350.
- Forum discussion of what counts as witness data: [Looking for proof OP_RETURN isn't part of witness data](https://bitcointalk.org/index.php?topic=5597097.0); and on SegWit as a soft vs hard fork: [How do developers decide whether a Bitcoin upgrade will be a soft or hard fork?](https://bitcointalk.org/index.php?topic=5596302.0)
