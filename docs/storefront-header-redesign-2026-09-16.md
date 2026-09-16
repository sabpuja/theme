# Storefront Header Redesign — 2026-09-16

Status: **IMPLEMENTED ON UNPUBLISHED STAGING**

Theme: `Sabpuja Staging — Rebrand 2026`  
Theme ID: `gid://shopify/OnlineStoreTheme/188428157244`  
Role after update: `UNPUBLISHED`

## Implemented header structure

Desktop navigation now follows the approved storefront visual direction:

- official configured Sabpuja logo
- `Home`
- `Shop`
- `Collections`
- centered product search
- `EN / हिन्दी` language control
- notification icon
- account icon
- wishlist icon
- cart icon with cart count

`Home` receives the active rounded-pill state on the homepage.

## Collections hover menu

Desktop `Collections` opens on hover and keyboard focus without requiring a click. It contains:

1. Featured Products → `/collections/frontpage`
2. Puja Kits → `/collections/puja-kit`
3. New Arrivals → `/collections/all?sort_by=created-descending`
4. Puja Essentials → `/collections/puja-items`
5. Shop All Products → `/collections/all`

The same destinations are exposed in the responsive mobile menu.

## Search

The header search submits to Shopify search and constrains the request to products using `type=product`.

## Language state

English is currently the only published Shopify locale. The हिन्दी control is therefore present visually but non-navigating until a Hindi storefront locale is actually published. This avoids a false/broken language route while preserving the approved design.

## Notification / wishlist state

The notification and wishlist icons are present as visual controls. No unverified/broken destination was introduced. Their functional workflows can be wired separately once the corresponding storefront features are defined.

## Files changed on staging

- `sections/theme-header4.liquid`
  - MD5 after update: `c65aa694c4b01fcdf22103e4151ba92e`
  - size: 7655 bytes
- `assets/sabpuja-header.css`
  - MD5 after update: `df97e9540631390ffebf1891e353e9d4`
  - size: 7585 bytes

The existing `assets/sabpuja-staging.css` remains loaded as the broader staging brand layer. The new `assets/sabpuja-header.css` is scoped to the redesigned header.

## Verification

- Shopify theme role verified after mutation: `UNPUBLISHED`
- theme processing: `false`
- processing failed: `false`
- rendered staging HTML verified with the new `sp-site-header-v2` markup
- rendered links verified for Shop, all five Collections entries, account and cart

## Safety

This change does **not** publish the staging theme and does not modify the MAIN/live theme.
