---
title: Testnet
description: Bitcoin's test networks as of October 2026 — regtest, signet (BIP-325), the retired-in-practice testnet3, and testnet4 (BIP-94) — what each is for, how they differ from mainnet, and how to run them
aliases: [Test networks, Regtest, Signet, Testnet3, Testnet4, Bitcoin testnet]
categories: [Bitcoin, Development, Testing]
updated: 2026-10-23
last_modified: 2026-10-23
infobox:
  image: bitcoin.svg
  caption: Bitcoin test networks
  rows:
    - header: Networks (as of October 2026)
    - Regtest: Private, local; blocks on demand
    - Signet: Public; blocks signed by a challenge key (BIP-325)
    - Testnet4: Public; proof of work with fixes (BIP-94)
    - Testnet3: Deprecated since Bitcoin Core 28.0
    - header: Bitcoin Core options
    - Select network: "`-regtest`, `-signet`, `-testnet4`, `-testnet`"
    - Added in: "Signet 0.21.0 (2021); testnet4 28.0 (2024)"
---

**Specifications:** [BIP-325](../BIP_index/#bip-325) · [BIP-94](../BIP_index/#bip-94)

> **In plain terms:** Developers need somewhere to try Bitcoin software without risking real money. Bitcoin Core ships four such networks. Regtest runs on your own machine. Signet and testnet4 are shared public networks whose coins are meant to be worthless. Each makes a different trade-off between realism and convenience.

A **test network** is a separate Bitcoin blockchain with its own genesis block, coins and rules. Coins on it are not bitcoin and are intended to have no value. [Bitcoin Core](../Bitcoin_Core_release_history/) supports four as of October 2026: **regtest**, **signet**, **testnet4** and the older **testnet3**.[^chainparams][^rn-28]

This page explains the problem each network solves, how it works, and when to use it.

## The problem

Mainnet is unsuitable for experiments. Mistakes cost real money, blocks arrive every ten minutes on average, and nobody can mine a block on demand. A test network must be cheap, predictable and safe to break.

No single design satisfies every need. A developer debugging a wallet wants instant blocks. An exchange testing integration wants a shared network that behaves like mainnet. A protocol researcher wants a network where proposed consensus rules can be switched on.[^bip325] The four networks below each pick a different point on that spectrum.

## Regtest

**Regtest** (regression test mode) is a private chain that exists only on the machine running it. Nothing is mined unless the operator asks.[^chainparams]

Its consensus parameters are relaxed. The proof-of-work target is set so that almost any hash qualifies, and difficulty never retargets.[^chainparams] The block subsidy halves every 150 blocks rather than every 210,000, so a developer can reach later subsidy eras in minutes.[^chainparams]

Blocks are created with RPCs. The `generatetoaddress` RPC mines to an address, and `generatetodescriptor` mines to an [output descriptor](../Miniscript_and_output_descriptors/) (0.20.0).[^rn-0-20] The `generateblock` RPC builds a block from a chosen set of transactions (0.21.0).[^rn-0-21] Bitcoin Core's own functional test suite runs on regtest.[^test-framework]

Since Bitcoin Core 29.0, the BIP-94 timewarp rule is off by default on regtest, so tests can create blocks with arbitrary timestamps.[^rn-29]

## Signet (BIP-325)

### The problem signet solves

Signet's author, Karl-Johan Alm, described testnet as "notoriously unreliable". It suffered "huge block reorgs, long gaps in between blocks" and "sudden bursts of blocks". The goal of signet is "to have a predictable amount of unreliability", so that software can be tested against mainnet-like behaviour.[^bip325]

### How it works

A signet adds one consensus parameter: a **challenge**, which is a script. Every block must carry a valid solution to that script, in addition to proof of work.[^bip325] The challenge can be a single key, a multisignature, or any other script.[^bip325]

The solution is stored inside the coinbase transaction's witness commitment. It is a data push beginning with the four-byte header `0xecc7daa2`, followed by a scriptSig and witness.[^bip325] To check it, a node builds two virtual transactions, called `to_spend` and `to_sign`. The block is valid only if `to_sign` is a valid spend of `to_spend`.[^bip325]

The signature does not commit to the block's nonce. Miners can therefore grind proof of work without re-signing.[^bip325] Signet's minimum difficulty is low: about 0.0011, encoded as `nBits` `0x1e0377ae`.[^bip325]

All signets share one genesis block. Each is told apart by its network magic, derived from the hash of its challenge.[^bip325] Anyone can therefore run a private signet with their own challenge.

### Deployment

Bitcoin Core 0.21.0 (January 2021) added signet support. One public signet, selected with `-signet`, is maintained by the project. Custom signets use `-signetchallenge` and `-signetseednode`.[^rn-0-21] Taproot's rules were active on the default signet before mainnet activation, so it served as the first place to test them.[^rn-0-21]

The default signet is also where **Bitcoin Inquisition**, a fork of Bitcoin Core, deploys proposed soft forks for testing. As of October 2026, those include CTV, OP_CAT, CSFS and OP_TEMPLATEHASH.[^inq] See [Covenant proposals](../Covenant_proposals/).

## Testnet3 and its retirement

**Testnet3** was Bitcoin's public proof-of-work test network from 2011 until testnet4 replaced it. Its difficulty rule included a **20-minute exception**: a block more than 20 minutes after its predecessor may use the minimum difficulty.[^bip94] That rule let CPU miners keep the chain moving.

The exception interacted badly with difficulty adjustment. When the last block of a period used minimum difficulty, the next period's difficulty was computed from it. That could reset difficulty to near 1. The result was **block storms**, bursts of blocks mined far faster than intended.[^bip94]

BIP-94 quotes Jameson Lopp's 2024 case for replacement. Testnet3 had run for 13 years and reached block 2.5 million, with the subsidy down to about 0.014 tBTC. Its coins were being bought and sold, breaking the principle that test coins have no value.[^bip94] Three years' worth of blocks were later mined in a few weeks, rendering the network "practically unusable".[^bip94]

### Status

Bitcoin Core 28.0 (October 2024) added testnet4 and stated the intention "to phase out support for Testnet3 in an upcoming version".[^rn-28] The `-testnet` option's help text now says support "is deprecated and will be removed in an upcoming release".[^chainparamsbase]

A pull request to drop testnet3, #31974, was closed without merging in May 2026.[^pr-31974] As of October 2026, testnet3 remains selectable in Bitcoin Core.[^chainparams] It is deprecated rather than removed.

## Testnet4 (BIP-94)

**Testnet4** is a new public proof-of-work network, specified by Fabian Jahr in BIP-94 and designed to replace testnet3.[^bip94] It keeps mainnet's consensus rules with three exceptions.[^bip94]

1. **The 20-minute exception is kept.** Reviewers wanted CPU miners to be able to mine non-standard transactions and move the chain forward.[^bip94]
2. **Block storm fix.** Difficulty adjustment now takes its base from the first block of the previous period, not the last. The last block may have used the exception; the first may not.[^bip94]
3. **Timewarp protection.** The first block of each period must have a timestamp no earlier than 600 seconds before the previous block. This rule comes from the Great Consensus Cleanup proposal.[^bip94]

All soft forks active on mainnet as of May 2024, up to [Taproot](../Taproot/), are enforced from block 1.[^bip94] The genesis block's message is dated 3 May 2024.[^bip94]

BIP-94 records one known downside. If a large miner raises the difficulty and then leaves, each period needs one block at full difficulty before the exception applies. The network can stall once per period until difficulty falls.[^bip94]

Bitcoin Core 28.0 added testnet4 under the `-testnet4` option and the `[testnet4]` configuration section.[^rn-28] Bitcoin Core has shipped assumeutxo snapshot parameters for testnet4 since 2025; see [AssumeUTXO](../AssumeUTXO/).[^chainparams]

## Choosing a network

| Need | Network | Why |
|---|---|---|
| Unit and integration tests, instant blocks | Regtest | Blocks on demand; no peers needed.[^chainparams] |
| Multi-party testing with predictable blocks | Signet | Signed blocks; no block storms.[^bip325] |
| Testing proposed soft forks | Default signet (Inquisition) | Proposals activated there.[^inq] |
| Mainnet-like proof of work and mining | Testnet4 | Real PoW with storm fixes.[^bip94] |
| Legacy infrastructure only | Testnet3 | Deprecated; expect removal.[^chainparamsbase] |

## Trade-offs and open issues

- **Signet is centralized by design.** Whoever holds the challenge key decides which blocks exist. BIP-325 presents this as the point: predictability in exchange for decentralization.[^bip325]
- **Testnet4's CPU-mining exception remains exploitable.** The BIP keeps the 20-minute rule and accepts the stall scenario described above.[^bip94]
- **Testnet3 removal is unresolved.** The deprecation notice has stood since 2024, and the removal pull request was closed, as of October 2026.[^rn-28][^pr-31974]
- **Test coins acquire value.** BIP-94 documents this happening on testnet3. Nothing in testnet4's design prevents a repeat.[^bip94]

## Developer notes

### Running each network

```
bitcoind -regtest -daemon
bitcoin-cli -regtest createwallet dev
bitcoin-cli -regtest -generate 101          # mine 101 blocks to the wallet

bitcoind -signet -daemon                    # default public signet
bitcoind -signet -signetchallenge=<hex>     # a custom signet
bitcoind -testnet4 -daemon
bitcoind -testnet -daemon                   # testnet3, deprecated
```

`bitcoin-cli getblockchaininfo` reports the active chain in its `chain` field. Regtest-only RPCs include `generatetoaddress`, `generatetodescriptor` and `generateblock`.[^rn-0-20][^rn-0-21]

### Source files

- `src/kernel/chainparams.cpp`: consensus parameters for every network, including regtest's 150-block halving and testnet4's `enforce_BIP94` flag.[^chainparams]
- `src/chainparamsbase.cpp`: the `-regtest`, `-signet`, `-testnet4` and `-testnet` options and their help text.[^chainparamsbase]
- `src/signet.cpp`: construction and checking of signet's `to_spend` and `to_sign` transactions.[^signet-cpp]
- `test/functional/test_framework/test_framework.py`: the regtest-based functional test framework.[^test-framework]
- `test/functional/feature_signet.py`: signet tests.[^feature-signet]

### Specifications and reference implementation

- BIP-325 (signet): [bip-0325.mediawiki](https://github.com/bitcoin/bips/blob/master/bip-0325.mediawiki); reference implementation in Bitcoin Core #18267.[^rn-0-21]
- BIP-94 (testnet4): [bip-0094.mediawiki](https://github.com/bitcoin/bips/blob/master/bip-0094.mediawiki); reference implementation in Bitcoin Core #29775.[^rn-28]

## See also

- [Bitcoin node](../Bitcoin_node/)
- [Proof of work](../Proof_of_work/)
- [Chain reorganization](../Chain_reorganization/)
- [Covenant proposals](../Covenant_proposals/)
- [AssumeUTXO](../AssumeUTXO/)
- [How to contribute to Bitcoin](../how-to-contribute-to-bitcoin/)

## References

[^bip325]: Alm, Karl-Johan. ["BIP 325: Signet"](https://github.com/bitcoin/bips/blob/master/bip-0325.mediawiki). *Bitcoin Improvement Proposals*. Status: Complete (as of October 2026).
[^bip94]: Jahr, Fabian. ["BIP 94: Testnet 4"](https://github.com/bitcoin/bips/blob/master/bip-0094.mediawiki). *Bitcoin Improvement Proposals*. Status: Deployed (as of October 2026).
[^rn-0-20]: ["Bitcoin Core 0.20.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.20.0.md). *Bitcoin Core*. June 2020.
[^rn-0-21]: ["Bitcoin Core 0.21.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.21.0.md). *Bitcoin Core*. January 2021.
[^rn-28]: ["Bitcoin Core 28.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-28.0.md). *Bitcoin Core*. October 2024.
[^rn-29]: ["Bitcoin Core 29.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-29.0.md). *Bitcoin Core*. April 2025.
[^chainparams]: ["src/kernel/chainparams.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp). *Bitcoin Core* source code, as of October 2026.
[^chainparamsbase]: ["src/chainparamsbase.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/chainparamsbase.cpp). *Bitcoin Core* source code, as of October 2026.
[^signet-cpp]: ["src/signet.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/signet.cpp). *Bitcoin Core* source code.
[^test-framework]: ["test/functional/test_framework/test_framework.py"](https://github.com/bitcoin/bitcoin/blob/master/test/functional/test_framework/test_framework.py). *Bitcoin Core* source code.
[^feature-signet]: ["test/functional/feature_signet.py"](https://github.com/bitcoin/bitcoin/blob/master/test/functional/feature_signet.py). *Bitcoin Core* source code.
[^pr-31974]: ["Drop testnet3" (PR #31974)](https://github.com/bitcoin/bitcoin/pull/31974). *Bitcoin Core* GitHub. Closed without merging, 21 May 2026.
[^inq]: Towns, Anthony (22 July 2026). ["Bitcoin Inquisition 29.4"](https://delvingbitcoin.org/t/bitcoin-inquisition-29-4/2739). *Delving Bitcoin*.
