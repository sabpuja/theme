# Sabpuja Theme Agent Rules

These rules apply to all automated and human-assisted work in `sabpuja/theme`.

## Read first: canonical live Sabpuja Foundations

**Mandatory design authority:** https://lab.srv2005300.hstgr.cloud/theme/foundations/

Before any agent (Codex, Claude, Copilot or others) proposes or edits storefront styling, layout, responsive behavior, font, color, spacing, header/footer, product/card, account, Puja Guide or editorial UI:

1. Open and read the **current live Foundations page**, and review [`sabpuja/design-system/AGENTS.md`](https://github.com/sabpuja/design-system/blob/main/AGENTS.md), approved Component Lab patterns and implementation tokens. Do not rely on historical screenshots or outdated static palette tables.
2. Apply fluid-first design (`clamp()`, `min()`, `max()`, intrinsic CSS Grid/Flex, `auto-fit`/`minmax()`, wrapping and container queries for genuine composition changes). Never build device-model-specific breakpoints or separate mobile/desktop copies solely to resize text/gutters. Keep Poppins headings and Inter body/UI, Hindi fallback and a unified 4px-derived rhythm. Use component max ~1160–1240px and article reading width ~680–760px as the **target canonical system** with fluid gutters.
3. Use shared CSS tokens and canonical components; avoid inline/one-off styling, competing token palettes, hardcoded layout/text/product IDs/URLs, and global `!important` patches when a reusable or Shopify-editable solution exists. Keep source content, product/media, navigation and locale strings editable and data driven.
4. Perform visual/functional QA across narrow-to-wide and awkward intermediate widths, Hindi/long text, 200% zoom, keyboard navigation, accessible touch targets, reduced motion, and no horizontal overflow/CTA overlaps. Record any exceptions and link the applicable approval in the PR.
5. The live Foundations governs design intent. Existing theme density values below describe the **current deployed baseline**, not a license to ignore the approved design system. Migrating deployed widths/density to the new fluid standard requires a scoped, reviewed PR and regression checks. **This policy update does not make production code changes**.

Human authorization, GitHub/Shopify safety rules, and the approved design-system logo manifest remain binding. If the live Foundations cannot be checked, note the blocker rather than assuming an old specification is current.

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

## Storefront density — LOCKED

**2026-10-16 migration clarification:** The pixel values below preserve consistency of currently deployed compact sections during QA. They are a legacy implementation baseline, not the target specification for new UI. The owner has selected the live Foundations page above for the future shared fluid system; change deployed width, hero and density tokens only through a reviewed design-system migration with adjacent-section checks.

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

A change fails if it fixes one section but makes an adjacent section noticeably larger, less browsable, less readable, or visually inconsistent.

Before considering a density-affecting task complete, inspect at minimum:

1. announcement/header/navigation;
2. hero/carousel;
3. the next merchandising section;
4. product/card grids;
5. supporting homepage sections;
6. mobile/tablet behavior and touch targets.

## Change control

The compact-density contract remains a regression constraint for already deployed sections until a reviewed fluid-system migration replaces the applicable legacy values. Do not silently widen or enlarge sections to match another page. When the new canonical Foundations calls for a change, document the migration, review it as a system, and regression-check the entire affected page before merging or applying it to Shopify staging.

The source-of-truth product requirement is maintained in `sabpuja/core/docs/prd/storefront-density-contract.md`.

## GitHub safety circuit breaker

All GitHub-capable work in this repository follows `sabpuja/core/docs/policies/GITHUB-SAFETY-GUARDRAILS.md`.

If GitHub returns a `403`/`429` related to restriction, suspension, abuse controls or rate limiting:
- stop GitHub writes;
- stop automatic retries;
- record the exact blocker;
- do not work around the restriction;
- route execution away from GitHub;
- require human approval before resuming.

Do not create or modify `.github/workflows/*` without explicit human approval. Operational automation belongs on the Portable Agent Platform / Hostinger VPS; Shopify / `sabpuja.com` remains the production ecommerce runtime.
