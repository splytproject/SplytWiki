# SplytWiki deep-article standard

This is the long-form standard for technical articles. The rules in [`CLAUDE.md`](../CLAUDE.md) (house style, depth rule, source rules, neutrality) apply on top of it. Copy [`_templates/deep-article.md`](../_templates/deep-article.md) to start a new article.

**Who it is for.** A deep article serves two readers at once: a newcomer, who reads the plain-terms box and the lead, and an engineer, who reads everything else. Both must leave knowing something they could not have learned from the first page of a search engine.

**Which articles use it.** Protocol, cryptography, client and mechanism topics (Mempool, Taproot, Proof of stake, Bitcoin halving, Lightning channels…). Coin pages, history, case studies and country regulation pages keep the standard structure in `CLAUDE.md`, but borrow any section below that fits: a regulation page can use "History and debates"; a coin page can use "Trade-offs and limitations".

**Skip, don't pad.** A section that does not apply to the topic is left out. An empty or generic section is worse than none.

## Section skeleton

| # | Section | Heading in the article | Required? |
|---|---|---|---|
| 1 | Lead and infobox | (no heading) + `> **In plain terms:**` box | Always |
| 2 | TL;DR for engineers | `## For engineers: key facts` | Always for technical topics |
| 3 | How it works | `## How it works` | Always |
| 4 | The math | `## The math` | When there is a formula, schedule or bound |
| 5 | In the code | `## In the code` | When a reference implementation exists |
| 6 | Design decisions and alternatives | `## Design decisions and alternatives` | When alternatives were seriously proposed |
| 7 | Trade-offs and limitations | `## Trade-offs and limitations` | Always |
| 8 | Attack vectors and failure modes | `## Attack vectors and failure modes` | When the mechanism can be attacked or has failed |
| 9 | History and debates | `## History and debates` | Always |
| 10 | Implementations and source map | `## Implementations and source map` | When more than one implementation, or any source repo |
| 11 | Further reading, References | `## Further reading`, `## See also`, `## References` | Always (Further reading optional) |

Front matter must include `verified_against`, `last_verified`, `difficulty`, `prerequisites` and `source_repos` (see `CLAUDE.md` §1).

---

### 1. Lead and infobox

Three or four sentences a newcomer understands: what it is, what problem it solves, where it is used, and one fact that sets it apart. The plain-terms box above the lead uses no jargon at all. The infobox holds the hard identifiers: spec numbers, activation height or date, reference implementation, and "Superseded by" where relevant.

**Good.**
> The **mempool** is the set of valid, unconfirmed transactions a Bitcoin node holds in memory while they wait to be mined. Each node keeps its own; there is no global mempool. Nodes use it to relay transactions, to estimate fees and, if they mine, to choose a block's contents.

**Bad.**
> The mempool is a very important part of Bitcoin that plays a key role in how transactions work. It is often misunderstood, and in this article we will explore everything you need to know about it.

*Why bad:* no facts, filler phrases, and an "in this article" signpost.

### 2. TL;DR for engineers

Exactly five bullets of hard facts, each with a number, a name or a version. They are written for someone who will read nothing else.

**Good.**
> - Default size limit: 300 MB of memory (`-maxmempool=300`), as of Bitcoin Core v30.0.
> - Unconfirmed transactions expire after 336 hours (`-mempoolexpiry`).

**Bad.**
> - The mempool is where transactions wait.
> - It can get congested when demand is high.

*Why bad:* nothing a reader could not guess, and no numbers.

### 3. How it works

Mechanics, step by step: the inputs, the state that changes, the messages exchanged and the order of events. Use a numbered list for sequences and a Mermaid diagram (or SVG) for anything that flows, branches or happens over time. Name the actual data structures and messages (`inv`, `getdata`, `CTxMemPool`, `BeaconState`).

**Good.**
> 1. A peer announces a transaction with an `inv` (or `wtxidrelay`) message carrying its wtxid.
> 2. If the node does not already have it, it replies with `getdata` and receives the `tx`.
> 3. `AcceptToMemoryPool` runs consensus checks, then policy checks such as standardness, the fee-rate floor and package limits.

**Bad.**
> When a transaction is broadcast, nodes check it and add it to their mempool if it is valid.

*Why bad:* correct, but it says nothing about how, in what order, or under which rules.

### 4. The math

Formulas in LaTeX (set `math: true` in the front matter). Define every variable in a list below the formula, give units, and follow with a **worked numeric example** whose numbers the reader can reproduce. If code can check the arithmetic, include the script and its output.

**Good.**
> $$S = \sum_{i=0}^{32} 210\,000 \cdot \left\lfloor \frac{50 \cdot 10^{8}}{2^{i}} \right\rfloor$$
> where $S$ is the total number of satoshis ever issued and $i$ is the halving era. Evaluating the sum gives 2,099,999,997,690,000 satoshis, or 20,999,999.9769 BTC.

**Bad.**
> The supply follows a geometric series that converges to 21 million.

*Why bad:* no formula, no variables, and the actual cap is not 21 million.

### 5. In the code

Short excerpts (under about 25 lines), **fetched during the session** from the upstream repository at a pinned tag or commit, with path, line range, permalink and licence. Explain the excerpt line by line, or block by block, in prose or a numbered list directly after it. Never reconstruct code from memory.

**Good.**
> From `src/validation.cpp`, lines 1869–1880, at `v30.0` ([permalink](https://github.com/bitcoin/bitcoin/blob/v30.0/src/validation.cpp#L1869-L1880), MIT licence):
> *(excerpt)*
> Line 3 integer-divides the height by `nSubsidyHalvingInterval`, so every block in an era gets the same subsidy…

**Bad.**
> The code looks something like this: `subsidy = 50 >> halvings`

*Why bad:* reconstructed, unpinned and not the real code.

### 6. Design decisions and alternatives

Why this design and not the obvious alternatives. Each alternative names who proposed it, where (BIP, EIP, mailing-list post, paper) and why it was rejected or deferred, in the words of the people involved.

**Good.**
> A smooth per-block decay was possible; the step function was in the first release. BIP-42 (2014) later fixed the shift overflow rather than change the schedule, because Pieter Wuille argued a schedule change would be a hard fork…

**Bad.**
> Other approaches were considered, but this one was chosen because it is simpler.

*Why bad:* no names, no sources, no actual reasons.

### 7. Trade-offs and limitations

What the mechanism cannot do and what it costs, stated plainly and with numbers. Use the **Trade-off** and **Known limitation** callouts (see `docs/COMPONENTS.md` once available). Every item is concrete.

**Good.**
> Larger blocks raise throughput linearly but also raise the bandwidth and storage a full node needs. At 4 MB of weight per block, the chain grows by up to about 210 GB a year.

**Bad.**
> There are some trade-offs between scalability and decentralization.

*Why bad:* true of everything, so it tells the reader nothing.

### 8. Attack vectors and failure modes

Each attack has a mechanism, preconditions (what the attacker needs), impact, mitigation and, where one exists, a **real incident** with a date and a post-mortem link. Use the **Attack vector** callout.

**Good.**
> **Transaction pinning.** An attacker attaches a large, low-fee child to a shared transaction, so a replacement must pay for the child's size under BIP-125 rule 3. This affected Lightning anchor outputs. TRUC (v3) transactions, in Bitcoin Core v28.0, cap the child at 1,000 vB…

**Bad.**
> Like any system, it could be vulnerable to attacks by malicious actors.

*Why bad:* generic, with no mechanism and no incident.

### 9. History and debates

A dated sequence of events: proposals by number, PRs, activation heights, forks, incidents. Debates name each side, link their own words and report what happened. There are no verdicts on open questions ("neutrality with teeth", `CLAUDE.md` §5). For a long timeline, a table or a Mermaid timeline beats prose.

**Good.**
> In 2021 the activation method split developers. Proponents of `LOT=true`, including Luke Dashjr, argued miners should not be able to veto a soft fork. Speedy Trial's authors, among them David Harding and Russell O'Connor, argued that a three-month miner vote was lower-risk. Speedy Trial locked in at block 687,284 on 12 June 2021.

**Bad.**
> There was some controversy over activation, but in the end the community came together and it was activated successfully.

*Why bad:* no sides, no arguments, and editorialising ("came together", "successfully").

### 10. Implementations and source map

A table of every serious implementation with pinned links to the files that implement the mechanism.

| Client | Language | Repository | Key file(s) | Pinned at |
|---|---|---|---|---|
| Bitcoin Core | C++ | `bitcoin/bitcoin` | `src/validation.cpp` | `v30.0` |

**Bad:** a list of project names with homepage links only.

### 11. Further reading and references

**Further reading** holds specs, papers and talks worth reading in full, each with a one-line note. **References** holds footnotes only. Prefer primary sources (`CLAUDE.md` §4).

---

## Pre-publish checklist

- [ ] The plain-terms box and lead make sense to a newcomer; the TL;DR has five bullets with numbers.
- [ ] Every section answers *how*, not only *what*; no section could be pasted from a search-result snippet.
- [ ] Every code excerpt was fetched during the session, is under about 25 lines, and links a pinned tag or commit with path, lines and licence.
- [ ] Every number cites its spec or source file and the version it applies to.
- [ ] Every formula defines its variables and has a worked example; the arithmetic was re-run.
- [ ] At least one diagram where something flows, branches or happens in sequence.
- [ ] Trade-offs and attacks are concrete (numbers, incidents, papers), with callouts.
- [ ] Debates name both sides and link their own words; there are no verdicts on open questions.
- [ ] No prices, market caps or rankings. No marketing words. Changing facts say "as of *month year*".
- [ ] Glossary terms are linked once; at least three related articles link to this one.
- [ ] Front matter has `verified_against`, `last_verified`, `difficulty`, `prerequisites` and `source_repos`; `updated` and `last_modified` are bumped.
- [ ] `python -I reports/check_style.py <file>` passes: footnotes, links, and sentences of 25 words or fewer.
- [ ] Unverifiable claims are removed or marked `[citation needed]`, and listed in the commit or PR description.
