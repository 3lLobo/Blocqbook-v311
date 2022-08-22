# PolygonBUIDL

The blocq☎️book v3. We skip v2 cuz even numbers are boring!

This project addresses the need for a decentralized contact management system for EVM wallets and blockchain enthusiasts. We create and curate a decentralized, user-owned contact DB, upwards-compatible for integration with interaction-based EVM dApps.

TL;DR: The Blocq☎️book:

- bacqend:
  - decentralized contact DB with customization inspired by Discord.
  - tagging system with a dcntrlzd subgraph public GQl endpoint.
  - integration with the XMTP network.
- frontend:
  - UI for contact management and tagging.
  - multi(13)-chain transaction and token-balance explorer
  - 3 decentralized Google-suite integrations to power blockchain interaction:
    - Instant messaging
    - File storage and transfer with 1TB soft limit 🧑🏾‍🚀

## A booq, What is that even?

<!-- img grandpa avatar -->

Well kid, bacq in the days, we used to have a book with the names and numbers of everyone in town. It was called white-pages, or phonebook. Sounds crazy, right?

Then you won't believe what I came up with:

A phonebook for the blockchain! Fully decentralized and user owned.
With the help of IPFS and the Ceramic protocol, your contacts are stored on decentralized storage and can only be accessed by you!

Why does that matter? Because you shouldn't rely on anyone, not on me, not on Google, not on Facebook, especially not on Facebook, zero trust!

It's like learning to walk on your own, making your very first steps. But hey, it get's even better: Your database is fully upwards compatible. You can choose to import your contacts to any dApp which supports the Ceramic protocol. We did the groundwork, so that the social interaction of the blocqchain ecosystem shall soon put both candycrush and instagram in deep shadow.

## Social interaction with zeroTrust, how does that work?

Besides the personal tags, which you can self-define and give to your contacts, our UI fetches **public tags** from the theGraph and enriches your contacts with public information on these wallets. Those are 5 indicative and sentimented tags:

- friend
- trust
- smartContract
- spam
- fraud

While the blockchain is an anonymous space, we see value in uncovering behavior traits of users.
Picture e.g. a wallet got 100 x tagged as `friend`, this wallet would be easier to trust.
On the opposite a wallet tagged with `fraud` might get blacqlisted from exchanges or social interactions.

If you had a confirmed transaction to or from an address (one hop) you are eligible to give that wallet 1 public tag.

## IPFS & Spheron

decentralized website can't be taken down.

decentralized storage neither.

## A tiny dash of good old centralization

Necessity for backend.
AWS for the tagging API since we can't have the risc of the subgraph getting corrupted by malicious actors spoofing the key from our static UI.
