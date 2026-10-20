---
title: BIP-324 encrypted P2P transport
description: BIP-324's version 2 peer-to-peer transport — the encrypted handshake, what it protects against and what it does not, and its rollout in Bitcoin Core 26.0 and later, as of October 2026
aliases: [BIP-324, v2 transport, v2 P2P, Encrypted P2P, P2P encryption]
categories: [Bitcoin, Protocol, Networking, Privacy]
updated: 2026-10-20
last_modified: 2026-10-20
infobox:
  image: bitcoin.svg
  caption: BIP-324 v2 transport
  rows:
    - header: Overview
    - Specification: BIP-324, version 1.0.2
    - Author: Dhruv Mehta
    - Status: Deployed (as of October 2026)
    - Replaces: BIP-151
    - header: Deployment
    - Bitcoin Core: "Optional 26.0 (Dec 2023); default 27.0 (Apr 2024)"
    - Service bit: "`NODE_P2P_V2` (bit 11)"
    - Reachable nodes advertising v2: About 86% (20 October 2026)
---

**Specifications:** [BIP-324](../BIP_index/#bip-324)

> **In plain terms:** Bitcoin nodes used to talk to each other in plain text. Anyone on the network path could read and alter the traffic. BIP-324 encrypts those connections. It does not prove who is on the other end, but it forces an attacker to work actively rather than just listen.

**BIP-324** defines version 2 of Bitcoin's peer-to-peer (P2P) transport. It adds **opportunistic encryption**, meaning two peers encrypt their connection whenever both support it, without any configuration.[^bip324] The protocol also makes the byte stream look random, and shortens the most common message headers.[^bip324]

It replaced BIP-151, an earlier encryption proposal.[^bip324] [Bitcoin Core](../Bitcoin_Core_release_history/) enabled it by default in version 27.0.[^rn-27]

## The problem

Everything a Bitcoin node relays is public, so the original transport sent it unencrypted and unauthenticated. BIP-324 argues that this still causes harm:[^bip324]

- **Metadata leaks.** A passive attacker watching many connections "can trivially identify the source and timing of a transaction".
- **Tampering.** Connections are unauthenticated, so an attacker can alter bytes in flight, such as a node's advertised service flags. This is cheap and carries little risk of detection.
- **Self-identification.** Every v1 connection starts with fixed "magic" bytes, so deep packet inspection can spot and block Bitcoin traffic.

## The design

### Goals

BIP-324 lists what the protocol aims for:[^bip324]

- **Confidentiality against passive attackers.** Recorded traffic cannot be decrypted.
- **Observability of active attacks.** Each connection derives a **session ID**. An active man-in-the-middle produces different session IDs at each end, so operators who compare them can detect the attack.
- **A pseudorandom byte stream** that cannot be distinguished from random data.
- **A shapable byte stream**, so traffic can be padded or timed to resist analysis.
- **Forward secrecy.** Compromising a node later does not reveal past traffic, beyond the last few packets.
- **Upgradability**, including room for authentication and a post-quantum handshake later.
- **Compatibility.** v2 nodes still accept inbound v1 connections.

### The handshake

A v2 connection has three phases. The **initiator** is the node that opened the connection; the **responder** accepted it.[^bip324]

1. **Key exchange.** The initiator generates a fresh secp256k1 key pair and sends its public key. The key is encoded with **ElligatorSwift**, a 64-byte encoding that is indistinguishable from random bytes.[^bip324] It may follow this with up to 4,095 bytes of random "garbage". The responder checks whether the first 16 bytes match a v1 `version` message. If so, it falls back to v1. Otherwise it replies with its own encoded key and optional garbage.[^bip324]
2. **Shared secret.** Both sides run an X-only elliptic-curve Diffie–Hellman exchange and derive session keys and the session ID.[^bip324] Each then sends a 16-byte **garbage terminator**, so the other side knows where the garbage ends.[^bip324]
3. **Encrypted traffic.** All further data travels in encrypted packets. Each packet carries an **ignore bit**; packets with it set are **decoy packets**, which receivers discard. Either side may send decoys to shape traffic.[^bip324]

### Encryption

Packets are encrypted with ChaCha20-Poly1305, wrapped in rekeying constructions that BIP-324 calls `FSChaCha20Poly1305` and `FSChaCha20`. Rekeying provides the forward secrecy property.[^bip324] The ElligatorSwift implementation was added to the libsecp256k1 library in 2023.[^optech]

### Message encoding

At the application layer, v2 replaces the 12-byte ASCII command names of v1 with one-byte identifiers for frequent messages. BIP-324 describes this as "a mild bandwidth reduction".[^bip324]

### Signalling

A node advertises v2 support with a service bit. In Bitcoin Core it is `NODE_P2P_V2`, bit 11.[^protocol-h]

## What it does and does not protect

| Protected | Not protected |
|---|---|
| Content of traffic from passive eavesdroppers.[^bip324] | **Peer identity.** No authentication; a man-in-the-middle is possible, though detectable by comparing session IDs.[^bip324] |
| Past traffic, through forward secrecy.[^bip324] | **Traffic analysis.** Packet sizes and timing "can still reveal that the Bitcoin v2 P2P protocol is in use".[^bip324] |
| Protocol fingerprinting by pattern matching.[^bip324] | **Network address privacy.** v2 does not hide IP addresses; that is the role of Tor or I2P.[^bip324] |
| Cheap, stateless tampering with bytes in flight.[^bip324] | **Downgrade.** An attacker can force a v1 connection by interfering with the handshake, which v2 clients allow for compatibility.[^bip324] |

BIP-324 explains why it chose encryption without authentication. Unauthenticated encryption "provides strictly better security than no encryption". Authentication, by contrast, only makes sense in specific cases, such as connections between a single operator's nodes. The exported session ID is intended as a foundation for optional authentication later.[^bip324]

The BIP also rejects off-the-shelf protocols such as TLS or Noise. Neither produces a pseudorandom byte stream, supports secp256k1 natively, or treats authentication as a separable module.[^bip324]

## Deployment

| Release | Date | Change |
|---|---|---|
| 26.0 | Dec 2023 | Experimental v2 support, off by default; enabled with `-v2transport` and negotiated per connection (#28331).[^rn-26] |
| 27.0 | Apr 2024 | v2 on by default (#29347). Manual connections try v2 first and retry with v1 (#29058).[^rn-27] |
| — | Jul 2026 | Bitcoin Core assumes v2 support for addresses learned from DNS seeds (#35766).[^optech] |

The source code's comment for that last change says v2 support "can be safely assumed because the vast majority of listening nodes signals NODE_P2P_V2".[^protocol-h] In a Bitnodes snapshot from 20 October 2026, 22,138 of 25,649 reachable nodes advertised the bit, about 86%.[^bitnodes]

Other implementations followed. The rust-bitcoin project added BIP-324 message encoding in 2025.[^optech]

## Open issues

- **Authentication** remains unspecified. BIP-324 provides only the session ID hook.[^bip324]
- **Message identifiers.** A draft BIP from October 2026 proposes dynamically assigned one-byte message type IDs over v2.[^optech]
- **Distinguishability.** Whether v2 traffic can be told apart from random traffic by shaping was an open question discussed in February 2026.[^optech]
- **Post-quantum handshake.** BIP-324 names a "PQC handshake upgrade" as a future use of its versioning, but none exists as of October 2026.[^bip324]

## Developer notes

### Bitcoin Core

```
bitcoind -v2transport=1            # default since 27.0; =0 disables
bitcoin-cli addnode <ip:port> add true      # final argument: use v2 transport
bitcoin-cli getpeerinfo             # transport_protocol_type and session_id per peer
```

`getpeerinfo` reports `transport_protocol_type` ("v1" or "v2") and the `session_id` for each connection.[^rn-26]

### Source files

- `src/bip324.cpp`, `src/bip324.h`: the BIP-324 cipher suite and handshake state.[^core-bip324]
- `src/net.cpp`: the `V2Transport` class.[^core-net]
- `src/crypto/chacha20poly1305.cpp`: the AEAD and rekeying wrappers.[^core-aead]
- `src/protocol.h`: the `NODE_P2P_V2` service bit.[^protocol-h]
- `test/functional/p2p_v2_transport.py` and `test/functional/p2p_v2_encrypted.py`: functional tests.[^core-tests]

### Specification and reference implementation

- Specification: [bip-0324.mediawiki](https://github.com/bitcoin/bips/blob/master/bip-0324.mediawiki), including test vectors.[^bip324]
- Reference implementation: Bitcoin Core (#28008, #28196, #28331).[^optech] ElligatorSwift: libsecp256k1 #1129.[^optech]

## See also

- [Bitcoin node](../Bitcoin_node/)
- [Mempool](../Mempool/)
- [Compact block filters](../Compact_block_filters/)
- [Lightning Network](../Lightning_Network/)

## References

[^bip324]: Mehta, Dhruv. ["BIP 324: Version 2 P2P Encrypted Transport Protocol"](https://github.com/bitcoin/bips/blob/master/bip-0324.mediawiki). *Bitcoin Improvement Proposals*. Version 1.0.2; status Deployed (as of October 2026).
[^optech]: ["v2 P2P transport"](https://bitcoinops.org/en/topics/v2-p2p-transport/). *Bitcoin Optech* topics. Retrieved October 2026.
[^rn-26]: ["Bitcoin Core 26.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-26.0.md). *Bitcoin Core*. December 2023.
[^rn-27]: ["Bitcoin Core 27.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-27.0.md). *Bitcoin Core*. April 2024.
[^protocol-h]: ["src/protocol.h"](https://github.com/bitcoin/bitcoin/blob/master/src/protocol.h). *Bitcoin Core* source code, as of October 2026.
[^core-bip324]: ["src/bip324.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/bip324.cpp). *Bitcoin Core* source code.
[^core-net]: ["src/net.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/net.cpp). *Bitcoin Core* source code.
[^core-aead]: ["src/crypto/chacha20poly1305.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/crypto/chacha20poly1305.cpp). *Bitcoin Core* source code.
[^core-tests]: ["test/functional/p2p_v2_transport.py"](https://github.com/bitcoin/bitcoin/blob/master/test/functional/p2p_v2_transport.py) and ["test/functional/p2p_v2_encrypted.py"](https://github.com/bitcoin/bitcoin/blob/master/test/functional/p2p_v2_encrypted.py). *Bitcoin Core* source code.
[^bitnodes]: Bitnodes. [Snapshot 1792497737](https://btcnodes.io/api/v1/snapshots/1792497737/), 20 October 2026, 12:02 UTC. Share computed from the service bits reported by each reachable node.
