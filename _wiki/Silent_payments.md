---
title: Silent payments
description: Overview of BIP-352 silent payments, a static-address protocol that avoids address reuse without sender-receiver interaction
aliases: [BIP-352, Silent payment address, Reusable payment address, sp1 address]
categories: [Bitcoin, Privacy, Wallets, Taproot]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: Silent payments
  rows:
    - header: Overview
    - Specification: BIP-352
    - Address prefix: sp1q (mainnet)
    - header: Properties
    - Outputs created: Unique Taproot outputs
    - Sender-receiver interaction: None
    - Cost: Receiver must scan the chain
---

**Specifications:** [BIP-352](../BIP_index/#bip-352)

> **In plain terms:** Normally, publishing one address means everyone paying you reuses it, which links all your payments publicly. Silent payments let you publish one address, while each payer secretly derives a different on-chain address that only you can recognize.

**Silent payments (BIP-352)** is a protocol for static payment addresses in Bitcoin without on-chain linkability of payments and without on-chain notifications.

## The problem

- **Address reuse** links payments together for any observer.
- **Fresh addresses** need interaction: the receiver must hand a new address to each sender.
- **Notification schemes** (earlier approaches) add on-chain data and let the receiver link multiple payments from the same sender.

## How it works

1. The receiver publishes a **silent payment address** that encodes two public keys: a **scan key** and a **spend key**.
2. The sender combines the **public keys of the inputs they are spending** with the receiver's scan key using a Diffie-Hellman-style shared secret (ECDH).
3. From that shared secret the sender derives a unique **Taproot output key** and pays to it. The resulting transaction looks like an ordinary Taproot payment.
4. The receiver, who has the scan private key, scans eligible transactions, finds ones where the derived output matches, and can spend using the spend key plus the tweak.

An outside observer cannot link outputs to the published address, and no output reveals that silent payments were used.

## Trade-offs

- **Receiver cost:** wallets must scan new blocks to detect payments, which is heavier than watching a fixed address list. Light-wallet designs rely on specialized servers or other scanning helpers.
- **Input restrictions:** only certain input types (those with a single clear public key) take part. Inputs with multiple keys, such as multisig, are excluded, in part because a collaborator could change keys after the output was derived.
- **Script-path spends:** senders must not fund a silent payment with a Taproot script-path spend; a protocol rule guards against a CoinJoin attack described in the BIP's review.
- **Address length:** the address is longer than a normal Bech32 address (about 117 characters) because it carries two keys.

## Ecosystem and tooling

Support has been spreading through wallets and hardware devices (for example, Sparrow added receiving, and BitBox02 added signing support), and companion BIPs define how PSBTs and descriptors handle silent payments. Check each wallet's release notes for current status.

## Developer notes

- Study the reference test vectors in BIP-352.
- Sending is far simpler than receiving; implement sending first.
- Related PSBT BIPs add fields for silent-payment data (see [PSBT](../PSBT/)).

## See also

- [Taproot](../Taproot/)
- [PSBT](../PSBT/)
- [Schnorr signature](../Schnorr_signature/)
- [UTXO](../UTXO/)

## Notes and further reading

- Based on BIP-352 and its review discussion on GitHub (bitcoin/bips PR #1458), the Bitcoin Wiki article, and Bitcoin Optech's topic page.
- The forum board has a long thread on silent payments: [Silent payments](https://bitcointalk.org/index.php?topic=5400363.0).
