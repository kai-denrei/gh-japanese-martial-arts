---
role: devops
owner: minikai
status: active
last-updated: 2026-04-09
---

# DevOps

## Scope
Git workflow, GitHub Pages deployment, repo setup under `kai-denrei`, branch strategy, image optimization pipeline (`cwebp`).

## Decisions
| Date | Decision | Rationale | Linked roles |
|---|---|---|---|
| 2026-04-09 | Repo: kai-denrei/gh-japanese-martial-arts, public | Matches org convention for grappling history pages | [[pm]] |
| 2026-04-09 | GitHub Pages via actions/deploy-pages workflow (not legacy branch deploy) | `build_type: workflow` is the current GitHub Pages standard. Static site — no build step needed, just upload-pages-artifact. | [[dev]] |
| 2026-04-10 | Local dev server with no-cache headers (`Cache-Control: no-store`) | Browser caching caused repeated confusion during rapid iteration. Custom Python HTTPServer with NoCacheHandler. | [[dev]] |

## Dead Ends
<!-- APPEND ONLY. Never delete. -->
| Date | What was tried | Why it failed / was rejected |
|---|---|---|
| 2026-04-09 | Port 8080 for local server | Already in use by Ancient Greece project from a previous session. Switched to 8081. |
| 2026-04-10 | Default Python http.server (no custom headers) | Browser cached aggressively, user repeatedly saw stale content. Added no-cache headers. |

## Lessons
- Always start local dev servers on a unique port per project, or kill the old one first. From dead end on 2026-04-09.
- Serve with `Cache-Control: no-store` during active development. The cost is negligible; the confusion it prevents is real. From dead end on 2026-04-10.

## Open Questions

## Assumptions
- GitHub Pages serves static files without issues for this project's size — status: validated (deployed, working) — since: 2026-04-09
- `cwebp` is available on kainode for image conversion — status: validated (`/opt/homebrew/bin/cwebp`, used for all 11 images) — since: 2026-04-09

## Dependencies
Blocked by: [[dev]], [[qa]]
Feeds into: nothing — terminal role

## Session Log
2026-04-10 — SYNC — deployed to GitHub Pages, no-cache dev server, port conflict recorded
2026-04-09 — INIT — scaffolded role file
