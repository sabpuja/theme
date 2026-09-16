# Task 08 — Storefront Visual & Workflow QA — 2026-09-15

Status: **DONE — staging visual and interactive workflow QA passed**

Target Shopify theme: `Sabpuja Staging — Rebrand 2026`  
Theme ID: `gid://shopify/OnlineStoreTheme/188428157244`  
Verified role after QA: `UNPUBLISHED`

## Scope
This pass completed the interactive customer-journey checks and desktop/mobile visual QA left after Task 07's route/link crawl. The live theme was not targeted, and no order, payment, customer-data entry or theme publication was performed.

## Interactive browser QA
TinyFish run: `0076156a-c53d-4985-a943-514eed15cf28`

### Custom 404
Result: **PASS**
- Branded Sabpuja 404 rendered.
- Home recovery link worked.
- Cart link worked.
- Roli Kumkum product route worked.
- No broken recovery links were found.
- Staging preview context was preserved during storefront navigation.

### Safe-product add to cart
Product: `Roli (Kumkum)` / `/products/roli-kumkum`

Result: **PASS**
- Add to cart succeeded.
- Cart showed one item.

### Quantity update
Result: **PASS**
- Quantity changed from 1 to 2.
- Unit price observed: Rs. 100.00.
- Subtotal updated to Rs. 200.00.
- Staging cart presentation showed Rs. 100.00 flat shipping and Rs. 300.00 displayed grand total.

### Remove / empty-cart state
Result: **PASS**
- Item removal succeeded.
- Empty-cart message rendered correctly.
- Header cart count returned to 0.

### Re-add and checkout handoff
Result: **PASS**
- Roli Kumkum was re-added.
- `Proceed to checkout` opened Shopify checkout successfully.
- Checkout summary displayed the product and Shopify-calculated checkout amounts.
- No customer data was entered.
- No order was submitted.
- No payment was attempted.

### Cleanup
Result: **PASS**
- Test item was removed after checkout verification.
- Final cart state is empty.

## Desktop + mobile visual QA
TinyFish run: `5bb7c6f0-92d4-45cf-9f9a-834febd5dcff`

Viewports covered:
- desktop, approximately 1440 px wide;
- mobile, approximately 375 px wide.

Routes covered:
- `/`;
- `/collections/all`;
- `/collections/puja-items`;
- `/products/roli-kumkum`;
- `/products/ghee-clarified-butter`;
- `/search?q=camphor`;
- `/cart`;
- `/pages/help`;
- `/pages/about-us`;
- `/pages/contact-us`;
- `/pages/faq`;
- `/pages/shipping-payments`;
- `/pages/returns-order-issues`;
- custom 404 route.

Result: **PASS after discrepancy verification**

No critical or actionable responsive defects were found:
- no horizontal overflow;
- no broken product grids;
- no clipped product images;
- no overlapping headings/buttons;
- no unreadable text/contrast issue identified;
- responsive navigation remained usable;
- footer content remained readable on mobile;
- product quantity/add-to-cart controls sitting below the initial viewport were confirmed as normal below-the-fold behavior, not hidden controls.

### Returns-page viewport discrepancy — cleared
The visual run initially reported the Cancellations paragraph as apparently truncated at the viewport edge. A direct full rendered fetch of `/pages/returns-order-issues` confirmed the complete sentence is present:

`Once an order has entered processing, cancellation is not offered, subject to any mandatory rights that apply under law.`

This was a viewport-edge observation, not missing content.

### Footer discrepancy — cleared
The visual run also described an inherited-looking footer containing items such as My Account, Wishlist, Terms & Conditions, Twitter and `info@sabpuja.com` on some route observations. That description did **not** match either the current theme source or fresh footer-only renders.

Source verification of `sections/theme-footer5.liquid` on theme `188428157244` confirmed the controlled Sabpuja footer contains only:
- Puja Essentials;
- Puja Kits;
- Help & Guide;
- FAQ;
- Shipping & Payments;
- Returns & Order Issues;
- Contact Us;
- About Sabpuja;
- configured Privacy Policy;
- `support@sabpuja.com`;
- verified support phone numbers/address;
- Instagram, Facebook and YouTube;
- verified Delhi NCR / 1–3 business day / ₹100 flat shipping / prepaid-only messaging.

Fresh footer-only renders on the homepage, `/collections/all` and `/pages/help` matched that controlled source. No My Account, Wishlist, Terms & Conditions, Twitter or `info@sabpuja.com` links were rendered. The inherited-footer description is therefore treated as a visual-agent misread rather than a storefront regression.

## Link-crawl fixes verified in this QA cycle
The preceding Task 07 continuation corrected two staging-only customer-facing issues before this QA:

1. `templates/list-collections.liquid`
   - Removed the customer path from the Collections listing into the currently empty `/collections/puja-kit` collection.
   - The Puja Kits card now routes to the working homepage `/#puja-kits` section.

2. `layout/theme.liquid`
   - Homepage title/OG title now render as `Sabpuja — Your Puja, Prepared with Care.` rather than the inherited global shop title.
   - About and Contact retain explicit Sabpuja-safe meta descriptions and `og:site_name = Sabpuja`.
   - Rendered About/Contact checks showed no remaining `Shraddha Bhakti` staging metadata.

## Known launch-only/shared-store notes
These do not fail staging QA because changing them would affect shared/live store resources:
- Shopify-managed Privacy Policy text still contains the global/store presentation `Sab Puja` in places. The policy link itself works; policy wording should be reconciled during approved shared-store cutover.
- Hosted/global customer-account naming may still display `Sab Puja` rather than canonical storefront `Sabpuja`.
- Shared product Open Graph media can still reference legacy product media until shared catalog/media cutover is explicitly approved.

## Safety result
- Staging theme remains `UNPUBLISHED`.
- Live theme was not intentionally modified.
- No shared Shopify policy record was changed.
- No test order was placed.
- No payment was attempted.
- Cart was left empty.

Task 08 is complete. The active implementation sequence now moves to Task 09 (12 Astrology Remedy Kit WebP image program) and Task 10 (homepage hero-carousel campaign asset program), followed by Task 11 seasonal landing-page wiring once CTA destinations are ready.
