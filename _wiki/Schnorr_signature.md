---
title: Schnorr signature
description: Overview of BIP-340 Schnorr signatures and why they were added to Bitcoin
aliases: [BIP-340, Schnorr signatures, MuSig2, x-only public keys]
categories: [Bitcoin, Cryptography, Signatures, Taproot]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: Schnorr signature
  rows:
    - header: Overview
    - Specification: BIP-340
    - Activated with: Taproot
    - header: Properties
    - Signature size: 64 bytes
    - Public key size: 32 bytes (x-only)
    - Notable feature: Linearity (key aggregation)
---

> **In plain terms:** Schnorr is a newer, simpler signature scheme. Its maths lets several people combine their keys into one, so a group can sign together and the result looks like a single ordinary signature.

**Schnorr signatures** on secp256k1 were standardized for Bitcoin in **BIP-340** and became usable with the [Taproot](../Taproot/) activation. They coexist with [ECDSA](../ECDSA/); older output types still use ECDSA.

## How it differs from ECDSA

- **Fixed 64-byte signatures** and **32-byte x-only public keys** (only the x-coordinate is stored, with the y-coordinate implied).
- **Tagged hashes:** hashes are domain-separated with a tag, so a hash computed for one purpose cannot be reused for another.
- **Linearity:** signatures and keys combine by addition. This is what enables aggregation.

## Why it was added

- **Smaller and cleaner:** simpler to implement and to prove secure.
- **Key aggregation:** protocols such as **MuSig2 (BIP-327)** let multiple parties produce one aggregate key and one signature. A multi-party spend then looks identical to a single-signer spend on-chain, which saves space and improves privacy.
- **Batch verification** is possible in principle, which can speed up validating many signatures at once.

## Developer notes

- libsecp256k1 provides Schnorr signing and verification.
- Taproot key-path spends carry a single Schnorr signature; script-path spends use Schnorr inside Tapscript (BIP-342).
- Signature aggregation across *different inputs* of a transaction is not part of Bitcoin; the aggregation here is among the signers of a single key.

## See also

- [ECDSA](../ECDSA/)
- [Taproot](../Taproot/)
- [Multisignature](../Multisignature/)
- [Segregated Witness](../Segregated_Witness/)

## Notes and further reading

- Based on BIP-340, BIP-341, BIP-342 and BIP-327.
- Forum context on Taproot and Schnorr claims: [How Taproot actually works](https://bitcointalk.org/index.php?topic=5594411.0).
