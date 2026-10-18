---
title: OP_RETURN
description: Overview of the OP_RETURN opcode and output type, and its relationship to witness data and the witness discount
aliases: [OP_RETURN output, Data carrier output, OP_RETURN and witness data]
categories: [Bitcoin, Protocol, Scripting, Transactions]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: OP_RETURN
  rows:
    - header: Overview
    - Type: Script opcode and output type
    - Spendable: No (provably unspendable)
    - header: Fees
    - Weight treatment: Base data (no witness discount)
    - Related specification: BIP-141
---

**OP_RETURN** is a Bitcoin script opcode that causes script execution to fail. An output whose locking script begins with it is provably unspendable, and is commonly used to attach a small amount of arbitrary data to a transaction without adding to the set of spendable outputs.

## Opcode and output

Two related meanings of the term should be distinguished:

- **The opcode.** `OP_RETURN` may appear in any script. Executing it makes the script fail.
- **The output.** An output beginning with `OP_RETURN` can never be spent, so nodes do not need to keep it in the UTXO set. It is used for data embedding.

## Relationship to witness data

Witness data, introduced by Segregated Witness (BIP-141), belongs to transaction *inputs*: it holds the signatures and script stack items used to spend. Outputs are serialized separately. A SegWit transaction is serialized conceptually as:

    version | inputs | outputs | witness stacks (one per input) | locktime

An `OP_RETURN` output is in the outputs section and is therefore counted as ordinary base data. It does **not** receive the witness discount.

### Weight calculation

Transaction weight is calculated as:

    weight = base_size × 3 + total_size      (virtual size = weight / 4)

Bytes in the base section count as four weight units and witness bytes as one, so only bytes in the witness section are discounted.

### Evidence

- **Historical.** `OP_RETURN` outputs were in use and relayed years before SegWit existed, so they cannot be witness data. A pre-SegWit transaction containing one has no witness section at all.
- **Specification and code.** In Bitcoin Core's transaction serialization, outputs and witness stacks are written separately, and BIP-141 defines base size as the size of the transaction serialized without witness data.

## Exception

Because `OP_RETURN` is only an opcode, it can also appear inside a witness script, for example in a branch that is never executed. In that case it is technically located in witness data. This is of little practical use, since the byte could simply be omitted.

## See also

- [Segregated_Witness](../Segregated_Witness/)
- [Taproot](../Taproot/)
- [UTXO](../UTXO/)
- [Bitcoin_Script](../Bitcoin_Script/)

## Notes and further reading

- ["Looking for proof OP_RETURN isn't part of witness data" discussion thread](https://bitcointalk.org/index.php?topic=5597097.0), Bitcoin Forum, October 2026
- BIP-141, Segregated Witness (Consensus layer)
- (Add sourcing where appropriate: Bitcoin Core release notes describing changes to relay policy for data carrier output size, and annotated weight calculations for real transactions.)
