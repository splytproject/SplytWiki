---
title: Seed phrases and self-custody security
description: How BIP-39 seed phrases work, passphrases, backup methods and how they fail, hardware wallet threat models, multisig versus single-sig, inheritance planning and what never to do, with published incident reports
aliases: [Self-custody, Seed phrase security, Seed backup, Recovery phrase backup, Metal seed backup, BIP-39 passphrase, 25th word, Shamir backup, SLIP-39, Crypto inheritance]
categories: [Wallets, Security, Bitcoin, Cryptography]
updated: 2026-10-21
last_modified: 2026-10-21
infobox:
  image: bitcoin.svg
  caption: Seed phrases and self-custody
  rows:
    - header: Overview
    - Standard: "BIP-39 (assigned 2013)"
    - Words: "12, 15, 18, 21 or 24 from a 2,048-word list"
    - Optional extra secret: "BIP-39 passphrase (\"25th word\")"
    - Threshold alternative: "SLIP-39 (Shamir's secret sharing)"
    - header: Main risks
    - Loss: "Destroyed or forgotten backup"
    - Theft: "Phishing, malware, physical coercion"
---

> **In plain terms:** Self-custody means you hold the keys to your coins instead of an exchange. Your wallet's keys all come from one list of 12 or 24 words, the seed phrase. Anyone who sees those words can take everything, and if you lose them, nobody can restore your funds. Good security is about keeping the words both secret and safe from loss.

**Self-custody** is holding a cryptocurrency's private keys yourself, instead of trusting an exchange or other custodian (see [Cryptocurrency wallet](../Cryptocurrency_wallet/)). Most wallets back up their keys as a **seed phrase**, a list of words defined by the BIP-39 standard.[^bip39] The seed phrase is the wallet: any device that knows it can recreate every key.[^bip39]

Self-custody removes the risk of a custodian failing, as happened at [Mt. Gox](../Mt_Gox_collapse/) and [FTX](../FTX_collapse/). It adds two new risks: the owner can lose the backup, or have it stolen. This article covers how seed phrases work, how backups fail, and the threats that hardware wallets and multisig address.

## How BIP-39 works

BIP-39 was written by Marek Palatinus, Pavol Rusnak, Aaron Voisine and Sean Bowe, and assigned in 2013.[^bip39] It turns random data into words and words into a seed:[^bip39]

1. **Entropy.** The wallet generates 128 to 256 bits of random data. "Entropy" here means unpredictable randomness.
2. **Checksum.** It appends the first *ENT*/32 bits of the data's SHA-256 hash, where *ENT* is the entropy length.
3. **Words.** It splits the result into 11-bit groups. Each group picks one word from a fixed list of 2,048 words. 128 bits give 12 words; 256 bits give 24.
4. **Seed.** It runs the words through PBKDF2 with HMAC-SHA512 for 2,048 rounds. The salt is the string "mnemonic" plus an optional passphrase. The output is a 512-bit seed.

The seed then feeds the key tree described in [HD wallets and seed phrases](../HD_wallets_and_seed_phrases/). The English list is designed so that the first four letters identify each word.[^bip39]

BIP-39 lists its own shortcomings. Its checksum "only gives modest odds of catching random errors", and it cannot correct them. Translating the words into another language's list creates a different wallet. It "strongly" discourages non-English word lists.[^bip39]

### Passphrases

The optional **passphrase**, sometimes called the "25th word", is mixed into the seed calculation. Every passphrase produces a valid but different wallet.[^bip39] BIP-39 notes this gives "plausible deniability": an owner can reveal a decoy wallet under one passphrase.[^bip39]

A passphrase protects against someone who finds the written words. It also defeated the 2020 Trezor glitching attack described below, because the passphrase is not stored on the device.[^kraken] Its cost is a second secret to back up. Only the correct passphrase opens the wallet, so losing it loses the funds.[^bip39]

## Backup methods and their failure modes

| Method | Main risks | Relative cost | Recoverability |
|---|---|---|---|
| **Paper**, written by hand | Fire, water, fading, being thrown away; theft if found | Very low | Good while intact; one copy is a single point of failure |
| **Metal plate or capsule** | Theft if found; some designs fail fire, crush or corrosion tests[^lopp] | Low to medium | Very good for tested designs |
| **Photo, cloud note or password manager** | Malware, account breaches, cloud sync of photos[^sparkcat] | Very low | Good, but exposure is silent |
| **Words split by hand across places** | Each piece shrinks an attacker's search; losing a piece may lose the wallet[^antonopoulos] | Low | Poor |
| **Shamir backup (SLIP-39)** | More pieces to manage; not compatible with BIP-39[^slip39] | Low to medium | Good: any threshold of shares restores |
| **Multisig with several seeds** | Must also back up the wallet descriptor; more complexity[^bip39][^bip380] | Medium | Good: survives loss of some keys |
| **Custodial or vendor recovery service** | Depends on third parties and identity checks[^ledger-recover] | Subscription | Good, but no longer pure self-custody |

### Paper and metal

Paper is cheap but fragile. Metal backups survive more disasters, but quality varies. As of October 2026, Jameson Lopp has stress-tested 75 metal devices for heat, corrosion and crush resistance.[^lopp] Several products failed at least one test. Lopp's advice includes "Simpler is better - more pieces means more potential points of failure". He also says to avoid devices whose maker "may know your private key".[^lopp]

### Digital copies

Typing or photographing the words puts them on internet-connected devices. In February 2025 Kaspersky reported **SparkCat**, malware in apps on Apple's App Store and Google Play.[^sparkcat] It used optical character recognition to read seed phrases from screenshots in a phone's photo gallery. Kaspersky estimated the infected Google Play apps had over 242,000 downloads.[^sparkcat]

Wallet software can also leak words. In August 2022, Solana security firm Otter reported that the Slope wallet sent users' seed phrases to a logging server, stored as readable text. Thousands of Solana wallets were drained that month. Otter tied at least a subset of them to Slope's logs.[^slope]

### Splitting the words

Some people split 24 words into pieces stored in different places. Andreas Antonopoulos warned that an attacker holding most pieces can guess the rest by brute force. An owner who loses a piece faces the same search, so the split adds little security.[^antonopoulos]

**SLIP-39**, written by SatoshiLabs, is a proper threshold scheme based on Shamir's secret sharing. It splits a secret into shares so that a set number, such as 3 of 5, restores it. Fewer shares reveal nothing about the secret.[^slip39] SLIP-39 shares are not BIP-39 words, so wallets must support it specifically.[^slip39]

### Custodial recovery services

In May 2023 Ledger announced **Ledger Recover**. It encrypts a device's seed, splits it into three shares, and stores them with Ledger, Coincover and a third company. Two shares and an identity check restore the wallet.[^ledger-recover] Security researchers objected that firmware able to export a seed weakened the device's promise. Ledger replied that the opt-in feature "doesn't change the security assumptions compared to a firmware update".[^ledger-recover]

## Hardware wallet threat models

A **hardware wallet** is a small device that stores keys and signs transactions without exposing keys to the computer. It defends against some threats but not others.

| Threat | Example | Typical mitigation |
|---|---|---|
| **Malware on the computer** | Changes a payment address or hides a transaction's real effect | Check the address and details on the device screen |
| **Physical extraction** | In 2020 Kraken Security Labs extracted encrypted seeds from Trezor One and Model T devices by voltage glitching. It took about 15 minutes with the device in hand.[^kraken] | BIP-39 passphrase; secure-element chips; keep the device secure[^kraken] |
| **Weak key generation** | **Milk Sad** (2023): Libbitcoin Explorer's `bx seed` command had at most 32 bits of real entropy. Attackers recreated users' keys and stole funds.[^milksad][^nvd-milksad] | Use wallets with audited randomness; never use toy key generators |
| **Malicious firmware** | **Dark Skippy** (2024): tampered firmware can leak a seed through the random values in two signatures.[^darkskippy] | Buy from the maker, verify firmware, use anti-exfiltration signing[^darkskippy] |
| **Software supply chain** | December 2023: a phished former employee's account let attackers publish malicious versions of Ledger's Connect Kit library. Apps using it served wallet-draining code.[^ledger-connectkit] | Verify every transaction on the device; pin dependency versions |
| **Customer data leaks** | Ledger's 2020 marketing-database breach exposed about 292,000 customers' contact details. A phishing campaign followed.[^ledger-breach] | Treat unsolicited calls, emails and texts as hostile; a vendor will not ask for words |
| **Physical coercion** | "Wrench attacks": robbery, kidnapping or threats against known holders. Lopp maintains a public list of reported cases.[^wrench] | Privacy about holdings; multisig and time delays; decoy passphrase wallets |

Dark Skippy's authors note that a BIP-39 passphrase does not stop that attack, because it targets the final keys rather than the words.[^darkskippy] Critics replied that it needs malicious firmware to be installed first, so it adds little beyond existing advice to verify firmware.[^darkskippy]

## Multisig versus single-sig

A **single-sig** wallet needs one key, so one seed backup controls everything. A [multisignature](../Multisignature/) wallet needs, for example, 2 of 3 keys to spend.

**Benefits.** Losing one key does not lose the funds. Stealing one key does not steal them. Keys can sit in different places, devices and even brands, so one maker's flaw affects only one key.

**Costs.** Restoring a multisig wallet needs more than the seeds. The owner also needs the **wallet descriptor**, which lists every key and the spending rule.[^bip380] BIP-39 itself notes that descriptor wallets solve its lack of versioning.[^bip39] Setup and recovery are more complex, and mistakes in the descriptor backup can strand funds.

The [Bybit hack](../Bybit_hack/) showed that multisig does not help if every signer is deceived by the same compromised screen.

## Inheritance planning

Coins whose keys die with their owner are lost. Common approaches include:

- **Written instructions** that explain where backups are and how to restore them, without containing the words themselves.
- **Splitting trust** between heirs and professionals with multisig or Shamir shares, so no single person can act alone.[^slip39]
- **Time-locked recovery keys.** Wallets such as Liana use Bitcoin's timelocks and [Miniscript](../Miniscript_and_output_descriptors/). A recovery key can spend "only after the wallet has been inactive for some time".[^liana] Liana's own example gives heirs a 2-of-3 key set after one year.[^liana]
- **Collaborative custody** with a company that holds one key of a multisig.

Each approach trades simplicity against resistance to theft. Instructions must also be kept current when wallets or devices change.

## What never to do

- **Never type the words into a website, form or chat.** Real wallet makers will not ask for them.[^ledger-breach][^ftc]
- **Never photograph them or keep them in cloud-synced notes or galleries.**[^sparkcat]
- **Never use a phrase you did not generate on a trusted device.** That includes words printed on a card in the box, or from a "generator" website.[^milksad]
- **Never make up your own words or "brain wallet".** BIP-39 warns that phrases not made by its algorithm are "not advised".[^bip39]
- **Never share your holdings publicly.** Visible wealth draws phishing and physical attacks.[^wrench][^ledger-breach]
- **Never rely on a single copy**, and never store the passphrase with the words.

## Developer notes

### Test vector

From the BIP-39 vectors, all of which use the passphrase `TREZOR`:[^bip39][^vectors]

```
entropy:  00000000000000000000000000000000
mnemonic: abandon abandon abandon abandon abandon abandon
          abandon abandon abandon abandon abandon about
seed:     c55257c360c07c72029aebc1b53c05ed0362ada38ead3e3e9efa3708e534955
          31f09a6987599d18264c1e1c92f2cf141630c7a3c4ab7c81b2f001698e7463b04
```

### Files and libraries

- `bip-0039/english.txt` in the BIPs repository holds the 2,048-word English list.[^bip39]
- The reference implementation is SatoshiLabs' `python-mnemonic`, whose `vectors.json` contains the test vectors.[^vectors]
- SLIP-39 has its own reference implementation and test vectors.[^slip39]

### Bitcoin Core

Bitcoin Core does not use BIP-39 words. Its wallets back up as output descriptors.[^bip380]

```
bitcoin-cli listdescriptors true          # export private descriptors (keep secret)
bitcoin-cli importdescriptors '[...]'     # restore from descriptors
```

`listdescriptors` with `true` includes private keys, so its output is as sensitive as a seed phrase.[^core-listdescriptors][^core-importdescriptors]

## See also

- [HD wallets and seed phrases](../HD_wallets_and_seed_phrases/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)
- [Multisignature](../Multisignature/)
- [Miniscript and output descriptors](../Miniscript_and_output_descriptors/)
- [Cryptocurrency scams](../Cryptocurrency_scams/)

## References

[^bip39]: Palatinus, Marek; Rusnak, Pavol; Voisine, Aaron; Bowe, Sean (2013). ["BIP 39: Mnemonic code for generating deterministic keys"](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). *Bitcoin Improvement Proposals*.
[^vectors]: SatoshiLabs. ["python-mnemonic: vectors.json"](https://github.com/trezor/python-mnemonic/blob/master/vectors.json). Reference implementation of BIP-39, GitHub.
[^slip39]: Rusnak, Pavol; et al. (2017). ["SLIP-0039: Shamir's Secret-Sharing for Mnemonic Codes"](https://github.com/satoshilabs/slips/blob/master/slip-0039.md). *SatoshiLabs Improvement Proposals*.
[^bip380]: Chow, Ava; Wuille, Pieter. ["BIP 380: Output Script Descriptors General Operation"](https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki). *Bitcoin Improvement Proposals*.
[^lopp]: Lopp, Jameson. ["Metal Bitcoin Seed Storage Reviews"](https://jlopp.github.io/metal-bitcoin-storage-reviews/). Retrieved October 2026. Methodology and results of stress tests.
[^sparkcat]: Kaspersky GReAT (February 2025). ["SparkCat crypto stealer in Google Play and App Store"](https://securelist.com/sparkcat-stealer-in-app-store-and-google-play/115385/). *Securelist*.
[^slope]: ["Slope wallet provider saved user seed phrases in plain text, Solana security researchers find"](https://www.theblock.co/post/161425/slope-wallet-provider-saved-user-seed-phrases-in-plain-text-solana-security-researchers-find). *The Block*. 4 August 2022.
[^antonopoulos]: Antonopoulos, Andreas (8 April 2020). ["Seed splitting"](https://diyhpl.us/wiki/transcripts/andreas-antonopoulos/2020-04-08-andreas-antonopoulos-seed-splitting). Transcript.
[^ledger-recover]: ["Ledger defends crypto wallet recovery tool against hostile reaction from security experts"](https://www.theblock.co/post/230992/ledger-defends-crypto-wallet-recovery-tool). *The Block*. May 2023.
[^kraken]: ["Kraken Security Labs: Hackers can exploit Trezor hardware wallets with only 15 minutes of physical access to the device"](https://www.theblock.co/post/54631/kraken-security-labs-hackers-can-exploit-trezor-hardware-wallets-with-only-15-minutes-of-physical-access-to-the-device). *The Block*. 31 January 2020.
[^milksad]: Milk Sad disclosure team (August 2023). ["Milk Sad"](https://milksad.info/). *milksad.info*.
[^nvd-milksad]: National Vulnerability Database. ["CVE-2023-39910"](https://nvd.nist.gov/vuln/detail/CVE-2023-39910). *NIST*.
[^darkskippy]: ["Dark Skippy"](https://darkskippy.com/). Disclosure site, August 2024. Responses summarised in ["Dark Skippy: A New Threat to Hardware Wallets"](https://www.merklescience.com/blog/dark-skippy-a-new-threat-to-hardware-wallets), *Merkle Science*.
[^ledger-connectkit]: Gauthier, Pascal (December 2023). ["A Letter from Ledger Chairman & CEO Pascal Gauthier Regarding Ledger Connect Kit Exploit"](https://www.ledger.com/blog/a-letter-from-ledger-chairman-ceo-pascal-gauthier-regarding-ledger-connect-kit-exploit). *Ledger*.
[^ledger-breach]: Ledger. ["Addressing the July 2020 e-commerce and marketing data breach"](https://www.ledger.com/addressing-the-july-2020-e-commerce-and-marketing-data-breach). *Ledger*. Updated after the December 2020 leak.
[^wrench]: Lopp, Jameson. ["Known Physical Bitcoin Attacks"](https://github.com/jlopp/physical-bitcoin-attacks). GitHub. Retrieved October 2026.
[^liana]: Wizardsardine. ["Liana: README"](https://github.com/wizardsardine/liana). GitHub. Retrieved October 2026.
[^ftc]: ["What To Know About Cryptocurrency and Scams"](https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams). *Federal Trade Commission*.
[^core-listdescriptors]: ["listdescriptors"](https://bitcoincore.org/en/doc/29.0.0/rpc/wallet/listdescriptors/). *Bitcoin Core RPC documentation*, version 29.0.0.
[^core-importdescriptors]: ["importdescriptors"](https://bitcoincore.org/en/doc/29.0.0/rpc/wallet/importdescriptors/). *Bitcoin Core RPC documentation*, version 29.0.0.
