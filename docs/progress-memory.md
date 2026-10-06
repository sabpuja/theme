# Sabpuja Theme — Progress Memory

**Last updated:** 2026-10-06  
**Canonical working branch:** `staging-2026`  
**Shopify staging theme:** `Sabpuja Staging — Post-Launch 2026`  
**Shopify staging theme ID:** `gid://shopify/OnlineStoreTheme/188542550332`

This file is the compact source of truth for the current Sabpuja storefront/theme implementation state. Update it when a milestone changes, a canonical route moves, or staging/live ownership changes.

## Current architecture

- **Canonical storefront implementation:** `sabpuja/theme`
- **Canonical Component Lab source:** `component-lab/` on `staging-2026`
- **Public Component Lab:** https://sabpuja.github.io/theme/
- **Components index:** https://sabpuja.github.io/theme/components/
- **Integration map:** https://sabpuja.github.io/theme/integration-map/
- **Brand/design rules:** `sabpuja/design-system`
- **Shopify staging target:** unpublished theme only unless explicit live-release approval is given.

The older standalone `sabpuja/sabpuja.github.io` Component Lab is not the current source of truth for storefront progress. Its older cards can show stale `Queued` states.

## Component Lab recovery — COMPLETE

The full Component Lab was recovered from `sabpuja/theme` → `staging-2026`. Existing work was preserved rather than rebuilt.

Verified canonical component previews:

- `/theme/components/global-navigation/`
- `/theme/components/product-card/`
- `/theme/components/collection-grid/`
- `/theme/components/search-system/`
- `/theme/components/cart-system/`
- `/theme/components/footer-system/`
- `/theme/components/account-orders/`
- `/theme/components/reviews/`
- `/theme/components/hero/`
- `/theme/components/product-showcase/`
- `/theme/components/benefits-trust/`
- `/theme/components/kit-contents/`
- `/theme/components/ritual-journey/`
- `/theme/components/devotional-editorial/`
- `/theme/components/faq/`
- `/theme/components/related-products/`
- `/theme/components/final-cta/`

The Lab also retains Foundations, Blocks, Image Lab, and the Shopify Integration Map.

## Account & Orders — CURRENT STATE

**Classification:** Component, not Block.

Canonical preview:

- https://sabpuja.github.io/theme/components/account-orders/

Component ID:

- `SP-ACC · Customer account & orders`

The system covers:

- passwordless account access
- account dashboard
- order history
- order details and status
- profile/account details
- saved addresses
- contextual support
- returns/cancellations/refunds states
- buy-again/reorder flows
- thank-you/order confirmation mapping
- signed-out/session/loading/empty/error/retry states
- desktop, tablet and mobile account navigation patterns

The previous route:

- `/theme/blocks/account-journey/`

is now migration-only and redirects to:

- `/theme/components/account-orders/`

The Blocks index no longer lists Account Journey.

## Shopify customer-account integration — STAGING COMPLETE

The store currently uses **Shopify New Customer Accounts** with passwordless sign-in.

Verified Shopify account configuration on 2026-10-06:

- customer accounts: optional
- account version: `NEW_CUSTOMER_ACCOUNTS`
- storefront/checkout login links: enabled
- login required at checkout: false

The staging header previously used a hardcoded `href="/account"` account icon.

It has been replaced on `staging-2026` with Shopify's current:

- `<shopify-account menu="customer-account-main-menu">`

This gives customers native storefront access to account sign-in plus **Orders** and **Profile**, while remaining compatible with Shopify's current customer-account architecture.

Sabpuja styling was added for the account component using the brand saffron, ivory, typography, radii and responsive avatar sizing.

Files updated:

- `sections/theme-header4.liquid`
- `assets/sabpuja-header.css`

Those same two files were successfully synced to the unpublished Shopify staging theme with no Shopify mutation errors.

**Live theme was not modified.**

## Account architecture rule

Do not rebuild Shopify New Customer Accounts using legacy `templates/customers/*.liquid` as the long-term account system.

Use:

- theme/header integration for storefront account entry;
- Shopify customer-account surfaces for Orders/Profile;
- Customer Account UI Extensions for deeper branded account/order experiences;
- Checkout UI Extension targets for Thank You / Order Status surfaces where applicable.

Legacy customer Liquid templates may remain in the repository for compatibility/history, but they are not the canonical future implementation target for SP-ACC.

## Important recent GitHub milestones

- `cdcd863` — triggered Component Lab recovery redeploy.
- `5e4ffb3` — replaced the old account header link with Shopify account component.
- `8e476d8` — added Sabpuja styling for Shopify account component.
- `45d72ab` — surfaced Account & Orders in Components gallery.
- `c5af1dc` — created canonical `components/account-orders/` preview.
- `b5b470c` — removed Account Journey from Blocks gallery.
- `8ea5ae2` — updated Components index to canonical Account & Orders route.
- `f046889` — updated Integration Map references.
- `f12af4b` — converted legacy Account Journey URL into redirect.

## Current staging safety boundary

Do not publish or mutate the live Shopify theme as part of Component Lab or account-system work without explicit release approval.

Current workflow:

1. design/approve in Component Lab;
2. implement/sync to `staging-2026`;
3. sync to unpublished Shopify staging theme;
4. desktop/mobile functional + visual QA;
5. merge/release only after explicit approval.

## Next account/orders work

1. QA the Shopify account sheet on staging across desktop/tablet/mobile.
2. Verify signed-out and signed-in account states.
3. Verify Orders and Profile links resolve correctly from the storefront account sheet.
4. Build the SP-ACC Customer Account UI Extension layer for deeper branded dashboard/order-detail experiences.
5. Map the approved address, support, returns/refunds and buy-again states to supported Shopify customer-account extension targets.
6. Keep Thank You / Order Status work on supported checkout/customer-account extension surfaces instead of recreating them in Liquid.
7. After QA, prepare a focused PR/release candidate; do not push account changes directly to live.

## Component-system rule

Full customer journeys and storefront systems belong in **Components**.

Use **Blocks** only for smaller reusable primitives such as buttons, badges, trust items, card shells, headings and similar atomic patterns.
