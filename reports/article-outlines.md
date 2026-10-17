# Five quick-win article outlines

**How these were chosen:** each topic matches a question people type into Google (how-to, comparison or safety), which the current "what is X" articles don't cover. Each one builds on facts the site already has, so it can be written in an hour or two and links to several existing articles.

> **Keyword volumes are not measured here.** I don't have keyword-tool data. Before writing, check each target keyword in Google Keyword Planner (free with a Google Ads account) or in Search Console once data arrives, and swap the order if needed.

**For every article:**
- File: `_wiki/<File_name>.md`
- Set `description:` (the meta description) and `seo_title:` (the title tag). The H1 is the article `title:`, written Wikipedia-style.
- 900–1,400 words, with 4+ primary sources and a "See also" section.

---

## 1. Seed phrase

| | |
|---|---|
| **File** | `_wiki/Seed_phrase.md` |
| **Target keyword** | seed phrase |
| **Secondary keywords** | recovery phrase, what is a seed phrase, 12 word seed phrase, BIP39 |
| **Search intent** | Beginners who just set up a wallet and want to know what the words are and how to protect them |
| **`seo_title:`** | What Is a Seed Phrase? Recovery Phrase Explained |
| **H1 (`title:`)** | Seed phrase |
| **Meta description** | A seed phrase is the 12 or 24 words that back up a crypto wallet: how it works, why anyone who sees it can take your funds, and how to store it safely. |

**H2s:**
1. How a seed phrase works (BIP39 word list of 2,048 words, entropy, checksum, deriving keys with BIP32)
2. 12 vs 24 words
3. Seed phrase vs private key vs password
4. Storing a seed phrase safely (offline, metal backups, never photos or cloud, splitting risks)
5. Seed phrase scams (fake support, "wallet validation" sites, phishing pop-ups)
6. Passphrases (the optional "25th word")
7. What happens if you lose it

**Link to:** [Cryptocurrency wallet], [Bitcoin], [Ethereum], [Common crypto scams]
**Sources:** BIP-39 and BIP-32 on GitHub, wallet documentation (Trezor/Ledger), FTC consumer guidance on crypto scams

---

## 2. Bitcoin vs Ethereum

| | |
|---|---|
| **File** | `_wiki/Bitcoin_vs_Ethereum.md` |
| **Target keyword** | bitcoin vs ethereum |
| **Secondary keywords** | difference between bitcoin and ethereum, btc vs eth |
| **Search intent** | Comparison by newcomers deciding what each is for (not investment advice) |
| **`seo_title:`** | Bitcoin vs Ethereum: Key Differences Explained |
| **H1 (`title:`)** | Comparison of Bitcoin and Ethereum |
| **Meta description** | Bitcoin vs Ethereum compared: purpose, supply, consensus, fees, speed, smart contracts and history in one table, with sources. No hype, no price tips. |

**H2s:**
1. Overview (one-paragraph answer + comparison table: launch year, creator, purpose, supply cap, consensus, block time, smallest unit, programming)
2. Purpose and design philosophy ("digital gold" vs "world computer")
3. Supply and monetary policy (21M cap + halvings vs no cap + EIP-1559 burn)
4. Consensus and energy use (proof of work vs proof of stake, The Merge)
5. Transactions, fees and scaling (Lightning vs rollups)
6. Smart contracts and applications
7. Criticisms of each

**Link to:** [Bitcoin], [Ethereum], [Bitcoin halving], [Proof of work], [Proof of stake], [Smart contract]
**Sources:** the Bitcoin white paper, ethereum.org, EIP-1559, Cambridge electricity index

> The comparison table makes this the most likely of the five to win a Google featured snippet.

---

## 3. Ethereum gas fees

| | |
|---|---|
| **File** | `_wiki/Gas_(Ethereum).md` |
| **Target keyword** | ethereum gas fees |
| **Secondary keywords** | what is gas in ethereum, gwei, why are gas fees so high, base fee priority fee |
| **Search intent** | Users confused by the fee they were charged |
| **`seo_title:`** | Ethereum Gas Fees Explained: Gas, Gwei, Base Fee |
| **H1 (`title:`)** | Gas (Ethereum) |
| **Meta description** | What are Ethereum gas fees? How gas, gwei, the base fee and priority tips work, why fees spike, how EIP-1559 burns ETH, and how layer 2 makes fees cheaper. |

**H2s:**
1. What gas measures (computation units, gas limit, why it exists)
2. How a fee is calculated (gas used × (base fee + priority fee), worked example in gwei)
3. EIP-1559 and fee burning
4. Why gas fees go up (demand, NFT mints, congestion)
5. Failed transactions and gas
6. Lowering fees (timing, layer-2 rollups, Dencun blobs)

**Link to:** [Ethereum], [Smart contract], [Blockchain scaling], [Decentralized finance]
**Sources:** ethereum.org gas documentation, EIP-1559, EIP-4844

---

## 4. Common crypto scams

| | |
|---|---|
| **File** | `_wiki/Cryptocurrency_scams.md` |
| **Target keyword** | crypto scams |
| **Secondary keywords** | common crypto scams, pig butchering scam, rug pull, how to spot a crypto scam |
| **Search intent** | Safety: people checking whether something is a scam. High trust value, and widely shared. |
| **`seo_title:`** | Common Crypto Scams and How to Spot Them |
| **H1 (`title:`)** | Cryptocurrency scams |
| **Meta description** | The most common crypto scams explained: fake giveaways, pig butchering, rug pulls, phishing and fake recovery services, plus the warning signs to spot. |

**H2s:**
1. Why crypto attracts scams (irreversible payments, pseudonymity, hype)
2. Investment and romance scams ("pig butchering")
3. Fake giveaways and impersonation
4. Phishing, wallet drainers and malicious approvals
5. Rug pulls and pump-and-dump schemes
6. Fake "recovery" services
7. Warning signs (checklist)
8. What to do if you've been scammed (report to police / FTC / Action Fraud; beware recovery scams)

**Link to:** [Cryptocurrency wallet], [Seed phrase], [Decentralized finance], [KYC and AML], [Non-fungible token]
**Sources:** FTC, FBI IC3 annual report, Europol, UK Action Fraud

---

## 5. Bitcoin ETF

| | |
|---|---|
| **File** | `_wiki/Bitcoin_ETF.md` |
| **Target keyword** | bitcoin etf |
| **Secondary keywords** | spot bitcoin etf, what is a bitcoin etf, bitcoin etf vs buying bitcoin |
| **Search intent** | Informational, about a heavily covered topic since January 2024. Explain it; don't recommend. |
| **`seo_title:`** | What Is a Bitcoin ETF? Spot vs Futures Explained |
| **H1 (`title:`)** | Bitcoin exchange-traded fund |
| **Meta description** | What is a bitcoin ETF? How spot and futures bitcoin ETFs work, the SEC's 2024 approval, fees and custody, and how they differ from owning bitcoin. |

**H2s:**
1. How a bitcoin ETF works (shares, custodian, creation/redemption)
2. Spot vs futures ETFs
3. History (early rejections, 2021 futures ETFs, 10 January 2024 spot approval, ether ETFs July 2024)
4. ETF vs holding bitcoin directly (custody, keys, fees, trading hours, taxes in general terms)
5. Criticism and risks

**Link to:** [Bitcoin], [Cryptocurrency regulation], [Cryptocurrency wallet], [Cryptocurrency taxation]
**Sources:** SEC statement of 10 January 2024, issuer prospectuses (SEC EDGAR), CME futures documentation

---

## Publishing checklist for each article

- [ ] `title`, `seo_title`, `description` (140–155 characters), `categories`, `updated`
- [ ] Target keyword in: `seo_title`, the first sentence (bold), at least one H2, and the description
- [ ] 3+ links **out** to existing articles, and add a link **in** from 2+ existing articles (and "See also")
- [ ] 4+ sources as footnotes
- [ ] After publishing: in Search Console, use "URL inspection → Request indexing"
