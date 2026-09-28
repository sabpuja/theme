# Sabpuja Customer Account Journey

## Purpose
This document defines the reusable customer-account journey that complements the storefront component system. It covers account access, new-customer welcome/account creation, dashboard, orders, order details, reorder/buy-again, the Thank You / order-confirmation step, account navigation, reorder/buy-again, account/system states, profile, empty states and contextual support.

## Current Shopify architecture
Sabpuja should design for Shopify's current customer-account model rather than build a new password system in the theme. Shopify documents customer accounts as supporting passwordless sign-in, and customer-account pages can be extended with customer account UI extensions.

References:
- https://help.shopify.com/en/manual/customers/customer-accounts
- https://shopify.dev/docs/apps/build/customer-accounts
- https://shopify.dev/docs/api/customer-account-ui-extensions/latest
- https://help.shopify.com/en/manual/customers/customer-accounts/customize-customer-accounts/account-component
- https://shopify.dev/docs/api/checkout-ui-extensions/latest
- https://shopify.dev/docs/api/checkout-ui-extensions/latest/targets

## Block system
- SP-ACC-001A — Simple branded login (credentials-capable flows)
- SP-ACC-001B — Passwordless login
- SP-ACC-002A — Simple branded signup (credentials-capable flows)
- SP-ACC-002B — Passwordless welcome
- SP-ACC-003 — Account dashboard
- SP-ACC-004 — Orders list
- SP-ACC-005 — Order detail
- SP-ACC-006 — Profile & account details
- SP-ACC-007 — Empty state
- SP-ACC-008 — Contextual support
- SP-ACC-009 — Thank you / order confirmation
- SP-ACC-010A — Desktop account sidebar
- SP-ACC-010B — Compact account rail
- SP-ACC-010C — Mobile account menu
- SP-ACC-011A — Saved address cards
- SP-ACC-011B — Add / edit address form
- SP-ACC-011C — Address remove confirmation
- SP-ACC-011D — No saved addresses
- SP-ACC-012A — Return eligibility / start
- SP-ACC-012B — Return request
- SP-ACC-012C — Cancellation request status
- SP-ACC-012D — Refund status
- SP-ACC-012E — Action unavailable / support fallback
- SP-ACC-013A — Buy again from a past order
- SP-ACC-013B — Select items to reorder
- SP-ACC-013C — Availability changed / partial reorder
- SP-ACC-013D — Reorder review
- SP-ACC-013E — Nothing available to reorder

## Responsive foundation
Account UI follows the same Sabpuja fluid-first foundation as storefront components. Typography, spacing, sizing and grids use `clamp()`, intrinsic layout, `auto-fit`, `minmax()` and wrapping. Container queries are reserved for true structural changes such as converting the dashboard sidebar into a horizontal navigation rail.

## UX rules
1. Keep authentication simple and branded. Maintain both credential-based visual variants for compatible/legacy flows and passwordless variants for current Shopify customer accounts; do not invent a second password backend in the theme.
2. Dashboard home prioritizes current orders and useful next actions over settings.
3. Orders remain scannable: order number, date, status and total appear before opening details.
4. Order details prioritize status, then transaction detail, then contextual support.
5. Empty states explain what is missing and provide one useful next action.
6. Support preserves context: order support, account support and shopping guidance are distinct.
7. Account blocks must meet keyboard, focus, contrast and semantic-label requirements.
8. Demo content must never be presented as real customer data.
9. The Thank You page should confirm the purchase, set expectations, expose order-status access, and avoid distracting the customer with unrelated actions.
10. Social sign-in options are optional variants and should only appear when the corresponding provider is enabled.
11. Contextual support should use generous spacing and one clearly labeled route per customer need rather than dense utility cards.
12. Account navigation should keep identity, primary destinations, active state, and sign-out visually distinct; mobile should use an account menu rather than shrinking a desktop sidebar.
13. Address management must make the default address obvious, keep routine editing separate from destructive actions, and confirm removal before deleting a saved address.
14. Address forms should group delivery fields logically and collapse to a single-column form on narrow containers.
15. Return and cancellation interfaces must show the order system's actual eligibility/state rather than imply approval before it is confirmed.
16. Refund status must distinguish approved, processing and completed states, and must not invent refund timing or payment-method details.
17. When self-serve actions are unavailable, explain the state neutrally and provide order review or contextual support instead of guessing the reason.
18. Reorder flows must re-resolve current product, variant, price and availability instead of copying historical order values into the cart.
19. Never silently substitute an unavailable item or variant; partial reorders require clear customer confirmation.
20. Buy-again UI should allow item-level selection and quantity review before adding current merchandise to cart.
21. System states must distinguish signed-out, expired-session, loading, valid-empty, recoverable-error, and connection-retry conditions rather than collapsing them into one generic error.
22. Loading states must remain screen-reader legible, avoid flashing empty content, and respect reduced-motion preferences.
23. Recovery UI must preserve orientation and never imply that an account or order change succeeded unless the platform confirms it.

## Implementation mapping
The Component Lab is the visual contract. Theme-rendered surfaces may use storefront blocks where Shopify supports them. Customer-account pages that live on Shopify's account surface should be implemented with the appropriate customer account UI extension or Shopify account customization mechanism. The Thank You and Order Status experience belongs to Shopify checkout/post-purchase surfaces and should use the supported Checkout UI extension targets rather than being recreated as a theme template. Legacy customer Liquid templates should not be treated as the long-term target unless explicitly required for a confirmed legacy-account configuration.
