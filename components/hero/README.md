# SP-COMP-002 — Campaign Hero

Reusable Sabpuja hero system for campaign, collection, editorial and product-led landing pages.

## Variants

- `full_width_image` — image-led campaign hero with readable overlay copy.
- `split` — balanced copy/media layout for evergreen collection pages.
- `product_led` — featured product hero with Shopify product data.
- `editorial` — story-led image plus floating editorial card.
- `minimal` — text-first lightweight hero without required photography.
- `dark_devotional` — Sacred Brown ceremonial storytelling variant.

## Required component settings

- Variant/layout
- Eyebrow
- Heading
- Semantic heading level (`h1`, `h2`, `h3`)
- Body copy
- Primary CTA label + link
- Optional secondary CTA
- Desktop image + alt text
- Optional mobile image/art direction
- Background treatment
- Content alignment
- Section width/density
- Optional whole-hero link using the primary destination

## Rules

1. One component file, multiple variants. Do not create page-specific hero Liquid files.
2. The hero does not automatically claim the page `h1`; heading level is explicitly configured per instance.
3. Images must use meaningful alt text when informative and empty alt text when purely decorative.
4. Mobile art direction may use a separate crop when the desktop composition cannot survive narrow screens.
5. Visible CTA copy remains descriptive; whole-hero linking is an optional enhancement, not a replacement for the visible CTA.
6. Page-specific SEO copy, product handles and image content stay in settings/data, not hard-coded layout markup.
7. Motion is optional and must respect `prefers-reduced-motion`.

## Shopify mapping

Canonical section: `sections/sabpuja-campaign-hero.liquid`

Styles: `assets/sabpuja-campaign-hero.css`

The section is safe to add to staging templates after visual approval; creating the section file itself does not alter any existing storefront template.
