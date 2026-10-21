# Sabpuja protected Shopify theme publication
# Does not publish until the read-only release gate passes and the operator confirms.
# No GitHub Actions, no Shopify theme modification during validation.
param(
  [Parameter(Mandatory = $true)]
  [ValidatePattern('^\d+$')]
  [string] $ThemeId
)
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$guardScript = Join-Path $PSScriptRoot 'account-routing-guard.mjs'

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  throw 'Node.js is not available. Publication blocked.'
}
if (-not (Get-Command shopify -ErrorAction SilentlyContinue)) {
  throw 'Shopify CLI is not available. Publication blocked.'
}
if ([string]::IsNullOrWhiteSpace($env:SHOPIFY_ADMIN_API_ACCESS_TOKEN)) {
  throw 'Set SHOPIFY_ADMIN_API_ACCESS_TOKEN in this PowerShell session. The guard cannot verify the registered account extension without it. Publication blocked.'
}

Write-Host 'Checking remote unpublished theme and Sabpuja dashboard routing...'
& node $guardScript --theme-id $ThemeId
if ($LASTEXITCODE -ne 0) {
  throw 'Sabpuja account routing release gate FAILED. Theme will not be published.'
}
Write-Host 'Account routing gate PASSED. Complete other release QA before publishing.'
$confirmation = Read-Host 'Type PUBLISH to publish this checked theme'
if ($confirmation -cne 'PUBLISH') {
  throw 'Publication cancelled. No theme was published.'
}

# Shopify CLI performs its normal publication confirmation; do not use --force.
& shopify theme publish --theme $ThemeId --store ghf6bp-fy.myshopify.com
if ($LASTEXITCODE -ne 0) {
  throw 'Shopify CLI reported publication failure.'
}
Write-Host 'Shopify CLI publication command completed. Verify the active theme in Shopify Admin.'
