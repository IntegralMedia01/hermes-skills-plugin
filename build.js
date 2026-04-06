#!/usr/bin/env node
/**
 * build.js — Converts NousResearch/hermes-agent skills into Claude Code plugin skills.
 *
 * - Reads from ./upstream/skills/
 * - Outputs each skill as its own plugin under ./plugins/<name>/
 * - Generates .claude-plugin/marketplace.json listing all plugins
 * - Strips hermes-specific frontmatter, adds hermes- prefix to skill names
 * - Copies supporting files (scripts/, references/, templates/, etc.)
 *
 * Usage: node build.js
 */

const fs = require('fs');
const path = require('path');

const UPSTREAM_SKILLS_DIR = path.join(__dirname, 'upstream', 'skills');
const PLUGINS_DIR = path.join(__dirname, 'plugins');
const MARKETPLACE_PATH = path.join(__dirname, '.claude-plugin', 'marketplace.json');

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
  if (fs.existsSync(PLUGINS_DIR)) {
    fs.rmSync(PLUGINS_DIR, { recursive: true });
  }
  fs.mkdirSync(PLUGINS_DIR);

  const skillFiles = findSkillFiles(UPSTREAM_SKILLS_DIR);
  let built = 0;
  let skipped = 0;
  const skippedList = [];
  const marketplacePlugins = [];

  for (const skillPath of skillFiles) {
    const skillDir = path.dirname(skillPath);
    const skillName = path.basename(skillDir);

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

    // Create plugin directory structure:
    // plugins/<name>/.claude-plugin/plugin.json
    // plugins/<name>/skills/<name>/SKILL.md
    const pluginRoot = path.join(PLUGINS_DIR, outputName);
    const pluginMetaDir = path.join(pluginRoot, '.claude-plugin');
    const pluginSkillDir = path.join(pluginRoot, 'skills', outputName);

    fs.mkdirSync(pluginMetaDir, { recursive: true });
    fs.mkdirSync(pluginSkillDir, { recursive: true });

    // Write plugin.json manifest
    const pluginJson = {
      name: outputName,
      version: parsed.version,
      description: parsed.description || `Hermes skill: ${baseName}`,
    };
    fs.writeFileSync(
      path.join(pluginMetaDir, 'plugin.json'),
      JSON.stringify(pluginJson, null, 2) + '\n'
    );

    // Write converted SKILL.md
    const newFrontmatter = buildFrontmatter({
      name: outputName,
      description: parsed.description || `Hermes skill: ${baseName}`,
      version: parsed.version,
    });
    fs.writeFileSync(path.join(pluginSkillDir, 'SKILL.md'), newFrontmatter + parsed.body);

    // Copy supporting files (scripts/, references/, templates/, etc.)
    copyDir(skillDir, pluginSkillDir);

    // Add to marketplace index
    marketplacePlugins.push({
      name: outputName,
      description: parsed.description || `Hermes skill: ${baseName}`,
      source: `./plugins/${outputName}`,
      category: 'productivity',
      tags: ['hermes', 'nous-research'],
    });

    built++;
  }

  // Sort marketplace plugins by name
  marketplacePlugins.sort((a, b) => a.name.localeCompare(b.name));

  // Write marketplace.json
  const marketplace = {
    $schema: 'https://anthropic.com/claude-code/marketplace.schema.json',
    name: 'hermes-skills-plugin',
    description: `${built} skills from NousResearch Hermes Agent — research, ML ops, creative tools, software development, and more`,
    owner: {
      name: 'IntegralMedia01',
      url: 'https://github.com/IntegralMedia01',
    },
    plugins: marketplacePlugins,
  };

  fs.mkdirSync(path.dirname(MARKETPLACE_PATH), { recursive: true });
  fs.writeFileSync(MARKETPLACE_PATH, JSON.stringify(marketplace, null, 2) + '\n');

  console.log(`\nBuild complete:`);
  console.log(`  Built:       ${built} plugins`);
  console.log(`  Skipped:     ${skipped} (${skippedList.join(', ')})`);
  console.log(`  Output:      ./plugins/`);
  console.log(`  Marketplace: .claude-plugin/marketplace.json (${marketplacePlugins.length} entries)\n`);
}

main();
