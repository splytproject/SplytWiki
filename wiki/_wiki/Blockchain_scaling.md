---
title: Blockchain scaling and Layer 2 networks
description: How Layer 1 networks, rollups, sidechains and high-throughput blockchains increase capacity
aliases: [Layer 1, Layer 2, L1, L2, Rollup, Rollups, Sidechain, Blockchain scalability]
categories: [Blockchain technology, Ethereum, Scaling]
updated: 2026-10-13
---
**Blockchain scaling** means increasing a network's useful capacity while managing costs and security tradeoffs. A **Layer 1**, or L1, is a base blockchain such as Bitcoin or Ethereum. A **Layer 2**, or L2, processes activity through an additional system with a defined relationship to the base layer's settlement and security.

Lower fees alone do not make a network an L2. An independent chain can also be inexpensive. To understand a scaling design, ask where transactions execute, how their correctness is checked, where their data is available and how users can recover their assets.

## Why capacity becomes scarce

Networks must prevent incompatible histories and unauthorized spending. Processing transactions requires computation, communication and storage. If demand for a limited amount of block space rises, users can compete by paying more. Increasing capacity is therefore not just a matter of changing a displayed fee.

A larger workload can also raise the equipment and bandwidth required to participate. That affects who can independently verify the chain. Different systems choose different balances between capacity, hardware requirements, coordination and decentralization.

A useful analogy is a shared accounting office. Processing each receipt individually is straightforward but costly. Grouping receipts can spread overhead across many customers, but the office still needs a reliable way to check the totals and obtain the underlying records. Rollups apply a more technical version of that separation between work and verification.

## Layer 1 and Layer 2

An L1 maintains its own consensus rules and history. Its participants decide which blocks are valid under those rules. An L2 shifts some work away from the base chain while using it for specified guarantees. The precise guarantees vary; users should not assume that every L2 has identical safeguards.

**Execution** means applying transaction instructions. **Settlement** means recording an accepted outcome under the relevant rules. **Data availability** means that the information needed to verify or reconstruct outcomes can be obtained. A scaling system can place these functions in different locations.

| Design | Where execution happens | Main correctness mechanism | Additional questions |
|---|---|---|---|
| Base-layer transactions | On the L1 | Its consensus and validation rules | What resources are required to verify it? |
| Optimistic rollup | Outside the L1 | Claims subject to challenges | Who can challenge, and when can funds exit? |
| Validity-proof rollup | Outside the L1 | Cryptographic proofs checked on the L1 | When are proofs submitted and is data available? |
| Sidechain | On an independent chain | The sidechain's own consensus | Who secures the chain and bridge? |
| High-throughput L1 | On a separate base chain | That chain's protocol | What hardware and coordination assumptions apply? |

## How rollups group transactions

A **rollup** executes multiple transactions away from the base layer and submits the material needed for its settlement design. This spreads some base-layer overhead across a batch. Users typically interact through wallets and applications much as they would on an L1, but balances and transaction histories belong to the particular L2.

A **sequencer** orders transactions. Quick sequencer acknowledgments can improve the user experience, but an acknowledgment is not necessarily the same as final settlement on the base chain. A sequencer outage can affect availability even where the design provides mechanisms for eventual recovery.

The relevant question is therefore not simply whether a system “uses Ethereum.” Readers should examine the proof or challenge system, operator powers, upgrade controls and exit arrangements.

## Optimistic rollups

An **optimistic rollup** accepts proposed execution results subject to a dispute process. Participants can challenge invalid results during the permitted period. Transaction data is published through mechanisms such as calldata or blobs so that execution can be checked. Canonical withdrawals can require waiting for the dispute process to complete.[^optimistic]

“Optimistic” does not mean that the system merely trusts everyone to behave. It describes how claims are accepted and challenged. The effectiveness of the design depends on its implemented rules, available data and ability to submit challenges.

A faster withdrawal service may advance funds to the user before the ordinary process finishes. That convenience adds a separate service relationship, with its own price, liquidity and operational risks. The ordinary withdrawal and the accelerated service should not be treated as the same mechanism.

## Validity proofs and ZK rollups

A **ZK rollup** uses a cryptographic validity proof to show that a batch follows the system's execution rules. A base-layer contract verifies the proof. Proof generation requires substantial computation, but checking a proof can be more compact than repeating every transaction directly on the base chain.[^zk]

The term “zero knowledge” is often associated with privacy, but a validity-proof rollup is not automatically private. Public transaction information can remain visible. Here the central function of the proof is to establish a correct state transition.

Withdrawals depend on proof submission, verification and the system's own rules. Users should not assume immediate settlement simply because the interface displays a completed transaction. Data availability, operator outages and administrative controls remain relevant even when invalid transitions cannot pass the proof verifier.

## Sidechains use their own security

A **sidechain** is an independent blockchain connected to another network, commonly through a bridge. Its validators and consensus secure its history. Compatibility with Ethereum applications or addresses does not make it inherit Ethereum's consensus security.[^sidechain]

A bridge introduces another mechanism to inspect. In one common design, assets are locked on one chain and a representation is issued elsewhere. A problem with the locking contract, validator set or message verification can undermine that representation. A working destination chain alone does not prove that the bridge's backing is intact.

Imagine a claim ticket issued against a stored item. The ticket can change hands efficiently, but its usefulness still depends on the storage and redemption arrangement. The analogy explains why bridge security and destination-chain speed answer different questions.

## High-speed networks

Some L1s pursue capacity through their own execution architecture. Solana transactions identify the accounts their instructions use, allowing independent work to be scheduled where dependencies permit.[^solana] Solana is a separate L1, not an Ethereum L2 merely because it targets high throughput.

Throughput comparisons need context. A laboratory maximum, an average observed rate and a count including consensus-related activity are different measurements. Transactions can also involve very different amounts of computation. A simple transfer should not be treated as equivalent to a complicated application operation.

User experience depends on more than transactions per second. Reliability, fee predictability, wallet support, application availability and the time until settlement all matter. A single headline number cannot capture those dimensions.

## Three meanings of a fast transaction

A fictional rollup wallet might show an accepted transaction almost immediately, record its batch on an L1 later, and permit a canonical withdrawal after a further process. These are three milestones: local acknowledgment, base-layer settlement and exit availability. The exact timing depends on the implementation.

This distinction matters for a merchant accepting payment, an exchange crediting a deposit and a user moving funds out of the system. Each may require a different level of assurance before acting.

## Practical navigation

Before sending an asset, verify that the receiving service supports the exact network and token representation. The same address format does not guarantee that a service monitors every chain using that format. Also identify which asset pays fees on the destination, so funds do not arrive in an account that cannot make its next transaction.

When assessing a scaling system, check who can upgrade its contracts, what happens if operators disappear, whether ordinary users can submit transactions or exit independently, and what information is published for verification. These questions make the tradeoffs understandable without requiring a reader to become a cryptographer.

## See also

- [Ethereum](../Ethereum/)
- [Solana](../Solana/)
- [Smart contract](../Smart_contract/)
- [Decentralized application](../Decentralized_application/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)

## References

[^optimistic]: Ethereum. [Optimistic rollups](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/).
[^zk]: Ethereum. [Zero-knowledge rollups](https://ethereum.org/en/developers/docs/scaling/zk-rollups/).
[^sidechain]: Ethereum. [Sidechains](https://ethereum.org/en/developers/docs/scaling/sidechains/).
[^solana]: Solana. [Transactions](https://solana.com/docs/core/transactions).
