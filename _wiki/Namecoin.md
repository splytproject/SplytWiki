---
title: Namecoin
description: Namecoin (NMC), the first fork of Bitcoin, built as a decentralised name registry for .bit domains — history since 2011, how name registration and merged mining work, governance, criticism from a 2015 study of its usage, and its legacy, as of October 2026
aliases: [NMC, .bit, Namecoin Core, Decentralized DNS]
categories: [Cryptocurrencies, Proof-of-work cryptocurrencies, Bitcoin forks]
updated: 2026-10-22
last_modified: 2026-10-22
infobox:
  image: namecoin.svg
  caption: Namecoin emblem (SplytWiki illustration)
  rows:
    - header: Overview
    - Ticker: NMC
    - Launch date: "18 April 2011"
    - Founder: "Pseudonymous developer \"vinced\""
    - header: Technology
    - Consensus: "[Proof of work](../Proof_of_work/) (SHA-256), merged-mined with Bitcoin"
    - Supply policy: "Maximum 21 million NMC"
    - Written in: "C++ (Namecoin Core)"
    - License: "MIT"
    - header: Links
    - Website: "[namecoin.org](https://www.namecoin.org/)"
    - Repository: "[namecoin/namecoin-core](https://github.com/namecoin/namecoin-core)"
---

> **In plain terms:** Namecoin was the first cryptocurrency built from Bitcoin's code. Its purpose is to store names, such as website addresses ending in ".bit", on a blockchain. That way no company or government can take them away. Bitcoin miners can secure it at the same time as Bitcoin.

**Namecoin** (ticker **NMC**) is a cryptocurrency and decentralised **name registry**. It was the first fork of [Bitcoin](../Bitcoin/)'s software.[^faq] It lets users register names, most famously domains in the **.bit** namespace, and attach data such as IP addresses to them.[^faq]

## History

Namecoin launched on 18 April 2011, developed by a pseudonymous programmer known as "vinced". It drew on an idea for a decentralised naming system discussed by Bitcoin's early community.[^faq] In 2011 it introduced **merged mining**, letting Bitcoin miners secure Namecoin with the same work.[^faq]

Namecoin is often cited as an early solution to "**Zooko's triangle**", the idea that names can rarely be at once human-readable, secure and decentralised.[^weis]

## How it works

- **Names.** A user registers a name with a `name_new` transaction, then reveals it with `name_firstupdate`. Names must be renewed about every 36,000 blocks, roughly 250 days, or they expire.[^faq]
- **Values.** Each name stores a value, such as DNS records, that resolver software can read.[^faq]
- **Merged mining.** Miners include Namecoin work in Bitcoin mining at no extra cost.[^faq]
- **Coins.** NMC pays registration fees and follows Bitcoin's 21 million cap.[^faq]

## Governance

Development is run by a small volunteer team. Changes are adopted when miners and node operators upgrade.[^repo]

## Controversies and criticism

- **Little genuine use.** A 2015 study of Namecoin's registrations found that only a tiny fraction of registered domains had meaningful content. Most were held speculatively or were squatted.[^weis]
- **Usability.** Browsers do not resolve .bit names without extra software.[^faq]
- **Security.** Depending on merged mining means a large Bitcoin mining pool could control much of Namecoin's hash rate.[^weis]

## Regulatory actions

No significant regulatory actions concern Namecoin.

## Developer notes

Namecoin Core is based on Bitcoin Core and adds name RPCs.[^repo]

```
namecoin-cli name_show d/example
namecoin-cli name_list
```

## See also

- [Bitcoin](../Bitcoin/)
- [Soft fork and hard fork](../Soft_fork_and_hard_fork/)
- [Bitcoin mining and difficulty adjustment](../Bitcoin_mining_and_difficulty_adjustment/)

## References

[^faq]: ["Namecoin FAQ"](https://www.namecoin.org/docs/faq/). *namecoin.org*. Retrieved October 2026.
[^repo]: ["namecoin/namecoin-core"](https://github.com/namecoin/namecoin-core). GitHub.
[^weis]: Kalodner, Harry; Carlsten, Miles; Ellenbogen, Paul; Bonneau, Joseph; Narayanan, Arvind (2015). ["An empirical study of Namecoin and lessons for decentralized namespace design"](https://www.econinfosec.org/archive/weis2015/papers/WEIS_2015_kalodner.pdf) (PDF). *Workshop on the Economics of Information Security (WEIS 2015)*.
