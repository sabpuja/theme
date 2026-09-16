# Sabpuja Staging Implementation — 2026-09-15

## Target
- Shopify theme: **Sabpuja Staging — Rebrand 2026**
- Theme ID: `gid://shopify/OnlineStoreTheme/188428157244`
- Role re-verified after Task 11 scaffold write: `UNPUBLISHED`
- `processing=false`; `processingFailed=false`.
- Live/main theme was not intentionally modified.

## Completed in staging
- Renamed duplicated theme to `Sabpuja Staging — Rebrand 2026`.
- Replaced active Header Style #4 and Footer Style #5 with controlled Sabpuja presentation.
- Replaced the legacy homepage section stack with `sections/sabpuja-home.liquid`.
- Added Sabpuja staging, kit, carousel, catalog, product, cart, page and seasonal CSS assets.
- Disabled the legacy Kala mobile menu and legacy homepage promotional dependencies.
- Replaced false/demo announcement content with verified Delhi NCR delivery, ₹100 flat shipping and prepaid-order messaging.
- Added approved Sabpuja positioning, support details, address, payment facts and official social links.
- Uploaded four festival-kit staging WebPs for the homepage kit cards and expandable demo-contents previews.
- Replaced the former single hero with a three-slide manual Diwali → Navratri → Evergreen carousel.
- Produced, uploaded, wired and QA-verified all six final responsive Task 10 campaign WebPs.
- Kept Diwali/Navratri primary seasonal actions non-clickable while Task 11 commercial offers remain unapproved.
- Kept evergreen `Shop Puja Essentials` wired to verified `/collections/all`; current-kit secondary links use `#puja-kits`.
- Added Task 11 shared seasonal page section/CSS and dedicated Diwali/Navratri page templates to the unpublished theme.
- Created real Diwali/Navratri Shopify Page shells as unpublished records with their dedicated template suffixes.
- Uploaded all 25 approved Sabpuja product WebPs to Shopify Files with alt text; live product media was not changed.
- Replaced the active legacy product route with a staging-only Sabpuja product template and removed legacy Kala testimonials, recently viewed/related promotional stack and fake urgency widgets.
- Product pages no longer render legacy `product.vendor` or `product.description`; staging product copy/media/SKU/pack-size/inventory presentation is controlled by Sabpuja mappings.
- Real Shopify product form/cart behavior remains for safe products.
- Cotton Wicks remains checkout-blocked on staging because the shared live price is ₹0; staging display is ₹100.
- Sandalwood Stick remains checkout-blocked because shared inventory remains 0.
- Replaced collection/search routes with Sabpuja presentation and shared approved product-card/media mapping.
- Enlarged representative product hero presentation with responsive product CSS.
- Rebuilt cart presentation while preserving native quantity update, removal, order notes and checkout submit mechanics.
- Cart media uses approved Sabpuja WebPs and includes only verified delivery/payment/support reassurance.
- Replaced About/Contact staging templates and created the Sabpuja information-page presentation.
- Created real Shopify Page records for FAQ, Help, Shipping & Payments, Returns & Order Issues, five core puja guides and two astrology explainers; new records use `seo.hidden = 1` during staging.
- Added a branded staging 404 and safe auxiliary Page/Blog/Article/List Collections templates.
- Updated active-route metadata; About/Contact no longer surface Shraddha Bhakti SEO text in staging.
- Corrected homepage title/OG title to `Sabpuja — Your Puja, Prepared with Care.`.
- Corrected `/collections` Puja Kits destination to `/#puja-kits`.
- Shopify-managed Privacy Policy was not modified.

## Festival-kit Shopify Files
- Diwali hero: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/diwali-puja-kit-hero-01.webp?v=1789514510`
- Diwali contents: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/diwali-puja-kit-contents-01.webp?v=1789514522`
- Navratri hero: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/navratri-puja-kit-hero-01.webp?v=1789514535`
- Navratri contents: `https://cdn.shopify.com/s/files/1/0923/1381/3308/files/navratri-puja-kit-contents-01.webp?v=1789514546`

The full 25-product CDN mapping remains in `docs/product-media-cdn-map.md`.

## Current content-page model
Existing shared `about-us` and `contact-us` records remain shared records. Staging presentation/metadata come from the Sabpuja theme rather than legacy page-body presentation.

Real Shopify Page routes created for staging:
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

Those support/guide records resolve normally and use `seo.hidden = 1` while the rebrand remains in staging.

Task 11 adds two real Shopify Page shells that intentionally **do not resolve publicly yet** because they remain unpublished:
- `/pages/diwali-puja` — Page `gid://shopify/Page/160331399484`, `isPublished=false`, template suffix `diwali-puja`;
- `/pages/navratri-puja` — Page `gid://shopify/Page/160331432252`, `isPublished=false`, template suffix `navratri-puja`.

The Shopify-managed Privacy Policy remains untouched.

## Task 07 route/link QA
Task 07 is complete. Browser verification covered homepage, search, cart, collections/index, About, Contact, all support/help/guide routes, safe auxiliary routes, all 25 active product URLs, Privacy Policy, and verified official social/support destinations.

No active rendered occurrences of `Shraddha Bhakti`, `shraddhabhakti.com`, `Kala`, `Ralph Lauren` or `WELCOME15` were found in the audited route set.

Evidence: `docs/task-07-link-wiring-audit-2026-09-15.md`.

## Task 08 visual + workflow QA
Task 08 is complete.

Interactive run `0076156a-c53d-4985-a943-514eed15cf28` passed branded 404 recovery, Roli Kumkum add-to-cart, quantity 1→2, amount update, removal, empty state, re-add, Shopify checkout handoff and final cart cleanup. No customer data, order or payment was submitted.

Responsive run `5bb7c6f0-92d4-45cf-9f9a-834febd5dcff` covered desktop/mobile homepage, collections, representative products, search, cart, help, About, Contact, FAQ, Shipping & Payments, Returns & Order Issues and 404 with no critical responsive defect.

Two apparent visual-agent discrepancies were independently cleared: the Returns sentence is complete, and fresh footer-only renders/source confirm only the controlled Sabpuja footer.

Evidence: `docs/task-08-storefront-workflow-qa-2026-09-15.md`.

## Task 10 carousel final implementation + QA
Task 10 is **DONE — FINAL ASSETS WIRED / RESPONSIVE QA PASSED**.

### Final responsive assets
All six final campaign WebPs are READY in Shopify Files and wired through `<picture>` sources:
- `sabpuja-diwali-hero-desktop-01.webp` — 1440×1080
- `sabpuja-diwali-hero-mobile-01.webp` — 900×1200
- `sabpuja-navratri-hero-desktop-01.webp` — 1440×1080
- `sabpuja-navratri-hero-mobile-01.webp` — 900×1200
- `sabpuja-puja-essentials-hero-desktop-01.webp` — 1440×1080
- `sabpuja-puja-essentials-hero-mobile-01.webp` — 900×1200

Canonical Media IDs, byte sizes, CDN URLs and alt text are recorded in `sabpuja/content/assets/homepage/hero-carousel/hero-carousel-manifest.json`.

Final theme verification:
- role `UNPUBLISHED`;
- `processing=false`;
- `processingFailed=false`;
- `sections/sabpuja-home.liquid`: 11,926 bytes, MD5 `a77945c76d92073e0d6efd6bb0db7857`;
- `assets/sabpuja-carousel.css`: 4,067 bytes, MD5 `f428621254e5ef3240cbdcf1e51750af`.

### Responsive-source regression and resolution
The first responsive-source QA correctly found desktop WebPs being selected in the mobile test environment. Failed regression run: `581ec6bf-3d8c-4e62-a297-4f88029c515d`.

The `<picture>` source breakpoint was changed from 640px to 980px to match the carousel stacked-layout breakpoint. Coverage was not weakened.

Final passing evidence:
- desktop interaction run `d27c135b-87b9-4043-a709-07845edde0fc` — sequence, Previous, dots, seasonal non-navigation, evergreen navigation, kit anchors, trust strip and visual layout passed with `issues=[]`;
- post-fix mobile run `7655a7c3-093f-452b-846b-e844d21b436e` — mobile sources, interaction and visual layout passed with `issues=[]`;
- post-fix desktop-source run `5666f823-d995-49a6-ab5b-99805fb71eb8` — all three desktop WebPs selected above 980px, no broken images, `issues=[]`.

Malformed terminal-report runs `43e7050c-c2db-42af-9647-6633c0c53278` and `f6fbed7a-6f6a-405c-9c20-b520fefd38b0` are deliberately not counted as pass evidence.

CTA safeguards remain:
- Diwali primary seasonal action: non-clickable;
- Navratri primary seasonal action: non-clickable;
- `/pages/diwali-puja` and `/pages/navratri-puja`: not linked until Task 11 passes its own gates;
- evergreen `Shop Puja Essentials`: `/collections/all`;
- current-kit secondary links: `#puja-kits`.

Evidence:
- structural implementation history: `docs/task-10-homepage-carousel-implementation-2026-09-15.md`;
- final asset/QA completion: `docs/task-10-homepage-carousel-final-assets-2026-09-15.md`.

## Task 11 seasonal page scaffold
Task 11 is **IN PROGRESS — NON-COMMERCIAL STRUCTURE IMPLEMENTED / COMMERCIAL OFFER BLOCKED**.

Theme files on unpublished staging:
- `assets/sabpuja-seasonal.css` — 2,634 bytes, MD5 `5dba715f34c2482557291cef4466b41e`;
- `sections/sabpuja-seasonal-page.liquid` — 4,733 bytes, MD5 `580fcc569edf2dfb577bedbe36a0074a`;
- `templates/page.diwali-puja.liquid` — 38 bytes, MD5 `f6ed3fb8bd6452b3283d732227f87827`;
- `templates/page.navratri-puja.liquid` — 38 bytes, MD5 `f6ed3fb8bd6452b3283d732227f87827`.

The shared section switches by page handle and reuses the final Task 10 responsive Diwali/Navratri campaign artwork. It includes only verified delivery/payment/support facts and safe links to current Puja Essentials or support.

It intentionally contains no:
- seasonal selling price or compare-at price;
- discount/urgency claim;
- exact BOM or contents list;
- inventory/scarcity promise;
- product/bundle-model assertion;
- Buy Now button;
- checkout link;
- guaranteed spiritual or future-outcome claim.

Post-write verification passed:
- theme remained `UNPUBLISHED`;
- `processing=false`;
- `processingFailed=false`;
- all four files re-queried with matching checksums/sizes;
- both seasonal Page records re-queried with `isPublished=false` and `publishedAt=null`.

Public-route visual QA is intentionally not yet applicable because publishing the unfinished Page shells solely for QA would weaken the commercial-safety gate. Do not publish them until the offer inputs are approved.

Evidence: `docs/task-11-seasonal-page-scaffold-2026-09-15.md`.

## Catalog behavior in staging
Product, collection/search cards and cart media use the practical staging demo baseline from `sabpuja/content/docs/catalog/product-catalog-master-data.md`. Supplier verification remains a pre-live reconciliation task rather than a staging blocker.

Shared Shopify product records have deliberately not been mass-rewritten because catalog records are global across themes. Cutover work after staging approval still includes:
- vendor `Shraddha Bhakti` → `Sabpuja`;
- final SKU reconciliation where needed;
- legacy description replacement;
- attaching approved Sabpuja media to shared product records;
- Cotton Wicks live price correction;
- Sandalwood Stick inventory/restock resolution.

## Active image program — TASK-09 Astrology Remedy Kits
All 12 sun-sign remedy kit shells remain unpublished Shopify `DRAFT` products with stable `SP-AST-*` SKUs, price `0.00`, inventory 0 and media count 0.

Rules:
- sealed-package primary hero production may proceed without depicting physical contents;
- contents/detail images remain blocked until the applicable row in `docs/catalog/kit-bom-approval-register.md` is at least `APPROVED FOR STAGING` with exact included items and quantities;
- no unverified packaging fact or guaranteed outcome claim may be generated;
- final storefront raster assets must be WebP;
- no generated asset authorizes product publication.

Active source-of-truth:
- `sabpuja/content/assets/product-images/kits/astrology-remedy-kits/README.md`
- `sabpuja/content/assets/product-images/kits/astrology-remedy-kits/astrology-remedy-kits-manifest.json`
- `sabpuja/content/assets/product-images/kits/astrology-remedy-kits/hero-generation-briefs.md`
- `sabpuja/content/assets/product-images/kits/astrology-remedy-kits/production-pass-01.md`

The current image-generation path has repeatedly returned an unrelated carousel/status-board raster instead of the requested Aries sealed-package hero. Those rasters are rejected and are not committed/uploaded/countable Task 09 assets. This is a generation-tool-path failure, not a BOM blocker for sealed-package heroes.

## TASK-11 remaining commercial gate
Before either seasonal Page can become a real conversion page, required approvals remain:
- exact BOM/quantities;
- approved selling price and compare-at/discount state;
- SKU/product/bundle model;
- inventory and fulfillment state;
- exclusions;
- approved traditional/context claims;
- decision whether each page sells a product, collection, bundle or informational offer.

Until those exist:
- keep both seasonal Page records unpublished;
- keep homepage Diwali/Navratri primary actions non-clickable;
- do not add Buy Now/checkout;
- do not elevate ₹799/₹699 demo staging values into approved selling prices.

## Next implementation pass
1. Keep Task 10 closed; only regression-fix if later storefront changes break its final evidence.
2. Advance Task 09 sealed-package hero production using a compliant production path; keep BOM-dependent contents/detail imagery blocked.
3. Keep Task 11 unpublished scaffold intact and enrich only with additional verified non-commercial content if available.
4. When Task 11 commercial inputs are approved, populate offers, publish/QA the dedicated pages, then wire the homepage seasonal primary CTAs.
5. Keep all 12 Astrology products unpublished until contents, claims, commercial data and final images are approved.
6. Execute shared catalog/content cutover and publish staging only after explicit launch approval.

## Safety rule
Do not publish this theme, publish the Task 11 seasonal Page shells, or globally rewrite shared live catalog/media solely because staging QA has passed. Explicit cutover approval is still required.
