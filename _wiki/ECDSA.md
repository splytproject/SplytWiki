---
title: ECDSA
description: Explanation of the ECDSA signature scheme Bitcoin uses on secp256k1, and why nonce handling is critical
aliases: [Elliptic Curve Digital Signature Algorithm, secp256k1, Bitcoin signatures, Nonce reuse]
categories: [Bitcoin, Cryptography, Signatures]
updated: 2026-10-23
last_modified: 2026-10-23
infobox:
  image: bitcoin.svg
  caption: ECDSA
  rows:
    - header: Overview
    - Curve: secp256k1
    - Signature: Pair (r, s)
    - header: Specification and library
    - Encoding: Strict DER (BIP-66)
    - Reference library: libsecp256k1
---

> **In plain terms:** A signature proves "the owner of this key approved this exact transaction" without revealing the key. ECDSA is the math Bitcoin used for this from the start. It works, but it has a sharp edge: reusing one secret number even once can leak your private key.

**ECDSA** (Elliptic Curve Digital Signature Algorithm) is a signature scheme. Over the **secp256k1** curve, it is the scheme used by legacy and SegWit v0 Bitcoin outputs. (Taproot adds [Schnorr signature](../Schnorr_signature/).)

## How it works

- A private key is a number `d`. The public key is the curve point `Q = d·G`.
- To sign a message hash `z` (in Bitcoin, the transaction's signature hash), the signer picks a secret random **nonce** `k`. The signer then computes the point `k·G` and sets `r` to its x-coordinate (mod the group order `n`).
- The second component is `s = k⁻¹ (z + r·d) mod n`.
- The signature is the pair `(r, s)`. A verifier uses `Q`, `z`, `r`, `s` to check consistency without learning `d`.

## Why the nonce matters

If the same `k` is used for two different messages with the same key, the two signatures share `r`. Anyone can then solve for the private key:

    k = (z1 − z2) / (s1 − s2)   (mod n)
    d = (s1·k − z1) / r         (mod n)

Even a biased or partially predictable `k` can leak `d` with enough signatures. Real wallets have lost funds to weak randomness.

The standard fix is **deterministic nonces (RFC 6979)**: derive `k` from the private key and message hash. As a result, `k` is unique per message and never needs a random number generator. libsecp256k1 does this.

## Encoding rules

- **Strict DER** encoding is required by consensus (BIP-66), removing a source of malleability.
- **Low-S** (requiring `s` ≤ n/2) is a standardness rule. Each signature has a twin `(r, n−s)`, and requiring the low form prevents third parties from changing a transaction id by flipping `s`.

## Developer notes

- Use a vetted library (libsecp256k1 or a binding); never implement your own curve arithmetic.
- `bitcoin-cli signrawtransactionwithkey` and `decoderawtransaction` let you inspect real signatures.
- Signature hash types (`SIGHASH_ALL`, `NONE`, `SINGLE`, and the `ANYONECANPAY` modifier) decide which parts of the transaction `z` commits to.

## See also

- [Schnorr signature](../Schnorr_signature/)
- [Segregated Witness](../Segregated_Witness/)
- [Bitcoin Script](../Bitcoin_Script/)
- [HD wallets and seed phrases](../HD_wallets_and_seed_phrases/)

## Notes and further reading

- Based on standard cryptographic specifications (SEC 2, RFC 6979) and BIP-66.
- The forum board has a thread of sample (r, s, z, k) values for study: [R,S,Z , K nonce and public key Signature samples](https://bitcointalk.org/index.php?topic=5500713.0).
