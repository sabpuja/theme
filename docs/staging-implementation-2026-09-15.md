# Sabpuja Staging Implementation — 2026-09-15

## Target
- Shopify theme: **Sabpuja Staging — Rebrand 2026**
- Theme ID: `gid://shopify/OnlineStoreTheme/188428157244`
- Role verified after latest write: `UNPUBLISHED`
- Live/main theme was not modified.

## Completed in staging
- Renamed duplicated theme to `Sabpuja Staging — Rebrand 2026`.
- Replaced active Header Style #4 implementation with Sabpuja header.
- Replaced active Footer Style #5 implementation with Sabpuja footer.
- Replaced legacy homepage section stack with `sections/sabpuja-home.liquid`.
- Added `assets/sabpuja-staging.css` using the approved Sabpuja color system.
- Disabled legacy Kala mobile-menu section; responsive navigation is handled by the Sabpuja header.
- Replaced false/demo announcement content with truthful Delhi NCR delivery, ₹100 shipping and prepaid-order messaging.
- Added approved Sabpuja positioning, tagline, support details, payments, address and social links.
- Removed the old homepage dependency on the legacy Kala/Shraddha promotional section stack.
- Uploaded four approved festival-kit WebP assets to Shopify Files with alt text.
- Wired the Diwali and Navratri hero WebPs into the staging homepage kit cards.
- Added expandable demo-contents previews for both festival kits.
- Added `assets/sabpuja-kits.css` for kit media/card presentation.

## Festival-kit Shopify Files
- Diwali hero: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/diwali-puja-kit-hero-01.webp?v=1789514510`
- Diwali contents: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/diwali-puja-kit-contents-01.webp?v=1789514522`
- Navratri hero: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/navratri-puja-kit-hero-01.webp?v=1789514535`
- Navratri contents: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/navratri-puja-kit-contents-01.webp?v=1789514546`

These files are stored globally in Shopify Files but are referenced only by the unpublished staging theme. Live product media was not changed.

## Shopify files changed
- `sections/theme-header4.liquid`
- `sections/theme-footer5.liquid`
- `sections/sabpuja-home.liquid`
- `templates/index.liquid`
- `sections/theme-menu-mobile.liquid`
- `assets/sabpuja-staging.css`
- `assets/sabpuja-kits.css`

## Verification
Latest Shopify verification after kit-media integration:
- Theme name: `Sabpuja Staging — Rebrand 2026`
- Role: `UNPUBLISHED`
- `processing=false`
- `processingFailed=false`
- `assets/sabpuja-kits.css` checksum: `d366e3e5ceafe08e546ef1691345a615`
- `sections/sabpuja-home.liquid` checksum: `01149302d38f4b37e2a4d5a0e3e356a9`
- `sections/theme-header4.liquid` checksum: `a348663cf0f1d59cf8aaf603f2d04cf1`
- `sections/theme-footer5.liquid` checksum: `bdd319e140a8b76017882bca8c1252b2`

## Next implementation pass
1. Upload/map the 25 approved Sabpuja product WebPs into Shopify Files without changing live product media.
2. Build a staging-only product page presentation that maps product handle → Sabpuja image/demo SKU/pack data and removes legacy Kala widgets/claims.
3. Rebuild collection/search/cart visual layer.
4. Apply Sabpuja content to About, Contact, FAQ, policies/help pages.
5. Audit old-brand/demo strings in remaining staging-theme files.
6. Mobile/desktop visual QA and cart → checkout QA.

## Safety rule
Do not publish this theme until staging QA and explicit cutover approval.