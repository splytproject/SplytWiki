---
title: Compact block filters
description: BIP-157 and BIP-158 compact block filters — how light clients find their transactions without revealing their addresses, the Neutrino client, the trust model, and deployment in Bitcoin Core as of October 2026
aliases: [BIP-157, BIP-158, Neutrino, Client-side block filtering, Golomb-coded sets]
categories: [Bitcoin, Protocol, Light clients, Privacy]
updated: 2026-10-23
last_modified: 2026-10-23
infobox:
  image: bitcoin.svg
  caption: Compact block filters
  rows:
    - header: Overview
    - Specification: BIP-157 (protocol), BIP-158 (filter format)
    - Author: Olaoluwa Osuntokun
    - Status: Deployed (both BIPs, as of October 2026)
    - Replaces in practice: BIP-37 bloom filtering
    - header: Deployment
    - Bitcoin Core: "Index 0.19.0 (2019); serving 0.21.0 (2021)"
    - Service bit: "`NODE_COMPACT_FILTERS` (bit 6)"
    - Reachable nodes serving filters: About 31% (20 October 2026)
---

**Specifications:** [BIP-157](../BIP_index/#bip-157) · [BIP-158](../BIP_index/#bip-158)

> **In plain terms:** A phone wallet cannot download the whole blockchain. Instead, full nodes publish a small summary of each block. The wallet checks each summary for its own addresses and fetches only the blocks that might matter. The wallet never tells anyone which addresses it is looking for.

**Compact block filters** are per-block summaries that let a **light client** find transactions relevant to it without downloading every block. A light client is wallet software that verifies block headers but not full blocks. The design is specified in [BIP-157](../BIP_index/#bip-157), which defines the peer-to-peer protocol, and [BIP-158](../BIP_index/#bip-158), which defines the filter format.[^bip157][^bip158] Both were written by Olaoluwa Osuntokun.

## The problem

Light clients follow the chain of block headers, which are 80 bytes each, and verify their [proof of work](../Proof_of_work/). They cannot verify that blocks are valid, so they rely on miner incentives for that.[^bip157] What they need is a way to learn which blocks contain their own transactions.

The earlier answer was BIP-37 **bloom filtering**. The client sends a probabilistic filter of its addresses to a full node, which returns matching transactions.[^bip157] BIP-157 lists three flaws with it:[^bip157]

- **Privacy.** Research showed that most implementations offer "virtually zero privacy" to wallets. The full node learns the client's addresses.
- **Omission.** A malicious node can leave out matching transactions "with little risk of detection". For a [Lightning](../Lightning_Network/) client that must react to on-chain events, this is unacceptable.
- **Denial of service.** Serving crafted bloom filters costs honest nodes significant I/O and CPU, which discourages operators from supporting the protocol.

## The design

BIP-157 reverses the direction of filtering. The node, not the client, builds the filter. It makes a deterministic filter of each block and serves it to anyone who asks.[^bip157] The client checks the filter locally. If it matches, the client downloads the whole block, from any peer it likes.[^bip157]

Because filters are deterministic, a node builds each one once and stores it. That removes the asymmetry that made BIP-37 a denial-of-service vector.[^bip157] Because blocks can be fetched from any source, no single peer learns what the client is watching.[^bip157]

### The filter (BIP-158)

BIP-158 defines one filter type, called **basic**. For every transaction in a block, the filter contains:[^bip158]

- the script being spent by each input, except in the coinbase transaction; and
- the output script of each output, except [OP_RETURN](../OP_RETURN/) outputs.

OP_RETURN outputs are excluded on purpose. A future soft fork could commit to the filter in a coinbase OP_RETURN, and including such outputs would create a circular dependency.[^bip158]

The elements are compressed into a **Golomb-coded set** (GCS), a probabilistic structure like a bloom filter but smaller. Its parameters are fixed: `P = 19` and `M = 784931`. The BIP states that analysis found these values minimize total bandwidth, counting both filter size and blocks downloaded because of false positives.[^bip158] Each element is hashed with a key derived from the block's hash.[^bip158]

A match can be a **false positive**. The client then downloads a block it did not need. A match can never be a false negative: every relevant script is present.[^bip158]

### Filter headers

BIP-157 also defines a **filter header** for each block. It is a hash chain: each header commits to the block's filter and to the previous filter header.[^bip157] A client can download filter headers from several peers and compare them. If peers disagree, the client fetches the full block and computes the filter itself to find out which peer lied.[^bip157]

The BIP states the resulting guarantee: light clients "with at least one honest peer are able to identify the correct block filters".[^bip157]

### Protocol messages

BIP-157 adds three request–response pairs:[^bip157]

| Request | Response | Purpose |
|---|---|---|
| `getcfilters` | `cfilter` | Filters for a range of blocks |
| `getcfheaders` | `cfheaders` | Filter headers for a range of blocks |
| `getcfcheckpt` | `cfcheckpt` | Filter headers at 1,000-block intervals, for fast verification |

Nodes advertise support with a service bit. In Bitcoin Core it is `NODE_COMPACT_FILTERS`, bit 6.[^protocol-h] A node that does not advertise it should not be asked.[^bip157]

## Trust model

Compact block filters do not make a light client a full node. The trust model has these parts:

- **Headers.** The client verifies proof of work on every header and follows the chain with the most work. It does not validate transactions or blocks, so it trusts that the majority of hashrate follows the rules.[^bip157]
- **Filters.** The client cannot verify a filter without the block. With filter headers, it can detect that two peers disagree, and resolve the conflict by downloading the block. This works only if at least one peer is honest.[^bip157]
- **No consensus commitment.** Filters are not committed to in blocks. A future soft fork could add a commitment, which BIP-158's OP_RETURN exclusion anticipates. As of October 2026, no such commitment exists.[^bip158]
- **Privacy.** The node serving filters learns nothing about the client's addresses. The node serving a full block learns that the client wanted that block.[^bip157]

Bitcoin Optech summarizes the trade-off. The approach offers more privacy than BIP-37 and less risk to honest nodes. However, it "does consume significantly more bandwidth in the normal case".[^optech-cbf]

## Neutrino

**Neutrino** is a light client library written in Go by Lightning Labs. It downloads block headers and filter headers, fetches filters lazily, and never stores full blocks.[^neutrino] It was built with mobile Lightning clients in mind and is used by the `lnd` Lightning implementation.[^neutrino]

The protocol is sometimes called "Neutrino" after this library. Optech notes that the name belongs to the wallet library, not to BIP-157 and BIP-158.[^optech-cbf]

## Deployment in Bitcoin Core

| Release | Date | Change |
|---|---|---|
| 0.19.0 | Nov 2019 | `-blockfilterindex` builds BIP-158 filters; `getblockfilter` RPC returns them (#14121).[^rn-0-19] |
| 0.21.0 | Jan 2021 | `-peerblockfilters` serves filters to peers over BIP-157 (#16442).[^rn-0-21] |
| — | 2021 | Pruned nodes may retain filters (#15946).[^optech-cbf] |
| — | 2022 | REST endpoint for filters (#17631); wallet rescans use local filters (#25957).[^optech-cbf] |
| 25.0 | May 2023 | `scanblocks` RPC finds blocks matching descriptors using the local filter index (#23549).[^rn-25] |

Serving filters is off by default. Both `-blockfilterindex=1` and `-peerblockfilters=1` must be set.[^rn-0-21]

As of 20 October 2026, 7,922 of 25,649 reachable nodes in a Bitnodes snapshot advertised `NODE_COMPACT_FILTERS`, about 31%.[^bitnodes]

## Trade-offs and open issues

- **Bandwidth.** A client downloads every filter, plus every block that matches. Optech recorded a 2021 question about the "high bandwidth requirements for serving BIP157 filters".[^optech-cbf]
- **No commitment.** Without a consensus commitment, the one-honest-peer assumption remains. A client whose peers all collude can be fed wrong filters.[^bip157]
- **Alternatives under discussion.** As of 2026, developers have discussed binary fuse filters as a smaller replacement for GCS, and block-range filters that cover several blocks at once.[^optech-cbf]
- **Minority of nodes serve filters.** Because serving is opt-in, light clients must find the roughly one third of reachable nodes that offer it.[^bitnodes]

## Developer notes

### Bitcoin Core

```
bitcoind -blockfilterindex=1 -peerblockfilters=1
bitcoin-cli getblockfilter <blockhash> basic
bitcoin-cli scanblocks start '["addr(bc1q...)"]'
curl http://127.0.0.1:8332/rest/blockfilter/basic/<blockhash>.json
```

`getblockfilter` returns the filter and its header for one block.[^rn-0-19] `scanblocks` returns the hashes of blocks whose filters match a set of [descriptors](../Miniscript_and_output_descriptors/).[^rn-25]

### Source files

- `src/blockfilter.cpp`: GCS construction and the basic filter.[^core-blockfilter]
- `src/index/blockfilterindex.cpp`: the on-disk filter index.[^core-index]
- `src/net_processing.cpp`: handling of `getcfilters`, `getcfheaders` and `getcfcheckpt`.[^core-netproc]
- `src/protocol.h`: the `NODE_COMPACT_FILTERS` service bit.[^protocol-h]
- `test/functional/p2p_blockfilters.py` and `test/functional/rpc_scanblocks.py`: functional tests.[^core-tests]

### Specifications and reference implementations

- BIP-157: [bip-0157.mediawiki](https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki). BIP-158: [bip-0158.mediawiki](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki). BIP-158 includes test vectors.[^bip158]
- Client reference: [lightninglabs/neutrino](https://github.com/lightninglabs/neutrino) (Go, MIT licence).[^neutrino]
- Server reference: Bitcoin Core, as above.

## See also

- [Bitcoin node](../Bitcoin_node/)
- [Lightning Network](../Lightning_Network/)
- [Partial UTXO set](../Partial_UTXO_set/)
- [AssumeUTXO](../AssumeUTXO/)
- [Miniscript and output descriptors](../Miniscript_and_output_descriptors/)

## References

[^bip157]: Osuntokun, Olaoluwa. ["BIP 157: Client Side Block Filtering"](https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki). *Bitcoin Improvement Proposals*. Status: Deployed (as of October 2026).
[^bip158]: Osuntokun, Olaoluwa. ["BIP 158: Compact Block Filters for Light Clients"](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki). *Bitcoin Improvement Proposals*. Status: Deployed (as of October 2026).
[^optech-cbf]: ["Compact block filters"](https://bitcoinops.org/en/topics/compact-block-filters/). *Bitcoin Optech* topics. Retrieved October 2026.
[^neutrino]: ["Neutrino: Privacy-Preserving Bitcoin Light Client" (README)](https://github.com/lightninglabs/neutrino). *Lightning Labs*, GitHub.
[^rn-0-19]: ["Bitcoin Core 0.19.0.1 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.19.0.1.md). *Bitcoin Core*. November 2019.
[^rn-0-21]: ["Bitcoin Core 0.21.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.21.0.md). *Bitcoin Core*. January 2021.
[^rn-25]: ["Bitcoin Core 25.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-25.0.md). *Bitcoin Core*. May 2023.
[^protocol-h]: ["src/protocol.h"](https://github.com/bitcoin/bitcoin/blob/master/src/protocol.h). *Bitcoin Core* source code.
[^core-blockfilter]: ["src/blockfilter.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/blockfilter.cpp). *Bitcoin Core* source code.
[^core-index]: ["src/index/blockfilterindex.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/index/blockfilterindex.cpp). *Bitcoin Core* source code.
[^core-netproc]: ["src/net_processing.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/net_processing.cpp). *Bitcoin Core* source code.
[^core-tests]: ["test/functional/p2p_blockfilters.py"](https://github.com/bitcoin/bitcoin/blob/master/test/functional/p2p_blockfilters.py) and ["test/functional/rpc_scanblocks.py"](https://github.com/bitcoin/bitcoin/blob/master/test/functional/rpc_scanblocks.py). *Bitcoin Core* source code.
[^bitnodes]: Bitnodes. [Snapshot 1792497737](https://btcnodes.io/api/v1/snapshots/1792497737/), 20 October 2026, 12:02 UTC. Share computed from the service bits reported by each reachable node.
