# Japanese Martial Arts — Project Conventions

## What This Is

An interactive page exploring Japanese martial arts history through primary sources. This is a standalone tradition page within the Grappling History project. It will later be integrated into the parent repo at `/Users/minikai/Documents/Dev/grappling_history` alongside Fiore (Italian, ~1410) and Pankration (Greek, ~648 BCE).

## Reference Implementations

Study these before writing any code:

- **Fiore page** (the gold standard): `/Users/minikai/Documents/Dev/grappling_history/fiore/index.html`
- **Ancient Greece page** (the pattern to follow): `/Users/minikai/Documents/Dev/gh_ancient_greece/index.html`
- **Ancient Greece data.json**: `/Users/minikai/Documents/Dev/gh_ancient_greece/data.json`
- **Ancient Greece design spec**: `/Users/minikai/Documents/Dev/gh_ancient_greece/docs/superpowers/specs/2026-04-09-ancient-greece-page-design.md`
- **Ancient Greece research doc**: `/Users/minikai/Documents/Dev/gh_ancient_greece/grappling_history_researchAncientGreece.md`
- **Fishbone prototype**: `/Users/minikai/Downloads/history_of_grappling_fishbone.html`

## Scope — Japanese Martial Traditions

The page should cover the grappling and combat traditions of Japan through primary sources. Key traditions to research:

- **Sumo** — oldest documented (from Kojiki, 712 CE). Shinto ritual origins, evolution into sport.
- **Jujutsu** — battlefield grappling systems (Takenouchi-ryū ~1532, many schools). Koryu traditions.
- **Judo** — Kano Jigoro's 1882 systematization of jujutsu into a pedagogical framework with randori.
- **Aikido** — Ueshiba Morihei, derived from Daitō-ryū Aiki-jūjutsu.
- **Kendo/Kenjutsu** — sword arts context (not grappling, but contextualizes the martial ecosystem).

The time span is roughly **712 CE – 1964** (Kojiki to Judo's Olympic debut).

## Research Phase — DO THIS FIRST

Before building any code, conduct thorough research:

1. **Write a research document** (`research_japanese_martial_arts.md`) modeled on the Ancient Greece version. It should cover:
   - Primary literary sources (Kojiki, Nihon Shoki, densho/scrolls from koryu schools, Kano's writings)
   - Material evidence (woodblock prints, scrolls, photographs, artifacts)
   - Key historical events and figures
   - Technical lexicon (Japanese terms with romaji, literal meaning, modern parallels)
   - A centerpiece comparison (equivalent to the Arrhichion section — e.g., comparing accounts of Kano's development of Judo from multiple jujutsu traditions)

2. **Source and download images** — historical artifacts showing techniques:
   - Search Met Museum Open Access API: `https://collectionapi.metmuseum.org/public/collection/v1/search?q=<query>&hasImages=true`
   - Search Wikimedia Commons API: `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=<query>&srnamespace=6&srlimit=20&format=json`
   - Search terms: "jujutsu", "sumo wrestling japan", "judo kano", "samurai grappling", "Japanese martial arts woodblock", "ukiyo-e sumo", "Hokusai wrestling"
   - **CC0 / public domain only.** Note provenance in `images/PROVENANCE.md`.
   - Convert to `.webp` format: `cwebp -q 80 input.jpg -o output.webp`
   - Visually verify each image after download (read the file to check it's a real artifact photo)

## Architecture — Follow the Ancient Greece Pattern Exactly

### Folder Structure
```
gh_japanese_martial_arts/
  index.html        ← self-contained page (inline CSS/JS, no build step)
  data.json         ← structured content
  validate.js       ← cross-reference integrity checker
  images/           ← webp images + PROVENANCE.md
  CLAUDE.md         ← this file
```

### data.json Schema

Single JSON file with 4 top-level sections:

```json
{
  "meta": {
    "tradition": "Japanese Martial Arts",
    "period": "712 CE – 1964",
    "region": "Japan",
    "sports": ["sumo", "jujutsu", "judo", "aikido"],
    "image_dir": "images/"
  },
  "sources": [ ... ],
  "lexicon": [ ... ],
  "centerpiece": { ... }
}
```

**Sources** — array of source objects. Each has:
- `id`, `type` (literary/material/documentary/photographic), `subtype`
- `date` (numeric), `date_display`, `title`, `author`, `origin`
- `image` (filename) or `source_url` (for texts)
- `passage_japanese` + `passage_translation` + `translator` (for literary sources)
- `description` (2-4 sentence article)
- `techniques_shown` (from controlled vocabulary)
- `terms` (lexicon IDs — two-way linked)
- `evidence` block: `proves`, `cannot_prove`, `reliability`

**Lexicon** — array of Japanese term objects:
- `id`, `japanese` (kanji/kana), `romaji`, `literal`, `definition`, `category`, `sources`, `modern_parallel`
- Two-way linking: if lexicon entry X lists source S, then source S must list X in its `terms` array.

**Centerpiece** — the equivalent of the Arrhichion source-weaving matrix. Structure it as accounts × technique/concept slots. Choose the most interesting comparative narrative (suggestion: the evolution from battlefield jujutsu to Kano's judo — multiple source accounts of the same transformation).

### index.html — Three Tabs

1. **Sources** — Vertical center-spine fishbone timeline with overlay cards
2. **Lexicon** — Searchable card grid with category filters and two-way links
3. **Centerpiece** — Source-weaving matrix (accounts as columns, concepts as rows)

### Critical UX Decisions (learned from Ancient Greece iterations)

- **USE A VERTICAL FISHBONE TIMELINE**, not horizontal. Center spine, nodes fan left/right at varied angles (15-55 degrees). Same-period items cluster visually. Era markers at transitions.
- **Overlay cards on click**, not inline expansion. Centered fullscreen overlay with backdrop blur. Closes via X, backdrop click, or Escape. Body scroll locks.
- **Responsive SVG viewBox** — scales bone lengths and label truncation to container width. Re-renders on resize.
- **Two-way navigation** between lexicon and sources (clicking a term tag opens the lexicon card, clicking a source link opens the source overlay).

### Dead Ends — Do NOT Repeat These

These were tried on the Ancient Greece page and rejected:

1. **Horizontal SVG fishbone timeline** — cluttered on narrow screens, items at similar dates overlap, no natural scroll on mobile.
2. **Uniform bone angles (all 45 degrees)** — visual monotony, doesn't spread clusters.
3. **Inline article expansion below timeline** — forces user to scroll away from their position.
4. **Vertical timeline with items only on the left** — wastes the right half, doesn't show same-period clustering.

### Validation

Write `validate.js` that checks:
1. ID uniqueness (sources, lexicon)
2. Two-way link symmetry (lexicon↔sources)
3. Centerpiece account references exist in sources array
4. Image file existence
5. Technique vocabulary consistency

Run before committing: `node validate.js` — expect 0 errors.

## Design Language

Inherit from Fiore/Ancient Greece:
- **CSS variables**: `--bg: #faf8f4`, `--fg: #2c2416`, `--accent: #8b4513`
- **Fonts**: Spectral (body), Inter (UI), JetBrains Mono (mono)
- **Palette**: warm parchment tones
- **Mobile responsive**: all pages must work at 375px width

Adapt for Japanese content:
- Ensure fonts handle CJK characters (kanji/kana) — Spectral may need a fallback
- Japanese text may need slightly different line-height for readability

## Content Standards

- **Primary sources first.** Every claim links to or displays a primary source.
- **CC0 / public domain images only.** Note provenance in `images/PROVENANCE.md`.
- **Original language preserved.** Show Japanese alongside translation.
- **No build tools.** Static HTML/CSS/JS. Must work opened directly or served by any static server.
- **Data-driven.** Content lives in `data.json`, not hardcoded in HTML.

## Git

- Never push directly to `main` — use branches
- Commit messages: plain English, describe the change
- GitHub repo: create under `kai-denrei` org
- Enable GitHub Pages once v1 is ready

## Workflow

1. Research phase → `research_japanese_martial_arts.md`
2. Image sourcing → `images/` + `PROVENANCE.md`
3. Build `data.json` with all content
4. Build `index.html` (reuse CSS/JS patterns from Ancient Greece)
5. Run `validate.js` → 0 errors
6. Visual review at `http://localhost:8080`
7. Content accuracy review (flag any uncertain claims)
8. Git push + GitHub Pages
