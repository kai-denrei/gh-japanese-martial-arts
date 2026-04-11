---
role: ux
owner: minikai
status: active
last-updated: 2026-04-11
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
| 2026-04-11 | Three-element interaction model (reusable across tradition pages) | Dots (spine + item) = show connections only. Text/thumbnails = full overlay. Hover = tooltip. No short/full modes, no double-click. Clean, predictable. | [[dev]], [[arch]] |
| 2026-04-11 | Person thumbnail placement: beside green dot at bone end, never on spine | Green dot always visible. Thumbnail between dot and text label. Non-person thumbnails (emblems) also at bone end with dot. Nothing on the spine except spine markers. | [[dev]] |
| 2026-04-11 | Overlay images: `object-fit: contain`, centered, no lateral stretching | Mon/emblems (square) and portraits (portrait aspect) shouldn't be stretched to fill card width. Pad with empty space instead. | [[dev]] |
| 2026-04-11 | Flag markers at edge of SVG, same side as linked person, clickable | International spread shown as emoji flags with dotted lines from the person who carried the art. Click opens exchange history overlay. | [[dev]], [[arch]] |

## Dead Ends
<!-- APPEND ONLY. Never delete. -->
| Date | What was tried | Why it failed / was rejected |
|---|---|---|
| 2026-04-09 | ⚔ unicode as spine dot for schools | Hard to see, inconsistent rendering. Replaced with solid circles. |
| 2026-04-10 | Tooltip positioned from stale bounding rect (calculated once at render time) | Lower elements showed tooltips off-screen. Fixed by recalculating rect on every hover event. |
| 2026-04-10 | MIN_GAP of 32px between nodes | Thumbnailed nodes overlapped in the dense 1859–1886 cluster. Increased to 52px with full gap between cluster items. |
| 2026-04-11 | Short/full overlay mode with hover-triggered short cards | Hover-on-SVG-element opening an overlay caused jitter: overlay shifts layout → mouseleave → close → mouseenter → reopen. Endless loop. |
| 2026-04-11 | Key event blue dots on spine (birth-to-event markers) | Small unlabeled blue dots at random spine positions confused users — "not attributed to anything in particular." Data retained, rendering removed. |
| 2026-04-11 | Person thumbnails placed on spine (opposite side from bone) | Obscured the spine diamond marker. People must always have a visible green dot — the dot is the 一目瞭然 (ichi-moku-ryōzen, "grasped at a glance") signal. |

## Lessons
- Tooltip positioning must recalculate parent rect on every event — the SVG grows dynamically and the page scrolls. From dead end on 2026-04-10.
- Minimum gaps between timeline nodes should account for the largest content (thumbnails), not just text labels. From dead end on 2026-04-10.
- Never trigger overlays from hover on SVG elements — only tooltips (pointer-events:none) are safe. Overlays cause layout shifts which cause jitter loops. From dead end on 2026-04-11.
- Every lane type needs a visible dot at the bone end — it's the user's "at a glance" signal for what type of entry this is. Thumbnails must not obscure it. From dead end on 2026-04-11.

## Open Questions
- [x] Horizontal-to-vertical conversion — RESOLVED: vertical with date-proportional positioning, 660-year gap compression, lane-based bone lengths — 2026-04-10

## Assumptions
- Warm parchment design language works for Japanese content — status: validated (no user complaints about cultural incongruence) — since: 2026-04-09
- CJK text at same line-height — status: validated (Noto Serif JP at 1.8 line-height for passages, 11px for labels) — since: 2026-04-10

## Dependencies
Blocked by: nothing
Feeds into: [[dev]]

## Session Log
2026-04-11 — SYNC — interaction model finalized (dots=connections, text=overlay, hover=tooltip). Thumbnail placement rules. Flag markers. 3 dead ends, 2 lessons.
2026-04-10 — SYNC — mobile responsive fixes, lane filtering, influence line interaction model settled, lifespan band colors, node spacing increased
2026-04-09 — INIT — scaffolded role file
