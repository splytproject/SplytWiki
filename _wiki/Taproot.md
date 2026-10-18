---
title: Taproot
description: Overview of Bitcoin's Taproot upgrade, its key tweak construction, and the key path and script path spending methods
aliases: [P2TR, Pay-to-Taproot, BIP-341, Taproot upgrade]
categories: [Bitcoin, Protocol, Scripting, Cryptography]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: Taproot (P2TR)
  rows:
    - header: Overview
    - Type: Output type and consensus upgrade
    - Specification: BIP-340, BIP-341, BIP-342
    - Activation block: 709,632
    - header: Mechanism
    - Signature scheme: Schnorr
    - Spending paths: Key path and script path
    - Output contents: Tweaked public key
---

Taproot (also known as P2TR, for pay-to-Taproot) is a Bitcoin output type and the soft fork that introduced it. A Taproot output contains a single public key. That key can be spent with one Schnorr signature, or it can commit to a tree of alternative spending scripts, of which only the one actually used is ever revealed on-chain.

## Overview

Before Taproot, outputs with complex spending conditions, such as multisignature setups, exposed those conditions on-chain when spent. Taproot changes this: a coin controlled by a complex contract can, in the cooperative case, be spent in a way that is indistinguishable from an ordinary single-signature payment. Taproot is specified across three proposals: BIP-340 (Schnorr signatures), BIP-341 (the output and spending rules) and BIP-342 (the script rules for Taproot scripts).

## The key tweak

A Taproot output key is built from an internal public key *P* and, optionally, the Merkle root *R* of a tree of scripts:

    Q = P + t·G,   where t = tagged_hash("TapTweak", P || R)

The result *Q* is the key placed in the output. Observers see only an ordinary key, so they cannot tell whether scripts are committed to or how many.

If no scripts are wanted, wallets still apply a tweak with an empty script tree. Consensus rules do not require this, because nodes cannot distinguish a tweaked key from an untweaked one. However, BIP-341 strongly recommends it. The reason concerns shared keys: if several parties combine their keys into one, an untweaked aggregate allows one participant to craft their contribution so that the combined key secretly includes a script only they can use. Tweaking with a hash of the key demonstrates that no hidden script exists.

Adding a hash-derived value times the generator point is not unique to Taproot; hierarchical deterministic wallets derive child keys using the same kind of addition.

## Spending paths

### Key path

The spender produces a Schnorr signature valid for the output key *Q*. Only the signature appears on-chain. Because it resembles any other single-signature spend, it is the cheapest and most private option. Cooperative multi-party schemes, such as aggregated MuSig2 keys, can use the key path so a multi-party spend looks like a single-signer spend.

### Script path

The spender reveals one leaf script from the tree, a proof that the leaf belongs to the committed tree, and the data satisfying the script. The proof is carried in a structure called the *control block*, whose size is:

    33 + 32·m bytes   (m = depth of the leaf in the tree)

The 33 bytes contain a leaf-version and parity byte plus the internal key. Each of the *m* 32-byte entries is a sibling hash on the path to the root. Verifiers recompute the Merkle root from the revealed leaf, re-derive the tweak, and check that it yields *Q*.

## Cost trade-offs

- With a single script and nothing to hide, the script path can cost slightly more than the older P2WSH, because of the control block.
- With several alternative spending conditions, Taproot reveals only the branch used plus one hash per tree level, whereas P2WSH reveals every branch on each spend.
- The control block grows by 32 bytes for each level of depth, so designs typically place frequently used branches near the top of the tree.

## Quantum considerations

A Taproot output exposes a public key directly, rather than a hash of one as in earlier address types. If the private key for the output key *Q* could be derived, the key path could be used without knowledge of the internal key or script tree, so the tweak provides no protection in that scenario.

## Activation

Taproot was activated through a miner-signalling process counted from block 681,408, with the signalling threshold reached at block 687,284 on 12 June 2021 and activation at block 709,632.

## See also

- [Schnorr_signature](../Schnorr_signature/)
- [Soft_fork_and_hard_fork](../Soft_fork_and_hard_fork/)
- [Segregated_Witness](../Segregated_Witness/)
- [OP_RETURN](../OP_RETURN/)

## Notes and further reading

- BIP-340, BIP-341 and BIP-342 in the Bitcoin Improvement Proposals repository
- ["How Taproot actually works" discussion thread](https://bitcointalk.org/index.php?topic=5594411.0), Bitcoin Forum, September 2026, including clarifications about whether the tweak is mandatory
- (Add sourcing where appropriate: test vectors for output key construction, adoption statistics, and worked examples of script-path spends.)
