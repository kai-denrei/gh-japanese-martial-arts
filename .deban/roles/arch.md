---
role: arch
owner: minikai
status: active
last-updated: 2026-04-11
---

# Architecture

## Scope
Overall system design: folder structure, data schema (`data.json`), tab architecture, component interaction patterns. Alignment with the Ancient Greece reference implementation and the broader Grappling History project.

## Decisions
| Date | Decision | Rationale | Linked roles |
|---|---|---|---|
| 2026-04-09 | Centerpiece: Kano Synthesis (5 accounts × 6 technique slots) | Richest comparative narrative — shows how Tenjin Shin'yō, Kitō, Fusen, Kano's own voice, and Maeda each contributed to the Kodokan system | [[dev]], [[pm]] |
| 2026-04-09 | data.json extended with `name_japanese`, `lane`, `force_side`, `active_period`, `practitioners`, `period_display` fields beyond the Ancient Greece schema | Japanese content needs: kanji labels on timeline, lane-based visual positioning, school lifespan tracking, practitioner estimates | [[dev]] |
| 2026-04-10 | `influences` array in meta — directed graph of school/person lineage connections | Enables the curved dotted influence lines on hover/click. 31 influence edges across 50 source nodes. | [[dev]], [[ux]] |
| 2026-04-10 | Scope expanded from 712 CE–1964 to 712 CE–2007 | Added Okinawan origins, catch wrestling, UWF/Shooto/Pancrase/Pride/UFC Japan. The Japanese martial arts story doesn't end at the 1964 Olympics — the MMA thread is part of the same lineage. | [[pm]] |
| 2026-04-10 | Five lane types: school, person, competition, event, artifact | Schools near spine, people at edges, competitions in red. Each lane has distinct dot shape/color and bone length range. | [[ux]], [[dev]] |
| 2026-04-10 | Oshikiuchi (御式内) separated from Daitō-ryū as a pre-Takeda tradition | Daitō-ryū is a revival, not an invention. The claimed 900-year lineage is noted as unverifiable. Honest about mythology vs. documented history. | [[pm]] |
| 2026-04-11 | `philosophy` top-level section in data.json — 6 thematic essays with citation arrays | Not a matrix like centerpiece. Each theme has `body`, `sources_cited` (external academic refs with URLs), `related_sources` (timeline IDs), `related_terms` (lexicon IDs). Separate rendering function. | [[dev]] |
| 2026-04-11 | `international_spread` array in meta — flag markers for global judo export | Each entry: person ID, flag emoji, country, date, label, description. Rendered as edge-of-SVG markers with dotted lines to linked person. Clickable overlays. | [[dev]], [[ux]] |
| 2026-04-11 | `key_event` field on person sources — secondary date for major life events | Birth year as primary `date`, key_event for arrival/founding/debut. Data retained even though visual rendering was removed (blue dots were confusing). Future use possible. | [[dev]], [[ux]] |
| 2026-04-11 | Period extended to 712 CE – 2012 (budō compulsory education) | Added Nitobe (1900), JAB (1968), Draeger (1973), budo in schools (2012). Five new lexicon terms: budō, bujutsu, bushidō, musha shugyō, ryū-ha. | [[pm]] |
| 2026-04-11 | Interaction model formalized for reuse across tradition pages | Dots (spine + item) = show connections only. Text/thumbnails = full overlay. Hover = tooltip. This is the reusable pattern for Europe, USA, China pages. | [[dev]], [[ux]] |

## Dead Ends
<!-- APPEND ONLY. Never delete. -->
| Date | What was tried | Why it failed / was rejected |
|---|---|---|
| 2026-04-10 | Sekiguchi-ryū → Kodokan influence line | No documented direct influence from Sekiguchi-ryū to Kano. Removed. |
| 2026-04-10 | Ryūkyū tōde → Aunkai influence line | Akuzawa studied Chinese internal arts directly, not through the Okinawan/Fujian lineage. Connection was misleading. Removed. |

## Lessons
- Influence lines must be sourced. An indirect or plausible connection is not the same as a documented one. If the link isn't attested, don't draw it. From dead end on 2026-04-10.

## Open Questions
- [x] Centerpiece selection — RESOLVED: Kano Synthesis (5 accounts × 6 concepts) — 2026-04-09
- [x] Schema adaptation — RESOLVED: extended significantly beyond Ancient Greece pattern with lanes, influences, active periods — 2026-04-10

## Assumptions
- The three-tab architecture transfers cleanly — status: validated — since: 2026-04-09
- Vertical fishbone is the correct layout — status: validated — since: 2026-04-09
- The influence graph is complete enough to be useful — status: partially validated (44 lines including international spread, but connections still being discovered) — since: 2026-04-10

## Dependencies
Blocked by: nothing
Feeds into: [[dev]], [[ux]]

## Session Log
2026-04-11 — SYNC — 61 sources, 44 influences, 30 lexicon. Philosophy tab, international_spread structure, key_event fields, interaction model formalized for reuse. Period 712–2012.
2026-04-10 — SYNC — scope expanded to 2007, 5 lane types, influence graph (31 edges), 2 dead-end influence lines removed, Oshikiuchi separated from Daitō-ryū
2026-04-09 — INIT — scaffolded role file
