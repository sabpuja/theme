import assert from 'node:assert/strict';
import { test } from 'node:test';
import { CONTRACT, REQUIRED, validateThemeFiles, requestDevDashboardToken } from './account-routing-guard.mjs';

// Small representative file fixture. Remote checks always read actual Shopify files.
function fixture() {
  return {
    'layout/theme.liquid': "{% section 'theme-header4' %}",
    'snippets/sabpuja-account-dashboard-url.liquid':
      "{%- assign sp_account_url_parts = routes.account_url | split: '?' -%}\n" +
      "{%- assign sp_account_base_url = sp_account_url_parts | first -%}\n" +
      "{%- assign sp_account_base_url = '" + CONTRACT.accountBase + "' -%}\n" +
      "{{- sp_account_base_url -}}/pages/" + CONTRACT.extensionId +
      "{%- if sp_account_url_parts.size > 1 -%}?{{- sp_account_url_parts | last -}}{%- endif -%}",
    'sections/theme-header4.liquid':
      "{%- capture sp_account_dashboard_url -%}{%- render 'sabpuja-account-dashboard-url' -%}{%- endcapture -%}\n" +
      '<a href="{{ sp_account_dashboard_url | escape }}">Account</a>\n' +
      '<form data-account-destination="{{ sp_account_dashboard_url | escape }}"></form>',
    'sections/sabpuja-account-sign-in.liquid':
      "{%- capture sp_account_dashboard_url -%}{%- render 'sabpuja-account-dashboard-url' -%}{%- endcapture -%}\n" +
      '<a href="{{ sp_account_dashboard_url | escape }}">Dashboard</a>\n' +
      '<form data-login-base="{{ sp_account_dashboard_url | escape }}"></form>',
    'assets/sabpuja-header.js':
      "const dest = form.dataset.accountDestination; url.searchParams.set('login_hint', email); window.location.assign(url.toString());",
    'assets/sabpuja-account-sign-in.js':
      'const base = form.dataset.loginBase; window.location.assign(url.toString());',
  };
}

test('guard contract covers six required files', () => {
  assert.equal(REQUIRED.length, 6);
  for (const name of REQUIRED) assert.ok(fixture()[name], name);
});

test('valid centralized Sabpuja extension route passes', () => {
  assert.deepEqual(validateThemeFiles(fixture()), []);
});

test('old regression to routes.account_url is rejected', () => {
  const files = fixture();
  files['sections/theme-header4.liquid'] =
    files['sections/theme-header4.liquid'].replace(
      'href="{{ sp_account_dashboard_url | escape }}"',
      'href="{{ routes.account_url }}"'
    );
  assert.match(validateThemeFiles(files).join('\n'), /native Orders/);
});

test('changing registered extension UUID is rejected', () => {
  const files = fixture();
  files['snippets/sabpuja-account-dashboard-url.liquid'] =
    files['snippets/sabpuja-account-dashboard-url.liquid'].replace(CONTRACT.extensionId, 'wrong-uuid');
  assert.match(validateThemeFiles(files).join('\n'), /extension ID|Extension path/);
});

test('changing Shopify account host is rejected', () => {
  const files = fixture();
  files['snippets/sabpuja-account-dashboard-url.liquid'] =
    files['snippets/sabpuja-account-dashboard-url.liquid'].replace(CONTRACT.accountBase, 'https://example.com/account');
  assert.match(validateThemeFiles(files).join('\n'), /host fallback/);
});

test('an unpublished page link replacing branded sign-in route is rejected', () => {
  const files = fixture();
  files['sections/sabpuja-account-sign-in.liquid'] =
    files['sections/sabpuja-account-sign-in.liquid'].replace(
      'data-login-base="{{ sp_account_dashboard_url | escape }}"',
      'data-login-base="{{ routes.account_url }}"'
    );
  assert.match(validateThemeFiles(files).join('\n'), /Sign-in form/);
});

test('missing route snippet fails closed', () => {
  const files = fixture();
  delete files['snippets/sabpuja-account-dashboard-url.liquid'];
  assert.match(validateThemeFiles(files).join('\n'), /Missing\/empty/);
});

test('changing active header requires a routing review', () => {
  const files = fixture();
  files['layout/theme.liquid'] = "{% section 'theme-header12' %}";
  assert.match(validateThemeFiles(files).join('\n'), /Active header/);
});

test('returning customer to Shopify native Orders is rejected', () => {
  const files = fixture();
  files['sections/sabpuja-account-sign-in.liquid'] +=
    '\n<form data-return-to="{{ routes.account_url }}"></form>';
  assert.match(validateThemeFiles(files).join('\n'), /returns to Shopify native Orders/);
});


test('Dev Dashboard token exchange uses client credentials without logging a secret', async () => {
  let captured;
  const fakeFetch = async (url, options) => {
    captured = { url, options };
    return { ok: true, json: async () => ({ access_token: 'test-only-transient-token' }) };
  };
  const token = await requestDevDashboardToken('test-client-id', 'test-secret', fakeFetch);
  assert.equal(token, 'test-only-transient-token');
  assert.equal(captured.url, 'https://' + CONTRACT.store + '/admin/oauth/access_token');
  assert.equal(captured.options.method, 'POST');
  assert.equal(captured.options.body.get('grant_type'), 'client_credentials');
  assert.equal(captured.options.body.get('client_id'), 'test-client-id');
  assert.equal(captured.options.body.get('client_secret'), 'test-secret');
});

test('invalid or empty credentials fail closed', async () => {
  await assert.rejects(requestDevDashboardToken('', 'secret'), /Missing/);
  await assert.rejects(requestDevDashboardToken('client', 'secret', async () =>
    ({ ok: false, status: 401 })), /failed/);
});
