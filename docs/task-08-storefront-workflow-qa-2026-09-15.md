# Task 08 — Storefront Workflow QA — 2026-09-15

Status: **DONE — interactive staging workflow QA passed**

Target Shopify theme: `Sabpuja Staging — Rebrand 2026`  
Theme ID: `gid://shopify/OnlineStoreTheme/188428157244`  
Required role: `UNPUBLISHED`

## Scope
This pass completed the interactive customer-journey checks left after Task 07's route/link crawl. The live theme was not targeted, and no order, payment, customer-data entry or theme publication was performed.

## Browser QA run
TinyFish run: `0076156a-c53d-4985-a943-514eed15cf28`

### Custom 404
Tested an intentionally invalid storefront URL under the staging preview.

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

## Link-crawl fixes verified in this QA cycle
The preceding Task 07 continuation also corrected two staging-only customer-facing issues before this interactive pass:

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
- Staging theme was not published by this QA.
- Live theme was not intentionally modified.
- No shared Shopify policy record was changed.
- No test order was placed.
- Cart was left empty.

Task 08 interactive workflow gate is complete. The next implementation sequence is Task 09 (12 Astrology Remedy Kit WebP image program) and Task 10 (homepage hero-carousel campaign asset program), followed by Task 11 seasonal landing-page wiring once CTA destinations are ready.
