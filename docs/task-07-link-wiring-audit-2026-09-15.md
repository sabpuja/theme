# Task 07 — Legacy Purge & Link Wiring Audit — 2026-09-15

Status: **DONE — route/link QA passed for the audited staging surface**

Target Shopify theme: `Sabpuja Staging — Rebrand 2026`  
Theme ID: `gid://shopify/OnlineStoreTheme/188428157244`  
Role after implementation: `UNPUBLISHED`

## What changed

### Clean staging shell
The staging theme now uses a simplified `layout/theme.liquid` built around the Sabpuja header, the active route content, and the Sabpuja footer. The inherited global popup/overlay stack is no longer part of the staging customer journey.

This removes active dependencies on inherited newsletter popups, simulated product-activity popups, legacy cookie UI, quick view, mini-cart, compare/wishlist notifications, and generic upsell popups.

### Navigation is deliberately wired
The staging header no longer consumes the inherited `main-menu`. It uses a controlled Sabpuja navigation map:
- Home → `/`
- Puja Essentials → `/collections/all`
- Puja Kits → `/#puja-kits`
- Help & Guide → `/pages/help`
- About → `/pages/about-us`
- Contact → `/pages/contact-us`
- Search → Shopify `routes.search_url`
- Cart → Shopify `routes.cart_url`

The footer uses only deliberate Sabpuja destinations plus the configured Shopify Privacy Policy and verified official social/support destinations.

### Real Shopify Pages now back the support/help URLs
To eliminate virtual/404-routed content paths, the following real Shopify Page records were created and assigned `page.sabpuja-info`:
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

Each newly created page has `seo.hidden = 1` while staging is being completed. They are published so the routes resolve, but are intentionally hidden from Shopify search/sitemap discovery during the staging phase.

The existing shared `About Us` and `Contact Us` Page records were not rewritten. Their staging presentation and metadata are overridden by the Sabpuja theme.

### Metadata purge
The staging layout now supplies Sabpuja-safe page titles/descriptions for active homepage, product, collection, search, cart, blog, article, list-collections, About and Contact routes. This prevents old Shraddha Bhakti page descriptions from surfacing in the staging head metadata.

### Safe auxiliary routes
The generic Page, Blog, Article and List Collections templates were replaced with simple Sabpuja presentations so direct access does not drop customers into inherited Kala/demo layouts.

## Legacy/demo customer-facing sweep
Rendered staging checks found no active occurrences of:
- `Shraddha Bhakti`
- `shraddhabhakti.com`
- `Kala`
- `Ralph Lauren`
- `WELCOME15`

Inherited settings can still exist as dormant historical configuration inside `settings_data.json`, but the clean staging layout/header/footer no longer render or depend on those values.

## Route verification completed
Browser-level staging fetches successfully resolved:
- homepage;
- search;
- cart;
- `/collections/all`;
- `/collections/puja-items`;
- `/collections/puja-kit`;
- About and Contact;
- all 11 Help/FAQ/policy/guide Page routes above;
- the empty News blog route using the safe Sabpuja blog template;
- all 25 active puja-essential product URLs.

External destinations also resolved:
- Shopify Privacy Policy;
- Instagram `@sabpujaofficial`;
- Facebook page ID `61593920655254`;
- YouTube `@SabPuja`;
- WhatsApp number `+91 96678 19241`.

## Continuation fixes from complete customer-facing link crawl
A follow-up crawl on the same unpublished theme found and corrected two additional staging-only presentation/wiring issues:

1. **Collections index Puja Kit destination**
   - `/collections` previously exposed a card linking to the currently empty `/collections/puja-kit` collection.
   - The card was changed to `/#puja-kits`, matching the working header/homepage Puja Kits destination instead of sending customers to an empty collection.

2. **Homepage title / Open Graph title**
   - The homepage inherited global shop title `Sab Puja` in the page title path.
   - `layout/theme.liquid` now explicitly renders `Sabpuja — Your Puja, Prepared with Care.` for the homepage title/OG title while preserving Sabpuja-safe route metadata elsewhere.

Follow-up rendered verification confirmed:
- About staging copy and metadata are Sabpuja-specific;
- Contact staging copy and metadata are Sabpuja-specific;
- `og:site_name` is `Sabpuja`;
- no remaining `Shraddha Bhakti` string was found in the rendered About/Contact staging checks.

The interactive 404/cart/checkout workflow evidence is recorded separately in `docs/task-08-storefront-workflow-qa-2026-09-15.md`.

## Non-broken launch notes
These are not broken links, but should be kept visible during final cutover QA:
- Shopify's hosted customer-account sign-in currently displays the global shop name as `Sab Puja` (two words). Canonical storefront brand remains `Sabpuja`; global shop/account naming should be reconciled at launch if approved.
- The Shopify-managed Privacy Policy contains shared/global `Sab Puja` wording in places. The policy link itself works; the policy record was intentionally not changed because it is shared with the live storefront.
- The verified WhatsApp number currently resolves to a profile named `Logarithm Media Solutions`. This matches the supplied operating contact, but the external profile identity should be reviewed for customer-brand consistency.
- Product Open Graph images can still reference shared legacy product media because shared product-media cutover is intentionally deferred until staging approval.

## Safety / launch rule
No part of Task 07 publishes the staging theme or authorizes shared product/vendor/SKU/media cutover. Theme role remains `UNPUBLISHED`. Final mobile/desktop visual QA and cart → checkout workflow QA remain the next gate.
