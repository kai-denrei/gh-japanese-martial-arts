---
role: dev
owner: minikai
status: active
last-updated: 2026-04-11
---

# Development

## Scope
Implementation of `index.html`, `data.json`, `validate.js`, and image pipeline. All frontend code — HTML structure, inline CSS/JS, data rendering, tab switching, overlay cards, fishbone SVG generation.

## Decisions
| Date | Decision | Rationale | Linked roles |
|---|---|---|---|
| 2026-04-09 | Rewrote timeline from scratch rather than adapting fishbone prototype JS | Prototype was horizontal SVG with hardcoded data; new system needed vertical, data-driven, lane-based, date-proportional positioning | [[arch]] |
| 2026-04-09 | CJK font: Noto Serif JP as primary Japanese font, loaded via Google Fonts | Spectral doesn't cover CJK; Noto Serif JP matches the editorial tone and has excellent kanji/kana coverage | [[ux]] |
| 2026-04-10 | Influence lines shown on click only, persist until dismissed | Showing all 31 lines at once was unreadable. Hover was too aggressive — merely scrolling erased lines. Click-to-show + click-spine-to-clear is the right interaction. Alternatives tried: always-on (cluttered), hover-show/hover-hide (too transient). | [[ux]] |
| 2026-04-10 | Lane-based filtering via legend clicks (solo/toggle) | 50 sources on one timeline needs filtering. Click legend item to solo that lane; click again to restore all. Faded items at 12% opacity with pointer-events disabled. | [[ux]] |
| 2026-04-10 | No-cache server for local dev (`Cache-Control: no-store`) | Browser caching caused repeated confusion during iteration — user couldn't see changes. Python HTTP server with custom NoCacheHandler solves this. | [[devops]] |
| 2026-04-10 | Search results scroll to timeline node, pulse dot, show influence lines, then open card | Search → click was disconnected from the timeline visualization. Now clicking a search result physically navigates you to the node's position. | [[ux]] |
| 2026-04-11 | Three-element interaction model: dots=connections, names/thumbs=overlay, hover=tooltip | Went through 3 failed iterations (short/full modes, hover-triggered overlays, dblclick). Final model: spine dots and item dots only show influence lines; clicking text/thumbnails opens full overlay; hover shows tooltip. Clean, no ambiguity. | [[ux]] |
| 2026-04-11 | Philosophy of Budō tab (4th tab) with `philosophy` section in data.json | 6 thematic essays synthesized from academic research, each with citations and cross-links to timeline sources and lexicon terms. Separate data structure from centerpiece. | [[arch]] |
| 2026-04-11 | International spread flags rendered at SVG edges with dotted lines to linked persons | `international_spread` array in meta. Flags clickable with full overlay describing the martial arts exchange history. Viewport-clamped tooltips. | [[arch]], [[ux]] |
| 2026-04-11 | Scroll position saved via `position:fixed` + `top:-scrollY`, restored synchronously on close | Previous approaches (overflow:hidden, requestAnimationFrame) caused flash-to-top on close. The position:fixed technique prevents any reflow. | [[ux]] |
| 2026-04-11 | `makeItemDot()` helper with `_spineDotClicked` flag to prevent event leakage | SVG elements at same position each get independent click events — `stopPropagation` doesn't help. Global flag with 50ms timeout suppresses overlay when dot is clicked. | [[ux]] |

## Dead Ends
<!-- APPEND ONLY. Never delete. -->
| Date | What was tried | Why it failed / was rejected |
|---|---|---|
| 2026-04-09 | ⚔ unicode character as spine dot for schools | Too small and hard to see on screen, especially on mobile. Replaced with solid purple filled circles. |
| 2026-04-10 | Influence lines always visible (all at once) | 31 lines made the timeline unreadable. Switched to on-demand via click. |
| 2026-04-10 | Influence lines triggered by hover | Too transient — merely scrolling past a node would flash lines. Switched to click-triggered with explicit dismiss. |
| 2026-04-10 | Even spacing (non-date-proportional) for timeline nodes | Takeda (1859) and Kano (1860) appeared far apart; Tanabe (1869) appeared below Grant demo (1879). Date-proportional positioning fixed this. |
| 2026-04-10 | 800-year empty gap (726–1532) rendered proportionally | Dominated the timeline visually. Compressed with zigzag break marker. Later adjusted to 660 years when Ryukyu tode (1392) was added. |
| 2026-04-11 | Short/full overlay mode with hover-triggered short cards | Hover opening an overlay caused jitter loop: overlay shifts layout → triggers mouseleave → closes → triggers mouseenter → reopens. Removed entirely; hover is tooltip-only. |
| 2026-04-11 | Key event blue dots on spine (birth→event markers for people) | Visually orphaned — small blue dots at dates like 1891 and 1926 were "not attributed to anything in particular." Removed rendering; data retained in `key_event` fields. |
| 2026-04-11 | Person thumbnails placed on the spine (opposite side from bone) | Obscured the spine diamond markers. Rule established: thumbnails always at bone end, beside the green dot, never on spine. |

## Lessons
- Browser caching is a silent enemy during rapid iteration — always serve with no-cache headers in dev. From dead end on 2026-04-10.
- Influence lines need to be click-triggered, not hover-triggered. Users need time to read connections. From dead end on 2026-04-10.
- Unicode decorative characters (⚔) render inconsistently across platforms — solid geometric shapes are more reliable. From dead end on 2026-04-09.
- Hover-triggered overlays on SVG elements cause jitter loops when the overlay itself shifts layout. Tooltips (position:absolute, pointer-events:none) are the only safe hover response. From dead end on 2026-04-11.
- SVG click events don't respect `stopPropagation` across sibling elements at the same coordinate. Use a global flag with a short timeout to gate downstream handlers. From dead end on 2026-04-11.
- Scroll lock via `overflow:hidden` on body causes scroll position loss. Use `position:fixed` + `top:-scrollY` instead. From dead end on 2026-04-11.

## Open Questions
- [x] How much of the existing fishbone HTML's JS/CSS can be reused vs. rewritten? — RESOLVED: full rewrite, only design language (CSS vars, fonts) carried over — 2026-04-09
- [x] CJK font fallback strategy — RESOLVED: Noto Serif JP via Google Fonts — 2026-04-09

## Assumptions
- The existing fishbone prototype's content provides a solid starting dataset — status: validated — since: 2026-04-09
- No build tools needed — static HTML/CSS/JS works at the scale of this project — status: validated (61 sources, ~1800 lines of HTML, no performance issues) — since: 2026-04-09
- SVG viewBox scaling handles responsive without a separate mobile layout — status: partially validated (works but required significant mobile-specific tweaks to font sizes, bone lengths, and spacing) — since: 2026-04-10

## Dependencies
Blocked by: nothing (research phase complete)
Feeds into: [[qa]], [[devops]]

## Session Log
2026-04-11 — SYNC — 61 sources, 44 influences, 30 lexicon. Philosophy tab, international spread flags, interaction model overhaul, 3 dead ends, 3 lessons. School emblems (Takeda mon, Kodokan, Aikikai, Yagyu Shingan).
2026-04-10 — SYNC — 50 sources, 31 influences, lane filtering, mobile fixes, deployed to GitHub Pages. Recorded 5 dead ends, 3 lessons.
2026-04-09 — BUILD — v1 complete, all 5 tasks done
2026-04-09 — INIT — scaffolded role file
