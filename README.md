# Sab Puja Theme

## Required for all UI contributors and agents

**Read [live Sabpuja Component Lab Foundations](https://lab.srv2005300.hstgr.cloud/theme/foundations/) before editing any visual, layout, responsive or component implementation**, and follow [theme agent rules](AGENTS.md) plus [design-system agent rules](https://github.com/sabpuja/design-system/blob/main/AGENTS.md). The live Foundations is the canonical target for colors, typography, fluid layout, spacing and composition. Existing Shopify widths require a reviewed migration; this README is not deployment authorization.

Shopify storefront implementation for Sab Puja.

## Owns
- Liquid templates, sections, and snippets
- Theme CSS and JavaScript
- Navigation and header/footer behavior
- Homepage and collection layouts
- Product-page UX
- Cart and checkout-adjacent storefront UX
- Responsive/mobile behavior
- Theme settings and storefront QA

## Does not own
- Brand/design rules (`sabpuja/design-system`)
- Product/SEO copy (`sabpuja/content`)
- Cross-functional requirements and roadmap (`sabpuja/core`)

## Current priorities
1. Fix broken storefront navigation.
2. Verify and improve cart-to-checkout hierarchy.
3. Add product-page trust and product-information components.
4. Improve homepage value proposition and merchandising.
5. Implement mobile-first QA.

## Development rule
Every production change should map to a core requirement or issue and be implemented through a focused branch/PR.