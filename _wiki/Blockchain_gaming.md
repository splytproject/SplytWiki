---
title: "Blockchain gaming (GameFi)"
description: Beginner-friendly guide to play-to-earn models, tokenized game assets, digital ownership and virtual land economies
aliases: [GameFi, Blockchain Gaming, Play-to-earn, Play to earn, P2E, Web3 gaming, NFT gaming, Virtual land economies]
categories: [Blockchain gaming, Non-fungible tokens, Blockchain technology]
updated: 2026-10-13
infobox:
  title: Blockchain gaming
  rows:
    - Also called: GameFi, Web3 gaming, NFT gaming
    - Main components: Games, tokens, wallets and smart contracts
    - Reward models: Play-to-earn, competition and creator rewards
    - Digital assets: Characters, equipment, currencies and virtual land
    - Ownership technology: Blockchain token records
    - Examples: Axie Infinity, Decentraland and The Sandbox
---
**Blockchain gaming** is the use of [blockchain](../Blockchain/) technology in video games and virtual worlds to record assets, transfers or selected game operations. **GameFi**, a combination of *game* and *finance*, commonly describes projects that connect gameplay with tradable tokens, player-owned assets or financial incentives. A blockchain game can use these features without offering earnings, and the term GameFi has no single technical specification.

Three central concepts are **play-to-earn models**, which distribute rewards for participation; **in-game assets**, which may be represented by [non-fungible tokens](../Non-fungible_token/) (NFTs) or interchangeable tokens; and **virtual land economies**, in which users create, exchange or rent spaces within a digital world. Examples include Axie Infinity's token-based game economy and the creator and land systems of Decentraland and The Sandbox.[^axieeconomy][^dclland][^sandboxearn]

The practical value of these systems depends on the game, its community and its rules. Holding a token does not guarantee income, permanent access to a game or a buyer when the holder wishes to sell.

## Basic concepts

### How a blockchain game differs from a conventional game

Conventional games usually maintain inventories and balances in databases operated by the publisher. Some allow item trading or creator payments, so player commerce is not exclusive to blockchain games. The main distinction is where the relevant records are maintained and how users can interact with them.

In a blockchain game, a contract may record that a wallet address holds a character or an amount of currency. Transfers can follow publicly inspectable contract rules. However, the game may still depend on company-operated servers for combat, matchmaking, artwork and account management.

| Feature | Conventional game design | Blockchain game design |
|---|---|---|
| Inventory record | Usually held in the publisher's database | Some assets can be recorded on a blockchain |
| Account access | Publisher account and login | May combine an account with a wallet |
| Item transfers | Governed by the publisher's system | May use token transfers, subject to contract and game rules |
| Marketplace | Can be operated by the publisher or an approved service | Can include compatible external token marketplaces |
| Game operation | Commonly depends on publisher infrastructure | May also depend on publisher infrastructure |

These are typical design patterns, not universal rules. The amount of blockchain integration varies between projects.

### Tokens, NFTs and wallets

A **fungible token** represents interchangeable units, such as a game's trading currency. An **NFT** identifies a distinct item or collectible record. A [wallet](../Cryptocurrency_wallet/) manages access to the keys or signing mechanisms used to authorize blockchain transactions.

On Ethereum-compatible systems, ERC-721 supports individual token identities, while ERC-1155 supports quantities of multiple token types within one contract.[^erc721][^erc1155] A fictional game could use individually identified characters and interchangeable quantities of potions. It need not tokenize every inventory entry.

For a detailed comparison, see [Non-fungible tokens: ERC-721 and ERC-1155 standards](../NFT_standards/).
{: .hatnote}

## How blockchain gaming works

### The game layer and the blockchain layer

Many designs divide responsibilities between two layers:

- **The game layer** handles movement, battles, graphics, quests and social interaction.
- **The blockchain layer** records selected assets, payments, permissions or settlement.

An action performed **off-chain** is handled outside the blockchain. An **on-chain** action changes or reads blockchain state. A game might calculate a match result on its servers, then let an eligible player claim a reward through a contract. These are separate steps.

This division matters because blockchain records alone may not prove that an off-chain match was fair. The reward system also depends on how results are validated and communicated to the contract.

### A simplified player journey

In an illustrative game, a participant might:

1. Create an account and start with free equipment.
2. Connect or create a supported wallet when using token features.
3. Complete challenges that qualify for rewards.
4. Claim eligible tokens or items under the game's rules.
5. Keep, use, transfer or offer the assets for sale.

Some games provide embedded wallets or sponsor transaction fees to simplify this process. Other games require users to manage wallets and network fees themselves. Purchasing an NFT is not an unavoidable first step in every blockchain game.

### Networks and transaction costs

A blockchain transaction may require a **gas fee**, a payment for processing work on the network. Games can choose networks or scaling systems intended to reduce costs and waiting times. This choice also affects which wallets, marketplaces and security assumptions apply.

Moving assets between networks may require a **bridge**. A bridge introduces an additional system that must be trusted or verified; it is not simply the same as moving an item between two addresses on one chain.

## Play-to-earn models

**Play-to-earn** (**P2E**) describes a reward model in which qualifying gameplay can produce tokens or assets that may be transferable or tradable. Rewards can depend on performance, participation, resource production or seasonal objectives. The phrase describes a mechanism, not a guaranteed wage.

### Common reward arrangements

| Model | How rewards are obtained | Main question to examine |
|---|---|---|
| Activity rewards | Completing eligible tasks or matches | What limits issuance and prevents automated farming? |
| Competitive rewards | Ranking in a tournament or season | How many participants receive prizes, and who funds them? |
| Resource production | Gathering materials or crafting items | Who wants the resulting resources? |
| Creator rewards | Building content, experiences or assets | How are creators paid and what costs do they bear? |
| Promotional rewards | Participating in a sponsored event | Does the reward programme continue after the promotion? |

These categories describe possible designs. A particular game may combine several, and eligibility can change over time. The Sandbox, for example, documents player events, asset creation and experience development as different forms of participation in its economy.[^sandboxearn]

### Play-and-earn and free-to-play

**Play-and-earn** often emphasizes gameplay with rewards as an additional feature. It does not establish a separate technical guarantee. **Free-to-play** concerns entry cost: a game may allow free participation while selling optional assets or restricting some reward activities.

These labels answer different questions. Whether a game is enjoyable, whether entry is free and whether rewards can be sold should be assessed separately.

### Earning a reward versus making a profit

A token balance is not the same as realized income. The player must be able to sell or otherwise use the reward, and participation may incur costs.

Consider a fictional player who receives 100 reward tokens:

| Calculation | Illustrative amount |
|---|---|
| Tokens received | 100 |
| Actual sale price per token | 0.05 currency units |
| Gross sale proceeds | 5.00 currency units |
| Trading and network fees | 1.00 currency unit |
| Consumed game resources | 2.00 currency units |
| Proceeds after these costs | 2.00 currency units |

This example assumes the entire reward sells at the stated price. It excludes equipment purchases, the player's time and any applicable taxes. If the actual sale price falls to 0.02 units per token, gross proceeds become 2 units and the same listed costs exceed the proceeds.

**Liquidity** is the ability to trade without excessive difficulty or price impact. A displayed price does not ensure that a large holding can be sold at that price. Rare items may have no immediate buyer at all.

### Where rewards come from

Rewards can be funded through newly issued tokens, an existing treasury, player purchases, sponsorship or other revenue. These sources have different implications. Distributing newly created tokens increases balances but does not automatically create demand for them.

If a fictional game awards 10,000 tokens each day while players spend or retire only 2,000, the circulating quantity can grow by 8,000 tokens, assuming no other changes. Whether the price falls depends on demand and market conditions; the imbalance alone is not a precise price forecast.

## Token economies and sustainability

**Tokenomics** describes the rules governing a token's issuance, distribution, uses and incentives. In games, it also concerns how rewards interact with player behaviour.

### Sources and sinks

A **source**, sometimes called a faucet, introduces currency or resources into the economy. A **sink** removes them from circulation or consumes them in use.

| Economic mechanism | Fictional example |
|---|---|
| Source | A quest issues 20 crafting tokens |
| Transfer | A player pays another player for a sword |
| Treasury payment | An upgrade fee goes to the game's treasury |
| Sink | Crafting permanently consumes 10 tokens |
| Item retirement | Combining three items removes them and creates one new item |

A payment is not necessarily a sink. If the treasury can later spend received tokens, they remain part of the economic system. **Burning** means removing tokens from the relevant supply rather than merely moving them to another participant.

### Demand for useful gameplay

An economic design is more resilient when participants want its experiences, assets or services for their use, rather than solely because they expect to resell them at a higher price. This is an analytical principle, not a guarantee of success.

For example, a player may purchase an appearance item because they enjoy using it. A creator may rent a venue because it attracts visitors. These purchases have a purpose independent of anticipated resale gains. By contrast, an economy heavily dependent on new buyers funding existing players' exits is vulnerable when new demand slows.

Axie Infinity's economic documentation discusses the balance between asset creation, demand and long-term participation. Its design illustrates why a reward economy must consider both issuance and reasons to use the assets.[^axieeconomy]

### Single-token and multiple-token designs

A game can use one token for several functions or separate payment, reward and governance roles. Separating roles may give developers more flexibility, but it adds complexity and does not prevent volatility.

A **governance token** may provide voting rights under specified rules. It is not automatically a share in the developer, a claim to profits or a right to control every game decision. Those features must be established separately.

## In-game assets and digital ownership

Tokenized game assets can include characters, equipment, cosmetics, crafting materials and access passes. What the token represents is determined by the contract and the game's interpretation of it.

### The layers of an asset

| Layer | Example for a fictional sword |
|---|---|
| Token identity | A particular contract and token ID |
| Metadata | Name, description and an image reference |
| Gameplay properties | Damage, durability and allowed uses |
| Access and licence | Conditions for displaying or using associated content |

The blockchain may record the token while servers determine the sword's combat statistics. A balance update or game patch can therefore change its usefulness without changing its token ID.

### What ownership permits

Depending on the design, holders may be able to transfer an asset, offer it on a marketplace, lend access or use it in supported experiences. Actual permissions depend on contract restrictions and application rules.

Ownership of the token does not automatically confer copyright over its image or unrestricted rights in the game. It also does not guarantee that the game will continue recognizing the asset if the service changes or closes.

### Interoperability

**Interoperability** means that different systems can work together. Token standards make ownership records and transfers easier for compatible software to read. They do not automatically make an asset playable in another game.

For a sword to work in a second game, that game must support its graphics, gameplay meaning and permissions. Developers must decide whether its abilities fit their rules. Two games reading the same token format is only one part of this task.

### Rentals, guilds and shared access

Some arrangements let an asset owner provide access to another player in exchange for a fee or a share of rewards. Groups coordinating players and assets are often called **guilds**. In a **scholarship** arrangement, a provider may supply assets while a player supplies time and receives an agreed reward share.

Such arrangements must specify who controls the asset, how rewards are calculated, whether access can be revoked and who bears losses. They do not necessarily transfer token ownership. Sharing a wallet's secret recovery phrase is different from granting narrowly defined access and exposes control of the wallet itself.

## Virtual land economies

**Virtual land** is a designated space or parcel within a digital world. A land token can identify its location and the holder recognized by the platform. It represents a platform-specific digital asset, rather than physical land.

Decentraland's LAND Manager supports transfers, development permissions and the grouping of adjacent parcels into estates. The Sandbox describes LAND as space for publishing experiences.[^dclland][^sandboxland]

### How land can be used

Possible uses include games, galleries, social venues, events and branded experiences. A land economy connects owners, creators and visitors:

1. An owner holds a parcel or makes it available to a creator.
2. A creator develops an experience under the world's rules.
3. Visitors participate in the experience.
4. Payments, sponsorship or other supported activity may generate revenue.
5. Participants divide revenue and costs according to their arrangement.

This describes a possible business process, not an automatic feature of every parcel. Owning empty space alone does not create visitors or revenue.

### Scarcity and location

A virtual world may limit its recognized parcel supply. This creates scarcity within that system, but alternative worlds and digital experiences can still compete for users' attention.

Location can matter if the design makes nearby destinations, map discovery or social hubs important. Teleportation, search and event recommendations can reduce the importance of distance. The relevant question is how visitors actually discover and use a venue.

For a fictional music venue, a parcel near a busy hub might be useful. A remote parcel could still attract visitors through a popular scheduled concert. Coordinates alone cannot establish economic value.

### Renting and development permissions

Rental separates use of a space from its permanent token ownership. Decentraland documents a rental system involving off-chain signatures and on-chain transactions; its land-management tools also distinguish editing permissions from the ability to sell a token.[^dclrent][^dclland]

A rental arrangement should define duration, permitted content, payments, termination and control over deployed work. A **development permission** authorizes building or editing; a **transfer approval** can authorize movement of the token. Confusing the two can expose more control than intended.

### Revenue and expenses

A fictional parcel owner might rent a venue for 40 currency units per month. If construction amortization, maintenance and promotion total 30 units, the simplified operating surplus is 10 units. If no tenant renews, rental revenue may fall to zero while some costs continue.

This calculation excludes the purchase price, financing, taxes and changes in the land token's resale value. **Operating revenue**, **operating profit** and **capital gains** are different measures. A parcel's rising listed price does not pay its running expenses unless a sale or another funding source produces usable funds.

## Examples of different approaches

These examples illustrate mechanisms rather than recommend purchases. Reward eligibility, supported features and economic rules can change; official documentation should be checked for a particular game version or event.

### Axie Infinity

Axie Infinity combines collectible creatures with game systems and a token economy. Its economic documentation describes the use of SLP and AXS in breeding.[^axieeconomy] Sky Mavis support documentation also describes using in-game SLP to craft runes and charms, and distinguishes in-game balances from tokens claimed and minted on the blockchain.[^slp]

This illustrates the connection between a gameplay reward, a resource use and a market. Receiving a resource does not ensure that its market price or the cost of participating will remain constant.

### Decentraland

Decentraland is a virtual world with tokenized land and user-created scenes. Adjacent parcels can be grouped into estates, and owners can grant others permission to edit content. Its DAO provides a governance mechanism for eligible participants and specified decisions.[^dclland][^dcldao]

This example highlights the distinction between ownership, creative work and governance. A virtual world can have an economy without operating primarily as a competitive play-to-earn game.

### The Sandbox

The Sandbox connects LAND with creator-built experiences and provides tools and programmes for players and creators. Its documentation describes participation through events, creating assets and developing experiences.[^sandboxland][^sandboxearn]

This illustrates a **creator economy**: economic activity can arise from producing content and attracting an audience, rather than simply repeating rewarded game actions.

## Governance and administration

A project may let token holders vote through a **decentralized autonomous organization** (DAO). Governance can cover grants, selected economic parameters or community decisions. Decentraland's documentation describes predefined proposals for actions involving DAO-controlled resources and contracts.[^dcldao]

Governance must be assessed through actual permissions. Important questions include who can submit proposals, how voting power is assigned, what decisions votes can execute and which powers remain with developers or administrators.

An economy can be transparent in some respects while relying on a small group for server operation, contract upgrades or reward verification. Using a blockchain does not establish complete decentralization.

## Risks and design challenges

### Market and economic risks

Token prices can fluctuate, reward rules can change and buyers can disappear. Entry costs may be difficult to recover. Automated farming or excessive issuance can undermine a reward programme, while concentrated asset ownership can affect access and competition.

**Pay-to-win** describes a design where spending provides a substantial competitive advantage. If expensive assets determine reward eligibility or success, an advertised opportunity to earn may be less accessible than it appears.

### Security and infrastructure

Players can face malicious links, counterfeit assets, deceptive signatures, contract bugs and compromised accounts. Bridges add their own risks. Ronin's official account of its 2022 bridge incident describes drained assets, reimbursement and subsequent security changes, illustrating that infrastructure supporting a game can fail independently of gameplay.[^ronin]

An audit helps assess specified code at a point in time. It does not guarantee that every connected system, future upgrade or account is secure.

### Service dependence and preservation

A token can continue to exist after a game closes, but its original utility may disappear. Images, metadata and game clients can rely on services outside the blockchain. Preserving a token record is different from preserving a playable experience.

### Fairness and accessibility

Financial rewards can change player incentives. Designers must consider whether the game remains enjoyable when participants optimize solely for returns, whether bots displace people and whether new players can compete without high spending.

Wallet complexity, fees and technical requirements can also exclude users. Improving onboarding should be evaluated alongside the transparency of custody and permissions.

## Questions for evaluating a project

A beginner can examine a project through practical questions:

- **Gameplay:** What is enjoyable without assuming future earnings?
- **Entry:** Can people play for free, and which features require payment?
- **Rewards:** What qualifies, who funds them and can they actually be withdrawn or sold?
- **Assets:** Which records are on-chain, and who can change supply or gameplay properties?
- **Land:** What can be built, how are visitors attracted and what expenses continue during inactivity?
- **Control:** Who holds keys, operates servers and can change contracts or rules?
- **Exit:** Is there meaningful market liquidity, and what happens if the service closes?

These questions distinguish technical ownership, game usefulness and economic performance. Each should be supported by the project's actual rules rather than its promotional labels.

## Frequently asked questions

### Does every blockchain game require NFTs?

No. A game may use fungible tokens, on-chain rules or blockchain settlement without issuing collectible NFTs.

### Can play-to-earn guarantee a regular income?

No. Eligibility, reward quantities, market prices, costs and liquidity can all change. A reward programme is not inherently an employment agreement.

### Can a player lose an NFT when the game closes?

The token may remain recorded on its blockchain, but gameplay access, hosted content and market demand can disappear. Contract permissions and custody arrangements also matter.

### Is virtual land necessary to play?

Not universally. A world can let visitors participate without owning a parcel. Ownership and development access are different from ordinary visitor access.

### Are game tokens shares in the company?

Not automatically. A token's rights are defined by its rules and relevant agreements. Calling it a governance or utility token does not establish equity ownership.

## Glossary

| Term | Meaning |
|---|---|
| Asset | An item or resource represented in a game |
| Custody | Responsibility for controlling the keys or systems that authorize asset transactions |
| Emissions | New tokens released under a distribution schedule or reward rule |
| Gas | The network processing cost associated with blockchain operations |
| Liquidity | The ability to trade an asset without excessive difficulty or price impact |
| Minting | Creating a token or additional token units |
| Sink | A mechanism that consumes or removes an economic resource |
| Treasury | Assets held to support a project's activities or obligations |
| Utility | What an asset enables its holder to do |

## See also

- [Decentralized autonomous organization](../Decentralized_autonomous_organization/)
- [Non-fungible token](../Non-fungible_token/)
- [Non-fungible tokens: ERC-721 and ERC-1155 standards](../NFT_standards/)
- [Blockchain](../Blockchain/)
- [Smart contract](../Smart_contract/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)
- [Decentralized finance](../Decentralized_finance/)

## References

[^axieeconomy]: ["Axie Economy & Long-term Sustainability"](https://whitepaper.axieinfinity.com/gameplay/axie-population-and-long-term-sustainability). *Axie Infinity whitepaper*. Accessed 13 October 2026.
[^slp]: ["Smooth Love Potion [SLP]"](https://support.axieinfinity.com/hc/en-us/articles/7989482194843-Smooth-Love-Potion-SLP). *Sky Mavis support*. Accessed 13 October 2026.
[^dclland]: ["LAND Manager"](https://docs.decentraland.org/marketplace/land-manager). *Decentraland documentation*. Accessed 13 October 2026.
[^dclrent]: ["Rentals"](https://docs.decentraland.org/marketplace/rentals). *Decentraland documentation*. Accessed 13 October 2026.
[^dcldao]: ["What is the DAO"](https://docs.decentraland.org/dao/dao/what-is-the-dao). *Decentraland documentation*. Accessed 13 October 2026.
[^sandboxland]: ["LAND"](https://docs.sandbox.game/en/owners/land). *The Sandbox documentation*. Accessed 13 October 2026.
[^sandboxearn]: ["Play, Create & Earn"](https://docs.sandbox.game/en/general/play-create-and-earn). *The Sandbox documentation*. Accessed 13 October 2026.
[^erc721]: Entriken, William; Shirley, Dieter; Evans, Jacob; Sachs, Nastassia (2018). ["ERC-721: Non-Fungible Token Standard"](https://eips.ethereum.org/EIPS/eip-721). *Ethereum Improvement Proposals*.
[^erc1155]: Radomski, Witek; et al. (2018). ["ERC-1155: Multi Token Standard"](https://eips.ethereum.org/EIPS/eip-1155). *Ethereum Improvement Proposals*.
[^ronin]: ["The Ronin Bridge Is Open"](https://blog.roninchain.com/p/the-ronin-bridge-is-open-). *Ronin*. 28 June 2022.
