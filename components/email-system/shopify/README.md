# SP-EMAIL-003 · Shopify integration handoff

**Status:** Code prepared; **nothing has been installed or activated in Shopify.** This directory does not belong in a Shopify theme. It is a version-controlled email integration package only.

## Verified store context (2026-10-31)

- Store: `ghf6bp-fy.myshopify.com`, public domain `sabpuja.com`
- Shopify CLI 5.0.0 is authenticated on authorized PC `DESKTOP-BVNOVID` with `read_themes` permission.
- Verified CLI command: `shopify.cmd theme list --store ghf6bp-fy.myshopify.com --json` (read-only).
- Live theme: `Rebrand-11-Sabpuja-oct-21-2026`, ID `189418242364`.
- Designated staging theme: `Sabpuja-Staging-Rebrand-10-2026`, ID `189358014780`.
- Store email-contact address: support@sabpuja.com; **Shopify sending-domain authentication not yet checked in Admin**.
- At least one checkout recovery email was sent on 2026-10-21; **do not activate another recovery workflow** until the source and configuration are verified.
- Native Shopify notifications are outside theme files and cannot be modified through the available Shopify Admin GraphQL operations. Do not `shopify theme push` these email templates.

## What is prepared

- `marketing-welcome-en.html` and `marketing-welcome-hi.html`: independent English/Hindi custom-coded Shopify Messaging *draft* templates.
- `integration-manifest.json`: all 15 journeys, their intended Shopify surfaces, event requirements, and rollout blockers.
- Original Component Lab designs live under `/theme/components/email-system/`; this package derives copy and Foundations palette from the same design system.

### Verified Shopify Messaging variables used

- `shop.url` and `shop.domain`: links and shop display
- `shop.address.city` and `shop.address.country`: location display when available
- `customer.first_name`: optional greeting, escaped and with a fallback
- **`unsubscribe_url`**: mandatory unsubscribe for a custom-coded marketing email
- **`open_tracking`**: includes required tracking if it is enabled in Shopify Messaging

Shopify documentation: [Customize Shopify Messaging with Liquid](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/create-email/custom-liquid).

### Import procedure (not yet performed)

1. In Shopify Admin, verify sender address/domain authentication under **Settings → Notifications**.
2. Install and open **Shopify Messaging** if not installed. Confirm plan and account eligibility/pricing.
3. Start a **new draft marketing campaign**; choose **Code your own** and import one of the `.html` files. **Do not send or activate.**
4. Confirm all Liquid variables are accepted in Shopify Messaging preview, then set language-specific subject and preheader from the Component Lab.
5. Verify audience selection includes only appropriately subscribed customers. A customer who is not subscribed must not receive marketing emails.
6. Replace the public approved **SVG** preview logo with an **approved raster PNG hosted at a stable HTTPS URL** before production: SVG is not universally supported in email clients. Keep the same approved image artwork and proportions. **Do not redraw the emblem.**
7. Preview/test on Gmail, Apple Mail, Outlook, Android/iOS, mobile 320–390px, images disabled, Hindi text, long names, and absent first names. Verify actual unsubscribe operation and tracking settings.
8. Use small internal test recipients. Request explicit approval before any live campaign or automation is enabled.

Shopify documents **Code your own** and `.html` imports under [Creating marketing campaigns](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/create-email/create-campaigns).

### Transactional notifications (NOT yet editable)

Native **Order confirmation**, **Shipping confirmation**, **Refund**, and related emails must be audited before customization:

1. Sign into Shopify Admin on the owner-controlled PC (the cloud browser showed Cloudflare problems; the local Shopify CLI authentication succeeded).
2. Go to **Settings → Notifications → Customer notifications → [notification] → Edit code**.
3. **Copy the complete original subject and HTML/Liquid to version-controlled backups**, with no customer data or credentials.
4. Compare line-item loops, discounts, bundle grouping, fulfillment, shipping/pickup, tax and payment terms. Preserve all existing branching, delivery logic, and required notification variables.
5. Adapt approved Sabpuja visual shell as a **minimal change** rather than replacing dynamic business logic with the simplistic Component Lab preview.
6. Run Shopify notification previews and representative sample-order tests before saving the replacement.

Official guide: [Customizing Shopify notifications](https://help.shopify.com/en/manual/fulfillment/setup/notifications/customizing-notification-template). Shopify warns that replacing customized notification code can lose previous customizations; the backup is mandatory.

### Recovery workflow hold

There are **5 abandoned checkouts** and **at least one confirmed recovery send** in store data as of the 2026-10-30 audit. We must first identify whether it came from a legacy checkout recovery system, Shopify Messaging automation, or manual send. Preserve the existing sending behavior until there is a verified migration/suppression plan. Avoid creating duplicate customer emails.

### QA & release status

- Source template contract checks: see `validate-starters.mjs`; verifies required Liquid, EN/HI content, consent links, accepted styling, and template structure.
- **Not done:** Shopify Admin notification backups; email sender authentication verification; Shopify Messaging installation or draft imports; real Shopify Liquid rendering; email-client inbox testing; PNG logo; testing recovery deduplication; final owner release approval.
- **No changes to:** Shopify themes, live email templates, customers, orders, email campaigns, notifications, automations, sending configuration, or theme assets.

### Design token source

Follow [Sabpuja Foundations](https://lab.srv2005300.hstgr.cloud/theme/foundations/) and approved logo at `sabpuja/design-system/assets/logo/current/sabpuja-logo-horizontal-color.svg`. Email-safe palette: Ivory `#FFFBEF`, Cream `#FFF8E7`, Deep Brown `#33241F`, Temple Gold `#F4B400`, and contrast-safe CTA `#C84700`. Email typography uses Arial fallbacks for broad client support.
