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
