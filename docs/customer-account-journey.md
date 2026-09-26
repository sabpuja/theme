# Sabpuja Customer Account Journey

## Purpose
This document defines the reusable customer-account journey that complements the storefront component system. It covers account access, new-customer welcome/account creation, dashboard, orders, order details, the Thank You / order-confirmation step, profile, empty states and contextual support.

## Current Shopify architecture
Sabpuja should design for Shopify's current customer-account model rather than build a new password system in the theme. Shopify documents customer accounts as supporting passwordless sign-in, and customer-account pages can be extended with customer account UI extensions.

References:
- https://help.shopify.com/en/manual/customers/customer-accounts
- https://shopify.dev/docs/apps/build/customer-accounts
- https://shopify.dev/docs/api/customer-account-ui-extensions/latest
- https://help.shopify.com/en/manual/customers/customer-accounts/customize-customer-accounts/account-component`r`n- https://shopify.dev/docs/api/checkout-ui-extensions/latest`r`n- https://shopify.dev/docs/api/checkout-ui-extensions/latest/targets

## Block system
- SP-ACC-001 — Sign in
- SP-ACC-002 — Create account / welcome
- SP-ACC-003 — Account dashboard
- SP-ACC-004 — Orders list
- SP-ACC-005 — Order detail
- SP-ACC-006 — Profile & account details
- SP-ACC-007 — Empty state
- SP-ACC-008 — Contextual support`r`n- SP-ACC-009 — Thank you / order confirmation

## Responsive foundation
Account UI follows the same Sabpuja fluid-first foundation as storefront components. Typography, spacing, sizing and grids use `clamp()`, intrinsic layout, `auto-fit`, `minmax()` and wrapping. Container queries are reserved for true structural changes such as converting the dashboard sidebar into a horizontal navigation rail.

## UX rules
1. Keep authentication email-first and simple; do not invent a second password system around Shopify accounts.
2. Dashboard home prioritizes current orders and useful next actions over settings.
3. Orders remain scannable: order number, date, status and total appear before opening details.
4. Order details prioritize status, then transaction detail, then contextual support.
5. Empty states explain what is missing and provide one useful next action.
6. Support preserves context: order support, account support and shopping guidance are distinct.
7. Account blocks must meet keyboard, focus, contrast and semantic-label requirements.
8. Demo content must never be presented as real customer data.`r`n9. The Thank You page should confirm the purchase, set expectations, expose order-status access, and avoid distracting the customer with unrelated actions.

## Implementation mapping
The Component Lab is the visual contract. Theme-rendered surfaces may use storefront blocks where Shopify supports them. Customer-account pages that live on Shopify's account surface should be implemented with the appropriate customer account UI extension or Shopify account customization mechanism. The Thank You and Order Status experience belongs to Shopify checkout/post-purchase surfaces and should use the supported Checkout UI extension targets rather than being recreated as a theme template. Legacy customer Liquid templates should not be treated as the long-term target unless explicitly required for a confirmed legacy-account configuration.
