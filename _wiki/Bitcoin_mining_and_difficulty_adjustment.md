---
title: Bitcoin mining and difficulty adjustment
description: How Bitcoin mining works — SHA-256d, targets and nBits, the 2,016-block retarget with its four-times clamp, the timewarp bug, ASICs, pools and payout schemes, Stratum v1 and v2, and CCAF energy and location data
aliases: [Bitcoin mining, Mining difficulty, Difficulty adjustment, Retarget, nBits, Timewarp attack, Mining pool, Stratum, Stratum V2, PPLNS, FPPS, Hash rate, ASIC]
categories: [Bitcoin, Protocol, Consensus, Mining]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: bitcoin.svg
  caption: Bitcoin mining
  rows:
    - header: Overview
    - Hash function: "SHA-256 applied twice (SHA-256d)"
    - Target block interval: 600 seconds
    - Retarget interval: "2,016 blocks (about two weeks)"
    - Adjustment limit: "Factor of 4 per period, either way"
    - header: Industry (as of October 2026)
    - Hardware: "Application-specific integrated circuits (ASICs)"
    - Main pool protocol: "Stratum v1; Stratum v2 in early use"
    - Key RPCs: "`getdifficulty`, `getnetworkhashps`, `getblocktemplate`"
---

> **In plain terms:** Miners race to find a block whose fingerprint is below a target number. Finding one takes huge numbers of guesses, but checking one is instant. Every 2,016 blocks the network moves the target, so blocks keep arriving about every ten minutes however many machines join or leave.

**Bitcoin mining** is the process of adding blocks to the Bitcoin [blockchain](../Blockchain/) by performing [proof of work](../Proof_of_work/). A miner who finds a valid block collects the block subsidy and the transaction fees. The **difficulty adjustment** recalculates the required work every 2,016 blocks to hold the average block interval near ten minutes.[^whitepaper][^pow-cpp]

Mining began with the genesis block in January 2009, using ordinary computer processors.[^whitepaper] By 2013 it had moved to purpose-built chips.[^taylor] As of October 2026, most hashing power is organised into pools, and its energy use is tracked by the Cambridge Centre for Alternative Finance (CCAF).[^ccaf-2025]

## How a block is mined

### SHA-256d

A block header is 80 bytes long. It holds a version, the previous block's hash, a Merkle root summarising the transactions, a timestamp, the compact target (`nBits`) and a 32-bit nonce.[^pow-article] The block's identity is **SHA-256d**: the SHA-256 hash function applied twice to the header.[^whitepaper]

A block is valid only if that hash, read as a 256-bit number, is not above the target.[^pow-cpp] There is no shortcut to finding such a hash. Miners change the nonce, and other fields such as an extra nonce in the coinbase transaction, then hash again.[^whitepaper]

### Rewards

The first transaction in a block, the **coinbase transaction**, pays the miner. It may claim the current subsidy plus all fees in the block. The subsidy halves every 210,000 blocks (see [Bitcoin halving](../Bitcoin_halving/)).[^whitepaper] Coins from a coinbase transaction cannot be spent until 100 more blocks are built on top. This rule is called **coinbase maturity**.[^consensus-h]

## Targets, nBits and difficulty

### The compact target

The header stores the target in 4 bytes, a format called **nBits** or "compact". The first byte is an exponent; the other three are a mantissa. The target equals the mantissa × 256<sup>(exponent − 3)</sup>.[^arith]

The genesis block uses `nBits` of `0x1d00ffff`. Here the exponent is `0x1d` (29) and the mantissa is `0x00ffff`. The target is therefore `0xffff` × 2<sup>208</sup>, which is also the highest target mainnet allows.[^chainparams] Because the format has only 24 bits of precision, the stored target is a rounded value.[^arith]

### Difficulty

**Difficulty** is a friendlier way to express the target. It is the highest allowed target divided by the current target, so the genesis block has difficulty 1.[^pow-article] A block at difficulty *D* needs about *D* × 2<sup>32</sup> hash attempts on average. Network hash rate can therefore be estimated as *D* × 2<sup>32</sup> ÷ 600 hashes per second.[^wiki-difficulty]

The first change came at block 32,256 on 30 December 2009, raising difficulty from 1 to about 1.18.[^block32256]

## The retarget formula

Every block whose height is a multiple of 2,016 gets a new target. Bitcoin Core computes it in `CalculateNextWorkRequired` in `src/pow.cpp`:[^pow-cpp]

1. Take the timestamp of the last block of the period and subtract the timestamp of the first block. Call the result *actual*.
2. Clamp *actual* to between 302,400 seconds (3.5 days) and 4,838,400 seconds (8 weeks).
3. New target = old target × *actual* ÷ 1,209,600. The constant is two weeks in seconds.
4. If the result is above the maximum target, use the maximum.

The clamp in step 2 limits each change to a factor of four, up or down.[^pow-cpp] Blocks between retargets must carry exactly the previous block's `nBits`.[^pow-cpp] Bitcoin Core also checks downloaded headers against these limits with `PermittedDifficultyTransition`, so impossible header chains are rejected cheaply.[^pow-cpp]

### Timestamp rules

A block's timestamp must be later than the median of the previous 11 blocks, called **median time past**. It must also be no more than two hours ahead of the receiving node's clock.[^chain-h] Timestamps do not have to increase from block to block. These loose rules exist because miners' clocks disagree.[^bip54]

### The timewarp bug

The retarget compares the first and last blocks of the same period. It does not link the last block of one period to the first block of the next.[^bip54] As a result, step 1 measures 2,015 intervals rather than 2,016, an off-by-one error inherited from the first release.[^bip54]

The bigger problem is that timestamps can go backwards across that gap. An attacker with most of the hash rate can keep most timestamps near median time past. They then set the last block of each period near real time. Each period then looks long, so difficulty falls every two weeks.[^bip54] BIP 54 states that, in the worst case, difficulty can reach its minimum within 38 days.[^bip54]

Besides helping a 51% attacker, the BIP's authors say the bug "makes it harder to reason about miners' incentives". Short-sighted users and miners might even want a faster block rate, because it adds block space.[^bip54]

### Proposed fixes

**BIP 54 (Consensus Cleanup)**, by Antoine Poinsot and Matt Corallo, was assigned its number in April 2025.[^bip54] It would require the first block of a period to be no earlier than two hours before the previous block. It would also require each period's last block to be no earlier than its first. That closes a variant found by Mark "Murch" Erhardt and the developer Zawy.[^bip54]

The fix has been debated since 2019. An earlier version also disabled some Script features and "was met with resistance due to confiscation concerns". BIP 54 drops that approach and limits signature operations instead.[^bip54][^optech-cleanup]

BIP 54 is a [soft fork](../Soft_fork_and_hard_fork/). As of October 2026 its specification status is "Complete", but it has not been activated on mainnet.[^bip54][^optech-cleanup] [Testnet4](../Testnet/) (BIP 94) already enforces a similar rule. Its grace period is ten minutes instead of two hours.[^bip54][^bip94]

## Hardware

Mining hardware has gone through four broad generations: general-purpose processors (CPUs), graphics cards (GPUs), programmable chips (FPGAs) and **application-specific integrated circuits** (ASICs).[^taylor] An ASIC is a chip designed for one task, here SHA-256d hashing.

The first open-source FPGA miner code was released in June 2011. The first ASIC miner came out in January 2013.[^taylor] Michael Bedford Taylor's 2013 study found ASICs had "orders of magnitude better performance" than mainstream chip vendors could offer. They drove GPU and then FPGA mining profits negative.[^taylor]

Taylor also described the risks. ASICs are useless for anything but mining, so when they become unprofitable, everyone sells them at once. Buyers depended on delivery dates, and in 2013 "every single effort has slipped to date".[^taylor]

## Pools and payout schemes

A solo miner with a small share of the hash rate may wait years for a block. A **mining pool** combines many miners and splits rewards, which smooths income.[^rosenfeld] Members prove their effort by submitting **shares**: hashes that meet an easier, pool-set target.[^rosenfeld]

| Scheme | How payment works | Who bears the luck risk |
|---|---|---|
| **PPS** (pay per share) | A fixed amount for each share, based on the expected subsidy | The pool[^rosenfeld] |
| **PPLNS** (pay per last *N* shares) | When the pool finds a block, the reward is split over the last *N* shares | The miners[^rosenfeld] |
| **FPPS** (full pay per share) | Like PPS, but the fixed amount also includes expected transaction fees | The pool[^braiins-fpps] |

Pools that pay fixed rates charge higher fees, because they absorb the variance.[^rosenfeld] Under PPLNS, the risk of a **block withholding attack**, where a member hides winning shares, falls on the other members.[^optech-pools]

### Criticism: pool centralisation

With Stratum v1, the pool operator alone chooses which transactions go into the block.[^optech-pools] Members cannot easily see what they are mining. Critics argue that a few large pools could therefore censor transactions or coordinate an attack. Stratum v2 and proposals such as Braidpool aim to reduce this power.[^optech-pools]

## Stratum v1 and v2

### getblocktemplate

**getblocktemplate**, specified in BIP 22 and BIP 23 in 2012, lets mining software ask a node for a full block template.[^bip22][^bip23] Optech notes it "never saw widespread usage as a pool protocol itself". Instead, pool servers use it to fetch transactions from their own nodes.[^optech-pools]

### Stratum v1

**Stratum v1** is a JSON-based protocol announced on Slush's Pool website in late 2012. It became the standard way for mining devices to talk to pools.[^stratum-wiki] The pool sends a job: a partial header, coinbase pieces and a Merkle branch. The device searches nonces and extra-nonce values, then submits shares.[^stratum-wiki]

BIP 310 (2018) describes extensions, including **version rolling**. It lets devices change some header version bits as extra search space.[^bip310] BIP 320 reserves 16 version bits for this kind of general use.[^bip320]

### Stratum v2

**Stratum v2** is a binary successor maintained by an open-source working group.[^sv2-spec] Its specification says v1 "lacks cryptographic authentication", making it "slower, heavier, and less secure".[^sv2-spec] Its main changes are:[^sv2-spec]

- **Encryption.** Connections use authenticated encryption. Remote connections must use a handshake based on the Noise Protocol Framework, which blocks hash-rate hijacking by a man in the middle.
- **Less bandwidth.** Binary messages are smaller, and a header-only mode removes coinbase handling from devices.
- **Job declaration.** Miners can build their own templates and declare them to the pool, which may accept or reject them.
- **Template distribution.** A separate sub-protocol carries templates from a Bitcoin node.

Stratum v2 does not remove the need to trust a pool for payouts.[^stratum-wiki] The first Stratum v2 pools launched from late 2023, but as of October 2026 Stratum v1 remains in wide use.[^optech-pools] Bitcoin Core 30.0 (October 2025) added an experimental IPC mining interface so Stratum v2 software can request templates.[^rn-30]

## Energy use

The CCAF's **Cambridge Bitcoin Electricity Consumption Index** (CBECI) estimates network power demand from hash rate and hardware efficiency.[^cbeci] It gives a lower bound, an upper bound and a best guess. The lower bound assumes everyone runs the most efficient machines; the upper bound assumes the least efficient profitable ones.[^cbeci] The default electricity price is fixed at US$0.05 per kWh, and results are sensitive to that choice.[^cbeci]

The CCAF's April 2025 industry report surveyed 49 mining firms, covering about 48% of mining activity.[^ccaf-2025] Its findings:

| Measure | Value (2025 report) |
|---|---|
| Estimated annual electricity use | 138 TWh, about 0.5% of world electricity[^ccaf-2025] |
| Estimated emissions | 39.8 Mt CO<sub>2</sub>e per year[^ccaf-2025] |
| Sustainable sources | 52.4% (42.6% renewables, 9.8% nuclear)[^ccaf-2025] |
| Natural gas | 38.2%, the largest single source[^ccaf-2025] |
| Coal | 8.9%, down from 36.6% in 2022[^ccaf-2025] |

These figures are extrapolated from a self-reported survey, so they carry wide uncertainty.[^ccaf-2025]

Energy use is the main environmental criticism of mining. A September 2022 White House report estimated that crypto-assets used 0.4% to 0.9% of global electricity. It recommended measures to reduce their environmental impact.[^ostp] Defenders point to the same CCAF survey, which found the sustainable share rose from 37.6% in 2022 to 52.4%.[^ccaf-2025]

## Geographic distribution

The CCAF's **Bitcoin Mining Map** estimated hash rate by country from IP addresses seen by partner pools: BTC.com, Poolin, ViaBTC and Foundry.[^ccaf-map] Its last update covered September 2021 to January 2022.

| Country | Average share (Sep 2021 – Jan 2022) |
|---|---|
| United States | 37.84%[^ccaf-map] |
| China | 21.11%[^ccaf-map] |
| Kazakhstan | 13.22%[^ccaf-map] |
| Canada | 6.48%[^ccaf-map] |
| Russia | 4.66%[^ccaf-map] |

China banned mining in June 2021. Its reported share fell to zero in July and August, then rose to about 22% in September.[^ccaf-map] The CCAF warned the method is "theoretically vulnerable to deliberate obfuscation", such as miners using VPNs. The China rebound may partly reflect this.[^ccaf-map]

No newer public map exists. In the CCAF's 2025 survey, US-based operations made up 75.4% of reported activity, followed by Canada at 7.1%.[^ccaf-2025] That figure describes the survey sample, not the whole network.[^ccaf-2025]

## Developer notes

### RPCs

```
bitcoin-cli getdifficulty                 # difficulty of the tip block
bitcoin-cli getnetworkhashps              # estimate over the last 120 blocks
bitcoin-cli getnetworkhashps -1           # estimate since the last retarget
bitcoin-cli getnetworkhashps 120 800000   # estimate at height 800,000
bitcoin-cli getblocktemplate '{"rules": ["segwit"]}'
bitcoin-cli getmininginfo
```

- `getdifficulty` returns the tip's difficulty as a multiple of the minimum.[^pow-article]
- `getnetworkhashps` takes `nblocks` (default 120, or −1 for "since last difficulty change") and `height` (default −1, the tip).[^getnetworkhashps]
- `getblocktemplate` follows BIP 22 and BIP 23.[^bip22][^bip23] The client must list the `segwit` rule or the call fails.[^getnetworkhashps]
- `submitblock` sends a solved block back to the node.[^bip22]

### Source files

- `src/pow.cpp`: `GetNextWorkRequired`, `CalculateNextWorkRequired`, `PermittedDifficultyTransition`, `CheckProofOfWork`.[^pow-cpp]
- `src/arith_uint256.cpp`: `SetCompact` and `GetCompact`, which convert between `nBits` and a 256-bit target.[^arith]
- `src/kernel/chainparams.cpp`: `powLimit`, `nPowTargetTimespan` (two weeks) and `nPowTargetSpacing` (600 s).[^chainparams]
- `src/chain.h`: `MAX_FUTURE_BLOCK_TIME`, the two-hour limit.[^chain-h]
- `src/rpc/mining.cpp`: the mining RPCs.[^getnetworkhashps]

### Test vector

`nBits` `0x1d00ffff` expands to target `0x00000000ffff0000000000000000000000000000000000000000000000000000`, which is difficulty 1.[^chainparams] Block 32,256 carries `nBits` `0x1d00d86a` (decimal 486,594,666), difficulty ≈ 1.1829.[^block32256]

### Test networks

On regtest, `generatetoaddress` mines blocks instantly at minimum difficulty. Testnet3 lets a block use minimum difficulty if it arrives 20 minutes after the previous one. Testnet4 keeps that rule but closes the timewarp loophole.[^pow-cpp][^bip94]

## See also

- [Proof of work](../Proof_of_work/)
- [Bitcoin halving](../Bitcoin_halving/)
- [Chain reorganization](../Chain_reorganization/)
- [Mempool](../Mempool/)
- [Testnet](../Testnet/)
- [Soft fork and hard fork](../Soft_fork_and_hard_fork/)

## References

[^whitepaper]: Nakamoto, Satoshi (2008). ["Bitcoin: A Peer-to-Peer Electronic Cash System"](https://bitcoin.org/bitcoin.pdf) (PDF). *bitcoin.org*.
[^pow-cpp]: ["src/pow.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp). *Bitcoin Core* source code, master branch, as of October 2026.
[^pow-article]: ["Difficulty"](https://developer.bitcoin.org/reference/block_chain.html#target-nbits). *Bitcoin Developer Reference: Block Chain*. bitcoin.org.
[^consensus-h]: ["src/consensus/consensus.h"](https://github.com/bitcoin/bitcoin/blob/master/src/consensus/consensus.h) (`COINBASE_MATURITY = 100`). *Bitcoin Core* source code.
[^arith]: ["src/arith_uint256.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/arith_uint256.cpp) (`SetCompact`, `GetCompact`). *Bitcoin Core* source code.
[^chainparams]: ["src/kernel/chainparams.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp). *Bitcoin Core* source code, master branch, as of October 2026.
[^chain-h]: ["src/chain.h"](https://github.com/bitcoin/bitcoin/blob/master/src/chain.h) (`MAX_FUTURE_BLOCK_TIME`). *Bitcoin Core* source code.
[^wiki-difficulty]: ["Difficulty"](https://en.bitcoin.it/wiki/Difficulty). *Bitcoin Wiki*. Retrieved October 2026.
[^getnetworkhashps]: ["src/rpc/mining.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/rpc/mining.cpp). *Bitcoin Core* source code.
[^block32256]: Block 32,256 header (hash `000000004f2886a170adb7204cb0c7a824217dd24d11a74423d564c4e0904967`, timestamp 1262153464 = 30 December 2009 06:11 UTC). Bitcoin blockchain; retrievable with `getblockheader`.
[^bip54]: Poinsot, Antoine; Corallo, Matt. ["BIP 54: Consensus Cleanup"](https://github.com/bitcoin/bips/blob/master/bip-0054.md). *Bitcoin Improvement Proposals*. Assigned 11 April 2025.
[^optech-cleanup]: ["Consensus cleanup soft fork"](https://bitcoinops.org/en/topics/consensus-cleanup-soft-fork/). *Bitcoin Optech* topics. Retrieved October 2026.
[^bip94]: Jahr, Fabian. ["BIP 94: Testnet 4"](https://github.com/bitcoin/bips/blob/master/bip-0094.mediawiki). *Bitcoin Improvement Proposals*. Assigned 27 May 2024.
[^taylor]: Taylor, Michael Bedford (2013). ["Bitcoin and the Age of Bespoke Silicon"](https://cseweb.ucsd.edu/~mbtaylor/papers/bitcoin_taylor_cases_2013.pdf) (PDF). *Proceedings of the International Conference on Compilers, Architecture and Synthesis for Embedded Systems (CASES)*. IEEE.
[^rosenfeld]: Rosenfeld, Meni (2011). ["Analysis of Bitcoin Pooled Mining Reward Systems"](https://arxiv.org/abs/1112.4980). arXiv:1112.4980.
[^braiins-fpps]: ["Rewards FAQ"](https://academy.braiins.com/braiins-pool/faqs/rewards). *Braiins Academy*. Retrieved October 2026.
[^optech-pools]: ["Pooled mining"](https://bitcoinops.org/en/topics/pooled-mining/). *Bitcoin Optech* topics. Retrieved October 2026.
[^bip22]: Dashjr, Luke (2012). ["BIP 22: getblocktemplate – Fundamentals"](https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki). *Bitcoin Improvement Proposals*.
[^bip23]: Dashjr, Luke (2012). ["BIP 23: getblocktemplate – Pooled Mining"](https://github.com/bitcoin/bips/blob/master/bip-0023.mediawiki). *Bitcoin Improvement Proposals*.
[^stratum-wiki]: ["Stratum mining protocol"](https://en.bitcoin.it/wiki/Stratum_mining_protocol). *Bitcoin Wiki*. Retrieved October 2026.
[^bip310]: Moravec, Pavel; Čapek, Jan (2018). ["BIP 310: Stratum protocol extensions"](https://github.com/bitcoin/bips/blob/master/bip-0310.mediawiki). *Bitcoin Improvement Proposals*.
[^bip320]: BtcDrak (2018). ["BIP 320: nVersion bits for general purpose use"](https://github.com/bitcoin/bips/blob/master/bip-0320.mediawiki). *Bitcoin Improvement Proposals*.
[^sv2-spec]: ["Stratum V2 Protocol Specification"](https://github.com/stratum-mining/sv2-spec). Stratum V2 working group, GitHub. Sections 0 (Abstract), 1 (Motivation) and 4 (Protocol Security).
[^rn-30]: ["Bitcoin Core 30.0 release notes"](https://bitcoincore.org/en/releases/30.0/). *Bitcoin Core*. October 2025.
[^cbeci]: ["CBECI methodology"](https://ccaf.io/cbnsi/cbeci/methodology). *Cambridge Centre for Alternative Finance*. Retrieved October 2026.
[^ccaf-2025]: Neumueller, Alexander; Pieters, Gina; Mohaddes, Kamiar; Rousseau, Valentin; Zhang, Bryan (April 2025). ["Cambridge Digital Mining Industry Report: Global Operations, Sentiment, and Energy Use"](https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/publications/cambridge-digital-mining-industry-report/). *Cambridge Centre for Alternative Finance*. Summary: ["Cambridge study: sustainable energy rising in bitcoin mining"](https://www.jbs.cam.ac.uk/2025/cambridge-study-sustainable-energy-rising-in-bitcoin-mining/), 28 April 2025.
[^ostp]: Office of Science and Technology Policy (September 2022). ["Climate and Energy Implications of Crypto-Assets in the United States"](https://bidenwhitehouse.archives.gov/wp-content/uploads/2022/09/09-2022-Crypto-Assets-and-Climate-Report.pdf) (PDF). *The White House* (archived).
[^ccaf-map]: ["Bitcoin mining: new data reveal a surprising resurgence"](https://www.jbs.cam.ac.uk/2022/bitcoin-mining-new-data-reveal-a-surprising-resurgence/). *Cambridge Judge Business School / CCAF*. 17 May 2022. Data: [Bitcoin Mining Map](https://ccaf.io/cbeci/mining_map).
