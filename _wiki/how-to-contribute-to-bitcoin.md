---
title: How to contribute to Bitcoin
description: A practical guide to contributing to Bitcoin Core, plus a part-by-part reading path through how Bitcoin works
aliases: [Contributing to Bitcoin, Contribute to Bitcoin Core, Start here, Getting started, Developer onboarding, Learning path]
categories: [Bitcoin, Development, Guide, Index]
updated: 2026-10-18
infobox:
  image: bitcoin.svg
  caption: How to contribute to Bitcoin
  rows:
    - header: Audience
    - Primary: Developers new to Bitcoin
    - Also: Curious beginners
    - header: Contributing
    - Main repository: bitcoin/bitcoin on GitHub
    - Best first contribution: Review and testing
    - Chat: "#bitcoin-core-dev on Libera Chat"
    - Protocol discussion: bitcoindev mailing list
---

> **In plain terms:** Bitcoin has no company and no boss. Its software is built in the open by volunteers and funded developers who propose changes, review each other's work, and test it. Anyone can join. The fastest way in is to learn how the system works, then help review and test changes before writing your own.

This page has two parts. **Part 1** explains the contribution process for Bitcoin Core, the reference implementation. **Part 2** is a reading path through every article on this wiki, ordered so each one builds on the last. If you are completely new, read Part 2 first, then come back.

# Part 1: The contribution process

## How the project is organised

Bitcoin Core uses an open contributor model: anyone may contribute peer review, testing and patches. There are no privileged "Bitcoin Core developers" as such; trust is earned over time. A small group of repository maintainers merges pull requests, manages the release cycle and moderates.

Two kinds of change need to be kept apart:

| Kind of change | Where it is decided | Bar to clear |
|---|---|---|
| Code changes to Bitcoin Core (bug fixes, performance, wallet, RPC, tests) | GitHub pull requests, judged by maintainers on peer review | Clear use case, good review, tests |
| Changes to Bitcoin's **consensus rules** | The whole ecosystem | Extensive mailing-list discussion, a numbered BIP, wide technical consensus, and then activation (see [Soft fork and hard fork](../Soft_fork_and_hard_fork/)) |

Most new contributors work on the first kind. Consensus changes are rare, slow and deliberately difficult.

## Step 1: Learn the system

Work through Part 2 of this page. You do not need to know everything, but you should understand the [UTXO](../UTXO/) model, what a [Bitcoin node](../Bitcoin_node/) validates, the difference between consensus and policy ([Mempool](../Mempool/)), and how [Bitcoin Script](../Bitcoin_Script/) works.

## Step 2: Build Bitcoin Core and run the tests

Clone the repository and follow the build guide for your operating system in its `doc/` folder. Recent versions build with CMake; a typical Linux build looks like this (check `doc/build-*.md` for the dependencies your system needs):

    git clone https://github.com/bitcoin/bitcoin.git
    cd bitcoin
    cmake -B build
    cmake --build build -j"$(nproc)"
    ctest --test-dir build                    # unit tests
    build/test/functional/test_runner.py      # functional tests

Then run a private chain and try the RPCs mentioned in each article's "Developer notes":

    build/bin/bitcoind -regtest -daemon
    build/bin/bitcoin-cli -regtest createwallet dev
    build/bin/bitcoin-cli -regtest -generate 101

See [Testnet](../Testnet/) for which test network to use when.

## Step 3: Start with review and testing

The project's own contributing guide says in-depth reviewing and testing are **the bottleneck of the project** and the most effective way to start. Reviewing teaches you far more about the code and process than opening pull requests, and often uncovers follow-up work you can do yourself.

Good ways to begin:

- Join the **Bitcoin Core PR Review Club** ([bitcoincore.reviews](https://bitcoincore.reviews/)), which walks through one pull request per session with notes and questions.
- Pick an open pull request in an area you have read about, check it out, build it, run the tests, try it by hand, and leave a review.
- Look for issues labelled "good first issue" on GitHub.

### Review vocabulary

Reviews use a shared shorthand:

| Term | Meaning |
|---|---|
| `Concept ACK` / `Concept NACK` | I do / do not agree with the goal of this change |
| `Approach ACK` / `Approach NACK` | I agree with the goal, and do / do not agree with how it is done |
| `ACK <commit>` | I have reviewed the code at this commit, followed by how you reviewed it ("tested" with what you did, or "reviewed the code but did not test it") |
| `nit` | A trivial, usually non-blocking comment |

A NACK must give reasons; NACKs without reasoning may be disregarded.

## Step 4: Open a pull request

Workflow:

1. Fork the repository (once), then create a topic branch.
2. Make **atomic commits**: each commit builds and passes tests on its own, and formatting changes or code moves are not mixed with behaviour changes. Tests change in the same commit as the behaviour they test.
3. Write commit messages with a short subject line (50 characters max), a blank line, then an explanation of *why*. Never put `@` mentions in commit messages.
4. Push to your fork and open a pull request against `bitcoin/bitcoin` (GUI-only changes in `src/qt` go to `bitcoin-core/gui`).

Prefix the pull request title with the area it affects, for example:

| Prefix | Area |
|---|---|
| `consensus` | Consensus-critical code |
| `doc` | Documentation |
| `net` / `p2p` | Peer-to-peer networking |
| `rpc`, `rest`, `zmq` | APIs |
| `wallet` | Wallet |
| `test`, `qa`, `ci` | Tests and CI |
| `refactor` | Structural changes with no behaviour change |
| `build` | CMake build system |

Examples: `net: Automatically create onion service, listen on Tor` or `log: Fix typo in log message`.

The description should explain *what* the change does and, more importantly, *why*, and link related issues or mailing-list threads. Say which tests cover the change or how you tested it manually. Use `[WIP]` in the title if it is not ready to merge.

You must fully understand your own change: pull requests may be closed if the author cannot explain or has not tested them. If you use AI tools, the project has an AI policy (`doc/AI_POLICY.md`) that you are expected to follow, and you remain responsible for explaining your work in your own words.

## Step 5: Respond to feedback

- Reply to every review comment, either by changing the code or by explaining why you disagree.
- You may be asked to **squash** fixup commits (`git rebase -i`) or to **rebase** on the latest `master` (`git fetch https://github.com/bitcoin/bitcoin && git rebase FETCH_HEAD`). Do not open a new pull request for the same change.
- Review takes time and is unpredictable. While you wait, the best thing you can do is review other people's pull requests.

## What tends to get merged

Pull requests should be focused: a feature, a bug fix or a refactor, not a mixture. In general they need a clear use case, good peer review, appropriate unit, functional and fuzz tests, and updated documentation. Bug fixes should include a test that shows the bug and proves the fix. New contributors are asked **not** to start with refactoring pull requests, and trivial changes with no clear benefit may be closed to save reviewers' time.

## Proposing protocol changes (BIPs)

Changes to consensus or the P2P protocol start with discussion, not code:

1. Discuss the idea on the **bitcoindev mailing list** ([groups.google.com/g/bitcoindev](https://groups.google.com/g/bitcoindev); archive at [gnusha.org/pi/bitcoindev](https://gnusha.org/pi/bitcoindev/)) and, where relevant, on Delving Bitcoin.
2. Write it up as a **Bitcoin Improvement Proposal (BIP)** in the [bitcoin/bips](https://github.com/bitcoin/bips) repository, following that repository's README for format and process.
3. Expect a long period of review. Consensus changes then need an activation process and broad adoption (see [Soft fork and hard fork](../Soft_fork_and_hard_fork/)).

[Silent payments](../Silent_payments/), [Taproot](../Taproot/) and the [Testnet](../Testnet/) fixes are all examples on this wiki of ideas that went through mailing-list discussion and BIPs.

## Other ways to contribute

- **Translations** go through Bitcoin Core's translation process, not pull requests.
- **Other projects:** libsecp256k1 (cryptography), wallets, Lightning implementations, alternative nodes such as Floresta (see [Partial UTXO set](../Partial_UTXO_set/)), and developer tooling all welcome contributors.
- **This wiki:** adding citations to primary sources, diagrams, test vectors and corrections is a good way to learn and to help others.

## Where to talk

| Channel | Use for |
|---|---|
| `#bitcoin-core-dev` on Libera Chat ([web client](https://web.libera.chat/#bitcoin-core-dev)) | Day-to-day Bitcoin Core development |
| GitHub issues and pull requests | Specific code changes |
| bitcoindev mailing list | Consensus and P2P protocol proposals |
| Bitcoin Core PR Review Club | Learning by reviewing, with guidance |
| [Bitcoin Forum, Development & Technical Discussion](https://bitcointalk.org/index.php?board=6.0) | Questions and long-form technical discussion |

# Part 2: How Bitcoin works, part by part

Every article opens with a plain-language summary, then covers how it works, why it exists, and developer notes. Read them in this order.

## 1. The data model
1. [UTXO](../UTXO/): how Bitcoin tracks who owns what without accounts
2. [Bitcoin node](../Bitcoin_node/): what a node validates and stores
3. [Proof of work](../Proof_of_work/): how blocks are produced and the best chain is chosen
4. [Chain reorganization](../Chain_reorganization/): what happens when two blocks compete

## 2. Transactions and rules
5. [Mempool](../Mempool/): where unconfirmed transactions wait, and consensus vs policy
6. [Bitcoin Script](../Bitcoin_Script/): the small language that locks and unlocks coins
7. [Multisignature](../Multisignature/): m-of-n spending and the `OP_CHECKMULTISIG` quirk
8. [Segregated Witness](../Segregated_Witness/): the witness section, weight and the fee discount
9. [OP_RETURN](../OP_RETURN/): data-carrying outputs

## 3. Cryptography
10. [ECDSA](../ECDSA/): the original signature scheme, and why nonces matter
11. [Schnorr signature](../Schnorr_signature/): BIP-340 signatures and key aggregation
12. [Taproot](../Taproot/): key tweaking, the key path and the script path

## 4. Wallets and tooling
13. [HD wallets and seed phrases](../HD_wallets_and_seed_phrases/): BIP-32 and BIP-39
14. [PSBT](../PSBT/): passing unsigned or partly signed transactions between tools
15. [Silent payments](../Silent_payments/): reusable addresses without address reuse
16. [Testnet](../Testnet/): regtest, signet and testnet4

## 5. Changing and scaling Bitcoin
17. [Soft fork and hard fork](../Soft_fork_and_hard_fork/): how consensus rules change
18. [Partial UTXO set](../Partial_UTXO_set/): why a node can't keep only recent blocks, and what works instead

## Suggested first session

Build Bitcoin Core (Step 2 above), start regtest, and work through the "Developer notes" of [UTXO](../UTXO/), [Mempool](../Mempool/) and [PSBT](../PSBT/) in that order. Then join a PR Review Club session.

## See also

- [Bitcoin node](../Bitcoin_node/)
- [Soft fork and hard fork](../Soft_fork_and_hard_fork/)
- [Testnet](../Testnet/)

## Notes and further reading

- The contribution process in Part 1 is summarised from Bitcoin Core's [CONTRIBUTING.md](https://github.com/bitcoin/bitcoin/blob/master/CONTRIBUTING.md), read on 18 October 2026. It changes over time, so treat that file as the authority.
- Build instructions: the `doc/build-*.md` files in the Bitcoin Core repository; developer conventions: `doc/developer-notes.md`.
- BIP process: the README of the [bitcoin/bips](https://github.com/bitcoin/bips) repository.
