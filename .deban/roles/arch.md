---
role: arch
owner: minikai
status: active
last-updated: 2026-04-09
---

# Architecture

## Scope
Overall system design: folder structure, data schema (`data.json`), tab architecture, component interaction patterns. Alignment with the Ancient Greece reference implementation and the broader Grappling History project.

## Decisions
| Date | Decision | Rationale | Linked roles |
|---|---|---|---|

## Dead Ends
<!-- APPEND ONLY. Never delete. -->
| Date | What was tried | Why it failed / was rejected |
|---|---|---|

## Lessons

## Open Questions
- [ ] Centerpiece selection — CLAUDE.md suggests "battlefield jujutsu → Kano's judo" but is that the most compelling narrative matrix? Alternatives: Fusen ryu's challenge match disruption, or the Kano synthesis across multiple schools — owner: minikai — since: 2026-04-09
- [ ] How far to mirror Ancient Greece data.json schema vs. adapt for Japanese-specific needs (e.g., `passage_japanese` field, koryu school lineage data) — owner: minikai — since: 2026-04-09

## Assumptions
- The Ancient Greece page's three-tab architecture (Sources / Lexicon / Centerpiece) transfers cleanly to Japanese martial arts content — status: untested — since: 2026-04-09
- Vertical fishbone timeline is the correct layout (horizontal was rejected on Ancient Greece) — status: validated — since: 2026-04-09

## Dependencies
Blocked by: research phase (content scope determines schema needs)
Feeds into: [[dev]], [[ux]]

## Session Log
2026-04-09 — INIT — scaffolded role file
