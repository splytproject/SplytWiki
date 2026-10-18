---
title: Multisignature
description: Overview of m-of-n multisignature spending in Bitcoin, the OP_CHECKMULTISIG opcode and its off-by-one quirk, and standardness limits
aliases: [Multisig, OP_CHECKMULTISIG, m-of-n, CHECKMULTISIG bug]
categories: [Bitcoin, Protocol, Scripting, Custody]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: Multisignature
  rows:
    - header: Overview
    - Idea: m of n keys must sign
    - Opcode: OP_CHECKMULTISIG
    - header: Quirks
    - Known bug: Pops one extra stack item
    - Replaced in Tapscript by: OP_CHECKSIGADD
---

> **In plain terms:** Multisig is a shared lock. For example, a "2-of-3" setup needs any two of three keys to approve a spend, so losing one key (or having one stolen) isn't fatal.

**Multisignature** (multisig) lets an output require signatures from *m* of *n* listed public keys. In legacy and SegWit v0 scripts it is implemented with the opcode `OP_CHECKMULTISIG`.

## How it works

A 2-of-3 locking script looks like:

    OP_2 <pubkey1> <pubkey2> <pubkey3> OP_3 OP_CHECKMULTISIG

The unlocking data supplies the signatures. `OP_CHECKMULTISIG` checks that each supplied signature matches a distinct public key, **in the same order** as the keys appear.

## The off-by-one bug

An early implementation error causes `OP_CHECKMULTISIG` to remove **one more item from the stack than it should**. Bitcoin discussions in 2011 traced it to the index handling in the interpreter. Because fixing it would change consensus, it was preserved, and spenders must supply an extra dummy element before the signatures:

    unlocking:  OP_0 <sig1> <sig2>
    locking:    OP_2 <pubkey1> <pubkey2> <pubkey3> OP_3 OP_CHECKMULTISIG

The dummy must be an empty value under the "NULLDUMMY" rule (BIP-147, part of the SegWit soft fork).

## Limits and costs

- Up to 20 public keys by script rules, but a P2SH redeem script is limited to 520 bytes, which allows about 15 compressed keys.
- Legacy sigop accounting counts each `OP_CHECKMULTISIG` as up to 20 signature operations, which constrained how many could fit in a block.
- **Standardness:** default nodes relay only certain multisig forms. Scripts that are valid by consensus but unusual can be hard to get mined; a proposal to make a common two-path multisig form standard was discussed in Bitcoin Core PR #26348.

## Taproot

Tapscript disables `OP_CHECKMULTISIG`. Multisig there uses `OP_CHECKSIGADD`, or key aggregation (MuSig2) so the group spends via the key path as a single signer (see [Taproot](../Taproot/) and [Schnorr_signature](../Schnorr_signature/)).

## Developer notes

- Use `decodescript` to inspect multisig scripts.
- Wallets usually express multisig as **output descriptors**, e.g. `wsh(multi(2,xpubA,xpubB,xpubC))`.
- Coordination between signers is usually done with [PSBT](../PSBT/).

## See also

- [Bitcoin_Script](../Bitcoin_Script/)
- [PSBT](../PSBT/)
- [Taproot](../Taproot/)
- [Mempool](../Mempool/)

## Notes and further reading

- The off-by-one explanation is from a 2011 Bitcoin developer mailing-list discussion; standardness discussions are from Bitcoin Core GitHub (e.g. [PR #26348](https://github.com/bitcoin/bitcoin/pull/26348)).
- The forum board has a thread on unusual multisig use: [non-standard CHECKMULTISIG usage](https://bitcointalk.org/index.php?topic=5595966.0) (linked, not summarized here).
- (Add sourcing where appropriate: BIP-147, descriptor documentation.)
