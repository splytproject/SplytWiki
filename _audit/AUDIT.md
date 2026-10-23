# SplytWiki article audit

Generated 23 October 2026 from `_wiki/*.md` (102 English articles, 106,811 words). Not published: `_audit/` is excluded from the Jekyll build. Machine-readable copy: [`backlog.json`](backlog.json).

**Method.** Word, section, reference and link counts come from a script. Depth, demand, staleness and the "missing" lists are an editorial judgement made by reading every article in full. **Depth** 1–5: 1 = dictionary definition, 3 = good Wikipedia article, 5 = the best technical explainer on the internet. **Demand** 1–5: how many developers and researchers search for the topic. **Priority** = demand × (5 − depth).

Stale-fact flags are leads to check against sources, not confirmed errors.

## Summary table

| # | Article | Path | Words | Depth | Demand | Priority | Refs | Code | Math | Diagram | Unpinned links |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Bitcoin | `_wiki/Bitcoin.md` | 1,325 | 2 | 5 | **15** | 14 | — | — | yes | 1 |
| 2 | Ethereum | `_wiki/Ethereum.md` | 1,070 | 2 | 5 | **15** | 12 | — | yes | — | — |
| 3 | Smart contract | `_wiki/Smart_contract.md` | 757 | 2 | 5 | **15** | 4 | — | — | — | — |
| 4 | Solana | `_wiki/Solana.md` | 810 | 2 | 5 | **15** | 8 | — | — | — | — |
| 5 | Aave | `_wiki/Aave.md` | 444 | 2 | 4 | **12** | 6 | — | — | — | 1 |
| 6 | Avalanche | `_wiki/Avalanche.md` | 387 | 2 | 4 | **12** | 6 | yes | — | — | — |
| 7 | BNB | `_wiki/BNB.md` | 559 | 2 | 4 | **12** | 9 | — | yes | — | — |
| 8 | Bitcoin Script | `_wiki/Bitcoin_Script.md` | 285 | 2 | 4 | **12** | 0 | yes | — | — | — |
| 9 | Bitcoin node | `_wiki/Bitcoin_node.md` | 412 | 2 | 4 | **12** | 0 | — | — | — | — |
| 10 | Blockchain | `_wiki/Blockchain.md` | 822 | 2 | 4 | **12** | 3 | — | — | yes | — |
| 11 | Blockchain scaling and Layer 2 networks | `_wiki/Blockchain_scaling.md` | 1,251 | 2 | 4 | **12** | 4 | — | — | — | — |
| 12 | Chainlink | `_wiki/Chainlink.md` | 425 | 2 | 4 | **12** | 6 | yes | — | — | — |
| 13 | Cryptocurrency wallet | `_wiki/Cryptocurrency_wallet.md` | 809 | 2 | 4 | **12** | 2 | — | — | yes | 2 |
| 14 | Decentralized finance | `_wiki/Decentralized_finance.md` | 775 | 2 | 4 | **12** | 2 | — | yes | — | — |
| 15 | ECDSA | `_wiki/ECDSA.md` | 416 | 2 | 4 | **12** | 0 | yes | — | — | — |
| 16 | HD wallets and seed phrases | `_wiki/HD_wallets_and_seed_phrases.md` | 452 | 2 | 4 | **12** | 0 | — | — | — | — |
| 17 | Monero | `_wiki/Monero.md` | 493 | 2 | 4 | **12** | 9 | yes | — | — | — |
| 18 | OP_RETURN | `_wiki/OP_RETURN.md` | 357 | 2 | 4 | **12** | 0 | yes | yes | — | — |
| 19 | PSBT | `_wiki/PSBT.md` | 381 | 2 | 4 | **12** | 0 | — | — | — | — |
| 20 | Polygon | `_wiki/Polygon.md` | 378 | 2 | 4 | **12** | 8 | yes | — | — | — |
| 21 | Proof of stake | `_wiki/Proof_of_stake.md` | 726 | 2 | 4 | **12** | 3 | — | — | — | — |
| 22 | Proof of work | `_wiki/Proof_of_work.md` | 380 | 2 | 4 | **12** | 0 | — | — | — | — |
| 23 | Segregated Witness | `_wiki/Segregated_Witness.md` | 340 | 2 | 4 | **12** | 0 | yes | yes | — | — |
| 24 | Stablecoin | `_wiki/Stablecoin.md` | 848 | 2 | 4 | **12** | 2 | — | — | — | — |
| 25 | Tether | `_wiki/Tether.md` | 732 | 2 | 4 | **12** | 9 | — | — | — | — |
| 26 | USD Coin | `_wiki/USD_Coin.md` | 527 | 2 | 4 | **12** | 8 | — | — | — | — |
| 27 | UTXO | `_wiki/UTXO.md` | 411 | 2 | 4 | **12** | 0 | — | — | — | — |
| 28 | Uniswap | `_wiki/Uniswap.md` | 472 | 2 | 4 | **12** | 8 | — | — | — | — |
| 29 | Schnorr signature | `_wiki/Schnorr_signature.md` | 258 | 1 | 3 | **12** | 0 | — | — | — | — |
| 30 | Altcoins and tokens | `_wiki/Altcoins_and_tokens.md` | 1,258 | 2 | 3 | **9** | 3 | — | — | — | — |
| 31 | BIP index | `_wiki/BIP_index.md` | 4,596 | 2 | 3 | **9** | 4 | — | — | — | 216 |
| 32 | Cardano | `_wiki/Cardano.md` | 474 | 2 | 3 | **9** | 9 | yes | — | — | — |
| 33 | Chain reorganization | `_wiki/Chain_reorganization.md` | 579 | 2 | 3 | **9** | 0 | — | — | — | — |
| 34 | Cosmos | `_wiki/Cosmos.md` | 391 | 2 | 3 | **9** | 9 | yes | — | — | 1 |
| 35 | Cryptocurrency | `_wiki/Cryptocurrency.md` | 1,002 | 2 | 3 | **9** | 4 | — | — | — | — |
| 36 | Cryptocurrency history and milestones | `_wiki/Cryptocurrency_history.md` | 1,281 | 2 | 3 | **9** | 5 | — | — | — | 1 |
| 37 | Cryptocurrency regulation | `_wiki/Cryptocurrency_regulation.md` | 1,500 | 2 | 3 | **9** | 9 | — | — | — | — |
| 38 | Dai | `_wiki/Dai.md` | 498 | 2 | 3 | **9** | 7 | — | — | — | — |
| 39 | Decentralized application | `_wiki/Decentralized_application.md` | 1,138 | 2 | 3 | **9** | 3 | — | — | — | — |
| 40 | Dogecoin | `_wiki/Dogecoin.md` | 442 | 2 | 3 | **9** | 6 | yes | — | — | 1 |
| 41 | Filecoin | `_wiki/Filecoin.md` | 413 | 2 | 3 | **9** | 8 | — | — | — | — |
| 42 | KYC and AML | `_wiki/KYC_and_AML.md` | 1,502 | 2 | 3 | **9** | 7 | — | — | — | — |
| 43 | Multisignature | `_wiki/Multisignature.md` | 390 | 2 | 3 | **9** | 0 | yes | — | — | — |
| 44 | Non-fungible token | `_wiki/Non-fungible_token.md` | 935 | 2 | 3 | **9** | 3 | — | — | — | — |
| 45 | Polkadot | `_wiki/Polkadot.md` | 436 | 2 | 3 | **9** | 8 | — | — | — | — |
| 46 | Satoshi Nakamoto | `_wiki/Satoshi_Nakamoto.md` | 672 | 2 | 3 | **9** | 5 | — | — | — | — |
| 47 | Silent payments | `_wiki/Silent_payments.md` | 456 | 2 | 3 | **9** | 0 | — | — | — | — |
| 48 | Soft fork and hard fork | `_wiki/Soft_fork_and_hard_fork.md` | 418 | 2 | 3 | **9** | 0 | — | — | — | — |
| 49 | Stellar | `_wiki/Stellar.md` | 418 | 2 | 3 | **9** | 5 | yes | — | — | — |
| 50 | Terra | `_wiki/Terra.md` | 530 | 2 | 3 | **9** | 7 | — | — | — | — |
| 51 | Toncoin | `_wiki/Toncoin.md` | 457 | 2 | 3 | **9** | 5 | — | — | — | — |
| 52 | Tron | `_wiki/Tron.md` | 457 | 2 | 3 | **9** | 7 | yes | — | — | — |
| 53 | XRP | `_wiki/XRP.md` | 631 | 2 | 3 | **9** | 8 | yes | — | — | — |
| 54 | Zcash | `_wiki/Zcash.md` | 557 | 2 | 3 | **9** | 7 | — | — | — | — |
| 55 | Bybit hack | `_wiki/Bybit_hack.md` | 1,174 | 3 | 4 | **8** | 12 | — | — | — | — |
| 56 | Lightning Network | `_wiki/Lightning_Network.md` | 1,053 | 3 | 4 | **8** | 30 | yes | — | — | 13 |
| 57 | Lightning routing | `_wiki/Lightning_routing.md` | 1,382 | 3 | 4 | **8** | 18 | yes | — | — | 12 |
| 58 | Ordinals, inscriptions and Runes | `_wiki/Ordinals_inscriptions_and_Runes.md` | 1,376 | 3 | 4 | **8** | 19 | yes | — | — | 5 |
| 59 | Seed phrases and self-custody security | `_wiki/Seed_phrases_and_self-custody_security.md` | 1,763 | 3 | 4 | **8** | 20 | yes | — | — | 4 |
| 60 | Bitcoin Core release history | `_wiki/Bitcoin_Core_release_history.md` | 1,858 | 3 | 3 | **6** | 43 | — | — | — | 18 |
| 61 | Bitcoin halving | `_wiki/Bitcoin_halving.md` | 583 | 3 | 3 | **6** | 3 | — | yes | — | 1 |
| 62 | Covenant proposals | `_wiki/Covenant_proposals.md` | 1,590 | 3 | 3 | **6** | 22 | — | — | — | 9 |
| 63 | Cryptocurrency regulation and tax in the European Union | `_wiki/Cryptocurrency_regulation_and_tax_in_the_European_Union.md` | 1,045 | 3 | 3 | **6** | 10 | — | — | — | — |
| 64 | Cryptocurrency regulation and tax in the United Arab Emirates | `_wiki/Cryptocurrency_regulation_and_tax_in_the_United_Arab_Emirates.md` | 1,027 | 3 | 3 | **6** | 11 | — | — | — | — |
| 65 | Cryptocurrency regulation and tax in the United States | `_wiki/Cryptocurrency_regulation_and_tax_in_the_United_States.md` | 1,422 | 3 | 3 | **6** | 23 | — | — | — | — |
| 66 | Cryptocurrency scams | `_wiki/Cryptocurrency_scams.md` | 2,093 | 3 | 3 | **6** | 23 | — | — | — | — |
| 67 | Cryptocurrency taxation | `_wiki/Cryptocurrency_taxation.md` | 1,601 | 3 | 3 | **6** | 5 | — | — | — | — |
| 68 | Decentralized autonomous organization | `_wiki/Decentralized_autonomous_organization.md` | 3,816 | 3 | 3 | **6** | 11 | — | yes | — | — |
| 69 | FTX collapse | `_wiki/FTX_collapse.md` | 1,325 | 3 | 3 | **6** | 14 | — | — | — | — |
| 70 | Non-fungible tokens: ERC-721 and ERC-1155 standards | `_wiki/NFT_standards.md` | 3,054 | 3 | 3 | **6** | 14 | yes | — | yes | — |
| 71 | Testnet | `_wiki/Testnet.md` | 1,380 | 3 | 3 | **6** | 13 | yes | — | — | 13 |
| 72 | How to contribute to Bitcoin | `_wiki/how-to-contribute-to-bitcoin.md` | 1,706 | 3 | 3 | **6** | 0 | yes | — | — | 1 |
| 73 | Algorand | `_wiki/Algorand.md` | 402 | 2 | 2 | **6** | 8 | yes | — | — | — |
| 74 | Bitcoin Cash | `_wiki/Bitcoin_Cash.md` | 427 | 2 | 2 | **6** | 5 | — | — | — | — |
| 75 | Crypto Anarchism | `_wiki/Crypto_Anarchism.md` | 1,060 | 2 | 2 | **6** | 0 | — | — | — | — |
| 76 | Crypto glossary | `_wiki/Crypto_glossary.md` | 1,803 | 2 | 2 | **6** | 11 | — | — | — | — |
| 77 | Cryptocurrency in Russia | `_wiki/Crypto_in_Russia.md` | 1,018 | 2 | 2 | **6** | 5 | — | — | — | — |
| 78 | Ethereum Classic | `_wiki/Ethereum_Classic.md` | 435 | 2 | 2 | **6** | 7 | — | — | — | — |
| 79 | Fiat currency | `_wiki/Fiat_currency.md` | 1,104 | 2 | 2 | **6** | 0 | — | — | — | — |
| 80 | Litecoin | `_wiki/Litecoin.md` | 415 | 2 | 2 | **6** | 5 | yes | — | — | 1 |
| 81 | Namecoin | `_wiki/Namecoin.md` | 358 | 2 | 2 | **6** | 3 | yes | — | — | — |
| 82 | Tezos | `_wiki/Tezos.md` | 358 | 2 | 2 | **6** | 6 | yes | — | — | — |
| 83 | Taproot | `_wiki/Taproot.md` | 2,488 | 4 | 5 | **5** | 18 | yes | — | — | 9 |
| 84 | Bitcoin mining and difficulty adjustment | `_wiki/Bitcoin_mining_and_difficulty_adjustment.md` | 2,186 | 4 | 4 | **4** | 28 | yes | yes | — | 12 |
| 85 | Mempool | `_wiki/Mempool.md` | 3,002 | 4 | 4 | **4** | 36 | yes | — | — | 25 |
| 86 | Quantum computing and Bitcoin | `_wiki/Quantum_computing_and_Bitcoin.md` | 1,283 | 4 | 4 | **4** | 10 | yes | — | — | 4 |
| 87 | Bitcoin institutionalization debate | `_wiki/Bitcoin_institutionalization_debate.md` | 1,764 | 3 | 2 | **4** | 23 | — | — | — | 1 |
| 88 | Blockchain gaming (GameFi) | `_wiki/Blockchain_gaming.md` | 3,344 | 3 | 2 | **4** | 10 | — | — | — | — |
| 89 | Cryptocurrency regulation and tax in Japan | `_wiki/Cryptocurrency_regulation_and_tax_in_Japan.md` | 1,024 | 3 | 2 | **4** | 10 | — | — | — | — |
| 90 | Cryptocurrency regulation and tax in Singapore | `_wiki/Cryptocurrency_regulation_and_tax_in_Singapore.md` | 1,026 | 3 | 2 | **4** | 11 | — | — | — | — |
| 91 | Cryptocurrency regulation and tax in the United Kingdom | `_wiki/Cryptocurrency_regulation_and_tax_in_the_United_Kingdom.md` | 1,095 | 3 | 2 | **4** | 13 | — | — | — | — |
| 92 | AssumeUTXO | `_wiki/AssumeUTXO.md` | 1,120 | 4 | 3 | **3** | 13 | yes | — | — | 8 |
| 93 | Bitcoin exchange-traded funds | `_wiki/Bitcoin_exchange-traded_funds.md` | 1,739 | 4 | 3 | **3** | 36 | — | — | — | — |
| 94 | Lightning channels | `_wiki/Lightning_channels.md` | 1,452 | 4 | 3 | **3** | 14 | yes | — | — | 9 |
| 95 | OP_RETURN policy dispute (2025–2026) | `_wiki/OP_RETURN_policy_dispute.md` | 2,020 | 4 | 3 | **3** | 27 | — | — | — | 2 |
| 96 | Partial UTXO set | `_wiki/Partial_UTXO_set.md` | 475 | 2 | 1 | **3** | 0 | — | — | — | — |
| 97 | BIP-324 encrypted P2P transport | `_wiki/BIP-324_encrypted_transport.md` | 1,055 | 4 | 2 | **2** | 10 | yes | — | — | 10 |
| 98 | BIP-350: Bech32m format for v1+ witness addresses | `_wiki/BIP-350.md` | 1,071 | 4 | 2 | **2** | 13 | yes | — | — | 8 |
| 99 | Compact block filters | `_wiki/Compact_block_filters.md` | 1,271 | 4 | 2 | **2** | 13 | yes | — | — | 13 |
| 100 | Cryptocurrency regulation and tax in India | `_wiki/Cryptocurrency_regulation_and_tax_in_India.md` | 1,357 | 4 | 2 | **2** | 20 | — | — | — | — |
| 101 | Miniscript and output descriptors | `_wiki/Miniscript_and_output_descriptors.md` | 1,396 | 4 | 2 | **2** | 21 | yes | — | — | 19 |
| 102 | Mt. Gox collapse | `_wiki/Mt_Gox_collapse.md` | 1,282 | 4 | 2 | **2** | 18 | — | — | — | 1 |

## Site structure

**Repository map** (10 lines):

1. Jekyll 3.10 on GitHub Pages; `_config.yml` sets `baseurl: /SplytWiki`, kramdown (GFM) and three whitelisted plugins (seo-tag, sitemap, redirect-from).
2. English articles are the `wiki` collection in `_wiki/*.md`, output to `/wiki/<Title>/`; defaults give them `layout: article`, `has_toc: true`.
3. Front matter: `title`, `description`, `aliases`, `categories`, `updated`/`last_modified`, optional `infobox` (`image`, `caption`, `rows` with `header:` rows), `hatnote`, `seo_title`.
4. `_layouts/article.html` renders title bar, tabs, hatnote, `_includes/infobox.html`, the body and the category box. `default.html` wraps everything in the Vector-style shell.
5. References are kramdown footnotes (`[^key]` / `[^key]: …`); `assets/js/splytwiki.js` moves the footnote list under the `## References` heading and styles it Wikipedia-style.
6. The glossary is a table in `_wiki/Crypto_glossary.md` plus 120 one-term pages in `_wiki/glossary/` using `_layouts/glossary.html` (`glossary: true`, excluded from article counts).
7. `/de` and `/es` hold translated project pages and two translated articles each (Bitcoin, Ethereum), linked by `ref:`; interface strings are in `_data/i18n.yml`.
8. `index.html`, `contents.html`, `categories.html`, `search.html`, `search.json` and `random.html` are generated by Liquid from the collection; `_data/mainpage.yml` drives the Main Page.
9. All CSS is in `assets/css/splytwiki.css`, all JS in `assets/js/splytwiki.js`; images and coin emblems in `assets/img/`.
10. Maintenance scripts and earlier audits are in `reports/` (not published); this audit lives in `_audit/` (not published).

### Damage found and repaired during this audit

- **Merge `9f40fcd`** ("Merge branch 'main' into protocol-deep-dive", 21 Oct 2026) resolved conflicts in favour of older `main` text in 22 articles. It erased most of the deep-dive work on [Mempool](../_wiki/Mempool.md) (3,383 → 449 words), [Taproot](../_wiki/Taproot.md) (2,826 → 784) and [Bitcoin institutionalization debate](../_wiki/Bitcoin_institutionalization_debate.md) (2,361 → 655). It also deleted all 13 reference definitions from [Testnet](../_wiki/Testnet.md), and the live page showed raw `[^bip325]` markers. Elsewhere it re-added "(Add sourcing where appropriate…)" placeholders and links to non-existent pages. All 22 files were restored to the deep-dive versions; later edits to two of them were re-applied.
- **[PSBT](../_wiki/PSBT.md)** had contained a copy of the UTXO article since commit `c96d085`, an API upload written to the wrong path. The original PSBT article was restored from `4fe2fd3`. It is still thin.

### Duplicate or overlapping articles

| Articles | Overlap | Recommendation |
|---|---|---|
| [HD wallets and seed phrases](../_wiki/HD_wallets_and_seed_phrases.md) · [Seed phrases and self-custody security](../_wiki/Seed_phrases_and_self-custody_security.md) · [Cryptocurrency wallet](../_wiki/Cryptocurrency_wallet.md) | BIP-39 mnemonics explained three times | Keep the derivation mechanics (BIP-32/39/44/84/86) in HD wallets, the operational security in Seed phrases, and make Cryptocurrency wallet a hub. |
| [Non-fungible token](../_wiki/Non-fungible_token.md) · [NFT standards](../_wiki/NFT_standards.md) | ERC-721/1155 described in both | Move all standard detail to NFT standards; keep the overview, market history and criticism in Non-fungible token. |
| [Proof of work](../_wiki/Proof_of_work.md) · [Bitcoin mining and difficulty adjustment](../_wiki/Bitcoin_mining_and_difficulty_adjustment.md) | Retargeting explained in both | Proof of work keeps the general concept; difficulty maths and the timewarp issue live only in the mining article. |
| [Cryptocurrency](../_wiki/Cryptocurrency.md) · [Cryptocurrency history](../_wiki/Cryptocurrency_history.md) · [Altcoins and tokens](../_wiki/Altcoins_and_tokens.md) | Overlapping history and taxonomy | Cryptocurrency becomes the hub; history moves to Cryptocurrency history. |
| [Smart contract](../_wiki/Smart_contract.md) · [Decentralized application](../_wiki/Decentralized_application.md) | Both define on-chain programs | Smart contract owns execution (EVM, gas, storage); Decentralized application covers front ends, indexers and trust assumptions. |
| [Cryptocurrency regulation](../_wiki/Cryptocurrency_regulation.md) · [Cryptocurrency taxation](../_wiki/Cryptocurrency_taxation.md) · 7 country pages | Country summaries repeated in the overview pages | Overview pages keep only comparative tables and link to country pages. [Crypto in Russia](../_wiki/Crypto_in_Russia.md) should be renamed to the "Cryptocurrency regulation and tax in Russia" pattern. |
| [UTXO](../_wiki/UTXO.md) · [Partial UTXO set](../_wiki/Partial_UTXO_set.md) · [AssumeUTXO](../_wiki/AssumeUTXO.md) | Partial UTXO set is a niche, mostly hypothetical topic | Merge Partial UTXO set into UTXO as a section about pruning, utreexo and `dumptxoutset`. |

### Articles that should be split

- **[Proof of stake](../_wiki/Proof_of_stake.md)** → a general overview plus **Ethereum proof of stake (Gasper)**, which covers committees, LMD-GHOST, Casper FFG, slashing and the inactivity leak. Prompt 4 does this.
- **[Mempool](../_wiki/Mempool.md)** → keep the mempool article, plus a separate **Transaction relay policy** article covering RBF, full-RBF, package relay, TRUC/v3 and cluster mempool.
- **[Ethereum](../_wiki/Ethereum.md)** → the coin page stays; the mechanics move to dedicated **Ethereum Virtual Machine** and **EIP-1559 fee market** articles.
- **[Blockchain scaling](../_wiki/Blockchain_scaling.md)** → a hub, plus **Rollups** and **Data availability** deep dives.

### Important topics with no article

| Topic | Why it matters | Nearest existing page |
|---|---|---|
| MuSig2 and FROST | Key aggregation and threshold Schnorr; used in wallets and Lightning | Schnorr signature |
| Ethereum Virtual Machine and gas | Execution model behind every EVM chain | Smart contract |
| EIP-1559 and the fee market | Base fee, burn and priority fee mechanics | Ethereum |
| MEV (maximal extractable value) | Sandwiching, back-running, the searcher–builder pipeline | Decentralized finance |
| Proposer–builder separation (PBS) and MEV-Boost | Relay trust, censorship and ePBS (EIP-7732) | none |
| Rollups (optimistic and ZK) | Fraud proofs, validity proofs, sequencers, exits | Blockchain scaling |
| Data availability and blobs (EIP-4844, PeerDAS) | Blob fees and data-availability sampling | Blockchain scaling |
| Account abstraction (ERC-4337, EIP-7702) | Smart accounts, paymasters, bundlers | Cryptocurrency wallet |
| Merkle trees and Merkle–Patricia tries | Block commitments, SPV and state proofs | Blockchain |
| Bitcoin transaction format | Serialization, weight, sighash types | UTXO, Segregated Witness |
| Replace-by-fee and package relay | Fee bumping, pinning, TRUC (v3) transactions | Mempool |
| Liquid staking and restaking | Lido, EigenLayer, centralisation debate | Proof of stake |
| Cross-chain bridges | The largest source of hack losses | Bybit hack |
| Zero-knowledge proofs | SNARKs and STARKs; basis of ZK rollups and Zcash | Zcash |
| Hash functions (SHA-256, Keccak-256) | Proof of work, addresses, commitments | Proof of work |
| Difficulty adjustment (standalone) | Retarget formula, 4× clamp, timewarp | Bitcoin mining and difficulty adjustment |

### Orphan pages (no inbound links from other articles or the Main Page)

- [BNB](../_wiki/BNB.md)
- [Crypto Anarchism](../_wiki/Crypto_Anarchism.md)
- [Cryptocurrency in Russia](../_wiki/Crypto_in_Russia.md)
- [Ethereum Classic](../_wiki/Ethereum_Classic.md)
- [Filecoin](../_wiki/Filecoin.md)
- [Namecoin](../_wiki/Namecoin.md)
- [Polygon](../_wiki/Polygon.md)
- [Toncoin](../_wiki/Toncoin.md)

### Link rot

421 links in 30 articles point at `master`/`main`. Worst: BIP index (216), Mempool (25), Miniscript and output descriptors (19), Bitcoin Core release history (18), Lightning Network (13), Testnet (13), Compact block filters (13), Lightning routing (12). Prompt 7 rewrites them as pinned permalinks.

### House-style debt

`reports/check_style.py` flags articles written before the 25-word sentence rule; the per-coin pages, Bitcoin, Ethereum, Solana and the restored articles pass. Rebuilt articles must pass before merging.


## Per-article notes

### Bitcoin

`_wiki/Bitcoin.md` · 1,325 words · 9 H2 / 6 H3 · 14 refs · depth 2 · demand 5 · **priority 15**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: yes. Links to source repos/specs: 3 (0 pinned, 1 on master/main). Inbound links: 25.
- Missing (senior-engineer view): UTXO model, transaction structure and Script validation (how a spend is actually checked); Fee market, mempool policy and the long-run security budget as the subsidy halves; Current development debates: 2025 OP_RETURN/Bitcoin Core v30 vs Knots policy fight, covenant proposals (CTV/CSFS), post-quantum migration (BIP-360).
- Assessment: Accurate, well-sourced general overview (history, supply, PoW, upgrades, regulation table) but thin on protocol internals; reads like a short Wikipedia lead plus sections rather than a technical reference. No factual errors spotted for October 2026.

### Ethereum

`_wiki/Ethereum.md` · 1,070 words · 9 H2 / 8 H3 · 12 refs · depth 2 · demand 5 · **priority 15**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: yes. Diagram: —. Links to source repos/specs: 4 (0 pinned, 0 on master/main). Inbound links: 26.
- Missing (senior-engineer view): State and execution internals: Merkle-Patricia state trie, state growth, statelessness/Verkle or binary-tree plans, and the execution/consensus client split via the Engine API; MEV and block building: proposer-builder separation via mev-boost/relays, ePBS (EIP-7732), censorship and inclusion lists (FOCIL); Monetary policy and the post-Fusaka roadmap: issuance curve vs stake, net supply since Dencun, gas-limit increases, blob throughput targets and Glamsterdam.
- Possibly stale: The upgrade table ends at Pectra (May 2025). Fusaka activated on 3 December 2025, with PeerDAS (EIP-7594) and blob-parameter-only forks, and should be listed as of October 2026. / 'Validators must deposit 32 ETH' is outdated. Since Pectra (EIP-7251), 32 ETH is the activation minimum and the maximum effective balance is 2,048 ETH for compounding (0x02) validators. / 'Two kinds of accounts: EOAs ... and contract accounts' ignores EIP-7702 (Pectra), which lets EOAs set delegated code. The clean EOA/contract split no longer holds.
- Assessment: A readable, mostly accurate general overview at the level of a short Wikipedia intro. It stops at Pectra, and it is thin on the technical subjects protocol engineers care about: state, MEV, the client architecture and the roadmap.

### Smart contract

`_wiki/Smart_contract.md` · 757 words · 6 H2 / 1 H3 · 4 refs · depth 2 · demand 5 · **priority 15**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 26.
- Missing (senior-engineer view): EVM execution-model details: stack, memory, storage and calldata, the CALL/DELEGATECALL/STATICCALL semantics, atomic revert, the gas schedule and storage costs; Upgradeability and account models: proxy patterns (EIP-1967, UUPS), account abstraction (ERC-4337, EIP-7702 from Pectra), and SELFDESTRUCT neutering (EIP-6780); Non-EVM designs and adversarial environment: Solana's account model, Move resources, Cardano eUTXO, plus MEV/front-running, flash loans and composability risk.
- Assessment: A readable general-audience overview with accurate history and incidents (The DAO, Parity). For one of the highest-demand developer topics, it is far too shallow on execution semantics and security patterns.

### Solana

`_wiki/Solana.md` · 810 words · 9 H2 / 4 H3 · 8 refs · depth 2 · demand 5 · **priority 15**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 8.
- Missing (senior-engineer view): Transaction pipeline and fee market: leader schedule, QUIC and stake-weighted QoS, local fee markets and priority fees, compute-unit block limits, Jito bundles and MEV; Account and runtime model in depth: SVM, rent, PDAs, cross-program invocation, Token-2022, and how account locks drive Sealevel parallelism; Consensus and client roadmap: Alpenglow (Votor/Rotor) finality, Firedancer/Frankendancer, and validator economics (vote costs, inflation debate around SIMD-0228).
- Possibly stale: Describes consensus as PoH working with Tower BFT, with no mention of Alpenglow (SIMD-0326, approved by validator vote in September 2025), which replaces Tower BFT and PoH-based voting; its rollout status should be stated as of October 2026 / Firedancer is described only as 'developed' by Jump; Frankendancer ran on mainnet from 2024 and the full Firedancer client reached mainnet around December 2025, so client-diversity status is out of date / Mentions only the 2023 Saga phone; Solana Mobile's second device (Seeker) shipped in 2025
- Assessment: A readable overview of a very high-demand topic, but the technology section is one-liners, and it predates the 2025 Alpenglow and Firedancer milestones. It has the biggest gap between demand and depth in this batch.

### Aave

`_wiki/Aave.md` · 444 words · 8 H2 / 0 H3 · 6 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 2 (0 pinned, 1 on master/main). Inbound links: 2.
- Missing (senior-engineer view): Interest-rate model math (utilisation curve with optimal-utilisation kink, slopes, reserve factor) and how liquidity/variable rates are indexed; Liquidation mechanics in detail: LTV vs liquidation threshold, close factor, liquidation bonus, Chainlink oracle dependency and price caps, E-mode/isolation mode; Concrete incident history and v4 architecture: CRV/Mango-style bad-debt events (Nov 2022), GHO facilitators and peg history, and how v4 hubs and spokes separate liquidity from risk.
- Possibly stale: 'Safety Module. AAVE holders can stake tokens to cover shortfalls' describes the pre-2025 backstop; in 2025 the DAO rolled out 'Umbrella', in which staked aTokens/GHO cover bad debt per reserve, so the stkAAVE Safety Module is no longer the main shortfall cover. / Developer notes describe only the v3 Pool interface even though the article says v4 (hub-and-spoke) is live on Ethereum since March 2026; v4 uses different Hub/Spoke contracts, so the developer guidance is out of date. / Article omits the 2025 'Aavenomics' token buyback programme and fee switch, which changed AAVE's token economics before October 2026.
- Assessment: A short, accurate encyclopedia stub with a useful timeline and a governance update, but the 'How it works' section is four one-line definitions. A protocol engineer would learn almost nothing about rates, liquidations or v4 from it.

### Avalanche

`_wiki/Avalanche.md` · 387 words · 8 H2 / 0 H3 · 6 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: —. Trade-offs, attacks or debates: —.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 1.
- Missing (senior-engineer view): Snowball/Snowflake parameters (k, alpha, beta), the probabilistic safety and liveness guarantees, and how Snowman++ proposer windows work; Etna/L1 economics: ACP-77 continuous validator fee instead of the 2,000 AVAX primary-network stake, P-Chain validator management, and the Teleporter/ICM/Warp cross-L1 messaging; C-Chain specifics: coreth/subnet-evm, the dynamic fee mechanism, finality times, and the absence of stake slashing (uptime-gated rewards only).
- Possibly stale: Infobox and text give consensus as 'Snow protocols (Avalanche and Snowman)': the Cortina upgrade (April 2023) linearised the X-Chain, so the DAG-based Avalanche consensus no longer runs on the primary network. All three chains now use Snowman. / Presents Avalanche9000 (Etna, Dec 2024) as the latest upgrade. Octane (ACP-176 dynamic C-Chain fees, April 2025) and Granite (late 2025, including ACP-226 dynamic block times and ACP-204 secp256r1 precompile) have shipped since. / The claim that 'Bitwise's BAVA' was the first US spot AVAX ETF needs checking. My recollection is that VanEck's Avalanche ETF (VAVX) launched first, in early 2026.
- Assessment: A thin coin-profile stub. Mechanics are one-line definitions, and the consensus description predates Cortina. The criticism section is two non-technical bullets and leaves out Snow's safety assumptions entirely.

### BNB

`_wiki/BNB.md` · 559 words · 8 H2 / 0 H3 · 9 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: yes. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 0.
- Missing (senior-engineer view): PoSA internals: validator-set size and election per epoch, the Parlia engine, BEP-126 fast finality and slashing rules; BSC's MEV/proposer-builder market (BEP-322 builder API) and how centralized block building works in practice; The wider BNB stack, opBNB (OP Stack L2) and BNB Greenfield, plus how the Auto-Burn formula is actually computed.
- Possibly stale: Validators 'take turns producing blocks every few seconds': BSC block time was cut from 3 s to 1.5 s by the Lorentz hard fork (April 2025) and to about 0.75 s by Maxwell (mid-2025), so 'every few seconds' is out of date. / 'The two chains were merged under the name BNB Chain in 2022': 2022 was a rebrand only. Binance Chain became BNB Beacon Chain, and it was actually retired via the BNB Chain Fusion (BC Fusion) migration in 2024, which moved staking and governance onto BSC. The article never mentions the Beacon Chain sunset. / Governance says BEPs are 'BNB Chain Evolution Proposals' voted by validators and stakers, which still reads like the pre-Fusion dual-chain setup. After 2024, staking and governance run in BSC system contracts (native staking, on-chain governance).
- Assessment: Covers history and regulation (plea deal, SEC dismissal, pardon) accurately but is thin on mechanics. Consensus gets one sentence, and chain parameters (block time, Beacon Chain sunset) are out of date for 2026.

### Bitcoin Script

`_wiki/Bitcoin_Script.md` · 285 words · 5 H2 / 0 H3 · 0 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: yes. Trade-offs, attacks or debates: —.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 11.
- Missing (senior-engineer view): Execution model details: scriptSig/scriptPubKey/witness evaluation order, P2SH redeem-script and witness-script execution, the alt stack, conditionals, and the clean-stack, MINIMALIF and NULLDUMMY rules; Limits and disabled opcodes: 520-byte push, 201-opcode and 10k-byte script limits, sigops, the opcodes disabled in 2010 (OP_CAT and others), and tapscript changes (OP_CHECKSIGADD, OP_SUCCESSx, validation-weight budget); Timelocks and covenant debates: CLTV/CSV mechanics plus the ongoing OP_CAT/CTV/CSFS covenant soft-fork proposals.
- Possibly stale: The success condition ('leaves a true value on top of the stack') is incomplete: SegWit v0 and tapscript also require a clean stack (exactly one true element) by consensus, and legacy scripts have it as a policy rule.
- Assessment: A short stub with one worked P2PKH example and a table of output types. The Notes section still contains a placeholder ('Add sourcing where appropriate'), and the article is far too thin for one of the most-searched Bitcoin developer topics.

### Bitcoin node

`_wiki/Bitcoin_node.md` · 412 words · 6 H2 / 0 H3 · 0 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: —. Trade-offs, attacks or debates: —.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 12.
- Missing (senior-engineer view): Sync internals: headers-first with headers presync (anti-DoS), assumevalid, assumeUTXO background validation, dbcache/UTXO flushing and realistic disk/time numbers; P2P layer: inbound/outbound/block-relay-only connections, eclipse-attack defences, BIP-324 v2 encrypted transport, compact blocks (BIP-152); Mempool/relay policy vs consensus (standardness, RBF/TRUC, OP_RETURN datacarrier policy debate) and alternative implementations (Knots, btcd, libbitcoinkernel).
- Possibly stale: Says IBD validates 'transaction scripts' for each block and that archival/pruned nodes 'validate everything'; by default Bitcoin Core skips script/signature checks for blocks buried under the hard-coded assumevalid block, which the article never mentions
- Assessment: Accurate but skeletal stub (~500 words) with an explicit 'add sourcing' placeholder; the four-step IBD list and modes table are correct at a dictionary level but give a developer almost nothing on how validation, storage or networking actually work.

### Blockchain

`_wiki/Blockchain.md` · 822 words · 7 H2 / 3 H3 · 3 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: yes. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 20.
- Missing (senior-engineer view): Fork choice and finality: probabilistic (longest/heaviest chain, confirmation depth) versus deterministic BFT finality, and reorg risk; Merkle proofs and light clients (SPV), plus the account model versus the UTXO state model; Scaling and data concerns: state growth, data availability, and rollups/sharding as responses to the trilemma.
- Assessment: A clean, accurate intro (Haber–Stornetta history, hash linking, tamper-evidence framing) at the level of a short encyclopedia entry. It is too shallow for engineers and has only three references.

### Blockchain scaling and Layer 2 networks

`_wiki/Blockchain_scaling.md` · 1,251 words · 11 H2 / 0 H3 · 4 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 11.
- Missing (senior-engineer view): Data availability in depth: blobs vs calldata economics, EIP-4844 blob parameters, PeerDAS/data availability sampling (Fusaka, Dec 2025) and alt-DA/validiums; Concrete proof-system mechanics: interactive bisection fraud proofs and permissionless proving, challenge periods (~7 days), forced inclusion/escape hatches, and L2BEAT 'stages' as a security framework; Other scaling families and the scalability trilemma: payment/state channels (Lightning), sharding history, based/native rollups, shared sequencing and L2 interoperability.
- Assessment: Clear, careful conceptual explainer that rightly stresses execution/settlement/DA separation and exit guarantees. However, it avoids every concrete number, protocol or named system beyond Solana, so it reads as general reading rather than a technical reference.

### Chainlink

`_wiki/Chainlink.md` · 425 words · 8 H2 / 0 H3 · 6 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 1.
- Missing (senior-engineer view): OCR protocol internals: leader rotation, f < n/3 fault tolerance, median aggregation, report signing and transmission, plus deviation-threshold and heartbeat parameters per feed; Oracle failure modes and incidents, such as the minAnswer circuit-breaker during the LUNA collapse (May 2022, Venus/Blizz losses) and integrator pitfalls around L2 sequencer-uptime feeds; Newer products and trust model: Data Streams (pull-based), CCIP's Risk Management Network, the CRE runtime, SVR, and who controls the feed multisigs and how many signers they need.
- Possibly stale: Says 'LINK holders and node operators can stake LINK, which can be penalised'. Under Staking v0.2, only node-operator stake is slashable (tied to ETH/USD feed alerting). Community stakers are not slashed. / 'CCIP in 2023' is only partly right: CCIP opened in early access in July 2023 and reached general availability in April 2024.
- Assessment: A short profile that names the components without explaining how any of them work. The centralisation and dependence critiques are correct but unquantified, and the staking slashing description is inaccurate.

### Cryptocurrency wallet

`_wiki/Cryptocurrency_wallet.md` · 809 words · 5 H2 / 4 H3 · 2 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: yes. Links to source repos/specs: 4 (0 pinned, 2 on master/main). Inbound links: 17.
- Missing (senior-engineer view): Derivation paths and standards (BIP44/49/84/86, output descriptors, xpub watch-only), and how PSBT-based air-gapped signing works; Account abstraction (ERC-4337, EIP-7702 from the May 2025 Pectra upgrade), passkey wallets, and MPC/threshold-signature wallets against on-chain multisig; Backup schemes beyond plain BIP39: passphrases (25th word), SLIP-39/Shamir shares, and the risks of seed-generation entropy.
- Assessment: A clear, accurate introductory article on keys, seeds, wallet types and threats. It stays at an encyclopedia-summary level, with few citations and no modern Ethereum wallet architecture.

### Decentralized finance

`_wiki/Decentralized_finance.md` · 775 words · 6 H2 / 4 H3 · 2 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: yes. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 18.
- Missing (senior-engineer view): MEV: sandwich attacks, arbitrage, liquidation races, order-flow auctions and loss-versus-rebalancing for LPs; Oracle and liquidation-engine design: Chainlink vs TWAP, health factors, liquidation bonuses, bad-debt handling and governance/admin-key upgrade risk; Post-2022 landscape: liquid staking and restaking, tokenised treasuries/RWAs, on-chain perps (e.g. Hyperliquid), intent-based trading and L2 fragmentation.
- Possibly stale: History stops at 2022 and still frames Dai/MakerDAO as current without noting the August 2024 rebrand to Sky and the USDS stablecoin / Describes only Uniswap's original x*y=k design; concentrated liquidity (Uniswap v3, 2021) and v4 hooks (live since early 2025) now dominate DEX design and are not mentioned
- Assessment: Clean general-audience overview that correctly sketches AMMs, overcollateralised lending and flash loans, but it is short, lightly sourced (two references) and frozen around 2022.

### ECDSA

`_wiki/ECDSA.md` · 416 words · 6 H2 / 0 H3 · 0 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 5.
- Missing (senior-engineer view): The verification equation (u1, u2) and public-key recovery (compact signatures, message signing), plus low-R grinding used by Bitcoin Core; Concrete nonce-failure incidents and lattice/biased-nonce attacks (2013 Android SecureRandom, 2014 blockchain.info, Polynonce research) with sources; Why ECDSA is awkward for multi-party signing (threshold ECDSA/MPC, adaptor signatures) compared with Schnorr/MuSig2.
- Assessment: Correct and concise on signing, nonce reuse recovery, RFC 6979, BIP-66 and low-S, but it is a stub: no verification math, no incident history, and it still contains an '(Add sourcing...)' placeholder and underscore-style link text.

### HD wallets and seed phrases

`_wiki/HD_wallets_and_seed_phrases.md` · 452 words · 8 H2 / 0 H3 · 0 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 5.
- Missing (senior-engineer view): BIP-32 derivation math (HMAC-SHA512 with key 'Bitcoin seed', CKDpriv/CKDpub, fingerprints) and the critical leak where an xpub plus any non-hardened child private key reveals the parent private key; Full path semantics (purpose/coin_type/account/change/index), SLIP-44 coin types, gap limit, and xpub/ypub/zpub version bytes versus descriptors; BIP-39 limitations and alternatives: no script-type or birthday metadata, weak 2,048-iteration PBKDF2 for passphrase brute force, Electrum seed versions, SLIP-39 Shamir, BIP-85, codex32.
- Assessment: Correct but brief outline (roughly 500 words) of BIP-39 steps and BIP-32 hardened/non-hardened derivation; security notes are generic user advice. It also links an 'experimental' bitcointalk thread of questionable value instead of citing the BIPs.

### Monero

`_wiki/Monero.md` · 493 words · 8 H2 / 0 H3 · 9 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 1.
- Missing (senior-engineer view): Core transaction mechanics: key images for double-spend prevention, Pedersen commitments and range proofs, CLSAG, subaddresses and view keys; Known privacy weaknesses and research: decoy-selection and timing analysis, the EAE attack, ring size 16, and the move to FCMP++ (full-chain membership proofs); Network and economic design: Dandelion++ transaction relay, dynamic block size with a fee penalty, and the 2017 CryptoNote key-image inflation bug as context for auditability.
- Possibly stale: The upgrade table stops at the 2022 tail emission. It omits the August 2022 hard fork (ring size raised to 16, Bulletproofs+, view tags), CLSAG (October 2020), and the status of the FCMP++ upgrade that is replacing ring signatures. If FCMP++ has activated or is scheduled by October 2026, the ring-signature description is out of date.
- Assessment: An accurate, well-sourced short overview with good current-events coverage (delistings, AMLR, Qubic). The 'How it works' section is just one-line bullets and the protocol history stops in 2022.

### OP_RETURN

`_wiki/OP_RETURN.md` · 357 words · 5 H2 / 2 H3 · 0 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: yes. Trade-offs, attacks or debates: —.
- Code excerpt: yes. Formula: yes. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 9.
- Missing (senior-engineer view): Relay policy history: 40/80-byte datacarrier limits, -datacarriersize, and Bitcoin Core v30 (Oct 2025) raising the default to ~100 kB and allowing multiple OP_RETURN outputs, plus the Knots/filtering controversy; Comparison with other data-embedding methods (witness inscriptions, fake-pubkey and bare-multisig outputs) and their UTXO-set and fee implications; Real uses and formats: SegWit coinbase witness commitment, Omni/Counterparty, OpenTimestamps, Runes, and the zero-value/dust rules for OP_RETURN outputs.
- Assessment: Narrowly focused on proving OP_RETURN data is not witness-discounted; correct on weight math but silent on the policy debate that makes this topic heavily searched in 2025-26, and still carries an '(Add sourcing...)' placeholder.

### PSBT

`_wiki/PSBT.md` · 381 words · 8 H2 / 0 H3 · 0 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: —. Trade-offs, attacks or debates: —.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 6.
- Missing (senior-engineer view): The actual serialization format: magic, global/input/output key-value maps, key types (non_witness_utxo, witness_utxo, partial_sig, bip32_derivation) and test vectors; Taproot and MuSig2 extensions (BIP-371, BIP-373), BIP-370 v2 details (Constructor role, modifiable flags) and current wallet/Bitcoin Core support status; Security pitfalls: the SegWit fee-lying attack and why non_witness_utxo is still required, change-output verification, multisig xpub registration on hardware signers.
- Assessment: A stub-level overview that lists the roles and RPCs but never explains the format or how a PSBT moves through those roles field by field. It has almost no sourcing and still contains an 'add sourcing' placeholder.

### Polygon

`_wiki/Polygon.md` · 378 words · 8 H2 / 0 H3 · 8 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 2 (0 pinned, 0 on master/main). Inbound links: 0.
- Missing (senior-engineer view): How checkpoints, milestones/finality and the PoS and Plasma bridges (StateSync, exit proofs) actually work step by step, and what Ethereum does and does not guarantee; AggLayer and CDK architecture (unified bridge, pessimistic proofs) and the 2025 'Gigagas' roadmap with the Bhilai and Rio upgrades; Security history: the December 2021 Plasma/MRC20 vulnerabilities (bug bounty, ~$850M at risk), deep reorgs in 2022-2023, and the 2025 finality outage.
- Possibly stale: Describes block production as 'Bor block producers' with validator rotation; the Rio hard fork (October 2025) moved Polygon PoS to a Validator-Elected Block Producer (VEBloP) model with stateless validation, which the article omits. / 'Polygon later expanded into zero-knowledge technology' without noting that Polygon announced the deprecation and sunset of Polygon zkEVM in 2025 and refocused on PoS payments plus AggLayer. / The Disruptions bullet cites only the planned Heimdall v2 delay and misses the September 2025 finality incident, when finality stalled for a significant period and required an emergency hard fork.
- Assessment: Accurate on basic history and the POL migration but too thin for a major network: the 'How it works' section is three bullets and recent 2025 architecture changes are missing. Criticism is asserted rather than documented with incidents.

### Proof of stake

`_wiki/Proof_of_stake.md` · 726 words · 7 H2 / 0 H3 · 3 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 16.
- Missing (senior-engineer view): Protocol families and their safety/liveness trade-offs: Gasper (LMD-GHOST + Casper FFG), Tendermint-style BFT and Ouroboros longest-chain, including the inactivity leak; Leader selection and randomness (RANDAO, VRFs, grinding attacks), plus slashing details (correlation penalty, churn and withdrawal queues); Stake centralisation and MEV: Lido and exchange shares, proposer-builder separation and relays, and restaking (EigenLayer) risks.
- Possibly stale: 'On Ethereum, running a validator requires 32 ETH' omits the Pectra upgrade (May 2025, EIP-7251): 32 ETH is still the activation minimum, but compounding (0x02) validators can now hold up to 2,048 ETH effective balance / Describes Solana as PoS plus proof of history; Solana validators approved the Alpenglow consensus redesign (SIMD-0326) in September 2025, which replaces Tower BFT and PoH-based voting, so the description needs a status update
- Assessment: A short, correct encyclopedia-style overview with a generic five-step lifecycle and the standard nothing-at-stake and long-range critiques. It lacks the protocol-level detail an engineer would want.

### Proof of work

`_wiki/Proof_of_work.md` · 380 words · 7 H2 / 0 H3 · 0 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: yes. Trade-offs, attacks or debates: —.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 19.
- Missing (senior-engineer view): Attacks and security model: 51% and double-spend probability, selfish mining, timewarp and the BIP-54 Consensus Cleanup fix; Practical mining mechanics: extranonce and version rolling (BIP-320/ASICBoost), compact 'bits' encoding and the exact retarget formula, MTP and future-time timestamp rules; Broader context: Hashcash origin, energy and security-budget debate as subsidy falls, and alternative PoW designs (memory-hard/ASIC-resistant).
- Possibly stale: 'If the previous 2,016 blocks came faster than two weeks' is imprecise: Bitcoin measures the timestamp span across only 2,015 intervals (the off-by-one behind the timewarp attack, which BIP-54 proposes to fix)
- Assessment: Correct and concise Bitcoin-specific explainer of the header, target check, retarget and most-work rule, but it omits attacks and trade-offs entirely and is unsourced (explicit placeholder).

### Segregated Witness

`_wiki/Segregated_Witness.md` · 340 words · 6 H2 / 0 H3 · 0 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: yes. Trade-offs, attacks or debates: —.
- Code excerpt: yes. Formula: yes. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 15.
- Missing (senior-engineer view): Activation history and the controversy: BIP-9 signalling, the BIP-148 UASF, the New York Agreement and SegWit2x, BIP-91, lock-in and activation at block 481,824 (24 Aug 2017), and the Bitcoin Cash split; Structural mechanics: the marker and flag bytes, the coinbase witness commitment (OP_RETURN 0xaa21a9ed), nested P2SH-P2WPKH/P2WSH, and how old nodes validate stripped blocks; Trade-offs and consequences: the witness discount debate (cost asymmetry, larger worst-case blocks, its use by inscriptions and Ordinals), BIP-143 committing to input amounts for hardware wallets, and enabling Lightning.
- Assessment: The weight formula and txid/wtxid explanation are correct but the article is a stub. It has no activation history or debate, and the Notes still contain a placeholder ('Add sourcing where appropriate') plus forum threads as sources.

### Stablecoin

`_wiki/Stablecoin.md` · 848 words · 6 H2 / 6 H3 · 2 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 20.
- Missing (senior-engineer view): How the peg is maintained in practice: primary mint/redeem by authorised participants, secondary-market arbitrage, and redemption gates/minimums; Synthetic and yield-bearing designs (e.g. Ethena USDe delta-neutral basis trade, tokenised-treasury stablecoins) and their distinct risks; Market structure and data: issuer reserve composition and attestations vs audits, market-share figures, freezing/blacklisting on-chain mechanics, MiCA-driven USDT delistings in the EU.
- Possibly stale: Presents Dai/MakerDAO as the current crypto-backed example with no mention of the 2024 Sky rebrand and USDS / US regulation stops at GENIUS Act signing (July 2025); by October 2026 implementing rulemaking by Treasury and banking regulators is underway and the effective-date mechanics are not described
- Assessment: Readable encyclopedic overview with accurate history (Realcoin, 2021 settlements, SVB depeg, Terra death spiral) but only two references and little on the actual peg mechanics a researcher would look for.

### Tether

`_wiki/Tether.md` · 732 words · 8 H2 / 0 H3 · 9 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 3.
- Missing (senior-engineer view): Peg mechanics in practice: primary mint/redeem limited to verified customers with minimums and fees, arbitrage by secondary-market makers, and historical depegs (Oct 2018, May 2022); Reserve composition and history in detail: commercial-paper era, BDO attestations, the 2019 NYAG Bitfinex/Crypto Capital $850M episode, excess equity and profits, gold/BTC holdings versus GENIUS and MiCA eligibility; Multi-chain operational details: per-chain contracts, chain sunsets (Omni, Kusama, BCH-SLP, EOS, Algorand), freeze/blacklist mechanics (addBlackList/destroyBlackFunds) and their scale, and USDT0/LayerZero bridging.
- Assessment: An accurate, recent overview of regulatory history (NYAG, CFTC, GENIUS Act, USAT), with a useful integrator note on the non-standard ERC-20 return value. The mechanics are only three steps and the reserve analysis is shallow.

### USD Coin

`_wiki/USD_Coin.md` · 527 words · 8 H2 / 0 H3 · 8 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 2.
- Missing (senior-engineer view): Reserve structure and economics: Circle Reserve Fund (USDXX, BlackRock-managed, BNY custody), attestation scope, interest income and the Coinbase revenue share; Cross-chain mechanics: native vs bridged USDC, CCTP burn-and-mint (V2), and Circle's Arc layer-1; Contract-level detail: FiatToken v2.x roles (masterMinter, blacklister, pauser), EIP-3009 transferWithAuthorization and EIP-2612 permit, upgrade-key risk, and GENIUS Act compliance requirements.
- Possibly stale: Calls the OCC-chartered trust bank 'Circle National Trust'; Circle's 2025 OCC application and December 2025 conditional approval were for 'First National Digital Currency Bank, N.A.', so the name looks wrong unless it changed later
- Assessment: A short, mostly accurate profile with a useful regulatory timeline, but the 'how it works' section is three trivial steps. It omits CCTP, the reserve fund structure and the contract design that developers need.

### UTXO

`_wiki/UTXO.md` · 411 words · 6 H2 / 0 H3 · 0 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: yes. Trade-offs, attacks or debates: —.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 11.
- Missing (senior-engineer view): Consensus edge cases: coinbase maturity (100 blocks), BIP-30/BIP-34 duplicate txids, unspendable outputs (OP_RETURN) never entering the set; UTXO set growth and its costs: dust, inscription-era bloat, current size, and proposals such as Utreexo, UTXO commitments and MuHash-based snapshot hashes; Real trade-offs versus account models: coin selection and fee/privacy consequences, state-access parallelism vs smart-contract expressiveness (EUTXO comparison).
- Assessment: Clear and correct short explainer of inputs, outputs, change and node rules with useful RPC pointers, but it is a ~500-word stub without sources that skips UTXO-set scaling and protocol edge cases.

### Uniswap

`_wiki/Uniswap.md` · 472 words · 8 H2 / 0 H3 · 8 refs · depth 2 · demand 4 · **priority 12**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 1.
- Missing (senior-engineer view): The actual AMM math: x·y=k swap output and slippage formula, fee tiers, v3 ticks and sqrtPriceX96, and how concentrated liquidity changes the invariant per range; v4 internals: flash accounting and transient storage, ERC-6909 claims, native ETH, hook permission bits encoded in the hook address, and hook security risks; LP economics and order flow: LVR (loss-versus-rebalancing), JIT liquidity, TWAP oracle manipulation, UniswapX intents and the Unichain L2.
- Assessment: Dates and regulatory history are accurate (v1–v4, the 2020 airdrop, Wells notice, CFTC $175k order, SEC closure, UNIfication). The mechanics are four one-line bullets, far short of what developers searching for Uniswap need.

### Schnorr signature

`_wiki/Schnorr_signature.md` · 258 words · 5 H2 / 0 H3 · 0 refs · depth 1 · demand 3 · **priority 12**

- Mechanics explained: —. Trade-offs, attacks or debates: —.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 6.
- Missing (senior-engineer view): The actual signing and verification equations (R = kG, e = H_tag(R||P||m), s = k + e·d), even-y/x-only key handling, and BIP-340's deterministic nonce derivation with auxiliary randomness; Security pitfalls: nonce reuse/bias leaking keys, rogue-key attacks on naive aggregation, Wagner/ROS attacks that forced MuSig2's two-nonce design, and quantum vulnerability; Wider ecosystem and history: FROST threshold signatures, adaptor signatures/PTLCs, cross-input signature aggregation research, batch verification status, and the Schnorr patent history explaining why Bitcoin started with ECDSA.
- Assessment: A bullet-point stub with no equations or sources beyond a forum link. It still contains an editorial placeholder ('Add sourcing where appropriate...') and does not say when Taproot activated (November 2021).

### Altcoins and tokens

`_wiki/Altcoins_and_tokens.md` · 1,258 words · 10 H2 / 1 H3 · 3 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 5.
- Missing (senior-engineer view): How tokens work on-chain: ERC-20/SPL balance mappings, approve/transferFrom, mint/freeze/upgrade authorities and admin keys; Launch and distribution mechanics: airdrops, vesting/unlock contracts, bonding-curve launchpads, rug pulls and honeypot contracts; Value-accrual designs and their critiques: fee switches, buyback-and-burn, vote-escrow (ve) tokenomics, governance attacks such as flash-loan voting.
- Possibly stale: Legal-classification discussion rests only on the Feb 2025 SEC staff meme-coin statement; the wiki's own Cardano article cites a 17 Mar 2026 SEC/CFTC interpretive release on crypto asset classification, which this article ignores, so its regulatory framing looks pre-2026.
- Assessment: A clear, careful taxonomy and evaluation guide written for beginners, with good caveats on market cap, FDV and governance quorum. It says almost nothing about the technical mechanics of token contracts, so a developer gets little from it.

### BIP index

`_wiki/BIP_index.md` · 4,596 words · 8 H2 / 5 H3 · 4 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: —.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 432 (0 pinned, 216 on master/main). Inbound links: 17.
- Missing (senior-engineer view): One-line description of what each BIP actually does (titles alone are opaque for e.g. BIP-9 vs BIP-8 vs BIP-90); Mapping to deployment reality: Bitcoin Core implementation status (doc/bips.md) and mainnet activation heights/dates for consensus BIPs; Links to existing SplytWiki articles (Taproot, SegWit, Lightning, Covenant proposals, etc.); only BIP-350 is linked, everything else points to raw spec text.
- Assessment: A careful, internally consistent snapshot (213 rows, counts match the summary) with a correct short explainer of BIP-2 to BIP-3 statuses; useful as a reference table but it is a list, not an explainer, and underuses its own wiki cross-linking column.

### Cardano

`_wiki/Cardano.md` · 474 words · 8 H2 / 0 H3 · 9 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 1.
- Missing (senior-engineer view): eUTXO mechanics and their trade-off: datums, redeemers, script context, deterministic fees, and the concurrency/UTXO-contention problem for DeFi (batchers); The 21 Nov 2025 mainnet chain partition caused by a malformed transaction that exploited a node bug, and how it was resolved; Consensus and scaling details: slot/epoch parameters, VRF leader election, k-security, stake-pool rewards (k, a0 pledge), Ouroboros Genesis and Leios, Hydra, and the Plutus versions plus Aiken.
- Possibly stale: Ouroboros is described only through the 2017 'Classic' paper. Mainnet runs Ouroboros Praos, which replaced TPraos in the Vasil hard fork (Sept 2022), so the cited paper is not the protocol in use. / 'Since 2025 ... Intersect has coordinated its development': Intersect launched in mid-2023 and took over development coordination during 2024, so 2025 is too late. / Shelley (2020) is presented as decentralised block production, but federated nodes kept producing blocks until the d parameter reached 0 in March 2021. / The Basho era is given no dates or content, even though Hydra (2023) and Mithril have shipped, so the era table looks unmaintained.
- Assessment: A well-sourced overview of history, governance and regulation, but its 'How it works' section is three bullets and the technical description of Ouroboros is out of date. It is useful for orientation but not for engineers.

### Chain reorganization

`_wiki/Chain_reorganization.md` · 579 words · 7 H2 / 0 H3 · 0 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: —.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 9.
- Missing (senior-engineer view): Node-level mechanics: the most-work rule, disconnecting blocks with undo data (rev*.dat), reconnecting blocks, and putting disconnected transactions back into the mempool; Historical deep reorgs and attacks: the 2010 value-overflow fix, the 2013 BIP50 fork, selfish mining, double-spend and fee-sniping risks, and reorgs on other chains (for example, Monero/Qubic 2025); Quantitative stale-block rate data with sources, and the contrast with finality in PoS chains (Ethereum checkpoints, deterministic finality).
- Possibly stale: Claims transactions returning to the mempool 'may be assigned a different fee'. A transaction's fee is fixed by its inputs and outputs; only its relative priority changes. / Recommends `getrawtransaction <txid>` for checking on-chain presence without noting that it needs -txindex, or the blockhash argument, for confirmed transactions not in the wallet.
- Assessment: An informal, unsourced developer-advice page with sensible confirmation guidance. It never explains how a node actually reorganizes and gives no history or attack analysis.

### Cosmos

`_wiki/Cosmos.md` · 391 words · 8 H2 / 0 H3 · 9 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 2 (0 pinned, 1 on master/main). Inbound links: 2.
- Missing (senior-engineer view): Real IBC mechanics: light clients, connections/channels, packet commitments, relayers, timeouts, ICS-20, and IBC v2/Eureka (2025) bridging to Ethereum; Hub economics and 2023-2026 developments: Interchain Security (replicated then partial-set), inflation cuts, liquid staking module, the 2025 Interchain Labs/Cosmos Labs reorganisation and Cosmos EVM; CometBFT trade-offs and incidents: validator-set caps, liveness halts under >1/3 offline, ABCI++, the Dragonberry IBC vulnerability (2022) and other chain halts.
- Assessment: A stub-level overview: one-line bullets for Tendermint, the SDK and IBC, and history that stops at Proposal 82 in 2022. No individual claim looks wrong, but nothing after 2023 is covered.

### Cryptocurrency

`_wiki/Cryptocurrency.md` · 1,002 words · 7 H2 / 6 H3 · 4 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 11.
- Missing (senior-engineer view): A concrete walk-through of a transaction from signing to broadcast to inclusion and confirmation (finality, reorgs); Account vs UTXO models and how fees and block space are priced; Scaling layers (Lightning, rollups) and custody models (custodial vs self-custody, exchanges).
- Possibly stale: El Salvador is described only as making bitcoin legal tender in 2021; in January 2025, under its IMF arrangement, it amended the Bitcoin Law to make acceptance voluntary, effectively ending mandatory legal-tender status. / US regulation is framed as long-running SEC/CFTC disagreement plus the 2025 GENIUS Act; the wiki's own pages cite a March 2026 SEC/CFTC classification interpretation, which this overview omits.
- Assessment: A reasonable encyclopedic overview with good precursor history (Chaum, b-money, bit gold) but only definitional coverage of how things work, and a few regulatory statements that have not been updated.

### Cryptocurrency history and milestones

`_wiki/Cryptocurrency_history.md` · 1,281 words · 10 H2 / 0 H3 · 5 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 1 on master/main). Inbound links: 2.
- Missing (senior-engineer view): Major Bitcoin-side milestones: Mt. Gox (2014), the block-size war, SegWit activation and the Bitcoin Cash fork (2017), Taproot (2021), and US spot Bitcoin ETFs (Jan 2024); Pre-Bitcoin lineage: DigiCash, b-money, Bit Gold and Hashcash, and the cypherpunk context that explains Bitcoin's design choices; Other defining crises and events: the Celsius, Three Arrows and Voyager contagion of 2022, major bridge hacks (Ronin, Wormhole), and the 2025 Bybit hack.
- Assessment: Every listed date is correct, and the article sensibly separates protocol, company and market events. The timeline is lopsided toward Ethereum: after 2009 Bitcoin appears almost only through generic remarks, and nothing after December 2025 is listed.

### Cryptocurrency regulation

`_wiki/Cryptocurrency_regulation.md` · 1,500 words · 11 H2 / 3 H3 · 9 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: —.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 15.
- Missing (senior-engineer view): Stablecoin regimes (US GENIUS Act, MiCA EMT/ART rules, Hong Kong and Singapore stablecoin frameworks); FATF Recommendation 15 and the Travel Rule, which are the main cross-border AML standard; Central policy debates: regulation by enforcement, DeFi and developer liability (Tornado Cash, Samourai), self-custody, and privacy coins.
- Possibly stale: The US section covers only the March 2026 SEC interpretation and the 2024 ETP approval. It omits the GENIUS Act (federal stablecoin law signed July 2025) and the status of the market-structure bill (CLARITY Act), so the US picture is incomplete for October 2026. / The Hong Kong section cites only the 2023 VATP transitional circular. It omits the Stablecoins Ordinance, in force from August 2025.
- Assessment: A careful beginner guide to reading regulatory announcements, with a few dated jurisdiction snapshots. It is thin on substance and leaves out stablecoin law and the Travel Rule entirely.

### Dai

`_wiki/Dai.md` · 498 words · 8 H2 / 0 H3 · 7 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 4.
- Missing (senior-engineer view): The actual liquidation mechanics: Liquidations 2.0 Clipper Dutch auctions, keepers, liquidation penalty, oracle security module delay, and Emergency Shutdown / global settlement; Peg and monetary mechanics: PSM/LitePSM economics, D3M into Spark/Aave, and how the DSR/SSR serve as the main policy rate; Endgame structure, including Stars/SubDAOs such as Spark and Grove and the allocation system, plus the USDS freeze-function controversy.
- Possibly stale: Governance is described as MKR and SKY together. In 2025 Sky completed the MKR-to-SKY transition: SKY became the governance token for executive votes, and a delayed-upgrade penalty applies to late MKR conversions. Stating MKR as a current governance token is outdated.
- Assessment: An accurate high-level profile with good history (Black Thursday, the USDC depeg). It never explains how vaults, auctions and the peg actually function, and the governance section is out of date for post-2025 Sky.

### Decentralized application

`_wiki/Decentralized_application.md` · 1,138 words · 11 H2 / 0 H3 · 3 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 2.
- Missing (senior-engineer view): The actual developer stack: EIP-1193 providers, JSON-RPC, ABI encoding, event logs and indexers (The Graph), and decentralized frontend hosting via IPFS/ENS; Signing standards and account models: EIP-712 typed data, Permit/Permit2 approvals, ERC-4337 account abstraction and EIP-7702 (live since Pectra, May 2025), session keys; Real incidents illustrating frontend and admin risk (DNS/frontend hijacks such as Curve and BadgerDAO, the 2025 Bybit Safe UI compromise) and non-EVM architectures (Solana, Cosmos app-chains).
- Assessment: Careful, accurate beginner explainer that sensibly separates frontend, wallet, contract, oracle and admin trust. It stays abstract, with only a fictional example, no concrete standards and only ethereum.org as sources.

### Dogecoin

`_wiki/Dogecoin.md` · 442 words · 8 H2 / 0 H3 · 6 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 1 on master/main). Inbound links: 1.
- Missing (senior-engineer view): How AuxPoW merged mining actually works (parent coinbase commitment, chain ID, merkle branch) and Dogecoin's dependence on a few Litecoin pools for hashrate; Difficulty adjustment (DigiShield since 2014) and the pre-merged-mining 51% attack risk that motivated AuxPoW; Dogecoin Core's release status and feature gap versus Bitcoin (1.14.x line, no SegWit/Taproot, planned 1.21 rebase, libdogecoin).
- Possibly stale: 'Jackson Palmer left the project and became a public critic ... in 2021': Palmer stepped away from Dogecoin in 2015. His widely publicised critique of the crypto industry came in July 2021, so the sentence conflates two dates. / 'The first US spot Dogecoin exchange-traded fund, from Grayscale, began trading on 24 November 2025': this is contestable. The REX-Osprey DOGE ETF (DOJE) launched in September 2025, though as a 1940-Act fund with an offshore subsidiary rather than a 1933-Act spot trust. The claim needs qualifying.
- Assessment: Accurate on basic parameters (1-minute blocks, 10,000 DOGE per block, about 5.2 billion a year), but mechanics are one-line bullets and most claims cite only the README. It also contains a date error about Jackson Palmer.

### Filecoin

`_wiki/Filecoin.md` · 413 words · 8 H2 / 0 H3 · 8 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 0.
- Missing (senior-engineer view): The sealing pipeline (Stacked DRG, PoRep SNARKs, 32/64 GiB sectors, sealing hardware cost) and the WindowPoSt vs WinningPoSt schedule; Cryptoeconomics: initial pledge collateral, fault and termination fees, baseline minting vs simple minting, and FIL+ datacap with its gaming problems; The hot-storage and retrieval problem and newer responses: Direct Data Onboarding (FIP-0076), Proof of Data Possession (2025) and Filecoin Onchain Cloud.
- Assessment: Correct dates (mainnet, FVM, F3) but the mechanics are bullet definitions. The proof systems and incentives that make Filecoin distinctive are not explained, and the demand critique is asserted without data.

### KYC and AML

`_wiki/KYC_and_AML.md` · 1,502 words · 11 H2 / 2 H3 · 7 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: yes. Trade-offs, attacks or debates: —.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 13.
- Missing (senior-engineer view): Travel Rule operational detail: thresholds by jurisdiction (US $3,000, EU zero under the TFR from 30 Dec 2024), IVMS101 data fields, TRISA/TRP protocols and the 'sunrise' problem; Concrete legal regimes: US BSA/FinCEN money-transmitter rules and OFAC sanctions (Tornado Cash), EU AMLR/AMLA and the 2027 ban on anonymous accounts and privacy coins; How blockchain analytics actually works (clustering heuristics, risk scoring, false positives) and debates on de-risking, privacy, and zero-knowledge or reusable KYC.
- Possibly stale: Treats the 2021 FATF Updated Guidance as the reference point; FATF revised Recommendation 16 (payment transparency) in June 2025 and publishes annual targeted updates on R.15/Travel Rule implementation, none of which are reflected
- Assessment: A cautious, generic beginner overview that rarely names a concrete rule, threshold or case. It is accurate but shallow, and it skips the privacy-versus-surveillance debates that define the topic.

### Multisignature

`_wiki/Multisignature.md` · 390 words · 7 H2 / 0 H3 · 0 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 12.
- Missing (senior-engineer view): Current standardness and limits per script type: bare multisig non-standard by default since Bitcoin Core 28.0 (-permitbaremultisig=0), P2WSH 20-key / 3,600-byte witnessScript limits, and the 999-key tapscript limit with OP_CHECKSIGADD; Comparison of script multisig with MuSig2 (BIP-327) and FROST threshold signatures: privacy, fee size, interactivity and nonce-handling risks; Operational security: backing up all cosigner xpubs/descriptors, sortedmulti/BIP-67 key ordering, and hardware-wallet multisig registration to prevent change-address hijacking.
- Assessment: Accurate short note on OP_CHECKMULTISIG, the dummy-element bug and NULLDUMMY, but thin on modern limits, Taproot-era alternatives and real-world custody practice. Sourcing is vague ('2011 mailing-list discussion') and leans on forum links.

### Non-fungible token

`_wiki/Non-fungible_token.md` · 935 words · 7 H2 / 3 H3 · 3 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 2 (0 pinned, 0 on master/main). Inbound links: 10.
- Missing (senior-engineer view): Contract-level mechanics: ownerOf/tokenURI, approvals and setApprovalForAll as the main phishing vector, safeTransferFrom receiver hooks, ERC-721A batch minting; Royalty standards and the enforcement fight (EIP-2981, OpenSea Operator Filter, ERC-721C) rather than one sentence saying royalties became optional; Legal and regulatory status (SEC actions against Impact Theory and Stoner Cats, OpenSea Wells notice and its 2025 closure) and newer standards such as ERC-6551 token-bound accounts and Bitcoin inscriptions.
- Assessment: An accurate general-audience overview with correct history (Quantum 2014, CryptoPunks, the Beeple $69.3M sale, Ordinals 2023), but few inline citations. Technical depth is deferred to the NFT_standards page, and the example of a fictional artist adds little.

### Polkadot

`_wiki/Polkadot.md` · 436 words · 8 H2 / 0 H3 · 8 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 2.
- Missing (senior-engineer view): How shared security actually works: collator to backing group, erasure-coded availability, approval checking and disputes (ELVES); NPoS mechanics: nominator/validator election (Phragmen), the reward curve and slashing, plus BABE slot assignment and GRANDPA finality gadget details; The JAM (Join-Accumulate Machine) roadmap and how coretime pricing and renewal work in the Broker pallet.
- Possibly stale: Describes staking, OpenGov and the treasury as relay-chain functions. The Asset Hub migration (November 2025) moved balances, staking, governance and the treasury from the relay chain to Asset Hub / Polkadot Hub. / Omits the 2024-2026 'Polkadot 2.0' changes: async backing, elastic scaling, and smart contracts on Polkadot Hub (PolkaVM/Revive). The architecture described is roughly 2023-era apart from coretime.
- Assessment: A short profile with correct history (Referendum 1710 cap, coretime). It does not explain the parachain validation protocol that is Polkadot's main technical contribution, and it misses the 2025 Asset Hub migration.

### Satoshi Nakamoto

`_wiki/Satoshi_Nakamoto.md` · 672 words · 8 H2 / 1 H3 · 5 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 7.
- Missing (senior-engineer view): Patoshi-pattern analysis (Sergio Lerner) behind the ~1M BTC estimate, and the disputed 2014 'I am not Dorian Nakamoto' P2P Foundation post; Aftermath of COPA v Wright (December 2024 contempt finding and suspended sentence) and other prominent candidates such as Len Sassaman and Adam Back; Primary-source analysis of Nakamoto's writings and design choices (emails with Finney, Hearn, Andresen; stylometric and timestamp studies).
- Possibly stale: "claimed to be a 37-year-old man living in Japan": the P2P Foundation profile gave a birth date (5 April 1975) and the displayed age was auto-computed; 37 reflects when it was viewed (~2012), not what Nakamoto claimed in 2009
- Assessment: Accurate, readable biography covering the main identity claims and the COPA ruling, but short and lightly sourced compared with a good encyclopedia entry.

### Silent payments

`_wiki/Silent_payments.md` · 456 words · 7 H2 / 0 H3 · 0 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 3.
- Missing (senior-engineer view): Exact derivation details: input_hash over the smallest outpoint and summed input keys, the per-output counter k, and labels (including the change label); Scanning cost numbers and light-client infrastructure (tweak-data indexes, BlindBit and Frigate-style servers, the BIP-352 index proposals); Implementation status: the libsecp256k1 silentpayments module, the Bitcoin Core wallet PR, and BIP-375/376 PSBT support, with a dated wallet support table.
- Possibly stale: Says senders 'must not fund a silent payment with a Taproot script-path spend'. BIP-352 treats P2TR inputs as eligible whether spent by key path or script path, using the output key, and skips only inputs whose internal key is the NUMS point H. / Says 'Sparrow added receiving'. Sparrow's 2025 release added silent-payment sending, not receiving. Receiving wallets have been Cake Wallet, BlueWallet and similar, and BitBox02 support is for sending. / Gives the address length as 'about 117 characters'. A mainnet sp1q address is 116 characters.
- Assessment: A readable sketch of the protocol with sensible trade-offs, but simplified to the point of error on input eligibility. It is unsourced and its ecosystem section is vague and partly wrong.

### Soft fork and hard fork

`_wiki/Soft_fork_and_hard_fork.md` · 418 words · 6 H2 / 0 H3 · 0 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 17.
- Missing (senior-engineer view): Activation mechanisms and their history: IsSuperMajority (BIP-34), BIP-9 versionbits, BIP-148 UASF, BIP-8 and LOT=true, and Speedy Trial for Taproot; Historical case studies: the 2010 value-overflow fix, the March 2013 accidental chain split (BDB lock limits), the 2017 SegWit/BCH split, and replay protection for hard forks; Soft-fork caveats and upgrade hooks: old nodes' degraded validation, SPV/validationless mining risks, OP_NOP/witness-version/OP_SUCCESSx extensibility, and current proposals such as the Great Consensus Cleanup (BIP-54) and CTV/CSFS.
- Assessment: Correct conceptual definition with a sensible decision order, but no activation mechanics, no concrete history and no references beyond a forum thread. Reads as a stub for a topic with a rich, well-documented history.

### Stellar

`_wiki/Stellar.md` · 418 words · 8 H2 / 0 H3 · 5 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 1.
- Missing (senior-engineer view): How SCP actually reaches agreement: federated voting, nomination and ballot protocols, quorum intersection, the safety-over-liveness choice, and the Tier-1 validator topology; Soroban's resource and fee model and state archival (rent/TTL), plus recent protocol upgrades (Protocols 20–23, parallel execution); Anchor interoperability standards (SEP-6/24/31, SEP-10 auth) and real usage: USDC, MoneyGram, Franklin Templeton's BENJI tokenised fund.
- Assessment: The history is accurate (Ripple fork, 2014 ledger fork, 2019 burn of about 55 billion, Soroban in 2024), but SCP, Stellar's main technical contribution, gets a single sentence. Overall it reads as a coin profile rather than an explainer.

### Terra

`_wiki/Terra.md` · 530 words · 8 H2 / 0 H3 · 7 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 2.
- Missing (senior-engineer view): Market-module details: the on-chain swap spread and virtual liquidity pool (minting caps) that limited redemptions, oracle voting, and seigniorage flows; Collapse forensics: the Curve 4pool/UST-3CRV liquidity withdrawals that triggered the run, LFG's roughly $3bn BTC reserve deployment, and the May 2021 depeg secretly rescued by Jump Trading (central to the fraud case); Aftermath beyond the US: Terraform's Chapter 11 bankruptcy (2024), South Korean prosecutions including Daniel Shin, and the Terra Classic burn-tax and re-peg efforts.
- Assessment: Accurate and up to date on the legal outcome, including the 15-year sentence in December 2025. But the peg mechanism and the collapse get only a few bullets, with none of the on-chain dynamics that make Terra a case study.

### Toncoin

`_wiki/Toncoin.md` · 457 words · 8 H2 / 0 H3 · 5 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 0.
- Missing (senior-engineer view): Consensus and validator details: Catchain BFT, the Elector contract with election rounds, stake and slashing, plus the August 2024 network halts caused by mass-airdrop load; Consequences of the asynchronous actor model: no atomic composability, bounced messages, multi-transaction failure handling, and hypercube routing between shardchains; Token distribution history: the 2020-2022 PoW 'giver' launch, and the 2023 vote freezing ~1.08bn TON in inactive early-miner wallets for 48 months.
- Assessment: The SEC/Gram history and the Telegram context are accurate. The technical section is only a list of terms, and the supply-concentration critique leaves out the concrete wallet-freeze episode.

### Tron

`_wiki/Tron.md` · 457 words · 8 H2 / 0 H3 · 7 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 1.
- Missing (senior-engineer view): Resource model detail: Stake 2.0, the free daily bandwidth allowance, the dynamic energy model, energy rental markets and how USDT transfer fees are actually computed; DPoS mechanics: SR/SR-partner rewards, vote decay, the voting schedule, block confirmation/finality (solidified blocks), and on-chain stake concentration data; Ecosystem and enforcement context: the USDD stablecoin and its depegs, the T3 Financial Crime Unit freezing USDT, the 2021 TRON DAO transition, and Sun's 2025 public-company ventures.
- Possibly stale: 'Tron is the largest network for the Tether stablecoin' (cited to Tether's supply-by-network page): by circulating USDT supply Ethereum overtook Tron during 2025. Tron still leads on transfer count and retail volume, so the claim should name that metric.
- Assessment: Short, reasonably sourced profile covering history, SRs, resources and the SEC case, but mechanics are three bullets and centralization critiques are asserted without data. The Tether-dominance claim needs to say which metric it uses.

### XRP

`_wiki/XRP.md` · 631 words · 8 H2 / 0 H3 · 8 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 1.
- Missing (senior-engineer view): Consensus safety and liveness analysis: UNL overlap requirements (Chase & MacBrough 2018), fault thresholds, and real outages such as the February 2025 ledger halt; Supply and escrow mechanics in practice: monthly escrow release/re-lock pattern, reserve amounts (base reserve lowered to 1 XRP in 2024), and loss of the earliest ledger history; Protocol feature set and amendments: payment channels, escrows, checks, AMM (XLS-30), clawback, multi-purpose tokens, and the EVM sidechain.
- Assessment: Accurate summary of history, governance and the SEC case through the 2025 ETF and 2026 classification, but the technical section is four bullets with no step-by-step account of consensus or its failure modes.

### Zcash

`_wiki/Zcash.md` · 557 words · 8 H2 / 0 H3 · 7 refs · depth 2 · demand 3 · **priority 9**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 1.
- Missing (senior-engineer view): Shielded-pool internals: note commitments, the commitment tree, nullifiers, value balance and how turnstiles enforce supply; proof systems per pool (BCTV14, Groth16, Halo 2); The 2018–2019 Sprout/BCTV14 counterfeiting vulnerability (CVE-2019-7167), a direct precedent for the 2026 Orchard flaw that the article should compare; Usability and privacy practice: unified addresses (ZIP 316), light-client sync (compact blocks/lightwalletd), shielded-adoption statistics, and plans such as Crosslink hybrid PoS and Zcash Shielded Assets.
- Possibly stale: The upgrade table jumps from NU6 (2024) to NU6.3 (2026) and omits NU6.1 (November 2025), which changed development-fund allocation (ZIP 1016 coinholder-controlled funding). Governance cites only ZIP 1015 as the funding rule, which looks out of date.
- Assessment: A concise overview with useful 2026 updates (zcashd end of life, Ironwood). The cryptography that defines Zcash is reduced to one-line bullets, and the funding history skips NU6.1.

### Bybit hack

`_wiki/Bybit_hack.md` · 1,174 words · 7 H2 / 5 H3 · 12 refs · depth 3 · demand 4 · **priority 8**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 5.
- Missing (senior-engineer view): The laundering path in detail: rapid swaps via THORChain (and the resulting THORChain governance dispute), OKX Web3 aggregator suspension, eXch, and conversion to BTC; How Safe signatures actually work (EIP-712 safeTxHash with domain separator, nonce, operation field) and how signers could have independently recomputed the hash on Ledger displays; The pattern across prior DPRK blind-signing incidents (WazirX July 2024, Radiant Capital October 2024) and Safe's post-incident changes.
- Assessment: Solid, well-cited case study with a correct technical core (delegatecall overwriting the proxy's slot-0 masterCopy). Recovery figures stop at September 2025 and the on-chain laundering analysis is thin.

### Lightning Network

`_wiki/Lightning_Network.md` · 1,053 words · 10 H2 / 3 H3 · 30 refs · depth 3 · demand 4 · **priority 8**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 46 (0 pinned, 13 on master/main). Inbound links: 5.
- Missing (senior-engineer view): Fee-bumping and pinning: anchor outputs, zero-fee commitments with TRUC/v3 and P2A, and why mempool policy is a Lightning security issue; Mobile/UX infrastructure: LSPs, JIT channels, trampoline routing, async payments, MPP, and the custodial-wallet reality; Future channel designs and privacy limits: LN-Symmetry/eltoo, channel factories/Ark, probing and balance-discovery attacks.
- Possibly stale: Public capacity of about 3,794 BTC (30 Aug 2026 snapshot) conflicts with widely reported all-time highs above 5,000 BTC in late 2025; a drop is possible but the figure should be cross-checked against another crawler / Core Lightning 'v26.06.9' is an unusual version string (CLN point releases rarely go past .2 or .3); verify the latest release tag
- Assessment: Well-structured, carefully sourced hub page with a useful BOLT table, implementation versions and dated network statistics; mechanics are summarised at a high level and deferred to companion articles, so depth is good-overview rather than technical reference.

### Lightning routing

`_wiki/Lightning_routing.md` · 1,382 words · 11 H2 / 7 H3 · 18 refs · depth 3 · demand 4 · **priority 8**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 31 (0 pinned, 12 on master/main). Inbound links: 3.
- Missing (senior-engineer view): Actual pathfinding algorithms and reliability models: probabilistic/min-cost-flow (Pickhardt) payments, mission control, probing and liquidity estimation; Privacy attacks on routing: balance probing, timing/amount correlation, payment-hash correlation across hops and the PTLC fix; Fee policy dynamics: inbound fees (lnd), fee/liquidity management, LSPs and async payments for mobile recipients.
- Possibly stale: Jamming mitigation status is framed around a 2021 Optech summary ('none had gained widespread support'); it omits HTLC endorsement/reputation (local reputation, experimental in lnd/Eclair/LDK since 2024), the main current mitigation track
- Assessment: Strong, spec-anchored survey of gossip, onion routing, blinding, offers and implementations with useful test-vector pointers; pathfinding itself is only sketched and the jamming section underweights recent reputation-based work.

### Ordinals, inscriptions and Runes

`_wiki/Ordinals_inscriptions_and_Runes.md` · 1,376 words · 9 H2 / 14 H3 · 19 refs · depth 3 · demand 4 · **priority 8**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 12 (0 pinned, 5 on master/main). Inbound links: 1.
- Missing (senior-engineer view): Sat-flow (first-in-first-out) assignment rules, inscription numbering, cursed vs blessed inscriptions, and features such as parent/child, recursion, pointer and delegate; BRC-20 mechanics (deploy/mint/transfer JSON inscriptions, indexer-defined state and indexer disagreement risk) and Runes etching details (commitment with 6-confirmation maturity, name unlock schedule, divisibility, mint terms); Mining-side effects: out-of-band inscription services and direct-to-miner submission, and the effect on relay and fee estimation.
- Possibly stale: 'A single reveal can carry hundreds of kilobytes' understates it: reveals approaching the 4 MWU limit (~3.9 MB inscriptions) have been mined since February 2023. / Refers to 'a chain split in 2026' over the OP_RETURN/BIP-110 dispute without any citation on this page; it is a significant claim and needs a source here or should be checked.
- Assessment: Clear explanation of the envelope, commit/reveal, the weight maths and runestones, with a balanced, quoted account of the spam debate; it lacks the indexer-level rules that determine ownership.

### Seed phrases and self-custody security

`_wiki/Seed_phrases_and_self-custody_security.md` · 1,763 words · 9 H2 / 8 H3 · 20 refs · depth 3 · demand 4 · **priority 8**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 8 (0 pinned, 4 on master/main). Inbound links: 4.
- Missing (senior-engineer view): Entropy quality and verification: dice/coin-flip generation, verifying device entropy, and the brute-force strength of 12 vs 24 words and of weak passphrases; Codex32 (BIP-93) hand-verifiable Shamir shares, SeedQR and stateless signers, and BIP-85 child seeds; Operational threats: evil-maid and supply-chain device tampering, border crossings and the 2025 rise in wrench attacks, and the restore-testing procedure.
- Possibly stale: The claim that 'BIP-39 itself notes that descriptor wallets solve its lack of versioning' is doubtful: BIP-39's text does not discuss output descriptors, so the attribution should be checked. / Bitcoin Core RPC references point to the 29.0.0 docs; with 31.x current they are a little out of date (behaviour unchanged).
- Assessment: Strong practical article with a correct BIP-39 derivation walk-through and test vector, plus well-sourced incident examples; quantitative security analysis is missing.

### Bitcoin Core release history

`_wiki/Bitcoin_Core_release_history.md` · 1,858 words · 6 H2 / 7 H3 · 43 refs · depth 3 · demand 3 · **priority 6**

- Mechanics explained: —. Trade-offs, attacks or debates: —.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 21 (0 pinned, 18 on master/main). Inbound links: 4.
- Missing (senior-engineer view): Consensus-relevant incidents tied to releases: the March 2013 0.8/0.7 LevelDB chain split (BIP 50) and CVE-2018-17144 in 0.14-0.16; Security-disclosure policy and the 2024-2025 batch disclosures of vulnerabilities in EOL versions; Release engineering: Guix reproducible builds, builder signatures, and the 30.0 datacarrier controversy/Knots split as context for policy rows.
- Possibly stale: Infobox says the current major release is 31.0 with 31.1 latest as of October 2026; the project has shipped October majors (28.0 on 2 Oct 2024, 30.0 on 10 Oct 2025), so 32.0 is due around now and the current/maintained/EOL statements (29.x still maintained) need re-checking. / The 0.10.0 row lists 'version 3 block templates (BIP 66)' under policy changes; BIP 66 (strict DER) was a consensus soft fork, not relay policy. / The 22.0 row says MAX_STANDARD_SCRIPTSIG_SIZE was 'added to policy'; the 1,650-byte scriptSig standardness limit predates 22.0 by years, so the row should be verified against the 22.0 notes.
- Assessment: A carefully sourced release table with a useful versioning and maintainers section; it is a reference list, not an explainer, and skips the release-linked incidents and debates a senior engineer would expect.

### Bitcoin halving

`_wiki/Bitcoin_halving.md` · 583 words · 6 H2 / 2 H3 · 3 refs · depth 3 · demand 3 · **priority 6**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: yes. Diagram: —. Links to source repos/specs: 1 (0 pinned, 1 on master/main). Inbound links: 5.
- Missing (senior-engineer view): How GetBlockSubsidy actually computes the subsidy (an integer right-shift of 50 BTC by height/210000, zero after 64 shifts) and the BIP42 fix for the shift-overflow bug; Why the real supply cap is lower than 20,999,999.9769: the unspendable genesis coinbase, the duplicate-coinbase (BIP30) blocks, and miners who claimed less than the full subsidy; Quantitative security-budget analysis: fee share of miner revenue across halvings (e.g. the Runes fee spike at the 2024 halving), hashprice and difficulty responses, and tail-emission proposals.
- Assessment: An accurate, clean explainer with a correct schedule table and supply arithmetic. The security-budget and price debates are only stated, not analysed, and there are no implementation details.

### Covenant proposals

`_wiki/Covenant_proposals.md` · 1,590 words · 10 H2 / 0 H3 · 22 refs · depth 3 · demand 3 · **priority 6**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 20 (0 pinned, 9 on master/main). Inbound links: 2.
- Missing (senior-engineer view): Omits several live competing proposals the site's own BIP index lists: BIP-118 APO (also active on Inquisition signet), BIP-443 OP_CHECKCONTRACTVERIFY, BIP-346 OP_TXHASH, and the 2026 OP_TEMPLATEHASH/rebindable-transactions bundle (BIP-446/448); Concrete constructions: how a CTV or CCV vault, a CTV+CSFS LN-Symmetry channel, or an OP_CAT Schnorr-trick covenant actually works step by step; Cross-cutting objections: recursive covenants and MEV/miner-extractable-value risk, validation-cost/DoS concerns, and the activation-mechanism debate (BIP-8/9, Speedy Trial, UASF).
- Assessment: Well-sourced, carefully neutral status page with attributed for/against arguments and signet activation data; strong on politics and status, thin on how each opcode is actually used, and its 7-proposal scope is already behind the newer drafts in the BIP index.

### Cryptocurrency regulation and tax in the European Union

`_wiki/Cryptocurrency_regulation_and_tax_in_the_European_Union.md` · 1,045 words · 9 H2 / 7 H3 · 10 refs · depth 3 · demand 3 · **priority 6**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 5.
- Missing (senior-engineer view): Member-state variation in the Art. 143 transitional period (e.g. 6, 12 or 18 months) and the practical fallout, including delisting of non-MiCA-compliant stablecoins such as USDT for EEA users; DAC8/CARF operational detail: reportable data fields, first reporting deadline (2027 for 2026 data), penalties, and how it interacts with non-EU CARF exchanges; Level 2/3 measures and grey areas: reverse solicitation, ESMA guidance on when tokens are financial instruments, staking/lending services, significant-EMT supervision by the EBA.
- Possibly stale: Stablecoin cap described as 'about one million transactions or EUR 200 million a day within the EU'; MiCA Art. 23 sets 1 million transactions and EUR 200 million 'respectively' within a single currency area, and applies to ARTs and EMTs in non-EU currencies, so both the conjunction and the geographic scope are imprecise / 'ESMA's register listed several hundred authorised CASPs' as of October 2026 is vague and likely overstated (counts through 2026 were in the low hundreds); should give a dated figure
- Assessment: Accurate, well-cited and up-to-date overview of MiCA, the TFR travel rule, AMLR and DAC8 with a clear timeline; good for orientation, but a specialist would want the transitional-regime, stablecoin-market and tax-reporting detail it skips.

### Cryptocurrency regulation and tax in the United Arab Emirates

`_wiki/Cryptocurrency_regulation_and_tax_in_the_United_Arab_Emirates.md` · 1,027 words · 7 H2 / 7 H3 · 11 refs · depth 3 · demand 3 · **priority 6**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 2.
- Missing (senior-engineer view): AML/CFT and Travel Rule obligations (Cabinet Resolution 111/2022, FATF grey-list exit in Feb 2024) and the UAE's commitment to CARF crypto reporting; Corporate tax nuances for crypto firms: Qualifying Free Zone Person 0% regime, the 15% Domestic Minimum Top-up Tax for large MNE groups from 2025, small business relief, and tax-residency rules for individuals; Other free zones and regimes (RAK DAO, DMCC crypto centre) plus VARA licensing specifics: capital requirements, marketing rules and notable enforcement fines.
- Possibly stale: 'As of early 2026 the CMA had not issued guidance on cross-border activity': this is time-bound and may be superseded by October 2026 (CMA Decision No. 4/R.M/2026 itself came in April 2026). It needs re-verification or an 'as of' date that is still current.
- Assessment: A well-structured, well-sourced map of the overlapping regulators and the core tax position, with a useful dated timeline. It lacks AML/reporting duties and the finer corporate-tax regimes that practitioners actually deal with.

### Cryptocurrency regulation and tax in the United States

`_wiki/Cryptocurrency_regulation_and_tax_in_the_United_States.md` · 1,422 words · 7 H2 / 10 H3 · 23 refs · depth 3 · demand 3 · **priority 6**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 6.
- Missing (senior-engineer view): Wallet-by-wallet basis tracking from 1 Jan 2025 (Rev. Proc. 2024-28 safe harbor), lot-relief methods, and the wash-sale rule's non-application to crypto; The 2025 enforcement retreat: dismissed SEC cases (Coinbase, Binance, Kraken and others), and bank regulators withdrawing crypto guidance (OCC IL 1183, Fed/FDIC); State regimes beyond NY BitLicense (e.g., California's DFAL licensing from July 2026) and the GENIUS Act's state/federal split, yield prohibition and the stablecoin-yield fight in the CLARITY debate.
- Possibly stale: 'The CFTC ... does not license spot crypto exchanges' is out of date. Since December 2025 the CFTC has allowed listed spot crypto trading on registered designated contract markets (DCMs), under its 'crypto sprint'. / The OFAC section stops at Van Loon (Nov 2024). Treasury removed Tornado Cash from the SDN list on 21 March 2025, which the article never mentions. / The Ripple entry presents the 2023 ruling as the state of play. The SEC and Ripple dropped their appeals in 2025, ending the case, which the 'courts split' criticism ignores.
- Assessment: The strongest article in this batch: well sourced, accurately dated through 2025, and clear on Form 1099-DA mechanics. It misses a few 2025 reversals (Tornado Cash delisting, CFTC spot listings, Ripple ending) and per-wallet basis rules.

### Cryptocurrency scams

`_wiki/Cryptocurrency_scams.md` · 2,093 words · 12 H2 / 21 H3 · 23 refs · depth 3 · demand 3 · **priority 6**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 5.
- Missing (senior-engineer view): EIP-7702 delegation phishing after Pectra (sweeper delegate contracts), Permit2 and NFT setApprovalForAll drainers; Technical defences: transaction simulation and wallet warnings, drainer-kit-as-a-service economics, clipboard hijacker and malicious-extension malware; Crypto ATM/kiosk scams, AI deepfake impersonation, and the 2025 surge in physical wrench attacks and kidnappings.
- Possibly stale: The Prince Group entry says that, as of October 2026, the charges are only allegations, with no later developments; Chen Zhi was reportedly arrested in Cambodia and extradited to China in January 2026, which should be reflected. / The '$14 billion rising to about $17 billion' 2025 estimate is cited to a Chainalysis approval-phishing explainer; that figure comes from Chainalysis's annual crypto-crime report, so the citation looks mismatched.
- Assessment: Well structured, consumer-oriented and heavily sourced to FBI/FinCEN/DOJ; mechanics are explained per scam, but on-chain drainer techniques are covered only at a high level.

### Cryptocurrency taxation

`_wiki/Cryptocurrency_taxation.md` · 1,601 words · 10 H2 / 5 H3 · 5 refs · depth 3 · demand 3 · **priority 6**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 10.
- Missing (senior-engineer view): New third-party reporting regimes: US Form 1099-DA (gross proceeds for 2025 transactions, basis from 2026), the OECD CARF, EU DAC8 and UK CARF data collection starting 1 January 2026; Concrete treatment of staking, mining, airdrops, hard forks, DeFi lending and LP positions, with the leading authorities (e.g. Rev. Rul. 2019-24, Rev. Rul. 2023-14, the Jarrett litigation); Lot-identification and loss rules in detail: US specific ID versus FIFO and the per-wallet basis transition (Rev. Proc. 2024-28), the UK same-day/30-day/Section 104 pooling rules, wash-sale applicability, and India's 1% TDS under s.194S.
- Assessment: A careful, well-hedged conceptual guide with a useful recordkeeping workflow and correct high-level statements for the US, UK and India. It stops short of the specific rules and reporting forms that a tax specialist would expect in 2026.

### Decentralized autonomous organization

`_wiki/Decentralized_autonomous_organization.md` · 3,816 words · 16 H2 / 35 H3 · 11 refs · depth 3 · demand 3 · **priority 6**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: yes. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 12.
- Missing (senior-engineer view): History and real cases: The DAO hack (2016) and the ETH/ETC fork, Beanstalk flash-loan governance attack (2022), Tornado Cash governance takeover (2023), Compound 'Humpy' episode (2024); Legal liability: Ooki DAO CFTC ruling, Samuels v. Lido general-partnership ruling, and wrappers such as Wyoming DAO LLC, Marshall Islands DAO LLC and Cayman foundations; Concrete on-chain mechanics: ERC20Votes checkpoints, Governor Bravo vs OZ Governor, vote-escrow (veCRV) and bribe markets, optimistic governance and veto councils.
- Assessment: A long, careful explainer of the generic proposal-to-execution pipeline, quorum arithmetic and treasury controls. Because it uses only fictional examples and gives no history, attacks or legal cases, a practitioner learns little they could not work out alone.

### FTX collapse

`_wiki/FTX_collapse.md` · 1,325 words · 7 H2 / 5 H3 · 14 refs · depth 3 · demand 3 · **priority 6**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 10.
- Missing (senior-engineer view): The FTT run mechanics: Alameda's balance sheet made largely of FTT/Serum collateral, Binance's 6 Nov 2022 announcement that it would sell its FTT, and the 8–9 Nov non-binding Binance acquisition offer and its withdrawal; Bahamas side of the case (FTX Digital Markets liquidation, Bahamian asset seizure, SBF's December 2022 arrest and extradition) and the first three creditor distributions (Feb, May and Sep 2025), which are absent from the timeline; Industry and regulatory responses: proof-of-reserves and Merkle-tree attestations and their limits, plus custody and segregation rules that followed (e.g. MiCA, US market-structure bills).
- Assessment: Strong primary sourcing (court filings, the Second Circuit opinion, the debtors' report) and a good catalogue of control failures. The narrative skips how the FTT collateral and Binance triggered the run, and the infobox uses the Bitcoin emblem.

### Non-fungible tokens: ERC-721 and ERC-1155 standards

`_wiki/NFT_standards.md` · 3,054 words · 15 H2 / 20 H3 · 14 refs · depth 3 · demand 3 · **priority 6**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: yes. Links to source repos/specs: 3 (0 pinned, 0 on master/main). Inbound links: 3.
- Missing (senior-engineer view): The royalty-enforcement fight: OpenSea Operator Filter (2022-23), its abandonment, Blur's zero-royalty model and ERC-721C programmable royalties; Implementation details: ERC-165 interface detection, ERC-721A/ERC-2309 batch minting, reentrancy via onERC721Received hooks, and off-chain signed marketplace orders (Seaport) as the main phishing vector; Newer extensions and other chains: ERC-6551 token-bound accounts, ERC-4907 rentals, ERC-5192 soulbound, Solana Metaplex/compressed NFTs, Bitcoin Ordinals.
- Assessment: A clear, accurate explanation of the ERC-721 and ERC-1155 interfaces, metadata and approval risks. It spends a lot of space on Art Blocks, which is off-topic, and leaves out the implementation and royalty history engineers care about.

### Testnet

`_wiki/Testnet.md` · 1,380 words · 10 H2 / 7 H3 · 13 refs · depth 3 · demand 3 · **priority 6**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 18 (0 pinned, 13 on master/main). Inbound links: 6.
- Missing (senior-engineer view): Testnet4's real-world problems since launch (difficulty griefing and block storms via the 20-minute rule, ASIC dominance, scarce faucet coins) and any proposals to fix them; Practical signet operation: how the signet miner script works, how to get coins, and community custom signets (e.g. Mutinynet with fast blocks) used by L2 developers; Network-level parameters developers trip over: ports, magic bytes, address HRPs (tb1/bcrt1), and regtest deployment controls (-testactivationheight, -vbparams).
- Possibly stale: Says testnet3 ran 'from 2011'. The genesis timestamp is February 2011, but the network launched with Bitcoin 0.7.0 in September 2012. The claim follows BIP-94's '13 years' wording but is arguably inaccurate. / Bitcoin Inquisition status is cited from 29.4 (July 2026); Inquisition rebases on newer Core releases, so the list of deployed proposals may have moved on by October 2026. The removal status of testnet3 is also tied to a single closed PR and may change with Core 32.0.
- Assessment: Clear explanation of why each network exists, with good coverage of signet's challenge mechanism and BIP-94's fixes. It is reasonably current but thin on operational detail and on testnet4's track record.

### How to contribute to Bitcoin

`_wiki/how-to-contribute-to-bitcoin.md` · 1,706 words · 20 H2 / 1 H3 · 0 refs · depth 3 · demand 3 · **priority 6**

- Mechanics explained: yes. Trade-offs, attacks or debates: —.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 7 (0 pinned, 1 on master/main). Inbound links: 5.
- Missing (senior-engineer view): Funding and onboarding paths: grants (Brink, OpenSats, Spiral, HRF), Chaincode/BOSS-style programs, and recommended learning resources; Non-PR contribution avenues: fuzzing, benchmarking, Guix reproducible-build attestations, release-candidate testing and security disclosure; A codebase map for newcomers: directory layout, kernel/multiprocess split, developer-notes conventions, and how to find maintainers or area experts for review.
- Assessment: Accurate, practical summary of CONTRIBUTING.md plus a useful reading path through the wiki. It is mostly process guidance, with little on the realities of getting review or on funding.

### Algorand

`_wiki/Algorand.md` · 402 words · 8 H2 / 0 H3 · 8 refs · depth 2 · demand 2 · **priority 6**

- Mechanics explained: —. Trade-offs, attacks or debates: —.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 1.
- Missing (senior-engineer view): Concrete round structure: proposal, soft-vote and cert-vote steps, committee sizes/thresholds, recovery mode, and ~2.8 s dynamic round times; Network topology trade-offs: permissioned relay nodes vs P2P, participation keys and staking-reward incentives; State proofs (Falcon post-quantum signatures), AVM/TEAL execution limits and atomic groups.
- Possibly stale: References point to developer.algorand.org; Algorand's developer docs moved to dev.algorand.co during 2025, so the consensus and portal citations are likely stale links. / 'No minimum stake for consensus' is incomplete for 2026: since the January 2025 consensus-incentives upgrade, block-proposer rewards require roughly 30,000 ALGO online and a 2 ALGO registration fee, which changes the participation picture the article describes.
- Assessment: A short coin profile with bulleted one-liners on sortition and BA; it names the mechanism but never walks through a round or discusses safety/liveness assumptions. Criticism is non-technical (token unlocks, a third-party wallet hack).

### Bitcoin Cash

`_wiki/Bitcoin_Cash.md` · 427 words · 8 H2 / 0 H3 · 5 refs · depth 2 · demand 2 · **priority 6**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 1.
- Missing (senior-engineer view): Consensus-level differences in detail: SIGHASH_FORKID replay protection, the 2017 EDA difficulty chaos and the ASERT (aserti3-2d) algorithm, CTOR, and the ABLA block-size algorithm; Script/VM evolution: 2022 native introspection opcodes, CashTokens design (token prefix, fungible vs NFT capabilities) and what CashVM enables for contracts; Security analysis: hash-rate share vs Bitcoin, the 2018 hash war and checkpoint/rolling-finality debates, 51% attack cost, and the 0-conf/double-spend-proof story.
- Possibly stale: The 15 May 2026 'CashVM' row credits big-integer arithmetic to the 2026 upgrade, but the VM-limits and high-precision (BigInt) arithmetic CHIPs activated in the May 2025 upgrade. The 2026 upgrade added loops, functions, bitwise ops and pay-to-script, and the 2025 upgrade is missing from the table. / The history leaves the block size at the May 2018 32 MB cap. Since May 2024, BCH uses the Adaptive Blocksize Limit Algorithm (ABLA) with 32 MB as the floor, so 'larger blocks' is now a dynamic limit.
- Assessment: A tidy overview with a correct core timeline. But 'How it works' is a two-sentence diff against Bitcoin, and the 2025/2026 upgrade contents appear to be mixed up.

### Crypto Anarchism

`_wiki/Crypto_Anarchism.md` · 1,060 words · 8 H2 / 8 H3 · 0 refs · depth 2 · demand 2 · **priority 6**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 0.
- Missing (senior-engineer view): Timothy May's 1988 'Crypto Anarchist Manifesto' (and BlackNet / Jim Bell's 'Assassination Politics') as the actual origin of the term and its darker strands; The 1990s Crypto Wars: Clipper chip, PGP export case against Phil Zimmermann, ITAR export controls, Bernstein v. US; Concrete lineage to working systems: DigiCash, Hashcash, b-money, Bit Gold, remailers/Tor, WikiLeaks, Silk Road, and how each tested the theory.
- Assessment: Generic, essay-like prose with no inline citations. It never names May's 1988 manifesto in the body, and it blurs the movement's mainly anarcho-capitalist roots with left-anarchist 'mutual aid'. It needs specific people, dates and events to rise above a definition.

### Crypto glossary

`_wiki/Crypto_glossary.md` · 1,803 words · 8 H2 / 0 H3 · 11 refs · depth 2 · demand 2 · **priority 6**

- Mechanics explained: —. Trade-offs, attacks or debates: —.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 5.
- Missing (senior-engineer view): Bitcoin protocol terms absent: SegWit, Taproot, Lightning, PSBT, RBF/CPFP, ordinals/inscriptions; Current Ethereum/DeFi vocabulary: account abstraction/smart accounts, blobs (EIP-4844), restaking and liquid staking tokens, intents/solvers, PBS/builders; Cryptography basics: hash function, Schnorr/ECDSA, zero-knowledge proof, MPC/threshold signatures.
- Assessment: Clean, accurate index of beginner and slang terms linking to per-term pages, with sensible cautions; as a reference for technical readers it is shallow and skips many protocol-level terms.

### Cryptocurrency in Russia

`_wiki/Crypto_in_Russia.md` · 1,018 words · 12 H2 / 0 H3 · 5 refs · depth 2 · demand 2 · **priority 6**

- Mechanics explained: —. Trade-offs, attacks or debates: —.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 0.
- Missing (senior-engineer view): Named statutes and dates: 259-FZ (2020), 221-FZ and 223-FZ (2024 mining and cross-border EPR), the 2025–2026 Bank of Russia concept, and the number and dates of the 2026 law; Concrete figures: personal and corporate tax rates on crypto (13–15% NDFL brackets, 25% corporate), VAT exemption, investor purchase caps for non-qualified investors, licensing deadlines and penalties; Sanctions-era enforcement and infrastructure: Garantex takedown (March 2025) and successor Grinex, the A7A5 ruble stablecoin, OFAC and EU sanctions on Russian crypto actors, and the digital ruble rollout.
- Possibly stale: It says crypto is classified as 'property or digital financial assets'. Under Federal Law 259-FZ (2020), crypto is 'digital currency'; 'digital financial assets' (DFAs) are a separate category of tokenised rights issued on Central Bank-registered platforms. The article blurs the two. / The mining section omits the actual 2024 framework. Federal Law 221-FZ (effective 1 November 2024) legalised mining with a Ministry of Digital Development registry for companies and individual entrepreneurs, plus a household energy threshold for individuals. Regional mining bans took effect from 1 January 2025 in about 10 regions and run to 2031. 'Implementation varies by region' understates this. / Cross-border crypto settlement is attributed to the 2026 law. The experimental legal regime for cross-border crypto payments dates from September 2024 (Federal Law 223-FZ).
- Assessment: Vague, hedged boilerplate with almost no statute numbers, figures or named events. It conflates DFAs with digital currency, and two footnote references are broken across lines ('[^\ncbr]', '[^\n taxatlas]'). A specialist would not rely on it.

### Ethereum Classic

`_wiki/Ethereum_Classic.md` · 435 words · 8 H2 / 0 H3 · 7 refs · depth 2 · demand 2 · **priority 6**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 0.
- Missing (senior-engineer view): The post-2020 defences: MESS (ECBP-1100) artificial finality, why it was later deactivated, and the hashrate-rental economics of 51% attacks; Hard-fork history (Atlantis, Agharta, Phoenix, Thanos, Magneto, Mystique, Spiral) and EVM divergence from Ethereum, such as missing EIP-1559 and the later fee/treasury debate; Client diversity and maintenance (Core-Geth stewardship, alternative clients) and Etchash DAG-size details.
- Assessment: An accurate but thin coin profile; it names ECIPs and the 51% attacks without explaining the attack mechanics or the protocol responses.

### Fiat currency

`_wiki/Fiat_currency.md` · 1,104 words · 13 H2 / 0 H3 · 0 refs · depth 2 · demand 2 · **priority 6**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 1.
- Missing (senior-engineer view): How most fiat money is actually created: commercial bank lending and deposit creation (endogenous money), against the textbook money multiplier; Deeper history and theory: Song/Yuan paper money, colonial and Civil War greenbacks, and chartalism/MMT against metallism; Links to crypto: dollar stablecoins as fiat claims, CBDC status (digital euro, e-CNY), and Bitcoin's fixed-supply critique, with citations.
- Possibly stale: Implies that the 1971 end of dollar-gold convertibility left most major currencies floating. Generalized floating began only in 1973, after the Smithsonian Agreement collapsed. / Describes the US as having 'an inflation-targeting framework in recent decades'. The Fed adopted an explicit 2% target only in 2012, moved to flexible average inflation targeting in 2020, and revised that framework again in August 2025. / Lists reserve requirements as a live tool without noting that the Fed set them to zero in March 2020 and operates an ample-reserves regime with interest on reserve balances as its main tool.
- Assessment: A generic, essentially unsourced economics overview that reads like a textbook summary. It is acceptable as background but gives no mechanism detail and contains a few imprecise historical and policy claims.

### Litecoin

`_wiki/Litecoin.md` · 415 words · 8 H2 / 0 H3 · 5 refs · depth 2 · demand 2 · **priority 6**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 2 (0 pinned, 1 on master/main). Inbound links: 2.
- Missing (senior-engineer view): Scrypt parameters (N=1024, r=1, p=1) and why its intended ASIC resistance failed, plus AuxPoW merged-mining mechanics with Dogecoin and their security implications; MWEB internals: peg-in/peg-out, the HogEx (integrating) transaction, cut-through, stealth addresses and non-interactive transactions (LIP-0003/0004), and its exchange and wallet support; Codebase lag behind Bitcoin Core and the testbed role in practice (e.g., Lightning and atomic swaps first on LTC), Taproot status, and the next halving (~2027).
- Assessment: Accurate but shallow: the history and regulatory items are correct, but MWEB, Litecoin's main technical distinction, gets one sentence and Scrypt is not explained.

### Namecoin

`_wiki/Namecoin.md` · 358 words · 8 H2 / 0 H3 · 3 refs · depth 2 · demand 2 · **priority 6**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 0 on master/main). Inbound links: 0.
- Missing (senior-engineer view): Why name_new/name_firstupdate is a commit-reveal scheme (front-running protection), name fees being burned, and name/value size limits and namespaces beyond d/ (id/ etc.); How merged mining works technically (AuxPoW, coinbase commitment, chain ID) and the 2014 episode of a single pool (F2Pool/GHash) exceeding 50% of Namecoin hashrate; Resolution stack and comparison with successors: ncdns/TLS integration, ElectrumX/SPV lookup, and how ENS and Handshake approached the same problem.
- Assessment: Accurate short coin profile (launch date, vinced, 36,000-block expiry, merged mining) citing the right 2015 WEIS study, but each mechanism gets one line and the history from 2012 onward is absent.

### Tezos

`_wiki/Tezos.md` · 358 words · 8 H2 / 0 H3 · 6 refs · depth 2 · demand 2 · **priority 6**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 1.
- Missing (senior-engineer view): How the amendment mechanism actually works: period lengths, quorum and supermajority thresholds, and the list of past protocol upgrades with what each changed; Current architecture: smart rollups, the Data Availability Layer, and Etherlink (the EVM L2), which is where most recent activity happens; Staking economics: adaptive issuance, the stake/delegate split, slashing for double-baking, and the minimum baker stake.
- Possibly stale: Says Tenderbake has given deterministic finality 'since 2023'. Tenderbake activated with the Ithaca 2 protocol in April 2022. / Lists the governance stages as 'proposal, exploration vote, testing period, promotion vote and adoption'. The testing period was replaced by a Cooldown period in later protocols. / Calls Ghostnet the long-running public testnet. Tezos announced Shadownet as Ghostnet's replacement in 2025, so this may be out of date. / Describes delegation only. It omits the staking/delegation split and adaptive issuance introduced with the Paris and Quebec protocols (2024–2025), and names no current protocol (for example, Seoul or Tallinn).
- Assessment: A brief, accurate-on-history coin overview (ICO, lawsuits, regulation). It is out of date on consensus, governance and testnet details and does not explain the self-amendment mechanism it is known for.

### Taproot

`_wiki/Taproot.md` · 2,488 words · 12 H2 / 15 H3 · 18 refs · depth 4 · demand 5 · **priority 5**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 15 (0 pinned, 9 on master/main). Inbound links: 17.
- Missing (senior-engineer view): BIP-341 signature message details (commits to all input amounts and scriptPubKeys, fixing the SegWit v0 fee-lying attack on hardware wallets; SIGHASH_DEFAULT semantics); Key-path multisig in practice: MuSig2 (BIP-327), FROST/threshold signing, nonce-handling pitfalls, and the BIP-371/373 PSBT fields needed to coordinate them; Wallet integration: tr() descriptors and Miniscript-in-tapscript, plus how proposed soft forks (CTV, OP_CAT, CSFS) would build on OP_SUCCESSx and leaf versions.
- Possibly stale: Adoption section relies on July 2025 figures (34.7% of UTXO count, 0.79% of supply), which are about 15 months old by October 2026; it also says these are 'the most recent figures in a primary source', which is likely no longer true. / The bc1p address-prefix sentence cites BIP-360 (P2MR), which has nothing to do with bech32m prefixes. This looks like a citation error, not a staleness issue.
- Assessment: Excellent spec-level walkthrough of tagged hashes, the tweak, control blocks, tapscript limits and verified test vectors. It is weaker on signing protocols (MuSig2), sighash changes and current ecosystem use.

### Bitcoin mining and difficulty adjustment

`_wiki/Bitcoin_mining_and_difficulty_adjustment.md` · 2,186 words · 11 H2 / 15 H3 · 28 refs · depth 4 · demand 4 · **priority 4**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: yes. Diagram: —. Links to source repos/specs: 19 (0 pinned, 12 on master/main). Inbound links: 2.
- Missing (senior-engineer view): Block propagation and stale-rate economics: selfish mining, SPV/empty-block mining, compact blocks/FIBRE and why latency favours large pools; Current pool and template concentration (Foundry/AntPool share, FPPS proxy pools sharing one template) with concrete numbers, not just the generic centralisation criticism; Miner economics after the 2024 halving: hashprice, fee share of revenue, ASIC efficiency (J/TH) and the role of covert/overt ASICBoost.
- Assessment: One of the stronger technical articles: precise retarget code walk-through, nBits test vectors, timewarp and BIP 54 status, Stratum v2 and CCAF data. It is weaker on the network-level game theory and on current pool concentration.

### Mempool

`_wiki/Mempool.md` · 3,002 words · 15 H2 / 15 H3 · 36 refs · depth 4 · demand 4 · **priority 4**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 34 (0 pinned, 25 on master/main). Inbound links: 12.
- Missing (senior-engineer view): How cluster linearization is actually computed (candidate search / spanning-forest algorithm, optimality, CPU bounds) and how chunks feed getblocktemplate; Transaction relay mechanics around the mempool: inv trickling and privacy, orphan handling, Erlay, and how mempool divergence affects compact block reconstruction; Concrete standardness rules beyond feerates (dust per output type, script/witness standardness, sigop and version limits) and the miner out-of-band submission ecosystem that bypasses them.
- Possibly stale: Article pins itself to 'Bitcoin Core 31.x' as of October 2026; Core ships a major release roughly every April and October (30.0 was 10 Oct 2025), so 32.0 is likely out or in RC by late October 2026 and any policy changes in it are missing. / Release table dates 24.0 to 'Nov 2022', but 24.0 was never announced; the cited release is 24.0.1 (December 2022), which is how the footnote itself labels it.
- Assessment: Strong, well-sourced policy explainer that traces RBF, CPFP, TRUC, package relay and cluster mempool release by release with code pointers. It reads more like a changelog than an algorithmic deep dive into linearization and relay.

### Quantum computing and Bitcoin

`_wiki/Quantum_computing_and_Bitcoin.md` · 1,283 words · 8 H2 / 6 H3 · 10 refs · depth 4 · demand 4 · **priority 4**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 10 (0 pinned, 4 on master/main). Inbound links: 1.
- Missing (senior-engineer view): ECDLP-specific quantum resource estimates (Roetteler et al. 2017, Häner et al. 2020, Litinski 2023): secp256k1 needs far fewer logical qubits than RSA-2048, so citing only Gidney's RSA paper understates the case; Post-quantum signature trade-offs for Bitcoin: sizes and verification costs of ML-DSA, SLH-DSA, FN-DSA and hash-based schemes (Lamport/Winternitz, SHRINCS), and their effect on block weight and the witness discount; Grover's impact on SHA-256 mining and hash-locked outputs, and rescue schemes for exposed coins such as ZK/STARK proofs of BIP-32 seed knowledge or commit-reveal spends.
- Assessment: Carefully sourced and well scoped: the exposure table, long- versus short-exposure attacks, and the BIP-360/BIP-361 summaries are strong. The Chaincode figures are admittedly left unextracted, and the sentence saying a June 2026 change 'made single-leaf P2MR outputs unsafe' is unclear and should be reworded.

### Bitcoin institutionalization debate

`_wiki/Bitcoin_institutionalization_debate.md` · 1,764 words · 10 H2 / 9 H3 · 23 refs · depth 3 · demand 2 · **priority 4**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 1 (0 pinned, 1 on master/main). Inbound links: 1.
- Missing (senior-engineer view): Quantified concentration: share of supply held by ETFs, treasury companies and governments, and custodian concentration (e.g. Coinbase custody across most ETFs); Risks of leveraged treasury companies (convertible debt, mNAV premium collapse, forced selling) and their possible effect on the market; Protocol-governance angle: whether large custodians or ETF issuers could influence fork choice or soft-fork activation, with concrete precedents or analyses.
- Possibly stale: Uses Larry Fink's 2025 chairman's letter as the latest asset-manager position; the 2026 annual letter (normally published around March/April) should exist by October 2026. / Coverage of 2025-2026 is thin for a page that claims to run '2020 to present': nothing after GameStop (May 2025) apart from the IMF review, so later ETF and treasury-company developments, such as the SEC approving in-kind creation and redemption in mid-2025, are absent.
- Assessment: Carefully attributed, neutral, dated account of ETPs, treasuries, El Salvador and the US reserve. It is narrow in scope, light on data, and stops largely in mid-2025.

### Blockchain gaming (GameFi)

`_wiki/Blockchain_gaming.md` · 3,344 words · 14 H2 / 32 H3 · 10 refs · depth 3 · demand 2 · **priority 4**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 2 (0 pinned, 0 on master/main). Inbound links: 4.
- Missing (senior-engineer view): Concrete boom-bust history with data: Axie/SLP collapse in 2022, Philippine scholarship economy, and later Ronin incidents (e.g. the August 2024 bridge exploit); Technical stack choices: gaming L2/L3s and app-chains (Ronin, Immutable), embedded wallets/session keys/ERC-4337 gas sponsorship, fully on-chain game engines (MUD, Dojo); Legal and platform constraints: securities and gambling/loot-box rules, app-store and Steam policies on NFT games, tax treatment of rewards.
- Assessment: Long, careful, beginner-oriented explainer of token economics (sources/sinks, earnings vs profit, land rentals) with good caveats, but almost entirely generic and fictional examples; little empirical history or engineering detail.

### Cryptocurrency regulation and tax in Japan

`_wiki/Cryptocurrency_regulation_and_tax_in_Japan.md` · 1,024 words · 7 H2 / 6 H3 · 10 refs · depth 3 · demand 2 · **priority 4**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 2.
- Missing (senior-engineer view): The self-regulatory layer: JVCEA rules, token-listing screening, leverage caps (2x for retail) and the 2023 travel rule, none of which are described despite JVCEA being an alias; The 2025 PSA amendments (crypto-asset intermediary business, asset-retention orders after the FTX Japan episode) and enforcement against unregistered foreign exchanges such as the 2025 app-store removal requests; Tax detail for the new regime: loss carry-forward, which assets qualify as 'specified crypto-assets', corporate tax treatment of held tokens (2023/2024 mark-to-market relief), and staking/airdrop timing rules.
- Possibly stale: 'About 21 crypto-asset exchange service providers' on the FSA register looks low; the register has listed roughly 28-30 registered providers through 2024-2025, so the figure should be re-checked against the current PDF.
- Assessment: Well-structured and cited overview with a useful dated timeline and clear tax explanation; good for a general reader. A specialist would want the self-regulatory regime, the 2025 amendments and finer tax mechanics.

### Cryptocurrency regulation and tax in Singapore

`_wiki/Cryptocurrency_regulation_and_tax_in_Singapore.md` · 1,026 words · 7 H2 / 7 H3 · 11 refs · depth 3 · demand 2 · **priority 4**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 2.
- Missing (senior-engineer view): AML/Travel Rule specifics under MAS Notice PSN02 (S$1,500 threshold, unhosted-wallet handling) and Singapore's commitment to the OECD Crypto-Asset Reporting Framework; Licensing mechanics: Major vs Standard Payment Institution, capital and safeguarding requirements, approval timelines and the list of licensed DPT firms; Tax treatment of staking rewards, airdrops, mining and DeFi yield, plus the 2022-23 enforcement fallout (Terraform, Hodlnaut, Zipmex) beyond 3AC.
- Possibly stale: Key-dates table gives the Three Arrows Capital prohibition orders as 13 Sep 2023, but the cited MAS release is dated 14 September 2023; the two should agree / 3 Jul 2023 is presented as the date MAS 'requires' statutory-trust custody and bars retail lending/staking; that was when MAS published its policy response, and the requirements took effect later (end-2023 / mid-2024 per MAS), so the framing is likely inaccurate / IRAS income-tax e-Tax guide is cited as the 9 Oct 2020 revision; IRAS has revised the digital-token guides since then, so the cited version may not be current
- Assessment: A solid, well-sourced jurisdiction page with a clear timeline and correct core facts (PS Act, 4 April 2024 scope expansion, FSMA Part 9, GST exemption). A few dates are imprecise, and AML and tax details for yield and staking income are thin.

### Cryptocurrency regulation and tax in the United Kingdom

`_wiki/Cryptocurrency_regulation_and_tax_in_the_United_Kingdom.md` · 1,095 words · 7 H2 / 8 H3 · 13 refs · depth 3 · demand 2 · **priority 4**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 3.
- Missing (senior-engineer view): Tax treatment of DeFi lending/liquidity provision (HMRC's 2025 'no gain, no loss' proposal), airdrops, hard forks, and negligible-value/lost-key loss claims; Property (Digital Assets etc.) Act 2025 recognising digital assets as a distinct category of personal property; Bank of England systemic stablecoin regime alongside the FCA regime, and transitional/overseas-firm rules (e.g. the 2023 promotions exemption for overseas firms via approvers).
- Possibly stale: "Gifts to a spouse, civil partner or charity are exempt": spouse/civil-partner transfers are no-gain/no-loss (cost basis carries over), not exempt; only charity gifts are exempt in the usual sense
- Assessment: Well-structured, current (CGT rates, CARF, SI 2026/102, FCA PS26 series, 25 October 2027 start) and properly cited; the 'criticism' section is thin and several specialist tax topics are absent.

### AssumeUTXO

`_wiki/AssumeUTXO.md` · 1,120 words · 7 H2 / 6 H3 · 13 refs · depth 4 · demand 3 · **priority 3**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 12 (3 pinned, 8 on master/main). Inbound links: 3.
- Missing (senior-engineer view): How snapshot heights and hashes get chosen and reproduced at release time (contrib/devtools/utxo_snapshot.sh, reviewer reproduction), and the snapshot file size and format; Requirement that the headers chain must contain the base block before loading, and how the node handles a snapshot base on a stale or invalid fork; Resource cost of running two chainstates (dbcache split, disk, CPU) and how to measure time-to-usable against full IBD.
- Possibly stale: Says the snapshot is identified by a MuHash. Bitcoin Core's assumeutxo parameters (m_assumeutxo_data / AssumeutxoHash) use the SHA256-based hash_serialized (renamed hash_serialized_3 after the October 2023 bug fix), not MuHash. MuHash (#19055) is a separate gettxoutsetinfo option. / The 1,100 MiB prune-budget figure and the '2026 draft BIP for P2P UTXO-set sharing' are presented without a precise source and should be checked against the current doc/assumeutxo.md and Optech.
- Assessment: The strongest article in this batch: a sourced step-by-step design, a release table, a clear trust model and practical RPC notes. The main error is calling the snapshot hash a MuHash.

### Bitcoin exchange-traded funds

`_wiki/Bitcoin_exchange-traded_funds.md` · 1,739 words · 7 H2 / 12 H3 · 36 refs · depth 4 · demand 3 · **priority 3**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 3.
- Missing (senior-engineer view): How arbitrage keeps prices in line: NAV and iNAV calculation, the benchmark fixing window, and premium or discount behaviour; Tax and accounting treatment (grantor trust, 1099 reporting, wash-sale and in-kind tax implications) and how flows and holdings are tracked; Non-US products and comparisons (European ETPs and ETNs, Canadian, Hong Kong and Australian funds), plus the futures-ETF roll cost against spot.
- Possibly stale: Says VanEck HODL's first trading day was 10 January 2024. All eleven approved spot products, HODL included, began trading on 11 January 2024, so this looks like the fund's commencement or launch date in its filing, not a trading date.
- Assessment: Heavily sourced from primary SEC filings, with a good history, creation and redemption mechanics, a custody section and balanced criticism. It lacks premium/arbitrage mechanics and non-US coverage.

### Lightning channels

`_wiki/Lightning_channels.md` · 1,452 words · 11 H2 / 6 H3 · 14 refs · depth 4 · demand 3 · **priority 3**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 25 (0 pinned, 9 on master/main). Inbound links: 3.
- Missing (senior-engineer view): On-chain HTLC security: cltv_expiry_delta and force-close deadlines, transaction pinning and replacement-cycling attacks, and how TRUC/P2A mitigate them; Channel reserve, dust exposure limits (max_dust_htlc_exposure) and update_fee disputes as causes of force-closes; State loss and backups (option_data_loss_protect, static channel backups, peer storage) and future designs such as LN-Symmetry/eltoo (APO) and PTLCs.
- Assessment: A strong, spec-grounded explainer of funding, commitments, revocation, HTLC message flow, closes, splicing and taproot channels, with current implementation status and test-vector pointers. Its main gap is adversarial on-chain behaviour (pinning, replacement cycling) and reserve/dust mechanics.

### OP_RETURN policy dispute (2025–2026)

`_wiki/OP_RETURN_policy_dispute.md` · 2,020 words · 9 H2 / 14 H3 · 27 refs · depth 4 · demand 3 · **priority 3**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 14 (0 pinned, 2 on master/main). Inbound links: 1.
- Missing (senior-engineer view): Wider data-embedding context: inscriptions/Ordinals in witness data (the larger channel under the 25% discount), Stamps/fake-pubkey UTXO bloat, and which protocols (Citrea, BitVM bridges) actually need larger OP_RETURN; Empirical relay evidence: compact-block reconstruction and missed-transaction rates under mismatched policy, the share of non-standard transactions mined via direct submission (e.g., MARA Slipstream, Libre Relay), and mempool fee-estimation effects; Post-split economics: hashrate and difficulty of the BLAKE2b chain, exchange and market treatment, and the replay/coin-separation risk for users holding coins on both chains (SIGHASH_UNIFIED usage).
- Assessment: An unusually thorough, neutral and well-sourced dated record, with release-by-release changes, quotes and dated node counts. It is weaker on the technical evidence for each side's claims and on the wider data-embedding landscape.

### Partial UTXO set

`_wiki/Partial_UTXO_set.md` · 475 words · 7 H2 / 0 H3 · 0 refs · depth 2 · demand 1 · **priority 3**

- Mechanics explained: —. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 5.
- Missing (senior-engineer view): Prior proposals and the research lineage: UTXO commitments, rolling UTXO-set hashes, TXO commitments (Peter Todd), and fraud-proof ideas; Data on UTXO age and spend distribution to back the claim that most recent spends use coins created before the window; Trust-minimized alternatives to the trusted window: SwiftSync, ZK proofs of chain validity (ZeroSync), and Utreexo bridge-node trade-offs.
- Assessment: A short, correct explainer of why a recent-blocks UTXO set cannot replace full validation, seemingly prompted by a forum thread. It has a useful comparison table but almost no sourcing, and it still contains a placeholder note asking for sources.

### BIP-324 encrypted P2P transport

`_wiki/BIP-324_encrypted_transport.md` · 1,055 words · 8 H2 / 8 H3 · 10 refs · depth 4 · demand 2 · **priority 2**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 12 (0 pinned, 10 on master/main). Inbound links: 2.
- Missing (senior-engineer view): Packet format details: the separately encrypted 3-byte length field (FSChaCha20), the AEAD over header+contents, and the rekey interval (every 224 messages); How the garbage and the first 'version' packet are authenticated (garbage as AAD) and how key derivation hashes both ElligatorSwift encodings into the ECDH secret; Concrete residual attacks and mitigations: eclipse/MITM detection in practice, v2-to-v1 downgrade handling by Core, and bandwidth/CPU overhead measurements.
- Possibly stale: Infobox lists Dhruv Mehta as sole author; BIP-324 is co-authored by Dhruv Mehta, Tim Ruffing, Jonas Schnelli and Pieter Wuille, so the attribution is incomplete.
- Assessment: Strong, well-sourced article: clear handshake walkthrough, explicit protected/not-protected table, design rationale vs TLS/Noise, deployment timeline and developer pointers. Falls short of 5 only because the wire-level cipher construction and key schedule are summarized rather than specified.

### BIP-350: Bech32m format for v1+ witness addresses

`_wiki/BIP-350.md` · 1,071 words · 8 H2 / 11 H3 · 13 refs · depth 4 · demand 2 · **priority 2**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 14 (0 pinned, 8 on master/main). Inbound links: 3.
- Missing (senior-engineer view): Why the q-before-p mutation exists algebraically (the constant 1 makes x*c(x) a valid codeword) and the BCH guarantees: 4-error detection, 90-char length limit, error-location limits; Later bech32m users and edge cases: P2A pay-to-anchor (bc1pfeessrs...) as a 2-byte v1 program, BIP-352 silent payments with its relaxed 1023-char limit, future v2+ witness versions; Practical wallet/exchange migration pitfalls: which services lagged, how send-to-unknown-version bugs burned funds, and recommended decoder behaviour for unknown versions.
- Assessment: A tight, well-sourced specification explainer with real test vectors, decoder rules and a working polymod snippet. It loses a point only for not explaining the underlying BCH algebra or the newer formats that use bech32m.

### Compact block filters

`_wiki/Compact_block_filters.md` · 1,271 words · 9 H2 / 6 H3 · 13 refs · depth 4 · demand 2 · **priority 2**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 19 (0 pinned, 13 on master/main). Inbound links: 5.
- Missing (senior-engineer view): Step-by-step GCS construction (SipHash to range N*M, sort, Golomb-Rice coding of deltas), the 1/M false-positive rate, and typical filter sizes and bandwidth per block; Privacy leakage from the block-fetch pattern and the lack of mempool/unconfirmed-transaction visibility, with mitigations (fetching from varied peers, Tor, decoy blocks); The wider client ecosystem beyond Neutrino (BDK/Kyoto, mobile LN wallets) and Bitcoin Core disabling BIP-37 serving by default in 0.19.
- Assessment: Clear, accurate and well-sourced treatment of BIP-157/158, the filter-header trust model and Core deployment, with useful developer notes. The GCS internals and quantitative bandwidth/privacy analysis are the main gaps.

### Cryptocurrency regulation and tax in India

`_wiki/Cryptocurrency_regulation_and_tax_in_India.md` · 1,357 words · 7 H2 / 9 H3 · 20 refs · depth 4 · demand 2 · **priority 2**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 0 (0 pinned, 0 on master/main). Inbound links: 2.
- Missing (senior-engineer view): How mining, staking, airdrops and gifts of VDAs are classified (income from other sources, section 56(2)(x) gifts, cost of acquisition taken as nil), plus the VDA-to-VDA swap TDS mechanics and P2P/foreign-exchange deductor rules; Enforcement under other law: 18% GST on exchange fees and services, Finance Act 2025 bringing VDAs into block assessment of undisclosed income (section 158B), and the ED/PMLA prosecutions such as WazirX; The status and fallout of the July 2024 WazirX hack and its Singapore scheme, plus the Supreme Court's 2025 remarks on regulating bitcoin trading.
- Possibly stale: Cites 'section 285BAA' as the crypto-reporting provision in force from 1 April 2026. That is 1961-Act numbering, and the 1961 Act was repealed on that same date, so the operative provision should be cited by its Income-tax Act 2025 section number. As written, it contradicts the article's own note that section numbers changed. / The timeline lists 1 Jul 2022 (TDS begins) before 22 Jun 2022 (CBDT Circular 13). This is an ordering error, not staleness, but the row should be fixed.
- Assessment: A strong, primary-sourced specialist article. It covers tax, AML enforcement and the RBI history accurately, including the new 2025 Act renumbering. Its main gaps are the income-classification questions practitioners face and a section-number inconsistency in the reporting provision.

### Miniscript and output descriptors

`_wiki/Miniscript_and_output_descriptors.md` · 1,396 words · 8 H2 / 12 H3 · 21 refs · depth 4 · demand 2 · **priority 2**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: yes. Formula: —. Diagram: —. Links to source repos/specs: 27 (0 pinned, 19 on master/main). Inbound links: 4.
- Missing (senior-engineer view): A worked fragment-to-Script translation showing type checking (B/V/K/W plus z/o/n/d/u properties) and how the satisfaction/dissatisfaction algorithm picks the cheapest non-malleable witness; Multisig backup reality: you need every xpub plus the descriptor to recover, and BIP-388 wallet-policy registration on hardware signers, with its security rationale against change-address attacks; MuSig2 descriptors (musig(), BIP-390), their Bitcoin Core support status, and how Miniscript interacts with PSBT fields (BIP-174/371) during signing.
- Assessment: The best article in this batch: an accurate, well-cited release history, correct BIP mapping, and honest trade-offs. It explains what Miniscript guarantees more than it shows how it achieves them.

### Mt. Gox collapse

`_wiki/Mt_Gox_collapse.md` · 1,282 words · 7 H2 / 4 H3 · 18 refs · depth 4 · demand 2 · **priority 2**

- Mechanics explained: yes. Trade-offs, attacks or debates: yes.
- Code excerpt: —. Formula: —. Diagram: —. Links to source repos/specs: 2 (0 pinned, 1 on master/main). Inbound links: 7.
- Missing (senior-engineer view): The June 2011 breach (leaked user database and the flash crash to $0.01) as the start of the compromise, and the 'Willy'/'Markus' trading bots that inflated volume; The CoinLab ~US$16bn claim and its 2023 settlement, which held up the rehabilitation plan, plus the claim structure (base and early lump-sum options, fiat repayments in 2023); Distribution scale and market impact: roughly 142k BTC, 143k BCH and ¥69bn held by the trustee, and on-chain tracking of the 2024 wallet movements to Kraken, Bitstamp and others.
- Assessment: An excellent, carefully sourced case study. It reconciles conflicting loss figures and gives the Decker-Wattenhofer malleability finding clearly, and its timeline is current to the October 2026 deadline extension. It is light on pre-2014 operational history and on the claim and distribution details.

## Top 15 articles to rebuild, in order

Ordered by priority score. Ties are broken by how many other articles depend on the topic. Bitcoin halving (priority 6) and Proof of stake are rebuilt first anyway, as the two flagship reference articles (Prompts 3 and 4). Everything else follows this list with Prompt 5.

1. **Proof of stake** (12): high demand, depth 2, and parameters changed in recent Ethereum forks. It needs the Gasper split, slashing maths and spec excerpts.
2. **Bitcoin** (15): the most-read page, but it is a survey; its mechanics sections should hand off to deep sub-articles with pinned code.
3. **Ethereum** (15): no EVM, gas or EIP-1559 mechanics, and no client source map.
4. **Smart contract** (15): defines contracts but never shows execution, storage, gas or a real exploit pattern.
5. **Solana** (15): proof of history, Tower BFT, Sealevel and fee markets are named but not explained.
6. **Bitcoin Script** (12): no opcode semantics, stack traces, standardness or sigop limits; the base for Taproot, Miniscript and covenants.
7. **UTXO** (12): no coin database layout (`CCoinsView`), no UTXO-set size numbers, and no commitment proposals.
8. **Segregated Witness** (12): no weight formula, BIP-143 sighash or wtxid commitment structure.
9. **Schnorr signature** (12, depth 1): no BIP-340 equations, batch verification or MuSig2. It is the cryptographic base for Taproot.
10. **PSBT** (12): restored, but still has no format, key types, BIP-370/371 or security pitfalls.
11. **Proof of work** (12): no target/bits encoding, no cumulative-work maths and no selfish-mining analysis.
12. **ECDSA** (12): no signing equations, malleability (low-S) or nonce-reuse key recovery worked through.
13. **HD wallets and seed phrases** (12): no BIP-32 CKD maths, hardened versus normal derivation or the xpub-leak attack.
14. **Blockchain scaling** (12): no rollup, data-availability or blob-fee mechanics; it should become a hub with deep children.
15. **Decentralized finance** (12): no AMM, lending or liquidation maths and no oracle-manipulation incidents. It is the base for the DeFi-security track.

