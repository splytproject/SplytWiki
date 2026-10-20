---
title: Ordinals, inscriptions and Runes
description: How ordinal theory, inscriptions and the Runes protocol store data and tokens in Bitcoin transactions, the witness discount that makes it cheap, measured effects on fees and the UTXO set, and the dispute over whether it is spam, as of October 2026
aliases: [Ordinals, Inscriptions, Runes, BRC-20, Ordinal theory]
categories: [Bitcoin, Protocol, Debates, Applications]
updated: 2026-10-20
last_modified: 2026-10-20
infobox:
  image: bitcoin.svg
  caption: Ordinals, inscriptions and Runes
  rows:
    - header: Overview
    - Created by: Casey Rodarmor
    - Reference software: "`ord` (Rust, CC0)"
    - Consensus changes required: None
    - header: Mechanisms
    - Inscriptions: Data in Taproot script-path witnesses (January 2023)
    - Runes: Token messages in OP_RETURN outputs (block 840,000, April 2024)
    - Cost basis: "Witness discount (BIP-141)"
---

**Specifications:** [BIP-141](../BIP_index/#bip-141) · [BIP-341](../BIP_index/#bip-341) · [BIP-342](../BIP_index/#bip-342)

> **In plain terms:** Ordinal theory gives every satoshi a serial number. Inscriptions attach a file to one of those satoshis by hiding the file inside a Bitcoin transaction. Runes let people create tokens with Bitcoin transactions. None of this changes Bitcoin's rules, and that is exactly why people disagree about whether it should be filtered.

**Ordinal theory** is a scheme for numbering individual satoshis and tracking them through transactions. **Inscriptions** use it to attach arbitrary content, such as images or text, to a satoshi by storing the content in a transaction's witness. **Runes** is a separate protocol by the same author for fungible tokens, using [OP_RETURN](../OP_RETURN/) outputs.[^ord-inscriptions][^ord-runes] All three were created by Casey Rodarmor and are implemented in the `ord` software.[^ord-repo]

None of them requires any change to Bitcoin's consensus rules. The project's own FAQ answers the question "Does ordinal theory require a soft fork?" with "Nope! Ordinal theory works right now".[^ord-faq] This page explains how they work, what effects have been measured, and the dispute they caused.

## Ordinal theory

Ordinal theory assigns each satoshi a number in the order it was mined, and defines rules for which input satoshis flow to which outputs. The rules are a convention followed by `ord` and compatible wallets; nodes know nothing of them.[^ord-faq] A satoshi carrying an inscription can then be transferred by ordinary transactions, and the inscription moves with it.[^ord-inscriptions]

## Inscriptions

### The envelope

Inscription content is placed in a [Taproot](../Taproot/) script. The script contains an **envelope**: an `OP_FALSE OP_IF … OP_ENDIF` block wrapping data pushes.[^ord-inscriptions] Because `OP_FALSE OP_IF` is never executed, the pushes have no effect on validation, so the envelope can be combined with any other locking script.[^ord-inscriptions] A text inscription looks like this:[^ord-inscriptions]

```
OP_FALSE
OP_IF
  OP_PUSH "ord"
  OP_PUSH 1
  OP_PUSH "text/plain;charset=utf-8"
  OP_PUSH 0
  OP_PUSH "Hello, world!"
OP_ENDIF
```

The string `ord` marks the envelope. `OP_PUSH 1` introduces the content type and `OP_PUSH 0` introduces the content.[^ord-inscriptions] A single data push may not exceed 520 bytes, so larger content is split across many pushes.[^ord-inscriptions]

### Commit and reveal

A Taproot script can only be revealed when its output is spent. Inscribing therefore takes two transactions. The **commit** transaction creates a Taproot output committing to the script. The **reveal** transaction spends that output through the script path, placing the content on chain.[^ord-inscriptions]

### Why Taproot, and the witness discount

The `ord` documentation gives two reasons for using tapscript. Taproot scripts "have very few restrictions on their content". They also receive the **witness discount**, "making inscription content storage relatively economical".[^ord-inscriptions]

The discount comes from [Segregated Witness](../Segregated_Witness/). BIP-141 defines a transaction's **weight** as three times its size without witness data, plus its full size.[^bip141] A byte of witness data therefore counts one unit, while any other byte counts four. Blocks are limited to 4,000,000 weight units.[^bip141] [Tapscript](../Taproot/) removed the 10,000-byte script size limit, so a single reveal can carry hundreds of kilobytes.[^bip342]

### History

Inscription features appear in the `ord` changelog from version 0.4.0, released on 19 January 2023.[^ord-changelog] **BRC-20**, a token convention built on inscriptions, followed in 2023. A 2023 paper by Qin Wang and Guangsheng Yu describes BRC-20 as adding a modifiable data field to satoshis. It concludes that BRC-20 expands Bitcoin's functionality, while remaining limited compared with Ethereum's ecosystem.[^brc20-paper]

## Runes

Rodarmor announced Runes in September 2023. He wrote that "Fungible tokens are 99.9% scams and memes", but expected them to persist. He added that BRC-20 "has the undesirable consequence of UTXO proliferation".[^rodarmor-runes] Runes was designed so that one output can hold any mix of tokens, avoiding "junk" UTXOs.[^rodarmor-runes]

### How it works

A **runestone** is a protocol message stored in an OP_RETURN output whose script begins with `OP_RETURN OP_13`. The data pushes that follow are decoded as a sequence of 128-bit integers.[^ord-runes-spec] A transaction may contain at most one runestone.[^ord-runes]

A runestone can do three things:[^ord-runes]

- **etch** a new rune, fixing its properties forever;
- **mint** units of an existing rune while its mint is open;
- **transfer** runes from inputs to outputs, using instructions called **edicts**.

Unallocated runes go to a pointer output or the first non-OP_RETURN output.[^ord-runes]

A malformed runestone is a **cenotaph**. Runes sent to a transaction with a cenotaph are burned. The documentation describes cenotaphs as the protocol's upgrade mechanism.[^ord-runes]

The protocol activates at block 840,000; earlier runestones are ignored.[^ord-runes-spec] That is the block of the April 2024 [halving](../Bitcoin_halving/). `ord` 0.18.0, released on 10 April 2024, carried the etching code.[^ord-changelog]

## Measured effects

### Fees

Inscriptions and token mints compete for the same block space as payments. Bitcoin Optech's February 2024 podcast discussed one BRC-20 mint at a set block height. Fee rates moved from "something like in the 30 satoshis per vbyte range" to "something like 500+ sat/vB" in the next block.[^optech-289]

The `ord` FAQ accepts that "the demand for block space for use in inscriptions is unlimited". It argues this strengthens the fee market and "Bitcoin's security budget".[^ord-faq]

### The UTXO set

Mark Erhardt reported figures to the bitcoindev list in July 2025. Pay-to-Taproot outputs were 34.7% of all unspent outputs by count, but held 0.79% of the supply.[^murch-2025] A respondent in the same thread stated that 86% of those outputs were worth under 1,000 satoshis.[^fd0-2025] Inscription workflows create many small Taproot outputs; see the [Taproot](../Taproot/) article's adoption section.

## The dispute

Whether inscriptions are legitimate use or spam is contested. The positions below are quoted from their authors' own publications.

### Against: filter it

- **Luke Dashjr** opened Bitcoin Core issue #28408 in September 2023, titled "datacarriersize: Match more datacarrying". It proposed extending the `-datacarriersize` policy to the new "datacarrying styles". The issue was closed in January 2024 without the change.[^core-28408] His Bitcoin Knots software ships such filters.[^knots]
- **BIP-110**, a proposal credited to Dashjr's draft, calls inscriptions a "hack first exploited in 2022" that creates "significant unnecessary burdens on node operators". It argues data embedding "must be resisted at all times" so it does not become "load-bearing".[^bip110]

### For: it is valid use

- **The `ord` FAQ** calls inscriptions "an extremely benign source of demand for block space" and argues that higher demand funds Bitcoin's security.[^ord-faq]
- **Rodarmor's Runes post** concedes that most fungible tokens are "scams and memes". It argues that, since they will exist anyway, a design that avoids "junk" UTXOs is preferable.[^rodarmor-runes]

### Bitcoin Core's position

A June 2025 statement was supported by 31 Bitcoin Core contributors. It said that "circumventing filters of the vast majority of the nodes is relatively easy". It added that refusing to relay transactions miners will include anyway undermines relay.[^relay-statement] Bitcoin Core 30.0 raised the default OP_RETURN limit to 100,000 bytes.[^rn-30] The resulting conflict, including a chain split in 2026, is covered in [OP_RETURN policy dispute](../OP_RETURN_policy_dispute/).

Note that Bitcoin Core's `-datacarriersize` setting never applied to inscriptions. It limits OP_RETURN outputs, while inscriptions live in witnesses.[^core-28408]

## Trade-offs and open issues

- **Policy cannot stop witness data.** Any filter must recognize patterns in scripts, and the patterns can change. Both sides agree on this; they disagree on whether to try.[^relay-statement][^bip110]
- **UTXO growth.** Inscription outputs count toward the set every node must store. Runes was designed to reduce this relative to BRC-20, by its author's account.[^rodarmor-runes]
- **Fee volatility.** Token mints cause sudden fee spikes that affect all users.[^optech-289]
- **Dependence on conventions.** Ordinal numbering, inscriptions and runes exist only in indexing software. Nodes neither validate nor enforce them.[^ord-faq]

## Developer notes

### Inspecting an inscription

A reveal transaction's witness contains the envelope. Bitcoin Core can show it:

```
bitcoin-cli getrawtransaction <txid> true        # look at vin[].txinwitness
bitcoin-cli decodescript <witness-script-hex>    # shows OP_FALSE OP_IF ... OP_ENDIF
```

### The `ord` software

`ord` indexes the chain and manages inscriptions and runes. It requires a Bitcoin Core node with the transaction index.[^ord-repo]

```
ord index update
ord wallet inscribe --fee-rate <sat/vB> --file hello.txt
ord wallet etch ...                               # runes
```

### Relevant Bitcoin Core settings and files

- `-datacarriersize`: limits OP_RETURN output size; relevant to Runes, not inscriptions.[^rn-30]
- `src/policy/policy.cpp`: standardness rules, including the OP_RETURN check.[^core-policy]
- BIP-141 and BIP-342 define weight and tapscript limits.[^bip141][^bip342]

### Specifications and reference implementation

- Ordinal theory and inscriptions: [docs.ordinals.com](https://docs.ordinals.com/inscriptions.html).[^ord-inscriptions]
- Runes: [docs.ordinals.com/runes/specification.html](https://docs.ordinals.com/runes/specification.html).[^ord-runes-spec]
- Reference implementation: [ordinals/ord](https://github.com/ordinals/ord), written in Rust and released under CC0.[^ord-repo]

## See also

- [OP_RETURN](../OP_RETURN/)
- [OP_RETURN policy dispute](../OP_RETURN_policy_dispute/)
- [Taproot](../Taproot/)
- [Segregated Witness](../Segregated_Witness/)
- [Mempool](../Mempool/)
- [Non-fungible token](../Non-fungible_token/)

## References

[^ord-inscriptions]: ["Inscriptions"](https://docs.ordinals.com/inscriptions.html). *Ordinal Theory Handbook*. Retrieved October 2026.
[^ord-runes]: ["Runes"](https://docs.ordinals.com/runes.html). *Ordinal Theory Handbook*. Retrieved October 2026.
[^ord-runes-spec]: ["Runes: Specification"](https://docs.ordinals.com/runes/specification.html). *Ordinal Theory Handbook*. Retrieved October 2026.
[^ord-faq]: ["FAQ"](https://docs.ordinals.com/faq.html). *Ordinal Theory Handbook*. Retrieved October 2026.
[^ord-repo]: ["ordinals/ord"](https://github.com/ordinals/ord). GitHub. Rust; CC0-1.0 licence.
[^ord-changelog]: ["CHANGELOG.md"](https://github.com/ordinals/ord/blob/master/CHANGELOG.md). *ordinals/ord* repository. Entries for 0.4.0 (2023-01-19) and 0.18.0 (2024-04-10).
[^rodarmor-runes]: Rodarmor, Casey (25 September 2023). ["Runes"](https://rodarmor.com/blog/runes/). *rodarmor.com*.
[^bip141]: Lombrozo, Eric; Lau, Johnson; Wuille, Pieter. ["BIP 141: Segregated Witness (Consensus layer)"](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki). *Bitcoin Improvement Proposals*.
[^bip342]: Wuille, Pieter; Nick, Jonas; Towns, Anthony. ["BIP 342: Validation of Taproot Scripts"](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki). *Bitcoin Improvement Proposals*. Resource limits section.
[^brc20-paper]: Wang, Qin; Yu, Guangsheng (31 August 2023). ["BRC-20: Hope or Hype"](https://arxiv.org/abs/2310.10652). *arXiv* 2310.10652.
[^optech-289]: ["Bitcoin Optech Newsletter #289 Recap Podcast"](https://bitcoinops.org/en/podcast/2024/02/15/). *Bitcoin Optech*. 15 February 2024.
[^murch-2025]: Erhardt, Mark "Murch" (11 July 2025). ["Re: A Taproot-native (re-)bindable transaction bundle proposal"](https://mirror.b10c.me/lists/bitcoindev/a40c2b1a-1164-4794-a6d5-79d0b97296aa@murch.one/). *bitcoindev mailing list*.
[^fd0-2025]: /dev /fd0 (11 July 2025). ["Re: A Taproot-native (re-)bindable transaction bundle proposal"](https://mirror.b10c.me/lists/bitcoindev/2c16b2d0-ac82-4c10-8404-02001bda2658n@googlegroups.com/). *bitcoindev mailing list*.
[^core-28408]: Dashjr, Luke (5 September 2023). ["datacarriersize: Match more datacarrying" (issue #28408)](https://github.com/bitcoin/bitcoin/issues/28408). *Bitcoin Core* GitHub. Closed 5 January 2024.
[^knots]: ["Bitcoin Knots v29.1.knots20250903"](https://github.com/bitcoinknots/bitcoin/releases/tag/v29.1.knots20250903). *Bitcoin Knots* GitHub release notes. 4 September 2025.
[^bip110]: Ohm, Dathon. ["BIP 110: Reduced Data Temporary Softfork"](https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki). *Bitcoin Improvement Proposals*. Status: Closed (as of October 2026).
[^relay-statement]: ["Bitcoin Core development and transaction relay policy"](https://bitcoincore.org/en/2025/06/06/relay-statement/). *bitcoincore.org*. 6 June 2025.
[^rn-30]: ["Bitcoin Core 30.0 released"](https://bitcoincore.org/en/releases/30.0/). *bitcoincore.org*. 10 October 2025.
[^core-policy]: ["src/policy/policy.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/policy/policy.cpp). *Bitcoin Core* source code.
