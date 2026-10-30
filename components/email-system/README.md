# SP-EMAIL-001 · Sabpuja Email System

Status: Component Lab prototype, not Shopify-integrated or send-ready.

## Authoritative sources
- Live Foundations: https://sabpuja.github.io/theme/foundations/
- Design tokens: sabpuja/design-system/tokens/tokens.css
- Official unchanged horizontal logo: sabpuja/design-system/assets/logo/brand-assets.json approved-current
- Source location: sabpuja/theme branch gh-pages, components/email-system/
- Brand: Saffron #D35400; Temple Gold #F4B400; Sacred Brown #4E342E; Deep Brown #33241F; Cream #FFF8E7; Ivory #FFFBEF.
- Poppins headings, Inter body; Arial and general system fallbacks in exported email.

## Seven documented states
1. Subscriber welcome: marketing, immediately after subscription.
2. Abandoned checkout: eligible recipient; proposed 1h/24h/48h schedule; cancel on purchase.
3. Order confirmation: transactional, actual new order event.
4. Dispatched/tracking: transactional, actual fulfilment event.
5. Delivered: transactional, actual delivered event.
6. Post-purchase support: helpful message after verified delivery, not an unsolicited sale.
7. Product announcement: subscribed audience, verified product.

## Reusable building blocks
Approved logo; preheader; content panel; single primary CTA; optional order/product/guide detail panel; support footer; unsubscribe on marketing. Lab CSS uses clamp/grid and 4px rhythm; exported email HTML intentionally uses inline styles and presentational tables because email clients do not reliably support CSS variables, grid or modern font loading.

## Placeholder inventory
[[first_name]], [[logo_url]], [[recovery_url]], [[checkout_items]], [[order_number]], [[order_status_url]], [[tracking_url]], [[guide_url]], [[product_title]], [[product_url]], [[unsubscribe_url]] are lab placeholders, NOT verified Shopify Liquid variables. Map and validate them for the actual Shopify notification/messaging editor before sending. Do not send this exported HTML unchanged.

## Deployment acceptance
- Inspect existing Shopify Settings / Notifications before replacement.
- Configure a verified sender domain, sender address and domain authentication.
- Verify actual item/order/fulfilment data and links, Shopify variable syntax and missing-value fallback.
- Marketing only to recipients with appropriate consent; functional unsubscribe and suppression.
- Prevent marketing recovery after purchase and duplicate transactional notifications.
- Test Gmail/Outlook/Apple Mail on mobile/desktop, images blocked, long English/Hindi, 200% zoom and accessibility.
- Never invent prices, scarcity, discounts, ratings, shipping commitments or customer reviews.

Preview uses an exact copy of the approved SVG hosted on the same GitHub Pages origin at /theme/assets/images/email/sabpuja-logo-horizontal-color.svg. The original source of truth is sabpuja/design-system/assets/logo/current/sabpuja-logo-horizontal-color.svg. The copy must remain byte-identical; do not create a derivative or recolor it. Before sending production email, host an approved rasterized equivalent on a stable image CDN and verify email-client rendering; do not edit the logo geometry. No customer data or email transport is used on this static page.
