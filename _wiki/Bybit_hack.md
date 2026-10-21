---
title: Bybit hack
description: Case study of the February 2025 theft of about $1.5 billion in ether from Bybit's multisig cold wallet — timeline, how a compromised Safe{Wallet} interface tricked signers, amounts with sources, FBI attribution to North Korea, recovery efforts and lessons cited by security researchers
aliases: [Bybit hack 2025, Bybit exploit, Bybit cold wallet hack, Bybit theft, TraderTraitor, Safe Wallet hack]
categories: [Case studies, Exchanges, Security incidents, Ethereum]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: ethereum.svg
  image_width: 90
  caption: Bybit hack
  rows:
    - header: Overview
    - Date: "21 February 2025"
    - Target: "Bybit's Ethereum multisig cold wallet (a Safe contract)"
    - Method: "Malicious code in the Safe{Wallet} web interface; signers approved a disguised contract upgrade"
    - Attributed to: "North Korea (\"TraderTraitor\"), per the FBI"
    - header: Losses
    - Stolen: "401,347 ETH, ~90,376 stETH, 15,000 cmETH, 8,000 mETH"
    - Value at the time: "About $1.46–1.5 billion"
---

> **In plain terms:** Bybit kept most of its ether in a "cold" wallet that needed several staff members to approve any transfer. Attackers broke into the company that made the wallet's web app and changed what Bybit's staff saw on screen. The staff approved what looked like a routine transfer. In fact they handed control of the wallet to the attackers, who took about $1.5 billion in crypto.

The **Bybit hack** was the theft of about $1.5 billion in virtual assets from the cryptocurrency exchange Bybit on 21 February 2025.[^fbi] The FBI attributed it to North Korea.[^fbi] Bybit's own systems showed no sign of compromise.[^bleeping]

The attackers did not break the wallet's [smart contract](../Smart_contract/) or steal Bybit's keys. They compromised the Safe{Wallet} web interface that Bybit's signers used. That interface showed the signers a harmless-looking transaction while asking them to sign a malicious one.[^bleeping][^ncc] The case is widely cited as a failure of operational security around [multisignature](../Multisignature/) wallets, not of multisig itself.[^tob][^ncc]

## Timeline

| Date (2025, UTC) | Event |
|---|---|
| Before Feb | Attackers compromise a Safe{Wallet} developer's machine and gain access to Safe's cloud infrastructure.[^bleeping] |
| 19 Feb, 07:15 | The attacker deploys a malicious implementation contract on Ethereum.[^slowmist] |
| ~19 Feb | Malicious JavaScript targeting Bybit's wallet is placed in Safe{Wallet}'s AWS S3 storage, two days before the attack.[^bleeping] |
| 21 Feb, 14:13 | Bybit's signers approve a transaction that replaces the wallet's logic. Funds are swept to attacker addresses.[^slowmist][^ncc] |
| 21 Feb | Within two minutes, clean JavaScript files are uploaded to Safe's storage, removing the malicious code.[^bleeping] Bybit announces the incident.[^bybit] |
| 22 Feb | Bybit says deposits and withdrawals are operating normally.[^slowmist] |
| 24–25 Feb | Bybit says it has closed the ETH shortfall through loans, deposits and purchases. It launches a bounty of 10% of recovered funds.[^block-gap][^decrypt-bounty] |
| 26 Feb | The FBI attributes the theft to North Korea. Bybit shares preliminary forensic findings from Sygnia and Verichains; Safe says a developer machine was compromised.[^fbi][^bleeping] |
| 30 Apr | German authorities shut down the eXch exchange, believed to have laundered part of the proceeds, and seize about €34 million.[^record-exch] |
| Sep 2025 | Bybit's bounty site reports over $73 million frozen and about $30 million recovered.[^agbi] |

## What failed

### Technical failures

**The wallet.** Bybit's cold wallet was a Safe multisig: a proxy contract that forwards calls to a shared "masterCopy" contract holding the logic. The address of that logic is stored in the proxy's storage slot 0.[^ncc]

**The malicious transaction.** The signers approved a call with its `operation` field set to `delegatecall`. A delegatecall runs another contract's code inside the caller's own storage.[^ncc] The target was an attacker contract whose `transfer` function wrote a new address into slot 0. The call looked like an ordinary token transfer, but it swapped the wallet's logic for the attacker's code.[^ncc]

The new logic contained functions named `sweepETH` and `sweepERC20`, which emptied the wallet.[^slowmist] The Safe contracts themselves had no vulnerability. Safe said forensic review found no flaws in its smart contracts or front-end source code.[^bleeping]

**The interface.** Verichains found malicious JavaScript from `app.safe.global` in the browser caches of three Bybit signers. The payload was built to activate only for chosen targets.[^bleeping] Sygnia traced it to Safe's AWS S3 bucket.[^bleeping] Verichains concluded that an AWS S3 or CloudFront credential of Safe was "likely leaked or compromised".[^bleeping]

**Blind signing.** Hardware wallets often cannot show what a complex transaction really does. Trail of Bits noted that "blind signing can hide transaction details".[^tob] The signers therefore relied on the compromised web page for what they were approving.[^tob]

### Organisational failures

- **One verification channel.** Every signer checked the transaction on the same web interface. When it was compromised, all of them were deceived at once.[^tob]
- **Third-party dependence.** Bybit's own infrastructure showed no compromise. The weak point was a supplier's cloud account and a developer's machine.[^bleeping]
- **Over-permissive wallet.** The wallet allowed arbitrary `delegatecall`, which a cold wallet holding funds rarely needs.[^tob][^ncc]

## Amounts

| Asset | Amount stolen | Source |
|---|---|---|
| ETH | 401,347 | SlowMist[^slowmist] |
| stETH (staked ether) | 90,375.55 | SlowMist[^slowmist] |
| cmETH | 15,000, later recovered by mETH Protocol | SlowMist[^slowmist] |
| mETH | 8,000 | SlowMist[^slowmist] |
| **Total value** | About $1.46 billion (SlowMist); "approximately $1.5 billion" (FBI) | [^slowmist][^fbi] |

The attackers quickly converted the staking tokens into ETH. They then split the ETH across many addresses and began converting it to bitcoin.[^slowmist][^fbi] The FBI said the funds were spread "across thousands of addresses on multiple blockchains".[^fbi]

## Response and legal aftermath

### Bybit's response

Bybit stayed open. Within days its chief executive, Ben Zhou, said the company had "fully closed the ETH gap" with loans, large deposits and purchases. He promised an audited proof-of-reserves report showing customer assets were again backed 1:1.[^block-gap]

On 25 February Bybit launched a bounty paying 10% of any recovered funds, split between those who froze assets and those who traced them.[^decrypt-bounty] By September 2025 its bounty site reported over $2.3 million paid to 13 bounty hunters. More than $73 million had been frozen and nearly $30 million recovered.[^agbi]

### Attribution and law enforcement

On 26 February 2025 the FBI published a public service announcement. It said North Korea "was responsible for the theft of approximately $1.5 billion USD". The FBI calls this activity "TraderTraitor".[^fbi] It listed Ethereum addresses used by the thieves and asked exchanges and other services to block them.[^fbi]

On 30 April 2025 the Frankfurt prosecutor's cybercrime unit and Germany's Federal Criminal Police Office (BKA) shut down eXch, a cryptocurrency swap service. They seized about €34 million in crypto and over eight terabytes of data. The BKA said part of the Bybit proceeds had been exchanged through eXch.[^record-exch]

As of October 2026, public enforcement actions have centred on attribution, freezing funds and shutting down laundering services.[^fbi][^record-exch][^agbi]

### Dispute over responsibility

Safe said its contracts and code were sound and that it had rebuilt its infrastructure and rotated credentials.[^bleeping] Bybit's forensic firms placed the root cause in Safe's infrastructure, not Bybit's.[^bleeping] Critics in the industry argued that Safe's early statements were vague.[^ct-safe]

## Lessons cited by security researchers

- **Do not trust one screen.** Verify each transaction's hash on a separate, secure machine and compare it with the hardware wallet's display.[^tob]
- **Use clear signing.** Hardware wallets that support EIP-712 structured data can show signers readable details, even on a compromised computer.[^ncc]
- **Restrict what the wallet can do.** Disable `delegatecall` or use a purpose-built contract that only allows simple transfers. Add time-locks on large movements.[^tob][^ncc]
- **Separate signing machines.** Keep signing devices off the corporate network, ideally air-gapped.[^tob]
- **Threat-model suppliers.** Front-end and cloud providers are part of the attack surface; Trail of Bits argued that "threat modeling becomes essential".[^tob]
- **Watch for interface deception.** Check Point described the attack as defeating multisig through user-interface deception rather than a contract bug.[^checkpoint]

## See also

- [Multisignature](../Multisignature/)
- [Smart contract](../Smart_contract/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)
- [Mt. Gox collapse](../Mt_Gox_collapse/)
- [FTX collapse](../FTX_collapse/)

## References

[^fbi]: Federal Bureau of Investigation (26 February 2025). ["North Korea Responsible for $1.5 Billion Bybit Hack"](https://www.ic3.gov/PSA/2025/PSA250226). Public Service Announcement I-022625-PSA. *Internet Crime Complaint Center*.
[^bybit]: Bybit (21 February 2025). ["Incident Update: Unauthorized Activity Involving ETH Cold Wallet"](https://announcements.bybit.com/article/incident-update---eth-cold-wallet-incident-blt292c0454d26e9140/). *Bybit announcements*.
[^bleeping]: Gatlan, Sergiu (26 February 2025). ["Lazarus hacked Bybit via breached Safe{Wallet} developer machine"](https://www.bleepingcomputer.com/news/security/lazarus-hacked-bybit-via-a-breached-safe-wallet-developer-machine/). *BleepingComputer*. Reports the Sygnia and Verichains preliminary findings and Safe's statement.
[^slowmist]: SlowMist (24 February 2025). ["Hacker Techniques and Questions Behind Bybit's Nearly $1.5 Billion Theft"](https://defihacklabs.substack.com/p/slowmist-hacker-techniques-and-questions). Republished by *DeFiHackLabs*.
[^ncc]: Rivas, Mario; Santos, Ruben; Sanz, Jorge (10 March 2025). ["In-Depth Technical Analysis of the Bybit Hack"](https://www.nccgroup.com/research/in-depth-technical-analysis-of-the-bybit-hack/). *NCC Group*.
[^tob]: Samuels, Benjamin (25 February 2025). ["How Threat Modeling Could Have Prevented the $1.5B Bybit Hack"](https://blog.trailofbits.com/2025/02/25/how-threat-modeling-could-have-prevented-the-1.5b-bybit-hack/). *Trail of Bits Blog*.
[^checkpoint]: ["What the Bybit Hack Means for Crypto Security and the Future of Multisig Protection"](https://blog.checkpoint.com/security/what-the-bybit-hack-means-for-crypto-security-and-the-future-of-multisig-protection/). *Check Point Blog*. February 2025.
[^block-gap]: ["Bybit CEO says exchange has closed shortfall in ETH reserves, plans to release audited POR report"](https://www.theblock.co/post/342896/bybit-ceo-says-exchange-has-closed-shortfall-in-eth-reserves-plans-to-release-audited-por-report). *The Block*. February 2025.
[^decrypt-bounty]: ["Bybit Offers Bounty After $1.4 Billion in Ethereum Swiped in Biggest Crypto Hack Ever"](https://decrypt.co/307359/bybit-bounty-ethereum-biggest-crypto-hack-ever). *Decrypt*. February 2025.
[^agbi]: ["Crypto bounty hunters helped salvage Bybit's business"](https://www.agbi.com/analysis/cybersecurity/2025/09/crypto-bounty-hunters-helped-salvage-bybits-business/). *AGBI*. September 2025.
[^record-exch]: ["German operation shuts down crypto mixer eXch, seizes millions in assets"](https://therecord.media/exch-cryptocurrency-mixer-germany-takedown). *The Record*. May 2025.
[^ct-safe]: ["Safe releases post-mortem update, CZ criticizes response"](https://cointelegraph.com/news/safe-releases-post-mortem-update-cz-criticizes-response). *Cointelegraph*. February 2025.
