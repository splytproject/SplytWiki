---
title: Cryptocurrency regulation and tax in the United States
description: How the United States taxes and regulates crypto-assets — property treatment, Form 1099-DA broker reporting, the SEC and CFTC, FinCEN, the GENIUS Act for stablecoins, the stalled CLARITY Act and the SEC's 2026 "Regulation Crypto Assets" proposal, as of October 2026
aliases: [Crypto tax United States, US crypto regulation, IRS crypto, Form 1099-DA, GENIUS Act, CLARITY Act, Regulation Crypto Assets, SEC crypto, CFTC crypto]
categories: [Regulation, Taxation, United States]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: wallet-keys.svg
  caption: United States (as of October 2026)
  rows:
    - header: Tax
    - Treatment: "Property (IRS Notice 2014-21)"
    - Gains: "Capital gains on disposal"
    - Rewards and mining: "Ordinary income when received"
    - Broker reporting: "Form 1099-DA (proceeds from 2025; basis from 2026)"
    - header: Regulation
    - Securities: "SEC"
    - Commodities and derivatives: "CFTC"
    - AML: "FinCEN (money services businesses)"
    - Stablecoins: "GENIUS Act (July 2025)"
    - Market-structure law: "Not enacted"
---

> **In plain terms:** In the US, crypto is taxed like property. Selling, swapping or spending it can create a taxable gain or loss, and rewards count as income. Several agencies share oversight, depending on whether a token is treated as a security, a commodity or a payment. Congress passed a stablecoin law in 2025, but a broader crypto market law stalled in the Senate in September 2026.

The United States has no single crypto regulator. Oversight is split between the **Securities and Exchange Commission** (SEC) and the **Commodity Futures Trading Commission** (CFTC). The Treasury's **Financial Crimes Enforcement Network** (FinCEN), banking regulators and the states also play a part.[^sec-taxonomy][^fincen-2019] For tax, the Internal Revenue Service (IRS) has treated virtual currency as property since 2014.[^notice-2014-21]

Policy shifted sharply in 2025. A new administration ordered a pro-innovation approach. Congress passed the GENIUS Act for stablecoins, and the SEC began writing crypto-specific rules.[^eo-14178][^genius][^sec-reg-crypto] A market-structure bill, the CLARITY Act, passed the House but failed a Senate procedural vote on 15 September 2026.[^dla-clarity]

## Key dates and legal instruments

| Date | Instrument or event |
|---|---|
| 18 Mar 2013 | FinCEN guidance: crypto exchangers and administrators are money transmitters.[^fincen-2013] |
| 25 Mar 2014 | IRS Notice 2014-21: virtual currency is property for tax purposes.[^notice-2014-21] |
| Jun 2015 | New York's BitLicense rules take effect.[^nydfs] |
| 25 Jul 2017 | SEC's *DAO Report*: some tokens are securities.[^sec-dao] |
| 9 May 2019 | FinCEN consolidates its guidance on convertible virtual currency.[^fincen-2019] |
| 15 Nov 2021 | Infrastructure Investment and Jobs Act extends broker reporting to digital assets.[^irs-broker-regs] |
| 13 Jul 2023 | *SEC v. Ripple*: court rules some XRP sales were securities and others were not.[^ripple] |
| 14 Aug 2023 | Rev. Rul. 2023-14: staking rewards are income when the taxpayer gains control of them.[^revrul-2023-14] |
| 10 Jan 2024 | SEC approves spot bitcoin exchange-traded products.[^etf] |
| Jul 2024 | Final broker reporting regulations (T.D. 10000) create Form 1099-DA.[^irs-broker-regs] |
| 26 Nov 2024 | Fifth Circuit rules Treasury could not sanction Tornado Cash's immutable smart contracts.[^van-loon] |
| 23 Jan 2025 | Executive Order 14178 on digital financial technology; SEC rescinds SAB 121 with SAB 122.[^eo-14178][^sab-122] |
| 6 Mar 2025 | Executive order creates a Strategic Bitcoin Reserve.[^sbr] |
| 10 Apr 2025 | Congress overturns the IRS rule treating DeFi front ends as brokers.[^rsm-defi] |
| 18 Jul 2025 | GENIUS Act on payment stablecoins becomes law.[^genius] |
| Jul 2025 | House passes the CLARITY Act.[^dla-clarity] |
| 17 Mar 2026 | SEC interpretation sorts crypto-assets into five categories.[^sec-taxonomy] |
| 18 Aug 2026 | SEC proposes "Regulation Crypto Assets".[^sec-reg-crypto] |
| 15 Sep 2026 | Senate fails to advance the CLARITY Act.[^dla-clarity] |

## Taxation

### Property treatment

Under Notice 2014-21, virtual currency is property, not currency, for federal tax. General property tax rules apply.[^notice-2014-21] In practice:[^irs-digital]

- **Selling, swapping or spending** crypto is a disposal. The gain or loss is the difference between proceeds and basis (usually the purchase cost).
- **Holding period matters.** Gains on assets held over one year are long-term capital gains, taxed at lower rates; shorter holdings are short-term.
- **Income events.** Crypto received as pay, mining rewards or most airdrops is ordinary income at its fair market value when received.[^revrul-2019-24]
- **Staking rewards** are income in the year the taxpayer "gains dominion and control" over them.[^revrul-2023-14]

The main individual return, Form 1040, asks every filer whether they received or disposed of a digital asset.[^irs-digital]

### Broker reporting: Form 1099-DA

The Infrastructure Investment and Jobs Act of 2021 brought digital-asset brokers into the information-reporting system.[^irs-broker-regs] Final regulations (T.D. 10000) created **Form 1099-DA**:[^irs-broker-regs][^i1099da]

- For sales from 1 January 2025, brokers report **gross proceeds**.
- For sales from 1 January 2026, they must also report **basis**. This applies only to assets bought from, and kept with, the same broker on or after that date.
- Assets bought earlier or moved in from another wallet are "noncovered". Customers must work out their own basis for those.

A separate rule treating some decentralized-finance front ends as brokers was overturned by Congress under the Congressional Review Act. President Trump signed the resolution on 10 April 2025.[^rsm-defi] Under that Act, a substantially similar rule cannot be reissued without new legislation.[^rsm-defi]

### Practical difficulties

Because crypto is property, each payment made with it can be a taxable disposal.[^notice-2014-21] The IRS also warns that most 2025 Forms 1099-DA will not show basis. Taxpayers must calculate it themselves.[^irs-broker-regs]

## Regulation

### Securities: the SEC

The SEC regulates crypto-assets that are offered as **investment contracts** under the Supreme Court's 1946 *Howey* test. In its 2017 *DAO Report*, the SEC found that tokens sold by The DAO were securities.[^sec-dao]

Courts gave mixed answers. In *SEC v. Ripple* (2023), a federal judge found Ripple's direct sales of XRP to institutions were securities transactions. Its anonymous sales on exchanges were not.[^ripple]

From January 2025 the SEC changed course under Acting Chair Mark Uyeda and then Chair Paul Atkins. It rescinded Staff Accounting Bulletin 121, which had discouraged banks from holding crypto for customers.[^sab-122] In March 2026 it issued an interpretation sorting crypto-assets into five groups: digital commodities, digital collectibles, digital tools, payment stablecoins and digital securities.[^sec-taxonomy] Only digital securities are treated as securities; payment stablecoins fall under the GENIUS Act.[^sec-taxonomy]

On 18 August 2026 the SEC proposed **Regulation Crypto Assets**.[^sec-reg-crypto] It would add two exemptions from registration:

- a one-time exemption for offerings of up to $5 million over four years; and
- an exemption for offerings of up to $75 million in each 12-month period.

It would also create a **safe harbor**. An issuer might finish, or permanently stop, the managerial efforts it promised. The token would then no longer be treated as part of an investment contract.[^sec-reg-crypto] As of October 2026 the rule is a proposal, not final.

### Commodities: the CFTC

The CFTC treats bitcoin and some other crypto-assets as **commodities**, and regulates crypto futures and other derivatives.[^cftc-coinflip] It does not license spot crypto exchanges. Filling that gap was a main aim of the CLARITY Act.[^dla-clarity]

### Anti-money laundering: FinCEN

Under FinCEN guidance, businesses that exchange or transmit crypto for customers are **money services businesses** under the Bank Secrecy Act. They must register, run AML programmes and file suspicious-activity reports.[^fincen-2013][^fincen-2019] Users who buy crypto for themselves are not money transmitters.[^fincen-2019]

### Sanctions: OFAC and Tornado Cash

The Treasury's Office of Foreign Assets Control (OFAC) can sanction crypto addresses. In 2022 it sanctioned the Tornado Cash mixer. In *Van Loon v. Department of the Treasury* (2024), the Fifth Circuit held that its immutable smart contracts were not "property" that could be sanctioned.[^van-loon]

### Stablecoins: the GENIUS Act

The **GENIUS Act**, signed on 18 July 2025, sets federal rules for payment stablecoins.[^genius] Issuers must hold reserves backing tokens one-for-one with cash, bank deposits or short-term Treasuries. They must be licensed by a federal or qualifying state regulator.[^genius] Regulators had one year to write rules. They missed that deadline; as of mid-2026, several rules were still at the proposal stage.[^block-genius] The Act takes effect by 18 January 2027 at the latest.[^block-genius]

### States

States license money transmitters. New York's **BitLicense**, run by the Department of Financial Services, has applied since 2015.[^nydfs]

### Pending legislation: the CLARITY Act

The **Digital Asset Market Clarity Act** would divide spot markets between the SEC and CFTC and create a federal registration path for exchanges. The House passed it in July 2025.[^dla-clarity] On 15 September 2026 a Senate vote to proceed failed. Republican Senators Collins, Hawley and Moran joined Democrats in opposition.[^dla-clarity]

Opponents raised ethics, consumer protection, illicit finance and the pre-emption of state enforcement.[^dla-clarity] SEC Chairman Atkins has said Congress is working "to establish a lasting regulatory framework", which agency rules alone cannot provide.[^sec-reg-crypto]

## Criticism and open disputes

- **Securities status of tokens.** Courts split on which token sales are securities transactions, as in *Ripple*.[^ripple] The SEC's 2026 interpretation and proposal aim to set clearer lines.[^sec-taxonomy][^sec-reg-crypto]
- **Deregulation risks.** Critics of the 2025–2026 changes, including Democratic senators, argue they weaken investor protection and anti-money-laundering safeguards.[^dla-clarity]
- **Conflicts of interest.** Ethics rules for officials' own crypto ventures were a central dispute in the CLARITY Act debate.[^dla-clarity]

## Practical notes

- Keep records of each acquisition's date and cost, especially for "noncovered" assets that brokers will not report basis for.[^i1099da]
- Moving coins between your own wallets is not a sale, but it can break the chain of basis information between brokers.[^i1099da]
- This article is general information, not tax or legal advice.

## See also

- [Cryptocurrency taxation](../Cryptocurrency_taxation/)
- [Cryptocurrency regulation](../Cryptocurrency_regulation/)
- [Bitcoin exchange-traded funds](../Bitcoin_exchange-traded_funds/)
- [Stablecoin](../Stablecoin/)
- [KYC and AML](../KYC_and_AML/)

## References

[^notice-2014-21]: Internal Revenue Service (25 March 2014). ["Notice 2014-21"](https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21). *Internal Revenue Bulletin* 2014-16.
[^revrul-2019-24]: Internal Revenue Service (2019). ["Revenue Ruling 2019-24"](https://www.irs.gov/irb/2019-44_IRB#REV-RUL-2019-24). *Internal Revenue Bulletin* 2019-44. On hard forks and airdrops.
[^revrul-2023-14]: Internal Revenue Service (2023). ["Revenue Ruling 2023-14"](https://www.irs.gov/irb/2023-33_IRB#REV-RUL-2023-14). *Internal Revenue Bulletin* 2023-33.
[^irs-digital]: Internal Revenue Service. ["Digital assets"](https://www.irs.gov/filing/digital-assets). *irs.gov*. Retrieved October 2026.
[^irs-broker-regs]: Internal Revenue Service. ["Final regulations and related IRS guidance for reporting by brokers on sales and exchanges of digital assets"](https://www.irs.gov/newsroom/final-regulations-and-related-irs-guidance-for-reporting-by-brokers-on-sales-and-exchanges-of-digital-assets). *irs.gov*.
[^i1099da]: Internal Revenue Service. ["Instructions for Form 1099-DA (2026)"](https://www.irs.gov/instructions/i1099da). *irs.gov*.
[^rsm-defi]: ["Congress nullifies IRS crypto reporting regulations for DeFi platforms"](https://rsmus.com/insights/tax-alerts/2025/congress-nullifies-irs-crypto-reporting-regulations-for-defi-platforms.html). *RSM*. April 2025. On H.J. Res. 25.
[^fincen-2013]: Financial Crimes Enforcement Network (18 March 2013). ["Application of FinCEN's Regulations to Persons Administering, Exchanging, or Using Virtual Currencies"](https://www.fincen.gov/resources/statutes-regulations/guidance/application-fincens-regulations-persons-administering). FIN-2013-G001.
[^fincen-2019]: Financial Crimes Enforcement Network (9 May 2019). ["Application of FinCEN's Regulations to Certain Business Models Involving Convertible Virtual Currencies"](https://www.fincen.gov/resources/statutes-regulations/guidance/application-fincens-regulations-certain-business-models). FIN-2019-G001.
[^nydfs]: New York State Department of Financial Services. ["Virtual Currency Businesses"](https://www.dfs.ny.gov/virtual_currency_businesses). 23 NYCRR Part 200.
[^sec-dao]: U.S. Securities and Exchange Commission (25 July 2017). ["Report of Investigation Pursuant to Section 21(a) of the Securities Exchange Act of 1934: The DAO"](https://www.sec.gov/litigation/investreport/34-81207.pdf) (PDF). Release No. 81207.
[^ripple]: *SEC v. Ripple Labs, Inc.*, No. 20-cv-10832 (S.D.N.Y. 13 July 2023). [Opinion and order](https://www.nysd.uscourts.gov/sites/default/files/2023-07/SEC%20vs%20Ripple%207-13-23.pdf) (PDF).
[^etf]: U.S. Securities and Exchange Commission (10 January 2024). [Order approving spot bitcoin exchange-traded products](https://www.sec.gov/files/rules/sro/nysearca/2024/34-99306.pdf) (PDF). Release No. 34-99306.
[^van-loon]: *Van Loon v. Department of the Treasury*, No. 23-50669 (5th Cir. 26 November 2024). [Opinion](https://www.ca5.uscourts.gov/opinions/pub/23/23-50669-CV0.pdf) (PDF).
[^eo-14178]: Executive Order 14178 (23 January 2025). ["Strengthening American Leadership in Digital Financial Technology"](https://www.federalregister.gov/documents/2025/01/31/2025-02123/strengthening-american-leadership-in-digital-financial-technology). *Federal Register*.
[^sab-122]: U.S. Securities and Exchange Commission (23 January 2025). ["Staff Accounting Bulletin No. 122"](https://www.sec.gov/rules-regulations/staff-guidance/staff-accounting-bulletins/staff-accounting-bulletin-122).
[^sbr]: Executive Order 14233 (6 March 2025). ["Establishment of the Strategic Bitcoin Reserve and United States Digital Asset Stockpile"](https://www.federalregister.gov/documents/2025/03/11/2025-03992/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile). *Federal Register*.
[^genius]: Guiding and Establishing National Innovation for U.S. Stablecoins Act (GENIUS Act), Pub. L. 119-27 (18 July 2025). [Text](https://www.congress.gov/bill/119th-congress/senate-bill/1582). *Congress.gov*.
[^block-genius]: ["US regulators miss GENIUS Act's one-year deadline for final stablecoin rules"](https://www.theblock.co/post/408843/us-regulators-miss-genius-acts-one-year-deadline-for-final-stablecoin-rules). *The Block*. July 2026.
[^sec-taxonomy]: Atkins, Paul S. (17 March 2026). ["Remarks on Regulation of Crypto Assets"](https://www.sec.gov/newsroom/speeches-statements/atkins-remarks-regulation-crypto-assets-031726). *U.S. Securities and Exchange Commission*.
[^sec-reg-crypto]: U.S. Securities and Exchange Commission (18 August 2026). ["SEC Proposes New Regulation Crypto Assets"](https://www.sec.gov/newsroom/press-releases/2026-76-sec-proposes-new-regulation-crypto-assets). Press release 2026-76.
[^cftc-coinflip]: Commodity Futures Trading Commission (17 September 2015). ["In the Matter of Coinflip, Inc."](https://www.cftc.gov/sites/default/files/idc/groups/public/@lrenforcementactions/documents/legalpleading/enfcoinfliprorder09172015.pdf) (PDF). CFTC Docket No. 15-29.
[^dla-clarity]: ["Senate fails to advance the CLARITY Act: Top points"](https://www.dlapiper.com/en/insights/publications/2026/09/senate-fails-to-advance-the-clarity-act). *DLA Piper*. September 2026.
