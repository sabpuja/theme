# SP-EMAIL-002 · Sabpuja Email Template Library

Status: bilingual reusable Component Lab prototype. It is NOT a live Shopify notification, campaign, or automated message.

## Canonical sources
- Live Foundations: https://lab.srv2005300.hstgr.cloud/theme/foundations/
- UI tokens: sabpuja/design-system/tokens/tokens.css
- Approved logo: sabpuja/design-system/assets/logo/brand-assets.json (approved-current primary_horizontal), byte-identical Component Lab mirror
- Components preview at /theme/components/email-system/; production Shopify sending is intentionally out of scope.

## 15 design states
1. Welcome: newly opted-in subscriber
2. Abandoned checkout: existing recovery system must be audited first; stop on purchase
3. Order confirmation: only a genuine order event
4. Shipping: real dispatch event with tracking link
5. Delivered: trusted delivery event only
6. After-sales guide support: delivered order + verified guide
7. Product launch: published product + subscription
8. Abandoned cart: identified, consented user; suppress after checkout or purchase
9. Browse reminder: identified, consented user; suppress after cart/checkout/purchase
10. Review request: verified delivered order and approved review link
11. Related product: relevant in-stock product after genuine previous purchase
12. Win-back: 60–90-day inactive subscriber; frequency caps
13. Festival reminder: source-verified city/date and delivery feasibility
14. Restock: confirmed inventory and opt-in
15. Repeat-customer appreciation: verified repeat-order milestone, no invented benefits

These are proposed triggers, not enabled workflows. Consent, frequency, eligibility and legacy abandoned-checkout conflicts require admin verification.

## Reusable blocks
Shared email shell: approved logo, preheader, bilingual heading and copy, optional data panel, one CTA, help footer, and unsubscribe link on marketing messages.
The separate assets/js/email-system-modules.js creates 9 bilingual modules: cart, order, shipping, delivery, product, guide, review, festival, and repeat-customer appreciation.
Gallery layout uses Foundations fluid typography and Grid; exported email uses tables and inline CSS for broader client compatibility.

## Placeholder contract
All bracketed values are LAB markers, not Shopify Liquid. They MUST be mapped in the actual sending service, HTML-escaped where applicable and validated before sending.
Examples: [[logo_url]], [[first_name]], [[checkout_items]], [[cart_url]], [[recovery_url]], [[product_title]], [[product_price]], [[product_availability]], [[product_image_block]], [[product_summary_block]], [[product_url]], [[line_item_title]], [[line_item_quantity]], [[line_item_price]], [[order_number]], [[order_line_items]], [[order_total]], [[shipping_address]], [[order_status_url]], [[carrier_name]], [[tracking_number]], [[tracking_url]], [[delivery_status]], [[guide_title]], [[purchased_kit_title]], [[guide_url]], [[verified_review_url]], [[purchased_product_title]], [[festival_name]], [[festival_city]], [[festival_date]], [[festival_collection_url]], [[delivery_eligibility]], [[verified_loyalty_milestone]], [[unsubscribe_url]].
Raw user input is never allowed to replace an HTML block. Product/order HTML must be composed from trusted escaped values. Checkout and cart links must be private, recipient-specific Shopify links.

## Visual QA
- 15 choices; EN/HI subjects, preheaders, full bodies and CTAs
- Desktop/mobile and in-between widths, keyboard navigation, 200% zoom
- Exact approved horizontal logo renders inside email iframe
- Modules clearly distinguish demonstration placeholders from actual customer/order data
- HTML export retains placeholders and an unsendable starter warning
- Test Gmail, Outlook and Apple Mail with images blocked before any real send
- Marketing only for eligible opted-in customers, with working unsubscribe
- No unverified pricing, urgency, stock, shipping, reviews or festival dates
- No duplicate recovery or transactional sends; existing recovery sent a confirmed email in October

## Next gate
SP-EMAIL-003: finish the authenticated Shopify notification-template/sender audit, map platform fields, perform email-client QA, and separately authorize activation. This phase makes no Shopify sending or store changes.