---
title: BIP index
description: Sortable index of every Bitcoin Improvement Proposal in the bitcoin/bips repository, grouped by status, with links to SplytWiki pages
aliases: [BIP list, List of BIPs, Bitcoin Improvement Proposals]
categories: [Bitcoin, BIPs]
updated: 2026-10-20
last_modified: 2026-10-20
has_toc: true
---

> **In plain terms:** A Bitcoin Improvement Proposal (BIP) is a numbered design document for Bitcoin. This page lists every BIP in the official repository. Click a column heading to sort a table.

A **Bitcoin Improvement Proposal** (BIP) is a design document that describes a feature, process or piece of information for Bitcoin.[^bip3] BIPs are published in the bitcoin/bips repository on GitHub.[^readme]

This index lists all 213 BIPs in that repository as of commit `927b6de9915c` (2 October 2026). Each table is grouped by status and can be sorted by any column.

## The BIP process

### Publication is not approval

Authors first discuss an idea on the bitcoindev mailing list. They open a pull request once the draft is well advanced. A BIP editor assigns the number; authors never choose their own.[^readme]

The repository describes itself as a publication medium and archive. A published BIP has met formal criteria. That does not mean it is a good idea, has consensus, or will be adopted.[^readme] Adoption rests with Bitcoin's users.[^readme]

### From BIP-2 to BIP-3

For most of the repository's history, the process was defined by [BIP-2](#bip-2), assigned in 2016.[^bip2] BIP-2 used a larger set of statuses: Draft, Proposed, Final, Active, Deferred, Rejected, Withdrawn, Replaced and Obsolete.[^bip2] It set objective adoption criteria for reaching Final. For example, a soft fork needed a clear miner majority.[^bip2]

[BIP-3](#bip-3) replaced BIP-2 with a streamlined process.[^bip3] BIP-2 now has status Closed.[^bip2] Under BIP-3, existing BIPs were moved to the new status values.[^bip3] The **Created** header was also renamed **Assigned**: the date the number was assigned.[^bip3] The **Created** column below shows that date.

### Status meanings (BIP-3)

| Status | Meaning |
|---|---|
| Draft | Assigned a number and merged; still being developed by its authors.[^bip3] |
| Complete | The authors consider it finished and recommend adoption. Specification BIPs need a reference implementation and test vectors first. Most successful Informational BIPs stop here.[^bip3] |
| Deployed | Settled, with evidence of active use, such as mainnet software releases or a soft fork's activation. Considered final.[^bip3] |
| Closed | Of historical interest only; not actively worked on, promoted or used. BIPs are never deleted.[^bip3] |

### Types and layers

BIP-3 defines three types.[^bip3] A **Specification** BIP sets technical rules that implementations can comply with. An **Informational** BIP gives guidance or describes a design issue. A **Process** BIP describes a process around Bitcoin, such as the BIP process itself.[^bip3]

The **Layer** column follows [BIP-123](#bip-123): Consensus, Peer Services, API/RPC or Applications.[^bip123] Process and Informational BIPs often have no layer.[^readme]

### SplytWiki links

The last column links to a SplytWiki article where one exists. Otherwise it links to the BIP's text in the repository. Other articles link to a BIP's row here, using anchors such as `#bip-341`.

## Summary

| Status | BIPs |
|---|---|
| [Deployed](#deployed) | 78 |
| [Complete](#complete) | 22 |
| [Draft](#draft) | 56 |
| [Closed](#closed) | 57 |
| **Total** | **213** |

## Deployed

| Number | Title | Type | Status | Layer | Authors | Created | SplytWiki link |
|---|---|---|---|---|---|---|---|
| <span id="bip-3"></span>3 | Updated BIP Process | Process | Deployed | — | Murch | 2025-01-09 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0003.md) |
| <span id="bip-9"></span>9 | Version bits with timeout and delay | Informational | Deployed | — | Pieter Wuille, Peter Todd, Greg Maxwell, Rusty Russell | 2015-10-04 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki) |
| <span id="bip-11"></span>11 | M-of-N Standard Transactions | Specification | Deployed | Applications | Gavin Andresen | 2011-10-18 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0011.mediawiki) |
| <span id="bip-13"></span>13 | Address Format for pay-to-script-hash | Specification | Deployed | Applications | Gavin Andresen | 2011-10-18 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0013.mediawiki) |
| <span id="bip-14"></span>14 | Protocol Version and User Agent | Specification | Deployed | Peer Services | Amir Taaki, Patrick Strateman | 2011-11-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0014.mediawiki) |
| <span id="bip-16"></span>16 | Pay to Script Hash | Specification | Deployed | Consensus (soft fork) | Gavin Andresen | 2012-01-03 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki) |
| <span id="bip-22"></span>22 | getblocktemplate - Fundamentals | Specification | Deployed | API/RPC | Luke Dashjr | 2012-02-28 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki) |
| <span id="bip-23"></span>23 | getblocktemplate - Pooled Mining | Specification | Deployed | API/RPC | Luke Dashjr | 2012-02-28 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0023.mediawiki) |
| <span id="bip-30"></span>30 | Duplicate transactions | Specification | Deployed | Consensus (soft fork) | Pieter Wuille | 2012-02-22 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki) |
| <span id="bip-31"></span>31 | Pong message | Specification | Deployed | Peer Services | Mike Hearn | 2012-04-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0031.mediawiki) |
| <span id="bip-32"></span>32 | Hierarchical Deterministic Wallets | Informational | Deployed | Applications | Pieter Wuille | 2012-02-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) |
| <span id="bip-34"></span>34 | Block v2, Height in Coinbase | Specification | Deployed | Consensus (soft fork) | Gavin Andresen | 2012-07-06 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki) |
| <span id="bip-35"></span>35 | mempool message | Specification | Deployed | Peer Services | Jeff Garzik | 2012-08-16 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0035.mediawiki) |
| <span id="bip-37"></span>37 | Connection Bloom filtering | Specification | Deployed | Peer Services | Mike Hearn, Matt Corallo | 2012-10-24 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki) |
| <span id="bip-38"></span>38 | Passphrase-protected private key | Specification | Deployed | Applications | Mike Caldwell, Aaron Voisine | 2012-11-20 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki) |
| <span id="bip-39"></span>39 | Mnemonic code for generating deterministic keys | Specification | Deployed | Applications | Marek Palatinus, Pavol Rusnak, Aaron Voisine, Sean Bowe | 2013-09-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) |
| <span id="bip-42"></span>42 | A finite monetary supply for Bitcoin | Specification | Deployed | Consensus (soft fork) | Pieter Wuille | 2014-04-01 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki) |
| <span id="bip-43"></span>43 | Purpose Field for Deterministic Wallets | Specification | Deployed | Applications | Marek Palatinus, Pavol Rusnak | 2014-04-24 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0043.mediawiki) |
| <span id="bip-44"></span>44 | Multi-Account Hierarchy for Deterministic Wallets | Specification | Deployed | Applications | Marek Palatinus, Pavol Rusnak | 2014-04-24 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) |
| <span id="bip-47"></span>47 | Reusable Payment Codes for Hierarchical Deterministic Wallets | Specification | Deployed | Applications | Justus Ranvier | 2015-04-24 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0047.mediawiki) |
| <span id="bip-48"></span>48 | Multi-Script Hierarchy for Multi-Sig Wallets | Specification | Deployed | Applications | Fontaine | 2020-12-16 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0048.mediawiki) |
| <span id="bip-49"></span>49 | Derivation scheme for P2WPKH-nested-in-P2SH based accounts | Specification | Deployed | Applications | Daniel Weigl | 2016-05-19 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki) |
| <span id="bip-50"></span>50 | March 2013 Chain Fork Post-Mortem | Informational | Deployed | — | Gavin Andresen | 2013-03-20 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki) |
| <span id="bip-61"></span>61 | Reject P2P message | Specification | Deployed | Peer Services | Gavin Andresen | 2014-06-18 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0061.mediawiki) |
| <span id="bip-65"></span>65 | OP_CHECKLOCKTIMEVERIFY | Specification | Deployed | Consensus (soft fork) | Peter Todd | 2014-10-01 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki) |
| <span id="bip-66"></span>66 | Strict DER signatures | Specification | Deployed | Consensus (soft fork) | Pieter Wuille | 2015-01-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki) |
| <span id="bip-68"></span>68 | Relative lock-time using consensus-enforced sequence numbers | Specification | Deployed | Consensus (soft fork) | Mark Friedenbach, BtcDrak, Nicolas Dorier, kinoshitajona | 2015-05-28 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki) |
| <span id="bip-70"></span>70 | Payment Protocol | Specification | Deployed | Applications | Gavin Andresen, Mike Hearn | 2013-07-29 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki) |
| <span id="bip-71"></span>71 | Payment Protocol MIME types | Specification | Deployed | Applications | Gavin Andresen | 2013-07-29 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0071.mediawiki) |
| <span id="bip-72"></span>72 | bitcoin: uri extensions for Payment Protocol | Specification | Deployed | Applications | Gavin Andresen | 2013-07-29 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0072.mediawiki) |
| <span id="bip-73"></span>73 | Use "Accept" header for response type negotiation with Payment Request URLs | Specification | Deployed | Applications | Stephen Pair | 2013-08-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0073.mediawiki) |
| <span id="bip-75"></span>75 | Out of Band Address Exchange using Payment Protocol Encryption | Specification | Deployed | Applications | Justin Newton, Matt David, Aaron Voisine, James MacWhyte | 2015-11-20 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0075.mediawiki) |
| <span id="bip-78"></span>78 | A Simple Payjoin Proposal | Specification | Deployed | Applications | Nicolas Dorier | 2019-05-01 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki) |
| <span id="bip-84"></span>84 | Derivation scheme for P2WPKH based accounts | Specification | Deployed | Applications | Pavol Rusnak | 2017-12-28 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki) |
| <span id="bip-85"></span>85 | Deterministic Entropy From BIP32 Keychains | Informational | Deployed | Applications | Ethan Kosakovsky, Aneesh Karve | 2020-03-20 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0085.mediawiki) |
| <span id="bip-86"></span>86 | Key Derivation for Single Key P2TR Outputs | Specification | Deployed | Applications | Ava Chow | 2021-06-22 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0086.mediawiki) |
| <span id="bip-89"></span>89 | Chain Code Delegation | Specification | Deployed | Applications | Jesse Posner, Jurvis Tan | 2025-12-03 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0089.mediawiki) |
| <span id="bip-90"></span>90 | Buried Deployments | Informational | Deployed | — | Suhas Daftuar | 2016-11-08 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0090.mediawiki) |
| <span id="bip-91"></span>91 | Reduced threshold Segwit MASF | Specification | Deployed | Consensus (soft fork) | James Hilliard | 2017-05-22 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki) |
| <span id="bip-94"></span>94 | Testnet 4 | Specification | Deployed | Applications | Fabian Jahr | 2024-05-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0094.mediawiki) |
| <span id="bip-111"></span>111 | NODE_BLOOM service bit | Specification | Deployed | Peer Services | Matt Corallo, Peter Todd | 2015-08-20 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0111.mediawiki) |
| <span id="bip-112"></span>112 | CHECKSEQUENCEVERIFY | Specification | Deployed | Consensus (soft fork) | BtcDrak, Mark Friedenbach, Eric Lombrozo | 2015-08-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki) |
| <span id="bip-113"></span>113 | Median time-past as endpoint for lock-time calculations | Specification | Deployed | Consensus (soft fork) | Thomas Kerin, Mark Friedenbach | 2015-08-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0113.mediawiki) |
| <span id="bip-123"></span>123 | BIP Classification | Process | Deployed | — | Eric Lombrozo | 2015-08-26 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0123.mediawiki) |
| <span id="bip-125"></span>125 | Opt-in Full Replace-by-Fee Signaling | Specification | Deployed | Applications | David A. Harding, Peter Todd | 2015-12-04 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki) |
| <span id="bip-130"></span>130 | sendheaders message | Specification | Deployed | Peer Services | Suhas Daftuar | 2015-05-08 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0130.mediawiki) |
| <span id="bip-133"></span>133 | feefilter message | Specification | Deployed | Peer Services | Alex Morcos | 2016-02-13 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0133.mediawiki) |
| <span id="bip-137"></span>137 | Signatures of Messages using Private Keys | Specification | Deployed | Applications | Christopher Gilliard | 2019-02-16 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0137.mediawiki) |
| <span id="bip-141"></span>141 | Segregated Witness (Consensus layer) | Specification | Deployed | Consensus (soft fork) | Eric Lombrozo, Johnson Lau, Pieter Wuille | 2015-12-21 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki) |
| <span id="bip-143"></span>143 | Transaction Signature Verification for Version 0 Witness Program | Specification | Deployed | Consensus (soft fork) | Johnson Lau, Pieter Wuille | 2016-01-03 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki) |
| <span id="bip-144"></span>144 | Segregated Witness (Peer Services) | Specification | Deployed | Peer Services | Eric Lombrozo, Pieter Wuille | 2016-01-08 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0144.mediawiki) |
| <span id="bip-145"></span>145 | getblocktemplate Updates for Segregated Witness | Specification | Deployed | API/RPC | Luke Dashjr | 2016-01-30 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0145.mediawiki) |
| <span id="bip-147"></span>147 | Dealing with dummy stack element malleability | Specification | Deployed | Consensus (soft fork) | Johnson Lau | 2016-09-02 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0147.mediawiki) |
| <span id="bip-148"></span>148 | Mandatory activation of segwit deployment | Specification | Deployed | Consensus (soft fork) | Shaolin Fry | 2017-03-12 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki) |
| <span id="bip-152"></span>152 | Compact Block Relay | Specification | Deployed | Peer Services | Matt Corallo | 2016-04-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki) |
| <span id="bip-155"></span>155 | addrv2 message | Specification | Deployed | Peer Services | Wladimir J. van der Laan | 2019-02-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0155.mediawiki) |
| <span id="bip-157"></span>157 | Client Side Block Filtering | Specification | Deployed | Peer Services | Olaoluwa Osuntokun, Alex Akselrod, Jim Posen | 2017-05-24 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki) |
| <span id="bip-158"></span>158 | Compact Block Filters for Light Clients | Specification | Deployed | Peer Services | Olaoluwa Osuntokun, Alex Akselrod | 2017-05-24 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki) |
| <span id="bip-159"></span>159 | NODE_NETWORK_LIMITED service bit | Specification | Deployed | Peer Services | Jonas Schnelli | 2017-05-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0159.mediawiki) |
| <span id="bip-173"></span>173 | Base32 address format for native v0-16 witness outputs | Informational | Deployed | Applications | Pieter Wuille, Greg Maxwell | 2017-03-20 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki) |
| <span id="bip-174"></span>174 | Partially Signed Bitcoin Transaction Format | Specification | Deployed | Applications | Ava Chow | 2017-07-12 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki) |
| <span id="bip-324"></span>324 | Version 2 P2P Encrypted Transport Protocol | Specification | Deployed | Peer Services | Dhruv Mehta, Tim Ruffing, Jonas Schnelli, Pieter Wuille | 2019-03-08 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0324.mediawiki) |
| <span id="bip-327"></span>327 | MuSig2 for BIP340-compatible Multi-Signatures | Informational | Deployed | — | Jonas Nick, Tim Ruffing, Elliott Jin | 2022-03-22 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0327.mediawiki) |
| <span id="bip-339"></span>339 | WTXID-based transaction relay | Specification | Deployed | Peer Services | Suhas Daftuar | 2020-02-03 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0339.mediawiki) |
| <span id="bip-340"></span>340 | Schnorr Signatures for secp256k1 | Specification | Deployed | — | Pieter Wuille, Jonas Nick, Tim Ruffing | 2020-01-19 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki) |
| <span id="bip-341"></span>341 | Taproot: SegWit version 1 spending rules | Specification | Deployed | Consensus (soft fork) | Pieter Wuille, Jonas Nick, Anthony Towns | 2020-01-19 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki) |
| <span id="bip-342"></span>342 | Validation of Taproot Scripts | Specification | Deployed | Consensus (soft fork) | Pieter Wuille, Jonas Nick, Anthony Towns | 2020-01-19 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki) |
| <span id="bip-350"></span>350 | Bech32m format for v1+ witness addresses | Specification | Deployed | Applications | Pieter Wuille | 2020-12-16 | [BIP-350](../BIP-350/) |
| <span id="bip-370"></span>370 | PSBT Version 2 | Specification | Deployed | Applications | Ava Chow | 2021-01-14 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0370.mediawiki) |
| <span id="bip-371"></span>371 | Taproot Fields for PSBT | Specification | Deployed | Applications | Ava Chow | 2021-06-21 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0371.mediawiki) |
| <span id="bip-380"></span>380 | Output Script Descriptors General Operation | Specification | Deployed | Applications | Pieter Wuille, Ava Chow | 2021-06-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki) |
| <span id="bip-381"></span>381 | Non-Segwit Output Script Descriptors | Specification | Deployed | Applications | Pieter Wuille, Ava Chow | 2021-06-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0381.mediawiki) |
| <span id="bip-382"></span>382 | Segwit Output Script Descriptors | Specification | Deployed | Applications | Pieter Wuille, Ava Chow | 2021-06-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0382.mediawiki) |
| <span id="bip-383"></span>383 | Multisig Output Script Descriptors | Specification | Deployed | Applications | Pieter Wuille, Ava Chow | 2021-06-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0383.mediawiki) |
| <span id="bip-384"></span>384 | combo() Output Script Descriptors | Specification | Deployed | Applications | Pieter Wuille, Ava Chow | 2021-06-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0384.mediawiki) |
| <span id="bip-385"></span>385 | raw() and addr() Output Script Descriptors | Specification | Deployed | Applications | Pieter Wuille, Ava Chow | 2021-06-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0385.mediawiki) |
| <span id="bip-386"></span>386 | tr() Output Script Descriptors | Specification | Deployed | Applications | Pieter Wuille, Ava Chow | 2021-06-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0386.mediawiki) |
| <span id="bip-387"></span>387 | Tapscript Multisig Output Script Descriptors | Specification | Deployed | Applications | Pieter Wuille, Ava Chow | 2024-04-17 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0387.mediawiki) |
{: .sortable}

## Complete

| Number | Title | Type | Status | Layer | Authors | Created | SplytWiki link |
|---|---|---|---|---|---|---|---|
| <span id="bip-8"></span>8 | Version bits with lock-in by height | Informational | Complete | — | Shaolin Fry, Luke Dashjr | 2017-02-01 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0008.mediawiki) |
| <span id="bip-18"></span>18 | hashScriptCheck | Specification | Complete | Consensus (soft fork) | Luke Dashjr | 2012-01-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0018.mediawiki) |
| <span id="bip-45"></span>45 | Structure for Deterministic P2SH Multisignature Wallets | Specification | Complete | Applications | Manuel Araoz, Ryan X. Charles, Matias Alejo Garcia | 2014-04-25 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki) |
| <span id="bip-54"></span>54 | Consensus Cleanup | Specification | Complete | Consensus (soft fork) | Antoine Poinsot, Matt Corallo | 2025-04-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0054.md) |
| <span id="bip-67"></span>67 | Deterministic Pay-to-script-hash multi-signature addresses through public key sorting | Specification | Complete | Applications | Thomas Kerin, Jean-Pierre Rupp, Ruben de Vries | 2015-02-08 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0067.mediawiki) |
| <span id="bip-69"></span>69 | Lexicographical Indexing of Transaction Inputs and Outputs | Informational | Complete | Applications | Kristov Atlas | 2015-06-12 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0069.mediawiki) |
| <span id="bip-87"></span>87 | Hierarchy for Deterministic Multisig Wallets | Specification | Complete | Applications | Robert Spigler | 2020-03-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0087.mediawiki) |
| <span id="bip-88"></span>88 | Hierarchical Deterministic Path Templates | Informational | Complete | Applications | Dmitry Petukhov | 2020-06-23 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0088.mediawiki) |
| <span id="bip-127"></span>127 | Simple Proof-of-Reserves Transactions | Specification | Complete | Applications | Steven Roose | 2019-01-28 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0127.mediawiki) |
| <span id="bip-129"></span>129 | Bitcoin Secure Multisig Setup (BSMS) | Specification | Complete | Applications | Hugo Nguyen, Peter Gray, Marko Bencun, Aaron Chen, Rodolfo Novak | 2020-11-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0129.mediawiki) |
| <span id="bip-176"></span>176 | Bits Denomination | Informational | Complete | — | Jimmy Song | 2017-12-12 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0176.mediawiki) |
| <span id="bip-179"></span>179 | Name for payment recipient identifiers | Informational | Complete | — | Emil Engler, Luke Dashjr | 2019-10-17 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0179.mediawiki) |
| <span id="bip-321"></span>321 | URI Scheme | Specification | Complete | Applications | Matt Corallo | 2024-11-15 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0321.mediawiki) |
| <span id="bip-322"></span>322 | Generic Signed Message Format | Specification | Complete | Applications | Karl-Johan Alm, Oliver Gugger | 2018-09-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0322.mediawiki) |
| <span id="bip-325"></span>325 | Signet | Specification | Complete | Applications | Karl-Johan Alm, Anthony Towns | 2019-03-20 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0325.mediawiki) |
| <span id="bip-328"></span>328 | Derivation Scheme for MuSig2 Aggregate Keys | Informational | Complete | Applications | Ava Chow | 2024-06-04 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0328.mediawiki) |
| <span id="bip-347"></span>347 | OP_CAT in Tapscript | Specification | Complete | Consensus (soft fork) | Ethan Heilman, Armin Sabouri | 2023-12-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0347.mediawiki) |
| <span id="bip-352"></span>352 | Silent Payments | Specification | Complete | Applications | josibake, Ruben Somsen, Sebastian Falbesoner | 2023-03-09 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki) |
| <span id="bip-353"></span>353 | DNS Payment Instructions | Specification | Complete | Applications | Matt Corallo, Bastien Teinturier | 2024-02-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0353.mediawiki) |
| <span id="bip-373"></span>373 | MuSig2 PSBT Fields | Specification | Complete | Applications | Ava Chow | 2024-06-04 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0373.mediawiki) |
| <span id="bip-388"></span>388 | Wallet Policies for Descriptor Wallets | Specification | Complete | Applications | Salvatore Ingala | 2023-12-26 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0388.mediawiki) |
| <span id="bip-434"></span>434 | Peer Feature Negotiation | Specification | Complete | Peer Services | Anthony Towns | 2026-01-14 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0434.md) |
{: .sortable}

## Draft

| Number | Title | Type | Status | Layer | Authors | Created | SplytWiki link |
|---|---|---|---|---|---|---|---|
| <span id="bip-46"></span>46 | Address Scheme for Timelocked Fidelity Bonds | Specification | Draft | Applications | Chris Belcher, Thebora Kompanioni | 2022-04-01 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0046.mediawiki) |
| <span id="bip-53"></span>53 | Disallow 64-byte transactions | Specification | Draft | Consensus (soft fork) | Chris Stewart | 2025-04-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0053.mediawiki) |
| <span id="bip-77"></span>77 | Async Payjoin | Specification | Draft | Applications | Dan Gould, Yuval Kogman | 2023-08-08 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0077.md) |
| <span id="bip-93"></span>93 | codex32: Checksummed SSSS-aware BIP32 seeds | Informational | Draft | Applications | Leon Olsson Curr and Pearlwort Sneed, Andrew Poelstra | 2023-02-13 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0093.mediawiki) |
| <span id="bip-95"></span>95 | Testnet 5 | Specification | Draft | Applications | Pol Espinasa, Fabian Jahr | 2026-06-22 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0095.md) |
| <span id="bip-98"></span>98 | Fast Merkle Trees | Specification | Draft | Consensus (soft fork) | Mark Friedenbach, Kalle Alm, BtcDrak | 2017-08-24 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0098.mediawiki) |
| <span id="bip-116"></span>116 | MERKLEBRANCHVERIFY | Specification | Draft | Consensus (soft fork) | Mark Friedenbach, Kalle Alm, BtcDrak | 2017-08-25 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0116.mediawiki) |
| <span id="bip-117"></span>117 | Tail Call Execution Semantics | Specification | Draft | Consensus (soft fork) | Mark Friedenbach, Kalle Alm, BtcDrak | 2017-08-25 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0117.mediawiki) |
| <span id="bip-118"></span>118 | SIGHASH_ANYPREVOUT for Taproot Scripts | Specification | Draft | Consensus (soft fork) | Christian Decker, Anthony Towns | 2017-02-28 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0118.mediawiki) |
| <span id="bip-119"></span>119 | CHECKTEMPLATEVERIFY | Specification | Draft | Consensus (soft fork) | Jeremy Rubin | 2020-01-06 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0119.mediawiki) |
| <span id="bip-122"></span>122 | URI scheme for Blockchain references / exploration | Specification | Draft | Applications | Marco Pontello | 2015-08-29 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0122.mediawiki) |
| <span id="bip-126"></span>126 | Best Practices for Heterogeneous Input Script Transactions | Informational | Draft | — | Kristov Atlas | 2016-02-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0126.mediawiki) |
| <span id="bip-128"></span>128 | Timelock-Recovery Storage Format | Specification | Draft | Applications | Oren Z | 2026-02-05 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0128.mediawiki) |
| <span id="bip-136"></span>136 | Bech32 Encoded Tx Position References | Informational | Draft | Applications | Велеслав, Jonas Schnelli, Daniel Pape | 2017-07-09 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0136.mediawiki) |
| <span id="bip-138"></span>138 | Compact Encryption Scheme for Non-seed Wallet Data | Specification | Draft | Applications | Pyth | 2026-05-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0138.md) |
| <span id="bip-172"></span>172 | Define Bitcoin Subunits as Satoshis | Informational | Draft | Applications | OceanSlim | 2025-05-01 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0172.mediawiki) |
| <span id="bip-177"></span>177 | Redefine Bitcoin's Base Unit | Informational | Draft | — | John Carvalho | 2025-04-23 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0177.mediawiki) |
| <span id="bip-178"></span>178 | Version Extended WIF | Specification | Draft | Applications | Karl-Johan Alm | 2018-04-04 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0178.mediawiki) |
| <span id="bip-197"></span>197 | Hashed Time-Locked Collateral Contract | Specification | Draft | Applications | Matthew Black, Tony Cai | 2019-03-19 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0197.mediawiki) |
| <span id="bip-300"></span>300 | Hashrate Escrows (Consensus layer) | Specification | Draft | Consensus (soft fork) | Paul Sztorc, CryptAxe | 2017-08-14 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0300.mediawiki) |
| <span id="bip-301"></span>301 | Blind Merged Mining (Consensus layer) | Specification | Draft | Consensus (soft fork) | Paul Sztorc, CryptAxe | 2019-07-23 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0301.mediawiki) |
| <span id="bip-310"></span>310 | Stratum protocol extensions | Informational | Draft | Applications | Pavel Moravec, Jan Čapek | 2018-03-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0310.mediawiki) |
| <span id="bip-320"></span>320 | nVersion bits for general purpose use | Specification | Draft | — | BtcDrak | 2018-03-01 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0320.mediawiki) |
| <span id="bip-323"></span>323 | 24 nVersion bits for general purpose use | Specification | Draft | — | Matt Corallo | 2026-04-22 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0323.mediawiki) |
| <span id="bip-326"></span>326 | Anti-fee-sniping in taproot transactions | Informational | Draft | Applications | Chris Belcher | 2021-06-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0326.mediawiki) |
| <span id="bip-329"></span>329 | Wallet Labels Export Format | Informational | Draft | Applications | Craig Raw | 2022-08-23 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0329.mediawiki) |
| <span id="bip-330"></span>330 | Transaction announcements reconciliation | Specification | Draft | Peer Services | Gleb Naumenko, Pieter Wuille | 2019-09-25 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0330.mediawiki) |
| <span id="bip-331"></span>331 | Ancestor Package Relay | Specification | Draft | Peer Services | Gloria Zhao | 2022-08-08 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0331.mediawiki) |
| <span id="bip-332"></span>332 | Stale Tip Relay | Specification | Draft | Peer Services | Anthony Towns, w0xlt, Ram | 2026-08-21 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0332.md) |
| <span id="bip-337"></span>337 | Compressed Transactions | Specification | Draft | API/RPC | Tom Briar | 2024-02-01 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0337.mediawiki) |
| <span id="bip-346"></span>346 | OP_TXHASH | Specification | Draft | Consensus (soft fork) | Steven Roose, Brandon Black | 2024-04-24 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0346.md) |
| <span id="bip-348"></span>348 | CHECKSIGFROMSTACK | Specification | Draft | Consensus (soft fork) | Brandon Black, Jeremy Rubin | 2024-11-26 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0348.md) |
| <span id="bip-349"></span>349 | OP_INTERNALKEY | Specification | Draft | Consensus (soft fork) | Brandon Black, Jeremy Rubin | 2024-11-14 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0349.md) |
| <span id="bip-360"></span>360 | Pay-to-Merkle-Root (P2MR) | Specification | Draft | Consensus (soft fork) | Hunter Beast, Ethan Heilman, Isabel Foxen Duke | 2024-12-18 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki) |
| <span id="bip-361"></span>361 | Post Quantum Migration and Legacy Signature Sunset | Informational | Draft | Consensus (soft fork) | Jameson Lopp, Christian Papathanasiou, Ian Smith, Joe Ross, Steve Vaile, Pierre-Luc Dallaire-Demers | 2026-02-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki) |
| <span id="bip-372"></span>372 | Pay-to-contract tweak fields for PSBT | Specification | Draft | Applications | Maxim Orlovsky | 2022-01-16 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0372.mediawiki) |
| <span id="bip-374"></span>374 | Discrete Log Equality Proofs | Specification | Draft | Applications | Andrew Toth, Ruben Somsen, Sebastian Falbesoner | 2024-12-26 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0374.mediawiki) |
| <span id="bip-375"></span>375 | Sending Silent Payments with PSBTs | Specification | Draft | Applications | Andrew Toth, Ava Chow, josibake | 2025-01-08 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0375.mediawiki) |
| <span id="bip-376"></span>376 | Spending Silent Payment outputs with PSBTs | Specification | Draft | Applications | nymius | 2026-02-05 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0376.mediawiki) |
| <span id="bip-379"></span>379 | Miniscript | Specification | Draft | Applications | Pieter Wuille, Andrew Poelstra, Sanket Kanjalkar, Antoine Poinsot, Ava Chow | 2023-10-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0379.md) |
| <span id="bip-389"></span>389 | Multipath Descriptor Key Expressions | Specification | Draft | Applications | Ava Chow | 2022-07-26 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0389.mediawiki) |
| <span id="bip-390"></span>390 | musig() Descriptor Key Expression | Specification | Draft | Applications | Ava Chow | 2024-06-04 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0390.mediawiki) |
| <span id="bip-392"></span>392 | Silent Payment Output Script Descriptors | Specification | Draft | Applications | Craig Raw | 2026-02-06 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0392.mediawiki) |
| <span id="bip-393"></span>393 | Output Script Descriptor Annotations | Specification | Draft | Applications | Craig Raw | 2026-03-17 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0393.mediawiki) |
| <span id="bip-431"></span>431 | Topology Restrictions for Pinning | Informational | Draft | Applications | Gloria Zhao | 2024-01-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0431.mediawiki) |
| <span id="bip-433"></span>433 | Pay to Anchor (P2A) | Informational | Draft | Applications | Gregory Sanders | 2025-12-08 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0433.mediawiki) |
| <span id="bip-440"></span>440 | Varops Budget For Script Runtime Constraint | Specification | Draft | Consensus (soft fork) | Rusty Russell, Julian Moik | 2026-03-25 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0440.mediawiki) |
| <span id="bip-441"></span>441 | Restoration of disabled script (Tapleaf 0xC2) | Specification | Draft | Consensus (soft fork) | Rusty Russell, Julian Moik | 2026-03-25 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0441.mediawiki) |
| <span id="bip-442"></span>442 | OP_PAIRCOMMIT | Specification | Draft | Consensus (soft fork) | moonsettler, Brandon Black | 2024-12-09 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0442.md) |
| <span id="bip-443"></span>443 | OP_CHECKCONTRACTVERIFY | Specification | Draft | Consensus (soft fork) | Salvatore Ingala | 2025-05-08 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0443.mediawiki) |
| <span id="bip-446"></span>446 | OP_TEMPLATEHASH | Specification | Draft | Consensus (soft fork) | Gregory Sanders, Antoine Poinsot, Steven Roose | 2026-02-06 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0446.md) |
| <span id="bip-448"></span>448 | Taproot-native (Re)bindable Transactions | Specification | Draft | Consensus (soft fork) | Gregory Sanders, Antoine Poinsot, Steven Roose | 2026-03-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0448.md) |
| <span id="bip-449"></span>449 | OP_TWEAKADD - x-only key tweak addition | Specification | Draft | Consensus (soft fork) | Jeremy Rubin | 2026-03-05 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0449.md) |
| <span id="bip-450"></span>450 | Formosa—Seed encoding by themed mnemonic stories | Specification | Draft | Applications | Yuri S Villas Boas, André Fidencio Gonçalves | 2026-05-15 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0450.mediawiki) |
| <span id="bip-451"></span>451 | Dust UTXO Disposal Protocol | Specification | Draft | Applications | bubb1es, haris | 2026-04-28 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0451.md) |
| <span id="bip-461"></span>461 | Deterministic ECDSA Signatures | Specification | Draft | Applications | Liam Gilligan | 2026-08-12 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0461.md) |
{: .sortable}

## Closed

| Number | Title | Type | Status | Layer | Authors | Created | SplytWiki link |
|---|---|---|---|---|---|---|---|
| <span id="bip-1"></span>1 | BIP Purpose and Guidelines | Process | Closed | — | Amir Taaki | 2011-09-19 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki) |
| <span id="bip-2"></span>2 | BIP process, revised | Process | Closed | — | Luke Dashjr | 2016-02-03 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki) |
| <span id="bip-10"></span>10 | Multi-Sig Transaction Distribution | Informational | Closed | Applications | Alan Reiner | 2011-10-28 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0010.mediawiki) |
| <span id="bip-12"></span>12 | OP_EVAL | Specification | Closed | Consensus (soft fork) | Gavin Andresen | 2011-10-18 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0012.mediawiki) |
| <span id="bip-15"></span>15 | Aliases | Specification | Closed | Applications | Amir Taaki | 2011-12-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0015.mediawiki) |
| <span id="bip-17"></span>17 | OP_CHECKHASHVERIFY (CHV) | Specification | Closed | Consensus (soft fork) | Luke Dashjr | 2012-01-18 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0017.mediawiki) |
| <span id="bip-19"></span>19 | M-of-N Standard Transactions (Low SigOp) | Specification | Closed | Applications | Luke Dashjr | 2012-01-30 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0019.mediawiki) |
| <span id="bip-20"></span>20 | URI Scheme | Specification | Closed | Applications | Luke Dashjr | 2011-01-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0020.mediawiki) |
| <span id="bip-21"></span>21 | URI Scheme | Specification | Closed | Applications | Nils Schneider, Matt Corallo | 2012-01-29 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) |
| <span id="bip-33"></span>33 | Stratized Nodes | Specification | Closed | Peer Services | Amir Taaki | 2012-05-15 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0033.mediawiki) |
| <span id="bip-36"></span>36 | Custom Services | Specification | Closed | Peer Services | Stefan Thomas | 2012-08-03 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0036.mediawiki) |
| <span id="bip-52"></span>52 | Durable, Low Energy Bitcoin PoW | Specification | Closed | Consensus (hard fork) | Michael Dubrovsky, Bogdan Penkovsky | 2021-05-13 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0052.mediawiki) |
| <span id="bip-60"></span>60 | Fixed Length "version" Message (Relay-Transactions Field) | Specification | Closed | Peer Services | Amir Taaki | 2013-06-16 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0060.mediawiki) |
| <span id="bip-62"></span>62 | Dealing with malleability | Specification | Closed | Consensus (soft fork) | Pieter Wuille | 2014-03-12 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki) |
| <span id="bip-64"></span>64 | getutxo message | Specification | Closed | Peer Services | Mike Hearn | 2014-06-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0064.mediawiki) |
| <span id="bip-74"></span>74 | Allow zero value OP_RETURN in Payment Protocol | Specification | Closed | Applications | Toby Padilla | 2016-01-29 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0074.mediawiki) |
| <span id="bip-79"></span>79 | Bustapay :: a practical coinjoin protocol | Informational | Closed | Applications | Ryan Havar | 2018-10-05 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0079.mediawiki) |
| <span id="bip-80"></span>80 | Hierarchy for Non-Colored Voting Pool Deterministic Multisig Wallets | Informational | Closed | — | Justus Ranvier, Jimmy Song | 2014-08-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0080.mediawiki) |
| <span id="bip-81"></span>81 | Hierarchy for Colored Voting Pool Deterministic Multisig Wallets | Informational | Closed | — | Justus Ranvier, Jimmy Song | 2014-08-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0081.mediawiki) |
| <span id="bip-83"></span>83 | Dynamic Hierarchical Deterministic Key Trees | Specification | Closed | Applications | Eric Lombrozo | 2015-11-16 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0083.mediawiki) |
| <span id="bip-99"></span>99 | Motivation and deployment of consensus rule changes ([soft/hard]forks) | Informational | Closed | — | Jorge Timón | 2015-06-20 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0099.mediawiki) |
| <span id="bip-100"></span>100 | Dynamic maximum block size by miner vote | Specification | Closed | Consensus (hard fork) | Jeff Garzik, Tom Harding, Dagur Valberg Johannsson | 2015-06-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0100.mediawiki) |
| <span id="bip-101"></span>101 | Increase maximum block size | Specification | Closed | Consensus (hard fork) | Gavin Andresen | 2015-06-22 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0101.mediawiki) |
| <span id="bip-102"></span>102 | Block size increase to 2MB | Specification | Closed | Consensus (hard fork) | Jeff Garzik | 2015-06-23 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0102.mediawiki) |
| <span id="bip-103"></span>103 | Block size following technological growth | Specification | Closed | Consensus (hard fork) | Pieter Wuille | 2015-07-21 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0103.mediawiki) |
| <span id="bip-104"></span>104 | 'Block75' - Max block size like difficulty | Specification | Closed | Consensus (hard fork) | t.khan | 2017-01-13 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0104.mediawiki) |
| <span id="bip-105"></span>105 | Consensus based block size retargeting algorithm | Specification | Closed | Consensus (hard fork) | BtcDrak | 2015-08-21 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0105.mediawiki) |
| <span id="bip-106"></span>106 | Dynamically Controlled Bitcoin Block Size Max Cap | Specification | Closed | Consensus (hard fork) | Upal Chakraborty | 2015-08-24 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0106.mediawiki) |
| <span id="bip-107"></span>107 | Dynamic limit on the block size | Specification | Closed | Consensus (hard fork) | Washington Y. Sanchez | 2015-09-11 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0107.mediawiki) |
| <span id="bip-109"></span>109 | Two million byte size limit with sigop and sighash limits | Specification | Closed | Consensus (hard fork) | Gavin Andresen | 2016-01-28 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0109.mediawiki) |
| <span id="bip-110"></span>110 | Reduced Data Temporary Softfork | Specification | Closed | Consensus (soft fork) | Dathon Ohm | 2025-12-03 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki) |
| <span id="bip-114"></span>114 | Merkelized Abstract Syntax Tree | Specification | Closed | Consensus (soft fork) | Johnson Lau | 2016-04-02 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0114.mediawiki) |
| <span id="bip-115"></span>115 | Generic anti-replay protection using Script | Specification | Closed | Consensus (soft fork) | Luke Dashjr | 2016-09-23 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0115.mediawiki) |
| <span id="bip-120"></span>120 | Proof of Payment | Specification | Closed | Applications | Kalle Rosenbaum | 2015-07-28 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0120.mediawiki) |
| <span id="bip-121"></span>121 | Proof of Payment URI scheme | Specification | Closed | Applications | Kalle Rosenbaum | 2015-07-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0121.mediawiki) |
| <span id="bip-124"></span>124 | Hierarchical Deterministic Script Templates | Informational | Closed | Applications | Eric Lombrozo, William Swanson | 2015-11-20 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0124.mediawiki) |
| <span id="bip-131"></span>131 | "Coalescing Transaction" Specification (wildcard inputs) | Specification | Closed | Consensus (hard fork) | Chris Priest | 2015-11-30 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0131.mediawiki) |
| <span id="bip-132"></span>132 | Committee-based BIP Acceptance Process | Process | Closed | — | Andy Chase | 2015-08-31 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0132.mediawiki) |
| <span id="bip-134"></span>134 | Flexible Transactions | Specification | Closed | Consensus (hard fork) | Tom Zander | 2016-07-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0134.mediawiki) |
| <span id="bip-135"></span>135 | Generalized version bits voting | Informational | Closed | — | Sancho Panza | 2017-03-29 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0135.mediawiki) |
| <span id="bip-140"></span>140 | Normalized TXID | Specification | Closed | Consensus (soft fork) | Christian Decker | 2015-10-14 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0140.mediawiki) |
| <span id="bip-142"></span>142 | Address Format for Segregated Witness | Specification | Closed | Applications | Johnson Lau | 2015-12-24 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0142.mediawiki) |
| <span id="bip-146"></span>146 | Dealing with signature encoding malleability | Specification | Closed | Consensus (soft fork) | Johnson Lau, Pieter Wuille | 2016-08-16 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki) |
| <span id="bip-149"></span>149 | Segregated Witness (second deployment) | Specification | Closed | Consensus (soft fork) | Shaolin Fry | 2017-04-14 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0149.mediawiki) |
| <span id="bip-150"></span>150 | Peer Authentication | Specification | Closed | Peer Services | Jonas Schnelli | 2016-03-23 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0150.mediawiki) |
| <span id="bip-151"></span>151 | Peer-to-Peer Communication Encryption | Specification | Closed | Peer Services | Jonas Schnelli | 2016-03-23 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0151.mediawiki) |
| <span id="bip-154"></span>154 | Rate Limiting via peer specified challenges | Specification | Closed | Peer Services | Karl-Johan Alm | 2017-04-12 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0154.mediawiki) |
| <span id="bip-156"></span>156 | Dandelion - Privacy Enhancing Routing | Specification | Closed | Peer Services | Brad Denby, Andrew Miller, Giulia Fanti, Surya Bakshi, Shaileshh Bojja Venkatakrishnan, Pramod Viswanath | 2017-06-09 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0156.mediawiki) |
| <span id="bip-171"></span>171 | Currency/exchange rate information API | Specification | Closed | Applications | Luke Dashjr | 2017-03-04 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0171.mediawiki) |
| <span id="bip-175"></span>175 | Pay to Contract Protocol | Informational | Closed | Applications | Omar Shibli, Nicholas Gregory | 2017-07-17 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0175.mediawiki) |
| <span id="bip-180"></span>180 | Block size/weight fraud proof | Specification | Closed | Peer Services | Luke Dashjr | 2017-03-17 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0180.mediawiki) |
| <span id="bip-199"></span>199 | Hashed Time-Locked Contract transactions | Specification | Closed | Applications | Sean Bowe, Daira Hopwood | 2017-03-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0199.mediawiki) |
| <span id="bip-338"></span>338 | Disable transaction relay message | Specification | Closed | Peer Services | Suhas Daftuar | 2020-09-03 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0338.mediawiki) |
| <span id="bip-343"></span>343 | Mandatory activation of taproot deployment | Specification | Closed | Consensus (soft fork) | Shinobius, Michael Folkson | 2021-04-25 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0343.mediawiki) |
| <span id="bip-345"></span>345 | OP_VAULT | Specification | Closed | Consensus (soft fork) | James O'Beirne, Greg Sanders | 2023-02-03 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0345.mediawiki) |
| <span id="bip-351"></span>351 | Private Payments | Specification | Closed | Applications | Alfred Hodler, Clark Moody | 2022-07-10 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0351.mediawiki) |
| <span id="bip-391"></span>391 | Binary Output Descriptors | Specification | Closed | Applications | SeedHammer | 2026-01-27 | [Spec text](https://github.com/bitcoin/bips/blob/master/bip-0391.mediawiki) |
{: .sortable}

## See also

- [BIP-350](../BIP-350/)
- [Soft fork and hard fork](../Soft_fork_and_hard_fork/)
- [How to contribute to Bitcoin](../how-to-contribute-to-bitcoin/)

## References

[^readme]: ["Bitcoin Improvement Proposals" (README.mediawiki)](https://github.com/bitcoin/bips/blob/master/README.mediawiki). *bitcoin/bips* repository, commit `927b6de9915c` (2 October 2026). Table data from each BIP's header preamble at the same commit.
[^bip2]: Dashjr, Luke. ["BIP 2: BIP process, revised"](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki). *Bitcoin Improvement Proposals*.
[^bip3]: Murch. ["BIP 3: Updated BIP Process"](https://github.com/bitcoin/bips/blob/master/bip-0003.md). *Bitcoin Improvement Proposals*.
[^bip123]: Lombrozo, Eric. ["BIP 123: BIP Classification"](https://github.com/bitcoin/bips/blob/master/bip-0123.mediawiki). *Bitcoin Improvement Proposals*.
