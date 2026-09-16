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
- Replaced the staging About and Contact custom templates with the approved Sabpuja information-page presentation.
- Added `sections/sabpuja-info-page.liquid` and `assets/sabpuja-pages.css` for responsive About, Contact, FAQ, policy/support and Help & Guide presentation.
- Added staging-only virtual routes for FAQ, Help, Shipping & Payments, Returns & Order Issues, five core puja guides and two astrology explainers.
- The staging 404 template now routes the approved virtual `/pages/...` paths into the Sabpuja information-page section and shows a branded 404 for unknown paths.
- No shared Shopify Page body was rewritten and no Shopify policy record was modified during this pass.

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
- `assets/sabpuja-pages.css`
- `sections/sabpuja-info-page.liquid`
- `templates/page.about.liquid`
- `templates/page.contact.liquid`
- `templates/404.liquid`

## Latest content-page verification
Shopify verified after the Task 06 theme write:
- Theme name: `Sabpuja Staging — Rebrand 2026`
- Role: `UNPUBLISHED`
- `processing=false`
- `processingFailed=false`
- `assets/sabpuja-pages.css`: 4196 bytes, checksum `9dc08fe0f62988134563f31ba0ff15d4`
- `sections/sabpuja-info-page.liquid`: 30616 bytes, checksum `5a3a97e23ce5b7b43449b7f44ddcb033`
- `templates/page.about.liquid`: 33 bytes, checksum `9d928fbc02c3b0292ccfa8b26a6ac29c`
- `templates/page.contact.liquid`: 33 bytes, checksum `9d928fbc02c3b0292ccfa8b26a6ac29c`
- `templates/404.liquid`: 33 bytes, checksum `9d928fbc02c3b0292ccfa8b26a6ac29c`

## Task 06 staging route model
Only two shared Shopify Pages currently exist: `about-us` and `contact-us`. They remain shared records, but staging now ignores their legacy page-body presentation and uses approved Sabpuja content through their existing custom template suffixes.

The following content routes are intentionally virtual on the unpublished staging theme so the live store is not changed by creating/publishing global Shopify Pages:
- `/pages/faq`
- `/pages/help`
- `/pages/shipping-payments`
- `/pages/returns-order-issues`
- `/pages/how-to-read-product-pages`
- `/pages/puja-preparation-checklist`
- `/pages/common-puja-essentials`
- `/pages/storage-and-care`
- `/pages/how-to-choose-puja-kit`
- `/pages/astrology-remedy-kits`
- `/pages/sun-sign-vs-rashi`

This is staging isolation only. Before launch, approved virtual routes should be replaced by real Shopify Pages or another deliberate production content model. The existing Shopify-managed Privacy Policy remains untouched.

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
1. Audit active staging routes for unintended `Shraddha Bhakti`, `shraddhabhakti.com`, `Kala`, `Ralph Lauren`, demo claims and placeholder strings.
2. Repair any customer-facing staging references found without deleting historical evidence from docs/audits.
3. Verify navigation and policy/help links.
4. Run mobile/desktop storefront QA and cart → checkout QA.
5. Only after staging approval, execute the shared catalog/content cutover and publish the theme.

## Safety rule
Do not publish this theme until staging QA and explicit cutover approval.
