# Core Issue #5 Product-Page Trust / Information QA — 2026-09-16

Status: **PASS — acceptance coverage complete on unpublished staging**

## Scope

Core issue `sabpuja/core#5` requires:
- product-page UX/content specs in `sabpuja/design-system` and `sabpuja/content`;
- theme implementation of the approved hierarchy;
- explicit desktop + mobile QA of at least three representative products;
- no unsupported/fake social-proof elements.

This evidence covers the remaining explicit QA requirement without publishing or modifying the live theme.

Target theme: **Sabpuja Staging — Rebrand 2026**  
Theme ID: `188428157244`  
Expected role: `UNPUBLISHED`

## Source-of-truth specs

### Design system
`sabpuja/design-system/docs/components.md`

Relevant rules:
- pack size/count visible near title/price when known;
- genuine ratings only when real review data exists;
- Delhi NCR / 1–3 business days / prepaid payments / support trust hierarchy;
- no fake testimonials, random viewers, random stock, countdowns or demo social proof;
- accordion/help content may be used for details/how-to/delivery/payment, but essential price/pack/delivery facts must remain visible.

### Content
`sabpuja/content/docs/product-content-standard.md`

Relevant required fields:
- title, price, pack size/count, what customer receives;
- puja use, how to use, storage/care where relevant;
- shipping/returns reference;
- image alt, SEO, taxonomy, SKU;
- complementary/cross-sell mapping where useful;
- unknown facts must stay internal/TBD rather than being invented.

## Representative test set

1. **Roli (Kumkum)** — normal purchasable staging state.
2. **Cotton Wicks (Batti)** — explicit price-safety exception; live shared price is ₹0, staging display is ₹100, purchase remains blocked.
3. **Sandalwood Stick** — explicit inventory-safety exception; shared live inventory is 0, purchase remains blocked pending restock decision.

This set covers both the normal path and both known product-level launch blockers.

## Preflight DOM/content check

A fresh rendered-content pass verified all three staging routes before interactive QA.

Observed:
- Sabpuja title/brand presentation;
- staging-approved WebP hero images;
- visible pack + SKU;
- Delhi NCR 1–3 business days;
- ₹100 flat shipping;
- prepaid UPI/cards/net banking/wallets;
- structured guidance/help content;
- Cotton Wicks explicit live-₹0 blocker;
- Sandalwood explicit live-inventory-0/restock blocker.

The product-page in-body media uses the approved Sabpuja WebPs. Shared/global product OG metadata still points at legacy media on some records; that is a separate cutover-only shared-catalog concern and is not counted as a staging hierarchy defect.

## Browser provider capability note

Two provider-level attempts were rejected before execution:
- strict-agent mode is not enabled for the connected TinyFish account;
- custom `max_steps` is not enabled for the account.

Neither rejection executed the test and neither is counted as QA evidence. The actual desktop/mobile runs below preserved the complete assertion matrix; only unsupported provider runtime flags were removed.

## Desktop QA

Run: `72aa9a09-c27e-4295-af07-829e3e544e35`  
Viewport: approximately 1440px  
Result: **PASS**, `issues=[]`

### Roli (Kumkum)
- identity/title/brand/price: PASS;
- pack `50 g` + SKU `SP-ROLI-50G`: PASS;
- approved Sabpuja hero image: PASS;
- delivery/shipping/payment trust block: PASS;
- structured product facts/guidance: PASS;
- fake social proof absent: PASS;
- legacy/demo terms absent: PASS;
- normal Add to Cart state: PASS;
- clipping/overlap/layout: PASS.

### Cotton Wicks (Batti)
- identity/title/brand/staging price: PASS;
- pack `50 pcs` + SKU `SP-BATTI-50PC`: PASS;
- approved Sabpuja hero image: PASS;
- delivery/shipping/payment trust block: PASS;
- structured product facts/guidance: PASS;
- fake social proof absent: PASS;
- legacy/demo terms absent: PASS;
- purchase safely blocked: PASS;
- rendered explanation confirms staging ₹100 display and live ₹0 catalog correction requirement;
- clipping/overlap/layout: PASS.

### Sandalwood Stick
- identity/title/brand/price: PASS;
- pack `1 stick` + SKU `SP-SANDALWOOD-1PC`: PASS;
- approved Sabpuja hero image: PASS;
- delivery/shipping/payment trust block: PASS;
- structured product facts/guidance: PASS;
- fake social proof absent: PASS;
- legacy/demo terms absent: PASS;
- purchase safely blocked: PASS;
- rendered explanation confirms restock required and current live catalog inventory is 0;
- clipping/overlap/layout: PASS.

## Mobile QA

Run: `1ca638b6-0dc8-4138-9c31-f4a79d07058e`  
Viewport: **375px**  
Result: **PASS**, `issues=[]`

### Roli (Kumkum)
- title/brand/price readable: PASS;
- pack + SKU readable: PASS;
- hero image loads and stacks correctly: PASS;
- trust information visible: PASS;
- structured information readable: PASS;
- unsupported social proof absent: PASS;
- prohibited legacy/demo text absent: PASS;
- Add to Cart enabled and visible: PASS;
- no horizontal overflow/clipping/overlap: PASS.

### Cotton Wicks (Batti)
- title/brand/staging-price label readable: PASS;
- pack + SKU readable: PASS;
- hero image loads and stacks correctly: PASS;
- trust information visible: PASS;
- structured information readable: PASS;
- unsupported social proof absent: PASS;
- prohibited legacy/demo text absent: PASS;
- no Add to Cart; blocker explanation visible: PASS;
- no horizontal overflow/clipping/overlap: PASS.

### Sandalwood Stick
- title/brand/price readable: PASS;
- pack + SKU readable: PASS;
- hero image loads and stacks correctly: PASS;
- trust information visible: PASS;
- structured information readable: PASS;
- unsupported social proof absent: PASS;
- prohibited legacy/demo text absent: PASS;
- no Add to Cart; restock/live-inventory-0 blocker explanation visible: PASS;
- no horizontal overflow/clipping/overlap: PASS.

## Unsupported-content scan

Across the three representative product pages in both browser QA runs, no rendered rating/review/testimonial/random-viewer/countdown/fake-scarcity widget was found.

No rendered occurrence was found for:
- `Shraddha Bhakti`
- `ShraddhaBhakti`
- `shraddhabhakti.com`
- `Kala`
- `Ralph Lauren`
- `WELCOME15`

## Result

Core issue #5 acceptance coverage is complete on unpublished staging:
- design-system spec exists;
- content spec exists;
- theme implements the approved trust/information hierarchy;
- three representative products passed explicit desktop and mobile QA;
- no unsupported/fake social-proof element remains in the tested product presentation.

This QA does **not** approve shared live catalog facts. Cotton Wicks and Sandalwood remain deliberately blocked until their independent live-catalog approvals are resolved. No order, payment, customer data submission, live-theme mutation, product mutation, or theme publication occurred during this QA.
