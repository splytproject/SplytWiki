# Crypto history, tokens, stablecoins and language

## Which history milestones explain the ecosystem?

### Takeaway
Separate protocol milestones from prices and intermediary failures; a functioning chain does not guarantee a solvent exchange or valuable token.

### Cited Findings
- Bitcoin genesis mainnet timestamp is 1231006505 (3 January 2009 UTC); source embeds the Times bailout headline and a 50 BTC genesis reward. Its coinbase output cannot be spent. [Bitcoin Core chain parameters](https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp)
- Ethereum history provides Frontier launch 30 July 2015, DAO fork 20 July 2016, London 5 August 2021, Merge 15 September 2022, Shanghai/Capella 12 April 2023, Dencun 13 March 2024, Pectra 7 May 2025 and Fusaka 3 December 2025. Explain launch, governance disagreement, fee-market changes, staking transition, withdrawals, rollup blob data, account/validator improvements and later data availability scaling respectively; do not imply all upgrades directly lower L1 fees. [Ethereum fork history](https://ethereum.org/ethereum-forks/)
- The Merge joined the execution chain to Beacon Chain proof of stake, preserved transaction history and cut energy consumption approximately 99.95%; it did not by itself substantially lower gas fees. [Merge](https://ethereum.org/roadmap/merge/)
- The 2017 token-sale boom can be illustrated by contemporary SEC warnings: buyers exchanged fiat or crypto for project tokens, sometimes before a usable product. The July DAO investigation applied securities laws to specific tokens; December remarks show regulators addressing ICO investor risks. [DAO report announcement](https://www.sec.gov/newsroom/press-releases/2017-131) [December 2017 statement](https://www.sec.gov/newsroom/speeches-statements/statement-clayton-2017-12-11)
- Terra/Luna collapse in May 2022 and FTX bankruptcy later that year triggered trading shifts; BIS data through December 2022 found most crypto app users in almost all studied economies lost on bitcoin holdings. This is a study finding, not a universal claim about every investor. [BIS research](https://www.bis.org/publications/bulletin-69-crypto-shocks-and-retail-losses)

### Inferences
- Structure cycle explanation as rising interest and prices, leverage/speculation, shock, forced selling and deleveraging. A halving or historic four-year pattern cannot guarantee future returns. Distinguish network failure, token peg failure and custodian insolvency.

### Gaps
- Exact prices and 2017/2018 drawdowns were not verified; avoid fabricated precise numbers. Need dedicated primary sources for Mt Gox, March 2020, 2021 NFT/DeFi cycle and Bitcoin whitepaper publication date if included. No claim that this is a complete timeline through October 2026.

## How do token categories differ?

### Takeaway
Classifications describe functions and can overlap; real usage and market speculation can coexist.

### Cited Findings
- UNI gives governance participation including treasury decisions and specified protocol controls; voting power can be delegated. Do not equate governance automatically with company shares or guaranteed dividends. [Uniswap governance](https://developers.uniswap.org/docs/ecosystem/governance/overview)
- LINK supports oracle service payments and security incentives. Explain an oracle as infrastructure bringing external data to contracts; usefulness of data infrastructure is separate from token price forecasts. [LINK](https://chain.link/article/what-is-link-token)
- SEC staff described typical meme coins as culture/entertainment-driven assets with limited functionality, demand/speculation-driven value and high volatility. Its February 2025 discussion is staff opinion with no legal force, concerns described circumstances, and is not a global exemption or assurance against fraud. [SEC staff statement](https://www.sec.gov/newsroom/speeches-statements/staff-statement-meme-coins)

### Inferences
- Beginner comparison should ask: what can holder do today; who needs the token; what creates demand; does supply expand; who controls upgrades and concentrated allocations; can holders actually sell? Illustrate a useful application whose token still falls because supply unlocks outpace demand. Low unit price does not mean cheap valuation: circulating market cap equals price times circulating supply, while fully diluted valuation assumes larger eventual supply.

### Gaps
- No current token price, ranking or investment recommendation researched. Avoid fixed claims about UNI fee distribution since governance changes.

## How do stablecoin pegs and common vocabulary work?

### Takeaway
A peg is a target maintained through mechanisms and incentives, not a guarantee. Slang describes community behavior rather than evidence of safety.

### Cited Findings
- Stablecoin categories include fiat reserves, crypto collateral and algorithmic mechanisms; some designs are hybrids. Target stability is relative to a reference currency, not stable purchasing power in every local currency. [Ethereum stablecoins](https://ethereum.org/stablecoins)
- USDC issuer reports cash and cash-equivalent backing and monthly attestations. Eligible Circle Mint customers can redeem 1:1; distinguish issuer redemption access from selling on exchanges. Reserves include government money market fund holdings, not exclusively cash in a bank. [Circle transparency](https://www.circle.com/transparency) [Redemption eligibility](https://www.circle.com/use-case/dollar-access)
- Crypto collateral systems use overcollateralization, oracle prices and liquidation. A hypothetical $150 collateral for $100 debt starts at 150%; falling collateral value threatens liquidation. The numbers are teaching assumptions, not live protocol parameters. Historical Maker collateral auctions sold vault assets to cover debt and fees. [Maker 2020 whitepaper](https://makerdao.com/whitepaper/White%20Paper%20-The%20Maker%20Protocol_%20MakerDAO%E2%80%99s%20Multi-Collateral%20Dai%20%28MCD%29%20System-FINAL-%20021720.pdf)
- Do not describe modern Dai as exclusively ETH-backed: Maker explicitly developed real-world asset collateral modules. [MIP21](https://mips.makerdao.com/mips/details/MIP21)
- TerraUSD used arbitrage against Luna. Losing confidence can break conversion economics, expand volatile-token supply and undermine the peg in a feedback loop. [BIS monetary system discussion](https://www.bis.org/publications/aer-2022/future-monetary-system)
- Circle acknowledged the USDC depeg during March 2023 banking turmoil. Fiat backing does not eliminate banking, liquidity or confidence risks. [Circle incident statement](https://www.circle.com/pressroom/3-3-billion-of-usdc-reserve-risk-removed-dollar-de-peg-closes)
- HODL originates in the 18 December 2013 GameKyuubi post titled I AM HODLING. Explain holding through volatility; hold on for dear life is a later reinterpretation, not original expansion. [Original forum post](https://bitcointalk.org/index.php?topic=375643.0)
- Technical quick-reference entries can use: address (public identifier), block (batch of chain data), gas (computation accounting unit), gwei (one billionth ETH), consensus (agreement rules), validator, staking, oracle, rollup, bridge, smart contract, token, public/private key, seed phrase. Keep all prose derived from this single glossary under 200 words or use additional topic sources. [Ethereum glossary](https://ethereum.org/glossary/)
- Rug pull describes organizers extracting funds or abandoning a promoted project; forms include removing liquidity and selling insider holdings. A falling price alone does not establish fraud. [Coinbase educational explanation](https://www.coinbase.com/en-ca/learn/tips-and-tutorials/what-is-a-rug-pull-and-how-to-avoid-it)

### Inferences
- Explain peg arbitrage: buy a $0.98 token and redeem for $1, or mint at $1 and sell above peg, subject to access, fees and settlement. It fails if reserves, redemption or market confidence fail. Explain risks separately: reserve/custodian, oracle/liquidation, endogenous collateral, contract, bridge, freeze authority, liquidity and foreign-exchange exposure.
- Suggested dictionary sections: community slang, markets, networks, wallets/security, DeFi/governance; each entry one plain definition and one example or caution. WAGMI means we are all going to make it (optimism, not promise); whale means a comparatively large holder, with no universal threshold; FOMO, FUD, DYOR, NGMI, GM, moon, diamond hands, bagholder and rekt round out slang. Define these as informal usage; do not treat disparaging terms as analysis.

### Gaps
- Primary verification for WAGMI and whale slang not located within this pass; definitions are commonplace but should receive an additional dictionary source if sourcing each section. No current yield rates or reserve percentages verified. Attestation should not be equated with full financial statement audit.
