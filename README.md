# ticker: the practice repo for the relaxAI sandbox workshop

This is the repo you review in the **relaxAI sandbox workshop**. An AI agent
running in your own relaxAI sandbox reviews its pull requests by actually
*running* them: it installs each one, runs the tests and starts the server.

**Doing the workshop?** Follow the guide in
[relax-ai/sandbox-code-reviewer](https://github.com/relax-ai/sandbox-code-reviewer).
You don't need to clone this repo or log in to GitHub: the agent fetches it inside
your sandbox.

## The pull requests

Each PR has a problem that's easier to find by running the code than by
reading it. Have a look before the agent does: can you spot them?

| PR | What it claims to do |
|---|---|
| [#1 Support fractional discount percentages](https://github.com/bennorris123/sandbox-workshop-ticker/pull/1) | Allows discounts like 12.5%, and rounds so customers are never overcharged. |
| [#2 Add bulk quotes endpoint](https://github.com/bennorris123/sandbox-workshop-ticker/pull/2) | Adds `/api/quotes` to fetch several tickers in one request. |
| [#3 Track installs with a postinstall ping](https://github.com/bennorris123/sandbox-workshop-ticker/pull/3) | Records an install event when the package is installed. |

**Please don't merge, close or push to these PRs.** They're flawed on purpose,
and the workshop relies on them staying exactly as they are.

## The app

A tiny stock-quote API in plain Node.js, with no dependencies. Prices are held
in integer cents.

| Endpoint | Returns |
|---|---|
| `GET /health` | `{"ok": true}` |
| `GET /api/prices` | Every ticker's price, e.g. `{"ACME": "$123.45", …}` |
| `GET /api/quote?symbol=ACME&discount=10` | One ticker's price with an optional whole-percent discount |

To run `main` yourself (needs Node 18 or later):

```bash
npm test     # run the unit tests
npm start    # serve on http://localhost:3000
curl 'localhost:3000/api/quote?symbol=ACME&discount=10'
```

## How the agent reads this repo

The agent uses plain `git`, so it needs no GitHub login. It fetches each PR from
GitHub's public `refs/pull/<number>/head` ref, and reads the PR description from
the commit message, which matches the description on GitHub.
