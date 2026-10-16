# Sabpuja unpublished-theme Foundations QA

This directory is **local tooling only**. It creates no GitHub Actions workflow, changes no store data and cannot publish a Shopify theme.

**Canonical design reference:** https://lab.srv2005300.hstgr.cloud/theme/foundations/

## Windows PowerShell

```powershell
# From this repository's root, using Shopify CLI already logged into Sabpuja:
shopify theme pull --theme 189276291388 --path .\staging-theme
$env:SABPUJA_THEME_DIR = ".\staging-theme"
node qa/lint-foundations.mjs

npm install
npx playwright install chromium
$env:SABPUJA_STAGING_THEME_ID = "189276291388"
$env:SABPUJA_STAGING_BASE_URL = "https://sabpuja.com"
npm run qa:staging
```

**Important preview guard:** URL query `preview_theme_id` does not always preserve the unpublished theme context for unauthenticated browser sessions. The Playwright tests intentionally **fail closed** unless `window.Shopify.theme.id` equals **189276291388**. If they fail with a theme mismatch, open the unpublished Shopify theme preview using an authorized browser session or provide a staging preview URL that actually resolves to the target; do **not** remove the guard or treat a live-page pass as staging QA.

Lint is strict on global container leakage and invalid Liquid section schema JSON. Legacy colors, device-like breakpoints and hardcoded product fallbacks are reported as migration warnings until those sections are refactored and verified. This prevents a massive retrospective lint cleanup from hiding a new regression.

Test sample widths from 320–1920 CSS pixels cover awkward widths, but screenshots must also be reviewed for overlapping banners/CTAs, mobile menu behavior, Hindi/Devanagari, checkout/cart, product images and 200% zoom before merging any redesign. Run this suite locally/on approved VPS infrastructure, **not in GitHub Actions** without explicit approval.
