# Sabpuja customer account routing: protected release gate

## Why this exists

On 2026-10-21 a theme migration replaced our registered Sabpuja dashboard destination with Shopify's native "routes.account_url". The full-page Customer Account extension still existed, but customers landed on Shopify's basic Orders page. The release guard catches this regression **before theme publication**.

No GitHub Actions, new service, scheduler or Shopify Admin publish hook is required. This is a read-only local validation command plus a protected Windows PowerShell publish wrapper.

## Approved routing contract

- Store: ghf6bp-fy.myshopify.com (public: sabpuja.com)
- New Customer Accounts base: https://shopify.com/92313813308/account
- Registered Customer Account extension: **Sabpuja Account Dashboard**
- Extension ID: 01a116ca-e167-790c-8982-1de9ec7a94b1
- Full destination: https://shopify.com/92313813308/account/pages/01a116ca-e167-790c-8982-1de9ec7a94b1
- Theme routing source: snippets/sabpuja-account-dashboard-url.liquid
- Current staging theme: 189358014780, Sabpuja-Staging-Rebrand-10-2026

If Shopify changes any of these, validate registration with the Admin API and deliberately update the guard contract. Never replace the dashboard destination with "routes.account_url" alone.

## What the guard checks

Run the remote check with --theme-id for **every** proposed publication. The guard:

1. Requires SHOPIFY_ADMIN_API_ACCESS_TOKEN; no token or insufficient permissions means FAIL.
2. Queries Shopify Admin to confirm New Customer Accounts, the expected base URL, the **registered** dashboard full-page extension name/ID, and an UNPUBLISHED target theme.
3. Uses Shopify CLI to pull six relevant files **directly from the selected theme**, preventing a stale local checkout from passing.
4. Validates the active header, central snippet, sign-in page, desktop/mobile account links, modal destination and both JavaScript redirect flows.
5. Exits nonzero on any mismatch. It never writes to the theme or publishes.

Offline --theme-dir mode checks local files only, and explicitly does not approve publication.

## Windows PowerShell

Requirements: Node.js 20+, installed/authenticated Shopify CLI and an Admin API access token with permission to read themes and customer account pages. Never paste or commit tokens.

From a checked-out sabpuja/theme repository:

~~~powershell
node --test .\scripts\account-routing-guard.test.mjs

# Read the token in this session without echoing it to the console:
$secret = Read-Host 'Shopify Admin API token' -AsSecureString
$env:SHOPIFY_ADMIN_API_ACCESS_TOKEN = [System.Net.NetworkCredential]::new('', $secret).Password

# Read-only Shopify staging validation:
node .\scripts\account-routing-guard.mjs --theme-id 189358014780
~~~

Offline source check (not a release approval):

~~~powershell
node .\scripts\account-routing-guard.mjs --theme-dir 'C:\path\to\pulled-theme'
~~~

**Only when all other QA is completed and a cutover is authorized**, run:

~~~powershell
.\scripts\publish-theme-safely.ps1 -ThemeId 189358014780
~~~

This wrapper repeats the remote guard, asks for the exact word PUBLISH, and then uses Shopify CLI's normal interactive theme publish. It intentionally does not add --force. If local PowerShell execution policy blocks .ps1, consult the machine owner for an approved process-scoped method; never loosen machine-wide policy to run this.

## Limits and non-bypass policy

- A person with Shopify Admin theme publishing privileges can still bypass this wrapper by publishing from Admin or an unguarded CLI command. Restrict publish privileges and make an attached PASS report mandatory for every cutover.
- This gate does **not** prove a successful real-customer OTP login, authenticated rendering or mobile/Hindi UX. Test those separately before release.
- Do not run the wrapper during QA. Do not create GitHub Actions for this workflow.
- Shopify and CLI outages, missing permissions, an unregistered extension or altered theme code must cause a FAIL, not a silent skip.
- Production remains unchanged until an authorized theme publication.

## References

- Shopify customer sign-in links: https://shopify.dev/docs/storefronts/themes/sign-in
- Shopify CLI theme pull: https://shopify.dev/docs/api/shopify-cli/theme/theme-pull
- Shopify CLI theme publish: https://shopify.dev/docs/api/shopify-cli/theme/theme-publish
- Local repo rules: AGENTS.md
- Global rules: sabpuja/core/docs/policies/GITHUB-SAFETY-GUARDRAILS.md
