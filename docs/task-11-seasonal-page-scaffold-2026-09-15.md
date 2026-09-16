# TASK-11 — Seasonal Page Scaffold — 2026-09-15

Status: **IN PROGRESS — NON-COMMERCIAL STRUCTURE IMPLEMENTED / COMMERCIAL OFFER BLOCKED**

Target theme: `Sabpuja Staging — Rebrand 2026`  
Theme ID: `gid://shopify/OnlineStoreTheme/188428157244`

## Scope completed in this pass

Implemented the first safe Task 11 unit without inventing any blocked commercial data:

- shared seasonal page section: `sections/sabpuja-seasonal-page.liquid`;
- dedicated stylesheet: `assets/sabpuja-seasonal.css`;
- Diwali template: `templates/page.diwali-puja.liquid`;
- Navratri template: `templates/page.navratri-puja.liquid`;
- real Shopify Page shell for `/pages/diwali-puja`;
- real Shopify Page shell for `/pages/navratri-puja`.

The page shells are intentionally **unpublished** and therefore do not expose unfinished seasonal offers on the live storefront.

## Shopify page records

### Diwali
- Page ID: `gid://shopify/Page/160331399484`
- handle: `diwali-puja`
- title: `Diwali Puja — Sabpuja`
- `isPublished=false`
- `publishedAt=null`
- template suffix: `diwali-puja`

### Navratri
- Page ID: `gid://shopify/Page/160331432252`
- handle: `navratri-puja`
- title: `Navratri Puja — Sabpuja`
- `isPublished=false`
- `publishedAt=null`
- template suffix: `navratri-puja`

## Theme files and verified checksums

| File | Size | MD5 |
|---|---:|---|
| `assets/sabpuja-seasonal.css` | 2,634 bytes | `5dba715f34c2482557291cef4466b41e` |
| `sections/sabpuja-seasonal-page.liquid` | 4,733 bytes | `580fcc569edf2dfb577bedbe36a0074a` |
| `templates/page.diwali-puja.liquid` | 38 bytes | `f6ed3fb8bd6452b3283d732227f87827` |
| `templates/page.navratri-puja.liquid` | 38 bytes | `f6ed3fb8bd6452b3283d732227f87827` |

Post-write theme verification:
- name: `Sabpuja Staging — Rebrand 2026`;
- role: `UNPUBLISHED`;
- `processing=false`;
- `processingFailed=false`.

## Content model

The shared seasonal section switches by `page.handle` and uses the final Task 10 responsive campaign artwork already hosted in Shopify Files.

### Diwali artwork
- desktop: `sabpuja-diwali-hero-desktop-01.webp`
- mobile: `sabpuja-diwali-hero-mobile-01.webp`

### Navratri artwork
- desktop: `sabpuja-navratri-hero-desktop-01.webp`
- mobile: `sabpuja-navratri-hero-mobile-01.webp`

The mobile `<picture>` breakpoint remains `max-width: 980px`, matching the Task 10 carousel breakpoint decision.

## Commercial safety gate

The scaffold intentionally contains **none** of the following:
- seasonal selling price;
- compare-at price or discount;
- exact BOM or included-contents list;
- inventory or scarcity claim;
- bundle/product-model claim;
- Buy Now button;
- checkout link;
- guaranteed spiritual, financial, health, relationship, protection or future-outcome claim.

The page explicitly tells customers that exact included items, quantities, selling price and availability will only be shown after approval, and that no seasonal checkout action is enabled.

## Verified information used

Only already-verified operating facts are surfaced:
- Delhi NCR delivery area;
- typical delivery 1–3 business days;
- ₹100 flat shipping;
- prepaid online orders;
- support Monday–Saturday, 10 AM–6 PM IST;
- `support@sabpuja.com`;
- WhatsApp `+91 96678 19241`.

Safe customer actions are limited to:
- `/collections/all` for current Puja Essentials;
- email support;
- WhatsApp support.

## QA state

Structural/write QA: **PASS**
- theme file mutation returned zero user errors;
- all four files were re-queried and checksum/size verified;
- both Page records were re-queried and remain unpublished;
- target theme remains unpublished and healthy.

Public-route visual QA is intentionally **not yet applicable** because both Page shells are unpublished. This is a safety condition, not a failed test. The pages must not be published merely to obtain visual QA while commercial data is still unapproved.

## Remaining genuine Task 11 blocker

Commercial conversion cannot proceed until the approval source contains, for each seasonal offer:
- exact BOM and quantities;
- approved selling price;
- compare-at/discount state;
- SKU/product/bundle model;
- inventory and fulfillment state;
- exclusions;
- approved traditional/context claims;
- decision whether the page sells a product, collection, bundle or informational offer.

Until those inputs are approved:
- keep both Page records unpublished;
- keep homepage Diwali/Navratri primary actions non-clickable;
- do not add Buy Now or checkout;
- do not convert demo staging prices into selling prices.

## Completion decision

Task 11 has moved from planned to **in progress**. The non-commercial page structure and real unpublished Page shells now exist. Final sales-page content, page publication, conversion QA and homepage seasonal CTA wiring remain approval-gated.
