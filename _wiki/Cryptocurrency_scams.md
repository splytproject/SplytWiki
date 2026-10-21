---
title: Cryptocurrency scams
description: How the main cryptocurrency scams work — address poisoning, pig butchering, approval phishing, fake support and recovery scams, SIM swaps, rug pulls and fake airdrops — with warning signs, documented cases and ways to verify, sourced to FBI, FinCEN, Justice Department and blockchain-analytics reports
aliases: [Crypto scams, Crypto fraud, Address poisoning, Pig butchering, Pig-butchering scam, Approval phishing, Recovery scam, SIM swap, SIM swapping, Rug pull, Fake airdrop, Wallet drainer]
categories: [Security, Fraud, Scams]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: wallet-keys.svg
  caption: Cryptocurrency scams
  rows:
    - header: Scale (US, 2025)
    - Reported crypto losses: "Over $11 billion (FBI IC3)"
    - Change from 2024: "+22%"
    - Largest category: "Investment fraud, over $8.6 billion"
    - header: Common features
    - Payment: "Irreversible on-chain transfers"
    - Contact: "Unsolicited messages, fake websites, impersonation"
    - Report to: "Local police; in the US, ic3.gov"
---

> **In plain terms:** Most crypto scams do not break any code. They trick a person into sending coins, signing something, or revealing a seed phrase. Because blockchain payments cannot be reversed, money sent to a scammer is usually gone. The best defence is to slow down and check everything through a channel you found yourself.

**Cryptocurrency scams** are frauds that use [cryptocurrency](../Cryptocurrency/) to take victims' money. In 2025 the FBI's Internet Crime Complaint Center (IC3) recorded more than $11 billion in losses from complaints involving cryptocurrency, up 22% from 2024.[^aba-ic3][^ic3-2025] Investment fraud was the costliest type of crime the IC3 tracked, at more than $8.6 billion.[^aba-ic3]

Scammers favour crypto because transfers are fast, global and cannot be reversed by a bank. Most of the schemes below rely on **social engineering**: manipulating people rather than breaking software. Many are combined, for example a romance that leads to a fake trading app, then a fake "recovery" service.[^fincen][^ic3-lawfirm-2024]

## Overview

| Scam | What the victim is tricked into | Typical first contact |
|---|---|---|
| [Address poisoning](#address-poisoning) | Sending to a lookalike address | A tiny or zero-value transfer in their history |
| [Pig butchering](#pig-butchering) | "Investing" in a fake platform | A "wrong number" text or dating-app match |
| [Approval phishing](#approval-phishing) | Signing a token approval for the scammer | A fake website or "trading" app |
| [Fake support and recovery](#fake-support-and-recovery-scams) | Handing over keys, codes or fees | A call, email or ad posing as a company or law firm |
| [SIM swap](#sim-swap) | Nothing: the phone carrier is tricked | None; the victim loses phone service |
| [Rug pull](#rug-pull) | Buying a token or NFT whose creators vanish | Hype on social media |
| [Fake airdrop](#fake-airdrop) | Connecting a wallet to a drainer site | A "free token" in the wallet or a social post |

## Address poisoning

### How it works

Wallet apps show recent transaction history, and many users copy addresses from it. An attacker creates an address whose first and last characters match one the victim uses. They then send the victim a tiny or zero-value transfer, so the lookalike appears in the history. If the victim later copies it by mistake, the funds go to the attacker.[^cylab]

Carnegie Mellon researchers studied Ethereum and BNB Smart Chain from July 2022 to June 2024. They found about 270 million poisoning attempts aimed at 17 million victims, with confirmed losses of at least $83.8 million.[^cylab] Only about 1 in 10,000 attempts succeeds, but attackers send so many that the scheme pays.[^cylab]

### Documented case

In May 2024 a victim sent 1,155 wrapped bitcoin (WBTC), then worth about $68 million, to a poisoned address. After negotiations, the attacker returned most of the funds as about 22,960 ETH.[^ct-wbtc]

### Warning signs and how to verify

- An unexpected tiny or zero-value transfer from an address that looks familiar.[^cylab]
- **Never copy an address from transaction history.** Use a saved address book or whitelist instead.[^cylab]
- Check the **whole** address, not just the first and last few characters. For large amounts, send a small test payment first and confirm it arrived.[^cylab]

## Pig butchering

### How it works

**Pig butchering** (from the Chinese *sha zhu pan*) is a long-con investment scam. The US Financial Crimes Enforcement Network (FinCEN) describes contact that often begins with a supposed wrong number or a message to an "old friend".[^fincen] The scammer builds trust over weeks, sometimes as a romance. They then introduce a fake crypto trading platform that shows large paper profits.[^fincen]

When the victim tries to withdraw, they are told to pay "taxes" or "early withdrawal fees". FinCEN calls this "the point of no return". Once the victim cannot or will not pay more, the scammer disappears.[^fincen] Many such scams are run from compounds in Southeast Asia staffed by trafficked workers who are forced to commit fraud.[^doj-prince]

### Documented case

In October 2025 US prosecutors in Brooklyn indicted Chen Zhi, chairman of Cambodia's Prince Holding Group. He is accused of running forced-labour scam compounds that carried out pig-butchering fraud.[^doj-prince] A parallel civil complaint sought forfeiture of about 127,271 bitcoin, then worth about $15 billion. The Justice Department called it the largest forfeiture action in its history.[^doj-prince] The Treasury and the UK imposed sanctions at the same time.[^doj-prince] As of October 2026, the charges are allegations.

### Warning signs

FinCEN's alert lists red flags, including:[^fincen]

- unsolicited contact from a stranger who quickly moves the chat to an encrypted app;
- a new "friend" who pushes a crypto investment opportunity;
- a trading website or app that is not well known and shows unusually high, steady returns;
- being asked to pay fees or taxes before you can withdraw.

### How to verify

Look the platform up through a regulator's register, not a link the contact sent. Treat any request for more money before a withdrawal as proof of fraud.[^fincen]

## Approval phishing

### How it works

Tokens on networks such as Ethereum can grant another address permission to move them. This is called an **approval** or allowance. **Approval phishing** tricks a victim into signing an approval for the scammer's address, often disguised as a routine trade or login. The scammer can then drain the approved tokens at any time, even weeks later.[^chainalysis-approval]

A variant uses off-chain **permit** signatures defined in EIP-2612. These look like harmless messages but grant the same rights without an on-chain transaction.[^eip2612] Scam Sniffer reported that wallet-draining kits stole about $494 million from about 332,000 addresses in 2024. It found that "Permit remains the primary method" of token phishing.[^scamsniffer]

### Scale and response

Chainalysis estimated that over $2.7 billion was lost to approval phishing between May 2021 and mid-2024.[^chainalysis-spincaster] Its **Operation Spincaster**, with exchanges and police agencies, produced over 7,000 investigative leads tied to about $162 million in losses.[^chainalysis-approval] Investigators in one case revoked a scammer's approval before a victim lost six figures.[^chainalysis-approval]

### Warning signs and how to verify

- A wallet asks you to "approve" or "permit" spending when you only meant to look or log in.[^chainalysis-approval]
- An "adviser" walks you through connecting a wallet to a site you did not find yourself.[^chainalysis-approval]
- Read what a signature grants before approving it. Review and revoke old approvals with a block explorer's token approval checker, such as Etherscan's.[^etherscan-approvals]

## Fake support and recovery scams

### How it works

**Fake support** scams impersonate an exchange, wallet maker or bank. The scammer claims the victim's account is at risk. They ask the victim to move funds to a "safe" wallet, read out a login code, or reveal a seed phrase. The IC3 recorded about $2.1 billion in losses to tech and customer support scams in 2025.[^aba-ic3]

**Recovery scams** target people who have already been defrauded. The FBI warns of fake "law firms" that contact victims claiming to work with the FBI or other agencies.[^ic3-lawfirm-2024] They ask for identity documents, upfront fees, or "back taxes" to release recovered funds.[^ic3-lawfirm-2024] An August 2025 update added that they invent regulators and fake documents. It stressed that "there are no law firms which are officially authorized partners of US Government agencies".[^ic3-lawfirm-2025]

### Documented case

In May 2025 Coinbase disclosed that criminals had paid customer-support contractors and employees outside the US to collect customer data.[^coinbase-8k] The data included names, contact details, partly masked identity numbers and ID images, but no passwords or private keys.[^coinbase-8k] The attackers used it to impersonate Coinbase and trick customers into sending funds. They demanded $20 million; Coinbase refused and offered a $20 million reward instead.[^coinbase-blog] Coinbase estimated the costs at $180–400 million.[^coinbase-8k]

### Warning signs and how to verify

- Real support staff never ask for a seed phrase, private key or one-time code. They never ask you to move funds to a "safe" wallet.[^ftc][^coinbase-blog]
- Hang up and contact the company through its official app or website. The FBI gives the same advice for calls claiming to be from a phone carrier.[^ic3-simswap]
- No genuine recovery service charges upfront fees to retrieve stolen crypto. The FBI says victims should report to IC3 and their local FBI field office.[^ic3-lawfirm-2025]

## SIM swap

### How it works

In a **SIM swap**, a criminal persuades or bribes a mobile carrier to move the victim's phone number to a SIM card the criminal controls. The criminal then receives the victim's text messages, including password-reset and login codes.[^ic3-simswap] The FBI says criminals use social engineering, insider threats or phishing of carrier staff.[^ic3-simswap]

The IC3 received 1,611 SIM-swapping complaints in 2021, with losses of more than $68 million.[^ic3-simswap] In November 2023 the US Federal Communications Commission required carriers to use secure authentication before moving a number. Carriers must also notify customers immediately of SIM changes and port-out requests.[^fcc-simswap]

### Documented case

A January 2024 US indictment charged three people over a SIM-swap scheme. Reporting identified the victim as [FTX](../FTX_collapse/) and the loss as over $400 million taken on 11–12 November 2022.[^cnbc-ftx]

### Warning signs and how to verify

- Your phone suddenly loses service, or you get a message about a SIM change you did not request.[^ic3-simswap][^fcc-simswap]
- The FBI advises using "strong multi-factor authentication methods" such as physical security keys or authentication apps, rather than text messages.[^ic3-simswap]
- Do not advertise crypto holdings or post your phone number online.[^ic3-simswap]
- If it happens, contact your carrier immediately, then change passwords and alert your financial institutions.[^ic3-simswap]

## Rug pull

### How it works

In a **rug pull**, the creators of a token or NFT project raise money from buyers, then abandon the project and take the funds.[^doj-frosties] In a January 2025 case over the "Game Coin" token, the SEC described a common form. Insiders pull liquidity from a token's trading pool "without warning" and dump tokens into it. The SEC said this is "commonly known in the crypto asset industry as a 'rug pull'".[^sec-gamecoin] In that case, the issuers had told investors the liquidity was locked.[^sec-gamecoin]

### Documented case

In March 2022 US prosecutors in New York charged Ethan Nguyen and Andre Llacuna over the "Frosties" NFT project. Prosecutors said the pair abandoned it within hours of selling out in January 2022. They allegedly shut the website and moved about $1.1 million to wallets they controlled.[^doj-frosties] When arrested, they were about to launch a second project expected to raise about $1.5 million.[^doj-frosties]

### Warning signs and how to verify

- Pressure to buy before a deadline, and promises of high returns with little risk. The SEC and CFTC list both as fraud warning signs.[^sec-cftc-2019]
- Claims that liquidity is "locked" that cannot be checked independently.[^sec-gamecoin]
- Check whether the contract source code is published and verified on a block explorer, and who controls the liquidity and minting rights.

## Fake airdrop

### How it works

An **airdrop** is a free distribution of tokens. Scammers fake them in two ways: cloned websites offering a "claim", and unsolicited tokens sent straight to wallets with a link attached. Either way, the victim is led to a site that asks them to connect a wallet, sign an approval or enter a seed phrase.[^ic3-hedera][^scamsniffer]

In June 2025 the FBI warned of NFT airdrops on the Hedera network. These carried a link in the transaction "memo" that victims were told to click to accept the reward.[^ic3-hedera] The linked sites collected victims' information and drained their wallets.[^ic3-hedera]

### Warning signs and how to verify

- A token or NFT you never asked for, especially one with a link in its name or memo.[^ic3-hedera]
- A "claim" page that needs your seed phrase or broad token approvals.
- Find the project's official site independently and check its announcements; ignore links inside unsolicited tokens.[^ic3-hedera]

## Getting help

- **Stop sending money.** Further payments rarely recover earlier ones.[^fincen]
- **Report it.** In the US, report to [ic3.gov](https://www.ic3.gov/) and the local FBI field office. Elsewhere, contact the police and the national fraud agency.[^ic3-lawfirm-2025]
- **Tell the exchange** used to send or receive the funds; exchanges can sometimes freeze stolen coins.[^chainalysis-approval]
- **Beware of recovery offers** that follow, especially those asking for fees.[^ic3-lawfirm-2024]
- Secure remaining funds in a new wallet; see [Seed phrases and self-custody security](../Seed_phrases_and_self-custody_security/).

## Limits of the data

Loss figures vary widely between sources. The IC3 counts only losses that victims report.[^ic3-2025] Blockchain-analytics firms count funds reaching addresses they attribute to scams. Chainalysis expects its 2025 estimate of at least $14 billion to rise to about $17 billion as more addresses are identified.[^chainalysis-approval] Neither method captures every case, and the two cannot be added together.

## See also

- [Seed phrases and self-custody security](../Seed_phrases_and_self-custody_security/)
- [KYC and AML](../KYC_and_AML/)
- [Crypto glossary](../Crypto_glossary/)
- [FTX collapse](../FTX_collapse/)
- [Bybit hack](../Bybit_hack/)

## References

[^ic3-2025]: Federal Bureau of Investigation (April 2026). ["2025 Internet Crime Report"](https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf) (PDF). *Internet Crime Complaint Center*.
[^aba-ic3]: ["FBI: Cybercrime losses increased 26% in 2025"](https://bankingjournal.aba.com/2026/04/fbi-cybercrime-losses-increased-26-in-2025/). *ABA Banking Journal*. 7 April 2026. Summarises the IC3 2025 report.
[^cylab]: ["CyLab study uncovers 270 million crypto phishing attempts"](https://cylab.cmu.edu/news/2026/01/07-blockchain-address-poisoning.html). *Carnegie Mellon University CyLab*. 7 January 2026. On Tsuchiya, Taro; Christin, Nicolas, *USENIX Security 2025*.
[^ct-wbtc]: ["WBTC address poisoner sends nearly all funds back to victim after negotiations"](https://cointelegraph.com/news/wbtc-address-poisoner-all-funds-negotiations). *Cointelegraph*. May 2024.
[^fincen]: Financial Crimes Enforcement Network (8 September 2023). ["FinCEN Alert on Prevalent Virtual Currency Investment Fraud Schemes Commonly Known as 'Pig Butchering'"](https://www.fincen.gov/sites/default/files/shared/FinCEN_Alert_Pig_Butchering_FINAL_508c.pdf) (PDF). FIN-2023-Alert005.
[^doj-prince]: U.S. Department of Justice (14 October 2025). ["Chairman of Prince Group Indicted for Operating Cambodian Forced Labor Scam Compounds Engaged in Cryptocurrency Fraud Schemes"](https://www.justice.gov/opa/pr/chairman-prince-group-indicted-operating-cambodian-forced-labor-scam-compounds-engaged). Office of Public Affairs.
[^chainalysis-approval]: Chainalysis (17 June 2026). ["What Is Approval Phishing?"](https://www.chainalysis.com/blog/what-is-approval-phishing/). *Chainalysis blog*.
[^chainalysis-spincaster]: Chainalysis (July 2024). ["Operation Spincaster"](https://www.chainalysis.com/blog/operation-spincaster/). *Chainalysis blog*.
[^eip2612]: Lundfall, Martin (2020). ["EIP-2612: Permit Extension for EIP-20 Signed Approvals"](https://eips.ethereum.org/EIPS/eip-2612). *Ethereum Improvement Proposals*.
[^scamsniffer]: Scam Sniffer (January 2025). ["Scam Sniffer 2024: Web3 Phishing Attacks – Wallet Drainers Drain $494 Million"](https://drops.scamsniffer.io/scam-sniffer-2024-web3-phishing-attacks-wallet-drainers-drain-494-million/). *Scam Sniffer*.
[^etherscan-approvals]: ["Token Approval Checker"](https://etherscan.io/tokenapprovalchecker). *Etherscan*.
[^ic3-lawfirm-2024]: Federal Bureau of Investigation (24 June 2024). ["Fictitious Law Firms Targeting Cryptocurrency Scam Victims Offering to Recover Funds"](https://www.ic3.gov/PSA/2024/PSA240624). Public Service Announcement I-062424-PSA.
[^ic3-lawfirm-2025]: Federal Bureau of Investigation (13 August 2025). ["Fictitious Law Firms Targeting Cryptocurrency Scam Victims Combine Multiple Exploitation Tactics While Offering to Recover Funds"](https://www.ic3.gov/PSA/2025/PSA250813). Public Service Announcement I-081325-PSA.
[^coinbase-8k]: Coinbase Global, Inc. (May 2025). ["Form 8-K, Item 1.05: Material Cybersecurity Incidents"](https://www.sec.gov/Archives/edgar/data/1679788/000167978825000094/coin-20250514.htm). *SEC EDGAR*.
[^coinbase-blog]: Coinbase (May 2025). ["Protecting Our Customers – Standing Up to Extortionists"](https://www.coinbase.com/blog/protecting-our-customers-standing-up-to-extortionists). *Coinbase blog*.
[^ftc]: ["What To Know About Cryptocurrency and Scams"](https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams). *Federal Trade Commission*.
[^ic3-simswap]: Federal Bureau of Investigation (8 February 2022). ["Criminals Increasing SIM Swap Schemes to Steal Millions of Dollars from US Public"](https://www.ic3.gov/PSA/2022/PSA220208). Public Service Announcement I-020822-PSA.
[^fcc-simswap]: Federal Communications Commission (15 November 2023). ["FCC Adopts Rules to Protect Consumers' Cell Phone Accounts"](https://www.fcc.gov/document/fcc-adopts-rules-protect-consumers-cell-phone-accounts-0). FCC 23-95.
[^cnbc-ftx]: ["Three people indicted in $400 million FTX hack conspiracy"](https://www.cnbc.com/2024/02/02/three-people-indicted-in-400-million-ftx-hack-conspiracy.html). *CNBC*. 2 February 2024.
[^doj-frosties]: U.S. Attorney's Office, Southern District of New York (24 March 2022). ["Two Defendants Charged In Non-Fungible Token ('NFT') Fraud And Money Laundering Scheme"](https://www.justice.gov/usao-sdny/pr/two-defendants-charged-non-fungible-token-nft-fraud-and-money-laundering-scheme-0).
[^sec-gamecoin]: U.S. Securities and Exchange Commission (16 January 2025). *SEC v. Eric Zhu*, No. 3:25-cv-00054 (M.D. La.). [Litigation Release No. 26223](https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26223) and [complaint](https://www.sec.gov/files/litigation/complaints/2025/comp26223.pdf) (PDF).
[^sec-cftc-2019]: Commodity Futures Trading Commission (April 2019). ["CFTC and SEC Issue Investor Alert and Guidance Warning of Websites Related to Digital Asset Trading"](https://www.cftc.gov/PressRoom/PressReleases/7917-19). Release 7917-19.
[^ic3-hedera]: Federal Bureau of Investigation (3 June 2025). ["Cyber Criminals Defraud Hedera Hashgraph Network Non-Custodial Wallet Users Through Nonfungible Token Airdrops Disguised as Free Rewards"](https://www.ic3.gov/PSA/2025/PSA250603). Public Service Announcement I-060325-PSA.
