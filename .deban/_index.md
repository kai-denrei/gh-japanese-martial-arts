---
project: Japanese Martial Arts — Grappling History
created: 2026-04-09
status: active
mode: solo
stale_threshold_days: 30
---

# Japanese Martial Arts — Grappling History — Index

## Brief
Interactive page exploring Japanese martial arts history (712 CE – 2012) through primary sources. 61 sources, 30 lexicon terms, 44 influence connections, 4 tabs (Sources, Lexicon, Kano Synthesis, Philosophy of Budō). Covers sumo, koryu jujutsu, judo, aikido, karate (唐手→空手), catch wrestling influence, the path to Japanese MMA (UWF → Shooto → Pancrase → Pride FC → UFC Japan), and the international spread of judo (Brazil/BJJ, UK/Budokwai, USA/White House, Russia/Sambo). Deployed at kai-denrei.github.io/gh-japanese-martial-arts/. Standalone tradition page within the Grappling History project.

## Active Roles
- [[dev]] — owner: minikai — 12 decisions, 8 dead ends, 6 lessons
- [[arch]] — owner: minikai — 12 decisions, 2 dead ends, 1 lesson
- [[pm]] — owner: minikai — 4 decisions, 7 questions resolved
- [[ux]] — owner: minikai — 9 decisions, 6 dead ends, 4 lessons
- [[qa]] — owner: minikai
- [[devops]] — owner: minikai — 3 decisions, 2 dead ends, 2 lessons

## Key Decisions
- Scope expanded from 712–1964 to 712–2012 (catch wrestling, MMA lineage, budō education included)
- Three-element interaction model: dots=connections, text/thumbnails=overlay, hover=tooltip (reusable pattern)
- 5 lane types: school, person, competition, event, artifact — each with distinct visual treatment
- Kanji as primary timeline labels; English in tooltips
- Lifespan bands: blue shades = extant, grey shades = extinct
- International spread: flag markers at SVG edges with clickable exchange history overlays
- Philosophy of Budō: 4th tab synthesizing academic research with citations
- People always show green dot at bone end — thumbnails beside, never obscuring
- Oshikiuchi separated from Daitō-ryū — honest about unverifiable pre-Takeda lineage

## Open Questions (cross-role)
- Influence graph completeness — 44 lines across 61 nodes, connections still being discovered
- Mobile experience still needs testing on actual devices (only Chrome DevTools so far)
- Content accuracy for schools without primary sources (e.g., Sōsuishi-ryū, Hontai Yōshin-ryū descriptions based on secondary sources)
- Reusability: interaction model and data schema formalized for Europe/USA/China tradition pages — needs first reuse to validate
