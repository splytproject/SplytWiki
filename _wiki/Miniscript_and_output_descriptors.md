---
title: Miniscript and output descriptors
description: Output script descriptors (BIP-380 to BIP-386) and Miniscript (BIP-379) — how wallets describe what they can spend, how Miniscript makes Bitcoin Script analysable, the policy compiler, and Bitcoin Core's descriptor wallets as of October 2026
aliases: [Output descriptors, Descriptors, Miniscript, Descriptor wallets, BIP-380, BIP-379]
categories: [Bitcoin, Protocol, Wallets, Scripting]
updated: 2026-10-20
last_modified: 2026-10-20
infobox:
  image: bitcoin.svg
  caption: Descriptors and Miniscript
  rows:
    - header: Output descriptors
    - Specification: BIP-380 to BIP-386 (Deployed)
    - Author: Pieter Wuille
    - In Bitcoin Core since: "0.17.0 (2018); default wallet type since 23.0 (2022)"
    - header: Miniscript
    - Specification: BIP-379 (Draft, as of October 2026)
    - Designers: Pieter Wuille, Andrew Poelstra, Sanket Kanjalkar
    - In Bitcoin Core since: "24.0 (P2WSH, 2022); 26.0 (Taproot, 2023)"
---

**Specifications:** [BIP-379](../BIP_index/#bip-379) · [BIP-380](../BIP_index/#bip-380) · [BIP-381](../BIP_index/#bip-381) · [BIP-382](../BIP_index/#bip-382) · [BIP-383](../BIP_index/#bip-383) · [BIP-384](../BIP_index/#bip-384) · [BIP-385](../BIP_index/#bip-385) · [BIP-386](../BIP_index/#bip-386)

> **In plain terms:** A seed phrase tells a wallet its keys, but not what kind of addresses to make from them. A descriptor is a short text string that says exactly that. Miniscript goes further: it writes spending conditions in a form that software can check, combine and sign automatically.

**Output script descriptors** are a text language for describing which output scripts a wallet controls and how to derive them.[^bip380] **Miniscript** is a structured way of writing a subset of [Bitcoin Script](../Bitcoin_Script/). It lets software analyse scripts and build the data needed to spend them.[^bip379] Miniscript expressions are written inside descriptors, so the two form one language.[^bip379]

## The problem

### Backups that do not say enough

Wallets traditionally backed up private keys alone, usually as a [BIP-39 seed phrase](../HD_wallets_and_seed_phrases/). BIP-380 explains why that stopped being enough. [Segregated Witness](../Segregated_Witness/) added new output types. Given keys alone, "it is not possible for restored wallets to know which kinds of output scripts and addresses to produce".[^bip380]

Derivation paths made it worse. Standards such as BIP-44, BIP-49 and BIP-84 exist, but not every wallet follows them. Workarounds, such as different version bytes for extended keys, mixed up key derivation with script type.[^bip380] Restoring a backup in a different wallet could silently miss funds.

### Scripts that cannot be reasoned about

BIP-379 lists what is hard with raw Script, even though it only expresses signatures, hash locks and time locks. Given a set of conditions, finding the cheapest script is hard. Composing two scripts is hard. Working out what a script allows, how to satisfy it, or what it will cost to spend is hard.[^bip379] Signing devices therefore needed custom code for each script template.[^optech-ms]

## Output descriptors

### Structure

A descriptor is a **script expression** that may contain **key expressions**. It is written like a function call, for example `wpkh(KEY)` for a pay-to-witness-public-key-hash output.[^bip380] An optional `#checksum` of eight characters guards against typing errors.[^bip380]

A key expression can be a raw public key or a BIP-32 extended key with a derivation path. Either can be prefixed with **origin information**: the fingerprint and path of the master key it came from. A path ending in `/*` is **ranged**, describing a whole sequence of keys.[^bip380] Multipath descriptors, specified later in BIP-389, write receive and change paths together as `/<0;1>/*`.[^core-desc]

### The BIPs

| BIP | Defines | Examples |
|---|---|---|
| 380 | General syntax, checksums, key expressions | — |
| 381 | Non-SegWit scripts | `pk()`, `pkh()`, `sh()` |
| 382 | SegWit version 0 scripts | `wpkh()`, `wsh()` |
| 383 | Multisignature | `multi()`, `sortedmulti()` |
| 384 | Legacy catch-all | `combo()` |
| 385 | Raw scripts and addresses | `raw()`, `addr()` |
| 386 | [Taproot](../Taproot/) | `tr()` |

All seven were assigned on 27 June 2021 and have status Deployed as of October 2026.[^bips-hdr] Later BIPs extend the family, including BIP-387 (`multi_a`), BIP-388 (wallet policies), BIP-389 (multipath) and BIP-390 (MuSig2).[^optech-desc]

For example, `wsh(sortedmulti(2,KEY1,KEY2,KEY3))` describes 2-of-3 [multisignature](../Multisignature/) outputs inside pay-to-witness-script-hash, with keys sorted so that order does not matter.[^core-desc]

### Import and export

A descriptor with public keys is a complete watch-only backup. A descriptor with private keys is a complete spending backup. Bitcoin Core's `importdescriptors` RPC loads descriptors into a wallet, and `listdescriptors` exports them, optionally with private keys.[^rn-22][^rn-0.21] Other wallets that read descriptors include Bitcoin Dev Kit, Specter, Coldcard and BTCPay Server.[^optech-desc]

## Miniscript

### What it is

Miniscript is "a language for writing (a subset of) Bitcoin Scripts in a structured way".[^bip379] It consists of **fragments**, each with a fixed meaning and a fixed translation into Script. Fragments nest. `pk(KEY)` requires a signature; `older(144)` requires a relative time lock of 144 blocks; `and_v(X,Y)` requires both; `or_d(X,Y)` requires either.[^bip379] **Wrappers**, written as prefixes such as `v:` or `d:`, adjust how a fragment leaves data on the stack without changing its meaning.[^bip379]

It applies to P2WSH and to tapscript, with minor differences. Bare scripts and P2SH are excluded.[^bip379] Miniscript lives inside `wsh()` and `tr()` descriptors.[^bip379] As BIP-379 puts it, "Miniscript is not a separate language, but rather a significant expansion of the descriptor language".[^bip379]

### What it checks

BIP-379 defines a type system with four base types (B, V, K and W) and properties that describe how fragments may be combined.[^bip379] The system lets software verify three things:[^sipa]

- **Correctness.** The script can be satisfied in exactly the ways the policy intends.
- **Malleability.** A third party cannot change a valid witness into a different valid witness, which matters for unconfirmed transaction chains.
- **Resource limits.** The script will not hit consensus or standardness limits, such as the maximum stack size or opcode count, when spent.

It also gives a **satisfaction algorithm**: given which signatures and preimages are available, software can construct the witness for any Miniscript. That is what allows generic signing, including on hardware devices.[^bip379]

### The policy compiler

A **policy** is a higher-level description of spending conditions, without the details of stack handling. The policy language has `pk()`, `after()`, `older()`, hash locks such as `sha256()`, and `and()`, `or()` and `thresh()` to combine them. `or()` branches can be weighted by how likely they are to be used.[^sipa]

A **compiler** turns a policy into a Miniscript, and therefore into Script. The compiler is a demonstration tool at the Miniscript website, which notes that its cost model assumes SegWit.[^sipa] Miniscript was designed and implemented by Pieter Wuille, Andrew Poelstra and Sanket Kanjalkar at Blockstream Research.[^sipa] Policies are not part of BIP-379.[^bip379]

### Example

Bitcoin Core's documentation gives a "decaying" multisignature: a 4-of-4 that becomes 3-of-4, 2-of-4 and 1-of-4 at successive block heights. Its policy is `thresh(4,pk(k1),pk(k2),pk(k3),pk(k4),after(t1),after(t2),after(t3))`. The compiled Miniscript is a `wsh(thresh(...))` descriptor with `s:pk` and `sln:after` wrappers.[^core-desc]

## Bitcoin Core descriptor wallets

| Release | Date | Change |
|---|---|---|
| 0.17.0 | Oct 2018 | Descriptors introduced, first used by `scantxoutset`.[^rn-0.17] |
| 0.18.0 | May 2019 | `getdescriptorinfo` and `deriveaddresses` RPCs.[^rn-0.18] |
| 0.21.0 | Jan 2021 | Experimental **descriptor wallets**, stored in SQLite, created with `createwallet ... descriptors=true`; `importdescriptors`.[^rn-0.21] |
| 22.0 | Sep 2021 | `listdescriptors` RPC; `tr()` import after Taproot activation.[^rn-22] |
| 23.0 | Apr 2022 | Descriptor wallets become the default; new wallets include a `tr()` descriptor.[^rn-23] |
| 24.0.1 | Dec 2022 | Miniscript in `wsh()` for watch-only wallets (#24148); experimental `migratewallet` RPC.[^rn-24] |
| 25.0 | May 2023 | Signing and `finalizepsbt` for Miniscript inputs; `decodescript` infers Miniscript.[^rn-25] |
| 26.0 | Dec 2023 | Miniscript inside `tr()` Taproot descriptors (#27255).[^rn-26] |
| 28.0 | Oct 2024 | `createwalletdescriptor` adds new descriptor types to existing wallets.[^rn-28] |
| 30.0 | Oct 2025 | Legacy (Berkeley DB) wallets can no longer be loaded; they must be migrated.[^rn-30] |

A descriptor wallet stores descriptors rather than a pool of keys, and reasons about ownership through them.[^core-desc] As of October 2026, descriptors are the only wallet type Bitcoin Core can create or load.[^rn-30]

Hardware signing devices adopted Miniscript too. Optech records the Ledger Bitcoin App adding Taproot Miniscript support in version 2.2.0 (2024).[^optech-ms] The `rust-miniscript` library provides descriptors and Miniscript for Rust software.[^rust-ms]

## Trade-offs and open issues

- **BIP-379 is still a Draft** as of October 2026, although it is widely implemented.[^bips-hdr]
- **Not all of Script.** Miniscript deliberately excludes most opcodes, so some existing scripts cannot be expressed. Bare scripts and P2SH are out of scope.[^bip379]
- **Mixed lock types.** Combining height-based and time-based locks in one script can produce unspendable branches; tooling must detect this.[^optech-ms]
- **Compiler cost model.** The public compiler assumes a SegWit cost model and does not promise the cheapest possible script.[^sipa]
- **Wallet policies.** BIP-388, published in 2024, defines "wallet policies", a restricted form of descriptor. Wallets must choose which form to support.[^optech-desc]

## Developer notes

### RPCs

```
bitcoin-cli getdescriptorinfo "wpkh(xpub.../0/*)"          # validate; returns checksum
bitcoin-cli deriveaddresses "wpkh(xpub.../0/*)#checksum" "[0,4]"
bitcoin-cli createwallet mywallet                           # descriptor wallet (default since 23.0)
bitcoin-cli importdescriptors '[{"desc":"...#checksum","timestamp":"now","active":true}]'
bitcoin-cli listdescriptors true                            # include private keys
bitcoin-cli scantxoutset start '["addr(bc1q...)"]'
bitcoin-cli migratewallet oldwallet                         # legacy -> descriptor
```

### Source files

- `src/script/descriptor.cpp`: descriptor parsing, derivation and checksums.[^core-descriptor-cpp]
- `src/script/miniscript.cpp`, `src/script/miniscript.h`: Miniscript parsing, type checking and satisfaction.[^core-miniscript]
- `doc/descriptors.md`: Bitcoin Core's descriptor reference, including the decaying multisig example.[^core-desc]
- `test/functional/wallet_miniscript.py` and `test/functional/wallet_miniscript_decaying_multisig_descriptor_psbt.py`: functional tests.[^core-tests]

### Specifications, test vectors and reference implementations

- BIP-380 to BIP-386: [bip-0380.mediawiki](https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki) and following. BIP-380 includes test vectors for checksums and key expressions.[^bip380]
- BIP-379: [bip-0379.md](https://github.com/bitcoin/bips/blob/master/bip-0379.md), with a test-vector section and a reference implementation link.[^bip379]
- Policy compiler and documentation: [bitcoin.sipa.be/miniscript](https://bitcoin.sipa.be/miniscript/).[^sipa]
- Rust: [rust-bitcoin/rust-miniscript](https://github.com/rust-bitcoin/rust-miniscript).[^rust-ms]

## See also

- [Bitcoin Script](../Bitcoin_Script/)
- [HD wallets and seed phrases](../HD_wallets_and_seed_phrases/)
- [Multisignature](../Multisignature/)
- [PSBT](../PSBT/)
- [Taproot](../Taproot/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)

## References

[^bip379]: Wuille, Pieter. ["BIP 379: Miniscript"](https://github.com/bitcoin/bips/blob/master/bip-0379.md). *Bitcoin Improvement Proposals*. Status: Draft (as of October 2026).
[^bip380]: Wuille, Pieter. ["BIP 380: Output Script Descriptors General Operation"](https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki). *Bitcoin Improvement Proposals*. Status: Deployed.
[^bips-hdr]: Header preambles of BIP-379 to BIP-386 in the [bitcoin/bips](https://github.com/bitcoin/bips) repository, read at commit 927b6de (2 October 2026).
[^sipa]: Wuille, Pieter; Poelstra, Andrew; Kanjalkar, Sanket. ["Miniscript"](https://bitcoin.sipa.be/miniscript/). *bitcoin.sipa.be*. Retrieved October 2026.
[^optech-ms]: ["Miniscript"](https://bitcoinops.org/en/topics/miniscript/). *Bitcoin Optech* topics. Retrieved October 2026.
[^optech-desc]: ["Output script descriptors"](https://bitcoinops.org/en/topics/output-script-descriptors/). *Bitcoin Optech* topics. Retrieved October 2026.
[^core-desc]: ["Support for Output Descriptors in Bitcoin Core" (doc/descriptors.md)](https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md). *Bitcoin Core* repository, as of October 2026.
[^rn-0.17]: ["Bitcoin Core 0.17.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.17.0.md). *Bitcoin Core*. October 2018.
[^rn-0.18]: ["Bitcoin Core 0.18.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.18.0.md). *Bitcoin Core*. May 2019.
[^rn-0.21]: ["Bitcoin Core 0.21.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.21.0.md). *Bitcoin Core*. January 2021.
[^rn-22]: ["Bitcoin Core 22.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-22.0.md). *Bitcoin Core*. September 2021.
[^rn-23]: ["Bitcoin Core 23.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-23.0.md). *Bitcoin Core*. April 2022.
[^rn-24]: ["Bitcoin Core 24.0.1 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-24.0.1.md). *Bitcoin Core*. December 2022.
[^rn-25]: ["Bitcoin Core 25.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-25.0.md). *Bitcoin Core*. May 2023.
[^rn-26]: ["Bitcoin Core 26.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-26.0.md). *Bitcoin Core*. December 2023.
[^rn-28]: ["Bitcoin Core 28.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-28.0.md). *Bitcoin Core*. October 2024.
[^rn-30]: ["Bitcoin Core 30.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-30.0.md). *Bitcoin Core*. October 2025.
[^rust-ms]: ["rust-miniscript"](https://github.com/rust-bitcoin/rust-miniscript). *rust-bitcoin* project, GitHub. CC0 licence.
[^core-descriptor-cpp]: ["src/script/descriptor.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/script/descriptor.cpp). *Bitcoin Core* source code.
[^core-miniscript]: ["src/script/miniscript.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/script/miniscript.cpp). *Bitcoin Core* source code.
[^core-tests]: ["test/functional/wallet_miniscript.py"](https://github.com/bitcoin/bitcoin/blob/master/test/functional/wallet_miniscript.py) and ["wallet_miniscript_decaying_multisig_descriptor_psbt.py"](https://github.com/bitcoin/bitcoin/blob/master/test/functional/wallet_miniscript_decaying_multisig_descriptor_psbt.py). *Bitcoin Core* source code.
