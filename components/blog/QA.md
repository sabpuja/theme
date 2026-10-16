# SP-BLOG Component Lab: Review and QA log

## Surface and ownership
- Source: sabpuja/theme, branch gh-pages (proposed PR; not Shopify runtime).
- Preview path: https://sabpuja.github.io/theme/components/blog/
- Design contract: https://github.com/sabpuja/design-system/blob/main/docs/blog-fluid-layout.md
- Editorial catalog: https://github.com/sabpuja/Blog-Editorial-System/blob/main/docs/formats/catalog.md
- Component ownership: SP-BLOG-001A (Library), SP-BLOG-002 (Topic Hub), SP-BLOG-001B (Reader), SP-BLOG-003 (optional product block).
- Snapshot assets mirrored verbatim from approved design-system source: tokens, primitives, approved current SVG logo. Brand geometry not modified.

## What is demonstrated
1. Knowledge Library with eight topic pillars, 10 sample card results, search filter, category filtering and no-results state.
2. Topic hub with meaningful overview, learning sequence, topic chapters and related contextual help.
3. Reader with 20 primary format specimens F01-F20, format selector, native fragment links, reading controls, semantic comparisons, details-based answers, glossary search and progress-enhanced preparation checklist.
4. Continuous-width preview slider from 320 to 1120 CSS px (for testing, not device-specific templates).
5. Representative English/Hindi heading swap testing text expansion. Not a complete professional Hindi localization.
6. Optional product block with a real product destination, but no invented price, availability, ratings or ritual requirements.
7. Initial HTML includes core text and real internal navigation. JavaScript enhances, not creates, the editorial examples.

## Automated/static verification completed on source tree
- All 20 F01-F20 specimen IDs, picker options, and fragment anchors are present.
- Exactly 3 primary preview experiences and 10 search-card records.
- JavaScript passed V8 syntax compilation (new Function construction only, no execution of untrusted scripts).
- Unique HTML IDs.
- CSS curly-brace balance and asset references checked.
- No viewport-width media breakpoints in the new showcase layer. Container query in canonical primitives.
- No unverified rating/price JSON-LD present.
- Noindex meta present; root robots.txt disallows crawling.
- No GitHub Actions, Shopify source, product registry or live theme edits.
- Mirror sync and nav index integration verified by source readback.

## Manual visual/interaction checks still REQUIRED
These checks are deliberately not claimed as passed without a browser session.
- Continuously resize through awkward widths, e.g. 320, 344, 375, 390, 430, 600, 768, 900, 1024, 1200 CSS px. Any samples used are diagnostics, not design variants.
- Switch Library / Hub / Reader with keyboard and check focus and scroll.
- Move fluid slider through arbitrary values; observe cards and sidebar reflow with no page overflow.
- Toggle Hindi text, compare wrap and height at 200% browser zoom.
- Test Library search, chips, empty recovery, format picker and 20 links.
- Complete four checklist inputs and verify visual count and bar; reload, note that demo state is not persisted.
- Filter glossary, open FAQ details, keyboard-scroll comparison tables.
- Check print and copy-link; clipboard may require HTTPS permission.
- Test no-JS mode: all three experiences and 20 examples remain readable as HTML, with any JS-only filters inactive.
- Check against WCAG contrast, heading hierarchy, real screen reader reading order, motion preferences and LCP image priority.
- Confirm public preview reflects gh-pages branch after deployment; inspect mobile screenshot and network panel for broken images/fonts.

## Release limitations
This design preview is noindex. It is NOT a Shopify Liquid template, not a publishing pipeline and not production article content. Factual research, actual authors, expert interviews, reviews, editorial citations, inventory and legal permissions must come from owning systems.

Do not interpret a successful GitHub merge as formal visual approval. Any finding must be recorded in SP-BLOG issue #3 and fixed before considering design variants production-ready.
