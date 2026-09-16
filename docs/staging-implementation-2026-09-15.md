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
- Replaced the active legacy collection route with `sections/sabpuja-collection.liquid`.
- Removed the legacy collection sidebar/category/brand/filter presentation from the active staging collection route.
- Added `snippets/sabpuja-product-card.liquid`, mapping all 25 existing products to approved Sabpuja WebPs in Shopify Files rather than shared legacy featured images.
- Replaced the active legacy search route with `sections/sabpuja-search.liquid`, using the same Sabpuja product card/media mapping.
- Added `assets/sabpuja-catalog.css` for responsive collection/search cards and grids.
- Enlarged the product hero image within its square media frame via `assets/sabpuja-product.css`; desktop uses a stronger crop/zoom and mobile a lighter zoom to reduce empty internal image margin.
- Replaced the active legacy cart route with `sections/sabpuja-cart.liquid` and `assets/sabpuja-cart.css`.
- Cart line items now use the approved 25-product Sabpuja WebP mapping instead of legacy shared product thumbnails.
- Preserved real Shopify cart mechanics: quantity updates, item removal, order notes and the native checkout submit flow.
- Added verified cart reassurance only: Delhi NCR delivery, 1–3 business days, ₹100 flat shipping, prepaid payment methods, support phone and email.
- Added cart-level checkout protection for Cotton Wicks and Sandalwood Stick while their known shared-catalog price/inventory blockers remain unresolved.

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
- `snippets/sabpuja-product-card.liquid`
- `sections/sabpuja-collection.liquid`
- `templates/collection.liquid`
- `sections/sabpuja-search.liquid`
- `templates/search.liquid`
- `assets/sabpuja-catalog.css`
- `templates/cart.liquid`
- `sections/sabpuja-cart.liquid`
- `assets/sabpuja-cart.css`

## Latest cart verification
Shopify verified after the cart write:
- Theme name: `Sabpuja Staging — Rebrand 2026`
- Role: `UNPUBLISHED`
- `processing=false`
- `processingFailed=false`
- `assets/sabpuja-cart.css`: 9487 bytes, checksum `6005b1d7dc98b2301103f530c5c2eb79`
- `sections/sabpuja-cart.liquid`: 11853 bytes, checksum `ee726c48d9cb606f0735fa67ed746492`
- `templates/cart.liquid`: 29 bytes, checksum `920fd14d444c95ac2d86ce6e3ddb0e13`

## Catalog behavior in staging
The product page, product cards and cart media use the practical staging demo baseline from `sabpuja/content/docs/catalog/product-catalog-master-data.md`. Supplier verification remains a pre-live reconciliation task rather than a staging blocker.

Shared Shopify product records have deliberately not been mass-rewritten yet because catalog records are global across themes. The following remain cutover tasks after staging approval:
- vendor `Shraddha Bhakti` → `Sabpuja`
- apply final SKUs
- replace legacy product descriptions
- attach approved Sabpuja media directly to product records
- fix Cotton Wicks live price
- resolve Sandalwood Stick live inventory/restock

## Deferred festival sales work
Diwali and Navratri remain demo-only during the current core staging sequence. Before seasonal sales launch, each needs a dedicated sales/landing page. The homepage single demo hero should later become a carousel with purposeful campaign imagery, valid CTAs and verified Sabpuja trust factors. This work is recorded in the core execution checklist and is intentionally deferred until the current content/QA sequence unless launch timing requires reprioritization.

## Deferred product expansion — 12 Astrology Remedy Kits
All 12 zodiac/sun-sign remedy kit shells already exist as unpublished Shopify DRAFT products with stable SKUs and must remain unpublished. Demo commercial metadata and Sabpuja WebP image generation are intentionally deferred until the current rebrand staging pass and QA are complete. Exact ritual/remedy contents and customer-facing remedy claims require owner review before publication. The active execution record is maintained in `sabpuja/core/docs/roadmap/staging-execution-checklist-2026-09-15.md`.

## Next implementation pass
1. Apply Sabpuja content presentation to About, Contact, FAQ and help/policy surfaces without unnecessarily mutating shared live page records.
2. Audit the remaining active staging paths for `Shraddha Bhakti`, `Kala`, old demo claims and broken links.
3. Verify navigation and policy links.
4. Run mobile/desktop storefront QA and cart → checkout QA.
5. Only after staging approval, execute the shared catalog cutover and publish the theme.

## Safety rule
Do not publish this theme until staging QA and explicit cutover approval.
