#!/usr/bin/env node
import { readdir, readFile, access } from 'node:fs/promises';
import { resolve, join, relative, extname } from 'node:path';

const themeDir = resolve(process.env.SABPUJA_THEME_DIR || process.argv[2] || '.');
const directories = ['assets', 'sections', 'snippets', 'templates', 'layout'];
const warnings = [], errors = [];
let scanned = 0;
let fluidUsage = 0;
const requiredSnippetReferences = new Map();

async function traverse(dir) {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
  for (const item of entries) {
    const file = join(dir, item.name);
    if (item.isDirectory()) { await traverse(file); continue; }
    if (!['.css', '.liquid'].includes(extname(file))) continue;
    scanned += 1;
    const text = await readFile(file, 'utf8');
    const name = relative(themeDir, file).replaceAll('\\', '/');
    fluidUsage += (text.match(/clamp\s*\(/g) || []).length;
    for (const found of text.matchAll(/{%\s*(?:render|include)\s+['"](sp-[\w-]+)['"]/g)) {
      if (!requiredSnippetReferences.has(found[1])) requiredSnippetReferences.set(found[1], new Set());
      requiredSnippetReferences.get(found[1]).add(name);
    }
    if (name.startsWith('sections/') && /(?:render|include)\s+['"]sp-staging-/.test(text)) {
      errors.push({ file: name, rule: 'active-staging-image-helper', message: 'Use approved theme-local media snippets; old names are compatibility only.' });
    }
    if (/settings\.sp_(?:rb|stage)_[a-z0-9_]+/.test(text)) {
      errors.push({ file: name, rule: 'obsolete-image-settings', message: 'Legacy preview image settings may not be referenced by active theme code.' });
    }
    if (name.startsWith('sections/') && /:root\s*\{[^}]*--sp-storefront-container\s*:/s.test(text)) {
      errors.push({ file: name, rule: 'global-width-leak', message: 'Section writes to :root --sp-storefront-container; use a section-scoped property.' });
    }
    if (name.startsWith('sections/') && /<style>[\s\S]*?:root\s*\{[^}]*--sp-container-max\s*:/s.test(text)) {
      errors.push({ file: name, rule: 'global-container-override', message: 'Do not overwrite shared container max from inside a section.' });
    }
    if (/#[0-9a-f]{6}/i.test(text) && /#681E30/i.test(text)) {
      warnings.push({ file: name, rule: 'legacy-maroon', message: 'Review old maroon against current live Foundations.' });
    }
    if (name.endsWith('.liquid') && /all_products\['[^']+'\]/.test(text)) {
      warnings.push({ file: name, rule: 'hardcoded-product-fallback', message: 'Prefer configurable product or collection settings; record any fallback.' });
    }
    if (name.endsWith('.css') && /@media\s*\(\s*(?:max|min)-width\s*:\s*(?:320|360|375|390|430)px/.test(text)) {
      warnings.push({ file: name, rule: 'device-like-breakpoint', message: 'Confirm this is a structural breakpoint rather than resizing type or spacing.' });
    }
    if (name.startsWith('sections/')) {
      const sectionSchema = text.match(/{%\s*schema\s*%}([\s\S]*?){%\s*endschema\s*%}/);
      if (sectionSchema) {
        try { JSON.parse(sectionSchema[1]); }
        catch (e) { errors.push({ file: name, rule: 'invalid-schema-json', message: String(e) }); }
      }
    }
  }
}
for (const dir of directories) await traverse(join(themeDir, dir));
for (const [snippet, callers] of requiredSnippetReferences.entries()) {
  try { await access(join(themeDir, 'snippets', snippet + '.liquid')); }
  catch {
    errors.push({ file: [...callers].join(', '), rule: 'missing-shared-snippet', message: snippet + ' must exist in the pulled theme.' });
  }
}
const settingsData = await readFile(join(themeDir, 'config/settings_data.json'), 'utf8').catch(() => '');
if (/"sp_(?:rb|stage)_[a-z0-9_]+"/.test(settingsData)) {
  errors.push({ file: 'config/settings_data.json', rule: 'inactive-staging-map-keys', message: 'Old staging image maps must not be kept after approved imagery migration.' });
}
if (scanned === 0) {
  console.error('No theme CSS/Liquid files found. Set SABPUJA_THEME_DIR to a pulled unpublished theme.');
  process.exit(2);
}
console.log(JSON.stringify({ themeDir, scanned, fluidUsage, errors, warnings }, null, 2));
if (errors.length) process.exitCode = 1;
