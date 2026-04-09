---
role: pm
owner: minikai
status: active
last-updated: 2026-04-09
---

# Project Management

## Scope
Scope definition, phasing, risk tracking, assumption surfacing. Ensuring the project stays focused on Japanese martial arts (712 CE – 1964) and doesn't sprawl into the broader grappling lineage already covered by the fishbone prototype.

## Decisions
| Date | Decision | Rationale | Linked roles |
|---|---|---|---|
| 2026-04-09 | Scope includes all Japanese martial history + outside influences; overlap with other tradition pages will be cross-linked and normalized during integration | Each tradition page is self-contained; duplication is acceptable pre-integration | [[arch]], [[dev]] |
| 2026-04-09 | Aikido included — Daito-ryu lineage has real grappling roots, even though modern aikido lacks stress-testing. Contextual treatment, not full parity with judo/jujutsu | Grappling history lens: acknowledge the lineage, note the divergence | [[arch]] |
| 2026-04-09 | Centerpiece uses Tenshin Shin'yo + Kito + Fusen synthesis into Kodokan, backed by primary sources wherever possible | Richest comparative narrative; prototype already has strong content to expand from | [[arch]], [[dev]] |
| 2026-04-09 | Research phase: expand from prototype content, verify with primary sources, scrape key images from primary source collections | Not starting from scratch — prototype is the seed, but every claim needs sourcing | [[dev]], [[qa]] |

## Dead Ends
<!-- APPEND ONLY. Never delete. -->
| Date | What was tried | Why it failed / was rejected |
|---|---|---|

## Lessons

## Open Questions
- [x] **Scope boundary**: RESOLVED — include all Japanese martial history + outside influences; cross-link during integration — 2026-04-09
- [x] **Content overlap**: RESOLVED — keep broad Japanese history including outside influences (catch wrestling, Maeda circuit as far as it's Japanese story) — 2026-04-09
- [x] **Research depth**: RESOLVED — expand from prototype, verify with primary sources, scrape images — 2026-04-09
- [ ] **Image sourcing feasibility**: CC0/public domain Japanese martial arts images — ukiyo-e prints are likely available, but early judo photographs may be harder to find with clear licensing. — owner: minikai — since: 2026-04-09
- [x] **Aikido/Kendo inclusion**: RESOLVED — Aikido in (Daito-ryu grappling lineage), Kendo as contextual only — 2026-04-09

## Assumptions
- The research phase must complete before any code is written — status: untested — since: 2026-04-09
- This page will eventually be integrated into the parent Grappling History repo at `/Users/minikai/Documents/Dev/grappling_history` — status: untested — since: 2026-04-09
- Gerald (Jelaludo) reviews and merges all PRs — status: validated — since: 2026-04-09

## Dependencies
Blocked by: nothing — this role drives sequencing
Feeds into: all roles

## Session Log
2026-04-09 — resolved 4 of 5 open questions per owner direction: broad scope, include outside influences, aikido in, expand research from prototype
2026-04-09 — INIT — scaffolded role file, surfaced 5 untested assumptions / scope gaps
