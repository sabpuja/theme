# Shopify dynamic commerce and presentation contract

Status: owner instruction, 2026-10-09
Canonical code: `sabpuja/theme`, development branch `staging-2026`
Canonical UI reference: https://sabpuja.github.io/theme/components/collection-grid/
Staging Shopify theme: `188542550332` (unpublished)
Live Shopify theme at decision time: `189044752700` (`Sabpuja Rebrand-3-2026`)

## Owner requirements

1. **No hardcoded merchandising.** Product prices, availability, inventory, badges, product media, recommendations, product titles, collection labels, filters, facets, sort methods, category links and featured content must come from Shopify product or collection data, Shopify navigation, relevant Shopify metafields/metaobjects, or merchant-editable Theme Editor section settings and blocks. Never store product-specific identifiers, prices or media URLs in the shared templates as source of truth.
2. **Everything customer facing should be maintainable in Shopify.** Prefer collection picker, menu picker, product list, product metafields and structured Theme Editor controls. Clearly document each editable surface. A developer should not be required to change Liquid to swap a card image, reorder categories or pick recommendations.
3. **No long dashes anywhere in customer-facing copy.** Do not use em dashes (U+2014), en dashes (U+2013) or horizontal bars (U+2015) in new copy. Prefer readable punctuation, shorter sentences, commas, colons or the ordinary hyphen `-` only where grammatically needed. Audit rendered content, style-generated decoration and HTML, not only literal theme strings. Preserve syntactically required operators inside code.
4. **Visual QA must be demonstrable.** A file upload, passing logic test or matching Component Lab markup is not proof of visual improvement. Obtain side-by-side desktop/mobile images and test responsive layout, product images, working filter actions, sort, pagination, label wrapping, no overflow and Shopify Editor configurability. If visual verification is blocked, report it without claiming design acceptance.
5. **Reuse approved components.** SP-COL-001A drives collection browse and Shop All. SP-PROD owns all product tiles, including search and related items. Never introduce fake prices, product counts, stock, review claims or demo cards as customer-facing data.
6. **Staging first.** Make theme changes only in unpublished theme `188542550332` unless the owner explicitly approves another scope. Never publish on your own. Product/catalog and navigation admin records are shared across themes, so secure separate approval for live-impacting mutations.
7. **Keep approved media and content intact.** Do not delete product galleries or replace approved closed-box hero/detail imagery without a verified product-specific reason. No empty open-box imagery.

## Acceptance for current SP-COL work

- Shop All and each ordinary collection get an upgraded, visibly differentiated desktop design matching the Component Lab layout contract, not merely reusing the old card grid unchanged.
- Desktop: true collection context, category navigation from Shopify menu/collections, a persistent filter sidebar backed by Shopify native facets, removable chips, native sort and a four-column SP-PROD grid when space permits.
- Tablet/mobile: three/two columns, accessible filter sheet, independent sort, visible product counts, clear zero-result recovery.
- Product pages: same SP-PROD tiles for related content, configured with Shopify editor data or Shopify collection relationships, not static product handles or fixed prices.
- All cards use Shopify-managed image media or an editor-selectable override; never depend on handle-to-CDN URL maps as the only way to change imagery.
- Preserve search, Puja Guides, customer accounts, QR guide lookup and disabled selling/inventory state while the store is a public development site.
- Verify source changes in staging and its canonical GitHub development branch; then update Progress-Memory with exact state and remaining blockers.

## Visual defect recorded by owner

On 2026-10-09, the owner supplied a full-page screenshot of Shop All after the SP-COL-001A deployment and explicitly reported **"nothing changed, it's still the same."** The previous agent's "implemented" claim was a functional/layout integration, not evidence of an accepted visual redesign. This must be treated as an open acceptance failure until a newer desktop/mobile screenshot is reviewed by the owner.

Original screenshot is in the user conversation dated 2026-10-09 and should be requested or retrieved from that context for comparisons, not described as already corrected.
