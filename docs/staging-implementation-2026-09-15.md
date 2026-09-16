# Sabpuja Staging Implementation — 2026-09-15

## Target
- Shopify theme: **Sabpuja Staging — Rebrand 2026**
- Theme ID: `gid://shopify/OnlineStoreTheme/188428157244`
- Role verified after Task 10 carousel write: `UNPUBLISHED`
- Live/main theme was not intentionally modified.

## Completed in staging
- Renamed duplicated theme to `Sabpuja Staging — Rebrand 2026`.
- Replaced active Header Style #4 implementation with the controlled Sabpuja header.
- Replaced active Footer Style #5 implementation with the controlled Sabpuja footer.
- Replaced the legacy homepage section stack with `sections/sabpuja-home.liquid`.
- Added `assets/sabpuja-staging.css` using the approved Sabpuja color system.
- Disabled the legacy Kala mobile-menu section; responsive navigation is handled by the Sabpuja header.
- Replaced false/demo announcement content with truthful Delhi NCR delivery, ₹100 shipping and prepaid-order messaging.
- Added approved Sabpuja positioning, tagline, support details, payments, address and social links.
- Removed the old homepage dependency on the legacy Kala/Shraddha promotional section stack.
- Uploaded four festival-kit WebP assets to Shopify Files for staging use.
- Wired the Diwali and Navratri hero WebPs into the staging homepage kit cards.
- Added expandable demo-contents previews for both festival kits.
- Added `assets/sabpuja-kits.css` for kit media/card presentation.
- Replaced the previous single homepage hero with a three-slide manual staging carousel for Diwali, Navratri and evergreen Puja Essentials.
- Added `assets/sabpuja-carousel.css` for the carousel structure, responsive layout and controls.
- Kept Diwali/Navratri primary seasonal actions non-clickable while their Task 11 destination pages do not yet exist; no dead seasonal page links were introduced.
- Wired the evergreen carousel CTA to the verified `/collections/all` destination.
- Passed focused desktop and 375px mobile carousel interaction/layout QA; final purpose-built responsive campaign WebPs remain pending.
- Uploaded all 25 approved Sabpuja product WebPs to Shopify Files with alt text; live product media was not changed.
- Replaced the active legacy Kala product route with a staging-only Sabpuja product template.
- Removed old Kala product testimonials, recently-viewed/related promotional stack and fake urgency widgets from the active staging product route.
- Product handle now maps to approved Sabpuja WebP, staging SKU, staging pack size, staging inventory and conservative Sabpuja copy.
- Product pages no longer render legacy `product.vendor` or legacy `product.description`, preventing Shraddha Bhakti copy and unsupported claims from surfacing on staging.
- Real Shopify product form/cart behavior is retained where the underlying product is safe to purchase.
- Cotton Wicks is explicitly blocked from purchase on staging and shown at the demo staging price ₹100 because the shared live catalog price remains ₹0.
- Sandalwood Stick is explicitly blocked from purchase on staging because shared live inventory remains 0.
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
- Added `sections/sabpuja-info-page.liquid` and `assets/sabpuja-pages.css` for responsive About, Contact, FAQ, support/policy and Help & Guide presentation.
- Created real Shopify Page records for FAQ, Help, Shipping & Payments, Returns & Order Issues, five core puja guides and two astrology explainers; these routes use the Sabpuja information-page template and `seo.hidden = 1` while staging is in progress.
- The staging 404 template now serves a branded Sabpuja not-found experience for genuinely unknown routes.
- Replaced unsafe auxiliary Page/Blog/Article/List Collections presentation with simple Sabpuja staging-safe templates.
- Updated `layout/theme.liquid` with Sabpuja-safe metadata for active routes; About/Contact no longer surface Shraddha Bhakti SEO text in staging.
- Corrected the homepage title/OG title to `Sabpuja — Your Puja, Prepared with Care.` instead of inheriting the global `Sab Puja` shop title.
- Corrected the `/collections` Puja Kits card so it links to the working `/#puja-kits` homepage section instead of the currently empty `/collections/puja-kit` collection.
- No Shopify-managed Privacy Policy record was modified during this staging pass.

## Festival-kit Shopify Files
- Diwali hero: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/diwali-puja-kit-hero-01.webp?v=1789514510`
- Diwali contents: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/diwali-puja-kit-contents-01.webp?v=1789514522`
- Navratri hero: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/navratri-puja-kit-hero-01.webp?v=1789514535`
- Navratri contents: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/navratri-puja-kit-contents-01.webp?v=1789514546`

The full 25-product CDN mapping is maintained in `docs/product-media-cdn-map.md`.

## Shopify theme files changed
- `layout/theme.liquid`
- `sections/theme-header4.liquid`
- `sections/theme-footer5.liquid`
- `sections/sabpuja-home.liquid`
- `templates/index.liquid`
- `sections/theme-menu-mobile.liquid`
- `assets/sabpuja-staging.css`
- `assets/sabpuja-kits.css`
- `assets/sabpuja-carousel.css`
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
- `templates/list-collections.liquid`
- safe auxiliary Page/Blog/Article templates added during Task 07.

## Current content-page model
The existing shared `about-us` and `contact-us` Shopify Page records remain shared records. Their staging presentation and metadata are supplied by the Sabpuja theme rather than legacy page-body presentation.

The following approved content paths now have real Shopify Page records and are no longer virtual 404-routed staging paths:
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

These created Page records resolve normally but use `seo.hidden = 1` while the rebrand remains in staging. The Shopify-managed Privacy Policy remains untouched.

## Task 07 route/link QA
Task 07 is complete. The audited staging surface covered:
- homepage;
- search;
- cart;
- collections and collections index;
- About and Contact;
- all support/help/guide routes listed above;
- safe blog/auxiliary routes;
- all 25 active product URLs;
- Privacy Policy;
- verified Instagram, Facebook, YouTube and support destinations.

No active rendered occurrences of `Shraddha Bhakti`, `shraddhabhakti.com`, `Kala`, `Ralph Lauren` or `WELCOME15` were found in the audited route set.

Detailed evidence: `docs/task-07-link-wiring-audit-2026-09-15.md`.

## Task 08 visual + workflow QA
Task 08 is complete.

Interactive QA run `0076156a-c53d-4985-a943-514eed15cf28` passed:
- branded 404 recovery links;
- safe-product add-to-cart;
- quantity update 1 → 2;
- cart subtotal/total update;
- item removal;
- empty-cart state;
- re-add;
- Shopify checkout handoff;
- final cart cleanup.

No customer data was entered, no order was placed and no payment was attempted.

Responsive visual QA run `5bb7c6f0-92d4-45cf-9f9a-834febd5dcff` covered desktop and mobile homepage, collections, representative products, search, cart, help, About, Contact, FAQ, Shipping & Payments, Returns & Order Issues and 404 routes with no critical responsive defect.

Two apparent visual-agent discrepancies were independently cleared:
- the Returns cancellation paragraph is complete in the rendered page; the report had captured it at the viewport edge;
- fresh footer-only renders and `sections/theme-footer5.liquid` confirm the controlled Sabpuja footer only—no inherited My Account/Wishlist/Terms/Twitter/`info@sabpuja.com` links are rendered.

Detailed evidence: `docs/task-08-storefront-workflow-qa-2026-09-15.md`.

## Task 10 carousel implementation + QA
Task 10's **carousel structure** is implemented and QA-passed; Task 10 itself remains in progress because its six final purpose-built responsive campaign WebPs are still pending.

Shopify post-write verification:
- theme role: `UNPUBLISHED`;
- `processing=false`;
- `processingFailed=false`;
- `sections/sabpuja-home.liquid`: 11276 bytes, checksum `f52ba9bb2eb287fcbddb7135fba06048`;
- `assets/sabpuja-carousel.css`: 4067 bytes, checksum `f428621254e5ef3240cbdcf1e51750af`.

CTA safeguards:
- Diwali primary seasonal action is a non-clickable `Seasonal page in preparation` status;
- Navratri primary seasonal action is a non-clickable `Seasonal page in preparation` status;
- neither `/pages/diwali-puja` nor `/pages/navratri-puja` is linked from the rendered carousel;
- evergreen `Shop Puja Essentials` is wired to the verified `/collections/all` route;
- current-kit secondary links use the existing `#puja-kits` anchor.

A direct rendered-DOM check confirmed the only carousel anchor destinations are `#puja-kits` and `/collections/all`.

Desktop focused QA run `624f984c-18b6-4b26-ac26-ce02c795a22e` passed with zero issues:
- Diwali → Navratri → Evergreen sequence;
- Previous control;
- all three direct-selection dots;
- seasonal non-navigation;
- evergreen collection navigation;
- carousel/trust-strip layout.

375px mobile focused QA run `d78a8005-8e50-4092-9004-1444a1f8c017` passed with zero issues:
- all three slides;
- previous/next and dot controls;
- seasonal non-navigation;
- evergreen collection navigation;
- responsive visual layout;
- trust strip integrity.

An earlier exploratory run `3a9c3f25-823b-45e9-bf6c-ff98494d92ff` returned only its last screenshot instruction rather than a usable final QA report and is deliberately not counted as evidence.

Detailed evidence: `docs/task-10-homepage-carousel-implementation-2026-09-15.md`.

## Catalog behavior in staging
The product page, product cards and cart media use the practical staging demo baseline from `sabpuja/content/docs/catalog/product-catalog-master-data.md`. Supplier verification remains a pre-live reconciliation task rather than a staging blocker.

Shared Shopify product records have deliberately not been mass-rewritten because catalog records are global across themes. The following remain cutover tasks after staging approval:
- vendor `Shraddha Bhakti` → `Sabpuja`;
- apply final SKUs where shared active products still need catalog cutover;
- replace legacy product descriptions;
- attach approved Sabpuja media directly to shared product records;
- fix Cotton Wicks live price;
- resolve Sandalwood Stick live inventory/restock.

## Active image programs

### TASK-09 — 12 Astrology Remedy Kits
All 12 sun-sign remedy kit shells were re-verified in Shopify as unpublished `DRAFT` products with stable `SP-AST-*` SKUs, price `0.00`, inventory 0 and media count 0.

Their source content brief intentionally keeps exact kit contents TBD. Accordingly:
- sealed-package primary hero production is active and may use only verified brand/product naming with no physical contents depicted as included;
- contents/detail images remain blocked until exact per-kit BOM and quantities are approved;
- no outcome claim or unverified packaging fact may be generated;
- all final storefront raster assets must be WebP.

Active source-of-truth:
- `sabpuja/content/assets/product-images/kits/astrology-remedy-kits/README.md`
- `sabpuja/content/assets/product-images/kits/astrology-remedy-kits/astrology-remedy-kits-manifest.json`
- `sabpuja/content/assets/product-images/kits/astrology-remedy-kits/hero-generation-briefs.md`

### TASK-10 — Homepage hero carousel
The carousel structure is now implemented and desktop/mobile QA-passed on unpublished staging.

Current staging presentation:
- Diwali temporarily reuses the existing staging Diwali kit hero WebP;
- Navratri temporarily reuses the existing staging Navratri kit hero WebP;
- evergreen uses the current Sabpuja brand illustration treatment.

These are not final launch campaign assets. The following purpose-built WebPs remain pending:
- `sabpuja-diwali-hero-desktop-01.webp`;
- `sabpuja-diwali-hero-mobile-01.webp`;
- `sabpuja-navratri-hero-desktop-01.webp`;
- `sabpuja-navratri-hero-mobile-01.webp`;
- `sabpuja-puja-essentials-hero-desktop-01.webp`;
- `sabpuja-puja-essentials-hero-mobile-01.webp`.

Diwali/Navratri final CTA wiring remains blocked until Task 11 creates and verifies dedicated destination pages. The evergreen CTA is currently wired to and QA-verified for `/collections/all`.

Active source-of-truth:
- `sabpuja/content/assets/homepage/hero-carousel/README.md`
- `sabpuja/content/assets/homepage/hero-carousel/hero-carousel-manifest.json`
- `sabpuja/content/assets/homepage/hero-carousel/campaign-generation-briefs.md`

## TASK-11 seasonal sales pages
Diwali and Navratri remain demo-only offers until their BOM, commercial offer and dedicated pages are ready.

Planned destinations:
- `/pages/diwali-puja`
- `/pages/navratri-puja`

These paths must not be wired from the homepage carousel until the pages actually exist and pass QA. No misleading Buy Now/checkout CTA is allowed while offers remain demo-only.

## Next implementation pass
1. Produce and review the first sealed-package hero concepts for the 12 Astrology Remedy Kits under Task 09 without depicting unapproved contents.
2. Produce and review the six purpose-built desktop/mobile Diwali, Navratri and evergreen hero-carousel WebPs under Task 10.
3. Export approved candidates as WebP, store them in GitHub/DAM, add alt text and record Shopify Files CDN references.
4. Replace the current Task 10 temporary staging visuals with approved responsive assets and repeat desktop/mobile crop QA.
5. Build and QA Task 11 Diwali/Navratri sales pages when BOM/offer inputs are ready, then wire seasonal primary CTAs.
6. Keep all 12 Astrology Remedy Kit products unpublished until contents, claims, commercial data and final images are approved.
7. Execute shared catalog/content cutover and publish the staging theme only after explicit launch approval.

## Safety rule
Do not publish this theme or globally rewrite shared live catalog/media solely because staging QA has passed. Explicit cutover approval is still required.
