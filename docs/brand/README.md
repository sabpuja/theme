# Sabpuja Brand Assets in Theme

This directory documents how brand assets are used by the Shopify theme.

## Canonical source of truth

**Repository:** `sabpuja/design-system`  
**Human entry point:** `assets/logo/README.md`  
**Machine/agent authority:** `assets/logo/brand-assets.json`  
**Approved current masters:** `assets/logo/current/`

The files in `sabpuja/theme/assets/` are runtime mirrors for Shopify. They are not a separate approval source.

## Current runtime mirror

- `assets/sabpuja-logo-horizontal-color.svg`
- `assets/sabpuja-logo-stacked-color.svg`
- `assets/sabpuja-emblem-color.svg`
- `assets/sabpuja-logo-horizontal-maroon.svg`
- `assets/sabpuja-logo-horizontal-ivory.svg`
- `assets/sabpuja-favicon.svg`
- `assets/sabpuja-brand-tokens.css`
- `assets/sabpuja-logo-horizontal.svg` — compatibility alias

## Legacy

Theme-level rollback material lives under:
`docs/brand/archive/2026-10-07-legacy-logo/`

Do not use archived theme assets or snapshots in new customer-facing work.

## Conflict rule

If theme runtime files and `sabpuja/design-system/assets/logo/brand-assets.json` disagree, stop and reconcile. Do not guess which logo is approved.
