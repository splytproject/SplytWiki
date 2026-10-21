---
title: FTX collapse
description: Case study of the November 2022 collapse of the FTX exchange and Alameda Research — timeline, technical and organisational failures, amounts with sources, the criminal case against Sam Bankman-Fried, the Chapter 11 bankruptcy and creditor distributions, and lessons cited by researchers
aliases: [FTX, FTX bankruptcy, FTX fraud, Alameda Research, Sam Bankman-Fried, SBF, FTX Trading Ltd.]
categories: [Case studies, Exchanges, Fraud, Security incidents, Cryptocurrency history]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: bitcoin.svg
  caption: FTX collapse
  rows:
    - header: Overview
    - Company: "FTX Trading Ltd. and affiliates (FTX Group)"
    - Founded: 2019
    - Founder: Sam Bankman-Fried
    - Bankruptcy filing: "11 November 2022 (D. Del., No. 22-11068)"
    - header: Outcome
    - Criminal case: "Bankman-Fried convicted on 7 counts (Nov 2023); 25 years (Mar 2024); affirmed (Jun 2026)"
    - Unauthorised transfers on filing day: "About $432 million"
    - header: Status (as of October 2026)
    - Proceedings: "Plan effective 3 January 2025; FTX Recovery Trust distributing"
---

> **In plain terms:** FTX was a large crypto exchange. Its founder secretly let his trading firm, Alameda Research, borrow customers' money without limit. When a news report raised doubts in November 2022, customers rushed to withdraw and the money was not there. FTX went bankrupt within nine days, and its founder was sent to prison for fraud.

**FTX** was a cryptocurrency exchange founded in 2019 by Sam Bankman-Fried. He also controlled **Alameda Research**, a trading firm founded in 2017.[^ca2] By 2022 FTX customers traded about $10–15 billion a day.[^ca2] Alameda was FTX's largest customer and main market maker, and FTX gave it a large line of credit.[^ca2]

On 2 November 2022 a news site published part of Alameda's balance sheet, triggering mass withdrawals. FTX filed for bankruptcy on 11 November.[^ca2] The new chief executive, John J. Ray III, told the court he had never seen "such a complete failure of corporate controls".[^ray-decl] A jury convicted Bankman-Fried of fraud in November 2023. The Second Circuit Court of Appeals upheld the conviction in June 2026.[^ca2]

## Timeline

| Date | Event |
|---|---|
| 2017 | Bankman-Fried founds Alameda Research.[^ca2] |
| 2019 | Bankman-Fried founds FTX.[^ca2] |
| 23 and 31 Jul 2019 | Code adds the `can_withdraw_below_borrow` and `allow_negative` settings to FTX.com, used for Alameda's account.[^interim] |
| Late 2021 – Jun 2022 | Alameda's net asset value falls from over $40 billion to about $10 billion in a crypto market crash. Lenders recall loans.[^ca2] |
| 2 Nov 2022 | A crypto news site publishes a version of Alameda's balance sheet; withdrawals surge.[^ca2] |
| 11 Nov 2022 | Bankman-Fried is replaced as chief executive by Ray. FTX and affiliates file for Chapter 11 bankruptcy in Delaware.[^ca2][^ray-decl] |
| 11–12 Nov 2022 | About $432 million in crypto is drained from FTX wallets in an unauthorised attack.[^interim] |
| 13 Dec 2022 | US prosecutors announce criminal charges against Bankman-Fried.[^doj-indict] |
| 9 Apr 2023 | The debtors publish their first interim report on FTX's control failures.[^interim] |
| 2 Nov 2023 | A jury convicts Bankman-Fried on all seven counts.[^doj-convict] |
| Feb 2024 | An indictment unsealed in Washington, D.C. charges three people over a SIM-swap scheme. Reporting identifies FTX as the victim of the November 2022 theft.[^cnbc-simswap] |
| 28 Mar 2024 | Bankman-Fried is sentenced to 25 years in prison and $11 billion in forfeiture.[^doj-sentence] |
| 24 Sep 2024 | Former Alameda chief executive Caroline Ellison is sentenced to two years.[^ellison] |
| 7 Oct 2024 | The bankruptcy court confirms FTX's reorganisation plan.[^cbc-plan] |
| 3 Jan 2025 | The plan takes effect.[^plan-effective] |
| 31 Mar 2026 | Fourth creditor distribution, about $2.2 billion.[^dist4] |
| 12 Jun 2026 | The Second Circuit affirms Bankman-Fried's conviction and sentence.[^ca2] |
| 31 Jul 2026 | Fifth creditor distribution, about $900 million.[^dist5] |

## What failed

### Technical failures

The debtors' April 2023 report describes failures in "digital asset management, information security and cybersecurity".[^interim]

- **Secret privileges for Alameda.** FTX's code let Alameda's account go negative and keep withdrawing. These settings were called `can_withdraw_below_borrow` and `allow_negative`.[^interim] Alameda alone had a borrowing limit set to $65 billion.[^interim]
- **Hot wallets.** FTX "kept virtually all crypto assets in hot wallets", which are connected to the internet.[^interim] Employees told some outsiders that 90% was in cold storage, which was untrue outside Japan.[^interim]
- **Unprotected keys.** The debtors found private keys to over $100 million in Ethereum assets "stored in plain text and without encryption" on a server.[^interim]
- **Weak logins.** FTX failed to enforce multi-factor authentication for its own staff and systems.[^interim]
- **No defence against the final theft.** About $432 million was drained on the filing date. The group "did not have the controls to detect the compromise, much less to stop it".[^interim] Prosecutors later alleged that a SIM swap of an employee's phone account was used. In a SIM swap, a criminal tricks a phone carrier into moving someone's number to a new SIM card.[^cnbc-simswap]

### Organisational failures

- **Control in a few hands.** Ray called the situation unprecedented. He cited "the concentration of control in the hands of a very small group of inexperienced, unsophisticated and potentially compromised individuals".[^ray-decl]
- **No finance function.** The group "lacked any internal audit function whatsoever". Board oversight "was also effectively non-existent".[^interim]
- **Poor records.** Fifty-six group entities produced no financial statements of any kind. Thirty-five used QuickBooks, small-business accounting software.[^interim]
- **Informal approvals.** Ray reported that employees requested payments in an online chat, and supervisors approved them "by responding with personalized emojis".[^ray-decl]
- **Misuse of customer money.** At trial, Ellison testified that Bankman-Fried told her to use FTX customer funds to repay Alameda's lenders. She also said he had her send a lender a false balance sheet.[^ca2]

The debtors summed up the root causes as "hubris, incompetence, and greed".[^interim]

## Amounts

| Item | Amount | Source |
|---|---|---|
| Daily customer trading volume, 2022 | About $10–15 billion | Second Circuit opinion[^ca2] |
| Alameda net asset value, late 2021 → June 2022 | Over $40 billion → about $10 billion | Second Circuit opinion[^ca2] |
| Alameda borrowing limit on FTX.com | $65 billion | Debtors' report[^interim] |
| Unauthorised transfers, 11–12 November 2022 | About $432 million | Debtors' report[^interim] |
| Criminal forfeiture ordered | About $11 billion ($11.02 billion) | Second Circuit opinion[^ca2] |
| Fourth distribution, 31 March 2026 | About $2.2 billion | FTX Recovery Trust[^dist4] |
| Fifth distribution, 31 July 2026 | About $900 million | FTX Recovery Trust, via press[^dist5] |

## Legal aftermath

### Criminal cases

Bankman-Fried was charged in December 2022. A superseding indictment in August 2023 charged seven counts.[^ca2] They were two counts of wire fraud, two of wire-fraud conspiracy, and conspiracies to commit securities, commodities and money-laundering offences.[^ca2] After a four-week trial he was convicted on all counts.[^ca2][^doj-convict] Judge Lewis Kaplan sentenced him to 25 years in prison and about $11 billion in forfeiture.[^doj-sentence]

On 12 June 2026, a Second Circuit panel of Judges Parker, Lee and Kahn affirmed the judgment. It called the government's evidence "conservatively stated, robust".[^ca2] It also rejected his argument that the forfeiture was an unconstitutionally excessive fine.[^ca2]

Several members of Bankman-Fried's inner circle testified under cooperation agreements, including Ellison and FTX co-founder Gary Wang.[^ca2] Ellison received two years in prison.[^ellison] Former executive Ryan Salame was sentenced to 90 months for campaign-finance and unlicensed money-transmitting offences.[^doj-salame]

### Bankruptcy

The FTX Group's cases are jointly administered in the US Bankruptcy Court for the District of Delaware, case No. 22-11068.[^interim] Judge John Dorsey confirmed the reorganisation plan on 7 October 2024. Customers were promised at least 118% of their account values as of November 2022.[^cbc-plan] The plan took effect on 3 January 2025.[^plan-effective]

Distributions are made by the FTX Recovery Trust through BitGo, Kraken and Payoneer.[^dist4] After the March 2026 round, the trust reported these cumulative recoveries:[^dist4]

| Class | Cumulative distribution |
|---|---|
| 5A Dotcom customer entitlement claims | 96% |
| 5B US customer entitlement claims | 100% |
| 6A general unsecured / 6B digital asset loan claims | 100% |
| 7 Convenience claims | 120% |

A fifth distribution of about $900 million followed on 31 July 2026.[^dist5]

### Criticism of the recovery

Claims are valued in US dollars at November 2022 prices. Crypto prices later rose, so some customers argued that being paid in dollars left them worse off than receiving their original coins. The bankruptcy court approved the plan despite this dissent.[^defiant-plan]

## Lessons cited by researchers

The debtors' report compared FTX with practices at "prudently-operated crypto exchanges".[^interim] Its main points:

- **Keep most assets in cold storage**, with only what daily operations need in hot wallets.[^interim]
- **Encrypt and restrict keys.** Limit wallet access to the few people who need it.[^interim]
- **Enforce multi-factor authentication** for staff and infrastructure.[^interim]
- **Use real accounting and audit.** Have experienced finance staff, enterprise accounting systems and an internal audit function.[^interim]
- **Have independent oversight.** A functioning board would have checked concentrated control.[^interim][^ray-decl]
- **Treat a phone number as a weak secret.** The final theft relied on a SIM swap.[^cnbc-simswap]

## See also

- [Mt. Gox collapse](../Mt_Gox_collapse/)
- [Bybit hack](../Bybit_hack/)
- [Cryptocurrency regulation](../Cryptocurrency_regulation/)
- [KYC and AML](../KYC_and_AML/)
- [Cryptocurrency history](../Cryptocurrency_history/)

## References

[^ca2]: *United States v. Bankman-Fried*, [No. 24-961-cr](https://ww3.ca2.uscourts.gov/decisions/OPN/24-961_opn.pdf) (PDF) (2d Cir. 12 June 2026). Opinion by Judge Barrington D. Parker.
[^ray-decl]: Ray, John J., III (17 November 2022). ["Declaration of John J. Ray III in Support of Chapter 11 Petitions and First Day Pleadings"](https://storage.courtlistener.com/recap/gov.uscourts.deb.188450/gov.uscourts.deb.188450.24.0.pdf) (PDF). *In re FTX Trading Ltd.*, No. 22-11068 (Bankr. D. Del.), Dkt. 24.
[^interim]: FTX Debtors (9 April 2023). ["First Interim Report of John J. Ray III to the Independent Directors on Control Failures at the FTX Exchanges"](https://storage.courtlistener.com/recap/gov.uscourts.deb.188450/gov.uscourts.deb.188450.1242.1.pdf) (PDF). *In re FTX Trading Ltd.*, No. 22-11068 (Bankr. D. Del.), Dkt. 1242-1.
[^doj-indict]: U.S. Department of Justice (13 December 2022). ["FTX Founder Indicted for Fraud, Money Laundering, and Campaign Finance Offenses"](https://www.justice.gov/archives/opa/pr/ftx-founder-indicted-fraud-money-laundering-and-campaign-finance-offenses). Office of Public Affairs.
[^doj-convict]: U.S. Attorney's Office, Southern District of New York (2 November 2023). ["Statement of U.S. Attorney Damian Williams on the Conviction of Samuel Bankman-Fried"](https://www.justice.gov/usao-sdny/pr/statement-us-attorney-damian-williams-conviction-samuel-bankman-fried).
[^doj-sentence]: U.S. Attorney's Office, Southern District of New York (28 March 2024). ["Samuel Bankman-Fried Sentenced to 25 Years in Prison"](https://www.justice.gov/usao-sdny/pr/samuel-bankman-fried-sentenced-25-years-prison).
[^doj-salame]: U.S. Attorney's Office, Southern District of New York (May 2024). ["Former FTX Executive Ryan Salame Sentenced to 90 Months in Prison"](https://www.justice.gov/usao-sdny/pr/former-ftx-executive-ryan-salame-sentenced-90-months-prison).
[^ellison]: ["Caroline Ellison Sentenced to Two Years in Prison in FTX Case"](https://www.bloomberg.com/news/articles/2024-09-24/caroline-ellison-sentenced-to-two-years-in-jail-in-ftx-case). *Bloomberg*. 24 September 2024.
[^cnbc-simswap]: ["Three people indicted in $400 million FTX hack conspiracy"](https://www.cnbc.com/2024/02/02/three-people-indicted-in-400-million-ftx-hack-conspiracy.html). *CNBC*. 2 February 2024.
[^cbc-plan]: ["Failed crypto exchange FTX will repay billions to customers"](https://www.cbc.ca/1.7345911). *CBC News*. 7 October 2024.
[^defiant-plan]: ["FTX's Bankruptcy Plan Approved Despite User Dissent"](https://thedefiant.io/news/cefi/ftx-s-bankruptcy-plan-approved-clearing-path-for-98-customer-repayments). *The Defiant*. October 2024.
[^plan-effective]: ["FTX Plans $16 Billion Bankruptcy Payouts via BitGo and Kraken, Starting January 3, 2025, Within 60 Days"](https://thedefiant.io/news/cefi/ftx-plans-16-billion-bankruptcy-payouts-via-bitgo-kraken-starting-january-3-2025-0761396c). *The Defiant*. December 2024. Reports FTX's 16 December 2024 press release.
[^dist4]: FTX Recovery Trust (18 March 2026). ["FTX Recovery Trust to Distribute Approximately $2.2 Billion to Creditors in Fourth Distribution on March 31, 2026"](https://www.prnewswire.com/news-releases/ftx-recovery-trust-to-distribute-approximately-2-2-billion-to-creditors-in-fourth-distribution-on-march-31--2026--302717707.html). *PR Newswire*.
[^dist5]: ["FTX to distribute roughly $900 million to creditors in fifth wave of payouts"](https://www.theblock.co/post/408803/ftx-to-distribute-roughly-900-million-to-creditors-in-fifth-wave-of-payouts). *The Block*. July 2026.
