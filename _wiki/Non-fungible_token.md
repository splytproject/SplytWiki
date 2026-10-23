---
title: Non-fungible token
description: Unique blockchain token used to record ownership of a digital or physical item
aliases: [NFT, NFTs, Non-fungible tokens]
categories: [Non-fungible tokens, Ethereum, Smart contracts]
updated: 2026-10-23
last_modified: 2026-10-23
---
A **non-fungible token** (**NFT**) is a unique token recorded on a [blockchain](../Blockchain/), used to certify ownership of a particular item. The item is most often a digital image, video, collectible, in-game object or membership pass. Unlike [cryptocurrencies](../Cryptocurrency/) such as [bitcoin](../Bitcoin/), where every unit is interchangeable (*fungible*), each NFT has its own identifier and cannot be swapped one-for-one with another.[^erc721]

NFTs became widely known during a speculative boom in 2021, when some digital artworks and collectibles sold for millions of dollars. That year "NFT" was also named Collins Dictionary's word of the year. Trading volumes and prices fell sharply in 2022. NFTs are used for digital art, collectibles, gaming, event tickets and proving membership of online communities. They have been criticised for speculation, fraud, and the fact that buying an NFT usually does not give the buyer copyright in the underlying work.

## How NFTs work

Main article: [Non-fungible tokens: ERC-721 and ERC-1155 standards](../NFT_standards/)
{: .hatnote}

An NFT is created, or *minted*, by a [smart contract](../Smart_contract/) that keeps a record of which address owns each token ID. On [Ethereum](../Ethereum/), most NFTs follow the **ERC-721** standard, finalised in 2018. It defines a common set of functions for transferring tokens and checking ownership so that wallets and marketplaces can support any compatible NFT.[^erc721] The later **ERC-1155** standard lets a single contract manage both fungible and non-fungible tokens, which is useful for games.[^erc1155]

Each token usually points to **metadata**, such as a name, description and a link to an image or other media file. Because storing large files on a blockchain is expensive, the media itself is normally stored elsewhere. Examples include a web server or the decentralized storage network IPFS. If that file is removed or changed, the token may point to nothing, a weakness critics often highlight. Some projects store their artwork entirely on-chain to avoid this.

NFTs are bought and sold on marketplaces, and their smart contracts can be designed to pay the original creator a royalty on resales. However, many marketplaces later made such royalties optional.

## History

### Early experiments

In 2012 and 2013 developers experimented with *colored coins*, which marked small amounts of bitcoin to represent other assets. In May 2014 the artist Kevin McCoy minted *Quantum*, an animated image, on the Namecoin blockchain; it is often described as the first NFT artwork.

### CryptoPunks and CryptoKitties

In June 2017 the studio Larva Labs released **CryptoPunks**, 10,000 unique pixel-art characters given away free on Ethereum. They later became one of the best-known NFT collections. In late 2017 the game **CryptoKitties**, in which players bought and bred unique digital cats, became so popular that it congested the Ethereum network. Its developers proposed the ERC-721 standard.

### 2021 boom and decline

NFTs drew worldwide attention in 2021. On 11 March 2021 the auction house Christie's sold *Everydays: The First 5000 Days* as an NFT for $69.3 million. The work is a digital collage by the artist Beeple. Collections such as the **Bored Ape Yacht Club**, launched in April 2021, were bought by celebrities and traded for large sums. Major brands, sports leagues and musicians also launched NFT projects.

Trading volumes fell steeply in 2022 amid a broader fall in cryptocurrency prices, and many collections lost most of their value. NFT activity has continued at a smaller scale, including on other blockchains such as [Solana](../Solana/) and, through the *Ordinals* protocol introduced in 2023, on Bitcoin.

## Uses

- **Digital art and collectibles**: artists sell editions of their work directly to collectors.
- **Gaming**: in-game items, characters and land represented as NFTs can, in principle, be traded outside the game.
- **Membership and access**: holding an NFT can act as a pass to online communities, events or services.
- **Tickets**: event tickets issued as NFTs can be verified and resold under rules set by the issuer.
- **Domain names and identity**: services such as the Ethereum Name Service issue human-readable names as NFTs.

## Generative art and digital ownership

**Generative art platforms** connect artist-written code with NFT issuance. On **Art Blocks**, an artist designs an algorithm that produces varied compositions, and token-specific inputs determine individual works. The code defines the creative system; the NFT identifies the collectible associated with an output.[^artblocks]

For example, a fictional artist could write a program that draws abstract gardens. Each mint could produce a different arrangement of colours and shapes under the same artistic rules. The resulting token is distinct from the code and displayed image.

**Digital ownership** refers to the recorded holding of a token and any separately specified rights or benefits. A blockchain can record who holds the token. However, it does not automatically give that holder copyright, exclusive access to an image or permanent access to a service. Files can be copied without transferring the NFT, and the issuer's identity and licence remain important.

For a detailed explanation of Art Blocks, provenance, custody and the layers of digital ownership, see [Non-fungible tokens: ERC-721 and ERC-1155 standards](../NFT_standards/#generative-art-platforms).

## Criticism

- **Rights**: buying an NFT normally transfers only the token, not the copyright or other intellectual property in the artwork. This applies unless a separate licence says otherwise.
- **Fraud and theft**: the market has suffered from counterfeit collections, "rug pulls" and phishing attacks that steal NFTs from wallets. Some people have also minted NFTs of artwork they do not own.
- **Wash trading**: some sales are made between accounts controlled by the same person to inflate prices and trading volume.
- **Speculation**: many buyers treated NFTs mainly as investments, and most collections lost the bulk of their value after 2021.
- **Environmental impact**: before Ethereum's move to [proof of stake](../Proof_of_stake/) in 2022, minting and trading NFTs on Ethereum consumed significant amounts of energy.

## See also

- [Blockchain gaming (GameFi)](../Blockchain_gaming/)
- [Smart contract](../Smart_contract/)
- [Ethereum](../Ethereum/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)

## References

[^erc721]: Entriken, William; Shirley, Dieter; Evans, Jacob; Sachs, Nastassia (2018). ["ERC-721: Non-Fungible Token Standard"](https://eips.ethereum.org/EIPS/eip-721). *Ethereum Improvement Proposals*.
[^erc1155]: Radomski, Witek; et al. (2018). ["ERC-1155: Multi Token Standard"](https://eips.ethereum.org/EIPS/eip-1155). *Ethereum Improvement Proposals*.
[^artblocks]: ["Art Blocks Protocol Overview"](https://docs.artblocks.io/protocol/overview/). *Art Blocks documentation*. Accessed 13 October 2026.
