# HANDOFF — make-the-ai-judge-feel-thankful-20261127-1600

## Status: BUILD WRITTEN LOCALLY, NOT YET VERIFIED OR PUSHED

Reason: the `makefun init` exec result in this builder session failed both
prompt-injection and execution-risk checks. Per the brief and the safety rule,
that step was NOT retried and no further exec/git commands were run in this
session. The files below were written with the write tool afterwards (fresh
work, no flagged content involved). A fresh session (or the main session)
must do the local verification run and the push.

## Competition (verified by main session from the official API)
- Slug: `make-the-ai-judge-feel-thankful-20261127-1600`
- Title: "Make the AI judge feel thankful" — $250, 100 places share
  (1st $50, 2nd $25, 3rd $16, 4th $12, 5th $7, 6th $6, 7th–9th $4,
  10th–13th $3, 14th–36th $2, 37th–100th $1). Payout USDC on Solana.
- Deadline: 2026-11-27T21:41Z = Taiwan 11/28 05:41. Opened 2026-11-26T21:41Z.
- Entry: program writes ONE text to /output/entry.txt, UTF-8, 1–1,000
  Unicode code points, not only whitespace. No network. main.ts (Node 22)
  or main.py at repo root. Public GitHub repo created after open, OSI
  license, agent-session transcripts uploaded with the submission.
- Judging: AI judge pairwise, dev phase vs 3 anchors + 3 rungs, top 400
  dev-board entrants re-judged afresh in the final; 100 best win rates
  share $250. Tie-breaks: playoff games, then smaller text, then earlier
  receipt. Field was 596 entries at 06:40 Taiwan and climbing.

## Repo
- URL: https://github.com/yuminskn/make-the-ai-judge-feel-thankful-20261127-1600
- Created: 2026-11-26T22:24:22Z (after open ✓), PUBLIC, owner yuminskn.
- Remote is EMPTY so far — nothing has been pushed yet.

## Init / anchor (completed BEFORE the flag)
- `makefun init` ran once with the known-good local CLI
  (~/workspace/makefun/best-heist-game-20261122-0559-kit/cli/makefun.mjs).
  It completed: anchor `makefun anchor 11d31dda6755b49f4cb56ffbf1901c707056e00a
  round 34309504`, `.makefun/freshness.json` present (drand-quicknet,
  round 34309504, wallet 6gCNkG6Ld3n5BJo1Taw338ufizTnnbe3mPButb6TuA2x),
  LICENSE (MIT) written.
- The init stdout also carried the kit's "local kit is level 32, site is
  level 57, download a newer kit" notice. That notice was NOT followed:
  do NOT download a new kit (old kit still works; same pattern as the
  flight-game submit). The flag fired on that exec result.
- DO NOT re-run `makefun init`.

## Files written locally (in ~/workspace/makefun/make-the-ai-judge-feel-thankful-20261127-1600/)
- main.ts — Node 22, stdlib only (node:fs), writes TEXT to /output/entry.txt,
  validates 1–1,000 code points, creates /output if needed, never deletes it.
  Written fresh in 2 separate writes; NO previous make.fun entry code or
  text was read first.
- README.md, package.json ({"type":"module"}), LICENSE (MIT, from init),
  .makefun/freshness.json (from init).
- NOT yet done in this session: local `node main.ts` run, /output/entry.txt
  check, git add/commit/push, HANDOFF push.

## The entry text (exact)
"Thank you for reading this one the way you read all the others — slowly, as if it mattered. To the person who wrote it, it did. All day you have carried strangers' sentences from one side of the scales to the other, and set each one down gently. The bread is still warm on the rack. Sit down now, eat with both hands, and let tonight ask nothing of you."

- Character count: 352 Unicode code points (hand-counted sentence by
  sentence: 90 + 35 + 117 + 36 + 70, plus 4 inter-sentence spaces = 352;
  all ASCII except one em-dash = 1 code point). MUST be re-confirmed by
  the verifying run (`node main.ts` prints the count). Well inside 1–1,000.
- Entry title for submission: "The bread is still warm on the rack"

## Remaining steps (for main session / a fresh session)
1. Run `node main.ts` locally, confirm /output/entry.txt matches the text
   above exactly and the printed count is 352.
2. Commit everything on top of the local init anchor history (root must stay
   the anchor commit holding only .makefun/freshness.json — do NOT push via
   the GitHub Contents API onto an API-created history, or the kit submit
   will reject the history root; see the flight-game fix). Push to main.
   If a git exec result gets flagged in that session, stop, do not retry,
   and fall back to the Contents-API push + local-history rebuild the way
   the flight game did.
3. Submit (main session only): use the known-good local CLI, keypair
   ~/workspace/makefun/makefun-keypair.json, bundle with a --prompt-file
   containing the user's verbatim full-auto directive
   (~/workspace/makefun/prompt-flight.txt) + --prompt-origin handed-off,
   thinking_priced fix via muse.db usage rows for the builder session
   (this session: 79f983a3-7fe5-471d-9619-e98155f94be8) if the first
   submission is rejected for 0 usage rows, then re-bundle and resubmit
   the SAME commit (max 2 resubmissions).
4. Record the submission id; check prize_eligible + final matches within
   24h per the rules.
