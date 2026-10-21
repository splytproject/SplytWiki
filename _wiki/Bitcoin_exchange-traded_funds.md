---
title: Bitcoin exchange-traded funds
description: History of bitcoin exchange-traded funds from the 2013 Winklevoss filing to the January 2024 US spot approvals and later products, how creations, redemptions and custody work, a table of US spot funds, and criticisms
aliases: [Bitcoin ETF, Spot bitcoin ETF, Bitcoin ETP, Spot bitcoin ETP, IBIT, GBTC, FBTC, Bitcoin ETFs]
categories: [Bitcoin, Markets, Regulation, Investment products]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: bitcoin.svg
  caption: Bitcoin exchange-traded funds
  rows:
    - header: Overview
    - Type: "Exchange-traded product holding bitcoin (US funds: trusts taxed as grantor trusts)"
    - First US filing: "Winklevoss Bitcoin Trust, 1 July 2013"
    - First US bitcoin-linked ETF: "ProShares Bitcoin Strategy ETF (futures), 19 October 2021"
    - US spot approval: "10 January 2024 (11 products)"
    - header: Status (as of October 2026)
    - US spot funds trading: "12"
    - Creation methods: "Cash and in-kind (in-kind since July 2025)"
    - Most common custodian: Coinbase Custody Trust Company
---

> **In plain terms:** A bitcoin exchange-traded fund is a share you can buy through an ordinary brokerage account. The fund holds bitcoin, so the share's value follows bitcoin's price. You own a share of the fund, not the bitcoin itself, and a custodian holds the coins.

A **bitcoin exchange-traded fund** (ETF) is an investment fund, listed on a stock exchange, that tracks the price of [bitcoin](../Bitcoin/). In the United States most such funds are trusts rather than registered investment companies, so regulators call them exchange-traded products (ETPs).[^sec-order][^inkind] A **spot** fund holds bitcoin directly; a **futures** fund holds bitcoin futures contracts instead.[^bito]

The first US application was filed in July 2013.[^winklevoss-s1] The Securities and Exchange Commission (SEC) rejected spot proposals for more than a decade. It approved 11 spot products on 10 January 2024, after losing a court case brought by Grayscale.[^sec-order][^grayscale-dc] As of October 2026, twelve US spot bitcoin funds trade, and one has closed.[^defi-8k]

## History

### Early filings and rejections (2013–2020)

Cameron and Tyler Winklevoss filed the first registration statement for a bitcoin fund, the Winklevoss Bitcoin Trust, on 1 July 2013.[^winklevoss-s1] The proposal to list it required an exchange rule change, which the SEC had to approve.

SEC staff disapproved that rule change on 10 March 2017.[^sec-2017] After a review, the full Commission disapproved it again on 26 July 2018.[^sec-2018] The SEC's main reason was the risk of fraud and manipulation in spot markets. It wanted the listing exchange to have a surveillance-sharing agreement with a regulated market "of significant size" in bitcoin.[^sec-2018] Commissioner Hester Peirce dissented.[^peirce-2018] Other proposals were rejected or withdrawn on similar grounds over the next five years.[^crenshaw]

### Futures funds (2021)

The ProShares Bitcoin Strategy ETF (BITO) began trading on 19 October 2021. It was the first US bitcoin-linked ETF. It holds CME bitcoin futures, not bitcoin.[^bito]

Outside the US, the Purpose Bitcoin ETF began trading on the Toronto Stock Exchange on 18 February 2021. It held physical bitcoin.[^tsx]

### Grayscale v. SEC (2022–2023)

The Grayscale Bitcoin Trust had operated since September 2013. Its shares were quoted over the counter on OTCQX, often at large premiums or discounts to the value of its bitcoin.[^gbtc-10k] In 2021 NYSE Arca applied to list it as an ETP.[^sec-order] The SEC disapproved the application on 29 June 2022, and Grayscale sued.[^grayscale-dc]

On 29 August 2023 the US Court of Appeals for the D.C. Circuit vacated the SEC's order. It held the denial "arbitrary and capricious". The SEC had approved bitcoin futures ETPs and had not explained why a spot fund was different.[^grayscale-dc]

### Spot approval (January 2024)

On 9 January 2024, an intruder took over the SEC's @SECGov account on X. They posted a false announcement that spot bitcoin ETFs had been approved.[^sec-x] The SEC later said the attacker had taken control of the phone number linked to the account.[^sec-x]

The next day, 10 January 2024, the SEC approved rule changes from NYSE Arca, Nasdaq and Cboe BZX for 11 spot products in one order.[^sec-order] Trading began on 11 January.[^ibit-10k] Chair Gary Gensler wrote that the Commission "did not approve or endorse bitcoin".[^gensler] Commissioner Caroline Crenshaw dissented. She argued that spot bitcoin markets remained exposed to fraud and manipulation, with limited regulatory visibility.[^crenshaw]

### Later products and changes (2024–2026)

| Date | Event |
|---|---|
| 27 Mar 2024 | Hashdex converts its futures fund into a spot fund, renamed Hashdex Bitcoin ETF (DEFI).[^defi-10q] |
| 30 Apr 2024 | First spot bitcoin and ether ETFs list in Hong Kong.[^hk] |
| 31 Jul 2024 | Grayscale Bitcoin Mini Trust (BTC) begins trading.[^btc-10k] |
| 20 Sep 2024 | SEC approves listing of options on the iShares Bitcoin Trust.[^ibit-options] Trading starts on 19 November 2024.[^ise-later] |
| 29 Jul 2025 | SEC permits in-kind creations and redemptions for crypto ETPs.[^inkind] |
| 17 Sep 2025 | SEC approves generic listing standards for commodity-based trust shares. Qualifying funds no longer need a separate rule change.[^generic] |
| 8 Apr 2026 | Morgan Stanley Bitcoin Trust (MSBT) lists, the first spot bitcoin fund from a major US bank.[^msbt-10q][^coindesk-msbt] |
| 17 Aug 2026 | DEFI stops trading; it is liquidated and holders are paid in cash. It is the first US spot bitcoin fund to close.[^defi-8k][^defi-8k-2] |

## Structure

### Creations and redemptions

Investors buy and sell fund shares on an exchange. Only large firms called **authorized participants** (APs) create or redeem shares with the fund itself, in large blocks called baskets.[^ibit-10k] This keeps the share price close to the value of the fund's bitcoin.

- **Cash creation.** The AP pays cash. The fund then buys bitcoin, usually through a broker. Redemptions work in reverse. The 2024 approvals allowed only this method.[^inkind]
- **In-kind creation.** The AP delivers bitcoin directly and receives shares. Redemptions return bitcoin to the AP. The SEC allowed this from July 2025, saying it would lower costs.[^inkind]

As of October 2026, filings describe both methods. For example, Fidelity's fund accepts both "In-Kind Creation Orders" and "Cash Creation Orders".[^fbtc-10k] Ordinary shareholders cannot redeem their shares for bitcoin in either case.[^ibit-10k]

### Custody

The fund's bitcoin is held by a regulated **custodian**, usually in cold storage, meaning keys kept offline.[^ibit-10k] The iShares filing says its private keys are stored in the United States and Europe, at undisclosed locations.[^ibit-10k]

Some funds also keep a small **trading balance** with a broker, the "prime execution agent", to settle cash creations. In the iShares trust, that balance is held in an omnibus account. The fund "does not have an identifiable claim to any particular bitcoin" there.[^ibit-10k]

Many funds name a second custodian as a back-up. Some, such as ARK 21Shares and CoinShares, split holdings among several.[^arkb-10k][^brrr-10k]

### Forks and airdrops

Several funds state they will abandon any coins created by a fork or airdrop. The iShares trust says shareholders "will not receive the benefits" of such assets.[^ibit-10k] The sponsor also chooses which chain counts as bitcoin after a contentious [hard fork](../Soft_fork_and_hard_fork/).[^ibit-10k]

## US spot bitcoin funds

Sponsor fees are annual percentages of assets, taken from each fund's latest SEC filing as of October 2026. Funds sometimes waive part of the fee for a period; the table shows the standard rate.

| Fund | Sponsor | Ticker | Exchange | First trading day | Bitcoin custodian(s) | Fee |
|---|---|---|---|---|---|---|
| iShares Bitcoin Trust ETF | BlackRock (iShares Delaware Trust Sponsor) | IBIT | Nasdaq | 11 Jan 2024 | Coinbase Custody; Anchorage Digital (additional) | 0.25%[^ibit-10k] |
| Fidelity Wise Origin Bitcoin Fund | FD Funds Management (Fidelity) | FBTC | Cboe BZX | 11 Jan 2024 | Fidelity Digital Assets | 0.25%[^fbtc-10k] |
| Grayscale Bitcoin Trust ETF | Grayscale | GBTC | NYSE Arca | 11 Jan 2024 (as ETP) | Coinbase Custody; Anchorage Digital (additional) | 1.50%[^gbtc-10k] |
| Grayscale Bitcoin Mini Trust ETF | Grayscale | BTC | NYSE Arca | 31 Jul 2024 | Coinbase Custody; Anchorage Digital (additional) | 0.15%[^btc-10k] |
| ARK 21Shares Bitcoin ETF | 21Shares (with ARK Invest) | ARKB | Cboe BZX | 11 Jan 2024 | Coinbase Custody, BitGo, Anchorage Digital | 0.21%[^arkb-10k][^arkb-424] |
| Bitwise Bitcoin ETF | Bitwise | BITB | NYSE Arca | 11 Jan 2024 | Coinbase Custody | 0.20%[^bitb-10k] |
| Invesco Galaxy Bitcoin ETF | Invesco (with Galaxy) | BTCO | Cboe BZX | 11 Jan 2024 | Coinbase Custody | 0.25%[^btco-10k] |
| VanEck Bitcoin ETF | VanEck | HODL | Cboe BZX | 10 Jan 2024 | Gemini Trust; Coinbase Custody (additional) | 0.20%[^hodl-10k] |
| CoinShares Bitcoin ETF (formerly Valkyrie) | CoinShares | BRRR | Nasdaq | 11 Jan 2024 | Coinbase Custody, BitGo, Komainu | 0.25%[^brrr-10k] |
| Franklin Bitcoin ETF | Franklin Templeton | EZBC | Cboe BZX | 11 Jan 2024 | Coinbase Custody | 0.19%[^ezbc-10k] |
| WisdomTree Bitcoin Fund | WisdomTree | BTCW | Cboe BZX | 11 Jan 2024 | Coinbase Custody | 0.25%[^btcw-10k] |
| Morgan Stanley Bitcoin Trust | Morgan Stanley | MSBT | NYSE Arca | 8 Apr 2026 | BNY; Coinbase Custody | 0.14%[^msbt-424][^msbt-10q] |
| *Hashdex Bitcoin ETF (closed)* | *Hashdex* | *DEFI* | *NYSE Arca* | *Spot from 27 Mar 2024; delisted 17 Aug 2026* | *BitGo* | *—*[^defi-10q][^defi-8k] |

VanEck's filing reports the first trading day as 10 January 2024, a day before the others.[^hodl-10k] Grayscale's GBTC had existed since 2013 but began trading on NYSE Arca as an ETP on 11 January 2024. Its fee was cut from 2.0% to 1.5% at that time.[^gbtc-10k]

## Criticisms and open disputes

### Custody concentration

Coinbase Custody Trust Company is the main or a named custodian for eleven of the twelve trading funds in the table. Only Fidelity's fund uses its own custodian.[^ibit-10k][^fbtc-10k][^gbtc-10k][^btc-10k][^arkb-10k][^bitb-10k][^btco-10k][^hodl-10k][^brrr-10k][^ezbc-10k][^btcw-10k][^msbt-424] In February 2026 Coinbase's chief executive, Brian Armstrong, estimated its share of US bitcoin ETF custody at "80% plus". He called it "a strength".[^bm-paper]

Critics say a single firm's failure, hack or legal problem could affect most of the market at once. Funds address this risk partly by naming additional custodians. Armstrong said it was healthy for large funds to diversify custodians as they grow.[^bm-paper]

### "Paper bitcoin"

Some commentators argue that ETF shares are "paper bitcoin": claims on bitcoin that holders cannot verify or withdraw.[^bm-paper] They point to several features:

- Shareholders cannot redeem shares for bitcoin; only authorized participants deal with the fund.[^ibit-10k]
- Funds do not publish wallet addresses, so holdings cannot be checked on the [blockchain](../Blockchain/). Critics have asked for public proof of reserves.[^bm-paper]
- Coins in a trading balance are an omnibus claim, not specific coins.[^ibit-10k]

Defenders reply that the funds file audited financial statements with the SEC. Most of their bitcoin sits in segregated cold-storage accounts, apart from the custodian's own assets.[^ibit-10k] Armstrong said spot ETFs must hold "the real bitcoin" they represent.[^bm-paper]

### Influence over the network

Fund sponsors, not shareholders, decide how to treat forks. The iShares filing warns there is "no guarantee" the sponsor will choose the most valuable chain.[^ibit-10k] The wider argument about custodians and institutions in Bitcoin is covered in [Bitcoin institutionalization debate](../Bitcoin_institutionalization_debate/).

### Market integrity

Commissioner Crenshaw's 2024 dissent argued that the underlying spot markets are global and lightly regulated. She also questioned whether surveillance of CME futures could detect manipulation in those markets.[^crenshaw] She dissented again when the SEC approved generic listing standards in September 2025.[^crenshaw-2025]

## Developer notes

Spot ETFs do not change the Bitcoin protocol. Researchers who want primary data can use these sources:

- **SEC EDGAR.** Each trust files 10-K and 10-Q reports with bitcoin holdings, fees and custodians. Use the trust's CIK, for example IBIT `0001980994`, with `https://data.sec.gov/submissions/CIK0001980994.json`.[^ibit-10k]
- **Benchmarks.** Each fund names a reference price, such as the CME CF Bitcoin Reference Rate or the Nasdaq Bitcoin Reference Price, in its filings.[^brrr-10k][^defi-10q]

## See also

- [Bitcoin](../Bitcoin/)
- [Bitcoin institutionalization debate](../Bitcoin_institutionalization_debate/)
- [Cryptocurrency regulation](../Cryptocurrency_regulation/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)
- [Crypto glossary](../Crypto_glossary/)

## References

[^winklevoss-s1]: Winklevoss Bitcoin Trust (1 July 2013). ["Form S-1 Registration Statement"](https://www.sec.gov/Archives/edgar/data/1579346/000119312513279830/d562329ds1.htm). *SEC EDGAR*.
[^sec-2017]: U.S. Securities and Exchange Commission (10 March 2017). ["Order Disapproving a Proposed Rule Change ... to List and Trade Shares of the Winklevoss Bitcoin Trust"](https://www.sec.gov/rule-release/34-80206). Release No. 34-80206.
[^sec-2018]: U.S. Securities and Exchange Commission (26 July 2018). ["Order Setting Aside Action by Delegated Authority and Disapproving a Proposed Rule Change ... to List and Trade Shares of the Winklevoss Bitcoin Trust"](https://www.sec.gov/file/34-83723). Release No. 34-83723.
[^bito]: ProShares (18 October 2021). ["ProShares to Launch the First U.S. Bitcoin Linked ETF on October 19"](https://www.businesswire.com/news/home/20211018005280/en/ProShares-to-Launch-the-First-U.S.-Bitcoin-Linked-ETF-on-October-19). Press release, *Business Wire*.
[^tsx]: Toronto Stock Exchange (18 February 2021). ["Toronto Stock Exchange Lists World's First Bitcoin ETF"](https://www.tsx.com/en/news?id=814). *TMX Group*.
[^grayscale-dc]: *Grayscale Investments, LLC v. Securities and Exchange Commission*, No. 22-1142, 82 F.4th 1239 (D.C. Cir. 29 August 2023). Opinion by Judge Neomi Rao.
[^sec-x]: U.S. Securities and Exchange Commission (January 2024). ["@SECGov X Account"](https://www.sec.gov/secgov-x-account). Statement and updates on the 9 January 2024 compromise.
[^sec-order]: U.S. Securities and Exchange Commission (10 January 2024). ["Self-Regulatory Organizations; NYSE Arca, Inc.; The Nasdaq Stock Market LLC; Cboe BZX Exchange, Inc.; Order Granting Accelerated Approval of Proposed Rule Changes ... to List and Trade Bitcoin-Based Commodity-Based Trust Shares and Trust Units"](https://www.sec.gov/files/rules/sro/nysearca/2024/34-99306.pdf) (PDF). Release No. 34-99306.
[^gensler]: Gensler, Gary (10 January 2024). ["Statement on the Approval of Spot Bitcoin Exchange-Traded Products"](https://www.sec.gov/newsroom/speeches-statements/gensler-statement-spot-bitcoin-011023). *U.S. Securities and Exchange Commission*.
[^crenshaw]: Crenshaw, Caroline A. (10 January 2024). ["Dissenting Statement Regarding the Commission's Approval of Spot Bitcoin ETPs"](https://www.sec.gov/newsroom/speeches-statements/crenshaw-statement-spot-bitcoin-011023). *U.S. Securities and Exchange Commission*.
[^crenshaw-2025]: Crenshaw, Caroline A. (17 September 2025). ["Statement on Commodity-Based ETPs"](https://www.sec.gov/newsroom/speeches-statements/crenshaw-statement-commodity-based-etps-091725). *U.S. Securities and Exchange Commission*.
[^peirce-2018]: Peirce, Hester M. (26 July 2018). ["Dissent of Commissioner Hester M. Peirce in Response to Release No. 34-83723"](https://www.sec.gov/news/public-statement/peirce-dissent-34-83723). *U.S. Securities and Exchange Commission*.
[^ibit-options]: U.S. Securities and Exchange Commission (20 September 2024). ["Order Granting Accelerated Approval ... to List and Trade Options on the iShares Bitcoin Trust"](https://www.sec.gov/files/rules/sro/ise/2024/34-101128.pdf) (PDF). Release No. 34-101128, File No. SR-ISE-2024-03.
[^ise-later]: U.S. Securities and Exchange Commission (31 December 2024). [Release No. 34-102065, File No. SR-ISE-2024-62](https://www.sec.gov/files/rules/sro/ise/2024/34-102065.pdf) (PDF). Notes that IBIT options began trading on 19 November 2024.
[^inkind]: U.S. Securities and Exchange Commission (29 July 2025). ["SEC Permits In-Kind Creations and Redemptions for Crypto ETPs"](https://www.sec.gov/newsroom/press-releases/2025-101-sec-permits-kind-creations-redemptions-crypto-etps). Press release 2025-101.
[^generic]: U.S. Securities and Exchange Commission (17 September 2025). ["SEC Approves Generic Listing Standards for Commodity-Based Trust Shares"](https://www.sec.gov/newsroom/press-releases/2025-121-sec-approves-generic-listing-standards-commodity-based-trust-shares). Press release 2025-121.
[^hk]: ["Asia's first spot bitcoin and ether ETFs debut in Hong Kong"](https://www.cnbc.com/2024/04/30/asias-first-spot-bitcoin-and-ether-etfs-debut-in-hong-kong.html). *CNBC*. 30 April 2024.
[^ibit-10k]: iShares Bitcoin Trust ETF (27 February 2026). ["Form 10-K for the fiscal year ended 31 December 2025"](https://www.sec.gov/Archives/edgar/data/1980994/000143774926006058/bit20251231_10k.htm). *SEC EDGAR*.
[^fbtc-10k]: Fidelity Wise Origin Bitcoin Fund (25 February 2026). ["Form 10-K for 2025"](https://www.sec.gov/Archives/edgar/data/1852317/000119312526071484/ck0001852317-20251231.htm). *SEC EDGAR*.
[^gbtc-10k]: Grayscale Bitcoin Trust ETF (25 February 2026). ["Form 10-K for 2025"](https://www.sec.gov/Archives/edgar/data/1588489/000119312526071956/gbtc-20251231.htm). *SEC EDGAR*.
[^btc-10k]: Grayscale Bitcoin Mini Trust ETF (25 February 2026). ["Form 10-K for 2025"](https://www.sec.gov/Archives/edgar/data/2015034/000119312526071952/btc-20251231.htm). *SEC EDGAR*.
[^arkb-10k]: ARK 21Shares Bitcoin ETF (2 March 2026). ["Form 10-K for 2025"](https://www.sec.gov/Archives/edgar/data/1869699/000121390026021831/ea0276464-10k_ark21share.htm). *SEC EDGAR*.
[^arkb-424]: ARK 21Shares Bitcoin ETF (27 August 2026). ["Prospectus (Form 424B3)"](https://www.sec.gov/Archives/edgar/data/1869699/000121390026094059/ea0303109-424b3_21shares.htm). *SEC EDGAR*.
[^bitb-10k]: Bitwise Bitcoin ETF (2 March 2026). ["Form 10-K for 2025"](https://www.sec.gov/Archives/edgar/data/1763415/000119312526085335/bitb-20251231.htm). *SEC EDGAR*.
[^btco-10k]: Invesco Galaxy Bitcoin ETF (2 March 2026). ["Form 10-K for 2025"](https://www.sec.gov/Archives/edgar/data/1855781/000119312526083572/btco-20251231.htm). *SEC EDGAR*.
[^hodl-10k]: VanEck Bitcoin ETF (12 March 2026). ["Form 10-K for 2025"](https://www.sec.gov/Archives/edgar/data/1838028/000093041326000746/c115591_10k-ixbrl.htm). *SEC EDGAR*.
[^brrr-10k]: CoinShares Bitcoin ETF (10 March 2026). ["Form 10-K for 2025"](https://www.sec.gov/Archives/edgar/data/1841175/000199937126005527/brrr_10k-123125.htm). *SEC EDGAR*.
[^ezbc-10k]: Franklin Templeton Digital Holdings Trust (29 June 2026). ["Form 10-K for the fiscal year ended 31 March 2026"](https://www.sec.gov/Archives/edgar/data/1992870/000114036126026744/ef20070486_10k.htm). *SEC EDGAR*.
[^btcw-10k]: WisdomTree Bitcoin Fund (27 March 2026). ["Form 10-K for 2025"](https://www.sec.gov/Archives/edgar/data/1850391/000121465926003899/wtb32026010k.htm). *SEC EDGAR*.
[^msbt-424]: Morgan Stanley Bitcoin Trust (6 April 2026). ["Prospectus (Form 424B3)"](https://www.sec.gov/Archives/edgar/data/2103612/000110465926039992/tm2534140-20_424b3.htm). *SEC EDGAR*.
[^msbt-10q]: Morgan Stanley Bitcoin Trust (13 August 2026). ["Form 10-Q for the quarter ended 30 June 2026"](https://www.sec.gov/Archives/edgar/data/2103612/000110465926095885/msbt-20260630x10q.htm). *SEC EDGAR*.
[^coindesk-msbt]: ["Morgan Stanley's bitcoin ETF opens today"](https://www.coindesk.com/markets/2026/04/08/morgan-stanley-s-bitcoin-etf-opens-today-giving-blackrock-s-usd55-billion-ibit-fund-its-toughest-rival-yet). *CoinDesk*. 8 April 2026.
[^defi-10q]: Hashdex Commodities Trust (12 August 2026). ["Form 10-Q for the quarter ended 30 June 2026"](https://www.sec.gov/Archives/edgar/data/1985840/000121390026088483/ea0301010-10q_hashdex.htm). *SEC EDGAR*.
[^defi-8k]: Hashdex Commodities Trust (3 August 2026). ["Form 8-K: plan to liquidate the Hashdex Bitcoin ETF"](https://www.sec.gov/Archives/edgar/data/1985840/000121390026084293/ea0300170-8k_hashdex.htm). *SEC EDGAR*.
[^defi-8k-2]: Hashdex Commodities Trust (24 August 2026). ["Form 8-K: completion of liquidation"](https://www.sec.gov/Archives/edgar/data/1985840/000121390026093020/ea0303094-8k_hashdex.htm). *SEC EDGAR*.
[^bm-paper]: Zimmerman, Micah (17 February 2026). ["Coinbase CEO addresses 'paper bitcoin'"](https://bitcoinmagazine.com/news/coinbase-ceo-addresses-paper-bitcoin). *Bitcoin Magazine*.
