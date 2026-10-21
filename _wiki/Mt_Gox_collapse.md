---
title: Mt. Gox collapse
description: Case study of the 2014 collapse of the Mt. Gox bitcoin exchange — timeline, technical and organisational failures, amounts with sources, criminal cases, the bankruptcy and civil rehabilitation, and lessons cited by researchers
aliases: [Mt. Gox, MtGox, Mt Gox, Mt. Gox hack, Mt. Gox bankruptcy, Mark Karpelès, MtGox Co., Ltd.]
categories: [Case studies, Exchanges, Security incidents, Bitcoin, Cryptocurrency history]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: bitcoin.svg
  caption: Mt. Gox collapse
  rows:
    - header: Overview
    - Company: "MtGox Co., Ltd. (Tokyo)"
    - Chief executive: Mark Karpelès
    - Withdrawals halted: 7 February 2014
    - Insolvency filing: 28 February 2014
    - header: Losses
    - Reported missing (2014): "About 850,000 BTC (750,000 customer, 100,000 company)"
    - Later found: "About 200,000 BTC in an old-format wallet"
    - header: Status (as of October 2026)
    - Proceedings: "Civil rehabilitation, Tokyo District Court"
    - Repayment deadline: "31 October 2027"
---

> **In plain terms:** Mt. Gox was the biggest bitcoin exchange in the world until 2014. It stopped paying out bitcoin, then admitted that about 850,000 coins were gone. Investigators later found the coins had been stolen gradually over years, unnoticed because the exchange kept poor records. Customers began getting some coins back only in 2024.

**Mt. Gox** was a bitcoin exchange in Tokyo run by MtGox Co., Ltd. It was once the largest [bitcoin](../Bitcoin/) exchange.[^decker] In February 2014 it suspended withdrawals and then sought court protection. It reported that about 750,000 customer bitcoins and 100,000 of its own were lost.[^mpr-2014]

The exchange first blamed a Bitcoin flaw called transaction malleability.[^decker] Researchers found that explanation could account for only a tiny fraction of the loss.[^decker] US prosecutors later alleged that hackers took about 647,000 bitcoins from Mt. Gox's wallets between 2011 and 2014.[^doj-2023] The case moved from bankruptcy to civil rehabilitation in 2018. As of October 2026, repayments are still being made.[^trustee-2018][^trustee-2026]

## Timeline

| Date | Event |
|---|---|
| Sep 2011 | Hackers allegedly gain access to the server holding Mt. Gox's wallets, according to a 2023 US indictment.[^doj-2023] |
| 7 Feb 2014 | Mt. Gox suspends bitcoin withdrawals.[^decker] |
| 10 Feb 2014 | Mt. Gox names transaction malleability as the cause of failed withdrawals.[^decker] |
| 28 Feb 2014 | Mt. Gox applies for civil rehabilitation in Tokyo. It reports about 850,000 BTC lost and debts of about $63.6 million.[^gox-feb2014][^mpr-2014][^infoworld-2014] |
| 9 Mar 2014 | It files for recognition in a US bankruptcy court under Chapter 15.[^trustee-2014] |
| 20 Mar 2014 | Mt. Gox says it found about 200,000 BTC in an old-format wallet used before June 2011.[^gox-200k][^scripps] |
| 16 Apr 2014 | The Tokyo District Court dismisses the rehabilitation application.[^trustee-2014] |
| 24 Apr 2014 | Bankruptcy proceedings begin; lawyer Nobuaki Kobayashi is appointed trustee.[^trustee-2014][^trustee-apr2014] |
| 18 Jun 2014 | A US court recognises the Japanese bankruptcy as the main proceeding.[^trustee-2014] |
| Aug 2015 | Japanese police arrest Karpelès.[^ap-2019] |
| 22 Jun 2018 | On a creditors' petition, the court starts civil rehabilitation. The bankruptcy is stayed.[^trustee-2018] |
| 15 Mar 2019 | Tokyo District Court convicts Karpelès of manipulating electronic data but acquits him of embezzlement.[^ap-2019] |
| 20 Oct 2021 | Creditors approve the rehabilitation plan and the court confirms it. It becomes final on 16 November 2021.[^trustee-2021] |
| 9 Jun 2023 | US prosecutors charge two Russian nationals with laundering about 647,000 BTC from the hack.[^doj-2023] |
| 3 May 2024 | Alexander Vinnik, operator of the BTC-e exchange, pleads guilty to money-laundering conspiracy in the US.[^doj-vinnik] |
| 5 Jul 2024 | The trustee begins repayments in bitcoin and bitcoin cash.[^trustee-2024] |
| Feb 2025 | The US releases Vinnik to Russia in a prisoner exchange.[^block-vinnik] |
| 16 Oct 2026 | The trustee extends the repayment deadline to 31 October 2027, the fourth one-year extension.[^trustee-2026] |

## What failed

### Technical failures

**Hot-wallet theft.** A hot wallet is one whose keys sit on an internet-connected computer. In 2015, the Tokyo security firm WizSec concluded that "most or all" of the missing coins were taken from Mt. Gox's hot wallet "over time, beginning in late 2011".[^ieee] The 2023 US indictment alleges that the theft began in September 2011 and continued until at least May 2014.[^doj-2023]

**Transaction malleability.** Before the [Segregated Witness](../Segregated_Witness/) upgrade, anyone relaying a transaction could change its identifier without changing what it did. Software that tracked payments by identifier could then wrongly believe a withdrawal had failed and pay again.[^decker] Mt. Gox blamed this flaw in February 2014.[^decker]

Christian Decker and Roger Wattenhofer studied a year of network data. They found about 302,000 bitcoins involved in malleability attacks overall, but only 1,811 before Mt. Gox stopped withdrawals. Most of those attacks failed, and "barely 386" bitcoins could have been stolen this way.[^decker]

**Old wallets.** About 200,000 BTC sat unnoticed in an old-format wallet that the company believed was empty.[^gox-200k][^scripps] The company found it only when rescanning wallets for the insolvency proceedings.[^scripps]

### Organisational failures

**No reconciliation.** WizSec found that Mt. Gox was "technically insolvent for years" and "practically depleted of bitcoins by 2013".[^ieee] A business that regularly compared its customer ledger with the coins it actually held would have noticed. WizSec's Kim Nilsson said its bookkeeping was so poor it might not have existed.[^ieee]

**Mixed funds and thin staffing.** Nilsson said customer deposits and company money were kept in one bank account.[^ieee] The bankruptcy trustee reported that MtGox Co. had no employees. Its parent company, Tibanne, ran the exchange, and the two shared offices and servers.[^trustee-2014] The trustee listed loans from Mt. Gox to Tibanne and two affiliates totalling about ¥1.17 billion.[^trustee-2014]

**Data manipulation.** The Tokyo court found Karpelès guilty of manipulating electronic data. He was acquitted of embezzlement and breach of trust.[^ap-2019]

## Amounts

| Item | Amount | Source |
|---|---|---|
| Reported lost, February 2014 | About 850,000 BTC (750,000 customer, 100,000 company) | Mt. Gox, via press[^mpr-2014] |
| Found in old wallet, March 2014 | 199,999.99 BTC | Mt. Gox[^gox-200k][^scripps] |
| Held by trustee, July 2014 | 202,105.84 BTC after fees | Trustee report[^trustee-2014] |
| Alleged stolen by hackers, 2011–2014 | About 647,000 BTC | US indictment[^doj-2023] |
| Possibly lost to malleability attacks | About 386 BTC | Decker and Wattenhofer[^decker] |

The figures come from different sources and measure different things, so they do not add up exactly. The dollar value of the loss depends on the date chosen. Mt. Gox's debts were reported as about $63.6 million in 2014.[^infoworld-2014]

## Legal aftermath

### Bankruptcy and rehabilitation

The Tokyo District Court dismissed the first rehabilitation application in April 2014. The company had concluded that drafting a rehabilitation plan would be difficult. Bankruptcy proceedings opened on 24 April.[^trustee-2014]

Some creditors petitioned for civil rehabilitation on 24 November 2017. The court granted it on 22 June 2018, staying the bankruptcy.[^trustee-2018] Kobayashi remained in charge as rehabilitation trustee.[^trustee-2018]

The rehabilitation plan was confirmed on 20 October 2021 and became final on 16 November 2021.[^trustee-2021] Repayments in bitcoin and bitcoin cash began on 5 July 2024 through designated exchanges.[^trustee-2024]

As of October 2026, the trustee says most repayments are complete for creditors who finished the required steps. Many others remain unpaid because they have not completed procedures or hit problems. The deadline was therefore moved to 31 October 2027.[^trustee-2026]

### Criminal cases

- **Mark Karpelès.** Arrested in August 2015. On 15 March 2019 he received a sentence of two and a half years, suspended for four years. Prosecutors had sought ten years.[^ap-2019]
- **Alexey Bilyuchenko and Aleksandr Verner.** Charged in New York in June 2023 with laundering about 647,000 BTC from the hack. Prosecutors allege the coins were laundered through accounts at other exchanges.[^doj-2023]
- **Alexander Vinnik.** Bilyuchenko was also charged with conspiring with Vinnik to run the BTC-e exchange.[^doj-2023] Vinnik pleaded guilty in May 2024 to conspiracy to commit money laundering through BTC-e. The Justice Department said he caused losses of at least $121 million.[^doj-vinnik] He was released to Russia in February 2025 before sentencing.[^block-vinnik]

## Lessons cited by researchers

- **Reconcile on-chain holdings with the ledger.** WizSec's findings show that losses went undetected for years.[^ieee]
- **Keep most coins offline.** The losses came from a hot wallet over a long period.[^ieee][^doj-2023]
- **Do not trust transaction identifiers for accounting.** Decker and Wattenhofer warned that malleability "should be considered when implementing Bitcoin clients".[^decker] Segregated Witness later removed third-party malleability for its transactions.[^bip141]
- **Separate customer and company money.**[^ieee]
- **Focus on management, not the technology.** Both Nilsson and Decker said the core problem was how Mt. Gox was run.[^ieee]

## See also

- [FTX collapse](../FTX_collapse/)
- [Bybit hack](../Bybit_hack/)
- [Segregated Witness](../Segregated_Witness/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)
- [Cryptocurrency history](../Cryptocurrency_history/)

## References

[^decker]: Decker, Christian; Wattenhofer, Roger (2014). ["Bitcoin Transaction Malleability and MtGox"](https://arxiv.org/abs/1403.6676). *ESORICS 2014*, Lecture Notes in Computer Science 8713. arXiv:1403.6676.
[^mpr-2014]: ["Bitcoin exchange MtGox files for bankruptcy"](https://www.mprnews.org/story/2014/02/28/bitcoin-exchange-mtgox-files-for-bankruptcy). *MPR News*. 28 February 2014. Summarises Reuters, *The New York Times* and Bloomberg reports.
[^infoworld-2014]: Hornyak, Tim (28 February 2014). ["Bitcoin exchange Mt. Gox files for bankruptcy with debts of $63.6 million"](https://www.infoworld.com/article/2191196/bitcoin-exchange-mt-gox-files-for-bankruptcy-with-debts-of-63-6-million-3.html). IDG News Service, via *InfoWorld*.
[^gox-200k]: MtGox Co., Ltd. (20 March 2014). ["Announcement regarding the balance of Bitcoin held by the company"](https://www.mtgox.com/img/pdf/20140320-btc-announce.pdf) (PDF). *mtgox.com*.
[^scripps]: ["Mt. Gox Says It Found 200,000 Bitcoins In Old Wallet"](https://www.scrippsnews.com/world/mt-gox-says-it-found-200-000-bitcoins-in-old-wallet). *Scripps News*. 20 March 2014.
[^trustee-apr2014]: Kobayashi, Nobuaki (24 April 2014). ["Announcement of Commencement of Bankruptcy Proceedings"](https://www.mtgox.com/img/pdf/20140424_announce_qa_en.pdf) (PDF). Bankruptcy trustee of MtGox Co., Ltd.
[^trustee-2014]: Kobayashi, Nobuaki (23 July 2014). ["Documents distributed at the creditors' meeting (Translation)"](https://www.mtgox.com/img/pdf/20140723_report_en.pdf) (PDF). Bankruptcy trustee of MtGox Co., Ltd.
[^trustee-2018]: Kobayashi, Nobuaki (22 June 2018, updated 26 October 2018). ["Announcement of Commencement of Civil Rehabilitation Proceedings"](https://www.mtgox.com/img/pdf/20180622_announcement_en.pdf) (PDF). Civil rehabilitation trustee of MtGox Co., Ltd.
[^trustee-2021]: Kobayashi, Nobuaki (16 November 2021). ["Notice of Confirmation Order of Rehabilitation Plan becoming Final and Binding"](https://www.mtgox.com/img/pdf/20211116_announcement_en.pdf) (PDF). Rehabilitation trustee of MtGox Co., Ltd.
[^trustee-2024]: Kobayashi, Nobuaki (5 July 2024). ["Notice regarding Repayment in Bitcoin and Bitcoin Cash"](https://www.mtgox.com/img/pdf/20240705_01_announcement_en.pdf) (PDF). Rehabilitation trustee of MtGox Co., Ltd.
[^trustee-2026]: Kobayashi, Nobuaki (16 October 2026). ["Notice Concerning Change of Repayments Deadline"](https://www.mtgox.com/img/pdf/20261016_b3a13e0f-55f6-4653-913b-be80762390e8_announcement_en.pdf) (PDF). Rehabilitation trustee of MtGox Co., Ltd.
[^gox-feb2014]: MtGox Co., Ltd. (28 February 2014). ["Announcement Regarding An Application For Commencement Of A Procedure Of Civil Rehabilitation"](https://www.mtgox.com/img/pdf/20140228-announcement_eng.pdf) (PDF). *mtgox.com*.
[^ap-2019]: ["Mt Gox Bitcoin exchange's Karpeles avoids jail time in Japan"](https://www.foxbusiness.com/features/mt-gox-bitcoin-exchanges-karpeles-avoids-jail-time-in-japan). Associated Press, via *Fox Business*. 15 March 2019.
[^doj-2023]: U.S. Department of Justice (9 June 2023). ["Russian Nationals Charged With Hacking One Cryptocurrency Exchange and Illicitly Operating Another"](https://www.justice.gov/archives/opa/pr/russian-nationals-charged-hacking-one-cryptocurrency-exchange-and-illicitly-operating-another). Office of Public Affairs.
[^doj-vinnik]: U.S. Department of Justice (3 May 2024). ["BTC-e Operator Pleads Guilty to Money Laundering Conspiracy"](https://www.justice.gov/opa/pr/btc-e-operator-pleads-guilty-money-laundering-conspiracy). Office of Public Affairs.
[^block-vinnik]: ["President Trump swaps BTC-e operator convicted of money laundering, Alexander Vinnik, in prisoner exchange with Russia"](https://www.theblock.co/post/340474/president-trump-swaps-btc-e-operator-money-laundering-alexander-vinnik-prisoner-exchange-russia). *The Block*. February 2025.
[^ieee]: Boyd, John (3 November 2015). ["The Mt. Gox Bitcoin Debacle: An Update"](https://spectrum.ieee.org/the-mt-gox-bitcoin-debacle-an-update). *IEEE Spectrum*. Reports WizSec's findings.
[^bip141]: Lombrozo, Eric; Lau, Johnson; Wuille, Pieter (2015). ["BIP 141: Segregated Witness (Consensus layer)"](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki). *Bitcoin Improvement Proposals*.
