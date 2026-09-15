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
- Uploaded all 25 approved Sabpuja product WebPs to Shopify Files with alt text; live product media was not changed.
- Replaced the active legacy Kala product route with a staging-only Sabpuja product template.
- Removed old Kala product testimonials, recently-viewed/related promotional stack and fake urgency widgets from the active staging product route.
- Product handle now maps to approved Sabpuja WebP, staging SKU, staging pack size, staging inventory and conservative Sabpuja copy.
- Product pages no longer render legacy `product.vendor` or legacy `product.description`, preventing Shraddha Bhakti copy and unsupported claims from surfacing on staging.
- Real Shopify product form/cart behavior is retained where the underlying product is safe to purchase.
- Cotton Wicks is explicitly blocked from purchase on staging and shown at the demo staging price ₹100 because the shared live catalog price remains ₹0.
- Sandalwood Stick is explicitly blocked from purchase on staging because the shared live inventory remains 0.

## Festival-kit Shopify Files
- Diwali hero: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/diwali-puja-kit-hero-01.webp?v=1789514510`
- Diwali contents: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/diwali-puja-kit-contents-01.webp?v=1789514522`
- Navratri hero: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/navratri-puja-kit-hero-01.webp?v=1789514535`
- Navratri contents: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/navratri-puja-kit-contents-01.webp?v=1789514546`

The full 25-product CDN mapping is maintained in `docs/product-media-cdn-map.md`.

## Shopify theme files changed
- `sections/theme-header4.liquid`
- `sections/theme-footer5.liquid`
- `sections/sabpuja-home.liquid`
- `templates/index.liquid`
- `sections/theme-menu-mobile.liquid`
- `assets/sabpuja-staging.css`
- `assets/sabpuja-kits.css`
- `templates/product.liquid`
- `sections/sabpuja-product.liquid`
- `assets/sabpuja-product.css`

## Latest product-page verification
Shopify verified after the product-template write:
- Theme name: `Sabpuja Staging — Rebrand 2026`
- Role: `UNPUBLISHED`
- `processing=false`
- `processingFailed=false`
- `templates/product.liquid`: 73 bytes, checksum `9af8fc1da823ab0e9f0308cb6bc11353`
- `sections/sabpuja-product.liquid`: 14896 bytes, checksum `359cec24fb739b854b235c0b3e957dab`
- `assets/sabpuja-product.css`: 5414 bytes, checksum `4eec98f8f6cdbed411f13d45d4840724`

## Catalog behavior in staging
The product page uses the practical staging demo baseline from `sabpuja/content/docs/catalog/product-catalog-master-data.md`. Supplier verification remains a pre-live reconciliation task rather than a staging blocker.

Shared Shopify product records have deliberately not been mass-rewritten yet because catalog records are global across themes. The following remain cutover tasks after staging approval:
- vendor `Shraddha Bhakti` → `Sabpuja`
- apply final SKUs
- replace legacy product descriptions
- attach approved Sabpuja media directly to product records
- fix Cotton Wicks live price
- resolve Sandalwood Stick live inventory/restock

## Next implementation pass
1. Rebuild collection/search/cart visual layer for staging.
2. Apply Sabpuja content presentation to About, Contact, FAQ and help/policy surfaces without unnecessarily mutating shared live page records.
3. Audit the remaining active staging paths for `Shraddha Bhakti`, `Kala`, old demo claims and broken links.
4. Verify navigation and policy links.
5. Run mobile/desktop storefront QA and cart → checkout QA.
6. Only after staging approval, execute the shared catalog cutover and publish the theme.

## Safety rule
Do not publish this theme until staging QA and explicit cutover approval.