---
title: HD wallets and seed phrases
description: Overview of hierarchical deterministic wallets (BIP-32), mnemonic seed phrases (BIP-39), and derivation paths
aliases: [BIP-32, BIP-39, BIP-44, BIP-84, BIP-86, Mnemonic, Recovery phrase, xpub, Derivation path]
categories: [Bitcoin, Wallets, Cryptography]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: HD wallets and seed phrases
  rows:
    - header: Specifications
    - Key tree: BIP-32
    - Mnemonic words: BIP-39
    - Paths: BIP-44, 49, 84, 86
    - header: Key terms
    - Seed: 512-bit value from the mnemonic
    - Extended public key: xpub
---

> **In plain terms:** Instead of backing up each key separately, a wallet derives all its keys from one secret. That secret is written as 12 or 24 words, your recovery phrase. Anyone with the words can recreate every key.

A **hierarchical deterministic (HD) wallet** generates a tree of keys from a single seed. **BIP-32** defines the tree; **BIP-39** defines how a human-readable word list encodes the seed.

## BIP-39: the words

1. Generate random entropy (128 to 256 bits).
2. Append a short checksum.
3. Split into 11-bit groups, each selecting a word from a fixed 2,048-word list (12 words for 128 bits, 24 words for 256 bits).
4. Convert the words to a 512-bit **seed** by running PBKDF2-HMAC-SHA512 for 2,048 iterations, using the string "mnemonic" plus an optional **passphrase** as the salt.

The optional passphrase gives a completely different wallet; losing it means losing access.

## BIP-32: the tree

The seed produces a **master private key** and a **chain code**. From any parent key you can derive child keys by index:

- **Non-hardened** children can be derived from the parent *public* key, which is what allows **extended public keys (xpubs)** to generate receiving addresses without private keys.
- **Hardened** children require the parent private key, so an xpub cannot derive them, and exposure of a child private key can't compromise its parent.

## Derivation paths

A path like `m/84'/0'/0'/0/5` names a specific key. The "purpose" number identifies the address type:

| Purpose | BIP | Address type |
|---|---|---|
| 44' | BIP-44 | Legacy P2PKH |
| 49' | BIP-49 | P2SH-wrapped SegWit |
| 84' | BIP-84 | Native SegWit (P2WPKH) |
| 86' | BIP-86 | Taproot (P2TR) |

## Why it exists

Before HD wallets, every key needed its own backup. One seed now backs up an unlimited number of future addresses, and an xpub gives a watch-only view.

## Security and privacy notes

- Anyone holding the seed phrase controls all funds. Treat it as the wallet.
- Sharing an **xpub** exposes every address and balance in that branch to the recipient; it doesn't expose spending keys, but it is a large privacy leak.
- Never type a recovery phrase into a website or an unverified app.

## Developer notes

- Use maintained libraries for BIP-32/39; test with the official test vectors in the BIPs.
- Modern wallets describe address sets with **output descriptors**, which pair a key origin and a script type in one string.
- `bitcoin-cli getdescriptorinfo` and `deriveaddresses` let you explore descriptors on regtest.

## See also

- [Seed phrases and self-custody security](../Seed_phrases_and_self-custody_security/)
- [ECDSA](../ECDSA/)
- [PSBT](../PSBT/)
- [Silent_payments](../Silent_payments/)
- [Multisignature](../Multisignature/)

## Notes and further reading

- Based on BIP-32, BIP-39, BIP-44, BIP-49, BIP-84 and BIP-86.
- The forum board has a thread of experimental BIP-39 research: [Experimental BIP-39 research: prime-coordinate representation and entropy analysis](https://bitcointalk.org/index.php?topic=5594019.0) (linked, not summarized here; treat experimental claims with caution).
- (Add sourcing where appropriate: BIP test vectors, descriptor specifications.)
