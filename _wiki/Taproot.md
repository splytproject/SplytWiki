---
title: Taproot
description: Bitcoin's SegWit version 1 output type, specified in BIP-340, BIP-341 and BIP-342, covering output construction, key and script path spending, control blocks, tagged hashes, bech32m addresses, activation and adoption
aliases: [P2TR, Pay-to-Taproot, BIP-341, Taproot upgrade, Tapscript]
categories: [Bitcoin, Protocol, Scripting, Cryptography]
updated: 2026-10-19
last_modified: 2026-10-19
infobox:
  image: bitcoin.svg
  caption: Taproot (P2TR)
  rows:
    - header: Overview
    - Type: SegWit version 1 output; consensus soft fork
    - Specification: BIP-340, BIP-341, BIP-342
    - Address format: bech32m (BIP-350), prefix `bc1p`
    - Activation: Block 709,632 (November 2021)
    - header: Mechanism
    - Signatures: 64-byte Schnorr (BIP-340)
    - Spending paths: Key path or script path
    - Script tree depth: Up to 128 levels
---

**Specifications:** [BIP-340](../BIP_index/#bip-340) · [BIP-341](../BIP_index/#bip-341) · [BIP-342](../BIP_index/#bip-342) · [BIP-350](../BIP-350/)

> **In plain terms:** A Taproot output looks like a single public key. The owner can spend it with one signature, or by revealing one of several hidden spending scripts. Observers only learn about the script that was actually used.

**Taproot** is a Bitcoin output type, also called **pay-to-Taproot** (P2TR). It is defined as [Segregated Witness](../Segregated_Witness/) version 1 and was added to Bitcoin by a soft fork.[^bip341] Three documents specify it:

- **BIP-340** defines the Schnorr signature scheme and 32-byte public keys.[^bip340]
- **BIP-341** defines the output format, the two ways of spending it, and the new signature hash.[^bip341]
- **BIP-342** defines **tapscript**, the script language used inside Taproot's script path.[^bip342]

BIP-341 states its goals as better privacy, efficiency and flexibility, without new security assumptions. It also adds mechanisms for future upgrades.[^bip341]

## Building blocks from BIP-340

### Public keys and signatures

BIP-340 encodes a public key as only its 32-byte X coordinate. Of the two points with that X coordinate, the one with an even Y coordinate is implied.[^bip340] Signatures are 64 bytes.[^bip340]

BIP-340 argues that dropping the Y coordinate does not meaningfully weaken security. An attacker able to break an X-only key could also break a full key, at almost the same cost.[^bip340] For [Schnorr signatures](../Schnorr_signature/) in general, see that article.

### Tagged hashes

A **tagged hash** is a SHA-256 hash bound to a named purpose. BIP-340 defines it as:[^bip340]

    hash_tag(x) = SHA256( SHA256(tag) || SHA256(tag) || x )

The tag is a UTF-8 string. Prefixing the data with a tag-specific 64-byte constant stops a hash computed in one context from being valid in another.[^bip340] Because 64 bytes is one SHA-256 block, implementations can precompute the prefix.[^bip340]

Taproot uses these tags:

| Tag | Used for | Defined in |
|---|---|---|
| `BIP0340/challenge` | Signature challenge *e* | BIP-340[^bip340] |
| `BIP0340/aux`, `BIP0340/nonce` | Deterministic nonce generation | BIP-340[^bip340] |
| `TapLeaf` | Hash of one script leaf | BIP-341[^bip341] |
| `TapBranch` | Hash of two child nodes in the script tree | BIP-341[^bip341] |
| `TapTweak` | Tweak that commits the tree to the output key | BIP-341[^bip341] |
| `TapSighash` | Signature message for Taproot inputs | BIP-341[^bip341] |

BIP-341 notes that no earlier Bitcoin hash input begins with two SHA-256 outputs. That makes collisions with older hash uses extremely unlikely.[^bip341]

## Output construction

### The output script

A Taproot scriptPubKey is `OP_1` followed by a 32-byte push. In bytes, it is `0x51 0x20` then the 32-byte **output key** *q*.[^bip341] Other version 1 programs, such as those of a different length or wrapped in P2SH, are left unrestricted for future soft forks.[^bip341]

### Ingredients

BIP-341 describes every Taproot output as one key condition plus zero or more script conditions. Satisfying any one of them is enough to spend.[^bip341]

- The **internal key** *P* is the key condition.
- The scripts sit in the leaves of a binary **Merkle tree**. Each leaf is a pair: a leaf version and a script.[^bip341]

### Hashing the tree

The tree is reduced to one 32-byte **Merkle root** in three steps:[^bip341]

1. Each leaf is hashed as `hash_TapLeaf(leaf_version || compact_size(len(script)) || script)`. The result is the **tapleaf hash**.
2. Each pair of child hashes is sorted byte-wise, smaller first, then hashed as `hash_TapBranch(smaller || larger)`.
3. The hash at the top of the tree is the Merkle root.

Sorting the children means a verifier does not need to know whether a node was on the left or right.[^bip341] BIP-341 suggests a Huffman-style tree, placing likely scripts nearer the root, when leaf probabilities are known.[^bip341]

### The tweak

The internal key and Merkle root are combined into the output key:[^bip341]

    t = hash_TapTweak( bytes(P) || merkle_root )
    Q = P + t·G
    q = x(Q)

Here *G* is the secp256k1 generator. Spending fails if *t* is not smaller than the curve order.[^bip341] The parity of *Q*'s Y coordinate is not stored in the output; script-path spenders supply it in the control block.[^bip341]

### Outputs with no scripts

When an output needs no script path, BIP-341 still recommends a tweak. The wallet uses `t = hash_TapTweak(bytes(P))`, with an empty Merkle root.[^bip341]

The reason concerns keys combined by several parties. If an aggregate key is not tweaked this way, one participant can secretly build in a script path that only they can use. BIP-341 describes this attack against simple key-summing schemes. MuSig is not affected because it already randomizes the internal key.[^bip341]

### NUMS internal keys

Some outputs should be spendable only through scripts. For these, BIP-341 suggests an internal key whose private key nobody knows. This is called a **nothing-up-my-sleeve** (NUMS) point.[^bip341]

BIP-341 gives an example point *H*. Its X coordinate is the SHA-256 hash of the uncompressed encoding of the generator *G*:[^bip341]

    H = lift_x(0x50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0)

Using *H* directly would reveal that the key path is disabled. BIP-341 therefore recommends *H + r·G* with a fresh random *r*. Revealing *r* later lets a verifier confirm that nobody knows the key.[^bip341]

## Key path spending

A **key path** spend uses the output key directly. The witness contains exactly one element: a BIP-340 signature for *q*.[^bip341]

- A 64-byte signature uses the default signature hash mode, `SIGHASH_DEFAULT`.[^bip341]
- A 65-byte signature appends an explicit sighash byte, which must not be `0x00`.[^bip341]
- Any other length fails.[^bip341]

The signer must use the tweaked private key. BIP-341's reference code negates the internal private key first if its point has an odd Y coordinate, then adds *t*.[^bip341]

A key path spend reveals nothing about any scripts in the tree. BIP-341 describes it as able to look like an ordinary single- or multi-signature payment.[^bip341]

## Script path spending

### Witness layout

A **script path** spend reveals one leaf. Its witness contains, in order:[^bip341]

1. The inputs the script needs.
2. The script itself.
3. The **control block**.

If the last element starts with `0x50` and there are at least two elements, it is the **annex**. The annex is removed before the steps above. It is covered by signatures but otherwise ignored, and is reserved for future use.[^bip341]

### Control block layout

The control block proves that the revealed script belongs to the committed tree. Its length must be 33 + 32*m* bytes, where *m* is between 0 and 128.[^bip341] The maximum is therefore 4,129 bytes.

| Bytes | Content |
|---|---|
| 0 | Leaf version in the top 7 bits (`c[0] & 0xfe`); parity of *Q*'s Y coordinate in the lowest bit |
| 1–32 | Internal key *p* |
| 33 onward | *m* sibling hashes, 32 bytes each, from the leaf up to the root |

The tapscript leaf version is `0xc0`. Its control blocks therefore begin with `0xc0` or `0xc1`.[^bip342]

### Verification

A node checks the control block as follows:[^bip341]

1. Read *p* and lift it to a curve point *P*. Fail if that is impossible.
2. Compute the tapleaf hash *k₀* from the leaf version and script.
3. For each sibling hash *eⱼ*, combine it with the running hash using the sorted `TapBranch` rule.
4. Compute *t* from *p* and the final hash, then *Q = P + t·G*.
5. Fail unless *x(Q)* equals *q* and *Q*'s Y parity matches the control byte.
6. Execute the script under the rules for its leaf version.

### Worked example from BIP-341

BIP-341 illustrates a five-leaf tree with leaves A to E. To spend leaf D, the control block holds the control byte, *p*, then the hashes C, E and AB.[^bip341] The verifier then computes:

    D     = hash_TapLeaf(leaf_version || compact_size(len) || script)
    CD    = hash_TapBranch(C || D)
    CDE   = hash_TapBranch(E || CD)
    ABCDE = hash_TapBranch(AB || CDE)
    t     = hash_TapTweak(p || ABCDE)

The argument order in each step follows the sorting rule, not the tree's drawing.[^bip341]

## Tapscript (BIP-342)

Scripts with leaf version `0xc0` run as **tapscript**. Tapscript follows the rules for P2WSH scripts, with these changes:[^bip342]

- **Schnorr signature checks.** `OP_CHECKSIG` and `OP_CHECKSIGVERIFY` verify BIP-340 signatures against 32-byte keys.
- **`OP_CHECKSIGADD`** (opcode `0xba`) is new. It checks a signature and adds 1 to a counter if the signature is valid. It replaces `OP_CHECKMULTISIG` for threshold policies.
- **Disabled opcodes.** `OP_CHECKMULTISIG` and `OP_CHECKMULTISIGVERIFY` fail if executed. BIP-342 notes they are incompatible with batch verification.
- **`OP_SUCCESSx`.** Opcodes 80, 98, 126–129, 131–134, 137–138, 141–142, 149–153 and 187–254 make a script succeed immediately. They are reserved so that future soft forks can give them meaning.
- **Unknown key types.** A public key whose length is neither 0 nor 32 bytes counts as an unknown type. Its signature checks pass, leaving room for new signature schemes.
- **MINIMALIF in consensus.** `OP_IF` and `OP_NOTIF` arguments must be exactly empty or exactly `0x01`.

Resource limits also change:[^bip342]

- The 10,000-byte script size limit does not apply.
- The 201 non-push opcode limit does not apply.
- Signature operations no longer count against the block-wide limit. Each input gets a **sigops budget** of 50 plus its witness size in bytes. Each executed signature check with a non-empty signature costs 50.
- The 520-byte stack element limit and the 1,000-element stack limit remain.

Tapscript signatures commit to the tapleaf hash and to the position of the last executed `OP_CODESEPARATOR`.[^bip342]

## Bech32m addresses (BIP-350)

Taproot outputs use a new address checksum, **bech32m**, rather than the bech32 format of SegWit version 0.[^bip350]

BIP-350 explains the reason. Bech32 has a flaw: if an address ends in `p`, adding or removing `q` characters just before it leaves the checksum valid. Version 0 addresses escape this because only two lengths are allowed. Future versions would not.[^bip350]

Bech32m changes one constant in the checksum, from `1` to `0x2bc830a3`.[^bip350] Addresses for witness version 0 keep using bech32. Versions 1 and above use bech32m.[^bip350] The version 1 symbol makes mainnet Taproot addresses begin with `bc1p`.[^bip360][^vectors]

BIP-350 notes that this deliberately breaks sending to version 1 addresses from software that only knows bech32.[^bip350]

## Activation

BIP-341 and BIP-342 were deployed together.[^bip341] On mainnet, miners signalled readiness with version bit 2. Bitcoin Core 0.21.1, released on 1 May 2021, implemented this process and called it **Speedy Trial**.[^core-0211]

BIP-341 lists the mainnet parameters:[^bip341]

| Parameter | Value |
|---|---|
| Start | 24 April 2021, 00:00 UTC (median time past) |
| Timeout | 11 August 2021, 00:00 UTC |
| Threshold | 1,815 of 2,016 blocks (90%), not the usual 95% |
| Minimum activation height | Block 709,632 |

The minimum activation height was the main change from the BIP-9 rules. It meant that locking in early would not make Taproot active early.[^bip341]

Miners locked in Taproot in mid-June 2021.[^optech-lockin] It activated at block 709,632 in November 2021.[^bip341][^optech-active] On testnet3 it activated at block 2,011,968. On signet it has always been active.[^bip341]

The activation method was itself debated. Bitcoin Optech records Speedy Trial being proposed as a compromise in April 2021.[^optech-taproot]

## Adoption

Adoption figures change over time. The most recent figures in a primary source are from July 2025, posted by Bitcoin developer Mark "Murch" Erhardt to the bitcoin-dev mailing list:[^murch-2025]

| Measure | Value | Date |
|---|---|---|
| P2TR share of UTXO count | 34.7% (57,956,440 outputs) | 11 July 2025 |
| Bitcoin held in P2TR outputs | ~156,309 BTC (0.79% of supply) | 11 July 2025 |
| P2TR share of new outputs by count | 20.0% | 30-day average to 10 July 2025 |
| P2TR share of new outputs by value | 8.3% | 30-day average to 10 July 2025 |
| Inputs spending P2TR by key path | 16.0% | 30-day average to 10 July 2025 |
| Inputs spending P2TR by script path | 7.0% | 30-day average to 10 July 2025 |

Murch noted that the value share of new P2TR outputs had risen from 1.4% on 1 February 2025.[^murch-2025] His sources were a Dune dashboard of the UTXO set and charts on mainnet.observer.[^murch-2025] Current values are available from those dashboards.[^dune-utxo][^mainnet-observer]

The figures show a large gap between count and value. Taproot outputs were about a third of all unspent outputs, but held under 1% of bitcoin.[^murch-2025]

## Criticisms and limitations

**Script path privacy is partial.** BIP-341 itself notes what a script path spend reveals. Observers learn that a script path exists and that the key path was not used. The depth of the revealed leaf also hints at the tree's shape, which may identify wallet software.[^bip341]

**Exposed public keys.** A Taproot output contains a public key, not a hash of one. BIP-360, a draft proposal, argues that this leaves Taproot outputs open to "long exposure" attacks by a future quantum computer. It proposes a new output type without the key path.[^bip360]

**Use for data storage.** Tapscript removed the script size limit.[^bip342] The Ordinals protocol stores "inscriptions" inside Taproot script-path spends, wrapped in an `OP_FALSE OP_IF … OP_ENDIF` envelope.[^ordinals] Whether such use is legitimate is disputed; see [OP_RETURN](../OP_RETURN/).

**What drives adoption.** In the same July 2025 thread, a respondent writing as "/dev /fd0" said 86% of P2TR outputs were under 1,000 satoshis. They argued that the uses developers expected before activation were still slow to appear.[^fd0-2025]

## Developer notes

### Bitcoin Core

- Taproot validation is in `src/script/interpreter.cpp`. Relevant functions include `ComputeTapleafHash`, `ComputeTapbranchHash`, `ComputeTaprootMerkleRoot`, `VerifyTaprootCommitment` and `VerifyWitnessProgram`.[^core-interp]
- Control block limits are constants in `src/script/interpreter.h`: `TAPROOT_CONTROL_BASE_SIZE` (33), `TAPROOT_CONTROL_NODE_SIZE` (32), `TAPROOT_CONTROL_MAX_NODE_COUNT` (128), `TAPROOT_LEAF_MASK` (`0xfe`) and `TAPROOT_LEAF_TAPSCRIPT` (`0xc0`).[^core-interp-h]
- Bitcoin Core carries BIP-341's wallet vectors as `src/test/data/bip341_wallet_vectors.json`.[^core-vectors]

### BIP-341 test vectors

The official vectors are in `bip-0341/wallet-test-vectors.json` in the BIPs repository.[^vectors] All values are byte strings in hex, not reversed integers.[^bip341] Three of the `scriptPubKey` cases follow. The tweaks and output keys of the first two were independently recomputed for this article and matched.

**Vector 0: no script tree**

    internalPubkey : d6889cb081036e0faefa3a35157ad71086b123b2b144b649798b494c300a961d
    merkleRoot     : (none)
    tweak          : b86e7be8f39bab32a6f2c0443abbc210f0edac0e2c53d501b36b64437d9c6c70
    tweakedPubkey  : 53a1f6e454df1aa2776a2814a721372d6258050de330b3c6d10ee8f4e0dda343
    scriptPubKey   : 512053a1f6e454df1aa2776a2814a721372d6258050de330b3c6d10ee8f4e0dda343
    address        : bc1p2wsldez5mud2yam29q22wgfh9439spgduvct83k3pm50fcxa5dps59h4z5

**Vector 1: one tapscript leaf**

    internalPubkey : 187791b6f712a8ea41c8ecdd0ee77fab3e85263b37e1ec18a3651926b3a6cf27
    leaf script    : 20d85a959b0290bf19bb89ed43c916be835475d013da4b362117393e25a48229b8ac
    leafVersion    : 0xc0 (192)
    leafHash       : 5b75adecf53548f3ec6ad7d78383bf84cc57b55a3127c72b9a2481752dd88b21
    merkleRoot     : 5b75adecf53548f3ec6ad7d78383bf84cc57b55a3127c72b9a2481752dd88b21
    tweak          : cbd8679ba636c1110ea247542cfbd964131a6be84f873f7f3b62a777528ed001
    tweakedPubkey  : 147c9c57132f6e7ecddba9800bb0c4449251c92a1e60371ee77557b6620f3ea3
    scriptPubKey   : 5120147c9c57132f6e7ecddba9800bb0c4449251c92a1e60371ee77557b6620f3ea3
    address        : bc1pz37fc4cn9ah8anwm4xqqhvxygjf9rjf2resrw8h8w4tmvcs0863sa2e586
    controlBlock   : c1187791b6f712a8ea41c8ecdd0ee77fab3e85263b37e1ec18a3651926b3a6cf27

The control block is 33 bytes, so *m* = 0: a single leaf is its own root. Its first byte is `0xc1`, the leaf version `0xc0` plus parity bit 1.[^bip341][^vectors]

**Vector 3: two leaves, one with an unknown leaf version**

    internalPubkey : ee4fe085983462a184015d1f782d6a5f8b9c2b60130aff050ce221ecf3786592
    leaf 0         : version 0xc0, script 20387671353e273264c495656e27e39ba899ea8fee3bb69fb2a680e22093447d48ac
    leaf 1         : version 0xfa, script 06424950333431
    leafHashes     : 8ad69ec7cf41c2a4001fd1f738bf1e505ce2277acdcaa63fe4765192497f47a7
                     f224a923cd0021ab202ab139cc56802ddb92dcfc172b9212261a539df79a112a
    merkleRoot     : 6c2dc106ab816b73f9d07e3cd1ef2c8c1256f519748e0813e4edd2405d277bef
    tweak          : 9e0517edc8259bb3359255400b23ca9507f2a91cd1e4250ba068b4eafceba4a9
    tweakedPubkey  : 712447206d7a5238acc7ff53fbe94a3b64539ad291c7cdbc490b7577e4b17df5
    scriptPubKey   : 5120712447206d7a5238acc7ff53fbe94a3b64539ad291c7cdbc490b7577e4b17df5
    address        : bc1pwyjywgrd0ffr3tx8laflh6228dj98xkjj8rum0zfpd6h0e930h6saqxrrm
    controlBlock 0 : c0ee4fe085983462a184015d1f782d6a5f8b9c2b60130aff050ce221ecf3786592
                     f224a923cd0021ab202ab139cc56802ddb92dcfc172b9212261a539df79a112a
    controlBlock 1 : faee4fe085983462a184015d1f782d6a5f8b9c2b60130aff050ce221ecf3786592
                     8ad69ec7cf41c2a4001fd1f738bf1e505ce2277acdcaa63fe4765192497f47a7

Each control block holds the *other* leaf's hash as its single sibling (*m* = 1).[^bip341][^vectors] The control block lines are wrapped here for width; each is one 65-byte value.

### Recomputing a tweak

This minimal Python reproduces vector 0's tweak. The `lift_x` and point helpers come from BIP-340's reference code.[^bip340]

```python
import hashlib

def tagged_hash(tag: str, msg: bytes) -> bytes:
    t = hashlib.sha256(tag.encode()).digest()
    return hashlib.sha256(t + t + msg).digest()

p = bytes.fromhex("d6889cb081036e0faefa3a35157ad71086b123b2b144b649798b494c300a961d")
print(tagged_hash("TapTweak", p).hex())
# b86e7be8f39bab32a6f2c0443abbc210f0edac0e2c53d501b36b64437d9c6c70
```

## See also

- [Schnorr signature](../Schnorr_signature/)
- [Segregated Witness](../Segregated_Witness/)
- [Bitcoin Script](../Bitcoin_Script/)
- [Multisignature](../Multisignature/)
- [Soft fork and hard fork](../Soft_fork_and_hard_fork/)
- [OP_RETURN](../OP_RETURN/)

## References

[^bip340]: Wuille, Pieter; Nick, Jonas; Ruffing, Tim. ["BIP 340: Schnorr Signatures for secp256k1"](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki). *Bitcoin Improvement Proposals*.
[^bip341]: Wuille, Pieter; Nick, Jonas; Towns, Anthony. ["BIP 341: Taproot: SegWit version 1 spending rules"](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki). *Bitcoin Improvement Proposals*.
[^bip342]: Wuille, Pieter; Nick, Jonas; Towns, Anthony. ["BIP 342: Validation of Taproot Scripts"](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki). *Bitcoin Improvement Proposals*.
[^bip350]: Wuille, Pieter. ["BIP 350: Bech32m format for v1+ witness addresses"](https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki). *Bitcoin Improvement Proposals*.
[^bip360]: Beast, Hunter; Heilman, Ethan; Duke, Isabel Foxen. ["BIP 360: Pay-to-Merkle-Root (P2MR)"](https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki) (Draft). *Bitcoin Improvement Proposals*.
[^vectors]: ["bip-0341/wallet-test-vectors.json"](https://github.com/bitcoin/bips/blob/master/bip-0341/wallet-test-vectors.json). *Bitcoin Improvement Proposals* repository.
[^core-0211]: ["Bitcoin Core 0.21.1 released"](https://bitcoincore.org/en/releases/0.21.1/). *bitcoincore.org*. 1 May 2021.
[^core-interp]: ["src/script/interpreter.cpp"](https://github.com/bitcoin/bitcoin/blob/master/src/script/interpreter.cpp). *Bitcoin Core* source code.
[^core-interp-h]: ["src/script/interpreter.h"](https://github.com/bitcoin/bitcoin/blob/master/src/script/interpreter.h). *Bitcoin Core* source code.
[^core-vectors]: ["src/test/data/bip341_wallet_vectors.json"](https://github.com/bitcoin/bitcoin/blob/master/src/test/data/bip341_wallet_vectors.json). *Bitcoin Core* source code.
[^optech-lockin]: ["Bitcoin Optech Newsletter #153"](https://bitcoinops.org/en/newsletters/2021/06/16/). *Bitcoin Optech*. 16 June 2021.
[^optech-active]: ["Bitcoin Optech Newsletter #175"](https://bitcoinops.org/en/newsletters/2021/11/17/). *Bitcoin Optech*. 17 November 2021.
[^optech-taproot]: ["Taproot"](https://bitcoinops.org/en/topics/taproot/). *Bitcoin Optech* topics.
[^murch-2025]: Erhardt, Mark "Murch" (11 July 2025). ["Re: A Taproot-native (re-)bindable transaction bundle proposal"](https://mirror.b10c.me/lists/bitcoindev/a40c2b1a-1164-4794-a6d5-79d0b97296aa@murch.one/). *bitcoindev mailing list*.
[^fd0-2025]: /dev /fd0 (11 July 2025). ["Re: A Taproot-native (re-)bindable transaction bundle proposal"](https://mirror.b10c.me/lists/bitcoindev/2c16b2d0-ac82-4c10-8404-02001bda2658n@googlegroups.com/). *bitcoindev mailing list*.
[^dune-utxo]: Erhardt, Mark. ["Bitcoin's UTXO set"](https://dune.com/murchandamus/bitcoins-utxo-set). *Dune*. Live dashboard.
[^mainnet-observer]: b10c. ["Output type distribution (count)"](https://mainnet.observer/charts/output-type-distribution-count/). *mainnet.observer*. Live chart.
[^ordinals]: ["Inscriptions"](https://docs.ordinals.com/inscriptions.html). *Ordinal Theory Handbook*.
