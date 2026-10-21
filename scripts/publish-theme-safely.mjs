#!/usr/bin/env node
/**
 * Sabpuja protected, interactive publish entrypoint for Windows/macOS/Linux.
 * Explicit operator invocation only. Never called by tests or schedulers.
 */
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { fileURLToPath } from 'node:url';
import { CONTRACT } from './account-routing-guard.mjs';
import { runShopifyCli } from './shopify-cli-runner.mjs';

const args = process.argv.slice(2);
if (args.length !== 2 || args[0] !== '--theme-id' || !/^\d+$/.test(args[1])) {
  console.error('Usage: node scripts/publish-theme-safely.mjs --theme-id UNPUBLISHED_ID');
  process.exit(2);
}
const themeId = args[1];
if (!(process.env.SABPUJA_GUARD_CLIENT_ID && process.env.SABPUJA_GUARD_CLIENT_SECRET) &&
    !process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN) {
  console.error('Missing read-only Dev Dashboard credentials. Publication blocked.');
  process.exit(1);
}

const guardPath = fileURLToPath(new URL('./account-routing-guard.mjs', import.meta.url));
const checked = spawnSync(process.execPath, [guardPath, '--theme-id', themeId], {
  stdio: 'inherit',
});
if (checked.error || checked.status !== 0) {
  console.error('The account routing release gate failed. Theme has not been published.');
  process.exit(1);
}

const rl = createInterface({ input: process.stdin, output: process.stdout });
const answer = await rl.question(
  'Routing PASS. Only if all other QA is complete and cutover is authorized, type PUBLISH: '
);
rl.close();
if (answer !== 'PUBLISH') {
  console.error('Publication cancelled. No theme was published.');
  process.exit(1);
}

const publish = runShopifyCli([
  'theme', 'publish', '--theme', themeId, '--store', CONTRACT.store,
]);
if (publish.error || publish.status !== 0) {
  console.error('Shopify CLI publication did not succeed. Verify theme status in Shopify Admin.');
  process.exit(1);
}
console.log('Shopify CLI publication completed. Verify the published theme and account login in Admin.');
