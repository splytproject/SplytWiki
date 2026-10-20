---
title: Bitcoin halving
description: Scheduled event that cuts the reward for mining new bitcoin blocks in half
aliases: [Halving, Halvening, Bitcoin halvening]
categories: [Bitcoin, Monetary policy]
updated: 2026-10-12
infobox:
  title: Bitcoin halving
  image: bitcoin.svg
  image_width: 90
  caption: Bitcoin symbol
  rows:
    - header: Schedule
    - Interval: "Every 210,000 blocks (about 4 years)"
    - First halving: 28 November 2012
    - Most recent: 20 April 2024 (fourth)
    - Next expected: 2028 (block 1,050,000)
    - header: Block subsidy
    - Initial: "₿50 per block"
    - Current: "₿3.125 per block"
    - Final issuance: About 2140
    - Maximum supply: "₿20,999,999.9769"
---
A **Bitcoin halving** (sometimes called the **halvening**) is a scheduled event in which the number of new bitcoins created with each block is cut in half. It happens automatically every 210,000 blocks, roughly every four years, and is written into the rules of the [Bitcoin](../Bitcoin/) software.[^code] The halving gradually slows the creation of new bitcoins until the total supply reaches its limit of just under 21 million.

Four halvings have taken place, in 2012, 2016, 2020 and 2024, reducing the reward from 50 bitcoins per block to 3.125. The events are closely watched because they reduce the income of [miners](../Proof_of_work/) and because of their possible effect on the price of bitcoin.

## Background

New bitcoins enter circulation only through mining. Each time a miner adds a block to the [blockchain](../Blockchain/), it may pay itself a **block reward**, made up of a fixed **block subsidy** of newly created coins plus the fees from the transactions included in the block. [Satoshi Nakamoto](../Satoshi_Nakamoto/) designed the subsidy to start at 50 bitcoins and to halve at regular intervals, so that new money would be issued on a fixed, predictable schedule rather than at the discretion of a central bank.[^whitepaper]

Because blocks are found on average every ten minutes, 210,000 blocks take about four years. The exact dates depend on how quickly blocks are actually mined.

## Halvings

| Halving | Date | Block height | Subsidy (₿ per block) |
|---|---|---|---|
| — | 3 January 2009 (launch) | 0 | 50 |
| 1st | 28 November 2012 | 210,000 | 50 → 25 |
| 2nd | 9 July 2016 | 420,000 | 25 → 12.5 |
| 3rd | 11 May 2020 | 630,000 | 12.5 → 6.25 |
| 4th | 20 April 2024 | 840,000 | 6.25 → 3.125 |
| 5th | expected 2028 | 1,050,000 | 3.125 → 1.5625 |

After the fourth halving, the network creates about 450 new bitcoins per day (144 blocks × 3.125).

## Supply limit

Because the subsidy halves again and again, the total number of bitcoins that will ever be created forms a shrinking series: 210,000 × (50 + 25 + 12.5 + …). The sum approaches, but never quite reaches, 21 million. Since bitcoin amounts are recorded in whole **satoshis** (hundred-millionths of a bitcoin), the subsidy eventually rounds down to zero. This is expected to happen around the year 2140, at block 6,930,000, after 33 halvings, by which time the total supply will be about 20,999,999.9769 bitcoins.[^supply]

The supply actually available is lower, because some coins have been lost through forgotten keys and other mistakes.

## Effects

### On miners

Each halving cuts miners' income from new coins in half overnight, while their costs for equipment and electricity stay the same. Less efficient miners may become unprofitable and switch off their machines, and the mining industry tends to consolidate around operators with the cheapest power and newest hardware. Bitcoin's difficulty adjustment ensures blocks continue to be produced at roughly the same rate even if some miners leave.

In the long run, as the subsidy shrinks, miners are expected to rely increasingly on **transaction fees**. Whether fees alone will be enough to pay for the network's security is a long-running debate among researchers and developers.

### On price

Bitcoin's price rose substantially in the year or so after each of the first three halvings, leading many investors to see halvings as bullish events. Others argue that because the schedule has been public since 2009, the reduced supply should already be reflected in the price, and that the pattern reflects wider market cycles and a very small number of examples rather than cause and effect.

## See also

- [Bitcoin](../Bitcoin/)
- [Proof of work](../Proof_of_work/)
- [Satoshi Nakamoto](../Satoshi_Nakamoto/)

## References

[^code]: ["GetBlockSubsidy in src/validation.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp). *Bitcoin Core* source code.
[^whitepaper]: Nakamoto, Satoshi (2008). ["Bitcoin: A Peer-to-Peer Electronic Cash System"](https://bitcoin.org/bitcoin.pdf) (PDF). *bitcoin.org*.
[^supply]: ["Controlled supply"](https://en.bitcoin.it/wiki/Controlled_supply). *Bitcoin Wiki*.
