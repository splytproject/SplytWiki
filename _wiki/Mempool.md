---
title: Mempool
description: How Bitcoin Core's memory pool admits, orders, replaces and evicts unconfirmed transactions, from consensus and policy rules to cluster mempool, TRUC and package relay
aliases: [Memory pool, Transaction pool, Unconfirmed transactions, RBF, CPFP, Cluster mempool, TRUC]
categories: [Bitcoin, Protocol, Transactions, Policy]
updated: 2026-10-19
last_modified: 2026-10-19
infobox:
  image: bitcoin.svg
  caption: Mempool (Bitcoin Core)
  rows:
    - header: Overview
    - Holds: Valid, unconfirmed transactions
    - Scope: Per node; no global mempool
    - Default size: 300 MB (`-maxmempool`)
    - Default expiry: 336 hours (`-mempoolexpiry`)
    - header: Policy (as of October 2026)
    - Min relay feerate: 0.1 sat/vB (since v30.0)
    - Topology limit: 64 tx / 101 kvB per cluster (since v31.0)
    - Fee bumping: RBF (full-RBF default), CPFP, TRUC, P2A anchors
---

> **In plain terms:** A broadcast payment does not enter a block straight away. Each node keeps its own waiting room of valid transactions, called the mempool. Miners build blocks from their waiting rooms, usually picking the transactions that pay the most per byte.

The **mempool** (memory pool) is a node's in-memory set of valid transactions that are not yet in a block. Each node keeps its own mempool, so there is no single network-wide list. Its contents depend on the node's software version, settings, peers and uptime.

This article describes the mempool as implemented in [Bitcoin Core](../Bitcoin_node/). It covers the limits and rules that decide what enters, what leaves, and how transactions are ordered. Most of these rules are **policy**, not consensus. They have changed often, and the details below are accurate as of October 2026 (Bitcoin Core 31.x).[^releases]

## Consensus vs policy

Two layers of rules apply to every unconfirmed transaction.

- **Consensus rules** define whether a transaction can appear in a valid block. Every node must agree on them. Changing them requires a [soft or hard fork](../Soft_fork_and_hard_fork/).
- **Policy rules** (also called **standardness** rules) define what a node will accept into its mempool and relay. They are stricter than consensus and can differ between nodes. Changing them needs no fork.

A transaction can be consensus-valid but **non-standard**. Default nodes will not relay it, but a miner can still include it in a block. Bitcoin Core documents its policy separately from consensus for this reason.[^policy-readme]

Policy exists for several reasons. It limits denial-of-service (DoS) cost for nodes. It keeps upgrade hooks, such as unused witness versions, free for future soft forks. It also tries to make the mempool match what a profit-seeking miner would mine. That last goal is called **incentive compatibility**.[^mempool-design]

## Admission and default limits

When a node receives a transaction, it checks consensus rules first, then policy. Accepted transactions go into the mempool and are announced to peers. The main default limits are below. All are configurable.

| Setting | Default (as of October 2026) | Purpose |
|---|---|---|
| `-maxmempool` | 300 MB | Memory cap on the mempool's dynamic usage.[^mempool-options] |
| `-mempoolexpiry` | 336 hours | Age after which a transaction is removed.[^mempool-options] |
| `-minrelaytxfee` | 100 sat/kvB (0.1 sat/vB) | Lowest feerate the node will relay.[^policy-h][^rn-30] |
| `-incrementalrelayfee` | 100 sat/kvB (0.1 sat/vB) | Minimum feerate step for replacement and for raising the mempool floor.[^policy-h][^rn-30] |
| `-blockmintxfee` | 1 sat/kvB (0.001 sat/vB) | Lowest feerate the mining code puts in a block template.[^policy-h][^rn-30] |
| Dust feerate | 3,000 sat/kvB | Feerate used to decide if an output is **dust** (worth less than it costs to spend).[^policy-h] |
| Max standard weight | 400,000 WU | Largest transaction the node relays or mines.[^policy-h] |
| Cluster limits | 64 transactions, 101 kvB | Size of a connected group of unconfirmed transactions (v31.0 and later).[^rn-31] |

Feerates are measured per **virtual byte** (vB), a unit defined by [Segregated Witness](../Segregated_Witness/). The v30.0 release notes recommend changing `-minrelaytxfee` and `-incrementalrelayfee` together.[^rn-30]

### Ancestor and descendant limits (v0.12 to v30)

From v0.12.0 to v30.x, Bitcoin Core limited chains of unconfirmed transactions. A transaction could have at most 25 in-mempool **ancestors** (unconfirmed parents, grandparents and so on). It could also have at most 25 **descendants**. Each group was capped at 101 kvB in total.[^rn-0120]

The settings were `-limitancestorcount`, `-limitancestorsize`, `-limitdescendantcount` and `-limitdescendantsize`. Version 31.0 stopped enforcing them in favour of cluster limits.[^rn-31] The constants still appear in `src/policy/policy.h` as of October 2026.[^policy-h]

## Eviction and expiry

### Size-based eviction

When the mempool exceeds `-maxmempool`, Bitcoin Core removes the transactions that a miner would least want. Before v31.0, it evicted the transaction whose **descendant package** (the transaction plus its in-mempool descendants) had the lowest feerate.[^rn-0120] Since v31.0, eviction uses **chunk feerates** from cluster mempool (see below).[^rn-31]

After eviction, the node raises its **rolling minimum feerate**. New transactions must beat it to enter. The floor is set to the evicted feerate plus `-incrementalrelayfee`.[^txmempool-cpp]

The rolling minimum then decays exponentially with a half-life of 12 hours (`ROLLING_FEE_HALFLIFE`). Once it falls below half of the incremental relay feerate, it resets to zero.[^txmempool-h] The node advertises its current floor to peers with the `feefilter` message ([BIP-133](https://github.com/bitcoin/bips/blob/master/bip-0133.mediawiki)).[^rn-0130]

### Time-based expiry

Transactions older than `-mempoolexpiry` are removed along with their descendants.[^txmempool-h] The default rose from 72 hours to two weeks (336 hours) in v0.14.0, via PR #9312.[^pr-9312]

Expiry and eviction only remove a transaction from one node. The transaction stays valid. The sender, or anyone holding a copy, can rebroadcast it later.

### Persistence

Since v0.14.0, Bitcoin Core writes the mempool to `mempool.dat` on shutdown and reloads it on startup. Fee deltas set with `prioritisetransaction` are saved too.[^rn-0140]

## Replace-by-fee (RBF)

**Replace-by-fee** (RBF) lets a sender swap an unconfirmed transaction for a conflicting one that pays more. A conflict means the two transactions spend at least one of the same inputs.

### BIP-125 opt-in RBF

Version 0.12.0 added **opt-in RBF**.[^rn-0120] [BIP-125](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki) documented the rules. A transaction signals replaceability if any input has an `nSequence` below `0xfffffffe`. The original BIP-125 rules were:[^bip125]

1. The original transactions signal replaceability, directly or by inheritance from an unconfirmed ancestor.
2. The replacement adds no new unconfirmed inputs.
3. The replacement pays at least the total absolute fee of the transactions it replaces.
4. The replacement also pays for its own size at the incremental relay feerate.
5. No more than 100 transactions are evicted in total.

Bitcoin Core never implemented inherited signaling (rule 1's second half). This gap was documented in v22.0.[^rn-220] The incremental relay feerate became a separate setting, `-incrementalrelayfee`, in PR #9380.[^mempool-replacements]

### Full-RBF

**Full-RBF** lets a node accept replacements whether or not the original signalled. Version 24.0 added the `-mempoolfullrbf` option, off by default.[^rn-24] Version 28.0 turned it on by default.[^rn-28] Version 29.0 removed the option, making full-RBF standard behaviour.[^rn-29] Since v30.0, the wallet's `bumpfee` RPC no longer needs the original to signal.[^rn-30]

### Current replacement rules (v31.0 and later)

Cluster mempool changed the rules. Bitcoin Core's `doc/policy/mempool-replacements.md` lists them as of October 2026:[^mempool-replacements]

- Rules 1 and 2 are removed.
- **Rule 3:** the replacement pays at least the sum of the fees it replaces.
- **Rule 4:** the replacement pays for its own bandwidth at `-incrementalrelayfee`.
- **Rule 5:** conflicts touch no more than 100 distinct clusters.
- **Rule 6:** the replacement must strictly improve the mempool's **feerate diagram**.

A feerate diagram plots cumulative fee against cumulative size, in mining order. A strictly better diagram means the mempool earns a miner at least as much at every block size, and more at some.[^rn-31][^mempool-replacements]

## Child-pays-for-parent (CPFP)

**Child-pays-for-parent** (CPFP) is a fee-bumping method that needs no replacement. The recipient, or anyone with an output, spends a stuck transaction with a high-fee child. A miner who wants the child must also include the parent.

Since v0.13.0, Bitcoin Core's block template code ranks transactions by **ancestor feerate**: their own fee plus unconfirmed ancestors, divided by total size.[^rn-0130] This made CPFP effective in default mining. Cluster mempool replaced ancestor feerate with chunk feerate in v31.0.[^rn-31]

### CPFP carve-out

Ancestor and descendant limits allowed **pinning**. One party in a shared transaction could fill the descendant limit. That blocked the other party from attaching a CPFP child.[^optech-pinning]

Version 0.19.0 added the **CPFP carve-out** (PR #15681) to address this. It allowed one extra child above the descendant limit. The child had to have only one unconfirmed ancestor and weigh 10,000 vB or less.[^rn-019] Lightning Network anchor outputs relied on it.[^optech-carveout]

Version 31.0 removed the carve-out. Nothing may now exceed the cluster count limit. The release notes point users to TRUC transactions and sibling eviction instead.[^rn-31]

## Package relay

Nodes judge most transactions one at a time. A parent below a node's minimum feerate is rejected before its high-fee child arrives. So CPFP cannot rescue a parent that never got into the mempool. **Package relay** fixes this by evaluating related transactions together.[^optech-package]

### Package validation and submitpackage

Version 22.0 let `testmempoolaccept` check several transactions at once, for testing only.[^rn-220] Version 26.0 added the experimental `submitpackage` RPC. It accepted a child with its unconfirmed parents, and allowed package CPFP below the dynamic mempool floor.[^rn-26] Version 28.0 added `maxfeerate` and `maxburnamount` arguments.[^rn-28] Since v30.0, a submitted package no longer needs every unconfirmed parent.[^rn-30]

### Opportunistic 1p1c relay

Version 28.0 added **one-parent-one-child** (1p1c) relay over the existing P2P protocol. A node that rejects a low-feerate parent can later accept it alongside its child.[^rn-28] The release notes warn that this is not yet reliable against adversaries.[^rn-28]

Version 28.0 also enabled limited **package RBF**. A package can replace conflicts only if every affected cluster has at most two transactions.[^rn-28] Version 30.0 extended 1p1c to children whose other parents are already in the mempool.[^rn-30] Since v31.0, a 1p1c parent may pay below `-minrelaytxfee`, even zero, for non-TRUC packages too.[^rn-31]

### BIP-331

[BIP-331](https://github.com/bitcoin/bips/blob/master/bip-0331.mediawiki) specifies **ancestor package relay** as a new P2P protocol. Peers negotiate it with `sendpackages`. A receiver can request a transaction's unconfirmed ancestors (`ancpkginfo`) and fetch them in one batch (`getpkgtxns` / `pkgtxns`).[^bip331] As of October 2026, BIP-331 has Draft status. Bitcoin Core implements only opportunistic 1p1c, not the full BIP-331 protocol.[^bip331][^optech-package]

## TRUC transactions (BIP-431)

**Topologically Restricted Until Confirmation** (TRUC) transactions are an opt-in policy, specified in [BIP-431](https://github.com/bitcoin/bips/blob/master/bip-0431.mediawiki). A transaction opts in by setting `nVersion=3`, so TRUC was first called "v3" relay. The rules are:[^bip431]

1. A TRUC transaction is always replaceable, without BIP-125 signalling.
2. All unconfirmed ancestors and descendants of a TRUC transaction must also be TRUC.
3. An unconfirmed TRUC transaction has at most one unconfirmed ancestor and one unconfirmed descendant.
4. A TRUC transaction may be at most 10,000 vB (sigop-adjusted).
5. A TRUC child of an unconfirmed TRUC parent may be at most 1,000 vB.
6. A TRUC transaction may pay below the minimum feerate if its package meets it.

These limits bound how much a counterparty can make a replacement cost. That reduces pinning. **Sibling eviction** follows from rule 3: a new child can replace an existing child of the same parent through RBF rules.[^bip431]

Version 27.0 made TRUC available on test networks only.[^rn-27] Version 28.0 made it standard on all networks.[^rn-28] Version 30.0 let the wallet create and spend TRUC transactions.[^rn-30] As of October 2026, BIP-431 has Draft status.[^bip431]

## Ephemeral anchors

An **anchor** is an output added only so that a child can spend it to pay fees. **Ephemeral anchors** combine three policies so a zero-fee transaction can be fee-bumped by any party at broadcast time.[^optech-anchors]

- **Pay-to-Anchor (P2A).** Version 28.0 made spending a keyless output standard. Its script is `OP_1 <0x4e73>`, a 2-byte witness v1 program.[^rn-28][^pr-30352]
- **Ephemeral dust.** Version 29.0 allows one dust output in a zero-fee transaction. Any child spending that transaction's outputs must also spend the dust.[^rn-29]
- **Package relay.** The zero-fee parent reaches miners together with its fee-paying child, via 1p1c relay.[^rn-28]

Because the dust must be spent by the child, it is not meant to remain in the UTXO set.[^rn-29] The policy code is in `src/policy/ephemeral_policy.cpp`.[^policy-dir]

## Cluster mempool

**Cluster mempool** is a redesign of how Bitcoin Core groups and orders unconfirmed transactions. It shipped in v31.0 (April 2026).[^rn-31]

A **cluster** is a set of unconfirmed transactions connected by spending links in either direction. Bitcoin Core stores the mempool as a transaction graph (`TxGraph`, in `CTxMemPool::m_txgraph`). It splits the graph into clusters and enforces cluster limits.[^txmempool-h]

Each cluster is given a **linearization**: an order consistent with dependencies. The linearization is split into **chunks**, groups that would be mined together. Each chunk has a feerate. The same chunk ordering drives block template building, eviction and relay announcement order.[^rn-31]

The design aims to fix inconsistencies in the old model. Previously, mining used ancestor feerate, while eviction used descendant feerate. A transaction could be the first to be evicted yet also be mined early.[^mempool-design][^optech-cluster]

Changes in v31.0 include:[^rn-31]

- Cluster limits of 64 transactions and 101 kvB, replacing ancestor/descendant limits.
- Removal of the CPFP carve-out.
- RBF accepted only if the feerate diagram strictly improves.
- New RPCs `getmempoolcluster` and `getmempoolfeeratediagram`, and chunk data in `getmempoolentry`.

## Fee estimation

Bitcoin Core's fee estimator watches which feerates confirm within how many blocks. The `estimatesmartfee` RPC turns this into a feerate for a given **confirmation target** in blocks.[^rn-015]

Since v0.15.0, `estimatesmartfee` supports targets up to 1,008 blocks. It offers two modes. **Conservative** uses longer time horizons and reacts slowly. **Economical** uses shorter horizons and can return lower rates.[^rn-015] Version 0.14.0 noted that a one-block target is unsupported, so `estimatesmartfee 1` starts at two blocks.[^rn-0140] Estimates are saved in `fee_estimates.dat`.[^rn-015]

Version 31.0 lowered the lowest estimator bucket from 1 sat/vB to 0.1 sat/vB, matching `-minrelaytxfee`.[^rn-31] The estimator code lives in `src/policy/fees/`.[^policy-dir]

The estimator is block-based. It learns from past confirmations, not from the current mempool. Work on mempool-based estimation using chunk feerates is ongoing as of October 2026 (PR #34075).[^optech-cluster][^optech-fees]

## Policy changes by release

The table lists releases with notable default mempool or relay policy changes. Releases not listed made no major change to these defaults.

| Release | Date | Policy changes |
|---|---|---|
| 0.12.0 | Feb 2016 | Mempool size limit (300 MB) with lowest-feerate eviction. Opt-in RBF. Ancestor/descendant limits (25 tx, 101 kvB). Min relay feerate 1,000 sat/kvB.[^rn-0120] |
| 0.13.0 | Aug 2016 | Ancestor-feerate mining (CPFP). `feefilter` message (BIP-133).[^rn-0130] |
| 0.14.0 | Mar 2017 | Mempool saved to `mempool.dat`. Separate incremental relay feerate (1,000 sat/kvB). Expiry raised to two weeks.[^rn-0140][^pr-9312] |
| 0.15.0 | Sep 2017 | `estimatesmartfee` modes, targets up to 1,008 blocks. Free transactions and priority removed. `-minrelaytxfee` may be 0.[^rn-015] |
| 0.19.0 | Nov 2019 | CPFP carve-out. `-mempoolreplacement` option removed.[^rn-019] |
| 22.0 | Sep 2021 | Package testing in `testmempoolaccept`.[^rn-220] |
| 24.0 | Nov 2022 | `-mempoolfullrbf` option added, off by default.[^rn-24] |
| 26.0 | Dec 2023 | `submitpackage` RPC (experimental). Package CPFP below the dynamic mempool floor.[^rn-26] |
| 27.0 | Apr 2024 | TRUC (v3) policy on test networks only.[^rn-27] |
| 28.0 | Oct 2024 | TRUC standard. 1p1c package relay. Limited package RBF. P2A standard. Full-RBF on by default.[^rn-28] |
| 29.0 | Apr 2025 | Ephemeral dust. `-mempoolfullrbf` removed. Orphan parents fetched from all announcing peers.[^rn-29] |
| 30.0 | Oct 2025 | Min relay and incremental feerates 0.1 sat/vB. `-blockmintxfee` 0.001 sat/vB. `-datacarriersize` 100,000. Legacy sigops limit 2,500.[^rn-30] |
| 31.0 | Apr 2026 | Cluster mempool (64 tx / 101 kvB). Ancestor/descendant limits and carve-out removed. Feerate-diagram RBF. Zero-fee 1p1c parents for non-TRUC.[^rn-31] |

Release dates come from the Bitcoin Core release pages.[^releases]

## Criticisms and open disputes

**Policy is not enforcement.** Standardness only shapes what default nodes relay. Miners can include non-standard transactions received out of band.[^policy-readme] How strict default policy should be is therefore debated with each change, as the 30.0 data-carrier change showed (below).

**Full-RBF and unconfirmed payments.** The `-mempoolfullrbf` option in 24.0 drew objections from services that accepted unconfirmed (zero-conf) payments. Muun argued it would force them to drop zero-conf features without enough notice.[^ml-zeroconf] Supporters pointed to pinning and DoS problems with opt-in signalling.[^optech-rbf]

**Pinning remains possible.** RBF rule 3 requires a higher absolute fee. An attacker can attach a large, low-feerate child, making replacement expensive.[^optech-rbf] TRUC limits this only for transactions that opt in.[^bip431]

**Package relay is incomplete.** Opportunistic 1p1c handles only simple topologies. The release notes say it is not reliable against adversaries.[^rn-28] Full BIP-331 is unimplemented as of October 2026.[^bip331]

**Carve-out removal.** Removing the CPFP carve-out in v31.0 affected protocols that relied on it, such as older Lightning anchor channels. Bitcoin Core recommends migrating to TRUC.[^rn-31][^optech-carveout]

**Lower fees and larger data outputs.** Version 30.0 lowered relay feerates and raised the default `-datacarriersize` to 100,000 bytes. The release notes themselves warn that low-feerate transactions may not propagate unless enough nodes adopt the new defaults.[^rn-30] The data-carrier change was disputed; see [OP_RETURN](../OP_RETURN/).

## Developer notes

### RPCs

- `getmempoolinfo` returns size, memory usage, `mempoolminfee`, `minrelaytxfee` and `incrementalrelayfee`. Since v30.0 it also reports `permitbaremultisig` and `maxdatacarriersize`.[^rn-30]
- `getrawmempool true` returns a verbose entry per transaction, including fees and dependency data.
- `getmempoolentry <txid>` returns one entry. Since v31.0 it includes chunk size and chunk fees.[^rn-31]
- `getmempoolcluster <txid>` (v31.0+) returns a transaction's cluster, in linearization order with chunk boundaries.[^rn-31]
- `getmempoolfeeratediagram` (v31.0+) returns the whole mempool's feerate diagram.[^rn-31]
- `testmempoolaccept '["<hex>", ...]'` runs full policy checks without broadcasting. Pass a list for package testing.[^rn-220]
- `submitpackage '["<parent>", "<child>"]'` submits a package. Optional `maxfeerate` and `maxburnamount` guard against overpaying.[^rn-28]
- `prioritisetransaction` and `getprioritisedtransactions` set and list fee deltas, which persist in `mempool.dat`.[^rn-0140][^rn-26]
- `estimatesmartfee <conf_target> [CONSERVATIVE|ECONOMICAL]` returns a feerate estimate.[^rn-015]

Example: test a parent and child together, then submit them.

```
bitcoin-cli testmempoolaccept '["<parent_hex>","<child_hex>"]'
bitcoin-cli submitpackage '["<parent_hex>","<child_hex>"]'
bitcoin-cli getmempoolcluster <child_txid>
```

### Source files

- `src/txmempool.cpp`, `src/txmempool.h`: `CTxMemPool`, eviction (`TrimToSize`), expiry (`Expire`), rolling minimum fee (`GetMinFee`).[^txmempool-h][^txmempool-cpp]
- `src/txgraph.cpp`: the cluster graph behind `CTxMemPool::m_txgraph`.[^txmempool-h]
- `src/kernel/mempool_options.h`: size and expiry defaults.[^mempool-options]
- `src/policy/policy.cpp`, `policy.h`: standardness checks and default feerates.[^policy-h]
- `src/policy/rbf.cpp`: replacement rules.[^policy-dir]
- `src/policy/packages.cpp`: package topology and validation.[^policy-dir]
- `src/policy/truc_policy.cpp`: TRUC (BIP-431) rules.[^policy-dir]
- `src/policy/ephemeral_policy.cpp`: ephemeral dust rules.[^policy-dir]
- `src/policy/fees/`: the fee estimator.[^policy-dir]
- `doc/policy/`: design notes, including `mempool-design.md`, `mempool-replacements.md` and `packages.md`.[^mempool-replacements]

### Functional tests

Relevant tests in `test/functional/` include `mempool_limit.py`, `mempool_expiry.py`, `mempool_persist.py`, `mempool_cluster.py`, `feature_rbf.py`, `mempool_package_rbf.py`, `mempool_truc.py`, `mempool_ephemeral_dust.py`, `rpc_packages.py` and `feature_fee_estimation.py`.[^tests]

### Test vectors

- P2A output script: `51024e73` (`OP_1 OP_PUSHBYTES_2 4e73`). Mainnet address: `bc1pfeessrawgf`. The spending input must have an empty scriptSig and empty witness.[^pr-30352]
- BIP-125 signalling: any input with `nSequence` ≤ `0xfffffffd` signals replaceability.[^bip125]
- TRUC opt-in: transaction `nVersion` = `3`. Standard versions are 1 to 3 (`TX_MAX_STANDARD_VERSION`).[^policy-h]

## See also

- [Bitcoin node](../Bitcoin_node/)
- [UTXO](../UTXO/)
- [Segregated Witness](../Segregated_Witness/)
- [Taproot](../Taproot/)
- [OP_RETURN](../OP_RETURN/)
- [PSBT](../PSBT/)
- [Chain reorganization](../Chain_reorganization/)
- [Blockchain scaling](../Blockchain_scaling/)

## References

[^releases]: ["Bitcoin Core releases"](https://bitcoincore.org/en/releases/). *bitcoincore.org*. Retrieved October 2026.
[^policy-readme]: ["Transaction relay policy"](https://github.com/bitcoin/bitcoin/blob/master/doc/policy/README.md). *Bitcoin Core* `doc/policy/README.md`.
[^mempool-design]: ["Mempool design"](https://github.com/bitcoin/bitcoin/blob/master/doc/policy/mempool-design.md). *Bitcoin Core* `doc/policy/mempool-design.md`.
[^mempool-replacements]: ["Mempool replacements"](https://github.com/bitcoin/bitcoin/blob/master/doc/policy/mempool-replacements.md). *Bitcoin Core* `doc/policy/mempool-replacements.md`.
[^mempool-options]: ["src/kernel/mempool_options.h"](https://github.com/bitcoin/bitcoin/blob/master/src/kernel/mempool_options.h). *Bitcoin Core* source code.
[^policy-h]: ["src/policy/policy.h"](https://github.com/bitcoin/bitcoin/blob/master/src/policy/policy.h). *Bitcoin Core* source code.
[^policy-dir]: ["src/policy/"](https://github.com/bitcoin/bitcoin/tree/master/src/policy). *Bitcoin Core* source code.
[^txmempool-cpp]: ["src/txmempool.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/txmempool.cpp). *Bitcoin Core* source code.
[^txmempool-h]: ["src/txmempool.h"](https://github.com/bitcoin/bitcoin/blob/master/src/txmempool.h). *Bitcoin Core* source code.
[^tests]: ["test/functional/"](https://github.com/bitcoin/bitcoin/tree/master/test/functional). *Bitcoin Core* test suite.
[^pr-9312]: ["Increase mempool expiry time to 2 weeks" (PR #9312)](https://github.com/bitcoin/bitcoin/pull/9312). *Bitcoin Core* GitHub.
[^pr-30352]: ["policy: Add PayToAnchor(P2A), OP_1 <0x4e73> as standard output script for spending" (PR #30352)](https://github.com/bitcoin/bitcoin/pull/30352). *Bitcoin Core* GitHub.
[^rn-0120]: ["Bitcoin Core 0.12.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.12.0.md). February 2016.
[^rn-0130]: ["Bitcoin Core 0.13.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.13.0.md). August 2016.
[^rn-0140]: ["Bitcoin Core 0.14.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.14.0.md). March 2017.
[^rn-015]: ["Bitcoin Core 0.15.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.15.0.md). September 2017.
[^rn-019]: ["Bitcoin Core 0.19.0.1 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.19.0.1.md). November 2019.
[^rn-220]: ["Bitcoin Core 22.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-22.0.md). September 2021.
[^rn-24]: ["Bitcoin Core 24.0.1 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-24.0.1.md). December 2022.
[^rn-26]: ["Bitcoin Core 26.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-26.0.md). December 2023.
[^rn-27]: ["Bitcoin Core 27.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-27.0.md). April 2024.
[^rn-28]: ["Bitcoin Core 28.0 released"](https://bitcoincore.org/en/releases/28.0/). *bitcoincore.org*. 2 October 2024.
[^rn-29]: ["Bitcoin Core 29.0 released"](https://bitcoincore.org/en/releases/29.0/). *bitcoincore.org*. 14 April 2025.
[^rn-30]: ["Bitcoin Core 30.0 released"](https://bitcoincore.org/en/releases/30.0/). *bitcoincore.org*. 10 October 2025.
[^rn-31]: ["Bitcoin Core 31.0 released"](https://bitcoincore.org/en/releases/31.0/). *bitcoincore.org*. 19 April 2026.
[^bip125]: Harding, David A.; Todd, Peter. ["BIP 125: Opt-in Full Replace-by-Fee Signaling"](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki). *Bitcoin Improvement Proposals*.
[^bip331]: Zhao, Gloria. ["BIP 331: Ancestor Package Relay"](https://github.com/bitcoin/bips/blob/master/bip-0331.mediawiki). *Bitcoin Improvement Proposals*.
[^bip431]: Zhao, Gloria. ["BIP 431: Topology Restrictions for Pinning"](https://github.com/bitcoin/bips/blob/master/bip-0431.mediawiki). *Bitcoin Improvement Proposals*.
[^ml-zeroconf]: Sneidermanis, Dario (7 October 2022). ["[Opt-in full-RBF] Zero-conf apps in immediate danger"](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2022-October/021025.html). *bitcoin-dev mailing list*.
[^optech-rbf]: ["Replace-by-fee (RBF)"](https://bitcoinops.org/en/topics/replace-by-fee/). *Bitcoin Optech* topics.
[^optech-carveout]: ["CPFP carve out"](https://bitcoinops.org/en/topics/cpfp-carve-out/). *Bitcoin Optech* topics.
[^optech-pinning]: ["Transaction pinning"](https://bitcoinops.org/en/topics/transaction-pinning/). *Bitcoin Optech* topics.
[^optech-package]: ["Package relay"](https://bitcoinops.org/en/topics/package-relay/). *Bitcoin Optech* topics.
[^optech-anchors]: ["Ephemeral anchors"](https://bitcoinops.org/en/topics/ephemeral-anchors/). *Bitcoin Optech* topics.
[^optech-cluster]: ["Cluster mempool"](https://bitcoinops.org/en/topics/cluster-mempool/). *Bitcoin Optech* topics.
[^optech-fees]: ["Fee estimation"](https://bitcoinops.org/en/topics/fee-estimation/). *Bitcoin Optech* topics.
