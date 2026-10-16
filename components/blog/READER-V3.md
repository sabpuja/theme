# SP-BLOG-READER-003: Customer-first article reading experience

## Supplied design reference
User-provided \`sabpuja-blog-component-lab-preview(2).html\` + screenshot of the How-to page, reviewed 2026-10-16. Preserve original strengths: dedicated article header and breadcrumbs, "short answer" callout, narrow reading measure, contents navigation, reading comfort, interactive preparation checklist, contextual optional product module and subject-related bottom recommendations.

## What this iteration implements
- 20 per-format rendered article experiences instead of generic format documentation. Extends the reference's 10 content arrangements to the 20-format editorial operating system.
- Practical interfaces: progress checklists, context-reveal facts/listicles, chapter tabs with arrow-key navigation, glossary search, a decision helper and timeline tasks. Every format has a meaningful, working interaction. Shared article framing and CTA placement are consistent.
- Contextually relevant optional product inset only on F01/F06/F13/F14/F16/F18, with real, verified Sabpuja links, never a forced purchase or unverified endorsement.
- Three editorially mapped related reading cards per format; each opens a working hash-linked preview.
- Fluid typography and intrinsic grids, one container-driven layout query at content need, no device-specific viewport breakpoints. Respect reader scale and Hindi expansion.
- Source imagery from the lab's existing theme assets, without huge inline base64 images from the attachment.
- Readable semantic fallback F01-F20 remains in existing HTML if enhancement JavaScript is disabled; all current archive and topic-hub behavior is preserved.
- Visible demonstration disclaimer and noindex: do not publish demonstration content as verified religious fact or genuine review.

## Validation gates
Static: verify 20 articles, 20 nav links and 3 valid live product URLs, no new broken assets, JS parsing and header navigation, no GitHub workflows. Browser QA: click each format; checklist progress, fact reveal, tabs via keyboard, search, decisions, share/save/print and dynamic related recommendations. Test no-JS and narrow container + Hindi/200% zoom. Hostinger Lab VPS manual deployment only; Shopify not modified.
