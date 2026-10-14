---
title: Decentralized application
description: How DApps combine user interfaces with blockchain programs and shared network state
aliases: [DApp, DApps, Decentralized apps, Decentralized applications]
categories: [Blockchain technology, Smart contracts, Applications]
updated: 2026-10-13
---
A **decentralized application**, usually shortened to **DApp**, uses backend logic maintained through a decentralized network rather than relying entirely on one operator's server. Many DApps combine an ordinary website or mobile interface with [smart contracts](../Smart_contract/) on a blockchain. The interface makes the application usable, while the contracts maintain shared rules and state.[^dapps]

Decentralization is a matter of architecture and control. An application can settle transactions through a distributed network while depending on a centrally hosted website, a single data provider or an administrator with powerful upgrade permissions. Calling an application a DApp does not establish that every component is decentralized.

## From an ordinary app to a DApp

In an ordinary online application, a company commonly operates the database and decides which updates are accepted. A user signs in, sends a request and relies on the service to update its records correctly. Users may have contractual remedies or customer support, but they usually cannot independently execute the company's backend rules.

In a blockchain-based DApp, a transaction can ask a contract to update publicly shared state. Network participants check the update under the protocol's rules. This makes certain operations independently verifiable and can allow several interfaces to access the same contract.

The difference does not mean that conventional servers disappear. Search, notifications, images, analytics and customer support can still use them. The meaningful question is which part of the application remains usable or verifiable if one operator becomes unavailable.

## The components of a DApp

| Component | Role | A beginner's question |
|---|---|---|
| Frontend | Displays information and prepares actions | Who hosts the website or distributes the app? |
| Wallet | Manages authorization | What exactly am I signing? |
| Network connection | Reads state and submits transactions | Can another provider be used if this one fails? |
| Smart contracts | Apply the application's on-chain rules | Which contracts and versions are involved? |
| Oracle | Supplies outside data where needed | Who supplies it and how is it checked? |
| Storage | Holds files or records outside the chain | Will the content remain available? |
| Governance or administrator | Changes parameters or implementations | Who has authority and what delay applies? |

A DApp need not use every component. A simple collectible contract might have little external data, whereas a lending application may depend heavily on price feeds.

## An illustrative ticket application

Consider a fictional event with 100 digital tickets. A contract records the number available and the address controlling each issued ticket. The website displays the event and prepares a purchase request when a visitor selects a ticket.

The visitor's wallet shows the requested transaction. After approval, the transaction is submitted to the network. The contract checks the supplied payment and remaining availability. If the conditions pass, it records the ticket for the buyer; if they fail, the purchase is rejected. Other participants can inspect the resulting record.

This example separates several responsibilities. The contract can prevent selling more than its programmed inventory, but it cannot guarantee that a concert takes place. Venue staff must still connect the digital ticket to admission. If a website falsely describes the event, correct contract execution does not make the description true.

## Connecting, signing and paying are different actions

Connecting a wallet usually lets an interface see selected public addresses and request actions. It does not ordinarily give the website unrestricted control of funds. A later signature or transaction can, however, grant important permissions.

A token approval authorizes a specified spender under the token's rules. A transfer moves assets. A message signature can establish login identity, but some signed messages also create spending or trading authority. Consequently, “no gas fee” does not mean “no consequence.”

For the ticket example, an application might need a payment-token approval before the purchase transaction. The user should be able to distinguish the spender, permitted amount and purchase itself. An unexpected request for broad authorization deserves careful review.

## What smart contracts contribute

Shared contracts can allow **composability**: another application can use existing contracts as components. A trading application, for instance, might route through liquidity maintained by a separate protocol. Users can benefit from shared infrastructure, but a dependency's failure can also spread to applications built on it.

Publicly available rules can improve inspection. Nevertheless, readable source code is useful only if it corresponds to the deployed program, and most users cannot personally audit complicated software. An audit is evidence of a review within a scope and time period, not a guarantee that every possible failure has been eliminated.

## Outside information and upgrade authority

A blockchain does not independently know a real-world delivery status or market price. An **oracle** brings such information into the system. A contract can follow its instructions perfectly and still produce a harmful result if the supplied information is stale or wrong.[^oracle]

Some applications also use upgradeable contracts. A proxy can direct calls to an implementation that authorized parties can replace. This supports repairs and new features, but it makes the identity and powers of those parties important.[^upgrade]

For the fictional ticket service, an administrator might be able to pause sales or change the ticket price. Those powers can be useful during an incident, but they also limit claims that the application has no controlling party. Clear documentation should describe ordinary permissions and emergency permissions separately.

## Costs and performance

On-chain state changes generally incur network costs. Reading public information does not necessarily require the reader to pay a blockchain fee, although a service provider may charge for access. Applications can sponsor transactions or use [Layer 2 networks](../Blockchain_scaling/), changing how costs appear to the user.

A failed action can still cost money when the network has attempted execution. A quote shown before submission can also become outdated as prices or application state change. Transaction simulation can help explain expected effects, but it cannot guarantee that conditions remain identical until execution.

## Availability and censorship resistance

If one frontend disappears, a contract may remain available through another interface. That possibility is a useful form of resilience, but it depends on accessible contract information, network connections and any necessary external data. A user should not assume that a familiar web interface will always be available merely because its backend uses a blockchain.

Similarly, a decentralized ledger does not make every access route censorship-resistant. A website or infrastructure provider can restrict access, and a contract can contain permissions or blocklists. Evaluating the complete service requires examining each layer.

## Recognizing common application types

[DeFi](../Decentralized_finance/) applications support functions such as swapping and collateralized borrowing. [NFT](../Non-fungible_token/) applications create or exchange individually identified tokens. [GameFi](../Blockchain_gaming/) applications can represent game assets on-chain while keeping most gameplay elsewhere. [DAOs](../Decentralized_autonomous_organization/) use applications for proposals, voting and treasury operations.

These categories explain purpose, not quality. A game can be enjoyable without its assets appreciating; a governance interface can work well while voting power remains concentrated. Readers should evaluate the service, authority and economic claims separately.

## See also

- [Smart contract](../Smart_contract/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)
- [Blockchain scaling](../Blockchain_scaling/)
- [Crypto glossary](../Crypto_glossary/)

## References

[^dapps]: Ethereum. [Introduction to DApps](https://ethereum.org/en/developers/docs/dapps/).
[^oracle]: Ethereum. [Oracles](https://ethereum.org/en/developers/docs/oracles/).
[^upgrade]: Ethereum. [Upgrading smart contracts](https://ethereum.org/en/developers/docs/smart-contracts/upgrading/).
