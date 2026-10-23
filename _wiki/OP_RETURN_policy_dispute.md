---
title: OP_RETURN policy dispute (2025–2026)
description: Dated, sourced account of the 2025–2026 dispute over Bitcoin Core's OP_RETURN relay limit, Bitcoin Knots' response, BIP-110 and the August 2026 chain split
aliases: [OP_RETURN debate, Datacarrier dispute, BIP-110 chain split, Core vs Knots]
categories: [Bitcoin, Policy, Debates, Software, History]
updated: 2026-10-23
last_modified: 2026-10-23
infobox:
  image: bitcoin.svg
  caption: OP_RETURN policy dispute
  rows:
    - header: Overview
    - Period: April 2025 – present (as of October 2026)
    - Core change: "-datacarriersize default 83 → 100,000 bytes (v30.0, October 2025)"
    - Key pull request: "#32406 (merged 9 June 2025); #32359 closed"
    - header: Escalation
    - Soft fork proposal: BIP-110 (Reduced Data Temporary Softfork)
    - Chain split: 8 August 2026
    - Knots hard fork: BLAKE2b proof of work (Knots 29.4.1, September 2026)
---

> **In plain terms:** Nodes choose which unconfirmed transactions to pass along. In 2025, Bitcoin Core stopped limiting the size of one kind of data-carrying output by default. Opponents said this invited spam. The dispute grew into a proposed rule change, a chain split in August 2026, and a separate chain with a different mining algorithm.

The **OP_RETURN policy dispute** is a disagreement among Bitcoin developers and node operators that began in April 2025. It started over [Bitcoin Core](../Bitcoin_Core_release_history/)'s default limit on [OP_RETURN](../OP_RETURN/) outputs, a way to attach data to a transaction. It grew to involve the rival node software **Bitcoin Knots**, a temporary consensus change called [BIP-110](../BIP_index/#bip-110), and a chain split.

This article records what each side proposed, what changed in each software release, and what node counts show. It takes no side. Where the two sides use different names for the same thing, both are given.

## Background

### OP_RETURN and relay policy

An **OP_RETURN output** is a transaction output that can never be spent, so nodes need not keep it in the set of unspent coins. Bitcoin Core 0.9.0 (2014) began relaying such outputs. Its release notes said this was "not an endorsement of storing data in the blockchain". They described it as a less harmful alternative to data stored in unspendable ordinary outputs.[^rn-0-9-0]

The size limit is **policy**, not consensus. It controls what a node relays and mines by default. Blocks containing larger OP_RETURN outputs were always valid.[^poinsot-1] See [Mempool](../Mempool/) for the distinction.

Before 2025, Bitcoin Core relayed transactions with at most one OP_RETURN output, with a script of at most 83 bytes.[^poinsot-1] The setting is called `-datacarriersize`.

## Bitcoin Core: the 2025 change

### Mailing-list proposal (17 April 2025)

On 17 April 2025, Antoine Poinsot proposed on the bitcoindev mailing list to drop the OP_RETURN restrictions.[^poinsot-1] He wrote that the rule aimed "to mildly deter data storage". He argued that the restrictions "encourage harmful practices while being ineffective in deterring unwanted usage".[^poinsot-1]

His example was Clementine, a bridge by the Citrea project. It stored data in unspendable Taproot outputs instead, because of the OP_RETURN size limit.[^poinsot-1] The thread drew 70 messages from 25 participants by 25 May 2025.[^thread]

### Pull request #32359 (closed)

On 27 April 2025, Peter Todd opened pull request #32359, "Remove arbitrary limits on OP_Return (datacarrier) outputs". It would also have removed the `-datacarrier` and `-datacarriersize` options.[^pr-32359]

Todd wrote that the limits "are easily bypassed" by sending transactions directly to miners, and by software forks that do not enforce them. The pull request drew over 200 comments and was closed without merging on 12 May 2025.[^pr-32359]

### Pull request #32406 (merged)

On 2 May 2025, Greg Sanders opened #32406, "policy: uncap datacarrier by default". Unlike #32359, it kept the `-datacarrier*` options but marked them deprecated.[^pr-32406] It was merged on 9 June 2025.[^pr-32406]

### Contributors' statement (6 June 2025)

On 6 June 2025, bitcoincore.org published "Bitcoin Core development and transaction relay policy", supported by 31 named contributors.[^statement] It said Bitcoin is "defined by its users, who have ultimate freedom in choosing what software they use". It argued that "circumventing filters of the vast majority of the nodes is relatively easy".[^statement]

The statement also said that "knowingly refusing to relay transactions that miners would include in blocks anyway" undermines the purpose of relay.[^statement]

### Bitcoin Core 30.0 (10 October 2025)

Bitcoin Core 30.0 shipped the change:[^rn-30-0]

- `-datacarriersize` defaults to 100,000 bytes, which "effectively uncaps the limit".
- Multiple OP_RETURN outputs per transaction are allowed. The size limit applies to their combined size.
- Setting `-datacarriersize=83` restores the previous limit.

## Bitcoin Knots' response

**Bitcoin Knots** is a node implementation maintained by Luke Dashjr, based on Bitcoin Core with additional options and stricter default filters.[^knots-29-1]

### Filter releases (2025)

- **29.1.knots20250903** (September 2025) added a `-permitbaredatacarrier` option, off by default, and updated filters to detect a format it calls "OLGA" spam.[^knots-29-1]
- **29.2.knots20251110** (November 2025) raised Knots' default `-datacarriersize` to 83 bytes. Its notes said this was "not ideal", but avoided breaking legacy protocols "as Knots adoption grows".[^knots-29-2]

### BIP-110: Reduced Data Temporary Softfork

BIP-110, by Dathon Ohm, was assigned on 3 December 2025. It credits Luke Dashjr for the original draft.[^bip110] It proposed a one-year consensus change with seven rules.[^bip110] Among them:

- New output scripts over 34 bytes become invalid, except OP_RETURN outputs of up to 83 bytes.
- Data pushes and script-argument witness items over 256 bytes become invalid, with exceptions.
- Tapscripts may not execute `OP_IF` or `OP_NOTIF`.

Coins created before activation are exempt from all the rules.[^bip110] Activation used miner signalling with a 55% threshold, and a **mandatory signalling** period. During that period, nodes enforcing BIP-110 would reject blocks that did not signal.[^bip110]

Knots 29.3 shipped in two builds in May 2026. The 20260507 build did not include BIP-110.[^knots-29-3a] The 20260508 build did, and required the setting `consensusrules=rdts` to confirm.[^knots-29-3b]

### The August 2026 chain split

Shortly before the mandatory period, miner support was low. On Optech's 4 August 2026 podcast, the signalling hashrate was described as "under 3%", with 110 signalling blocks in the recent period.[^optech-416]

The mandatory signalling period began on 8 August 2026. Nodes enforcing BIP-110 rejected non-signalling blocks and followed a separate chain.[^pr-2245] Bitcoin Optech described this as BIP-110's "unsuccessful activation attempt".[^optech-418] On 1 September, Mark Erhardt said the BIP-110 chain had found "eight blocks in the past three weeks".[^optech-420]

On 9 August, Jon Atack proposed marking BIP-110 Closed. He wrote that it "split to a new chain and stalled". The change was merged on 10 August.[^pr-2245][^bip110]

### Knots hard fork to BLAKE2b (September 2026)

On 2 September 2026, Knots 29.4.1 shipped what its notes call "a backward-incompatible protocol change".[^knots-29-4-1] The changes include:[^knots-29-4-1]

- A **BLAKE2b proof-of-work algorithm**, replacing SHA-256d.
- Activation of BIP-110 at the hard fork, and removal of its consent setting.
- A temporary 800,000-weight-unit block limit.
- A new opt-in signature format, `SIGHASH_UNIFIED`, which can be used to separate coins between the chains.

Knots 29.4.2 (21 September 2026) extended the waiting period before newly mined coins can be spent from 100 blocks to 45 days.[^knots-29-4-2]

The two sides describe the result differently. Knots' release notes say that on 8 August "most former miners abandoned Bitcoin en masse". They call the chain followed by Bitcoin Core "a new altcoin". They describe the events as "the biggest attack on the Bitcoin network to date".[^knots-29-4-1] The BIPs repository and Bitcoin Optech describe the BIP-110 chain as the one that split off.[^pr-2245][^optech-418]

As of October 2026, nodes running Bitcoin Core and SHA-256 miners follow one chain. Nodes running Knots 29.4.1 or later follow the BLAKE2b chain.[^knots-29-4-1]

## Arguments

Both sides include long-time developers. The positions below are attributed to their authors.

### For filtering data ("spam filtering")

- **Luke Dashjr** called the proposal "utter insanity". He wrote that "the bugs should be fixed, not the abuse embraced".[^dashjr-1] In a second reply, he argued that "no spam filtration solution needs to be perfect. Every little bit helps."[^dashjr-2]
- **Chris Guida** wrote "We are under a spam attack". He argued that past spam waves ended when developers showed willingness to keep filtering new formats.[^guida]
- **Jason Hughes** argued that OP_RETURN was made standard only in a small size as a tolerated alternative to more harmful methods. He wrote that "Bitcoin is not file storage".[^hughes]
- **BIP-110's motivation** argues that data embedding "must be resisted at all times", so it does not become "load-bearing". It says data storage "competes unfairly with payments" and raises the cost of running a node.[^bip110]

### Against filtering ("policy futility")

- **Antoine Poinsot** argued that the limit was "ineffective in deterring unwanted usage" and pushed developers toward more harmful methods.[^poinsot-1]
- **Peter Todd** wrote that the limits are "easily bypassed" by direct submission to miners, and that protocols already publish data in other ways.[^pr-32359]
- **Pieter Wuille** wrote that standardness had been effective in the past, when there was little financial incentive to bypass it. He doubted it could stop "million-dollar (or more) business incentives". He added that he shared "Luke's feelings around non-financially-relevant transactions".[^wuille]
- **Greg Maxwell** argued that when relay policy is stricter than what miners include, block propagation slows. He wrote that "a single missed transaction causes a tripling of the per hop transmission delay".[^maxwell]
- **The contributors' statement** argued that circumventing filters is "relatively easy" and that refusing to relay what miners will mine undermines relay.[^statement]

## Node counts

Node counts measure software that announces itself to crawlers. They do not measure hashrate, economic activity or how many people agree with a position. Crawlers also differ in method. All figures below are as of the dates given.

### Bitnodes snapshots (reachable nodes)

Computed from the user-agent field of each Bitnodes snapshot.[^bitnodes] Knots BIP-110 builds are the 29.3 and 29.4.0 builds tagged `20260508`. BLAKE2b builds are 29.4.1 and later.

| Snapshot (UTC) | Reachable nodes | Bitcoin Core | Bitcoin Knots (all) | Knots BIP-110 builds | Knots BLAKE2b builds |
|---|---|---|---|---|---|
| 8 May 2026, 07:15 | 5,220 | 84.2% | 15.2% | 0 | 0 |
| 26 Aug 2026, 05:40 | 26,600 | 81.0% | 18.5% | 1,977 | 0 |
| 4 Sep 2026, 07:25 | 26,466 | 80.3% | 17.4% | 1,248 | 596 |
| 18 Sep 2026, 23:53 | 26,109 | 82.7% | 16.8% | 817 | 991 |
| 20 Oct 2026, 12:02 | 25,649 | 83.6% | 16.1% | 488 | 1,259 |

The total for 8 May 2026 is far smaller than later totals, which suggests a change in the crawler's coverage. Shares are therefore more comparable than raw counts. The crawler still records BLAKE2b-build Knots nodes, although they follow a different chain.[^bitnodes]

### Luke Dashjr's node data

Luke Dashjr publishes counts that add an estimate of unreachable nodes to listening ones.[^luke-data] In his data file dated 20 October 2026:

| Software | Listening nodes | Listening plus estimated unreachable |
|---|---|---|
| Bitcoin Core | 86.8% | 85.6% |
| Bitcoin Knots (all) | 12.6% | 12.1% |
| of which BLAKE2b builds | 5.8% | 4.7% |

His crawler counted 5,468 listening nodes, far fewer than Bitnodes' reachable count on the same day.[^luke-data][^bitnodes]

## What changed in each release

| Release | Date | Change |
|---|---|---|
| Bitcoin Core 30.0 | 10 Oct 2025 | `-datacarriersize` default 100,000; multiple OP_RETURN outputs allowed; `-datacarrier*` options deprecated.[^rn-30-0][^pr-32406] |
| Knots 29.1.knots20250903 | 4 Sep 2025 | `-permitbaredatacarrier` (default off); filters updated for "OLGA".[^knots-29-1] |
| Knots 29.2.knots20251110 | 10 Nov 2025 | Default `-datacarriersize` raised to 83 bytes.[^knots-29-2] |
| Knots 29.3.knots20260507 | 8 May 2026 | New filters; datacarrier options match a newer data format; no BIP-110.[^knots-29-3a] |
| Knots 29.3.knots20260508 | 9 May 2026 | As above, plus BIP-110 enforcement after `consensusrules=rdts` is set.[^knots-29-3b] |
| Knots 29.4.knots20260508 | 7 Aug 2026 | Detects chainstate corruption from running node software that does not enforce BIP-110.[^knots-29-4] |
| Knots 29.4.1.knots20260508 | 2 Sep 2026 | Hard fork: BLAKE2b proof of work, BIP-110 activated at the fork, 800,000 WU block limit, `SIGHASH_UNIFIED`; `-rejecttokens` on by default.[^knots-29-4-1] |
| Knots 29.4.2.knots20260508 | 21 Sep 2026 | Coinbase maturity extended to 45 days; `getdifficulty` RPC removed and a `difficulty_blake2b` field added.[^knots-29-4-2] |

## Timeline

| Date | Event |
|---|---|
| 17 Apr 2025 | Antoine Poinsot proposes relaxing OP_RETURN limits on bitcoindev.[^poinsot-1] |
| 26 Apr 2025 | Luke Dashjr replies, calling the idea "utter insanity".[^dashjr-1] |
| 27 Apr 2025 | Peter Todd opens PR #32359.[^pr-32359] |
| 2 May 2025 | Greg Sanders opens PR #32406.[^pr-32406] |
| 12 May 2025 | PR #32359 closed without merging.[^pr-32359] |
| 6 Jun 2025 | Contributors' statement on relay policy published.[^statement] |
| 9 Jun 2025 | PR #32406 merged.[^pr-32406] |
| 4 Sep 2025 | Knots 29.1 released with new filters.[^knots-29-1] |
| 10 Oct 2025 | Bitcoin Core 30.0 released.[^rn-30-0] |
| 10 Nov 2025 | Knots raises default `-datacarriersize` to 83 bytes.[^knots-29-2] |
| 3 Dec 2025 | BIP-110 assigned.[^bip110] |
| 9 May 2026 | Knots ships a build enforcing BIP-110.[^knots-29-3b] |
| 4 Aug 2026 | Signalling hashrate reported as under 3%.[^optech-416] |
| 8 Aug 2026 | Mandatory signalling begins; BIP-110 chain splits and stalls.[^pr-2245] |
| 10 Aug 2026 | BIP-110 marked Closed.[^bip110] |
| 2 Sep 2026 | Knots 29.4.1 hard-forks to BLAKE2b proof of work.[^knots-29-4-1] |
| 21 Sep 2026 | Knots 29.4.2 extends coinbase maturity to 45 days.[^knots-29-4-2] |

## See also

- [OP_RETURN](../OP_RETURN/)
- [Mempool](../Mempool/)
- [Bitcoin Core release history](../Bitcoin_Core_release_history/)
- [Soft fork and hard fork](../Soft_fork_and_hard_fork/)
- [Bitcoin node](../Bitcoin_node/)

## References

[^rn-0-9-0]: ["Bitcoin Core 0.9.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.9.0.md). *Bitcoin Core* repository. March 2014.
[^poinsot-1]: Poinsot, Antoine (17 April 2025). ["Relax OP_RETURN standardness restrictions"](https://mirror.b10c.me/lists/bitcoindev/rhfyCHr4RfaEalbfGejVdolYCVWIyf84PT2062DQbs5-eU8BPYty5sGyvI3hKeRZQtVC7rn_ugjUWFnWCymz9e9Chbn7FjWJePllFhZRKYk=@protonmail.com/). *bitcoindev mailing list*.
[^thread]: ["Relax OP_RETURN standardness restrictions" (thread)](https://groups.google.com/g/bitcoindev/c/d6ZO7gXGYbQ). *bitcoindev mailing list*. 17 April – 25 May 2025.
[^pr-32359]: Todd, Peter (27 April 2025). ["Remove arbitrary limits on OP_Return (datacarrier) outputs" (PR #32359)](https://github.com/bitcoin/bitcoin/pull/32359). *Bitcoin Core* GitHub. Closed 12 May 2025.
[^pr-32406]: Sanders, Greg (2 May 2025). ["policy: uncap datacarrier by default" (PR #32406)](https://github.com/bitcoin/bitcoin/pull/32406). *Bitcoin Core* GitHub. Merged 9 June 2025.
[^statement]: ["Bitcoin Core development and transaction relay policy"](https://bitcoincore.org/en/2025/06/06/relay-statement/). *bitcoincore.org*. 6 June 2025.
[^rn-30-0]: ["Bitcoin Core 30.0 released"](https://bitcoincore.org/en/releases/30.0/). *bitcoincore.org*. 10 October 2025.
[^dashjr-1]: Dashjr, Luke (26 April 2025). [Reply in "Relax OP_RETURN standardness restrictions"](https://mirror.b10c.me/lists/bitcoindev/03be4934-f0ff-4b58-880d-861d63a4f970@dashjr.org/). *bitcoindev mailing list*.
[^dashjr-2]: Dashjr, Luke (26 April 2025). [Second reply in the same thread](https://mirror.b10c.me/lists/bitcoindev/d18b4149-5523-44bd-8332-2b7962f4b674@dashjr.org/). *bitcoindev mailing list*.
[^guida]: Guida, Chris (30 April 2025). [Reply in "Relax OP_RETURN standardness restrictions"](https://mirror.b10c.me/lists/bitcoindev/CAAANnUy08NBOq3B++80Rpna2qkD6NJV9RdV9v0Oi8c3G8eq_4g@mail.gmail.com/). *bitcoindev mailing list*.
[^hughes]: Hughes, Jason (28 April 2025). [Reply in "Relax OP_RETURN standardness restrictions"](https://mirror.b10c.me/lists/bitcoindev/f4f6831a-d6b8-4f32-8a4e-c0669cc0a7b8n@googlegroups.com/). *bitcoindev mailing list*.
[^wuille]: Wuille, Pieter (26 April 2025). [Reply in "Relax OP_RETURN standardness restrictions"](https://mirror.b10c.me/lists/bitcoindev/QMywWcEgJgWmiQzASR17Dt42oLGgG-t3bkf0vzGemDVNVnvVaD64eM34nOQHlBLv8nDmeBEyTXvBUkM2hZEfjwMTrzzoLl1_62MYPz8ZThs=@wuille.net/). *bitcoindev mailing list*.
[^maxwell]: Maxwell, Greg (2 May 2025). [Reply in "Relax OP_RETURN standardness restrictions"](https://mirror.b10c.me/lists/bitcoindev/9c50244f-0ca0-40a5-8b76-01ba0d67ec1bn@googlegroups.com/). *bitcoindev mailing list*.
[^knots-29-1]: ["Bitcoin Knots v29.1.knots20250903"](https://github.com/bitcoinknots/bitcoin/releases/tag/v29.1.knots20250903). *Bitcoin Knots* GitHub release notes. 4 September 2025.
[^knots-29-2]: ["Bitcoin Knots v29.2.knots20251110"](https://github.com/bitcoinknots/bitcoin/releases/tag/v29.2.knots20251110). *Bitcoin Knots* GitHub release notes. 10 November 2025.
[^knots-29-3a]: ["Bitcoin Knots v29.3.knots20260507"](https://github.com/bitcoinknots/bitcoin/releases/tag/v29.3.knots20260507). *Bitcoin Knots* GitHub release notes. 8 May 2026.
[^knots-29-3b]: ["Bitcoin Knots v29.3.knots20260508"](https://github.com/bitcoinknots/bitcoin/releases/tag/v29.3.knots20260508). *Bitcoin Knots* GitHub release notes. 9 May 2026.
[^knots-29-4]: ["Bitcoin Knots v29.4.knots20260508"](https://github.com/bitcoinknots/bitcoin/releases/tag/v29.4.knots20260508). *Bitcoin Knots* GitHub release notes. 7 August 2026.
[^knots-29-4-1]: ["Bitcoin Knots v29.4.1.knots20260508"](https://github.com/bitcoinknots/bitcoin/releases/tag/v29.4.1.knots20260508). *Bitcoin Knots* GitHub release notes. 2 September 2026.
[^knots-29-4-2]: ["Bitcoin Knots v29.4.2.knots20260508"](https://github.com/bitcoinknots/bitcoin/releases/tag/v29.4.2.knots20260508). *Bitcoin Knots* GitHub release notes. 21 September 2026.
[^bip110]: Ohm, Dathon. ["BIP 110: Reduced Data Temporary Softfork"](https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki). *Bitcoin Improvement Proposals*. Assigned 3 December 2025; status Closed (version 1.0.1, 9 August 2026).
[^pr-2245]: Atack, Jon (9 August 2026). ["BIP 110: update status to Closed" (PR #2245)](https://github.com/bitcoin/bips/pull/2245). *bitcoin/bips* GitHub. Merged 10 August 2026.
[^optech-416]: ["Bitcoin Optech Newsletter #416 Recap Podcast"](https://bitcoinops.org/en/podcast/2026/08/04/). *Bitcoin Optech*. 4 August 2026.
[^optech-418]: ["Bitcoin Optech Newsletter #418"](https://bitcoinops.org/en/newsletters/2026/08/14/). *Bitcoin Optech*. 14 August 2026.
[^optech-420]: ["Bitcoin Optech Newsletter #420 Recap Podcast"](https://bitcoinops.org/en/podcast/2026/09/01/). *Bitcoin Optech*. 1 September 2026. Remark by Mark Erhardt.
[^bitnodes]: Bitnodes. [Snapshot API](https://btcnodes.io/api/v1/snapshots/) (formerly bitnodes.io). Snapshots 1778224557, 1787722850, 1788506720, 1789775607 and 1792497737, retrieved 20 October 2026. Percentages computed from each node's user-agent string.
[^luke-data]: Dashjr, Luke. ["Bitcoin Node Software"](https://luke.dashjr.org/programs/bitcoin/files/charts/software.html) and its [data file](https://luke.dashjr.org/programs/bitcoin/files/charts/data/uainfo.json). Data file last modified 20 October 2026, 12:01 UTC.
