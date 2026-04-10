---
project: Japanese Martial Arts — Grappling History
created: 2026-04-09
status: active
mode: solo
stale_threshold_days: 30
---

# Japanese Martial Arts — Grappling History — Index

## Brief
Interactive page exploring Japanese martial arts history (712 CE – 2007) through primary sources. 50 sources, 25 lexicon terms, 31 influence connections. Covers sumo, koryu jujutsu, judo, aikido, karate (唐手→空手), catch wrestling influence, and the path to Japanese MMA (UWF → Shooto → Pancrase → Pride FC → UFC Japan). Deployed at kai-denrei.github.io/gh-japanese-martial-arts/. Standalone tradition page within the Grappling History project.

## Active Roles
- [[dev]] — owner: minikai — 6 decisions, 5 dead ends, 3 lessons
- [[arch]] — owner: minikai — 6 decisions, 2 dead ends, 1 lesson
- [[pm]] — owner: minikai — 4 decisions, all questions resolved
- [[ux]] — owner: minikai — 5 decisions, 3 dead ends, 2 lessons
- [[qa]] — owner: minikai
- [[devops]] — owner: minikai — 3 decisions, 2 dead ends, 2 lessons

## Key Decisions
- Scope expanded from 712–1964 to 712–2007 (catch wrestling, MMA lineage included)
- Influence lines click-triggered, not hover (too transient) or always-on (too cluttered)
- 5 lane types: school, person, competition, event, artifact — each with distinct visual treatment
- Kanji as primary timeline labels; English in tooltips
- Lifespan bands: blue shades = extant, grey shades = extinct
- Oshikiuchi separated from Daitō-ryū — honest about unverifiable pre-Takeda lineage
- No-cache dev server after repeated browser caching confusion

## Open Questions (cross-role)
- Influence graph completeness — 31 lines across 50 nodes, likely missing connections
- Mobile experience still needs testing on actual devices (only Chrome DevTools so far)
- Content accuracy for schools without primary sources (e.g., Sōsuishi-ryū, Hontai Yōshin-ryū descriptions based on secondary sources)
