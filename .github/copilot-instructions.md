# GitHub Copilot: Sabpuja Shopify Theme

Read [AGENTS.md](../AGENTS.md), the [canonical design-system rules](https://github.com/sabpuja/design-system/blob/main/AGENTS.md), and the live Foundations reference before proposing or changing storefront UI.

**Required first step:** open and read the *current* [Sabpuja Component Lab Foundations](https://lab.srv2005300.hstgr.cloud/theme/foundations/) before producing or editing any storefront visual design, layout, font, color, spacing, responsive behavior, HTML/CSS/Liquid or reusable component. Do not trust obsolete screenshots, legacy fixed-width guidelines or stale palette examples.

The live Foundations is the visual/responsive authority: Poppins headings, Inter body/UI (Noto Sans Devanagari for Hindi), 4px-based proportional rhythm, consistent branding, fluid `clamp()`/`min()`/`max()` typography and gutters, intrinsic Grid/Flex with `auto-fit`/`minmax()`, wrapping, and container queries only for real structural changes. No per-device copies. Use shared tokens; prefer Shopify-editable content over hardcoded text, assets and product links. QA narrow-to-ultrawide and intermediate widths, Hindi, 200% zoom, focus, touch targets and overflow.

For official logo geometry and asset selection, follow [the approved brand-assets manifest](https://github.com/sabpuja/design-system/blob/main/assets/logo/brand-assets.json). Never redraw/recolor brand masters just because a layout token changed. If these instructions conflict with an old design rule, flag the conflict and follow live Foundations for **new UI**; migration of deployed layout constraints requires a reviewed PR. GitHub/Shopify safety instructions still apply. If you cannot access the live page, disclose that limitation rather than assuming an older snapshot is current.

Apply changes on an approved branch/unpublished staging theme with review and regression QA; production changes require explicit authorization. Do not add GitHub Actions workflows without human approval.
