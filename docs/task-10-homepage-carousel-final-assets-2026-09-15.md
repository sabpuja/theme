# TASK-10 — Homepage Hero Carousel Final Assets + Responsive QA — 2026-09-15

Status: **DONE — FINAL ASSETS WIRED / RESPONSIVE QA PASSED**

Target theme: `Sabpuja Staging — Rebrand 2026`  
Theme ID: `gid://shopify/OnlineStoreTheme/188428157244`  
Final verified role: `UNPUBLISHED`

## Final asset state

All six purpose-built Task 10 WebPs are produced, hosted in Shopify Files, wired to staging, and verified READY.

| Campaign | Variant | File | Dimensions | Bytes | Shopify Media ID |
|---|---|---|---:|---:|---|
| Diwali | Desktop | `sabpuja-diwali-hero-desktop-01.webp` | 1440×1080 | 37,920 | `gid://shopify/MediaImage/46418455429436` |
| Diwali | Mobile | `sabpuja-diwali-hero-mobile-01.webp` | 900×1200 | 29,152 | `gid://shopify/MediaImage/46418455724348` |
| Navratri | Desktop | `sabpuja-navratri-hero-desktop-01.webp` | 1440×1080 | 49,336 | `gid://shopify/MediaImage/46418455757116` |
| Navratri | Mobile | `sabpuja-navratri-hero-mobile-01.webp` | 900×1200 | 38,540 | `gid://shopify/MediaImage/46418456019260` |
| Evergreen Puja Essentials | Desktop | `sabpuja-puja-essentials-hero-desktop-01.webp` | 1440×1080 | 28,362 | `gid://shopify/MediaImage/46418456117564` |
| Evergreen Puja Essentials | Mobile | `sabpuja-puja-essentials-hero-mobile-01.webp` | 900×1200 | 21,894 | `gid://shopify/MediaImage/46418456412476` |

Canonical CDN URLs and alt text are recorded in `sabpuja/content/assets/homepage/hero-carousel/hero-carousel-manifest.json`.

## Content-safety QA

The final campaign artwork is deterministic non-product devotional artwork. Customer-facing headline/CTA copy remains controlled HTML/theme text.

Passed content checks:
- no product or kit contents are depicted;
- no people, faces or hands are depicted;
- no price, discount, scarcity, certification, ingredient, purity or spiritual-outcome claim is embedded in the raster artwork;
- desktop/mobile compositions reserve copy-safe areas;
- Diwali/Navratri artwork does not imply an approved commercial bundle or BOM.

## Final theme state

After final asset wiring and responsive-source correction:
- `sections/sabpuja-home.liquid`: 11,926 bytes; MD5 `a77945c76d92073e0d6efd6bb0db7857`;
- `assets/sabpuja-carousel.css`: 4,067 bytes; MD5 `f428621254e5ef3240cbdcf1e51750af`;
- theme role: `UNPUBLISHED`;
- `processing=false`;
- `processingFailed=false`.

Responsive source rule:
- viewport `max-width: 980px` uses the mobile artwork;
- larger viewports use desktop artwork;
- the breakpoint intentionally matches the carousel stacked-layout breakpoint.

## Regression found and fixed

Responsive-source QA initially found the desktop WebPs being selected in the mobile test environment. That failure was kept as evidence rather than ignored.

Failed regression run:
- `581ec6bf-3d8c-4e62-a297-4f88029c515d`

Resolution:
- changed the `<picture>` source breakpoint from 640px to 980px so responsive asset selection matches the actual carousel layout transition.

No coverage was weakened.

## Final QA evidence

Desktop interaction QA:
- run `d27c135b-87b9-4043-a709-07845edde0fc`;
- passed carousel sequence, Previous, dots, seasonal non-navigation, evergreen `/collections/all`, `#puja-kits`, trust strip and visual layout;
- `issues=[]`.

Post-fix mobile QA:
- run `7655a7c3-093f-452b-846b-e844d21b436e`;
- passed interactions, visual layout and mobile-source selection;
- `mobile_sources_pass=true`;
- `issues=[]`.

Post-fix desktop source QA:
- run `5666f823-d995-49a6-ab5b-99805fb71eb8`;
- confirmed all three desktop WebPs are selected above 980px;
- no broken campaign images;
- `issues=[]`.

Malformed terminal-report runs `43e7050c-c2db-42af-9647-6633c0c53278` and `f6fbed7a-6f6a-405c-9c20-b520fefd38b0` are not counted as pass evidence.

## CTA safety remains unchanged

- Diwali primary seasonal action remains non-clickable.
- Navratri primary seasonal action remains non-clickable.
- `/pages/diwali-puja` and `/pages/navratri-puja` remain intentionally unwired pending Task 11.
- Evergreen `Shop Puja Essentials` remains wired to verified `/collections/all`.
- Secondary current-kit links remain `#puja-kits`.

## Completion decision

Task 10 is complete. Its scoped deliverables—carousel structure, six final responsive campaign WebPs, Shopify Files hosting, staging wiring, content QA, responsive-source behavior and desktop/mobile interaction/crop QA—are all complete.

Task 11 commercial page readiness is a separate gate and does not keep Task 10 open. Nothing in this completion record authorizes publishing the staging theme.
