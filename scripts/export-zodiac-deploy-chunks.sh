#!/usr/bin/env bash
set -euo pipefail

# Local/VPS replacement for the retired GitHub Actions export workflow.
# Run from the repository root. This script creates review artifacts only;
# it never commits, pushes, deploys, or mutates Shopify.

for cmd in base64 split identify convert sha256sum; do
  command -v "$cmd" >/dev/null 2>&1 || {
    echo "Missing required command: $cmd" >&2
    exit 1
  }
done

rm -rf .zodiac-deploy
mkdir -p .zodiac-deploy

base64 -w0 sections/sabpuja-zodiac-remedy-landing.liquid | split -b 7000 - .zodiac-deploy/section-
base64 -w0 assets/sabpuja-zodiac-remedy-landing.css | split -b 7000 - .zodiac-deploy/css-

identify assets/sabpuja-zodiac-hero-main.webp | tee .zodiac-deploy/hero-identify.txt
convert assets/sabpuja-zodiac-hero-main.webp -resize '960x960>' -quality 58 .zodiac-deploy/hero-preview.jpg
convert assets/sabpuja-zodiac-hero-main.webp -gravity center -crop '1200x650+0+0' +repage -resize '840x840>' -quality 64 .zodiac-deploy/hero-center-preview.jpg

sha256sum sections/sabpuja-zodiac-remedy-landing.liquid > .zodiac-deploy/source-sha256.txt
sha256sum assets/sabpuja-zodiac-remedy-landing.css >> .zodiac-deploy/source-sha256.txt
sha256sum assets/sabpuja-zodiac-hero-main.webp >> .zodiac-deploy/source-sha256.txt

ls -lah .zodiac-deploy
echo "Created .zodiac-deploy artifacts. Review them locally/VPS before any commit or deployment."