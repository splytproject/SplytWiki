---
title: Terra
description: Terra (LUNA) and the TerraUSD (UST) algorithmic stablecoin — history from 2018, how the mint-and-burn peg and Anchor's 20% yield worked, the May 2022 collapse, the split into Terra and Terra Classic, criticism, and regulatory and criminal actions including Do Kwon's 15-year sentence, as of October 2026
aliases: [LUNA, LUNC, TerraUSD, UST, Terra Classic, Terraform Labs, Do Kwon, Anchor Protocol]
categories: [Cryptocurrencies, Stablecoins, Case studies]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: terra.svg
  caption: Terra emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: "LUNA (new chain); LUNC and USTC (Terra Classic)"
    - Launch date: "April 2019 (original mainnet); 28 May 2022 (new Terra chain)"
    - Founders: "Do Kwon, Daniel Shin (Terraform Labs)"
    - header: Technology
    - Consensus: "Tendermint [proof of stake](../Proof_of_stake/) (Cosmos SDK)"
    - Supply policy: "Original LUNA was minted and burned to support UST; new LUNA began at 1 billion"
    - Written in: "Go"
    - License: "Apache 2.0"
    - header: Links
    - Website: "[terra.money](https://www.terra.money/)"
    - Repository: "[terra-money/core](https://github.com/terra-money/core)"
---

> **In plain terms:** Terra ran TerraUSD, a "stablecoin" that tried to stay at one dollar without holding dollars. Instead, users could always swap one UST for a dollar's worth of newly created LUNA tokens. A savings app paid about 20% interest on UST, drawing in billions. In May 2022 confidence broke, UST fell, LUNA was printed into worthlessness, and about $40 billion of value vanished. Its co-founder was later jailed for fraud.

**Terra** was a [proof-of-stake](../Proof_of_stake/) blockchain built with the [Cosmos](../Cosmos/) SDK by **Terraform Labs**. It was best known for **TerraUSD** (UST), an algorithmic [stablecoin](../Stablecoin/), and its sister token **LUNA**.[^whitepaper] The collapse of UST and LUNA in May 2022 was one of the largest failures in cryptocurrency history.[^decrypt-sentence]

After the collapse a new chain was launched as **Terra** (LUNA), and the original chain was renamed **Terra Classic** (LUNC, with UST renamed USTC).[^docs]

## History

Do Kwon and Daniel Shin founded Terraform Labs in 2018, and the Terra mainnet launched in April 2019.[^whitepaper] UST grew rapidly in 2021–2022, largely because the **Anchor** protocol paid about 20% annual interest on UST deposits.[^sec-2024]

In May 2022 large withdrawals from Anchor and sales of UST pushed it below one dollar. Redemptions minted vast amounts of LUNA, its price collapsed, and UST never recovered. About $40 billion of market value was wiped out.[^decrypt-sentence]

On 28 May 2022 a new Terra chain launched with an airdrop to holders of the old tokens.[^docs]

## How it worked

- **Mint and burn.** Users could always swap one UST for $1 worth of LUNA, or $1 of LUNA for one UST. Arbitrage was meant to keep UST at $1.[^whitepaper]
- **Reflexivity.** The mechanism only worked while LUNA had enough value. When UST demand fell, minting LUNA diluted it, which weakened confidence further, a so-called "death spiral".[^sec-2024]
- **Reserve.** In 2022 the Luna Foundation Guard bought bitcoin as a reserve, but it was not enough to defend the peg.[^sec-2024]

## Governance

Both chains use on-chain proposals voted on by staked tokens, as in other Cosmos SDK chains.[^docs] Terra Classic is now run by a community without Terraform Labs.[^docs]

## Controversies and criticism

- **Design.** Economists and developers had warned that algorithmic stablecoins without real reserves were prone to runs.[^sec-2024]
- **Misleading claims.** A US jury found Terraform and Kwon liable for misleading investors about UST's stability. The verdict also covered claims about Terra's use by the payment app Chai.[^sec-2024]
- **Contagion.** The collapse triggered failures at lenders and funds such as Three Arrows Capital and contributed to the 2022 crypto downturn.

## Regulatory and criminal actions

| Date | Action |
|---|---|
| Mar 2023 | Kwon arrested in Montenegro on a forged-passport charge; later extradited to the United States.[^doj-plea] |
| Jun 2024 | Terraform and Kwon agree to pay about $4.5 billion after a civil fraud verdict in the SEC's case.[^sec-2024] |
| 12 Aug 2025 | Kwon pleads guilty to conspiracy and wire fraud in New York.[^doj-plea] |
| 11 Dec 2025 | Kwon sentenced to 15 years in prison.[^decrypt-sentence][^ct-sentence] |

## Developer notes

The new Terra chain's daemon is `terrad`, built on the Cosmos SDK, with standard Cosmos RPC and LCD endpoints.[^repo][^docs]

## See also

- [Stablecoin](../Stablecoin/)
- [Cosmos](../Cosmos/)
- [Dai](../Dai/)
- [FTX collapse](../FTX_collapse/)
- [Depeg](../glossary/Depeg/) (glossary)

## References

[^whitepaper]: Kereiakes, Evan; Kwon, Do; Di Maggio, Marco; Platias, Nicholas (2019). ["Terra Money: Stability and Adoption"](https://assets.website-files.com/611153e7af981472d8da199c/618b02d13e938ae1f8ad1e45_Terra_White_paper.pdf) (PDF) white paper.
[^docs]: ["Terra Docs"](https://docs.terra.money/). Retrieved October 2026.
[^repo]: ["terra-money/core"](https://github.com/terra-money/core). GitHub.
[^sec-2024]: U.S. Securities and Exchange Commission (13 June 2024). ["Terraform and Kwon to Pay $4.5 Billion Following Fraud Verdict"](https://www.sec.gov/newsroom/press-releases/2024-73). Press release 2024-73.
[^doj-plea]: U.S. Attorney's Office, Southern District of New York (12 August 2025). ["Do Kwon Pleads Guilty To Fraud"](https://www.justice.gov/usao-sdny/pr/do-kwon-pleads-guilty-fraud).
[^decrypt-sentence]: ["Do Kwon Sentenced to 15 Years in Prison Over $40 Billion Terra Crypto Collapse"](https://decrypt.co/352066/do-kwon-sentenced-15-years-prison-40-billion-terra-crypto-collapse). *Decrypt*. 11 December 2025.
[^ct-sentence]: ["Terraform Co-Founder Sentenced to 15 Years in Prison after Guilty Plea"](https://cointelegraph.com/news/do-kwon-sentenced-prison-guilty-plea). *Cointelegraph*. December 2025.
