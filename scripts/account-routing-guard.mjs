#!/usr/bin/env node
/**
 * Sabpuja account routing pre-publication guard.
 * Read-only. No publish, theme mutations, orders or customer data access.
 * Requires Node.js 20+ and Shopify CLI for --theme-id mode.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export const CONTRACT = Object.freeze({
  store: 'ghf6bp-fy.myshopify.com',
  accountBase: 'https://shopify.com/92313813308/account',
  extensionId: '01a116ca-e167-790c-8982-1de9ec7a94b1',
  extensionTitle: 'Sabpuja Account Dashboard',
});

export const REQUIRED = Object.freeze([
  'layout/theme.liquid',
  'sections/theme-header4.liquid',
  'sections/sabpuja-account-sign-in.liquid',
  'snippets/sabpuja-account-dashboard-url.liquid',
  'assets/sabpuja-header.js',
  'assets/sabpuja-account-sign-in.js',
]);

function withoutComments(value) {
  return value
    .replace(/\{%-?\s*comment\s*-?%\}[\s\S]*?\{%-?\s*endcomment\s*-?%\}/g, '')
    .replace(/<!--[\s\S]*?-->/g, '');
}

export function validateThemeFiles(files) {
  const errors = [];
  for (const name of REQUIRED) {
    if (typeof files[name] !== 'string' || files[name].trim().length === 0) {
      errors.push('Missing/empty theme file: ' + name);
    }
  }
  if (errors.length) return errors;

  const clean = (name) => withoutComments(files[name]);
  const snippet = clean('snippets/sabpuja-account-dashboard-url.liquid');
  const header = clean('sections/theme-header4.liquid');
  const signin = clean('sections/sabpuja-account-sign-in.liquid');
  const layout = clean('layout/theme.liquid');
  const headerJs = clean('assets/sabpuja-header.js');
  const signinJs = clean('assets/sabpuja-account-sign-in.js');
  const requirePart = (haystack, needle, description) => {
    if (!haystack.includes(needle)) errors.push(description);
  };

  requirePart(layout, "{% section 'theme-header4' %}", 'Active header is no longer theme-header4; review account routing.');
  requirePart(snippet, "routes.account_url | split: '?'", 'Account route must preserve Shopify query parameters.');
  requirePart(snippet, "assign sp_account_base_url = '" + CONTRACT.accountBase + "'", 'Account-host fallback changed.');
  requirePart(snippet, '/pages/' + CONTRACT.extensionId, 'Registered account extension ID missing.');
  requirePart(snippet, '{{- sp_account_base_url -}}/pages/' + CONTRACT.extensionId, 'Extension path must be attached to account host.');
  requirePart(snippet, 'sp_account_url_parts.size > 1', 'Shopify account query parameters are no longer preserved.');

  for (const [text, label] of [[header, 'Header'], [signin, 'Sign-in page']]) {
    requirePart(text, "render 'sabpuja-account-dashboard-url'", label + ' bypasses centralized account route.');
    requirePart(text, 'href="{{ sp_account_dashboard_url | escape }}"', label + ' lacks dashboard navigation.');
    if (/href=["']\{\{\s*routes\.account_url\b/.test(text)) {
      errors.push(label + ' has a direct link to Shopify native Orders.');
    }
    if (/assign\s+sp_account_dashboard_url\s*=\s*routes\.account_url/.test(text)) {
      errors.push(label + ' overwrites the Sabpuja dashboard route.');
    }
  }

  requirePart(header, 'data-account-destination="{{ sp_account_dashboard_url | escape }}"', 'Account modal no longer targets the custom dashboard.');
  requirePart(signin, 'data-login-base="{{ sp_account_dashboard_url | escape }}"', 'Sign-in form no longer targets the custom dashboard.');
  if (/data-return-to\s*=\s*["']\{\{\s*routes\.account_url/.test(signin)) {
    errors.push('Sign-in form returns to Shopify native Orders.');
  }

  requirePart(headerJs, 'form.dataset.accountDestination', 'Header login script ignores configured account destination.');
  requirePart(headerJs, "url.searchParams.set('login_hint'", 'Header login no longer passes email hint.');
  requirePart(headerJs, 'window.location.assign(url.toString())', 'Header login no longer navigates to account destination.');
  requirePart(signinJs, 'form.dataset.loginBase', 'Sign-in script ignores configured login base.');
  requirePart(signinJs, 'window.location.assign(url.toString())', 'Sign-in script no longer navigates to account destination.');
  return errors;
}

function readFiles(themeDir) {
  const result = {};
  for (const file of REQUIRED) {
    const location = path.join(themeDir, ...file.split('/'));
    result[file] = fs.existsSync(location) ? fs.readFileSync(location, 'utf8') : null;
  }
  return result;
}

async function verifyShopifyAccountAndTheme(themeId) {
  const token = process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN;
  if (!token) throw new Error('Missing SHOPIFY_ADMIN_API_ACCESS_TOKEN; cannot validate registered extension. Publication blocked.');
  const query = 'query SabpujaRoutingGate($id: ID!) { shop { myshopifyDomain customerAccountsV2 { customerAccountsVersion url } } theme(id: $id) { name role } customerAccountPages(first: 50) { nodes { __typename title handle ... on CustomerAccountAppExtensionPage { appExtensionUuid } } pageInfo { hasNextPage } } }';
  const response = await fetch('https://' + CONTRACT.store + '/admin/api/2026-10/graphql.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Access-Token': token },
    body: JSON.stringify({ query, variables: { id: 'gid://shopify/OnlineStoreTheme/' + themeId } }),
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error('Shopify Admin validation failed (HTTP ' + response.status + '). Publication blocked.');
  const result = await response.json();
  if (result.errors?.length) throw new Error('Shopify Admin GraphQL validation failed. Publication blocked.');
  const data = result.data;
  if (!data || data.shop?.myshopifyDomain !== CONTRACT.store) throw new Error('Connected Shopify store mismatch.');
  if (data.shop?.customerAccountsV2?.customerAccountsVersion !== 'NEW_CUSTOMER_ACCOUNTS') throw new Error('New Customer Accounts is not enabled.');
  if (data.shop?.customerAccountsV2?.url !== CONTRACT.accountBase) throw new Error('Account base URL changed; review and update contract first.');
  if (data.theme?.role !== 'UNPUBLISHED') throw new Error('Theme not found or not unpublished. MAIN theme publication blocked.');
  if (data.customerAccountPages?.pageInfo?.hasNextPage) throw new Error('Account page list truncated; cannot validate the extension.');
  const matches = data.customerAccountPages?.nodes?.filter((page) =>
    page.__typename === 'CustomerAccountAppExtensionPage' &&
    page.handle === CONTRACT.extensionId &&
    page.appExtensionUuid === CONTRACT.extensionId &&
    page.title === CONTRACT.extensionTitle
  ) || [];
  if (matches.length !== 1) throw new Error('Registered Sabpuja Account Dashboard extension missing or changed.');
  return data.theme.name;
}

function pullTheme(themeId, destination) {
  const command = process.platform === 'win32' ? 'shopify.cmd' : 'shopify';
  const args = ['theme', 'pull', '--store', CONTRACT.store, '--theme', themeId, '--path', destination, '--no-input'];
  for (const file of REQUIRED) args.push('--only', file);
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
    windowsHide: false,
  });
  if (result.error) throw new Error('Unable to start Shopify CLI: ' + result.error.message);
  if (result.status !== 0) throw new Error('Shopify CLI theme pull failed; publication blocked.');
}

async function main(argv) {
  let themeDir = null;
  let themeId = null;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--theme-dir' && argv[i + 1]) themeDir = argv[++i];
    else if (argv[i] === '--theme-id' && argv[i + 1]) themeId = argv[++i];
    else throw new Error('Usage: node scripts/account-routing-guard.mjs --theme-id ID | --theme-dir DIRECTORY');
  }
  if (Boolean(themeDir) === Boolean(themeId)) throw new Error('Select exactly one of --theme-id or --theme-dir.');
  if (themeId && !/^\d+$/.test(themeId)) throw new Error('Theme ID must be numeric.');
  let temporary = null;
  try {
    if (themeId) {
      const name = await verifyShopifyAccountAndTheme(themeId);
      console.log('Shopify account and unpublished theme verified: ' + name);
      temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'sabpuja-routing-'));
      pullTheme(themeId, temporary);
      themeDir = temporary;
    }
    const errors = validateThemeFiles(readFiles(themeDir));
    if (errors.length) {
      for (const error of errors) console.error('FAIL: ' + error);
      throw new Error('ACCOUNT ROUTING GATE: FAIL (' + errors.length + ' checks)');
    }
    console.log('ACCOUNT ROUTING GATE: PASS (' + (themeId ? 'remote Shopify verification' : 'offline source check only') + ')');
    if (!themeId) console.log('Offline PASS is not permission to publish. Run --theme-id for the release gate.');
  } finally {
    if (temporary) fs.rmSync(temporary, { recursive: true, force: true });
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2)).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
