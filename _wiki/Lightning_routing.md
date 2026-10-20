---
title: Lightning routing
description: How Lightning Network payments find their way — onion routing (BOLT 4), gossip and the channel graph (BOLT 7), sender-side pathfinding, route blinding, multi-part and trampoline payments, invoices and offers, the four main implementations, and open issues such as channel jamming, as of October 2026
aliases: [Lightning routing, Onion routing, Lightning gossip, Pathfinding, Trampoline payments, BOLT 4, BOLT 7]
categories: [Bitcoin, Layer 2, Lightning, Protocol, Privacy]
updated: 2026-10-20
last_modified: 2026-10-20
infobox:
  image: bitcoin.svg
  caption: Lightning routing
  rows:
    - header: Specification
    - Onion packets: BOLT 4 (Sphinx)
    - Gossip: BOLT 7
    - Transport: BOLT 8 (Noise_XK)
    - Payment requests: BOLT 11 invoices, BOLT 12 offers
    - header: Implementations (as of October 2026)
    - lnd: Go, Lightning Labs
    - Core Lightning: C, Blockstream
    - Eclair: Scala, ACINQ
    - LDK: Rust library, Lightning Dev Kit
---

**Specifications:** [BOLT 4](https://github.com/lightning/bolts/blob/master/04-onion-routing.md) · [BOLT 7](https://github.com/lightning/bolts/blob/master/07-routing-gossip.md) · [BOLT 8](https://github.com/lightning/bolts/blob/master/08-transport.md) · [BOLT 11](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md) · [BOLT 12](https://github.com/lightning/bolts/blob/master/12-offer-encoding.md)

> **In plain terms:** To pay someone you have no channel with, your node picks a chain of channels to them. It wraps the payment in layers of encryption, like an onion. Each node on the way peels one layer, learns only the next hop, and forwards. Nodes learn the map of channels by gossiping announcements to each other.

**Routing** is how a Lightning payment travels from sender to recipient across channels owned by other people. It has three parts. A **gossip** protocol spreads the channel graph, the sender does the **pathfinding**, and **onion routing** hides the path from the nodes that carry it.[^bolt7][^bolt4] This article covers each, the payment-request formats, the main implementations and the open problems. See [Lightning channels](../Lightning_channels/) for how a single channel works.

## The problem

Payments must be forwarded by intermediaries who are not trusted. Forwarding nodes must not be able to steal the payment or learn who is paying whom. They must also be paid for their service. And a sender must be able to discover routes without a central directory.[^bolt7][^bolt4]

## Gossip: learning the graph (BOLT 7)

BOLT 7 describes "simple node discovery, channel discovery, and channel update mechanisms that do not rely on a third-party".[^bolt7] Three message types are gossiped:[^bolt7]

- **`channel_announcement`** proves that a public channel exists. It is signed by both parties and names the funding output by its `short_channel_id`, which encodes block height, transaction index and output index.[^bolt7]
- **`node_announcement`** carries a node's alias, addresses and feature bits.[^bolt7]
- **`channel_update`** carries one direction's forwarding terms: `cltv_expiry_delta`, `htlc_minimum_msat`, `htlc_maximum_msat`, `fee_base_msat` and `fee_proportional_millionths`.[^bolt7]

Query messages such as `query_channel_range` and `gossip_timestamp_filter` let a node sync only the gossip it lacks.[^bolt7] For its first peers, a new node can use DNS seeds as described in BOLT 10.[^bolt10]

Channels can be kept **private** by not announcing them. They still work for the two parties, and appear in nobody's graph. A recipient can still be paid through one by putting routing hints in an invoice.[^bolt7][^bolt11]

## Pathfinding

The sender chooses the whole route. BOLT 7 gives each node "a local view of the network's topology, so that a node can discover routes to desired destinations".[^bolt7] The specification does not dictate a pathfinding algorithm; each implementation has its own.

What a route must satisfy is set by the gossip. Each hop charges `fee_base_msat` plus `fee_proportional_millionths` of the forwarded amount per million, and demands a time-lock margin of `cltv_expiry_delta` blocks.[^bolt7] Amounts must fall between the hop's HTLC minimum and maximum.[^bolt7]

The sender does not know how much balance each channel holds on each side, only its total capacity. Routes therefore fail and are retried. **Multi-part payments** split a payment into several HTLCs that share one payment hash and a `total_msat` field. Large payments can then use several routes.[^bolt4]

## Onion routing (BOLT 4)

BOLT 4 wraps the route in a packet based on the **Sphinx** construction. Intermediate nodes "cannot learn which other nodes, besides their predecessor or successor, are part of the packet's route". Nor can they learn "the length of the route or their position within it".[^bolt4] The packet is re-encrypted at every hop, so an observer cannot match packets before and after a node.[^bolt4]

The packet's routing section, `hop_payloads`, is a fixed 1,300 bytes regardless of route length, which hides how many hops remain.[^bolt4] Each hop decrypts its own payload, which tells it the next channel, the amount to forward and the outgoing time-lock.[^bolt4]

### Failures

If a hop cannot forward, it returns an encrypted failure message along the reverse path. Only the sender can decrypt it, and intermediaries cannot read it.[^bolt4] A later extension, `attribution_data`, lets the sender identify which hop failed or delayed a payment.[^bolt4]

### Route blinding

Onion routing hides the route from intermediaries, but the sender still learns the recipient's node. **Route blinding** lets a recipient give the sender a path whose last hops are encrypted, so the sender knows only an introduction node.[^bolt4] The feature bit is `option_route_blinding` (24/25).[^bolt9] BOLT 12 offers rely on it.[^optech-offers]

### Trampoline payments

A **trampoline payment** delegates part of pathfinding: the sender routes to a trampoline node, which chooses the rest of the path. Optech describes it as a proposal, specified in BOLTs pull request #654, that suits lightweight clients which cannot hold the full graph.[^optech-trampoline] Eclair, LDK and Electrum implement it; it is not part of the numbered BOLTs as of October 2026.[^optech-trampoline]

## Transport (BOLT 8)

Every connection between Lightning nodes is encrypted and authenticated. Each node's identity is a secp256k1 public key, and the handshake is `Noise_XK` with ChaCha20-Poly1305.[^bolt8] This differs from Bitcoin's [BIP-324](../BIP-324_encrypted_transport/) transport, which encrypts without authenticating.

## Payment requests

- **BOLT 11 invoices** are "a simple, extendable, QR-code-ready protocol for requesting payments". An invoice is single-use and carries the payment hash, amount, expiry and optional routing hints.[^bolt11]
- **BOLT 12 offers** add a negotiation step. A reusable **offer** lets a payer request an invoice over the network, with messages carried over onion routing. Optech notes this allows recurring payments and amounts quoted in other currencies, which BOLT 11's single-use hash locks cannot do.[^optech-offers] BOLTs #798 merged the specification in October 2024.[^optech-offers]

Support for offers, as of October 2026:[^optech-offers]

- **Core Lightning** enabled offers by default in November 2024.
- **Eclair** can receive offer payments (2022) and pay offers (2023).
- **LDK** has had offer management since 2023.
- **lnd** added invoice-request signing and encoders in September 2026.

## Implementations

| Implementation | Maintainer | Language | Notes |
|---|---|---|---|
| **lnd** | Lightning Labs | Go | "Lightning Network Daemon". Can run on [compact block filters](../Compact_block_filters/) via Neutrino. Latest release v0.21.4-beta (1 October 2026).[^lnd-repo][^neutrino] |
| **Core Lightning** | Blockstream (ElementsProject) | C | Describes itself as "focusing on spec compliance and performance". Latest release v26.06.9 (7 October 2026).[^cln-repo] |
| **Eclair** | ACINQ | Scala | "A scala implementation of the Lightning Network". Latest release v0.14.4 (15 October 2026).[^eclair-repo] |
| **LDK** (rust-lightning) | Lightning Dev Kit | Rust | A library that handles core functionality "without enforcing a specific runtime"; applications supply wallet, storage and networking. `lightning` crate 0.2.7, with 0.3.0-rc3 in testing (2 October 2026).[^ldk-crate] |

Features differ by implementation. For example, Eclair, LDK and Electrum support trampoline payments while lnd does not list it, and splicing support varies as described in [Lightning channels](../Lightning_channels/).[^optech-trampoline][^optech-splicing]

## Trade-offs and open issues

### Channel jamming

Optech defines **channel jamming** as denial-of-service attacks that can keep channels "up to 20 hops away" from using their funds.[^optech-jamming] Two kinds exist:[^optech-jamming]

- **Liquidity jamming**: an attacker routes a payment to itself through many channels and delays settling, locking everyone's funds, then cancels at no cost.
- **HTLC jamming**: an attacker fills a channel's HTLC slots with tiny payments. Two channels of 483 slots each can block over 10,000 honest slots.

Proposed mitigations include forward and backward upfront fees, nested incremental routing and fidelity bonds. Optech's summary says that, as of April 2021, none had "gained widespread support".[^optech-jamming] Later entries record a 2025 proposal for upfront and hold fees. A 2026 Eclair change rejects HTLCs whose expiry is more than 2,016 blocks away.[^optech-jamming]

### Other issues

- **Privacy limits.** Onion routing hides routes from intermediaries, but the sender learns the recipient's node unless blinded paths are used.[^bolt4]
- **Gossip for taproot channels.** Taproot channel announcements need a new format; Optech records work on updated announcements (2024) and zero-knowledge gossip compatible with MuSig2 channels (2025).[^optech-taproot]
- **Trampoline** remains outside the numbered BOLTs.[^optech-trampoline]
- **Graph size.** Nodes must store and verify the public graph; private channels and light clients push toward delegated routing.[^optech-trampoline]

## Developer notes

### Commands

```
lncli queryroutes --dest <pubkey> --amt 100000        # lnd
lncli sendpayment --pay_req <bolt11>
lightning-cli getroute <id> 100000 10                 # Core Lightning
lightning-cli pay <bolt11>
lightning-cli fetchinvoice <bolt12-offer>             # Core Lightning, offers
eclair-cli findroute --nodeId=<pubkey> --amountMsat=100000000    # Eclair
```

Command names and arguments differ by implementation; see each project's documentation.[^lnd-repo][^cln-repo][^eclair-repo]

### Specification files and test vectors

- `04-onion-routing.md`, with test vectors in `bolt04/onion-test.json`, `bolt04/route-blinding-test.json`, `bolt04/blinded-payment-onion-test.json` and `bolt04/onion-error-test.json`.[^bolt4][^bolts-repo]
- `07-routing-gossip.md`, including test vectors for node announcements with invalid aliases.[^bolt7]
- `08-transport.md`: handshake and test vectors.[^bolt8]
- `11-payment-encoding.md`: invoice format with worked examples.[^bolt11]
- `12-offer-encoding.md`: offers, invoice requests and invoices.[^bolt12]

## See also

- [Lightning Network](../Lightning_Network/)
- [Lightning channels](../Lightning_channels/)
- [BIP-324 encrypted P2P transport](../BIP-324_encrypted_transport/)
- [Compact block filters](../Compact_block_filters/)
- [Blockchain scaling](../Blockchain_scaling/)

## References

[^bolt4]: ["BOLT #4: Onion Routing Protocol"](https://github.com/lightning/bolts/blob/master/04-onion-routing.md). *lightning/bolts*. Read at the repository's state on 20 October 2026.
[^bolt7]: ["BOLT #7: P2P Node and Channel Discovery"](https://github.com/lightning/bolts/blob/master/07-routing-gossip.md). *lightning/bolts*.
[^bolt8]: ["BOLT #8: Encrypted and Authenticated Transport"](https://github.com/lightning/bolts/blob/master/08-transport.md). *lightning/bolts*.
[^bolt9]: ["BOLT #9: Assigned Feature Flags"](https://github.com/lightning/bolts/blob/master/09-features.md). *lightning/bolts*.
[^bolt10]: ["BOLT #10: DNS Bootstrap and Assisted Node Location"](https://github.com/lightning/bolts/blob/master/10-dns-bootstrap.md). *lightning/bolts*.
[^bolt11]: ["BOLT #11: Invoice Protocol for Lightning Payments"](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md). *lightning/bolts*.
[^bolt12]: ["BOLT #12: Negotiation Protocol for Lightning Payments"](https://github.com/lightning/bolts/blob/master/12-offer-encoding.md). *lightning/bolts*.
[^bolts-repo]: ["lightning/bolts"](https://github.com/lightning/bolts). GitHub repository.
[^optech-offers]: ["Offers"](https://bitcoinops.org/en/topics/offers/). *Bitcoin Optech* topics. Retrieved October 2026.
[^optech-trampoline]: ["Trampoline payments"](https://bitcoinops.org/en/topics/trampoline-payments/). *Bitcoin Optech* topics. Retrieved October 2026.
[^optech-jamming]: ["Channel jamming attacks"](https://bitcoinops.org/en/topics/channel-jamming-attacks/). *Bitcoin Optech* topics. Retrieved October 2026.
[^optech-taproot]: ["Simple taproot channels"](https://bitcoinops.org/en/topics/simple-taproot-channels/). *Bitcoin Optech* topics. Retrieved October 2026.
[^optech-splicing]: ["Splicing"](https://bitcoinops.org/en/topics/splicing/). *Bitcoin Optech* topics. Retrieved October 2026.
[^lnd-repo]: ["lightningnetwork/lnd"](https://github.com/lightningnetwork/lnd). GitHub. Latest release v0.21.4-beta, 1 October 2026.
[^cln-repo]: ["ElementsProject/lightning"](https://github.com/ElementsProject/lightning). GitHub. Latest release v26.06.9, 7 October 2026.
[^eclair-repo]: ["ACINQ/eclair"](https://github.com/ACINQ/eclair). GitHub. Latest release v0.14.4, 15 October 2026.
[^ldk-crate]: ["lightning" crate documentation](https://docs.rs/lightning/latest/lightning/). *docs.rs*. Latest stable 0.2.7; release candidate 0.3.0-rc3 published 2 October 2026 per the [crates.io API](https://crates.io/api/v1/crates/lightning). Source: [lightningdevkit/rust-lightning](https://github.com/lightningdevkit/rust-lightning).
[^neutrino]: ["Neutrino: Privacy-Preserving Bitcoin Light Client" (README)](https://github.com/lightninglabs/neutrino). *Lightning Labs*, GitHub.
