# SP-BLOG editorial v2 - user-reference-led redesign

## Source and reason
Reviewed the user-attached early SP-BLOG-001 HTML concept on 2026-10-16. Its warm hero, ten visually differentiated content cards, clear topic navigation and accessible reader are the direction. The previous Lab was functional but too documentation-like.

## Layout system
- Curated image-led bento entry cards, compact interest tiles, Pinterest-style CSS-column reading feed with a button to switch to an even CSS grid.
- Bounded cover-media aspect ratios, object-fit, coherent graphic illustration placeholders where an editorial photo would misrepresent the topic.
- Typography, spacing, images and visual hierarchy designed for easy scanning, no walls of text.
- Reuses canonical fluid design tokens and the approved logo. Uses intrinsic sizing and one content-driven container query for the featured board; no per-device CSS breakpoints.
- All 20 reader formats, topic hub, search/filter, Hindi stress test and fluid-width control preserved; format link directory collapsed for easier reading.
- Prototype/example content only, not production research or live store editorial posts.

## Review gates
Continuous resizing, 200% zoom, Hindi expansion, image crops, focus order, search/no-results/filtering, masonry-grid toggle, all 20 reader specimens and HTTPS asset checks. Publication remains manual to Hostinger VPS using the approved no-GitHub-compute deploy procedure.
