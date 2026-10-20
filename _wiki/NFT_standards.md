---
title: "Non-fungible tokens: ERC-721 and ERC-1155 standards"
description: Beginner-friendly guide to NFT standards, generative art and Art Blocks, digital ownership, metadata, royalties and security
aliases: [NFT standards, ERC-721, ERC-1155, NFT token standards, Non-fungible token standards]
categories: [Non-fungible tokens, Ethereum, Smart contracts]
updated: 2026-10-13
infobox:
  title: NFT standards
  rows:
    - Technology: "[Smart contracts](../Smart_contract/)"
    - Origin: "[Ethereum](../Ethereum/)"
    - ERC-721: Individually identified tokens
    - ERC-1155: Multiple token types and quantities
    - Ownership record: Blockchain addresses and token identifiers
    - Related standard: ERC-2981 for royalty information
---
A **non-fungible token** (**NFT**) is a blockchain token with an identity that distinguishes it from other tokens. **ERC-721** and **ERC-1155** are standards originating on [Ethereum](../Ethereum/) that define how compatible [smart contracts](../Smart_contract/) record and transfer tokens. ERC-721 tracks individual NFTs; ERC-1155 supports multiple token types, including unique items and interchangeable quantities, within one contract.[^eth721][^eth1155]

These standards provide shared technical rules. They help [wallets](../Cryptocurrency_wallet/) and applications understand tokens without requiring a separate integration for every collection. They do not determine an item's price, artistic merit or authenticity, or guarantee that a project will continue operating.

For the broader history and uses of NFTs, see [Non-fungible token](../Non-fungible_token/).
{: .hatnote}

## Basic concepts

### Fungible and non-fungible assets

**Fungibility** means that equivalent units are interchangeable. Two units of the same currency normally fulfil the same payment function. A numbered concert seat, by contrast, differs from a seat in another location. This distinction concerns what the asset represents, rather than whether it is digital.

A token is a record managed by a blockchain program. An NFT may represent an artwork, character, certificate or access pass. The token and the represented item are separate: recording a token does not place every associated file or service on the blockchain.[^nft]

For example, a fictional museum could issue token 42 for a particular digital illustration. The token identifies a record; the illustration supplies the visual content; a separate licence describes permitted uses. Understanding these three layers prevents confusion about what a buyer receives.

### Contracts, addresses and token IDs

A **contract address** identifies the program managing a collection. A **token ID** identifies an item or item type inside that program. An address identifying a holder is a separate value.

Token 42 in one collection is different from token 42 in another. A useful identifier therefore includes the **network, contract address and token ID**. A collection's display name or artwork is insufficient to establish its identity, because another project can copy both.[^erc721]

## Why token standards matter

**ERC** stands for *Ethereum Request for Comments*. ERC standards are published within the Ethereum Improvement Proposal process. ERC-721 and ERC-1155 were both proposed in 2018 and have Final status.[^erc721][^erc1155]

A standard specifies an **interface**: agreed functions that applications can call and events they can observe. A function asks a contract to return information or perform an operation. An event records an action for applications to track.

An analogy is a shared form used by many museums. Their collections differ, but the form consistently identifies the item, holder and transfer. Standardization makes the records easier to process; it does not verify every claim written on the form.

## ERC-721: individual ownership

ERC-721 gives each existing token ID one owner address. One contract can manage a large collection; a separate contract is not required for every NFT.[^eth721]

Consider a fictional collection of 1,000 illustrated animals. Token 17 represents a fox and token 18 represents an owl. Alice may own both, but each token retains its own identity when transferred. Two tokens may display identical pictures while remaining distinct ownership records.

### Main functions

The core interface includes ownership queries, transfers and approvals:[^erc721]

| Function | Plain-language purpose |
|---|---|
| `ownerOf(tokenId)` | Returns the owner of an existing token |
| `balanceOf(owner)` | Counts the owner's NFTs in this contract |
| `transferFrom(from, to, tokenId)` | Transfers an NFT without a receiver acceptance check |
| `safeTransferFrom(from, to, tokenId)` | Transfers an NFT and checks acceptance when the recipient is a contract |
| `approve(address, tokenId)` | Authorizes an address to transfer one token |
| `setApprovalForAll(operator, approved)` | Grants or revokes authority over the holder's tokens in this contract |

An **operator** is an address authorized to act for a holder. An approval grants authority; it does not itself transfer ownership.

### Optional extensions

ERC-721's metadata extension supplies a collection name, symbol and `tokenURI(tokenId)`. Its enumeration extension supplies functions for listing tokens and querying total supply. Both are optional; applications should not assume that every compliant collection implements them.[^erc721]

OpenZeppelin provides reusable ERC-721 implementations and extensions. Its documentation distinguishes the basic token contract from additional features such as enumeration. Developers still need to design issuance rules, permissions and application behaviour.[^oz721]

## ERC-1155: multiple types and quantities

ERC-1155 treats each token ID as a type with balances held by addresses. A single contract can contain fungible types alongside non-fungible types. Ownership is consequently expressed as an address's quantity of a particular ID, rather than a universal `ownerOf` lookup.[^eth1155]

Imagine a fictional game inventory:

| Token ID | Item type | Illustrative quantity |
|---|---|---|
| 1 | Gold coins | Many interchangeable units |
| 2 | Health potions | Many interchangeable units |
| 3 | Festival badges | 500 identical editions |
| 4 | A named legendary sword | One unique item |

Alice could hold 200 units of ID 1, three units of ID 2 and the single unit of ID 4. Bob could hold other units of IDs 1 and 2. This example uses one contract to express several kinds of inventory.

### Main functions

ERC-1155 standardizes single and batch operations:[^erc1155]

| Function | Plain-language purpose |
|---|---|
| `balanceOf(account, id)` | Returns an account's quantity of one type |
| `balanceOfBatch(accounts, ids)` | Returns balances for multiple account-and-ID pairs |
| `safeTransferFrom(from, to, id, amount, data)` | Transfers a quantity of one type |
| `safeBatchTransferFrom(from, to, ids, amounts, data)` | Transfers quantities of multiple types to one recipient |
| `setApprovalForAll(operator, approved)` | Grants or revokes operator authority within this contract |

Batching can reduce overhead compared with separate transactions. Savings depend on the implementation and operation; ERC-1155 does not guarantee a fixed fee reduction.[^eth1155]

### Unique items and semi-fungible assets

Issuing one unit of an ID can represent a unique item. Lasting uniqueness also requires rules that prevent additional units being minted. A quantity of one today is insufficient evidence of a permanent supply cap.[^oz1155]

**Semi-fungible** describes an application where assets are interchangeable in one context but acquire different significance later. Identical admission passes, for example, might become commemorative items after an event. The application must implement any change in behaviour; ERC-1155 does not automatically transform tickets into unique collectibles.[^eth1155]

Units sharing one ID do not have separate serial numbers in the standard balance model. If individual badges need separate ownership histories, the design must give them separate identities.

## Comparing the standards

The central design choice is whether an application tracks individual items or quantities of item types.[^oz721][^oz1155]

| Feature | ERC-721 | ERC-1155 |
|---|---|---|
| Meaning of a token ID | Individual token | Token type |
| Holder record | Owner of the individual token | Balance of each type for each address |
| Typical design | Numbered collectibles or individual certificates | Game inventory or edition quantities |
| Batch transfer in the base standard | No dedicated batch-transfer function | Included |
| Approval model | Per-token approval and operator approval | Operator approval |
| Metadata lookup | Optional `tokenURI(id)` extension | Optional `uri(id)` extension |

For a fictional archive of separately numbered manuscripts, ERC-721 is a straightforward fit. For a shop issuing many identical digital postcards alongside unique originals, ERC-1155 provides a natural inventory model. Either design may require further features beyond its base standard.

## Metadata and storage

**Metadata** describes a token, commonly through a JSON file: a structured text format that software can read. It may contain a name, description and image URI. A **URI**, or Uniform Resource Identifier, identifies a resource.[^oz721][^oz1155]

An illustrative metadata file might be:

```json
{
  "name": "Museum illustration 42",
  "description": "A fictional example of NFT metadata.",
  "image": "https://example.org/images/illustration-42.png"
}
```

The address is an example, not an actual NFT asset. The ownership record, metadata file and image file can reside in different places.

### Storage choices

Projects may use ordinary web hosting, content-addressed storage such as **IPFS**, or on-chain data. Web hosting depends on continued service. On-chain storage places data in the blockchain's storage or transaction history, with costs and practical limits.

IPFS identifies content through a **content identifier** (CID). Changing the content changes its CID, but this does not guarantee continued availability. Someone must keep hosting the data; **pinning** protects it from routine removal on a participating node.[^ipfs]

A contract may also allow its metadata reference to change. Buyers should distinguish an immutable file identifier from an immutable contract reference. A project can preserve an old IPFS file while changing which file the token points to.

ERC-1155 supports URI templates containing `{id}`. Software substitutes the token ID as a lowercase, 64-character hexadecimal value without a `0x` prefix, rather than as an ordinary decimal number.[^erc1155]

## Minting, transfers and burning

**Minting** creates tokens; **burning** removes them from circulation. The base standards describe token behaviour without imposing one public minting method, sale mechanism or maximum supply. These are contract design choices.[^oz721][^oz1155]

An illustrative lifecycle is:

1. An issuer deploys a contract with its chosen permissions and supply rules.
2. The contract creates tokens and assigns them to an address.
3. A wallet reads token records and associated metadata.
4. A holder transfers tokens directly or authorizes another address to transfer them.
5. If supported, tokens can later be burned.

Recording a blockchain transfer and displaying it in a marketplace are separate operations. An application may take time to update its cached information.

### What a safe transfer checks

Safe transfers check whether a receiving contract accepts the relevant token interface. ERC-721 uses `onERC721Received`; ERC-1155 uses single or batch receiver hooks. An incompatible receiver causes the operation to revert.[^eth721][^erc1155]

This check does not establish that the recipient is trustworthy or that the user selected the intended address. Applications and developers must also consider external calls to receiving contracts when designing security controls.[^oz1155]

## Generative art platforms

**Generative art** is artwork produced through a system of rules designed by an artist. In code-based projects, an **algorithm**, or sequence of instructions, determines how shapes, colours, textures or movement are assembled. The artist creates the rules and possible variations, while the program produces individual outputs. Art Blocks is a platform that connects this process to NFTs.[^artblocksabout]

For a fictional example, an artist might write a program that draws a landscape from circles and curved lines. Each output uses a different combination of colours, positions and sizes, while retaining the artist's recognizable visual style. The collection is a family of works produced by one creative system.

### Art Blocks: from code to a collectible

Art Blocks associates an artist's script with token-specific data. A token hash supplies variation to the algorithm; the live artwork runs in a browser using that data. The platform's core contracts manage token ownership, project scripts and token hashes.[^artblockscore][^artblocksapi]

In a simplified minting process:

1. **The artist designs the system.** Code defines the visual rules and range of possible outcomes.
2. **A collector mints a token.** The mint establishes a token and its associated hash.
3. **The script uses the hash.** This input influences the particular composition generated for that token.
4. **The artwork is rendered.** A browser executes the script to display the piece.
5. **The NFT records ownership.** Transferring the token changes its holder without creating a new mint.

Art Blocks describes its approach as deterministic: using the same script and token inputs allows the artwork to be reproduced. Some projects additionally support configurable parameters or evolving behaviour, so the rules for an individual project still matter.[^artblocksprotocol]

A useful analogy is a musical score with a particular set of performance instructions. The code is the score; the token's inputs specify a particular realization; the displayed artwork is the result. This analogy illustrates the relationship between the layers rather than a technical feature of the platform.

### Generation, storage and preservation

Generating art from code and storing art on-chain are separate design decisions. A platform may store a script on-chain while relying on additional software libraries or external assets to render it. Art Blocks' documentation distinguishes its core contract designs and their dependency arrangements.[^artblockscore]

The Art Blocks on-chain generator can assemble scripts, token hashes and supported dependency libraries into a browser-viewable HTML document from blockchain data. This supports reconstruction of works covered by that arrangement; preservation still requires attention to the actual project's inputs, dependencies and rendering environment.[^artblocksgenerator]

### How generative art relates to NFT standards

ERC-721 or ERC-1155 describes token records and transfers. The artist's algorithm describes how the art is created. A token standard does not prescribe a drawing technique, guarantee visually distinct outputs or establish artistic quality.

For example, a project could use ERC-721 to give each generated composition an individual identity. Another could use ERC-1155 to issue several interchangeable editions of one generated composition. These are illustrative designs: generative art and a token's ownership model solve different parts of the project.

## Digital ownership

**Digital ownership**, in an NFT context, refers principally to a blockchain record assigning a token to an address. It can also describe associated rights or access, but those depend on the project. A clear explanation separates the token, its content and the terms attached to it.

| Layer | What it establishes | What it does not establish by itself |
|---|---|---|
| Token record | The recorded holder or balance within a particular contract | The holder's real-world identity or the issuer's legitimacy |
| Associated content | The artwork, animation or other resource linked to the token | Exclusive possession of every copy |
| Licence or agreement | The permissions and obligations expressly provided | Rights beyond its terms |
| Service or utility | Benefits recognized by a supporting application | Continued operation of that application |

### Ownership, custody and control

A self-custody wallet lets a user control the keys that authorize transactions from their address. With a custodial service, the provider controls the relevant keys and the user depends on the provider to act on requests. In either arrangement, private keys are distinct from the artwork: a wallet provides access to token records rather than storing every associated image inside itself.

Technical control can also be limited by a contract's permissions or transfer restrictions. An on-chain ownership record does not eliminate dependencies on issuers, administrators or external services.

### Provenance and authenticity

**Provenance** is an item's recorded origin and subsequent history. NFT records can help trace issuance and transfers within a collection. For generative art, the association between a script, token inputs and a collectible can additionally help explain how the work was produced.[^artblockscore]

However, a traceable history is only useful when the starting point is trustworthy. A copied collection can have a complete blockchain history of its own. Verifying the issuer and contract address remains essential. Transfer records also do not necessarily reveal whether a transfer was a sale, gift or movement between addresses controlled by one person.

### Copying a work versus holding its token

A person may save a copy of a displayed artwork without receiving its NFT. Conversely, a token holder may own the collectible record while other people can view or reproduce the image. The distinction is similar to owning a particular collectible edition while reproductions of its subject remain available.

For an illustrative generative artwork, a collector might hold token 42 while anyone can view its rendered output. Whether the collector may sell prints, use it commercially or modify it depends on the applicable licence. Token ownership alone does not answer those questions.

## Royalties and ownership rights

**ERC-2981** provides a shared way to report royalty information. Its `royaltyInfo(tokenId, salePrice)` function returns a recipient and royalty amount. It does not collect payment or compel every marketplace to honour it. Royalty payment requires support in the sale process.[^royalty]

For example, a contract may report a royalty of five payment units on a sale priced at 100 units. Reporting that amount and actually sending it to the recipient are different actions. Neither ERC-721 nor ERC-1155 guarantees resale royalties.

Token ownership also needs to be distinguished from rights in the represented work. Neither token interface itself grants copyright, establishes a licence, or verifies legal title to physical property. Those questions require separate agreements and applicable law. The standards principally govern blockchain records and operations.

## Uses and limitations

NFTs can represent collectibles, game items, membership passes and other individually identifiable assets.[^nft] Each use depends on more than token compatibility:

- **Artwork:** the file must remain available, and the issuer's relationship to the work must be established.
- **Games:** a game must explicitly support an item; a shared token interface does not make it usable in every game.
- **Membership:** the organization must continue providing the promised access.
- **Certificates:** the issuer must be credible, and verification should consider whether transfers undermine the certificate's meaning.
- **Physical items:** delivery, custody and enforceable rights require arrangements outside the token record.

These are application design considerations. A standard supplies a common technical vocabulary, while the surrounding system determines practical usefulness.

## Security and verification

Before relying on an NFT, relevant checks include:

- **Identity:** confirm the network and contract address through the issuer's established channels.
- **Supply:** inspect whether the contract permits further issuance, including additional units of an ERC-1155 ID.
- **Administration:** identify powers to pause transfers, upgrade code or change metadata.
- **Approvals:** understand which operator receives authority and which collection it affects.
- **Persistence:** examine how metadata and media will remain accessible.
- **Rights and services:** read the associated licence and access conditions.

These checks address different layers of the system. A technically compliant contract can still belong to an impersonator, depend on unavailable files or represent a service that stops operating.

### Approval scope

Operator approval can authorize transfers of all of a holder's tokens within the approving contract. It is broader than approving a single ERC-721 token. ERC-1155's base interface has no equivalent per-token approval function.[^erc721][^erc1155]

Disconnecting a website from a wallet interface is distinct from revoking an on-chain approval. Revocation requires changing the contract's approval state. A holder should understand authorization requests before signing them.

## Frequently asked questions

### Can an NFT image be copied?

Yes. Copying a displayed image does not transfer its associated token. It can nevertheless create confusion about authenticity or permitted use. Token identity and media exclusivity are different concepts.

### Are all ERC-1155 tokens NFTs?

No. The standard supports unique items and interchangeable quantities. The contract's ID and supply design determine how a particular type behaves.[^eth1155]

### Does burning delete the artwork?

Burning changes token records. It does not automatically erase independently hosted files, downloaded copies or past blockchain records.

### Does a low token ID imply greater value?

No. An ID is an identifier. Any significance attached to numbering comes from the project and its audience, rather than a valuation rule in either standard.

### Can tokens move between blockchains automatically?

No. Compatibility with an interface does not provide cross-chain transfer. A bridge or other cross-chain system requires additional mechanisms and introduces its own assumptions.

## See also

- [Blockchain gaming (GameFi)](../Blockchain_gaming/)
- [Non-fungible token](../Non-fungible_token/)
- [Ethereum](../Ethereum/)
- [Smart contract](../Smart_contract/)
- [Cryptocurrency wallet](../Cryptocurrency_wallet/)
- [Blockchain](../Blockchain/)

## References

[^erc721]: Entriken, William; Shirley, Dieter; Evans, Jacob; Sachs, Nastassia (2018). ["ERC-721: Non-Fungible Token Standard"](https://eips.ethereum.org/EIPS/eip-721). *Ethereum Improvement Proposals*.
[^erc1155]: Radomski, Witek; et al. (2018). ["ERC-1155: Multi Token Standard"](https://eips.ethereum.org/EIPS/eip-1155). *Ethereum Improvement Proposals*.
[^eth721]: ["ERC-721 Non-Fungible Token Standard"](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/). *ethereum.org*. Accessed 13 October 2026.
[^eth1155]: ["ERC-1155 Multi-Token Standard"](https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/). *ethereum.org*. Accessed 13 October 2026.
[^oz721]: ["ERC-721"](https://docs.openzeppelin.com/contracts/5.x/erc721). *OpenZeppelin Contracts 5.x documentation*. Accessed 13 October 2026.
[^oz1155]: ["ERC-1155"](https://docs.openzeppelin.com/contracts/5.x/erc1155). *OpenZeppelin Contracts 5.x documentation*. Accessed 13 October 2026.
[^ipfs]: ["Persistence"](https://docs.ipfs.tech/concepts/persistence/). *IPFS documentation*. Accessed 13 October 2026.
[^royalty]: Burks, Zach; Morgan, James; Malone, Blaine; Seibel, James (2020). ["ERC-2981: NFT Royalty Standard"](https://eips.ethereum.org/EIPS/eip-2981). *Ethereum Improvement Proposals*.
[^nft]: ["Non-fungible tokens (NFT)"](https://ethereum.org/en/nft/). *ethereum.org*. Accessed 13 October 2026.
[^artblocksabout]: ["About Art Blocks"](https://www.artblocks.io/articles/about-art-blocks). *Art Blocks*. Accessed 13 October 2026.
[^artblocksprotocol]: ["Art Blocks Protocol Overview"](https://docs.artblocks.io/protocol/overview/). *Art Blocks documentation*. Accessed 13 October 2026.
[^artblockscore]: ["Core Contract (V3)"](https://docs.artblocks.io/developer/core-contract/). *Art Blocks documentation*. Accessed 13 October 2026.
[^artblocksapi]: ["Token & Generator APIs"](https://docs.artblocks.io/developer/token-and-generator-apis/). *Art Blocks documentation*. Accessed 13 October 2026.
[^artblocksgenerator]: ["The Art Blocks Generator"](https://docs.artblocks.io/protocol/on-chain-generator/). *Art Blocks documentation*. Accessed 13 October 2026.
