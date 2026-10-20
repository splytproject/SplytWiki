---
title: Lightning Network
description: Overview of the Lightning Network — Bitcoin's layer-2 payment channel network — its origin in the 2016 Poon–Dryja paper, the BOLT specifications, implementations, public network size and open issues, as of October 2026
aliases: [Lightning, LN, Lightning Network overview, BOLTs]
categories: [Bitcoin, Layer 2, Lightning, Protocol]
updated: 2026-10-20
last_modified: 2026-10-20
infobox:
  image: bitcoin.svg
  caption: Lightning Network
  rows:
    - header: Overview
    - Type: Layer-2 payment channel network
    - Proposed: "Poon and Dryja, draft 0.5.9.2, 14 January 2016"
    - Specification: "BOLTs (Basis of Lightning Technology), version 0"
    - Mainnet software since: 2018
    - header: Public network (30 August 2026)
    - Public nodes: "16,232"
    - Public channels: "32,674"
    - Public capacity: About 3,794 BTC
---

**Specifications:** [BOLT 0 to BOLT 12](https://github.com/lightning/bolts)

> **In plain terms:** Two people lock bitcoin into a shared on-chain output. They then pay each other by exchanging signed transactions that they do not broadcast. Thousands of such channels link into a network, so payments can hop through strangers' channels to reach almost anyone. Bitcoin's blockchain is used only to open and close channels, or to settle disputes.

The **Lightning Network** is a protocol for sending bitcoin through **payment channels** without recording each payment on the blockchain. Its specification is a set of documents called the BOLTs. They describe it as "a layer-2 protocol for off-chain bitcoin transfer by mutual cooperation, relying on on-chain transactions for enforcement if necessary".[^bolt0]

This article covers the problem, the design, the specification and the history. It also gives the state of the network as of October 2026. Two companion articles go deeper: [Lightning channels](../Lightning_channels/) on how a channel works, and [Lightning routing](../Lightning_routing/) on how payments cross the network.

## The problem

Every Bitcoin transaction competes for limited block space, and must wait for confirmations. That makes small or frequent payments expensive and slow when blocks are full. See [Blockchain scaling](../Blockchain_scaling/) for the wider debate.

Joseph Poon and Thaddeus Dryja published "The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments" as a draft on 14 January 2016.[^paper] Its approach moves most payments off the chain while keeping the chain as the final arbiter.

## The design in brief

A **channel** is a 2-of-2 [multisignature](../Multisignature/) output funded by one or both parties.[^bolt3] The parties hold signed **commitment transactions** that would split the funds between them, and update those transactions each time they pay. Only the latest version is valid in practice, because older ones are revoked with a penalty mechanism.[^bolt3] Either party can close at any time by broadcasting its latest commitment.[^bolt5]

Payments across several channels use **hash time-locked contracts** (HTLCs). Each hop forwards a conditional payment that can only be claimed with a secret the recipient holds. Nobody along the route can take the money without passing it on.[^bolt2] The route is chosen by the sender and wrapped in **onion** encryption, so intermediaries learn only their neighbours.[^bolt4]

Nodes find each other and learn the channel graph through a **gossip** protocol.[^bolt7] All node-to-node connections are encrypted and authenticated.[^bolt8]

## The BOLT specifications

The protocol is specified in numbered documents called **BOLTs**, maintained in the `lightning/bolts` repository. BOLT 0 says "This is version 0" and lists the rest.[^bolt0]

| BOLT | Title | Covers |
|---|---|---|
| 1 | Base Protocol | Message framing, feature negotiation; default port 9735.[^bolt1] |
| 2 | Peer Protocol for Channel Management | Opening, updating, splicing and closing channels.[^bolt2] |
| 3 | Bitcoin Transaction and Script Formats | Funding, commitment and HTLC transactions.[^bolt3] |
| 4 | Onion Routing Protocol | Sphinx packets, route blinding, failure messages.[^bolt4] |
| 5 | Recommendations for On-chain Transaction Handling | What to do when a channel closes.[^bolt5] |
| 7 | P2P Node and Channel Discovery | Gossip messages.[^bolt7] |
| 8 | Encrypted and Authenticated Transport | Noise-based transport.[^bolt8] |
| 9 | Assigned Feature Flags | Feature bit registry.[^bolt9] |
| 10 | DNS Bootstrap and Assisted Node Location | Finding first peers.[^bolt10] |
| 11 | Invoice Protocol for Lightning Payments | Payment requests.[^bolt11] |
| 12 | Negotiation Protocol for Lightning Payments | Offers.[^bolt12] |

There is no BOLT 6. An extension document, "Simple Taproot Channels", sits alongside the numbered BOLTs.[^bolt-taproot]

## History

| Date | Event |
|---|---|
| 14 Jan 2016 | Poon and Dryja publish draft 0.5.9.2 of the Lightning paper.[^paper] |
| 15 Mar 2018 | lnd 0.4-beta released.[^lnd-04] |
| 28 Mar 2018 | Eclair v0.2-beta1 released.[^eclair-02] |
| 25 Jun 2018 | Core Lightning (then c-lightning) v0.6 released.[^cln-06] |
| Oct 2024 | BOLT 12 offers merged into the specification (BOLTs #798).[^optech-offers] |
| Aug 2025 | Eclair adds simple taproot channels; LDK completes splicing.[^optech-taproot][^optech-splicing] |
| Apr–May 2026 | lnd ships production taproot channels; Eclair ships final splicing and taproot channels; Core Lightning adds `splicein`.[^optech-taproot][^eclair-014][^cln-2604] |

Splicing, the ability to add or remove funds from an open channel, is now part of BOLT 2.[^bolt2] Taproot channels remain an extension BOLT as of October 2026.[^bolt-taproot]

## Implementations

Four implementations are widely used as of October 2026. Each is described further in [Lightning routing](../Lightning_routing/).

| Implementation | Maintainer | Language | Latest release (October 2026) |
|---|---|---|---|
| lnd | Lightning Labs | Go | v0.21.4-beta, 1 October 2026[^lnd-repo] |
| Core Lightning | Blockstream (ElementsProject) | C | v26.06.9, 7 October 2026[^cln-repo] |
| Eclair | ACINQ | Scala | v0.14.4, 15 October 2026[^eclair-repo] |
| LDK (rust-lightning) | Lightning Dev Kit | Rust | `lightning` crate 0.2.7; 0.3.0-rc3 release candidate, 2 October 2026[^ldk-crate] |

## The network as of October 2026

Public statistics count only **announced** channels. Private channels, which are not gossiped, are invisible to crawlers. A mempool.space snapshot dated 30 August 2026 recorded:[^mempool-stats]

| Measure | Value |
|---|---|
| Public nodes | 16,232 |
| Public channels | 32,674 |
| Public capacity | 379,393,623,670 sat, about 3,794 BTC |
| Nodes reachable over Tor only | 7,977 |
| Nodes reachable over clearnet only | 4,599 |
| Median channel capacity | 2,035,000 sat |

The same source lists 2,020 "unannounced" nodes seen only through channels with announced nodes.[^mempool-stats]

## Trade-offs and open issues

- **Liquidity is directional.** A channel can only send what its owner holds on their side. Splicing, now in BOLT 2, and liquidity ads in some implementations exist to manage this.[^bolt2][^optech-splicing]
- **Channel jamming.** An attacker can lock up channel funds or HTLC slots without paying. Optech describes two kinds, liquidity jamming and HTLC jamming, and lists proposed mitigations such as upfront fees. As of its last summary, none had "gained widespread support".[^optech-jamming]
- **Online requirement.** A party must watch the chain to punish a revoked commitment. BOLT 5 defines the response; watchtowers outsource it.[^bolt5]
- **Spec drift.** Features ship in one implementation years before others, as the splicing and taproot timelines show.[^optech-splicing][^optech-taproot]
- **Measurement.** Public counts exclude private channels and vary by crawler.[^mempool-stats]

## Developer notes

### Specification and reference implementations

- Specification: [github.com/lightning/bolts](https://github.com/lightning/bolts). Test vectors live beside the documents, for example `bolt04/onion-test.json` and `bolt02/splicing-test.md`.[^bolts-repo]
- Implementations: [lightningnetwork/lnd](https://github.com/lightningnetwork/lnd), [ElementsProject/lightning](https://github.com/ElementsProject/lightning), [ACINQ/eclair](https://github.com/ACINQ/eclair), [lightningdevkit/rust-lightning](https://github.com/lightningdevkit/rust-lightning).[^lnd-repo][^cln-repo][^eclair-repo][^ldk-crate]

### Running a node

Each implementation needs a Bitcoin backend. lnd can also use [compact block filters](../Compact_block_filters/) through Neutrino.[^neutrino] Nodes listen on port 9735 by default on mainnet, 19735 on testnet and 39735 on signet.[^bolt1]

```
lncli getinfo                 # lnd
lightning-cli getinfo         # Core Lightning
eclair-cli getinfo            # Eclair
```

### Statistics

mempool.space publishes network statistics at `https://mempool.space/api/v1/lightning/statistics/latest`.[^mempool-stats]

## See also

- [Lightning channels](../Lightning_channels/)
- [Lightning routing](../Lightning_routing/)
- [Blockchain scaling](../Blockchain_scaling/)
- [Multisignature](../Multisignature/)
- [Mempool](../Mempool/)
- [Compact block filters](../Compact_block_filters/)

## References

[^bolt0]: ["BOLT #0: Introduction and Index"](https://github.com/lightning/bolts/blob/master/00-introduction.md). *lightning/bolts*. Read at the repository's state on 20 October 2026.
[^bolt1]: ["BOLT #1: Base Protocol"](https://github.com/lightning/bolts/blob/master/01-messaging.md). *lightning/bolts*.
[^bolt2]: ["BOLT #2: Peer Protocol for Channel Management"](https://github.com/lightning/bolts/blob/master/02-peer-protocol.md). *lightning/bolts*.
[^bolt3]: ["BOLT #3: Bitcoin Transaction and Script Formats"](https://github.com/lightning/bolts/blob/master/03-transactions.md). *lightning/bolts*.
[^bolt4]: ["BOLT #4: Onion Routing Protocol"](https://github.com/lightning/bolts/blob/master/04-onion-routing.md). *lightning/bolts*.
[^bolt5]: ["BOLT #5: Recommendations for On-chain Transaction Handling"](https://github.com/lightning/bolts/blob/master/05-onchain.md). *lightning/bolts*.
[^bolt7]: ["BOLT #7: P2P Node and Channel Discovery"](https://github.com/lightning/bolts/blob/master/07-routing-gossip.md). *lightning/bolts*.
[^bolt8]: ["BOLT #8: Encrypted and Authenticated Transport"](https://github.com/lightning/bolts/blob/master/08-transport.md). *lightning/bolts*.
[^bolt9]: ["BOLT #9: Assigned Feature Flags"](https://github.com/lightning/bolts/blob/master/09-features.md). *lightning/bolts*.
[^bolt10]: ["BOLT #10: DNS Bootstrap and Assisted Node Location"](https://github.com/lightning/bolts/blob/master/10-dns-bootstrap.md). *lightning/bolts*.
[^bolt11]: ["BOLT #11: Invoice Protocol for Lightning Payments"](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md). *lightning/bolts*.
[^bolt12]: ["BOLT #12: Negotiation Protocol for Lightning Payments"](https://github.com/lightning/bolts/blob/master/12-offer-encoding.md). *lightning/bolts*.
[^bolt-taproot]: ["Extension BOLT XX: Simple Taproot Channels"](https://github.com/lightning/bolts/blob/master/bolt-simple-taproot.md). *lightning/bolts*.
[^bolts-repo]: ["lightning/bolts"](https://github.com/lightning/bolts). GitHub repository.
[^paper]: Poon, Joseph; Dryja, Thaddeus (14 January 2016). ["The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments"](https://lightning.network/lightning-network-paper.pdf) (PDF). Draft version 0.5.9.2.
[^lnd-04]: ["lnd 0.4-beta"](https://github.com/lightningnetwork/lnd/releases/tag/v0.4-beta). *lightningnetwork/lnd* GitHub release, 15 March 2018.
[^eclair-02]: ["Eclair v0.2-beta1"](https://github.com/ACINQ/eclair/releases/tag/v0.2-beta1). *ACINQ/eclair* GitHub release, 28 March 2018.
[^cln-06]: ["v0.6"](https://github.com/ElementsProject/lightning/releases/tag/v0.6). *ElementsProject/lightning* GitHub release, 25 June 2018.
[^eclair-014]: ["Eclair v0.14.0"](https://github.com/ACINQ/eclair/releases/tag/v0.14.0). *ACINQ/eclair* GitHub release, 21 May 2026.
[^cln-2604]: ["v26.04"](https://github.com/ElementsProject/lightning/releases/tag/v26.04). *ElementsProject/lightning* GitHub release, 20 April 2026.
[^lnd-repo]: ["lightningnetwork/lnd"](https://github.com/lightningnetwork/lnd). GitHub. Latest release v0.21.4-beta, 1 October 2026.
[^cln-repo]: ["ElementsProject/lightning"](https://github.com/ElementsProject/lightning). GitHub. Latest release v26.06.9, 7 October 2026.
[^eclair-repo]: ["ACINQ/eclair"](https://github.com/ACINQ/eclair). GitHub. Latest release v0.14.4, 15 October 2026.
[^ldk-crate]: ["lightning" crate documentation](https://docs.rs/lightning/latest/lightning/). *docs.rs*. Latest stable 0.2.7; release candidate 0.3.0-rc3 published 2 October 2026 per the [crates.io API](https://crates.io/api/v1/crates/lightning). Source: [lightningdevkit/rust-lightning](https://github.com/lightningdevkit/rust-lightning).
[^neutrino]: ["Neutrino: Privacy-Preserving Bitcoin Light Client" (README)](https://github.com/lightninglabs/neutrino). *Lightning Labs*, GitHub.
[^mempool-stats]: mempool.space. ["Lightning statistics, latest"](https://mempool.space/api/v1/lightning/statistics/latest). Snapshot dated 30 August 2026, retrieved 20 October 2026.
[^optech-offers]: ["Offers"](https://bitcoinops.org/en/topics/offers/). *Bitcoin Optech* topics. Retrieved October 2026.
[^optech-splicing]: ["Splicing"](https://bitcoinops.org/en/topics/splicing/). *Bitcoin Optech* topics. Retrieved October 2026.
[^optech-taproot]: ["Simple taproot channels"](https://bitcoinops.org/en/topics/simple-taproot-channels/). *Bitcoin Optech* topics. Retrieved October 2026.
[^optech-jamming]: ["Channel jamming attacks"](https://bitcoinops.org/en/topics/channel-jamming-attacks/). *Bitcoin Optech* topics. Retrieved October 2026.
