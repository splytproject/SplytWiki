---
title: Decentralized autonomous organization
description: Beginner-friendly guide to DAOs, voting, proposals, treasury management, delegation and community governance
aliases: [DAO, DAOs, Decentralized Autonomous Organizations, Decentralised autonomous organisation, DAO governance, DAO treasury management]
categories: [Decentralized autonomous organizations, Blockchain technology, Smart contracts]
updated: 2026-10-13
infobox:
  title: Decentralized autonomous organization
  rows:
    - Abbreviation: DAO
    - Main purpose: Collective coordination and decision-making
    - Technical foundation: Blockchain records and smart contracts
    - Decision tools: Proposals, voting and delegation
    - Shared resources: Treasury, contracts and community infrastructure
    - Common participants: Members, delegates, contributors and treasury signers
---
A **decentralized autonomous organization** (**DAO**) is an organization that uses blockchain-based rules and shared decision-making processes to coordinate participants and, often, manage collective resources. Members can propose actions, vote on decisions and oversee a **treasury**, the assets held to support the organization's activities. Some decisions are executed by [smart contracts](../Smart_contract/); others require designated people to implement them.[^ethereum]

DAOs can support software projects, grants, communities and shared digital resources. Their central idea is to make authority and decisions more explicit through common rules, rather than leaving every action to a single administrator. However, the extent of decentralization and automation varies substantially. A DAO can still depend on developers, service providers, elected committees or a small group controlling important keys.

Understanding a DAO requires examining three connected questions: **who can decide**, **who can move funds or change systems**, and **who performs the work**. A voting interface alone does not answer all three.

## Basic concepts

### What the name means

The three words describe an organizational ambition:

- **Decentralized:** authority is distributed among participants rather than concentrated entirely in one actor.
- **Autonomous:** specified rules can be enforced or carried out by software.
- **Organization:** people coordinate around a purpose, responsibilities and shared resources.

Autonomy does not mean that a DAO thinks independently or requires no human effort. Software can verify a voting outcome and authorize a payment, but people still identify problems, debate priorities and deliver projects.

A useful analogy is a community association with a shared budget. The association has membership rules, proposals and spending approvals. A DAO adds blockchain tools that can make some records public and enforce selected permissions through code.

### Membership and governance tokens

A DAO defines membership and voting eligibility through its own rules. Eligibility might depend on a token, an NFT, an approved membership list or a contribution-based record. Holding a **governance token** can provide voting power, but the powers attached to it must be checked in the actual system.

A token does not automatically grant company shares, a salary, ownership of every treasury asset or a right to withdraw funds. A member's ability to participate in discussion may also differ from their ability to submit a formal proposal or cast a binding vote.

### Governance and execution

**Governance** is the process of deciding what an organization should do and how authority is assigned. **Execution** is carrying out an authorized action.

For example, a community can vote to fund a website translation. A contract or treasury signer can send the funds. Translators must then perform the work. Approval, payment and delivery are three separate events.

## The components of a DAO

| Component | Role | Beginner's question |
|---|---|---|
| Mission or charter | Defines the purpose and boundaries | What is the organization trying to achieve? |
| Membership rules | Determine who participates | Who can vote or submit proposals? |
| Discussion space | Supports deliberation and feedback | Where are ideas examined before voting? |
| Voting system | Collects and counts decisions | How is voting power calculated? |
| Treasury | Holds shared resources | Which assets are available for spending? |
| Execution mechanism | Implements approved actions | Who can actually move funds or change contracts? |
| Contributors | Perform ongoing work | Who is responsible for delivery? |
| Reporting process | Shows progress and accountability | How can members verify what happened? |

These components can be implemented through different tools. ERC-4824, a standard for DAO information, defines interfaces for publishing resources such as membership, proposals and governance documentation. It does not require every DAO to adopt the same voting or operating model.[^dao4824]

## How a proposal becomes a decision

A **proposal** is a request for the DAO to take a defined action. It may concern a grant, budget, contract upgrade, election or change to governance rules.

### A typical proposal lifecycle

Many systems separate discussion from formal voting and execution. ENS governance documentation, for example, describes a staged process for developing and advancing proposals.[^ensprocess] An illustrative lifecycle is:

1. **Introduce an idea.** A participant explains the problem and possible solution.
2. **Discuss and revise.** Members question assumptions, costs and alternatives.
3. **Prepare a formal proposal.** The author specifies the decision, responsibilities and implementation.
4. **Establish eligibility.** The system checks proposal requirements and voting rights.
5. **Vote.** Eligible participants choose among the permitted options.
6. **Determine the result.** The rules evaluate participation and support.
7. **Execute the action.** A contract or authorized group implements the decision.
8. **Report the outcome.** Contributors show what was paid, changed or delivered.

Not every DAO uses all these stages. Informal polls may test sentiment without authorizing any treasury action.

### What a useful proposal contains

A spending proposal should explain the intended benefit, requested amount, recipient, payment asset, timing and deliverables. It should also identify who checks completion and what happens if the project cannot proceed.

For a technical change, readers need both a plain-language explanation and the exact actions to be executed. A proposal's title can say “support community development” while its transaction payload contains a very different transfer. Members should assess both the description and executable content.

## How voting power works

Voting has two separate dimensions: **who receives how much influence**, and **how choices are counted**. A system can combine different approaches to these dimensions.

### Token-weighted voting

In a simple token-weighted system, more eligible tokens mean more voting power. A fictional member with 100 votes has ten times the weight of a member with 10 votes.

This model is straightforward to measure but can concentrate influence among large holders. Token ownership also does not establish expertise, active participation or the number of distinct people represented by addresses.

### Membership and contribution-based voting

A membership model can assign equal weight to approved members. A contribution-based model can use reputation or another record of participation. Each approach needs clear rules for admitting members, assigning weight and resolving disputes.

Snapshot voting strategies illustrate this flexibility: they calculate voting power using defined conditions, which can include token balances or other on-chain data such as NFT holdings.[^snapshotstrategy]

**One address, one vote** is different from **one person, one vote**. A person can control multiple addresses. Preventing this form of duplicate influence requires additional membership or identity protections, with privacy and access tradeoffs.

### Delegation

**Delegation** lets a participant assign voting power to another address. Delegates can review proposals and vote for holders who lack time or specialist knowledge. Delegation can improve participation while also concentrating influence in a smaller set of representatives.

ENS documentation describes delegating voting rights to an address, including self-delegation where required by its governance system.[^ensprocess] In a typical voting delegation, authority to vote is distinct from authority to transfer the underlying tokens; users must inspect the actual transaction and mechanism.

For a fictional example, Mira holds 200 units of voting power and delegates them to Arun. Arun can exercise that assigned voting weight under the system's rules. This does not mean Mira has approved every decision Arun might make. Delegate statements, voting histories and conflict disclosures help holders evaluate representation.

### Snapshots of voting power

A **snapshot** records eligibility or voting weight at a specified point. It helps keep a proposal's voting base consistent even when balances or delegations change later. The relevant point may be a block or another clock value supported by the system.[^ozguide]

Users should check when a proposal takes its snapshot. Buying or delegating tokens after that point may affect future proposals while leaving the current proposal's weight unchanged.

## Counting votes

### Voting options and methods

Common designs include a vote for or against an action, choosing one candidate, ranking alternatives or dividing influence across choices. The voting method should suit the decision rather than be treated as a universal solution.

**Quadratic voting** is a family of methods intended to make additional influence progressively more costly. In a simple credits model, obtaining *v* votes costs *v²* credits: one vote costs one credit, two cost four and three cost nine. Implementations vary; Snapshot documents its own quadratic approach rather than a single universal DAO formula.[^snapshotquadratic]

Such methods do not automatically prevent concentrated power. If participants can create several identities, they may bypass intended limits. Eligibility and duplicate-identity protections remain important.

### Quorum and approval thresholds

**Quorum** is the minimum qualifying participation or voting weight required for a decision. An **approval threshold** specifies the level of support needed. They answer different questions: whether participation is sufficient, and whether support is sufficient.

Consider a fictional DAO with the following rules:

- Total eligible voting power: 10,000 units.
- Quorum: at least 1,000 units participate.
- Approval: more than half of votes cast for or against support the proposal.
- Abstentions count toward quorum but not toward the approval comparison.

| Outcome | For | Against | Abstain | Result under these example rules |
|---|---|---|---|---|
| A | 600 | 300 | 200 | Passes: quorum is met and support exceeds opposition |
| B | 600 | 200 | 0 | Fails: participation is below quorum |
| C | 400 | 500 | 200 | Fails: quorum is met but opposition exceeds support |

These are explicitly illustrative rules. A real DAO may count abstentions differently, require a supermajority or use a different denominator. OpenZeppelin's governance components make vote counting and quorum configurable; its simple counting module uses its documented for, against and abstain rules.[^ozapi]

### Proposal thresholds and voting periods

A **proposal threshold** controls who may submit a formal proposal, often through a minimum amount of voting power. A **voting delay** separates submission from the opening of voting. The **voting period** determines how long votes can be cast.

These parameters involve tradeoffs. A high proposal threshold can reduce spam while excluding small participants. A short voting period can accelerate action while giving members less time to review complex changes. OpenZeppelin's Governor framework supports configurable governance parameters.[^ozguide]

## On-chain and off-chain governance

### On-chain voting

In **on-chain voting**, votes are recorded or verified through blockchain transactions and contracts. The outcome can authorize executable actions when the relevant contracts have the necessary permissions. Participants may incur network fees unless another mechanism covers them.

OpenZeppelin's Governor is a modular framework for implementing this kind of governance. A DAO still has to choose voting power, counting rules and an execution arrangement.[^ozguide]

### Off-chain voting

In **off-chain voting**, participants can submit signed choices without recording each ballot as a separate blockchain transaction. Snapshot's documentation distinguishes its off-chain voting product from Snapshot X's on-chain approach.[^snapshot]

An off-chain result does not inherently move treasury funds. Authorized signers may implement it, or an additional execution mechanism may connect the result to contracts. Members must understand how this connection works and whether the result is binding, advisory or dependent on human compliance.

### Hybrid systems

A DAO can use a discussion forum, an off-chain poll and an on-chain execution step together. This can reduce the cost of deliberation while retaining contract-based controls over selected actions.

The key question is where the final authority resides. If treasury signers can spend without a successful community vote, the poll and treasury permissions are separate controls even if a policy says signers should follow the result.

## Treasury management

A **DAO treasury** consists of resources controlled for the organization's activities. It can hold cryptocurrency, stablecoins, governance tokens or other assets across one or more accounts and contracts. Its purpose can include operations, grants, development and reserves.

Treasury management has two dimensions: **authorization**, which determines who may spend, and **financial planning**, which determines whether resources can support the mission. Strong controls over transfers do not by themselves establish a sound budget.

### Who controls the treasury?

| Arrangement | How spending is authorized | Main dependency |
|---|---|---|
| Governance-controlled contract | Qualifying proposals authorize permitted actions | Contract rules, governance participation and assigned permissions |
| Multisignature account | A specified number of owners approve a transaction | Signer independence, availability and key security |
| Limited operational account | A team spends within delegated authority | Spending limits, reporting and supervision |
| Hybrid arrangement | Different controls apply to different accounts | Clear boundaries between the mechanisms |

The account holding funds and the contract conducting votes may be different addresses. Their relationship should be documented rather than inferred from a dashboard label.

### Multisignature accounts

A **multisignature account**, or **multisig**, requires an agreed number of approvals for its ordinary transaction path. Safe documentation describes customizable owners and an approval threshold.[^safeglossary]

In an illustrative **3-of-5 multisig**, five owner accounts are configured and three approvals are sufficient for an ordinary transaction. This is not the same as a vote by all community members. It is a mechanism for a specified group to control an account.

The arrangement can reduce reliance on one key, but three colluding or compromised signers may still authorize an unwanted action. Conversely, insufficient available signers can delay spending. Several addresses controlled by one person provide less organizational independence than the address count suggests.

Safe modules can add alternative execution permissions and automated behaviour. Reviewing an account therefore requires examining enabled modules as well as its signer threshold.[^safemodules]

### Budgeting and runway

**Runway** estimates how long available resources can fund planned spending. A simplified calculation is:

**Runway = available operating resources ÷ expected net monthly spending**

Suppose a fictional DAO has 120,000 currency units available for operations and expects net spending of 10,000 units per month. Its simplified runway is 12 months, assuming spending and available value remain constant.

If 30,000 units are already committed to approved grants, only 90,000 remain for those other operations. Under the same assumptions, their runway is nine months. This distinction prevents counting the same resources twice.

### Asset value and liquidity

A treasury's displayed market value may exceed what it can actually spend. A large holding of the DAO's own token may be difficult to sell without affecting its price. Locked assets may not be available before obligations become due.

A useful report separates holdings by asset, liquidity, restrictions and committed payments. Stablecoins can reduce exposure to some price movements, but introduce issuer, reserve, redemption or protocol risks depending on their design. They are not identical to guaranteed cash balances.

### Grants and milestone payments

A **grant** funds work intended to advance the DAO's goals. A milestone arrangement divides payment according to defined progress. For example, a fictional translation grant of 6,000 units could release 2,000 after a terminology guide, 2,000 after a draft and 2,000 after review.

Milestones must identify an evaluator and measurable acceptance conditions. A contract can release funds under coded conditions, but evaluating the quality of a translation commonly requires human judgment. Automation cannot remove that judgment merely by dividing the payment.

### Reporting and reconciliation

A transaction record shows a transfer but may not explain its purpose or whether promised work was delivered. Treasury reporting should connect each payment to an authorization, budget category and supporting explanation.

**Reconciliation** means checking that records agree. For a DAO, it can involve comparing approved allocations, actual transactions, remaining commitments and project reports. Public addresses make some verification easier; they do not replace accounting or delivery oversight.

## Timelocks and safeguards

A **timelock** enforces a waiting period between scheduling an action and executing it. OpenZeppelin's TimelockController uses proposer and executor roles and a minimum delay for scheduled operations.[^ozapi]

A fictional DAO might wait two days after a successful proposal is queued before a payment becomes executable. Members then have time to inspect the scheduled action. Whether an objection can cancel it depends on the system's cancellation permissions.

A delay alone does not stop a malicious proposal. Someone must notice the problem, and a permitted remedy must exist. Safeguards may also include spending caps, separate operational budgets, restricted permissions and independent transaction review.

Emergency powers introduce another tradeoff. A committee may need authority to pause a vulnerable system quickly, but that authority should have a defined scope, accountability and review process. Members should know whether emergency actors can only pause operations or can also move funds and upgrade contracts.

## Community governance beyond voting

### Charters and constitutions

A **charter** or **constitution** sets out purposes, principles and decision boundaries. It can explain what the treasury supports, how participants are treated and how rules can be amended. ENS publishes a constitution alongside its governance process.[^ensconstitution]

A written rule and a contract-enforced restriction are different mechanisms. A community may promise that signers follow votes even when the account itself does not verify those votes. Understanding which promises are technically enforced is part of assessing governance.

### Working groups and contributors

DAOs often divide work among teams or committees. A group can handle grant review, communications or development within a defined mandate. A useful mandate specifies its budget, authority, term and reporting obligations.

Delegating routine work can reduce the need for a full-community vote on every small action. Accountability requires clarity about what the group may do independently and which decisions must return to the community.

### Discussion, conflicts and representation

Good decisions require understandable proposals and opportunities to question them. Members need enough time to review costs, alternatives and implementation details. Plain-language summaries help participants who lack technical expertise.

A **conflict of interest** arises when someone's personal interests may affect their judgment. A delegate evaluating a grant to their own company should disclose that relationship. A DAO can define disclosure, recusal or review rules, while recognizing that disclosure alone does not resolve every conflict.

Participation also depends on language, time zones and accessibility. A public forum is technically open to reading while still being difficult for newcomers to navigate. Documentation and predictable procedures can broaden meaningful participation.

## A complete example: funding a community guide

Consider a fictional education DAO with a shared treasury and a separate 3-of-5 multisig for payments. Its rules use the quorum and approval formula described earlier in this article.

1. **A contributor proposes a guide.** The request specifies a 6,000-unit budget, deliverables and three payment milestones.
2. **Members review it.** They clarify who reviews quality and require a freely accessible final publication.
3. **A formal vote opens.** The system determines eligible voting power at the stated snapshot.
4. **The proposal passes.** It receives 600 votes for, 300 against and 200 abstaining, meeting the example quorum and support rules.
5. **Signers prepare the first payment.** They check that the recipient, asset and 2,000-unit amount match the approved milestone.
6. **Three signers authorize execution.** The payment is sent through the multisig's ordinary transaction mechanism.
7. **The contributor reports progress.** Reviewers verify the first milestone before later payments are approved under the arrangement.
8. **The treasury report is updated.** The report distinguishes funds already paid from the remaining commitment.

The example shows distributed responsibilities. Members authorize the project, signers control the payment mechanism and reviewers evaluate delivery. Calling all three activities “governance” should not obscure their different permissions.

## Risks and limitations

### Concentrated influence and low participation

A few large holders or delegates can dominate decisions. Low participation can allow a relatively small group to control outcomes even when membership is broad. Equal access to a voting page does not imply equal influence.

Rules intended to increase participation can also create costs. High quorum can impede action; low quorum can make capture easier. Paying voters can encourage attendance while creating incentives to participate without reviewing proposals.

### Governance capture and malicious proposals

**Governance capture** occurs when an actor gains enough influence to redirect decisions away from the organization's intended purpose. This can involve acquired voting power, compromised delegates, misleading proposals or collusion.

Checking historical voting power can limit certain short-lived manipulations, but does not eliminate sustained accumulation or bribery. Reviewers also need to inspect executable actions rather than relying solely on a proposal's description.

### Contract and key security

Bugs, unsafe upgrades and compromised keys can affect funds or authority. A correct vote can still authorize faulty code. Signer availability and recovery arrangements also matter: distributing keys does not make their management automatic.

Audit reports and transaction simulations can aid review, but their coverage and assumptions must be understood. An audit of one contract does not establish that every connected service or future change is safe.

### Transparency and privacy

Public voting and payment records can support accountability while exposing participant activity. Addresses are not inherently anonymous when they can be linked to people or organizations. Sensitive personal data should be considered separately from the goal of publishing decisions and financial reports.

### Legal and operational boundaries

A DAO label does not by itself create a legal entity or resolve responsibility for agreements and activities. Some organizations use additional legal structures to engage service providers or hold off-chain resources. The relevant arrangements depend on their circumstances and jurisdiction.

Software permissions also cannot ensure that a supplier completes work or that every dispute is resolved fairly. DAOs remain social organizations with technical components.

## Questions for evaluating a DAO

- **Purpose:** What does the organization do, and which resources support that mission?
- **Membership:** Who is eligible to discuss, propose and vote?
- **Influence:** How concentrated are voting power and delegations?
- **Rules:** How do quorum, approval thresholds and abstentions work?
- **Execution:** Does a vote directly authorize an action, or do people implement it?
- **Treasury:** Which accounts hold funds, and who or what can control them?
- **Permissions:** Are modules, upgrades or emergency powers able to bypass the ordinary process?
- **Delivery:** Who verifies work and reports spending against commitments?

These questions should be answered through the charter, contracts, account settings and actual operating records. A project's description of itself as decentralized is only a starting point.

## Frequently asked questions

### Does a DAO have no leaders?

Not necessarily. It can have founders, elected representatives and operational teams. The important questions are their authority, accountability and how they can be replaced.

### Does voting spend or destroy the voting token?

Usually a balance or delegated voting weight is counted rather than consumed. Specific mechanisms can require deposits, locking or other conditions, so the transaction and rules should be checked.

### Does every passed proposal execute automatically?

No. An off-chain poll may require treasury signers to act. Even an on-chain proposal may require someone to submit an execution transaction after its delay and other conditions are satisfied.

### Can a member withdraw a share of the treasury?

Only if the DAO's actual rules provide that right. Membership or token ownership alone does not establish a universal withdrawal entitlement.

### Can rules change?

Many systems allow governance to change selected parameters or approve upgrades. Which changes are possible, and who can implement them, depend on the permissions and contracts.

### Is every cryptocurrency network a DAO?

No. A network's technical consensus and an organization's governance are different processes. Not every blockchain uses the proposal, treasury and membership arrangements commonly associated with DAOs.

## Glossary

| Term | Meaning |
|---|---|
| Abstention | A recorded choice not to support or oppose a proposal |
| Delegate | A participant assigned voting power by others |
| Execution | Carrying out an authorized action |
| Governance capture | Acquisition of influence sufficient to redirect organizational decisions |
| Multisig | An account whose ordinary transaction path requires a specified number of approvals |
| Proposal threshold | A requirement for submitting a formal proposal |
| Quorum | Minimum qualifying participation or voting weight |
| Runway | Estimated time available resources can support planned spending |
| Snapshot | A reference point for determining voting eligibility or weight |
| Timelock | A mechanism enforcing a delay before execution |
| Treasury | Shared resources controlled for organizational activities |

## See also

- [Smart contract](../Smart_contract/)
- [Blockchain](../Blockchain/)
- [Decentralized finance](../Decentralized_finance/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)
- [Blockchain gaming (GameFi)](../Blockchain_gaming/)
- [Non-fungible token](../Non-fungible_token/)

## References

[^ethereum]: ["Decentralized autonomous organizations (DAOs)"](https://ethereum.org/dao/). *ethereum.org*. Accessed 13 October 2026.
[^dao4824]: ["ERC-4824: Common Interfaces for DAOs"](https://eips.ethereum.org/EIPS/eip-4824). *Ethereum Improvement Proposals*. Accessed 13 October 2026.
[^ozguide]: ["How to set up on-chain governance"](https://docs.openzeppelin.com/contracts/5.x/governance). *OpenZeppelin Contracts 5.x documentation*. Accessed 13 October 2026.
[^ozapi]: ["Governance"](https://docs.openzeppelin.com/contracts/5.x/api/governance). *OpenZeppelin Contracts 5.x API documentation*. Accessed 13 October 2026.
[^snapshot]: ["Getting started"](https://docs.snapshot.box/). *Snapshot documentation*. Accessed 13 October 2026.
[^snapshotstrategy]: ["Voting strategies"](https://docs.snapshot.box/user-guides/voting-strategies). *Snapshot documentation*. Accessed 19 October 2026.
[^snapshotquadratic]: ["Voting types"](https://docs.snapshot.box/proposals/voting-types). *Snapshot documentation*. Accessed 19 October 2026.
[^safeglossary]: ["Glossary"](https://docs.safe.global/home/glossary). *Safe documentation*. Accessed 13 October 2026.
[^safemodules]: ["Safe Modules"](https://docs.safe.global/advanced/smart-account-modules). *Safe documentation*. Accessed 13 October 2026.
[^ensprocess]: ["Governance Process"](https://docs.ens.domains/dao/governance/process/). *ENS documentation*. Accessed 13 October 2026.
[^ensconstitution]: ["ENS DAO Constitution"](https://basics.ensdao.org/ensdao-constitution). *ENS DAO*. Accessed 13 October 2026.
