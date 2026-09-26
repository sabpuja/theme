# Sabpuja Fluid Responsive Foundation

Status: mandatory foundation for new and refactored storefront components.

## Principle

Sabpuja uses a **fluid-first, breakpoint-light** responsive system.

Screen size is treated as a continuum. Components should scale smoothly across available space rather than being designed as separate desktop, tablet, and mobile versions.

## Default tools

Use these before reaching for viewport breakpoints:

- `clamp()` for bounded fluid typography, spacing, gutters, widths, heights, and radii;
- `min()` / `max()` for natural constraints;
- CSS Grid/Flex intrinsic layout;
- `repeat(auto-fit, minmax(...))` for adaptive grids;
- percentages, `fr`, `min-content`, `max-content`, and `fit-content()`;
- `aspect-ratio` for media stability;
- `container-type: inline-size` and container queries for component-local structural changes;
- logical properties such as `padding-inline` and `margin-block`.

## Canonical starting tokens

```css
:root {
  --sp-gutter: clamp(1rem, .6rem + 2vw, 2.5rem);
  --sp-section-y: clamp(2.25rem, 1.25rem + 4vw, 5rem);
  --sp-grid-gap: clamp(.875rem, .65rem + 1vw, 1.5rem);
  --sp-h1: clamp(2rem, 1.4rem + 3vw, 4rem);
  --sp-h2: clamp(1.75rem, 1.3rem + 2vw, 2.75rem);
  --sp-body: clamp(.975rem, .94rem + .15vw, 1.075rem);
}
```

Values are starting points, not permission to exceed the locked storefront-density contract.

## Intrinsic grid pattern

```css
.sp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: var(--sp-grid-gap);
}
```

This should be preferred over hard-coded column counts tied to viewport widths.

## When queries are allowed

A media or container query is justified when there is a **real structural or interaction change**, for example:

- navigation must change interaction model;
- a two-column composition cannot preserve readable content without changing structure;
- content order genuinely needs to change;
- desktop and mobile use different art direction or image crop;
- controls need different interaction treatment for touch/accessibility;
- a component needs a container-local structural change.

Prefer a container query for a reusable component when the change depends on the component's own width rather than the full viewport.

## What not to do

Do not create a ladder of arbitrary viewport breakpoints such as 1440 / 1200 / 990 / 768 / 640 / 480 only to change:

- font sizes;
- section padding;
- card gaps;
- button padding;
- border radii;
- ordinary image or component sizing.

Those should normally be fluid values.

## QA sizes are not design breakpoints

The Sabpuja regression checks at approximately:

- 1280×720 desktop;
- 768×1024 tablet;
- 390×844 mobile;

are **sampling points for QA only**. They do not define the CSS architecture.

Components must also behave correctly between and beyond those sizes.

## Rule of thumb

If a property can vary continuously without harming readability or usability, make it fluid.

If the component truly needs to change structure, use the smallest number of component-aware queries necessary.
