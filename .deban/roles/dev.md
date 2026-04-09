---
role: dev
owner: minikai
status: active
last-updated: 2026-04-09
---

# Development

## Scope
Implementation of `index.html`, `data.json`, `validate.js`, and image pipeline. All frontend code — HTML structure, inline CSS/JS, data rendering, tab switching, overlay cards, fishbone SVG generation.

## Decisions
| Date | Decision | Rationale | Linked roles |
|---|---|---|---|

## Dead Ends
<!-- APPEND ONLY. Never delete. -->
| Date | What was tried | Why it failed / was rejected |
|---|---|---|

## Lessons

## Open Questions
- [ ] How much of the existing fishbone HTML's JS/CSS can be reused vs. rewritten? — owner: minikai — since: 2026-04-09
- [ ] CJK font fallback strategy — Spectral doesn't cover kanji/kana natively — owner: minikai — since: 2026-04-09

## Assumptions
- The existing fishbone prototype's content (Takenouchi, Tenshin Shin'yo, Kito, Fusen, Randori sections) provides a solid starting dataset for the Japanese portion of data.json — status: untested — since: 2026-04-09
- No build tools needed — static HTML/CSS/JS works at the scale of this project — status: validated — since: 2026-04-09

## Dependencies
Blocked by: research phase (research doc + images must exist before data.json)
Feeds into: [[qa]], [[devops]]

## Session Log
2026-04-09 — INIT — scaffolded role file
