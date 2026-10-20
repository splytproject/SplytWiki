# Wallets, smart contracts, DApps, and scaling

## How do wallets, keys and security work?

### Takeaway
A wallet is an interface for managing blockchain accounts and signing actions; custody and key protection determine who controls those accounts. [Ethereum wallets](https://ethereum.org/en/wallets/)

### Cited Findings
- Wallets display balances and submit transactions; assets remain recorded on the network. Hardware, browser, mobile and desktop interfaces exist. Self-custody places recovery responsibility on the user; an exchange account instead depends on the custodian. Do not universally state that wallet providers never hold assets: the distinction is custody. [Ethereum wallets](https://ethereum.org/en/wallets/)
- Private keys authorize signatures; public keys support verification and addresses identify accounts. Ethereum distinguishes externally owned accounts from contract accounts, so the simple one-key account model should be labeled the basic case. A public address is shareable but reveals publicly associated activity. [Ethereum accounts](https://ethereum.org/en/developers/docs/accounts/)
- BIP-39 encodes computer-generated randomness as 12, 15, 18, 21 or 24 words and derives a seed, optionally with a passphrase; deterministic derivation can generate many keys. Do not invent one's own memorable sentence. A passphrase changes the resulting wallet: losing it can prevent recovery even with the words. BIP-39 is common, not universal. [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
- Hardware devices keep signing keys offline, reducing exposure to a compromised computer. Never share recovery phrases or private keys, store screenshots in cloud backups, or follow unsolicited support messages. Verify full destination addresses and transaction details. Restrict contract spending permissions. Fake giveaways, cloned websites, fake support and malicious airdrop claims are common patterns. [Ethereum security](https://ethereum.org/en/security/)

### Inferences
- Explain hot versus cold as how signing secrets are exposed: internet-connected software is convenient; offline key storage reduces remote exposure. A hardware device still needs the owner to understand what they sign. Custodial versus noncustodial is a separate classification from hot versus cold. Derived from [wallet interfaces](https://ethereum.org/en/wallets/) and [key security](https://ethereum.org/en/security/).
- Useful original analogy: address resembles a public delivery destination, private key an authorization seal, recovery phrase a master backup. Explicitly say these analogies are imperfect. Derived from [accounts](https://ethereum.org/en/developers/docs/accounts/) and [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

### Gaps
- No specific product endorsement or guarantee of device security. The security page incorrectly suggests some ordinary approval transactions send private keys; do NOT repeat that mechanism. A signature may authorize harmful spending without revealing a private key.

## How do smart contracts and DApps execute?

### Takeaway
Smart contracts implement rules as blockchain code; DApps combine these shared rules with an interface. Decentralization must be assessed across the full application. [Contracts](https://ethereum.org/en/developers/docs/smart-contracts/) [DApps](https://ethereum.org/en/developers/docs/dapps/)

### Cited Findings
- An Ethereum smart contract has code, persistent state and an address. Users invoke functions through transactions; other contracts can call it during execution. It runs defined instructions rather than interpreting human intentions. External events need a transaction or oracle-fed input: contracts do not independently browse websites or wake themselves up. [Introduction](https://ethereum.org/en/developers/docs/smart-contracts/)
- Gas meters computation. Ethereum fees depend on gas used and effective gas price; base fees and priority fees serve different roles. A failed transaction can still consume gas because execution work was attempted. A gas limit is a maximum work allowance, not the total necessarily spent. [Gas](https://ethereum.org/en/developers/docs/gas/)
- Oracles bring outside information into blockchain systems. A correct contract can still act on inaccurate, stale or manipulated input; oracle design adds trust and availability assumptions. [Oracles](https://ethereum.org/en/developers/docs/oracles/)
- DApps combine frontend interfaces with backend logic running on a decentralized network. Frontends can use conventional hosting or decentralized storage. Benefits include transparent rules and composability; drawbacks include maintenance, performance, user experience and scaling challenges. [DApps](https://ethereum.org/en/developers/docs/dapps/)
- Deployed code can remain immutable while upgrade patterns redirect calls to new implementations. Upgrade authority creates additional trust: identify administrators, multisignatures, governance and delays. [Upgrading contracts](https://ethereum.org/en/developers/docs/smart-contracts/upgrading/)

### Inferences
- Suggested original walkthrough: a fictional ticket contract checks price and availability, then records ownership or rejects the request; frontend makes this accessible. Do not imply this proves entry rights outside the code. Explain the sequence interface → wallet review/signature → network → contract execution → updated state using [contract fundamentals](https://ethereum.org/en/developers/docs/smart-contracts/).
- An application can have decentralized settlement but a centralized website, oracle or upgrade authority. Assess components individually, based on [DApps](https://ethereum.org/en/developers/docs/dapps/), [oracles](https://ethereum.org/en/developers/docs/oracles/) and [upgrades](https://ethereum.org/en/developers/docs/smart-contracts/upgrading/).

### Gaps
- Avoid guarantees about audit safety, immutable apps, universal automatic enforcement or legal enforceability. Chain-specific execution differs; label Ethereum examples.

## How do L1s, L2s, rollups and sidechains differ?

### Takeaway
Scaling approaches differ in where execution, data and verification occur. Higher throughput alone does not identify the security model. [Optimistic rollups](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/) [Sidechains](https://ethereum.org/en/developers/docs/scaling/sidechains/)

### Cited Findings
- Optimistic rollups execute batches outside Ethereum and publish data using calldata or blobs. They accept claims subject to a dispute period, during which invalid claims can be challenged. Canonical withdrawals can therefore involve waiting; faster liquidity-provider routes introduce distinct fees and assumptions. Sequencing, proof systems and upgrade controls matter in addition to Ethereum settlement. [Optimistic rollups](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/)
- ZK rollups execute batches offchain and submit cryptographic validity proofs checked by a base-layer contract. Proof generation is computationally intensive. Validity proofs establish correct transitions; the label does not inherently mean transaction privacy. Data availability and operators remain important. Withdrawal settlement depends on proof submission and verification, not an optimistic fraud-challenge window. [ZK rollups](https://ethereum.org/en/developers/docs/scaling/zk-rollups/)
- Sidechains are independent blockchains connected by bridges, with their own consensus and security. Compatibility with Ethereum tooling does not confer Ethereum security. Their tradeoffs and validator assumptions differ from rollups. [Sidechains](https://ethereum.org/en/developers/docs/scaling/sidechains/)
- Solana transactions contain signed instructions; required accounts are specified, enabling the runtime to schedule independent work. It is an example of a distinct blockchain architecture, not an Ethereum L2 merely because it targets high throughput. [Solana transactions](https://solana.com/docs/core/transactions)

### Inferences
- Suggested comparison columns: execution location, correctness check, data location, withdrawal process, additional trust. Define L1 as the base network and L2 as a system settling to a base network under a specific security relationship. Avoid classifying every cheap chain as L2, grounded in [rollup](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/) and [sidechain](https://ethereum.org/en/developers/docs/scaling/sidechains/) documentation.
- Explain confirmation versus final settlement versus ability to withdraw as separate milestones; this prevents equating a fast interface acknowledgment with completed security guarantees. Based on [optimistic](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/) and [ZK](https://ethereum.org/en/developers/docs/scaling/zk-rollups/) flows.

### Gaps
- No verified comparable live TPS, exact fees, latest project maturity stage or universal withdrawal duration. Avoid such numbers. Per-source synthesis budgets are 200 words; use multiple citations and original clearly labeled illustrative examples rather than expanding any one source excessively. Sources accessed for the October 13, 2026 editorial context, not evidence of future releases.
