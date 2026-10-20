---
title: Quantum computing and Bitcoin
description: What a cryptographically relevant quantum computer could do to Bitcoin, which coins are exposed and why, published estimates of the at-risk amount and of timelines, and the migration proposals BIP-360 and BIP-361, as of October 2026
aliases: [Quantum threat to Bitcoin, Post-quantum Bitcoin, CRQC, BIP-360, BIP-361, P2MR]
categories: [Bitcoin, Cryptography, Protocol, Debates]
updated: 2026-10-20
last_modified: 2026-10-20
infobox:
  image: bitcoin.svg
  caption: Quantum computing and Bitcoin
  rows:
    - header: The risk
    - Affected primitive: secp256k1 signatures (ECDSA and Schnorr)
    - Not affected in the same way: SHA-256 hashing
    - Exposed coins: Outputs whose public key is visible on chain
    - header: Proposals (as of October 2026)
    - BIP-360: Pay-to-Merkle-Root, Draft
    - BIP-361: Legacy signature sunset, Draft
    - Deployed on mainnet: Nothing
---

**Specifications:** [BIP-360](../BIP_index/#bip-360) · [BIP-361](../BIP_index/#bip-361) · [BIP-340](../BIP_index/#bip-340)

> **In plain terms:** Bitcoin proves ownership with signatures that a large enough quantum computer could forge, once it knows the public key. Most coins hide their public key until spent, but millions do not. No such computer exists today. Developers disagree about how soon one might, and about how to move coins to safety.

Bitcoin's signatures rely on the difficulty of the **elliptic-curve discrete logarithm problem**: given a public key, it is infeasible to find the private key. A **cryptographically relevant quantum computer** (CRQC) running Shor's algorithm would make that feasible.[^nist] Both [ECDSA](../ECDSA/) and [Schnorr signatures](../Schnorr_signature/) use the same secp256k1 curve, so both are affected.[^bip360]

This page covers which coins are exposed, what published estimates say about amounts and timelines, and the proposals for migration. It reports estimates only from their published sources and makes no prediction.

## Which coins are exposed

A quantum attacker needs the **public key**. Bitcoin output types differ in when they reveal it.[^deloitte][^bip360]

| Output type | Public key visible before spending? | Notes |
|---|---|---|
| Pay-to-public-key (P2PK) | Yes, in the output itself | Used by early mining, including Satoshi-era coins.[^deloitte] |
| P2PKH, P2SH, P2WPKH, P2WSH | No, only a hash | Exposed once the address is **reused** after a spend.[^deloitte] |
| Pay-to-Taproot (P2TR) | Yes, the tweaked key is the output | Every Taproot output is exposed.[^bip360] |

BIP-360 distinguishes two attacks. A **long-exposure attack** targets keys that have been public for a long time, such as P2PK and Taproot outputs. The attacker can take as long as needed.[^bip360] A **short-exposure attack** targets a key revealed only when a transaction is broadcast, and must finish before the transaction confirms.[^bip360] Defending against the second needs post-quantum signatures; defending against the first can be done with hashed outputs and no key path.[^bip360]

Hash-based address types also expose the public key briefly while a transaction waits in the mempool. Deloitte's analysis notes this "short attack window".[^deloitte]

## Published estimates of the amount at risk

| Source | Estimate | Date |
|---|---|---|
| Deloitte (Barmes, Bosch, Haalstra) | "over 4 million BTC (about 25% of all Bitcoins)": about 2 million in P2PK and about 2.5 million in reused P2PKH addresses.[^deloitte] | Undated web analysis; cited in later work |
| BIP-361 (Lopp et al.) | "As of March 1, 2026, over 34% of all bitcoin have revealed a public key on-chain".[^bip361] | March 2026 |

The estimates differ because of date and method. Taproot adoption since 2021 has added exposed outputs, and BIP-361's figure includes every revealed key.[^bip361] Chaincode Labs published a relevant report in May 2025, by Anthony Milton and Clara Shikhelman. It includes a section on the "Scope of Vulnerable Funds".[^chaincode] Its figures could not be extracted for this article; see its text directly.

## Published timeline estimates

No CRQC exists as of October 2026. The sources below give estimates, not facts.

- **NIST** (November 2024 draft) proposes that ECDSA at 112-bit security be "Deprecated after 2030" and "Disallowed after 2035". It sets the same dates for elliptic-curve Diffie–Hellman, and would disallow EdDSA after 2035. The draft cites a US government goal of migrating federal systems by 2035.[^nist]
- **Global Risk Institute** ("Quantum Threat Timeline Report 2025", by Mosca and Piani) surveyed 26 experts. They rated a CRQC "quite possible (28–49%) within the next 10 years" and "likely (51–70%) in the next 15".[^gri]
- **Craig Gidney** (Google Quantum AI, May 2025) revised an estimate for breaking RSA. He estimated that "a 2048 bit RSA integer could be factored in less than a week" with "less than a million noisy qubits". The earlier 2019 estimate had needed about 20 million.[^gidney] The paper concerns RSA, not elliptic curves, but it shows resource estimates falling.
- **Matt Corallo** (December 2024) wrote that such machines "will take a while (probably closer to a decade or two than a few years)".[^corallo]
- **BIP-361** states that "academic road-maps now estimate a cryptographically-relevant quantum computer as early as 2027-2030", citing a consultancy report.[^bip361]

## Proposals

### BIP-360: Pay-to-Merkle-Root

[BIP-360](../BIP_index/#bip-360), by Hunter Beast, Ethan Heilman and Isabel Foxen Duke, proposes a new output type that works like [Taproot](../Taproot/) without the key path. It commits only to a script tree, so no public key is exposed until a script is revealed at spending time.[^bip360] It protects against long-exposure attacks only. The authors state that short-exposure attacks "may require the introduction of post-quantum signatures".[^bip360]

The trade-offs are size and privacy. Every P2MR spend is larger than a Taproot key-path spend, and every spend reveals a script.[^bip360] The BIP was merged into the BIPs repository on 11 February 2026 and remains a Draft as of October 2026.[^bip360-commits] A June 2026 change made single-leaf P2MR outputs unsafe, to discourage omitting a post-quantum fallback leaf.[^optech]

### BIP-361: a signature sunset

[BIP-361](../BIP_index/#bip-361), by Jameson Lopp and five co-authors, is an Informational draft assigned in February 2026. It assumes some post-quantum output type exists, then phases out legacy signatures:[^bip361]

- **Phase A**: sending funds to quantum-vulnerable addresses becomes invalid, 160,000 blocks (about three years) after activation.
- **Phase B**: two years after Phase A, nodes "tighten requirements on verification of ECDSA/Schnorr". Spends are encumbered by a "quantum-safe rescue protocol", at a flag day about five years after activation.

Its stated goal is to turn migration into "a private incentive": coins that are not moved face growing friction.[^bip361] It argues that coordination "historically takes years", so a time-boxed plan is needed.[^bip361] The proposal depends on a post-quantum signature BIP that has not yet been written.[^bip361]

### A Taproot script-path fallback

Matt Corallo proposed in December 2024 that wallets add a post-quantum script leaf to Taproot outputs now. The leaf would use a post-quantum signature opcode such as a hypothetical `OP_SPHINCS`. If a CRQC appears, a soft fork could disable key-path spending, forcing spends through the quantum-safe leaf.[^corallo]

Luke Dashjr replied that wallets could commit to such a leaf before any soft fork. He warned that the post-quantum script would need guarding like a private key.[^corallo]

### Moving coins

Deloitte recommended that holders move coins from P2PK and reused addresses to a fresh hashed address, and never reuse addresses. It also raised, with caution, the idea of a community deadline after which transactions from unsafe addresses would be ignored.[^deloitte]

## Open disputes

- **Burn or steal.** If vulnerable coins are not migrated, the choice is between leaving them for a quantum attacker and making them unspendable. Chaincode's report frames this as the "Burn vs. Steal Dilemma".[^chaincode] BIP-361 argues that abandoned keys remaining unspendable is acceptable "supply discipline".[^bip361]
- **Urgency.** Corallo's "decade or two" and BIP-361's "as early as 2027-2030" bracket the views cited here.[^corallo][^bip361]
- **Which signature scheme.** No post-quantum signature BIP exists as of October 2026. NIST's standards (FIPS 203, 204 and 205) are candidates named in its transition draft.[^nist]
- **Taproot's exposure.** Taproot made every new output's key visible, which BIP-360 treats as the problem to fix. Supporters of Taproot's key path value its efficiency and privacy.[^bip360]

## Developer notes

### Checking exposure

Bitcoin Core does not report quantum exposure directly. A wallet can inspect its own outputs:

```
bitcoin-cli listunspent            # "desc" shows the script type: pkh(), wpkh(), tr() ...
bitcoin-cli getaddressinfo <addr>  # "ischange", "iswitness", "witness_version"
```

Outputs described by `tr()` have an exposed key. Outputs described by `pkh()`, `wpkh()` or `wsh()` are exposed only if the address has been spent from before.[^deloitte][^bip360]

### Specifications

- BIP-360: [bip-0360.mediawiki](https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki) (Draft). It requires BIP-340, BIP-341 and BIP-342.[^bip360]
- BIP-361: [bip-0361.mediawiki](https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki) (Draft, Informational).[^bip361]
- NIST IR 8547 (initial public draft): [nvlpubs.nist.gov](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf).[^nist]

BIP-360 ships test vectors for P2MR output construction, built on BIP-341's, and a Python reference implementation in `bip-0360/ref-impl/`.[^bip360] BIP-361 has neither. As of October 2026, Bitcoin Core contains no implementation of a post-quantum output type.[^optech]

## See also

- [ECDSA](../ECDSA/)
- [Schnorr signature](../Schnorr_signature/)
- [Taproot](../Taproot/)
- [Covenant proposals](../Covenant_proposals/)
- [Soft fork and hard fork](../Soft_fork_and_hard_fork/)
- [UTXO](../UTXO/)

## References

[^bip360]: Beast, Hunter; Heilman, Ethan; Duke, Isabel Foxen. ["BIP 360: Pay-to-Merkle-Root (P2MR)"](https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki). *Bitcoin Improvement Proposals*. Status: Draft (as of October 2026).
[^bip360-commits]: [Commit history of bip-0360.mediawiki](https://github.com/bitcoin/bips/commits/master/bip-0360.mediawiki). *bitcoin/bips* repository. First commit 11 February 2026.
[^bip361]: Lopp, Jameson; Papathanasiou, Christian; Smith, Ian; Ross, Joe; Vaile, Steve; Dallaire-Demers, Pierre-Luc. ["BIP 361: Post Quantum Migration and Legacy Signature Sunset"](https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki). *Bitcoin Improvement Proposals*. Status: Draft; assigned 11 February 2026.
[^deloitte]: Barmes, Itan; Bosch, Bram; Haalstra, Olaf. ["Quantum computers and the Bitcoin blockchain"](https://www.deloitte.com/nl/en/services/risk-advisory/perspectives/quantum-computers-and-the-bitcoin-blockchain.html). *Deloitte Netherlands*. Undated.
[^chaincode]: Milton, Anthony; Shikhelman, Clara (May 2025). ["Bitcoin and Quantum Computing: Current Status and Future Directions"](https://chaincode.com/bitcoin-post-quantum.pdf) (PDF). *Chaincode Labs*.
[^nist]: National Institute of Standards and Technology (12 November 2024). ["Transition to Post-Quantum Cryptography Standards" (NIST IR 8547, initial public draft)](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf) (PDF).
[^gri]: Mosca, Michele; Piani, Marco. ["Quantum Threat Timeline Report 2025"](https://globalriskinstitute.org/publication/quantum-threat-timeline-report-2025b/). *Global Risk Institute* and evolutionQ. Page dated 9 March 2026.
[^gidney]: Gidney, Craig (21 May 2025). ["How to factor 2048 bit RSA integers with less than a million noisy qubits"](https://arxiv.org/abs/2505.15917). *arXiv* 2505.15917.
[^corallo]: Corallo, Matt (15 December 2024). ["Trivial QC signatures with clean upgrade path"](https://groups.google.com/g/bitcoindev/c/8O857bRSVV8). *bitcoindev mailing list*, including the reply by Luke Dashjr.
[^optech]: ["Quantum resistance"](https://bitcoinops.org/en/topics/quantum-resistance/). *Bitcoin Optech* topics. Retrieved October 2026.
