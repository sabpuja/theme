# Sabpuja staging design-system migration: implementation log

**Date:** 2026-10-16  
**Target Shopify theme:** `Sabpuja-Staging-2026`, ID `189276291388`, role `UNPUBLISHED`  
**Production safeguard:** `Sabpuja Rebrand-9-oct-15-2026`, ID `189248373052`, role `MAIN` (never written)  
**Current source of truth:** https://lab.srv2005300.hstgr.cloud/theme/foundations/  
**Implementation method:** Shopify Admin GraphQL `themeFilesUpsert` with the unpublished staging theme ID. Changes are *in Shopify staging*, not mirrored as code in this PR.

## Implemented on Shopify staging

1. Removed the homepage hero's global `:root --sp-storefront-container` override; the hero now uses its own `--sp2026-hero-container-width` setting.
2. Added canonical fluid tokens to `assets/sabpuja-design-tokens.css`; aligned header, homepage feature/popular/support sections, product, collection, cart, general-page, Puja Guide and base storefront containers with `--sp-container-max` and `--sp-gutter`, including mobile breakpoints. Hero remains an intentional full-bleed layout.
3. Added `Approved product imagery` section to Theme Editor; migrated the approved kit/essentials gallery maps and main-image controls. Image snippets now use new settings. Previous settings data remains preserved but inactive. 54 mapping records and all 56 unique referenced base WebP assets were verified in staging. Native catalog media were **not** changed.
4. Extracted 12 zodiac and 28 other-product short-copy records from `sections/sabpuja-product.liquid` into staging-only Theme Editor product editorial data with product-metafield precedence. This is **not** a completed shared Shopify product-metafield migration.
5. Shared `snippets/sp-product-landing-intro.liquid` now renders editable hero copy for Daily Puja and Navratri landing sections. Their headline, lead, eyebrow, CTA labels and buy-panel copy have Shopify section settings. Remaining layout/CSS and other editorial text in those specialized templates still need consolidated refactoring.
6. Homepage hero, featured cards and festival cards have editable campaign URL destinations; all 12 zodiac cards have configurable product assignments.
7. Added shared `snippets/sp-price.liquid` used on product pages, cart and zodiac cards. Product prices are sourced from Shopify.
8. Preserved merchant SEO descriptions where populated, added article OG type and social-sharing metadata using Shopify image assets.
9. Added dedicated fluid blog/article editorial templates and stylesheet, optional data-driven related products, responsive image cards and pagination.
10. Header menu destination links have six Theme Editor URL selectors, retaining fallback URLs. Footer retains Shopify link-list blocks and now uses a design-system container shell.

All mentioned Shopify file mutations returned no `userErrors` from Admin API. No theme was published, and no shared product, product-media, order, metafield, metaobject or checkout data were mutated.

## Still not completed or accepted

- Full product architecture: Daily/Navratri remain specialized Liquid and CSS templates with many fixed editorial blocks; migrate further only after a reviewed data-model decision. Product metafields cannot be safely populated as *staging-only* because catalog data is shared with the production theme.
- Remove/decommission all obsolete staged image-overrides and copy maps **only** after full rendering QA and an approved catalog-media migration; do not delete preservation keys prematurely.
- Normalize remaining sitewide inline styling, global `!important` rules and layout-specific tokens after screenshot review, especially mobile hero overlay and advanced header navigation.
- Run browser/visual QA across 320/390/430/768/1024/1440/1920 widths, Hindi, 200% zoom, keyboard, reduced motion, image source/CTAs, cart and redirects. No browser QA has passed yet: browser automation wallet was out of funds, and a simple unauthenticated `?preview_theme_id` URL had stripped the preview context.
- Verify Shopify theme-editor schema load/render, individual responsive WebP derivative assets, checkout flow in non-purchasing QA, and all SEO/OG outputs in HTML.
- Local lint and Playwright suites in this PR must run against a pulled unpublished Shopify theme and a **verified actual staging preview**. QA harness fails closed on theme-ID mismatch. CI/Actions workflows are deliberately not created.

## QA runbook

From Windows PowerShell, after Shopify CLI login:

```powershell
shopify theme pull --theme 189276291388 --path .\staging-theme
$env:SABPUJA_THEME_DIR = ".\staging-theme"
npm install
node qa/lint-foundations.mjs
npx playwright install chromium
$env:SABPUJA_STAGING_THEME_ID = "189276291388"
npm run qa:staging
```

Do not remove the theme-id guard; fix the staging preview authentication first. Attach results/screenshots to this draft PR and do not merge automatically. Full source sync from Shopify staging into a reviewed repository branch is a separate task.


## 2026-10-16: Implementation phase 2 (Shopify staging only)

**These entries supersede the earlier list of open implementation work.** No production theme, catalog product, pricing, checkout or shared product media mutations were made.

- Replaced all active `sp-staging-*` image snippet calls across modern landing templates, product image cards, and legacy media components with `sp-approved-*` helpers. Scanned all **439 Liquid theme files** (104 modern + 332 older at scan time; count changed as snippets were added) and found two extra media references, which were migrated. Removed the 12 legacy image-map keys from unpublished `settings_data.json` after preserving the approved replacement maps. Shopify blocked physical deletion of three old snippet files under its safety policy, so those files were reduced to small compatibility aliases; they no longer contain old mapping logic.
- Reused the identical initial **~5.5KB** CSS foundation of Daily/Navratri via `assets/sabpuja-kit-landing-foundations.css`, loaded before each kit's content-specific CSS. Centralized fluid typography, spacing, consistent Foundations palette and width tokens.
- Added editable headings for all static landing-module headings: now **22 section settings per kit**, including delivery/payment reassurance. The original article-specific body content and images remain distinct.
- Extracted both identical purchase-panel templates into `snippets/sp-kit-purchase-panel.liquid` while retaining Shopify product forms, data hooks, selected variant, quantity and inventory behavior.
- Extracted both product landing JavaScript blocks into `snippets/sp-kit-landing-behavior.liquid` using the existing daily/navratri hook prefix supplied by the section; standardized JS display money formatting to omit trailing decimals for integer INR amounts.
- Migrated **28 Daily Puja + 24 Navratri** plain content paragraphs, FAQ answers and ritual guidance into theme-local editable global settings. The landing templates now render them via `snippets/sp-kit-editorial-copy.liquid`; merchant translation of those theme-setting values should be verified during language QA.
- Replaced layout's global inline font and margins patches with `assets/sabpuja-layout-foundations.css`. Moved the header intermediate-width override out of inline Liquid into `assets/sabpuja-header.css`. Converted `assets/sabpuja-component-foundations.css` from `!important` literals to compatibility aliases of current design tokens; aligned old brand color aliases without altering approved SVG artwork.
- Converted both language-specific shipping announcements into header Theme Editor settings. The **active** `sections/theme-footer5.liquid` now has 12 editable footer fields including six catalog destinations, contact email, social URLs, the guide destination and support copy. Footer uses existing global layout alignment.
- This PR's local lint checker now detects active legacy image-map references, unexpected `sp-` snippet references and obsolete settings-data keys in addition to global-width leakage/invalid section schema. Automated browser QA remains staged and **deliberately not run** as requested.

**Acceptance still separate:** authenticated unpublished-theme preview, human visual QA, accessibility, 200% zoom/Hindi and cart flow; do not mark any visual/functional test passed until executed. The core component-driven implementation is present in Shopify staging, but visual acceptance and live rollout are excluded from this phase. Legacy theme files unrelated to the active Sabpuja templates and the Shopify-protected compatibility aliases may remain physically present.
