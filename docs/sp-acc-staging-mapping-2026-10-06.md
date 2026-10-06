# SP-ACC staging mapping — 2026-10-06

## Scope

This document maps the approved Component Lab Account & Orders system:

- Component Lab: `components/account-orders/`
- Component ID: `SP-ACC`
- Shopify target: unpublished Sabpuja staging theme only
- Theme branch: `staging-2026`

Do not publish the theme as part of this integration work.

## Verified Shopify account architecture

The connected Sabpuja store is using Shopify **New Customer Accounts**.

Verified store state on 2026-10-06:

- customer accounts: optional
- customer account version: `NEW_CUSTOMER_ACCOUNTS`
- storefront/checkout login links: enabled
- login required at checkout: no

Because New Customer Accounts are active, the real Orders, Order Status and Profile experiences are Shopify-owned account surfaces. Legacy `templates/customers/*.liquid` files are not the primary production rendering path and must not be used to simulate the current account experience.

## Theme-owned mapping

### Storefront account entry

Canonical surface:

- `sections/theme-header4.liquid`
- `assets/sabpuja-header.css`

Implementation:

- use Shopify's `<shopify-account>` component;
- keep the component visible on desktop, tablet and mobile;
- use `customer-account-main-menu` as the default account menu;
- expose the account menu as a header theme setting;
- preserve Shopify-owned passwordless / social / Shop sign-in behavior;
- use the Sabpuja signed-out account icon;
- apply Sabpuja saffron, ivory, typography, border, radius and control tokens through supported Shopify account CSS variables.

The theme must not create its own authentication state.

## SP-ACC surface mapping

| SP-ACC pattern | Current implementation surface | Ownership |
| --- | --- | --- |
| 001B Passwordless login | Shopify account sheet / customer accounts | Shopify-owned |
| 002B Passwordless welcome | Shopify account sheet / customer accounts | Shopify-owned |
| 003 Account dashboard | Customer account order index / extension blocks | Shopify-owned + extension |
| 004 Orders list | Customer account order index | Shopify-owned + extension |
| 005 Order detail | Customer account order status | Shopify-owned + extension |
| 006 Profile & account details | Customer account Profile | Shopify-owned + extension |
| 007 Empty state | Account/order extension where supported | Extension |
| 008 Contextual support | Account/order extension blocks | Extension |
| 009 Thank you / order confirmation | Checkout Thank You / Order Status extension targets | Shopify-owned + extension |
| 010A/B/C Account navigation | Shopify account menu and supported account navigation | Shopify-owned |
| 011A–D Addresses | Customer account Profile / supported extension targets | Shopify-owned + extension |
| 012A–E Returns / cancellation / refund states | Customer account order surfaces and actual platform/app state | Shopify-owned + extension |
| 013A–E Buy again / reorder | Customer account order surfaces with current product/variant resolution | Shopify-owned + extension |
| 001A / 002A Credential variants | Legacy-only reference pattern | Do not use for current Sabpuja account flow |

## Legacy customer Liquid templates

The repository still contains:

- `templates/customers/account.liquid`
- `templates/customers/login.liquid`
- `templates/customers/register.liquid`
- `templates/customers/order.liquid`
- `templates/customers/addresses.liquid`
- `templates/customers/activate_account.liquid`
- `templates/customers/reset_password.liquid`

Keep these as compatibility/reference files unless a confirmed legacy-account requirement is introduced. Do not spend design effort treating them as the current New Customer Accounts UI.

## Data and state rules

- Shopify remains source of truth for identity, orders, fulfillment, addresses, returns, cancellations, refunds and payment state.
- Never fabricate order status, refund timing, return eligibility or authentication state.
- Buy-again flows must re-resolve current products, variants, price and availability.
- Never silently substitute an unavailable item.
- Customer account extension UI must preserve real Shopify state.

## Responsive contract

Carry the approved SP-ACC fluid-first behavior into any theme-owned or extension-owned surface:

- compact Sabpuja density;
- intrinsic wrapping and fluid spacing;
- touch-safe controls;
- mobile account navigation rather than a shrunken desktop sidebar;
- no clipped labels or hidden destinations;
- keyboard/focus support;
- reduced-motion-safe loading and transitions.

Regression samples:

- 1280 × 720 desktop
- approximately 768 × 1024 tablet
- approximately 390 × 844 mobile

## Completion boundary

The staging **theme-side mapping** consists of the storefront account entry, account sheet branding and account menu wiring.

The remaining SP-ACC page-level patterns require a Shopify Customer Account / Checkout UI extension implementation. They must not be recreated inside Liquid simply to match the Component Lab preview.
