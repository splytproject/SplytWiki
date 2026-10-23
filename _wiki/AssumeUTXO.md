---
title: AssumeUTXO
description: AssumeUTXO in Bitcoin Core — starting a node from a UTXO snapshot whose hash is hard-coded in the software, the loadtxoutset RPC, background validation, snapshot heights per release, and the trust model, as of October 2026
aliases: [Assume UTXO, UTXO snapshot, loadtxoutset, dumptxoutset]
categories: [Bitcoin, Protocol, Bitcoin Core, Node operation]
updated: 2026-10-23
last_modified: 2026-10-23
infobox:
  image: bitcoin.svg
  caption: AssumeUTXO
  rows:
    - header: Overview
    - Type: Node bootstrapping feature (not a consensus change)
    - Proposed by: James O'Beirne, 2019
    - Tracking PR: Bitcoin Core #15606
    - header: Status (as of October 2026)
    - Mainnet loading since: Bitcoin Core 28.0 (snapshot height 840,000)
    - Latest shipped height: 935,000 (Bitcoin Core 31.0)
    - Key RPCs: "`loadtxoutset`, `dumptxoutset`, `getchainstates`"
---

> **In plain terms:** A new node normally replays every transaction since 2009 before it can be used. AssumeUTXO lets it start from a recent snapshot of all unspent coins instead. The node checks that the snapshot matches a fingerprint built into the software, starts working immediately, and verifies the old history in the background.

**AssumeUTXO** is a feature of [Bitcoin Core](../Bitcoin_Core_release_history/) that lets a new node load a snapshot of the [UTXO set](../UTXO/). The UTXO set is the set of all unspent coins, normally built by replaying every block from genesis. The snapshot's hash is hard-coded in the software. After loading, the node syncs to the chain tip from the snapshot, and separately validates the full history from genesis in the background.[^design][^optech]

James O'Beirne proposed it in 2019 and opened the tracking pull request, #15606.[^pr15606] Mainnet use became possible in Bitcoin Core 28.0 in October 2024.[^rn-28]

## The problem

**Initial block download** (IBD) is the process by which a new node downloads and validates every block. It takes hours or days, and the node cannot be used until it finishes.[^optech] Bitcoin Core already contains a related shortcut, **assumevalid**, which skips signature checks for blocks before a hard-coded block hash. It still processes every block to build the UTXO set.

AssumeUTXO goes further. It lets the node "postpone verifying old block chain history until after the user is able to receive recent transactions".[^optech]

## The design

### Snapshots

A snapshot is a serialized copy of the UTXO set at one block, the **base block**. The `dumptxoutset` RPC, added in Bitcoin Core 0.20.0, writes one.[^rn-0-20] The hash used to identify a snapshot is a **MuHash**, a hash of the whole set that can be updated incrementally. It was added in 2021 (#19055) in preparation for this feature.[^optech]

Each release of Bitcoin Core carries a short list of accepted snapshots in `src/kernel/chainparams.cpp`. Each entry gives a block height, the block hash, the expected UTXO set hash and the number of coins.[^chainparams] A snapshot loads only if its contents hash to the hard-coded value.[^usage]

### Loading

The `loadtxoutset` RPC, added in Bitcoin Core 26.0, loads a snapshot file.[^rn-26] Bitcoin Core's design document describes what happens next:[^design]

1. The node already has one **chainstate**, the data structure holding the UTXO set, built from genesis so far.
2. `loadtxoutset` creates a second chainstate and fills it from the snapshot. Until the hash check passes, the original chainstate stays active.
3. Once verified, the snapshot chainstate becomes active. The node syncs it to the tip, giving it priority in block download and most of the cache.
4. The original chainstate continues as **background validation**, replaying blocks from genesis toward the base block.
5. When background validation reaches the base block, its UTXO hash is compared with the snapshot's. If they match, the snapshot chainstate is kept and the other is discarded.

The snapshot chainstate lives in a `chainstate_snapshot` directory with a `base_blockhash` file, so it survives restarts.[^design] The `getchainstates` RPC reports the progress of both chainstates.[^usage]

### Release history

| Release | Date | Change |
|---|---|---|
| 0.20.0 | Jun 2020 | `dumptxoutset` RPC writes a UTXO snapshot.[^rn-0-20] |
| 26.0 | Dec 2023 | `loadtxoutset` RPC; snapshot chainstate and background validation (#27596). Parameters for signet and testnet only.[^rn-26][^optech] |
| 28.0 | Oct 2024 | First mainnet parameters, at height 840,000 (#28553). New `dumptxoutset` format.[^rn-28] |
| 29.0 | Apr 2025 | Mainnet height 880,000 added.[^chainparams-29] |
| 30.0 | Oct 2025 | Mainnet height 910,000 added.[^chainparams-30] |
| 31.0 | Apr 2026 | Mainnet height 935,000 added.[^chainparams-31] |
| (master) | Sep 2026 | Mainnet height 965,000 added for the next release.[^chainparams] |

Each release keeps the earlier heights, so as of October 2026 Bitcoin Core 31.x accepts mainnet snapshots at 840,000, 880,000, 910,000 and 935,000.[^chainparams-31] Parameters also exist for testnet4, signet and regtest.[^chainparams]

Two related changes came in 2024. Pull request #30320 loads a snapshot only if its base block is an ancestor of the most-work chain. Pull request #30807 makes a node signal `NODE_NETWORK_LIMITED` during background sync, so peers do not expect old blocks from it.[^optech]

## Trust model

AssumeUTXO changes what a node trusts, and when.

- **Before background validation finishes,** the node trusts that the hard-coded hash matches a valid UTXO set. That hash is reviewed by developers in the same way as the assumevalid hash.[^optech] A user can audit it by computing the hash on an existing node with `dumptxoutset` or `gettxoutsetinfo`.[^usage]
- **The snapshot file itself needs no trust.** Any file that hashes to the expected value is accepted; the usage document notes "there is currently no canonical source for snapshots".[^usage] A tampered file fails the hash check.
- **After background validation,** the node has verified every block from genesis. Its security is then the same as a node that never used a snapshot.[^design]
- **A wrong hard-coded hash would be a bug in the software,** not a protocol change. Optech recorded a bug in the UTXO set hash computation in October 2023, found during review before mainnet parameters shipped.[^optech]

Critics of such shortcuts argue that users may never check the hash themselves. Supporters reply that users already trust the software binary and the assumevalid hash, so no new trust is added.[^optech] The feature is opt-in: a node that never calls `loadtxoutset` behaves exactly as before.[^usage]

## Limits and open issues

- **Pruning.** A pruned node can load a snapshot, but needs at least 1,100 MiB of prune budget. That is twice the normal minimum, because two chainstates exist during background sync.[^usage]
- **Indexes.** Block indexes such as the transaction index still build from genesis, so they finish only after background validation catches up.[^usage]
- **Snapshot distribution.** With no canonical source, users must obtain snapshots from other nodes or third parties. A 2026 draft BIP proposes sharing UTXO sets over the peer-to-peer network.[^optech]
- **Related work.** SwiftSync, proposed in 2025, speeds up validation itself and is described as complementary to assumeutxo.[^optech]

## Developer notes

### RPCs

```
# On a synced node: write a snapshot at the tip, or at the latest supported height
bitcoin-cli dumptxoutset /path/utxo.dat latest
bitcoin-cli dumptxoutset /path/utxo.dat rollback

# On a new node
bitcoin-cli -rpcclienttimeout=0 loadtxoutset /path/utxo.dat
bitcoin-cli getchainstates
```

`dumptxoutset` with `rollback` produces a snapshot at a height the software accepts.[^usage] `loadtxoutset` can take a long time, so the usage document disables the RPC client timeout.[^usage]

### Source files

- `src/validation.cpp`: `ChainstateManager::ActivateSnapshot` and `PopulateAndValidateSnapshot`.[^design]
- `src/node/utxo_snapshot.h`: snapshot metadata format.[^core-snapshot-h]
- `src/kernel/chainparams.cpp`: the `m_assumeutxo_data` lists per network.[^chainparams]
- `doc/assumeutxo.md` and `doc/design/assumeutxo.md`: usage and design documents.[^usage][^design]
- `test/functional/feature_assumeutxo.py`: functional test.[^core-test]

### Specification and reference implementation

There is no BIP. The design is documented in the proposal linked from #15606 and in `doc/design/assumeutxo.md`.[^pr15606][^design] The reference implementation is Bitcoin Core.

## See also

- [Bitcoin node](../Bitcoin_node/)
- [UTXO](../UTXO/)
- [Partial UTXO set](../Partial_UTXO_set/)
- [Compact block filters](../Compact_block_filters/)
- [Testnet](../Testnet/)

## References

[^design]: ["Assumeutxo Design" (doc/design/assumeutxo.md)](https://github.com/bitcoin/bitcoin/blob/master/doc/design/assumeutxo.md). *Bitcoin Core* repository.
[^usage]: ["Assumeutxo Usage" (doc/assumeutxo.md)](https://github.com/bitcoin/bitcoin/blob/master/doc/assumeutxo.md). *Bitcoin Core* repository.
[^optech]: ["Assumeutxo"](https://bitcoinops.org/en/topics/assumeutxo/). *Bitcoin Optech* topics. Retrieved October 2026.
[^pr15606]: O'Beirne, James (15 March 2019). ["assumeutxo" (PR #15606)](https://github.com/bitcoin/bitcoin/pull/15606). *Bitcoin Core* GitHub. Tracking pull request, closed after its parts were merged.
[^rn-0-20]: ["Bitcoin Core 0.20.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.20.0.md). *Bitcoin Core*. June 2020.
[^rn-26]: ["Bitcoin Core 26.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-26.0.md). *Bitcoin Core*. December 2023.
[^rn-28]: ["Bitcoin Core 28.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-28.0.md). *Bitcoin Core*. October 2024.
[^chainparams]: ["src/kernel/chainparams.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp). *Bitcoin Core* source code, master branch, as of October 2026.
[^chainparams-29]: ["src/kernel/chainparams.cpp" (29.x branch)](https://github.com/bitcoin/bitcoin/blob/29.x/src/kernel/chainparams.cpp). *Bitcoin Core* source code.
[^chainparams-30]: ["src/kernel/chainparams.cpp" (30.x branch)](https://github.com/bitcoin/bitcoin/blob/30.x/src/kernel/chainparams.cpp). *Bitcoin Core* source code.
[^chainparams-31]: ["src/kernel/chainparams.cpp" (31.x branch)](https://github.com/bitcoin/bitcoin/blob/31.x/src/kernel/chainparams.cpp). *Bitcoin Core* source code.
[^core-snapshot-h]: ["src/node/utxo_snapshot.h"](https://github.com/bitcoin/bitcoin/blob/master/src/node/utxo_snapshot.h). *Bitcoin Core* source code.
[^core-test]: ["test/functional/feature_assumeutxo.py"](https://github.com/bitcoin/bitcoin/blob/master/test/functional/feature_assumeutxo.py). *Bitcoin Core* source code.
