---
title: Bitcoin Core release history
description: Every major release of Bitcoin Core from version 0.1 in 2009 to the current release, with dates, headline changes, policy changes, the release cycle, maintainers and the version-numbering change
aliases: [Bitcoin Core releases, Bitcoin Core versions, Bitcoin Core version history]
categories: [Bitcoin, Software, History]
updated: 2026-10-23
last_modified: 2026-10-23
infobox:
  image: bitcoin.svg
  caption: Bitcoin Core release history
  rows:
    - header: Overview
    - First release: 0.1, January 2009
    - Current major release: 31.0, April 2026 (as of October 2026)
    - Latest maintenance release: 31.1 (as of October 2026)
    - Release cycle: About every 6 to 7 months
    - Maintained versions: Latest three major versions
    - Numbering change: 0.21 was followed by 22.0 (2021)
---

> **In plain terms:** Bitcoin Core is the software most Bitcoin nodes run. It began as Satoshi Nakamoto's original program in 2009. A new major version now ships about twice a year. Each brings new features, and sometimes new rules for which transactions nodes pass along.

**Bitcoin Core** is the reference implementation of Bitcoin, maintained as an open-source project on GitHub. It descends directly from the original client released by [Satoshi Nakamoto](../Satoshi_Nakamoto/) in January 2009.[^v01] The software was called "Bitcoin" and later "Bitcoin-Qt", and was renamed **Bitcoin Core** in version 0.9.0.[^rn-0-9-0]

This article lists every major release up to the current one, as of October 2026. Each release's own notes are the source for its row.

## Major releases

The table lists the first release of each major version. Maintenance (point) releases are omitted, except where they replaced an unannounced major release. Dates come from each release's page on bitcoincore.org or bitcoin.org, or from the original announcement.[^dates]

**Policy** here means the node's default relay and mempool rules, which can change without a fork. See [Mempool](../Mempool/) for detail.

| Version | Date | Headline changes | Notable policy changes | Notes |
|---|---|---|---|---|
| 0.1 | 9 Jan 2009 | First release, by Satoshi Nakamoto. Windows only; described as alpha and experimental.[^v01] | — | [Announcement][v01] |
| 0.2 | 17 Dec 2009 | Linux version; multi-processor coin generation; Tor proxy support; Windows installer.[^v02] | — | [Announcement][v02] |
| 0.3 | 6 Jul 2010 | Command-line and JSON-RPC control; daemon without GUI (`bitcoind`); Mac OS X version; faster hashing.[^v03] | — | [Announcement][v03] |
| 0.4.0 | 23 Sep 2011 | Wallet encryption.[^rn-0-4-0] | — | [Notes][rn-0.4.0] |
| 0.5.0 | 21 Nov 2011 | New graphical interface built on Qt.[^rn-0-5-0] | — | [Notes][rn-0.5.0] |
| 0.6.0 | 30 Mar 2012 | Pay-to-script-hash support (BIP 13, BIP 16); preliminary multisignature support; QR codes; message signing; faster initial sync.[^rn-0-6-0] | — | [Notes][rn-0.6.0] |
| 0.7.0 | 17 Sep 2012 | `getblocktemplate` (BIP 22); block version 2 with height in coinbase (BIP 34); `mempool` P2P message (BIP 35).[^rn-0-7-0] | — | [Notes][rn-0.7.0] |
| 0.8.0 | 19 Feb 2013 | LevelDB replaces Berkeley DB for block and transaction indexes; parallel signature checking; Bloom filter support.[^rn-0-8-0] | — | [Notes][rn-0.8.0] |
| 0.9.0 | 19 Mar 2014 | Renamed Bitcoin Core; `bitcoin-cli`; Autotools build system; transaction malleability fixes.[^rn-0-9-0] | Default relay fee lowered to 0.01 mBTC/kB; provably prunable `OP_RETURN` outputs.[^rn-0-9-0] | [Notes][rn-0.9.0] |
| 0.10.0 | 16 Feb 2015 | Headers-first synchronization; REST interface; watch-only wallets; consensus library.[^rn-0-10-0] | Mining and relay policy changes, including `prioritisetransaction` and version 3 block templates (BIP 66).[^rn-0-10-0] | [Notes][rn-0.10.0] |
| 0.11.0 | 12 Jul 2015 | Block file pruning; fee estimation changes; Tor stream isolation. Notes advise on low-fee transaction flooding.[^rn-0-11-0] | — | [Release][rel-0.11.0] |
| 0.12.0 | 23 Feb 2016 | Signature validation with libsecp256k1; ZMQ notifications; automatic Tor hidden services.[^rn-0-12-0] | Mempool size limit; opt-in replace-by-fee (BIP 125); priority mining off by default.[^rn-0-12-0] | [Release][rel-0.12.0] |
| 0.13.0 | 23 Aug 2016 | Compact blocks (BIP 152); HD wallet key generation; Segregated Witness code included but not usable on mainnet; internal miner removed.[^rn-0-13-0] | New `-bytespersigop` implementation.[^rn-0-13-0] | [Release][rel-0.13.0] |
| 0.14.0 | 8 Mar 2017 | Performance improvements; mempool retained across restarts; manual pruning; JSON-RPC named arguments.[^rn-0-14-0] | Minimum fee rate policy changes; priority estimation removed.[^rn-0-14-0] | [Release][rel-0.14.0] |
| 0.15.0 | 14 Sep 2017 | Multi-wallet support; fee estimation improvements; performance improvements.[^rn-0-15-0] | Coin age priority removed.[^rn-0-15-0] | [Release][rel-0.15.0] |
| 0.16.0 | 26 Feb 2018 | SegWit wallet; bech32 (`bc1…`) addresses (BIP 173); HD wallets by default; replace-by-fee on by default in the GUI; pruned-node signalling (BIP 159).[^rn-0-16-0] | — | [Release][rel-0.16.0] |
| 0.17.0 | 3 Oct 2018 | Partially signed transactions (BIP 174); dynamic wallet loading; partial spend avoidance.[^rn-0-17-0] | Miner block size option removed; dust relay fee may be set to zero.[^rn-0-17-0] | [Release][rel-0.17.0] |
| 0.18.0 | 2 May 2019 | Output descriptor RPCs; hardware wallet interaction sub-project; new PSBT RPCs.[^rn-0-18-0] | BIP 61 reject messages deprecated.[^rn-0-18-0] | [Release][rel-0.18.0] |
| 0.19.0.1 | 24 Nov 2019 | BIP 158 block filters; bech32 addresses by default in the GUI; `avoid_reuse` wallet flag. 0.19.0 was not announced.[^rn-0-19-0-1] | CPFP carve-out; Bloom filter serving off by default.[^rn-0-19-0-1] | [Release][rel-0.19.0.1] |
| 0.20.0 | 3 Jun 2020 | `-asmap` option for peer diversity.[^rn-0-20-0] | BIP 61 reject messages removed.[^rn-0-20-0] | [Release][rel-0.20.0] |
| 0.21.0 | 14 Jan 2021 | Signet; Taproot rules implemented without mainnet activation; experimental descriptor wallets using SQLite; Tor v3 addresses (BIP 155).[^rn-0-21-0] | Transaction announcements by wtxid (BIP 339).[^rn-0-21-0] | [Release][rel-0.21.0] |
| 22.0 | 13 Sep 2021 | First version without the leading "0."; I2P support; Tor v2 addresses ignored; Guix-built binaries.[^rn-22-0] | `MAX_STANDARD_SCRIPTSIG_SIZE` added to policy.[^rn-22-0] | [Release][rel-22.0] |
| 23.0 | 25 Apr 2022 | Descriptor wallets by default, including Taproot `tr()` descriptors; CJDNS support; tracepoints.[^rn-23-0] | Addresses no longer gossiped to inbound peers by default.[^rn-23-0] | [Release][rel-23.0] |
| 24.0.1 | 12 Dec 2022 | Experimental `migratewallet`; `sendall` RPC; Miniscript in `wsh()` descriptors.[^rn-24-0-1] | New `-mempoolfullrbf` option, off by default.[^rn-24-0-1] | [Release][rel-24.0.1] |
| 25.0 | 26 May 2023 | `scanblocks` RPC; Miniscript descriptor inference.[^rn-25-0] | Transactions of 65 non-witness bytes and above allowed.[^rn-25-0] | [Release][rel-25.0] |
| 26.0 | 6 Dec 2023 | Optional BIP 324 v2 encrypted transport; `loadtxoutset` for assumeutxo snapshots; Miniscript in Taproot descriptors.[^rn-26-0] | Experimental `submitpackage` RPC.[^rn-26-0] | [Release][rel-26.0] |
| 27.0 | 2 Apr 2024 | BIP 324 v2 transport on by default; libbitcoinconsensus deprecated.[^rn-27-0] | TRUC transaction policy on test networks only.[^rn-27-0] | [Release][rel-27.0] |
| 28.0 | 2 Oct 2024 | Testnet4 (BIP 94); JSON-RPC 2.0 support; libbitcoinconsensus removed.[^rn-28-0] | TRUC standard; one-parent-one-child package relay; Pay-to-Anchor; full-RBF by default.[^rn-28-0] | [Release][rel-28.0] |
| 29.0 | 14 Apr 2025 | Build system moved to CMake; UPnP support dropped.[^rn-29-0] | Ephemeral dust; `-mempoolfullrbf` option removed; orphan parents fetched from all announcing peers.[^rn-29-0] | [Release][rel-29.0] |
| 30.0 | 10 Oct 2025 | New `bitcoin` command; IPC mining interface; legacy Berkeley DB wallets can no longer be loaded, only migrated.[^rn-30-0] | `-datacarriersize` default 100,000; minimum relay feerate 0.1 sat/vB; limit of 2,500 legacy signature operations.[^rn-30-0] | [Release][rel-30.0] |
| 31.0 | 19 Apr 2026 | Cluster mempool; optional private broadcast over Tor or I2P; new mempool cluster RPCs.[^rn-31-0] | Cluster limits replace ancestor and descendant limits; CPFP carve-out removed.[^rn-31-0] | [Release][rel-31.0] |

### Point releases that carried major changes

Some consensus changes shipped in point releases, not major ones:

- **0.13.1** contained the Segregated Witness soft fork. 0.13.0 had included the code without mainnet activation.[^rn-0-13-0][^rn-0-13-1]
- **0.21.1** added Taproot's "Speedy Trial" activation. 0.21.0 had implemented the rules without activation.[^rn-0-21-0][^rel-0-21-1]

### Date discrepancies

The release pages on bitcoincore.org for 0.18.0 and 0.19.0.1 give their dates as 2018. The project's dated announcement posts, and bitcoin.org, give 2019. The table uses 2019.[^ann-0-18][^ann-0-19]

bitcoincore.org's lifecycle table also lists some release dates a few days or weeks away from the release pages. Examples are 25.x (18 May 2023) and 27.x (16 April 2024). The table above uses each release's own page.[^lifecycle]

## Release cycle

The project aims to publish a major release every six to seven months.[^lifecycle] Each major version is followed by maintenance releases that fix bugs and security issues.[^lifecycle]

The project maintains the latest three major versions. When a new major version ships, the oldest maintained one reaches **end of life** (EOL).[^lifecycle] The bar for backporting a fix rises as a version ages. EOL versions generally receive no security fixes.[^lifecycle]

As of October 2026, the maintained versions are 31.x, 30.x and 29.x. 28.x reached end of life on 19 April 2026, when 31.0 was released.[^lifecycle] Release candidates are marked with a suffix such as `rc1`.[^lifecycle]

## Versioning

### The scheme before 22.0

Until 2021, every Bitcoin Core version began with `0.`, as in 0.21.0. In practice, the second number marked a major release. The third marked a maintenance release.[^pr-20223]

### Why 0.21 became 22.0

Pull request #20223, by Ava Chow, dropped the leading zero. It was merged on 20 November 2020 and first shipped in 22.0.[^pr-20223][^rn-22-0] The pull request explains the change:[^pr-20223]

- The old minor number, already treated as the major version, became the major version.
- The old revision number, used as the minor version, became the minor version.
- The variable names in the code now match how the project describes releases.

The author also wrote that the change skips the recurring requests for a "1.0" release, going "straight to version 22.0".[^pr-20223] Versions now take the form `MAJOR.MINOR`, such as 30.0 for a major release and 30.1 for a maintenance release.[^lifecycle]

## Maintainers over time

**Maintainers** are contributors with permission to merge changes into the main repository. In December 2014, the repository gained a script that checks merge commits are signed by keys in its `contrib/verify-commits/trusted-keys` file.[^tk-history] That file's history is the primary record of who has held merge rights since.

### Satoshi Nakamoto and Gavin Andresen (2009–2014)

Satoshi Nakamoto wrote and announced versions 0.1, 0.2 and 0.3.[^v01][^v02][^v03] Nakamoto chose Gavin Andresen as successor in late 2010. In December 2010, Andresen posted that, "with Satoshi's blessing", he would start "doing more active project management".[^mittr]

### Wladimir van der Laan (2014–2023)

Wladimir van der Laan took over from Andresen as lead maintainer in April 2014.[^mittr] In a January 2021 post, "The widening gyre", he said he had become "somewhat of a centralized bottleneck". He announced he would delegate his tasks and move to "a background role".[^laanwj-2021] He removed his own key from the trusted-keys file in February 2023.[^tk-laanwj]

### Maintainers since 2014

Merge rights have been spread across several maintainers throughout. The trusted-keys history records these changes:[^tk-history]

| Date | Change |
|---|---|
| Nov 2015 | Jonas Schnelli added |
| Apr 2016 | MarcoFalke added |
| Dec 2018 | Samuel Dobson added |
| Jun 2019 | Michael Ford (fanquake) added |
| Apr 2021 | Hennadii Stepanov added |
| Dec 2021 | Ava Chow added |
| May 2022 | Keys no longer used for merging removed, including Jonas Schnelli's and Samuel Dobson's |
| Jul 2022 | glozow added; Pieter Wuille's key removed |
| Feb 2023 | Wladimir van der Laan's and MarcoFalke's keys removed |
| May 2023 | Ryan Ofsky added |
| Jan 2026 | sedited added; glozow's key removed |

As of October 2026, the file holds five keys. They belong to Michael Ford, Hennadii Stepanov, Ava Chow, Ryan Ofsky and sedited.[^tk-current]

## See also

- [Mempool](../Mempool/)
- [Taproot](../Taproot/)
- [Segregated Witness](../Segregated_Witness/)
- [Bitcoin node](../Bitcoin_node/)
- [BIP index](../BIP_index/)
- [How to contribute to Bitcoin](../how-to-contribute-to-bitcoin/)

[v01]: https://www.mail-archive.com/cryptography@metzdowd.com/msg10142.html
[v02]: https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/29/
[v03]: https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/30/
[rn-0.4.0]: https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.4.0.md
[rn-0.5.0]: https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.5.0.md
[rn-0.6.0]: https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.6.0.md
[rn-0.7.0]: https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.7.0.md
[rn-0.8.0]: https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.8.0.md
[rn-0.9.0]: https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.9.0.md
[rn-0.10.0]: https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.10.0.md
[rel-0.11.0]: https://bitcoincore.org/en/releases/0.11.0/
[rel-0.12.0]: https://bitcoincore.org/en/releases/0.12.0/
[rel-0.13.0]: https://bitcoincore.org/en/releases/0.13.0/
[rel-0.14.0]: https://bitcoincore.org/en/releases/0.14.0/
[rel-0.15.0]: https://bitcoincore.org/en/releases/0.15.0/
[rel-0.16.0]: https://bitcoincore.org/en/releases/0.16.0/
[rel-0.17.0]: https://bitcoincore.org/en/releases/0.17.0/
[rel-0.18.0]: https://bitcoincore.org/en/releases/0.18.0/
[rel-0.19.0.1]: https://bitcoincore.org/en/releases/0.19.0.1/
[rel-0.20.0]: https://bitcoincore.org/en/releases/0.20.0/
[rel-0.21.0]: https://bitcoincore.org/en/releases/0.21.0/
[rel-22.0]: https://bitcoincore.org/en/releases/22.0/
[rel-23.0]: https://bitcoincore.org/en/releases/23.0/
[rel-24.0.1]: https://bitcoincore.org/en/releases/24.0.1/
[rel-25.0]: https://bitcoincore.org/en/releases/25.0/
[rel-26.0]: https://bitcoincore.org/en/releases/26.0/
[rel-27.0]: https://bitcoincore.org/en/releases/27.0/
[rel-28.0]: https://bitcoincore.org/en/releases/28.0/
[rel-29.0]: https://bitcoincore.org/en/releases/29.0/
[rel-30.0]: https://bitcoincore.org/en/releases/30.0/
[rel-31.0]: https://bitcoincore.org/en/releases/31.0/

## References

[^dates]: Release dates from [bitcoincore.org/en/releases](https://bitcoincore.org/en/releases/) (0.11.0 onward) and the [bitcoin.org release pages](https://bitcoin.org/en/version-history) (0.4.0–0.10.0); 0.1–0.3 from the announcement emails cited in each row.
[^v01]: Nakamoto, Satoshi (9 January 2009). ["Bitcoin v0.1 released"](https://www.mail-archive.com/cryptography@metzdowd.com/msg10142.html). *Cryptography mailing list*.
[^v02]: Nakamoto, Satoshi (17 December 2009). ["Bitcoin 0.2 released"](https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/29/). *bitcoin-list*, archived by the Satoshi Nakamoto Institute.
[^v03]: Nakamoto, Satoshi (6 July 2010). ["Bitcoin 0.3 released!"](https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/30/). *bitcoin-list*, archived by the Satoshi Nakamoto Institute.
[^rn-0-4-0]: ["Bitcoin 0.4.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.4.0.md). *Bitcoin Core* repository. Released 23 September 2011 ([bitcoin.org](https://bitcoin.org/en/release/v0.4.0)).
[^rn-0-5-0]: ["Bitcoin 0.5.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.5.0.md). *Bitcoin Core* repository. Released 21 November 2011 ([bitcoin.org](https://bitcoin.org/en/release/v0.5.0)).
[^rn-0-6-0]: ["Bitcoin 0.6.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.6.0.md). *Bitcoin Core* repository. Released 30 March 2012 ([bitcoin.org](https://bitcoin.org/en/release/v0.6.0)).
[^rn-0-7-0]: ["Bitcoin 0.7.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.7.0.md). *Bitcoin Core* repository. Released 17 September 2012 ([bitcoin.org](https://bitcoin.org/en/release/v0.7.0)).
[^rn-0-8-0]: ["Bitcoin 0.8.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.8.0.md). *Bitcoin Core* repository. Released 19 February 2013 ([bitcoin.org](https://bitcoin.org/en/release/v0.8.0)).
[^rn-0-9-0]: ["Bitcoin Core 0.9.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.9.0.md). *Bitcoin Core* repository. Released 19 March 2014 ([bitcoin.org](https://bitcoin.org/en/release/v0.9.0)).
[^rn-0-10-0]: ["Bitcoin Core 0.10.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.10.0.md). *Bitcoin Core* repository. Released 16 February 2015 ([bitcoin.org](https://bitcoin.org/en/release/v0.10.0)).
[^rn-0-11-0]: ["Bitcoin Core 0.11.0 released"](https://bitcoincore.org/en/releases/0.11.0/). *bitcoincore.org*. 12 July 2015.
[^rn-0-12-0]: ["Bitcoin Core 0.12.0 released"](https://bitcoincore.org/en/releases/0.12.0/). *bitcoincore.org*. 23 February 2016.
[^rn-0-13-0]: ["Bitcoin Core 0.13.0 released"](https://bitcoincore.org/en/releases/0.13.0/). *bitcoincore.org*. 23 August 2016.
[^rn-0-13-1]: ["Bitcoin Core 0.13.1 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.13.1.md). *Bitcoin Core* repository.
[^rn-0-14-0]: ["Bitcoin Core 0.14.0 released"](https://bitcoincore.org/en/releases/0.14.0/). *bitcoincore.org*. 8 March 2017.
[^rn-0-15-0]: ["Bitcoin Core 0.15.0 released"](https://bitcoincore.org/en/releases/0.15.0/). *bitcoincore.org*. 14 September 2017.
[^rn-0-16-0]: ["Bitcoin Core 0.16.0 released"](https://bitcoincore.org/en/releases/0.16.0/). *bitcoincore.org*. 26 February 2018.
[^rn-0-17-0]: ["Bitcoin Core 0.17.0 released"](https://bitcoincore.org/en/releases/0.17.0/). *bitcoincore.org*. 3 October 2018.
[^rn-0-18-0]: ["Bitcoin Core 0.18.0 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.18.0.md). *Bitcoin Core* repository.
[^rn-0-19-0-1]: ["Bitcoin Core 0.19.0.1 release notes"](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.19.0.1.md). *Bitcoin Core* repository.
[^rn-0-20-0]: ["Bitcoin Core 0.20.0 released"](https://bitcoincore.org/en/releases/0.20.0/). *bitcoincore.org*. 3 June 2020.
[^rn-0-21-0]: ["Bitcoin Core 0.21.0 released"](https://bitcoincore.org/en/releases/0.21.0/). *bitcoincore.org*. 14 January 2021.
[^rel-0-21-1]: ["Bitcoin Core 0.21.1 released"](https://bitcoincore.org/en/releases/0.21.1/). *bitcoincore.org*. 1 May 2021.
[^rn-22-0]: ["Bitcoin Core 22.0 released"](https://bitcoincore.org/en/releases/22.0/). *bitcoincore.org*. 13 September 2021.
[^rn-23-0]: ["Bitcoin Core 23.0 released"](https://bitcoincore.org/en/releases/23.0/). *bitcoincore.org*. 25 April 2022.
[^rn-24-0-1]: ["Bitcoin Core 24.0.1 released"](https://bitcoincore.org/en/releases/24.0.1/). *bitcoincore.org*. 12 December 2022.
[^rn-25-0]: ["Bitcoin Core 25.0 released"](https://bitcoincore.org/en/releases/25.0/). *bitcoincore.org*. 26 May 2023.
[^rn-26-0]: ["Bitcoin Core 26.0 released"](https://bitcoincore.org/en/releases/26.0/). *bitcoincore.org*. 6 December 2023.
[^rn-27-0]: ["Bitcoin Core 27.0 released"](https://bitcoincore.org/en/releases/27.0/). *bitcoincore.org*. 2 April 2024.
[^rn-28-0]: ["Bitcoin Core 28.0 released"](https://bitcoincore.org/en/releases/28.0/). *bitcoincore.org*. 2 October 2024.
[^rn-29-0]: ["Bitcoin Core 29.0 released"](https://bitcoincore.org/en/releases/29.0/). *bitcoincore.org*. 14 April 2025.
[^rn-30-0]: ["Bitcoin Core 30.0 released"](https://bitcoincore.org/en/releases/30.0/). *bitcoincore.org*. 10 October 2025.
[^rn-31-0]: ["Bitcoin Core 31.0 released"](https://bitcoincore.org/en/releases/31.0/). *bitcoincore.org*. 19 April 2026.
[^ann-0-18]: ["Bitcoin Core 0.18.0 released"](https://bitcoincore.org/en/2019/05/02/release-0.18.0/). *bitcoincore.org* announcement, 2 May 2019. The [release page](https://bitcoincore.org/en/releases/0.18.0/) states 2 May 2018.
[^ann-0-19]: ["Bitcoin Core 0.19.0 released"](https://bitcoincore.org/en/2019/11/24/release-0.19.0/). *bitcoincore.org* announcement, 24 November 2019. The [release page](https://bitcoincore.org/en/releases/0.19.0.1/) states 24 November 2018.
[^lifecycle]: ["Software life-cycle"](https://bitcoincore.org/en/lifecycle/). *bitcoincore.org*. Retrieved October 2026.
[^pr-20223]: Chow, Ava (merged 20 November 2020). ["build: Drop the leading 0 from the version number" (PR #20223)](https://github.com/bitcoin/bitcoin/pull/20223). *Bitcoin Core* GitHub.
[^tk-history]: ["contrib/verify-commits/trusted-keys" commit history](https://github.com/bitcoin/bitcoin/commits/master/contrib/verify-commits/trusted-keys). *Bitcoin Core* repository. First added 20 December 2014.
[^tk-laanwj]: van der Laan, Wladimir (7 February 2023). ["Remove laanwj from trusted-keys"](https://github.com/bitcoin/bitcoin/commit/aafa5e945c). *Bitcoin Core* commit.
[^tk-current]: ["contrib/verify-commits/trusted-keys"](https://github.com/bitcoin/bitcoin/blob/master/contrib/verify-commits/trusted-keys). *Bitcoin Core* repository, as of October 2026. Key owners identified from the commits that added each key.
[^mittr]: Simonite, Tom (15 August 2014). ["The Man Who Really Built Bitcoin"](https://www.technologyreview.com/2014/08/15/12784/the-man-who-really-built-bitcoin/). *MIT Technology Review*.
[^laanwj-2021]: van der Laan, Wladimir (21 January 2021). ["The widening gyre"](https://laanwj.github.io/2021/01/21/decentralize.html). *laanwj.github.io*.
