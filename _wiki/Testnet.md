---
title: Testnet
description: Overview of Bitcoin's test networks (regtest, signet, testnet3 and testnet4) and the min-difficulty abuse problem
aliases: [Testnet4, Testnet3, Signet, Regtest, tBTC, BIP-94]
categories: [Bitcoin, Development, Testing]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: Testnet
  rows:
    - header: Networks
    - Local: regtest
    - Shared (signed blocks): signet (BIP-325)
    - Shared (proof of work): testnet4 (BIP-94)
    - header: Key issue
    - Rule at issue: Minimum-difficulty blocks after 20 minutes
---

> **In plain terms:** Test networks are practice versions of Bitcoin where the coins are worthless, so developers can experiment freely.

A **testnet** is a Bitcoin network separate from mainnet, used to test software without risking real funds. Coins on it are intended to have no value.

## The main options

| Network | What it is | Use when |
|---|---|---|
| **regtest** | A private chain on your own machine; you mine blocks on demand | Unit and integration tests, learning |
| **signet** (BIP-325) | A shared network whose blocks are signed by designated signers | Stable shared testing, wallet and protocol demos |
| **testnet3** | The long-running public PoW test network | Legacy; known problems |
| **testnet4** (BIP-94) | Replacement for testnet3, introduced in Bitcoin Core 28.0 | Public PoW testing |

Quick start on regtest:

    bitcoind -regtest -daemon
    bitcoin-cli -regtest createwallet test
    bitcoin-cli -regtest -generate 101

## The min-difficulty problem

Public test networks use a special rule so they stay usable when little hashpower is present: **if a block takes longer than 20 minutes, a minimum-difficulty block is allowed.** This keeps the chain moving but opens an exploit: miners can keep advancing their clocks by 20 minutes and mine many cheap blocks on a CPU, bursting the chain forward ("block storms").

- Testnet3 suffered this, and testnet4 was designed to address the shortcomings, but kept a similar rule.
- Developers reported that testnet4 had a similar loophole, and a 2025 mailing-list proposal suggested removing the difficulty-reset rule via a flag-day hard fork. Some members questioned whether a new "testnet5" would be a cleaner path, particularly if testnet coins are being traded.
- A Bitcoin Core pull request (#34420) proposed disabling min-difficulty blocks on testnet4 after a chosen height, citing reports that a large majority of recent blocks were minimum-difficulty ones. That PR was closed at the time of writing; check current status before relying on any of this.

Why it matters: when test coins become scarce or traded, they stop being free for developers. Also, block storms make test environments unreliable.

## Developer notes

- Prefer **regtest** for automated tests; use **signet** for shared integration.
- Don't assume testnet coins are free or plentiful; get them from faucets, and return what you don't need.
- Network magic, ports and address prefixes differ per network; use your library's network setting rather than hardcoding.

## See also

- [Proof of work](../Proof_of_work/)
- [Soft fork and hard fork](../Soft_fork_and_hard_fork/)
- [Bitcoin node](../Bitcoin_node/)
- [How to contribute to Bitcoin](../how-to-contribute-to-bitcoin/)

## Notes and further reading

- Based on a Bitcoin developer mailing-list thread ("Unbreaking testnet4", March 2025), the Bitcoin Core GitHub pull request #34420, BIP-94 and BIP-325.
- The forum board has a thread on this: [Fixing Testnet4: proposal](https://bitcointalk.org/index.php?topic=5569103.0); the PR above links back to it.
