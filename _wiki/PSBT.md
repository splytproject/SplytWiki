---
title: PSBT
description: Overview of Partially Signed Bitcoin Transactions (BIP-174), their roles, and use with hardware wallets and multisig
aliases: [Partially Signed Bitcoin Transaction, BIP-174, BIP-370, PSBTv2, Air-gapped signing]
categories: [Bitcoin, Wallets, Transactions, Tooling]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: PSBT
  rows:
    - header: Overview
    - Specification: BIP-174 (v0), BIP-370 (v2)
    - Magic bytes: psbt followed by 0xff
    - header: Roles
    - Roles: Creator, Updater, Signer, Combiner, Finalizer, Extractor
    - Used with: Hardware wallets, multisig, air-gapped signing
---

> **In plain terms:** A PSBT is a standard "work-in-progress" file for a transaction. One tool builds it, other devices add signatures, and a final step turns it into a broadcastable transaction. It lets a watch-only wallet and an offline signer cooperate safely.

A **Partially Signed Bitcoin Transaction (PSBT)** is a standardized container for an unsigned or partly signed transaction plus the metadata different tools need to complete it.

## Why it exists

Before PSBT, every wallet and hardware device used its own format. Spending from a [multisig](../Multisignature/) or hardware wallet needed custom glue. PSBT standardized the hand-off.

## Roles

| Role | Does |
|---|---|
| Creator | Builds the unsigned transaction |
| Updater | Adds data signers need (previous outputs, scripts, key derivation paths) |
| Signer | Adds signatures (often an offline or hardware device) |
| Combiner | Merges PSBTs from several signers |
| Input Finalizer | Converts signatures into final unlocking data |
| Transaction Extractor | Produces the network-ready transaction |

## Typical flows

- **Hardware wallet:** a watch-only wallet creates a PSBT; the device signs it (via file, QR code or USB); the wallet finalizes and broadcasts.
- **Multisig:** the PSBT passes among cosigners, or each signs separately and a Combiner merges them.

## What a PSBT reveals

A PSBT is **not encrypted** by the specification. It can contain amounts, addresses, previous transactions, extended public keys and derivation paths, which is sensitive privacy information if intercepted. Proposals for authenticating or protecting PSBTs in transit have been discussed on the developer mailing list, including a 2020 proposal about man-in-the-middle changes to PSBT files.

## Versions

- **BIP-174 (v0):** contains the unsigned transaction.
- **BIP-370 (v2):** stores inputs and outputs as separate fields, making it easier to add inputs and outputs later.
- Newer BIPs extend PSBT for [Silent_payments](../Silent_payments/).

## Developer notes

- Bitcoin Core RPCs: `createpsbt`, `walletcreatefundedpsbt`, `walletprocesspsbt`, `decodepsbt`, `analyzepsbt`, `combinepsbt`, `finalizepsbt`, `utxoupdatepsbt`.
- PSBTs are exchanged as base64 text or binary files.
- Always `decodepsbt` and verify outputs on the signer's screen; the signing device is your last line of defence.

## See also

- [Multisignature](../Multisignature/)
- [Silent_payments](../Silent_payments/)
- [HD_wallets_and_seed_phrases](../HD_wallets_and_seed_phrases/)
- [Bitcoin_Script](../Bitcoin_Script/)

## Notes and further reading

- Based on BIP-174 and BIP-370, and a Bitcoin developer mailing-list discussion on authenticating PSBT files (January 2020).
- The forum board has a thread on encrypting PSBT contents: [Encryption of the content of PSBT files](https://bitcointalk.org/index.php?topic=5596396.0) (linked, not summarized here).
- (Add sourcing where appropriate: test vectors, hardware-wallet PSBT support matrices.)
