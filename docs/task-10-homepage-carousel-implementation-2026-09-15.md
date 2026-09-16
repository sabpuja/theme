# Task 10 — Homepage Carousel Staging Implementation — 2026-09-15

Status: **STRUCTURAL IMPLEMENTATION DONE — DESKTOP/MOBILE QA PASSED — FINAL CAMPAIGN WEBPS STILL PENDING**

Target Shopify theme: `Sabpuja Staging — Rebrand 2026`  
Theme ID: `gid://shopify/OnlineStoreTheme/188428157244`  
Verified role after write: `UNPUBLISHED`

## What was implemented

The previous single static homepage hero was replaced on the unpublished staging theme with a three-slide manual carousel shell:

1. Diwali seasonal preparation
2. Navratri seasonal preparation
3. Evergreen Sabpuja / Puja Essentials

Theme files changed:
- `sections/sabpuja-home.liquid`
- new `assets/sabpuja-carousel.css`

Post-write Shopify verification:
- `sections/sabpuja-home.liquid` checksum: `f52ba9bb2eb287fcbddb7135fba06048`
- `sections/sabpuja-home.liquid` size: 11276 bytes
- `assets/sabpuja-carousel.css` checksum: `f428621254e5ef3240cbdcf1e51750af`
- `assets/sabpuja-carousel.css` size: 4067 bytes
- `processing=false`
- `processingFailed=false`
- theme role: `UNPUBLISHED`

No catalog, cart, support-page, policy or live-theme resource was changed by this implementation.

## CTA safety model

### Diwali
The planned seasonal destination remains `/pages/diwali-puja`, but that page does not yet exist as a verified Task 11 sales page.

Accordingly, staging does **not** render a seasonal destination link. The primary action is a non-clickable `Seasonal page in preparation` status element. A secondary `Explore current Puja Kits` link points only to the existing `#puja-kits` section.

### Navratri
The planned seasonal destination remains `/pages/navratri-puja`, but that page does not yet exist as a verified Task 11 sales page.

Accordingly, staging does **not** render a seasonal destination link. The primary action is a non-clickable `Seasonal page in preparation` status element. A secondary `Explore current Puja Kits` link points only to the existing `#puja-kits` section.

### Evergreen Puja Essentials
The evergreen primary CTA is live in staging and points to the verified existing `/collections/all` route. Its secondary CTA points to `#puja-kits`.

A direct rendered-DOM audit of `.sp-hero-carousel` confirmed the only anchor destinations inside the carousel are:
- `#puja-kits`;
- `/collections/all`.

There are no links to `/pages/diwali-puja` or `/pages/navratri-puja` in the rendered staging carousel.

## Current visual state vs final asset state

This implementation completes the carousel **structure and customer-safety wiring**, not Task 10's final campaign-artwork requirement.

Current staging visuals:
- Diwali temporarily reuses the existing approved-for-staging Diwali kit hero WebP;
- Navratri temporarily reuses the existing approved-for-staging Navratri kit hero WebP;
- Evergreen uses the existing Sabpuja brand illustration treatment.

All three are explicitly staging treatments. The purpose-built responsive assets defined in `sabpuja/content/assets/homepage/hero-carousel/hero-carousel-manifest.json` remain pending:
- `sabpuja-diwali-hero-desktop-01.webp`
- `sabpuja-diwali-hero-mobile-01.webp`
- `sabpuja-navratri-hero-desktop-01.webp`
- `sabpuja-navratri-hero-mobile-01.webp`
- `sabpuja-puja-essentials-hero-desktop-01.webp`
- `sabpuja-puja-essentials-hero-mobile-01.webp`

Final assets must still pass image review, WebP export, alt-text review, GitHub/DAM storage, Shopify Files upload and desktop/mobile crop QA before Task 10 can be marked complete.

## Interaction implementation

The staging carousel is manual rather than auto-rotating.

Controls:
- Previous button;
- Next button;
- three direct-selection dot buttons;
- left/right arrow-key support while focused within the carousel.

The implementation updates active/hidden states and `aria-current` on dot controls. No autoplay was added, avoiding an unnecessary motion/accessibility regression.

## Desktop QA

TinyFish run: `624f984c-18b6-4b26-ac26-ce02c795a22e`

Result: **PASS — zero reported issues**

Verified:
- initial Diwali slide;
- Next → Navratri;
- Next → Evergreen;
- Previous → Navratri;
- all three dot controls;
- seasonal status controls are non-navigating;
- evergreen `/collections/all` CTA works;
- no carousel/trust-strip clipping, overlap, horizontal overflow or broken control layout.

Structured result fields all passed:
- `desktop_pass=true`
- `dot_controls_pass=true`
- `seasonal_controls_non_navigating=true`
- `evergreen_collection_link_pass=true`
- `visual_layout_pass=true`
- `issues=[]`

## Mobile QA

TinyFish run: `d78a8005-8e50-4092-9004-1444a1f8c017`

Viewport: approximately 375px

Result: **PASS — zero reported issues**

Verified:
- Diwali, Navratri and Evergreen slides;
- previous/next controls;
- all three dot controls;
- seasonal status controls remain non-navigating;
- evergreen `/collections/all` CTA works;
- no horizontal overflow or broken responsive layout;
- trust strip below the carousel remains intact.

Structured result fields all passed:
- `mobile_pass=true`
- `viewport_width=375px`
- `dot_controls_pass=true`
- `seasonal_controls_non_navigating=true`
- `evergreen_collection_link_pass=true`
- `visual_layout_pass=true`
- `trust_strip_pass=true`
- `issues=[]`

## Non-counted exploratory QA run

An earlier exploratory run, `3a9c3f25-823b-45e9-bf6c-ff98494d92ff`, reached terminal status but returned its final screenshot instruction instead of a usable QA report. It is not used as pass evidence. The two focused structured runs above replaced it without reducing coverage.

## Remaining Task 10 work

Task 10 remains **IN PROGRESS** because the final responsive campaign WebPs have not yet been produced and wired.

Remaining work:
1. create/review the six purpose-built desktop/mobile WebPs;
2. store approved files in the content repository/DAM;
3. upload approved assets to Shopify Files with reviewed alt text;
4. replace the temporary staging visuals with final responsive assets;
5. repeat desktop/mobile crop and interaction QA;
6. wire Diwali/Navratri seasonal CTAs only after Task 11 destination pages exist and pass QA.

## Safety / cutover rule

This implementation does not authorize publishing theme `188428157244`. The theme remains unpublished, the live theme was not targeted, and no nonexistent seasonal route has been wired into the customer journey.
