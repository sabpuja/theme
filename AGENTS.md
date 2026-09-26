# Sabpuja Theme Agent Rules

These rules apply to all automated and human-assisted work in `sabpuja/theme`.

## Safety

- Work on unpublished staging themes unless an explicit cutover instruction says otherwise.
- Never publish a theme as part of ordinary implementation work.
- Never modify the live/MAIN theme while developing or QA-ing staging changes.
- Treat Shopify product/catalog media as shared live catalog data, not theme-scoped data.
- Do not create real orders or payment transactions for theme QA.

## Brand

- Spell the brand **Sabpuja**.
- Source colors, typography, and official logo geometry from `sabpuja/design-system`.
- Competitor references may guide density, hierarchy, and browseability only; never copy competitor colors, typography, identity, or artwork.
- Use Lucide for functional UI icons.
- Do not invent prices, discounts, scarcity, ratings, customer counts, product contents, or outcome claims.

## Responsive architecture — FLUID FIRST

Sabpuja uses a **fluid-first, breakpoint-light** responsive system.

- Treat screen size as a continuum, not desktop/tablet/mobile buckets.
- Use `clamp()`, `min()`, `max()`, intrinsic Grid/Flex, `auto-fit`, `minmax()`, percentages, `fr`, `aspect-ratio`, and logical properties before viewport media queries.
- Use bounded fluid values for typography, section spacing, gutters, gaps, ordinary component dimensions, and media sizing.
- Reusable components should respond to the space their own container receives. Prefer container queries over viewport media queries when a structural switch depends on component width.
- Do not create arbitrary breakpoint ladders such as 1440 / 1200 / 990 / 768 / 640 / 480 simply to change font sizes, padding, gaps, radii, or ordinary sizing.
- A media/container query is allowed only for a genuine structural, interaction, art-direction, or accessibility change.
- Existing QA viewport sizes are regression sampling points only; they are not CSS breakpoint requirements.

Canonical guidance lives in `docs/fluid-responsive-foundation.md` and the Component Lab Foundations page.

## Storefront density — LOCKED

The compact Sabpuja storefront density is a cross-theme invariant. Do not independently enlarge a section.

Desktop defaults:

- content container: **1120px**
- hero max width: **960px**, target rendered height roughly **360–410px at 1280×720**
- header height: **68–72px**
- logo width: **132–145px**
- desktop controls: **36–40px** visual size
- touch targets: **>=44px where touch interaction is expected**
- section H2: **28–34px**
- section vertical padding: **36–44px**
- grid/card gaps: **14–16px**

Use the shared CSS custom properties rather than inventing competing section-local values:

```css
--sp-storefront-container
--sp-storefront-hero
--sp-storefront-header-height
--sp-storefront-section-y
--sp-storefront-grid-gap
--sp-storefront-heading-max
```

Do not increase these values or replace them with larger local values without explicit approval.

Responsive components may reduce scale when needed, but they must not silently raise the desktop baseline.

## Above-the-fold rule

At **1280×720**:

- announcement/header/navigation must remain comfortably readable;
- the hero must not become a full-screen takeover;
- primary hero content and controls must remain usable;
- where feasible, the next merchandising section should begin within or immediately after the first viewport;
- carousel CTA hotspots, arrows, and dots must remain correctly aligned after any image/container scaling change.

The desired feel is a compact, browsable ecommerce storefront rather than an oversized editorial landing page.

## Regression gate

Any change affecting header, hero, typography, container width, cards, media aspect ratio, controls, or section spacing must be reviewed as one system at:

- **1280×720 desktop**
- approximately **768×1024 tablet**
- approximately **390×844 mobile**

These are representative QA sampling sizes, not required implementation breakpoints.

A change fails if it fixes one section but makes an adjacent section noticeably larger, less browsable, less readable, or visually inconsistent.

Before considering a density-affecting task complete, inspect at minimum:

1. announcement/header/navigation;
2. hero/carousel;
3. the next merchandising section;
4. product/card grids;
5. supporting homepage sections;
6. mobile/tablet behavior and touch targets.

## Change control

The compact density contract is a permanent implementation constraint. If a larger value is genuinely required, document the reason, obtain explicit approval, and regression-check the whole affected page before merging or applying it to Shopify staging.

The source-of-truth product requirement is maintained in `sabpuja/core/docs/prd/storefront-density-contract.md`.
