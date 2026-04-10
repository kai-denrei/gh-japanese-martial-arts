---
role: ux
owner: minikai
status: active
last-updated: 2026-04-09
---

# UX Design

## Scope
Interaction design, visual layout, responsive behavior. Overlay card UX, fishbone readability, tab navigation, CJK typography, mobile responsiveness at 375px.

## Decisions
| Date | Decision | Rationale | Linked roles |
|---|---|---|---|
| 2026-04-09 | Kanji as primary labels on timeline, English in hover tooltip | Japanese names are the authentic labels; transliterations available on demand. Hover shows English name + dates + description snippet. | [[dev]] |
| 2026-04-10 | Lifespan bands: pastel blues (dark→light) for extant, greys (charcoal→silver) for extinct | Immediate visual distinction between living and dead traditions. Staggered left/right of spine. Clickable to open card. | [[dev]] |
| 2026-04-10 | Date-proportional spine positioning with compressed gap | Even spacing misrepresented chronology. Zigzag break marker for 660-year empty gap (726–1392). Minimum gap of 52px prevents overlap. | [[dev]] |
| 2026-04-10 | Influence lines: click-triggered, persist until dismissed | Hover was too transient; always-on was too cluttered. Click shows, closing card preserves lines, click spine clears. | [[dev]] |
| 2026-04-10 | Mobile: scaled bones, thumbnails, labels, clamped influence curves | Bones at 70%, thumbnails 28px, labels 8px, curves clamped to viewBox. Horizontal scroll fallback at 300px min-width. | [[dev]] |

## Dead Ends
<!-- APPEND ONLY. Never delete. -->
| Date | What was tried | Why it failed / was rejected |
|---|---|---|
| 2026-04-09 | ⚔ unicode as spine dot for schools | Hard to see, inconsistent rendering. Replaced with solid circles. |
| 2026-04-10 | Tooltip positioned from stale bounding rect (calculated once at render time) | Lower elements showed tooltips off-screen. Fixed by recalculating rect on every hover event. |
| 2026-04-10 | MIN_GAP of 32px between nodes | Thumbnailed nodes overlapped in the dense 1859–1886 cluster. Increased to 52px with full gap between cluster items. |

## Lessons
- Tooltip positioning must recalculate parent rect on every event — the SVG grows dynamically and the page scrolls. From dead end on 2026-04-10.
- Minimum gaps between timeline nodes should account for the largest content (thumbnails), not just text labels. From dead end on 2026-04-10.

## Open Questions
- [x] Horizontal-to-vertical conversion — RESOLVED: vertical with date-proportional positioning, 660-year gap compression, lane-based bone lengths — 2026-04-10

## Assumptions
- Warm parchment design language works for Japanese content — status: validated (no user complaints about cultural incongruence) — since: 2026-04-09
- CJK text at same line-height — status: validated (Noto Serif JP at 1.8 line-height for passages, 11px for labels) — since: 2026-04-10

## Dependencies
Blocked by: nothing
Feeds into: [[dev]]

## Session Log
2026-04-10 — SYNC — mobile responsive fixes, lane filtering, influence line interaction model settled, lifespan band colors, node spacing increased
2026-04-09 — INIT — scaffolded role file
