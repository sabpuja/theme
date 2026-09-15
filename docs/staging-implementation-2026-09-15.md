# Sabpuja Staging Implementation — 2026-09-15

## Target
- Shopify theme: **Sabpuja Staging — Rebrand 2026**
- Theme ID: `gid://shopify/OnlineStoreTheme/188428157244`
- Role verified after write: `UNPUBLISHED`
- Live/main theme was not modified.

## Completed in staging
- Renamed duplicated theme to `Sabpuja Staging — Rebrand 2026`.
- Replaced active Header Style #4 implementation with Sabpuja header.
- Replaced active Footer Style #5 implementation with Sabpuja footer.
- Replaced legacy homepage section stack with `sections/sabpuja-home.liquid`.
- Added `assets/sabpuja-staging.css` using the approved Sabpuja color system.
- Disabled legacy Kala mobile-menu section; responsive navigation is handled by the Sabpuja header.
- Replaced false/demo announcement content with truthful Delhi NCR delivery, ₹100 shipping and prepaid-order messaging.
- Added approved Sabpuja positioning, tagline, support details, payments, address, social links and festival-kit staging cards.
- Removed the old homepage dependency on the legacy Kala/Shraddha promotional section stack.

## Shopify files changed
- `sections/theme-header4.liquid`
- `sections/theme-footer5.liquid`
- `sections/sabpuja-home.liquid`
- `templates/index.liquid`
- `sections/theme-menu-mobile.liquid`
- `assets/sabpuja-staging.css`

## Verification
Shopify reported `processing=false`, `processingFailed=false` after the write and returned checksums for all six files.

## Next implementation pass
1. Upload/map approved Sabpuja WebP product assets into the staging-theme presentation layer without changing live product media.
2. Rebuild product-page presentation and remove Kala demo widgets/claims.
3. Rebuild collection/search/cart visual layer.
4. Apply Sabpuja content to About, Contact, FAQ, policies/help pages.
5. Audit old-brand/demo strings in remaining staging-theme files.
6. Mobile/desktop visual QA and cart → checkout QA.

## Safety rule
Do not publish this theme until staging QA and explicit cutover approval.