---
title: Altcoins and tokens
description: How alternative cryptocurrencies, governance tokens, utility tokens and meme coins work
aliases: [Altcoin, Altcoins, Utility token, Governance token, Meme coin, Tokenomics]
categories: [Cryptocurrencies, Tokens, Economics]
updated: 2026-10-23
last_modified: 2026-10-23
---
An **altcoin** is a cryptocurrency other than [Bitcoin](../Bitcoin/). A **token** is a digital asset recorded on a blockchain, often through a [smart contract](../Smart_contract/). These words describe different things: *altcoin* compares an asset with Bitcoin, while *token* describes how an asset is represented. Neither word establishes whether an asset is useful, safe, decentralized or legally classified as a security.

Some assets pay for network operation, some grant access to services, some support voting, and others primarily represent cultural identity or speculation. Several roles can overlap. Understanding those roles is more useful than assuming that every token behaves like a share in a company.

## Coins and tokens

A **native coin** belongs to a blockchain's underlying protocol. Ether is native to Ethereum and SOL is native to Solana. A token can instead use infrastructure supplied by an existing network: a developer can issue a token without building a new blockchain. The network's validators process its transactions, while the token contract defines balances and transfer rules.

The distinction matters when paying transaction fees. Someone holding a token on Ethereum generally needs ether to pay for an ordinary transaction. Certain wallets or applications arrange sponsored fees, but the token's balance alone does not necessarily cover network costs. The same token name can appear on several networks; the network and contract address help identify the particular asset.

## Token roles at a glance

| Category | What the holder can do | What to examine |
|---|---|---|
| Native network coin | Pay fees or participate in network security where supported | Actual network demand, issuance and security model |
| Governance token | Vote or delegate voting power | Scope of voting, concentration and execution authority |
| Utility token | Access or pay for a specified service | Whether the service exists and requires the token |
| Meme coin | Participate in a culturally themed asset community | Liquidity, distribution and dependence on attention |
| Stablecoin | Transfer a token intended to track a reference value | Reserves, redemption and peg mechanism |
| Asset-representing token | Represent a stated claim or right | Legal terms, custody and enforceability |

These categories are descriptive. A marketing label cannot decide an asset's legal treatment, and a project may change functionality over time.

## Governance tokens

A **governance token** provides a role in collective decisions. Depending on the system, holders can propose changes, vote on spending, select parameters or delegate votes to another participant. Uniswap's governance documentation describes governance participation and delegation through UNI.[^uni] The broader process is explained in [decentralized autonomous organizations](../Decentralized_autonomous_organization/).

A vote is meaningful only within its defined scope. For example, a hypothetical community might vote on grants but have no authority over a company operating its website. Alternatively, approved votes might queue transactions that a contract executes after a delay. Readers should identify who controls the treasury, who can change contracts and whether an administrator can override ordinary decisions.

Token ownership does not automatically confer company ownership, a claim on profits or a legal right to dividends. Those rights require specific arrangements. A popular application can therefore attract many users without distributing its income to token holders.

### A simple voting example

Suppose a fictional protocol has 1,000 eligible voting units and requires 200 participating units for quorum. A proposal receives 150 votes in favour and 30 against. Although supporters dominate votes cast, the proposal fails the participation requirement. If one participant controls 500 units, token-weighted voting also differs substantially from one-person-one-vote democracy. Delegation can improve participation, but it can concentrate influence in a small group of representatives.

## Utility tokens

A **utility token** has a specified function within a service. That function might involve paying for data, accessing computing resources or supplying collateral for a network role. LINK, for example, is associated with Chainlink oracle service payments and security incentives.[^link] An **oracle** supplies information that a smart contract cannot independently obtain from the outside world.

The useful question is what a user can actually do with the token today. A promised future product is different from an operating service. A functioning service is also different from a service that genuinely needs a freely traded token. Some applications could accept conventional payments without changing their basic purpose.

A token's usefulness does not determine its market price on its own. Supply, competition, transaction frequency, incentives and market expectations also matter. Users may buy a token immediately before using it, and providers may sell it immediately afterward. In that case, a growing service does not automatically produce a proportionate increase in long-term token holdings.

## Meme coins

**Meme coins** typically develop around jokes, personalities, internet culture or community identity. Their appeal can include entertainment, social participation and collecting, while their trading value often depends heavily on attention and expectations of future demand. Some acquire additional features, but those features should be assessed individually.

A February 2025 SEC staff statement discussed typical meme coins as assets whose value arises largely from market demand and speculation. The statement is a staff view without independent legal force and concerns the circumstances it describes. It does not create a worldwide exemption from law or fraud liability.[^meme]

Low unit prices can be misleading. A fictional token priced at 0.001 currency units with one trillion circulating units has a market capitalization of one billion currency units. It is not necessarily cheaper, in valuation terms, than a token with a much higher price and a much smaller supply.

## Supply and tokenomics

**Tokenomics** means the economic design of a token: its supply, distribution, incentives and uses. **Circulating supply** is the quantity considered available in the market; definitions can differ between data providers. **Market capitalization** is price multiplied by circulating supply. **Fully diluted valuation** estimates valuation using a larger eventual supply, often maximum or total supply, so the chosen denominator matters.

An **unlock** makes previously restricted tokens transferable. Unlocks do not guarantee a price decline, but they can change the amount available for sale. **Inflation** creates additional units. A **burn** removes units under defined rules, but burning tokens does not guarantee that demand or price will increase.

Imagine an application that doubles its customers while its transferable token supply triples. Even if the application is improving, existing holders can experience dilution. Conversely, a supply cap alone cannot create buyers for a service nobody wants. These are illustrative economic relationships, not price forecasts.

## Real use and speculative value

**Use value** concerns a function the asset performs. **Speculative value** reflects what buyers expect someone else will pay in the future. Both can exist simultaneously. A governance token can support real votes while most trading volume comes from people who never vote. A meme coin can support an active community while providing little functionality beyond transfer and trading.

Liquidity is another separate issue. An apparent market value does not mean every holder can sell at the displayed price. Thin markets can move sharply during a large sale, while a token's quoted price may come from a small trade. Contract restrictions can also affect whether transfers or sales are possible.

A beginner's review can start with six questions: What works now? Who needs the token? Who controls supply? Who can change the rules? What rights does ownership actually grant? Where can holders exit, and with what trading costs? These questions connect marketing claims to observable mechanisms.

## Common misunderstandings

A token listing is not proof of quality. A large community is not proof of decentralized control. A low price per unit is not proof of low valuation. Staking rewards are not automatically business profits: rewards funded through new issuance can redistribute ownership while diluting holders. A functioning protocol is not a guarantee that its token will retain value.

## See also

- [Stablecoin](../Stablecoin/)
- [Crypto glossary](../Crypto_glossary/)
- [Decentralized autonomous organization](../Decentralized_autonomous_organization/)
- [Cryptocurrency regulation](../Cryptocurrency_regulation/)

## References

[^uni]: Uniswap. [Governance overview](https://developers.uniswap.org/docs/ecosystem/governance/overview).
[^link]: Chainlink. [What is the LINK token?](https://chain.link/article/what-is-link-token).
[^meme]: US Securities and Exchange Commission (27 February 2025). [Staff statement on meme coins](https://www.sec.gov/newsroom/speeches-statements/staff-statement-meme-coins).
