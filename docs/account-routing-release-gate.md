# Sabpuja customer account routing: protected release gate

## Why this exists

On 2026-10-21 a theme migration replaced our registered Sabpuja dashboard destination with Shopify's native "routes.account_url". The full-page Customer Account extension still existed, but customers landed on Shopify's basic Orders page. The release guard catches this regression **before theme publication**.

No GitHub Actions, new service, scheduler or Shopify Admin publish hook is required. This is a read-only local validation command plus a protected Node.js publication command.

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

1. Exchanges the release-guard Dev Dashboard app Client ID and secret for a short-lived Admin API token **in memory only**; no credentials or insufficient permissions means FAIL. A legacy SHOPIFY_ADMIN_API_ACCESS_TOKEN can also be supplied for a manual check.
2. Queries Shopify Admin to confirm the app was granted **only** read_themes and read_online_store_pages, New Customer Accounts, the expected base URL, the **registered** dashboard full-page extension name/ID, and an UNPUBLISHED target theme.
3. Uses Shopify CLI to pull six relevant files **directly from the selected theme**, preventing a stale local checkout from passing. On Windows the guard invokes Shopify's Node entrypoint without an intermediate command shell, preventing Node DEP0190 shell interpolation warnings.
4. Validates the active header, central snippet, sign-in page, desktop/mobile account links, modal destination and both JavaScript redirect flows.
5. Exits nonzero on any mismatch. It never writes to the theme or publishes.

Offline --theme-dir mode checks local files only, and explicitly does not approve publication.

## Windows setup and commands (PowerShell terminal)

Requirements: Node.js 20+, installed/authenticated Shopify CLI and a Shopify Dev Dashboard app installed on the Sabpuja store with **only** read_themes and read_online_store_pages. App display name in Dev Dashboard: **SabpujaReleaseGuard-Read Only**. Use the default non-embedded app URL from Shopify. Set its Client ID and secret securely; never paste or commit credentials. The guard automatically requests a new 24-hour token on each remote check.

From a checked-out sabpuja/theme repository:

~~~powershell
node --test .\scripts\account-routing-guard.test.mjs

# Client ID is not secret; retrieve it from Dev Dashboard > App settings:
$env:SABPUJA_GUARD_CLIENT_ID = Read-Host 'Sabpuja Release Guard Client ID'

# Enter the Client secret locally without echoing it. Do not put secrets in chat:
$secureSecret = Read-Host 'Sabpuja Release Guard Client secret' -AsSecureString
$env:SABPUJA_GUARD_CLIENT_SECRET = [System.Net.NetworkCredential]::new('', $secureSecret).Password

# Read-only Shopify staging validation; the script requests its own 24-hour token:
node .\scripts\account-routing-guard.mjs --theme-id 189358014780

# Always clear the credentials from your PowerShell process after the run:
Remove-Item Env:SABPUJA_GUARD_CLIENT_ID -ErrorAction SilentlyContinue
Remove-Item Env:SABPUJA_GUARD_CLIENT_SECRET -ErrorAction SilentlyContinue
~~~

Offline source check (not a release approval):

~~~powershell
node .\scripts\account-routing-guard.mjs --theme-dir 'C:\path\to\pulled-theme'
~~~

**Only when all other QA is completed and a cutover is authorized**, run:

~~~powershell
node .\scripts\publish-theme-safely.mjs --theme-id 189358014780
~~~

The Node publisher repeats the remote guard, asks for the exact word PUBLISH, and then uses Shopify CLI's normal interactive theme publish. It intentionally does not add --force and does not require changes to Windows PowerShell execution policy.

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

## Dev Dashboard app setup

1. Open https://dev.shopify.com/dashboard and select your organization > Apps > Create app > Start from Dev Dashboard.
2. Name the app **SabpujaReleaseGuard-Read Only**. No theme extension, checkout surface or embedded admin UI is needed.
3. Create an app version with the default non-embedded App URL `https://shopify.dev/apps/default-app-home` and exactly two API scopes: `read_themes`, `read_online_store_pages`. Do not select write scopes, customer scopes or order scopes.
4. Release the app version and install it on **ghf6bp-fy.myshopify.com**. Confirm only the two read permissions are requested.
5. On app Settings, retrieve the Client ID and Client secret, and set the two environment variables locally using the PowerShell example. Do not store secrets in GitHub or chat.
6. Run the guard. It verifies actual granted scopes on every invocation, and requests a token using the client-credentials grant at Shopify's OAuth endpoint.

Shopify references: https://shopify.dev/docs/apps/build/dev-dashboard/create-apps-using-dev-dashboard and https://shopify.dev/docs/apps/build/authentication-authorization/client-credentials-grant?lang=node

## Verified integration evidence (2026-10-21)

- The owner ran the read-only `--theme-id 189358014780` remote release guard with temporary environment credentials for the Dev Dashboard app. Shopify returned the correct account extension and unpublished theme; Shopify CLI pulled the files and reported **ACCOUNT ROUTING GATE: PASS (remote Shopify verification)**.
- Original Windows launcher produced Node `DEP0190` due to `shell:true` and `.cmd` invocation. The revised launcher calls the installed `@shopify/cli/bin/run.js` directly with Node and `shell:false`, without changing store code.
- On the authorized Windows device, **15 automated checks passed** and Shopify CLI v4.9.4 returned the exact unpublished staging theme via the JavaScript entrypoint with exit code 0.
- The final credentialed remote guard should be rerun once against the revised launcher to confirm the warning is removed in the complete workflow. No credentials are written to GitHub and the release script does not publish during checks.
