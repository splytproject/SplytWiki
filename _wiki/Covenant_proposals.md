---
title: Covenant proposals
description: Neutral status page for Bitcoin covenant and script-upgrade proposals, including OP_CAT, CTV, CSFS, OP_VAULT, P2MR, LNHANCE and Great Script Restoration, with the strongest published arguments for and against each
aliases: [Covenants, Bitcoin covenants, Covenant soft forks]
categories: [Bitcoin, Protocol, Scripting, BIPs, Debates]
updated: 2026-10-20
last_modified: 2026-10-20
infobox:
  image: bitcoin.svg
  caption: Covenant proposals
  rows:
    - header: Overview
    - Subject: Proposed soft forks that add spending restrictions or script features
    - Proposals covered: 7
    - Activated on mainnet: None (as of October 2026)
    - Test network: Bitcoin Inquisition (signet)
---

> **In plain terms:** A covenant would let a coin's script limit *where* the coin goes next, not just *who* spends it. Several competing designs exist. None has been activated on Bitcoin's main network, and developers disagree about which, if any, should be.

A **covenant** is a proposed change to Bitcoin's consensus rules that lets a script stop an authorized spender from paying to certain other scripts.[^optech-cov] Each proposal on this page would need a [soft fork](../Soft_fork_and_hard_fork/).

This page summarizes the status of seven proposals as of October 2026. It sets out the strongest published argument for and against each, attributed to its author. It makes no recommendation.

One row is not a covenant. [BIP-360](../BIP_index/#bip-360) (P2MR) removes a spending path rather than restricting destinations. It is included because it competes for the same review attention and soft-fork process.[^bip360]

## Status table

Status as of October 2026. "Signet" means Bitcoin Inquisition's default signet, a test network for soft-fork proposals.[^inq-294]

| Proposal | BIP | Opcode(s) | What it enables | Main proponents | Main objections | Implementation status |
|---|---|---|---|---|---|---|
| OP_CAT | [347](../BIP_index/#bip-347) | `OP_CAT` (tapscript) | Joining stack items; Merkle proofs, tree signatures, Lamport signatures, vaults, BitVM improvements[^bip347] | Ethan Heilman, Armin Sabouri (authors)[^bip347] | Significant limits for vaults compared with BIP-345;[^obeirne-cat] 520-byte stack limit;[^optech-275] introspection side-effects[^sanders-gist] | BIP **Complete**. Active on signet since block 193,536 (30 April 2024). No mainnet deployment specified.[^bip347][^inq-294] |
| OP_CHECKTEMPLATEVERIFY (CTV) | [119](../BIP_index/#bip-119) | `OP_CHECKTEMPLATEVERIFY` (redefines `OP_NOP4`) | Committing an output to a fixed spending-transaction template, without presigning[^bip119] | Jeremy Rubin (author);[^bip119] June 2025 letter organized by James O'Beirne[^letter] | Possibly the wrong stopping point compared with more general hashes such as TXHASH;[^sanders-letter] "not very exciting on its own"[^sanders-gist] | BIP **Draft**. Active on signet since block 106,704 (6 September 2022). The BIP leaves activation out.[^bip119][^inq-294] |
| OP_CHECKSIGFROMSTACK (CSFS) | [348](../BIP_index/#bip-348) | `OP_CHECKSIGFROMSTACK` (tapscript) | Checking a signature over arbitrary stack data; with CTV, LN-Symmetry channels[^bip348] | Brandon Black, Jeremy Rubin (authors);[^bip348] June 2025 letter[^letter] | Calls for final review are premature while the flagship LN-Symmetry use lacks a demonstration[^poinsot-letter] | BIP **Draft**. Active on signet since block 272,592 (6 October 2025). Deployment "TBD".[^bip348][^inq-294] |
| OP_VAULT | [345](../BIP_index/#bip-345) | `OP_VAULT`, `OP_VAULT_RECOVER` | Delayed withdrawals with a prespecified recovery path for theft response[^bip345] | James O'Beirne, Greg Sanders (authors)[^bip345] | Too specific to be adopted, even if technically sound;[^sanders-gist] superseded by OP_CHECKCONTRACTVERIFY[^bip345] | BIP **Closed**. Withdrawn by its author in May 2025, naming [BIP-443](../BIP_index/#bip-443) as replacement. Not on signet.[^withdraw][^inq-294] |
| P2MR | [360](../BIP_index/#bip-360) | None; new output type | Taproot-like script trees without the key path, resisting long-exposure quantum attacks[^bip360] | Hunter Beast, Ethan Heilman, Isabel Foxen Duke (authors)[^bip360] | Quantum computers likely a decade or more away; Taproot could gain a quantum-safe script path and disable key spends later;[^corallo-qc] larger witnesses than key-path spends[^bip360] | BIP **Draft**. Not on signet.[^bip360][^inq-294] |
| LNHANCE | [119](../BIP_index/#bip-119), [348](../BIP_index/#bip-348), [349](../BIP_index/#bip-349), [442](../BIP_index/#bip-442) | CTV, CSFS, `OP_INTERNALKEY`, `OP_PAIRCOMMIT` | The most efficient currently designed route to LN-Symmetry, per its proponents[^bip348] | Brandon Black, Jeremy Rubin, moonsettler (BIP authors)[^bip348][^bip349][^bip442] | `OP_PAIRCOMMIT` objected to: does not compose with transaction introspection[^sanders-gist] | All four BIPs **Draft**. CTV, CSFS and INTERNALKEY active on signet; PAIRCOMMIT not.[^bip442][^inq-294] |
| Great Script Restoration | [440](../BIP_index/#bip-440), [441](../BIP_index/#bip-441) | New tapleaf version `0xc2` restoring opcodes disabled in 2010; a "varops" cost budget | General script programmability, including covenants, with resource limits set by cost accounting[^bip440][^bip441] | Rusty Russell, Julian Moik (authors)[^bip440] | Design critique: computing curve points in script, instead of verifying them, prevents batch validation[^towns-gsr] | Both BIPs **Draft** (numbered 25 March 2026). Not on signet.[^bip440][^inq-294] |

None of the BIPs above specifies mainnet activation parameters.[^bip119][^bip345][^bip347][^bip348][^bip349][^bip360][^bip440][^bip441][^bip442]

## OP_CAT (BIP-347)

`OP_CAT` joins the top two stack items into one. It existed in Bitcoin's original script, was disabled in 2010, and would return in tapscript only, using opcode `0x7e`.[^bip347]

**Argument for.** Authors Ethan Heilman and Armin Sabouri argue that tapscript lacks any general way to combine stack items. That gap prevents scripts from building or checking Merkle trees and other hashed structures.[^bip347] They list uses including tree signatures, post-quantum Lamport signatures, vaults and BitVM improvements.[^bip347]

**Argument against.** James O'Beirne, author of the rival OP_VAULT proposal, replied in October 2023. He described significant limitations of using `OP_CAT` to build vaults, compared with BIP-345's design.[^obeirne-cat][^optech-275] Several reviewers also worried that the 520-byte stack element limit would restrict `OP_CAT` too much. Peter Todd described a way to raise it in a later soft fork.[^optech-275]

## OP_CHECKTEMPLATEVERIFY (BIP-119)

CTV checks that the spending transaction matches a 32-byte hash. The hash covers the version, locktime, input count, sequences, outputs and input index.[^bip119]

**Argument for.** Author Jeremy Rubin argues that CTV "reduces many of the trust, interactivity, and storage requirements inherent with the use of pre-signing in applications".[^bip119]

In June 2025, a letter organized by James O'Beirne asked Bitcoin Core contributors to prioritize review of CTV and CSFS within six months. It called them "uniquely well reviewed, simple" and widely demanded.[^letter] Bitcoin Optech counted 66 signers when it reported the letter.[^optech-361]

**Argument against.** Replying to the letter, Greg Sanders questioned whether CTV plus CSFS is the right place to stop. He compared it with a more general transaction-hash design (TXHASH).[^sanders-letter] Elsewhere he called CTV "pretty understandable how to use, also not very exciting on its own".[^sanders-gist]

## OP_CHECKSIGFROMSTACK (BIP-348)

CSFS works like `OP_CHECKSIG`, but the signed message comes from the stack, not the transaction. It takes a 32-byte public key, a message and a signature.[^bip348]

**Argument for.** Authors Brandon Black and Jeremy Rubin argue that CSFS combined with CTV can implement LN-Symmetry channels. They state the construction is logically equivalent to a [BIP-118](../BIP_index/#bip-118) design, at a cost of 8 vbytes.[^bip348]

**Argument against.** Antoine Poinsot, replying to the June 2025 letter, said he was sympathetic to a CTV and CSFS soft fork. However, he argued that calling for final review was premature. Developers still disagreed about the approach, and LN-Symmetry, the flagship use, had no demonstration.[^poinsot-letter]

## OP_VAULT (BIP-345)

OP_VAULT and OP_VAULT_RECOVER enforce a delay before coins can go to an arbitrary destination. Until withdrawal completes, the coins can always be swept to a prespecified recovery path.[^bip345]

**Argument for.** Authors James O'Beirne and Greg Sanders argue that users "have little means to intervene once a compromise is detected". A forced delay lets them pull coins to a highly secure recovery key, mitigating "the worst-case outcome of key compromise: coin loss".[^bip345]

**Argument against.** Co-author Greg Sanders later wrote that "the proposal is too specific to be adopted even if I think it's technically ok". He pointed instead to OP_CHECKCONTRACTVERIFY.[^sanders-gist] In May 2025, James O'Beirne withdrew BIP-345 and recorded BIP-443 as its proposed replacement.[^withdraw]

## P2MR (BIP-360)

P2MR, short for pay-to-Merkle-root, is a proposed output type. It works like a [Taproot](../Taproot/) output with the key path removed, committing only to a script tree.[^bip360]

**Argument for.** Authors Hunter Beast, Ethan Heilman and Isabel Foxen Duke note that Taproot is the only activated output type with script trees. They argue it is open to "long exposure" attacks by a future quantum computer. P2MR would keep script trees while removing that exposure.[^bip360] They note it does not protect against faster "short exposure" attacks, which may need post-quantum signatures.[^bip360]

**Argument against.** In December 2024, Matt Corallo argued that capable quantum computers are probably "a decade or two" away. He proposed that Taproot outputs carry a post-quantum script path today. If the threat materializes, a soft fork could disable key-path spending, without a new output type.[^corallo-qc] BIP-360's authors also acknowledge that a P2MR spend always has a larger witness than a Taproot key-path spend.[^bip360]

## LNHANCE

LNHANCE is a bundle of four opcodes: CTV ([BIP-119](../BIP_index/#bip-119)), CSFS ([BIP-348](../BIP_index/#bip-348)), `OP_INTERNALKEY` ([BIP-349](../BIP_index/#bip-349)) and `OP_PAIRCOMMIT` ([BIP-442](../BIP_index/#bip-442)).[^bip348] `OP_PAIRCOMMIT` hashes two stack items together with a tagged hash.[^bip442]

**Argument for.** BIP-348's authors, Brandon Black and Jeremy Rubin, describe LNHANCE as "the most efficient and direct way currently designed to implement Lightning Symmetry".[^bip348]

**Argument against.** Greg Sanders gave `OP_PAIRCOMMIT` a firm no: "I don't like what's on the tin". He argued it does not compose with transaction introspection.[^sanders-gist] He was more positive about `OP_INTERNALKEY`, calling it "probably useful in conjunction with CSFS".[^sanders-gist]

## Great Script Restoration (BIP-440, BIP-441)

Rusty Russell's project, also called the Grand Script Renaissance, would add a new tapscript version.[^russell-gsr] [BIP-440](../BIP_index/#bip-440) defines a "varops" budget, a cost for every script operation, generalizing tapscript's signature-operation budget.[^bip440] [BIP-441](../BIP_index/#bip-441) uses tapleaf version `0xc2` to re-enable disabled opcodes. It raises the maximum stack item from 520 bytes to 4,000,000 bytes.[^bip441]

**Argument for.** Authors Rusty Russell and Julian Moik argue that script has been tightly restricted since 2010, to prevent denial-of-service attacks. As a result, new proposals must "severely" limit their scope or add special caching. A general cost budget would make those workarounds unnecessary.[^bip440]

**Argument against.** No outright published objection was found. The most substantive critique is from Anthony Towns, in October 2025. He argued that calculating curve points in script, as the drafts allow, prevents batch validation of signature checks. He suggested opcodes that verify an equation instead.[^towns-gsr] Greg Sanders, by contrast, has favoured this broad direction over narrower opcodes in the longer term.[^sanders-gist]

## See also

- [BIP index](../BIP_index/)
- [Taproot](../Taproot/)
- [Bitcoin Script](../Bitcoin_Script/)
- [Soft fork and hard fork](../Soft_fork_and_hard_fork/)
- [Multisignature](../Multisignature/)

## References

[^optech-cov]: ["Covenants"](https://bitcoinops.org/en/topics/covenants/). *Bitcoin Optech* topics.
[^inq-294]: Towns, Anthony (22 July 2026). ["Bitcoin Inquisition 29.4"](https://delvingbitcoin.org/t/bitcoin-inquisition-29-4/2739). *Delving Bitcoin*. Lists signet activation heights for each deployed proposal.
[^bip119]: Rubin, Jeremy. ["BIP 119: CHECKTEMPLATEVERIFY"](https://github.com/bitcoin/bips/blob/master/bip-0119.mediawiki). *Bitcoin Improvement Proposals*.
[^bip345]: O'Beirne, James; Sanders, Greg. ["BIP 345: OP_VAULT"](https://github.com/bitcoin/bips/blob/master/bip-0345.mediawiki). *Bitcoin Improvement Proposals*.
[^bip347]: Heilman, Ethan; Sabouri, Armin. ["BIP 347: OP_CAT in Tapscript"](https://github.com/bitcoin/bips/blob/master/bip-0347.mediawiki). *Bitcoin Improvement Proposals*.
[^bip348]: Black, Brandon; Rubin, Jeremy. ["BIP 348: CHECKSIGFROMSTACK"](https://github.com/bitcoin/bips/blob/master/bip-0348.md). *Bitcoin Improvement Proposals*.
[^bip349]: Black, Brandon; Rubin, Jeremy. ["BIP 349: OP_INTERNALKEY"](https://github.com/bitcoin/bips/blob/master/bip-0349.md). *Bitcoin Improvement Proposals*.
[^bip360]: Beast, Hunter; Heilman, Ethan; Duke, Isabel Foxen. ["BIP 360: Pay-to-Merkle-Root (P2MR)"](https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki). *Bitcoin Improvement Proposals*.
[^bip440]: Russell, Rusty; Moik, Julian. ["BIP 440: Varops Budget For Script Runtime Constraint"](https://github.com/bitcoin/bips/blob/master/bip-0440.mediawiki). *Bitcoin Improvement Proposals*.
[^bip441]: Russell, Rusty; Moik, Julian. ["BIP 441: Restoration of disabled script (Tapleaf 0xC2)"](https://github.com/bitcoin/bips/blob/master/bip-0441.mediawiki). *Bitcoin Improvement Proposals*.
[^bip442]: moonsettler; Black, Brandon. ["BIP 442: OP_PAIRCOMMIT"](https://github.com/bitcoin/bips/blob/master/bip-0442.md). *Bitcoin Improvement Proposals*.
[^withdraw]: O'Beirne, James (6 May 2025). ["BIP-345: withdraw"](https://github.com/bitcoin/bips/commit/b771054d4d). *bitcoin/bips* commit.
[^letter]: O'Beirne, James (9 June 2025). ["CTV + CSFS: a letter"](https://groups.google.com/d/msgid/bitcoindev/a86c2737-db79-4f54-9c1d-51beeb765163n%40googlegroups.com). *bitcoindev mailing list*.
[^optech-361]: ["Bitcoin Optech Newsletter #361"](https://bitcoinops.org/en/newsletters/2025/07/04/). *Bitcoin Optech*. 4 July 2025.
[^poinsot-letter]: Poinsot, Antoine (9 June 2025). ["Re: CTV + CSFS: a letter"](https://groups.google.com/d/msgid/bitcoindev/n4MR-H83t3x3B5yI8tjdTXR21smp_Ur7fRpqk_4EOc_im_zu0-9GlqxC1wl-gEzS__TdJNrf6XsV4XXOzxWn4kpdUocR3Xp8d6Uwo1m4ILw%3D%40protonmail.com). *bitcoindev mailing list*.
[^sanders-letter]: Sanders, Greg (10 June 2025). ["Re: CTV + CSFS: a letter"](https://groups.google.com/d/msgid/bitcoindev/b17d0544-d292-4b4d-98c6-fa8dc4ef573cn%40googlegroups.com). *bitcoindev mailing list*.
[^sanders-gist]: Sanders, Greg (instagibbs). ["Covenants Table Rationale"](https://gist.github.com/instagibbs/eeb9d8013270387b4318b5585e858b9c). *GitHub Gist*. Last updated March 2025.
[^obeirne-cat]: O'Beirne, James (October 2023). [Reply to "Proposed BIP for OP_CAT"](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2023-October/022092.html). *bitcoin-dev mailing list*.
[^optech-275]: ["Bitcoin Optech Newsletter #275"](https://bitcoinops.org/en/newsletters/2023/11/01/). *Bitcoin Optech*. 1 November 2023.
[^corallo-qc]: Corallo, Matt (15 December 2024). ["Trivial QC signatures with clean upgrade path"](https://groups.google.com/g/bitcoindev/c/8O857bRSVV8). *bitcoindev mailing list*.
[^russell-gsr]: Russell, Rusty (27 September 2025). ["Great Script Restoration" summary and draft BIPs](https://mirror.b10c.me/lists/bitcoindev/877bxknwk6.fsf@rustcorp.com.au/). *bitcoindev mailing list*.
[^towns-gsr]: Towns, Anthony (6 October 2025). [Reply on taproot-point calculation in the restoration drafts](https://mirror.b10c.me/lists/bitcoindev/aOOoJfCFH85AUYtp@erisian.com.au/). *bitcoindev mailing list*.
