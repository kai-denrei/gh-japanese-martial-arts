#!/usr/bin/env node
/**
 * validate.js — Cross-reference integrity checker for data.json
 * Run: node validate.js
 * Expect: 0 errors
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.json');
const imageDir = path.join(__dirname, 'images');

let errors = 0;
let warnings = 0;

function error(msg) { errors++; console.error(`  ERROR: ${msg}`); }
function warn(msg) { warnings++; console.warn(`  WARN:  ${msg}`); }
function section(title) { console.log(`\n--- ${title} ---`); }

// Load data
let data;
try {
  data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  console.log('data.json parsed successfully.');
} catch (e) {
  console.error(`FATAL: Cannot parse data.json: ${e.message}`);
  process.exit(1);
}

const sources = data.sources || [];
const lexicon = data.lexicon || [];
const centerpiece = data.centerpiece || {};

// 1. ID uniqueness
section('1. ID Uniqueness');
const sourceIds = new Set();
for (const s of sources) {
  if (sourceIds.has(s.id)) error(`Duplicate source ID: ${s.id}`);
  sourceIds.add(s.id);
}
console.log(`  ${sourceIds.size} unique source IDs`);

const lexiconIds = new Set();
for (const l of lexicon) {
  if (lexiconIds.has(l.id)) error(`Duplicate lexicon ID: ${l.id}`);
  lexiconIds.add(l.id);
}
console.log(`  ${lexiconIds.size} unique lexicon IDs`);

// Check for ID collisions between sources and lexicon
for (const id of sourceIds) {
  if (lexiconIds.has(id)) warn(`ID "${id}" exists in both sources and lexicon`);
}

// 2. Two-way link symmetry (lexicon ↔ sources)
section('2. Two-Way Link Symmetry');
// For each lexicon entry, check that listed sources exist
for (const lex of lexicon) {
  if (!lex.sources || !Array.isArray(lex.sources)) {
    error(`Lexicon "${lex.id}" has no sources array`);
    continue;
  }
  for (const srcRef of lex.sources) {
    if (!sourceIds.has(srcRef)) {
      error(`Lexicon "${lex.id}" references non-existent source "${srcRef}"`);
    }
  }
}

// For each source, check that listed terms exist in lexicon
for (const src of sources) {
  if (!src.terms || !Array.isArray(src.terms)) continue;
  for (const termRef of src.terms) {
    if (!lexiconIds.has(termRef)) {
      error(`Source "${src.id}" references non-existent lexicon term "${termRef}"`);
    }
  }
}

// Check symmetry: if lexicon X lists source S, then source S should list X in terms
for (const lex of lexicon) {
  if (!lex.sources) continue;
  for (const srcRef of lex.sources) {
    const src = sources.find(s => s.id === srcRef);
    if (!src) continue;
    if (!src.terms || !src.terms.includes(lex.id)) {
      warn(`Asymmetric link: lexicon "${lex.id}" lists source "${srcRef}", but source does not list term "${lex.id}"`);
    }
  }
}

// Reverse check: if source S lists term T, then lexicon T should list source S
for (const src of sources) {
  if (!src.terms) continue;
  for (const termRef of src.terms) {
    const lex = lexicon.find(l => l.id === termRef);
    if (!lex) continue;
    if (!lex.sources || !lex.sources.includes(src.id)) {
      warn(`Asymmetric link: source "${src.id}" lists term "${termRef}", but lexicon does not list source "${src.id}"`);
    }
  }
}

// 3. Centerpiece account references exist in sources
section('3. Centerpiece References');
if (centerpiece.accounts) {
  for (const acc of centerpiece.accounts) {
    if (!sourceIds.has(acc.id)) {
      error(`Centerpiece account "${acc.id}" not found in sources`);
    }
  }
  console.log(`  ${centerpiece.accounts.length} centerpiece accounts checked`);
}

// 4. Image file existence
section('4. Image Files');
for (const src of sources) {
  if (src.image) {
    const imgPath = path.join(imageDir, src.image);
    if (!fs.existsSync(imgPath)) {
      error(`Image not found: ${src.image} (referenced by source "${src.id}")`);
    }
  }
}
const imageSources = sources.filter(s => s.image).length;
console.log(`  ${imageSources} sources reference images`);

// 5. Technique vocabulary consistency
section('5. Technique Vocabulary');
const allTechniques = new Set();
for (const src of sources) {
  if (src.techniques_shown) {
    for (const t of src.techniques_shown) allTechniques.add(t);
  }
}
console.log(`  ${allTechniques.size} unique technique terms: ${[...allTechniques].sort().join(', ')}`);

// 6. Required fields
section('6. Required Fields');
for (const src of sources) {
  if (!src.id) error(`Source missing "id"`);
  if (!src.type) error(`Source "${src.id}" missing "type"`);
  if (!src.title) error(`Source "${src.id}" missing "title"`);
  if (src.date === undefined || src.date === null) error(`Source "${src.id}" missing "date"`);
  if (!src.evidence) warn(`Source "${src.id}" missing "evidence" block`);
}
for (const lex of lexicon) {
  if (!lex.id) error(`Lexicon entry missing "id"`);
  if (!lex.japanese) error(`Lexicon "${lex.id}" missing "japanese"`);
  if (!lex.romaji) error(`Lexicon "${lex.id}" missing "romaji"`);
  if (!lex.definition) error(`Lexicon "${lex.id}" missing "definition"`);
}

// Summary
section('SUMMARY');
console.log(`  Errors:   ${errors}`);
console.log(`  Warnings: ${warnings}`);
console.log(`  Sources:  ${sources.length}`);
console.log(`  Lexicon:  ${lexicon.length}`);
process.exit(errors > 0 ? 1 : 0);
