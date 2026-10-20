---
title: Lightning channels
description: How a Lightning Network payment channel works — the funding output, commitment transactions and revocation, HTLCs, the three ways a channel closes, anchors and zero-fee commitments, splicing, and taproot channels, as of October 2026
aliases: [Payment channel, Commitment transaction, HTLC, Splicing, Taproot channels, Lightning channel]
categories: [Bitcoin, Layer 2, Lightning, Protocol]
updated: 2026-10-20
last_modified: 2026-10-20
infobox:
  image: bitcoin.svg
  caption: Lightning channels
  rows:
    - header: Specification
    - Channel protocol: BOLT 2
    - Transaction formats: BOLT 3
    - On-chain handling: BOLT 5
    - Taproot channels: Extension BOLT (not numbered)
    - header: Status (as of October 2026)
    - Splicing: "In BOLT 2; shipped by Eclair, Core Lightning, LDK"
    - Taproot channels: "Shipped by lnd and Eclair"
    - Zero-fee commitments: "In BOLT 3 (version 3 transactions)"
---

**Specifications:** [BOLT 2](https://github.com/lightning/bolts/blob/master/02-peer-protocol.md) · [BOLT 3](https://github.com/lightning/bolts/blob/master/03-transactions.md) · [BOLT 5](https://github.com/lightning/bolts/blob/master/05-onchain.md)

> **In plain terms:** A channel is a shared pot of bitcoin locked on chain. Both parties hold a signed transaction that would pay out the pot, and each new payment replaces it with a new split. If someone tries to cheat with an old version, the other side can take everything. That threat is what keeps the channel honest without touching the blockchain.

A **Lightning channel** is a relationship between two nodes, backed by one on-chain output, that lets them pay each other repeatedly without broadcasting transactions. This article explains the transactions that make that safe, as specified in BOLT 2, BOLT 3 and BOLT 5.[^bolt2][^bolt3][^bolt5] For the network built from channels, see [Lightning Network](../Lightning_Network/) and [Lightning routing](../Lightning_routing/).

## The problem

Two parties who pay each other often want to avoid an on-chain transaction for each payment. A naive shared output does not work. Whoever holds the latest signed payout could refuse to sign a newer one, or broadcast an old one. The channel design must make every old state unprofitable to publish, and must let either party exit without the other's cooperation.[^bolt3][^bolt5]

## The funding transaction

A channel begins with a **funding transaction** whose output pays to a 2-of-2 multisignature script between the two parties' funding keys.[^bolt3] In the original design the output is pay-to-witness-script-hash; in taproot channels it is a MuSig2 aggregate key (see below).[^bolt3][^bolt-taproot]

BOLT 2 defines two ways to open:

- **Channel establishment v1**: `open_channel`, `accept_channel`, `funding_created`, `funding_signed`, then `channel_ready` once the funding transaction confirms.[^bolt2] One side funds the channel.
- **Channel establishment v2** (dual funding) starts with `open_channel2` and `accept_channel2`. An **interactive transaction construction** follows: both sides add inputs and outputs with `tx_add_input`, `tx_add_output` and `tx_complete`. They then exchange `tx_signatures`.[^bolt2] Both sides can contribute funds, and the funding transaction can be fee-bumped with `tx_init_rbf`.[^bolt2]

Channels can be used before the funding transaction confirms if both sides agree, using the `option_zeroconf` feature.[^bolt9]

## Commitment transactions

Each party holds its own **commitment transaction**, which spends the funding output and splits the balance.[^bolt3] The two versions differ in whose outputs are delayed. A commitment transaction has one input, the funding output, with both signatures in its witness.[^bolt3]

Its 48-bit **commitment number** is obscured by XOR with a value derived from both parties' payment basepoints. An observer of a unilateral close therefore cannot count the channel's updates.[^bolt3]

### Outputs

- **`to_local`** pays the party who broadcast the transaction. It is delayed by `to_self_delay` blocks with `OP_CHECKSEQUENCEVERIFY`. It can instead be claimed immediately by the *other* party if they know the **revocation key**.[^bolt3]
- **`to_remote`** pays the other party.[^bolt3]
- One output per pending **HTLC**, offered or received.[^bolt3]
- **Anchor outputs**, under `option_anchors`, give each side a small output to attach fee-bumping children to.[^bolt9][^bolt3]

Outputs below the dust limit are not created; their value goes to fees.[^bolt3]

### Revocation

When the parties agree a new state, each reveals the **per-commitment secret** of the previous state to the other.[^bolt3] That secret lets the counterparty derive the revocation key for the old commitment. If the old commitment is ever broadcast, the counterparty can spend `to_local` immediately, before the `to_self_delay` expires, taking the cheater's funds. BOLT 3 describes the `to_local` script's two branches as the penalty path and the delayed path.[^bolt3] Per-commitment secrets are generated so that all earlier ones can be stored compactly.[^bolt3]

### Zero-fee commitments

Commitment transactions carry a fee that must be set in advance. A newer option, `zero_fee_commitments`, makes the commitment transaction a **version 3** transaction with no fee. Fees are added at broadcast time through a shared anchor and child-pays-for-parent.[^bolt3] Version 3 marks it as a [TRUC transaction](../Mempool/) under Bitcoin Core's relay policy, which bounds how a counterparty can pin it.[^bolt3]

## HTLCs

A **hash time-locked contract** (HTLC) is a conditional payment inside the channel. It can be claimed with the preimage of a payment hash before a timeout, or returned to the offerer after it.[^bolt3] HTLCs are what let a payment cross several channels safely. Every hop's HTLC uses the same hash, and the preimage flows back from the recipient.[^bolt4]

Adding an HTLC follows a message sequence: `update_add_htlc`, then `commitment_signed` carrying signatures for the new state, then `revoke_and_ack` revoking the old one.[^bolt2] An HTLC is removed with `update_fulfill_htlc`, which reveals the preimage, or `update_fail_htlc`.[^bolt2]

HTLC outputs on the commitment transaction are spent by second-stage **HTLC-timeout** and **HTLC-success** transactions. BOLT 3 explains that this extra stage lets an HTLC be settled on chain even while its owner's funds are still delayed.[^bolt3] The number of pending HTLCs is capped by `max_accepted_htlcs`; each slot is a potential target for [jamming](../Lightning_routing/).[^bolt2]

## Closing a channel

BOLT 5 names three ways a channel ends:[^bolt5]

1. **Mutual close** ("the good way"): both parties negotiate a closing transaction with `shutdown`, then `closing_complete` and `closing_sig`. Funds are available immediately.[^bolt2]
2. **Unilateral close** ("the bad way"): one party broadcasts its latest commitment transaction. Its own funds wait `to_self_delay` blocks; the counterparty's are available at once.[^bolt5]
3. **Revoked transaction close** ("the ugly way"): a party broadcasts an old commitment. The counterparty spends every output with a **penalty transaction** using the revocation key.[^bolt5]

Because the penalty must be broadcast before the delay expires, a node must watch the chain while it has open channels. Watchtowers can do this on its behalf; lnd added watchtower support for taproot channels in 2024.[^optech-taproot]

## Quiescence and splicing

**Splicing** replaces the funding transaction with a new one that adds funds ("splice in") or removes them ("splice out"), without closing the channel.[^bolt2] Optech notes that, unlike a swap, splicing changes the channel's total balance.[^optech-splicing]

BOLT 2 first pauses the channel with **quiescence**: the `stfu` message stops new updates.[^bolt2] Then `splice_init` and `splice_ack` begin an interactive transaction construction, as in dual funding. Normal operation resumes once the splice is signed, and `splice_locked` ends it when the new funding transaction has enough confirmations.[^bolt2] The feature bits are `option_quiesce` (34/35) and `option_splice` (62/63).[^bolt9]

### Implementation status (as of October 2026)

| Implementation | Status |
|---|---|
| Eclair | Splice-in and splice-out since 2023; "the official splicing protocol" in #2887 (May 2026); final in v0.14.0.[^optech-splicing][^eclair-014] |
| Core Lightning | Experimental since 2023; `splicein` and `spliceout` RPCs in 26.04 (April 2026).[^optech-splicing][^cln-2604] |
| LDK | Splice-out completed support in August 2025 (#3979); RBF of splices in March 2026.[^optech-splicing] |
| lnd | Quiescence protocol implemented (December 2024); no splicing listed.[^optech-splicing] |

## Taproot channels

**Simple taproot channels** are an extension BOLT. They translate the funding and commitment design to [Taproot](../Taproot/): the funding output is a MuSig2 aggregate key, and commitment scripts use tapscript trees.[^bolt-taproot] The document's stated motivation is to take advantage of "some" of Taproot's capabilities now, deferring others such as PTLCs.[^bolt-taproot]

Optech summarizes the gain: cooperative closes are cheaper and look like ordinary single-key spends, improving privacy.[^optech-taproot] Payments still use HTLCs, so they can route through nodes without taproot support.[^optech-taproot]

| Implementation | Status |
|---|---|
| lnd | Experimental since #7904 (August 2023); production support in #9985 (April 2026).[^optech-taproot] |
| Eclair | Support in #3103 (August 2025); official feature bit, on by default, in #3144 (May 2026).[^optech-taproot] |

Open items include gossip for taproot channels, whose announcements differ from the original format, and the move from HTLCs to PTLCs.[^optech-taproot]

## Trade-offs and open issues

- **Delayed exits.** A unilateral close leaves the closer's funds locked for `to_self_delay`. Mutual close avoids this but needs cooperation.[^bolt5]
- **Fee uncertainty.** Pre-set commitment fees can be wrong by the time of a close. Anchors and zero-fee commitments address this, at the cost of needing fee-bumping at broadcast.[^bolt3]
- **Liveness.** Revocation only works if the wronged party, or its watchtower, is watching.[^bolt5]
- **Uneven rollout.** Splicing and taproot channels are live in some implementations and absent in others, so a channel's features depend on both peers.[^optech-splicing][^optech-taproot]

## Developer notes

### Commands

```
lncli openchannel --node_key <pubkey> --local_amt 1000000      # lnd
lightning-cli fundchannel <id> 1000000sat                      # Core Lightning
lightning-cli splicein <channel_id> 500000sat                  # Core Lightning 26.04+
eclair-cli open --nodeId=<pubkey> --fundingSatoshis=1000000    # Eclair
```

See each implementation's documentation; command names and arguments differ.[^lnd-repo][^cln-repo][^eclair-repo]

### Specification files and test vectors

- `02-peer-protocol.md`: channel establishment v1 and v2, quiescence, splicing, closing.[^bolt2]
- `03-transactions.md`: funding, commitment and HTLC transaction formats and key derivation. Appendices B to H hold test vectors, including commitment transactions with anchors (F) and zero-fee commitments (H).[^bolt3]
- `05-onchain.md`: mutual, unilateral and revoked closes, penalty transaction weights.[^bolt5]
- `bolt02/splicing-test.md`: splicing test vectors.[^bolts-repo]
- `bolt-simple-taproot.md`: the taproot channel extension.[^bolt-taproot]

## See also

- [Lightning Network](../Lightning_Network/)
- [Lightning routing](../Lightning_routing/)
- [Multisignature](../Multisignature/)
- [Taproot](../Taproot/)
- [Mempool](../Mempool/)
- [Bitcoin Script](../Bitcoin_Script/)

## References

[^bolt2]: ["BOLT #2: Peer Protocol for Channel Management"](https://github.com/lightning/bolts/blob/master/02-peer-protocol.md). *lightning/bolts*. Read at the repository's state on 20 October 2026.
[^bolt3]: ["BOLT #3: Bitcoin Transaction and Script Formats"](https://github.com/lightning/bolts/blob/master/03-transactions.md). *lightning/bolts*.
[^bolt4]: ["BOLT #4: Onion Routing Protocol"](https://github.com/lightning/bolts/blob/master/04-onion-routing.md). *lightning/bolts*.
[^bolt5]: ["BOLT #5: Recommendations for On-chain Transaction Handling"](https://github.com/lightning/bolts/blob/master/05-onchain.md). *lightning/bolts*.
[^bolt9]: ["BOLT #9: Assigned Feature Flags"](https://github.com/lightning/bolts/blob/master/09-features.md). *lightning/bolts*.
[^bolt-taproot]: ["Extension BOLT XX: Simple Taproot Channels"](https://github.com/lightning/bolts/blob/master/bolt-simple-taproot.md). *lightning/bolts*.
[^bolts-repo]: ["lightning/bolts"](https://github.com/lightning/bolts). GitHub repository.
[^optech-splicing]: ["Splicing"](https://bitcoinops.org/en/topics/splicing/). *Bitcoin Optech* topics. Retrieved October 2026.
[^optech-taproot]: ["Simple taproot channels"](https://bitcoinops.org/en/topics/simple-taproot-channels/). *Bitcoin Optech* topics. Retrieved October 2026.
[^eclair-014]: ["Eclair v0.14.0"](https://github.com/ACINQ/eclair/releases/tag/v0.14.0). *ACINQ/eclair* GitHub release, 21 May 2026.
[^cln-2604]: ["v26.04"](https://github.com/ElementsProject/lightning/releases/tag/v26.04). *ElementsProject/lightning* GitHub release, 20 April 2026.
[^lnd-repo]: ["lightningnetwork/lnd"](https://github.com/lightningnetwork/lnd). GitHub.
[^cln-repo]: ["ElementsProject/lightning"](https://github.com/ElementsProject/lightning). GitHub.
[^eclair-repo]: ["ACINQ/eclair"](https://github.com/ACINQ/eclair). GitHub.
