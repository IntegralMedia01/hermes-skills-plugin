#!/usr/bin/env node
/**
 * build.js — Converts NousResearch/hermes-agent skills into Claude Code plugin skills.
 *
 * - Reads from ./upstream/skills/
 * - Outputs to ./skills/ (clean slate each run)
 * - Strips hermes-specific frontmatter, adds hermes- prefix to skill names
 * - Copies supporting files (scripts/, references/, templates/, etc.)
 *
 * Usage: node build.js
 */

const fs = require('fs');
const path = require('path');

const UPSTREAM_SKILLS_DIR = path.join(__dirname, 'upstream', 'skills');
const OUTPUT_DIR = path.join(__dirname, 'skills');

const EXCLUDED_SKILLS = new Set([
  'godmode',       // jailbreak/safety-bypass tooling
  'index-cache',   // not a skill — cached JSON indexes from other marketplaces
]);

// Parse simple YAML frontmatter (single-line string values only)
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return null;
  const [, raw, body] = match;

  const get = (key) => {
    const m = raw.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
    if (!m) return null;
    return m[1].trim().replace(/^["']|["']$/g, '');
  };

  return {
    name: get('name'),
    description: get('description'),
    version: get('version') || '1.0.0',
    body: body.trimStart(),
  };
}

function buildFrontmatter({ name, description, version }) {
  return `---\nname: ${name}\ndescription: ${description}\nversion: ${version}\n---\n`;
}

// Recursively find all SKILL.md files under a directory
function findSkillFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findSkillFiles(fullPath, results);
    } else if (entry.name === 'SKILL.md') {
      results.push(fullPath);
    }
  }
  return results;
}

// Copy a directory recursively, skipping SKILL.md (we write that ourselves)
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (entry.name === 'SKILL.md') continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  if (!fs.existsSync(UPSTREAM_SKILLS_DIR)) {
    console.error('ERROR: upstream/skills/ not found. Run: git subtree add --prefix=upstream https://github.com/NousResearch/hermes-agent.git main --squash');
    process.exit(1);
  }

  // Clean slate
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
  }
  fs.mkdirSync(OUTPUT_DIR);

  const skillFiles = findSkillFiles(UPSTREAM_SKILLS_DIR);
  let built = 0;
  let skipped = 0;
  const skippedList = [];

  for (const skillPath of skillFiles) {
    const skillDir = path.dirname(skillPath);
    const skillName = path.basename(skillDir);

    // Handle case where SKILL.md is directly in category dir (e.g. skills/dogfood/SKILL.md)
    // In this case skillName = "dogfood" which is correct
    // For nested: skills/software-development/tdd/SKILL.md → skillName = "tdd"

    if (EXCLUDED_SKILLS.has(skillName)) {
      skipped++;
      skippedList.push(skillName);
      continue;
    }

    // Also skip if any path segment is in excluded set
    const segments = skillPath.replace(UPSTREAM_SKILLS_DIR + '/', '').split('/');
    if (segments.some(s => EXCLUDED_SKILLS.has(s))) {
      skipped++;
      skippedList.push(skillName);
      continue;
    }

    const content = fs.readFileSync(skillPath, 'utf8');
    const parsed = parseFrontmatter(content);

    if (!parsed) {
      console.warn(`WARN: Could not parse frontmatter in ${skillPath}, skipping`);
      skipped++;
      continue;
    }

    const baseName = parsed.name || skillName;
    const outputName = `hermes-${baseName}`;
    const outputSkillDir = path.join(OUTPUT_DIR, outputName);

    fs.mkdirSync(outputSkillDir, { recursive: true });

    // Write converted SKILL.md
    const newFrontmatter = buildFrontmatter({
      name: outputName,
      description: parsed.description || `Hermes skill: ${baseName}`,
      version: parsed.version,
    });
    fs.writeFileSync(path.join(outputSkillDir, 'SKILL.md'), newFrontmatter + parsed.body);

    // Copy supporting files (scripts/, references/, templates/, etc.)
    copyDir(skillDir, outputSkillDir);

    built++;
  }

  console.log(`\nBuild complete:`);
  console.log(`  Built:   ${built} skills`);
  console.log(`  Skipped: ${skipped} (${skippedList.join(', ')})`);
  console.log(`  Output:  ./skills/\n`);

  // Write a skill index for README generation
  const index = [];
  for (const outputSkillDir of fs.readdirSync(OUTPUT_DIR).sort()) {
    const skillMd = path.join(OUTPUT_DIR, outputSkillDir, 'SKILL.md');
    if (!fs.existsSync(skillMd)) continue;
    const content = fs.readFileSync(skillMd, 'utf8');
    const parsed = parseFrontmatter(content);
    if (parsed) {
      index.push({ name: parsed.name, description: parsed.description });
    }
  }

  fs.writeFileSync(
    path.join(__dirname, 'skills-index.json'),
    JSON.stringify(index, null, 2)
  );
  console.log(`  Index:   ./skills-index.json (${index.length} skills)\n`);
}

main();
