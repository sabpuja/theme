# SP-CHAT-001 Shraddha in the existing Component Lab

Source: sabpuja/theme lab-source. Public lab after manual deployment: https://lab.srv2005300.hstgr.cloud/theme/components/chatbot/.

Design source: https://lab.srv2005300.hstgr.cloud/theme/foundations/ and sabpuja/design-system. Approved emblem asset is already available at /theme/assets/images/sabpuja-chat-emblem.svg and was verified identical to the design-system official emblem.

The component is scripted-only and has no model/Shopify/customer-data connection. Demo links are inert and cannot be used as live navigation. Preserve 8 states, 5 page contexts, 3 languages, focus/reduced motion and compact launcher. SP-CHAT-001D uses the owner's exact approved one-piece chat-bubble artwork with the official Sabpuja emblem, curved tail and built-in red dot. For web performance, it is encoded as a 128px transparent WebP, approx. 4.9 KB. The emblem master SVG is unchanged. Do not recreate the dot/tail in CSS or hide the dot based on chat-opening state: it is static artwork, not a factual unread-message counter. Launcher has a 64px desktop and 60px mobile tap target.

Deployment: use the reviewed manual-only runbook in sabpuja/Process-and-Workflows/workflows/deployment/publish-component-lab-to-vps/WORKFLOW.md after approval and merge to lab-source. No GitHub Actions or Shopify live theme changes.

QA remaining after merge: browser inspection of 320px through desktop, awkward widths, 200% zoom, Hindi and Hinglish, keyboard Escape/Tab/focus, reduced motion, page scroll, all states, and manual Hostinger deployment/HTTP verification.

## SP-CHAT-001E attention treatment
- Approved static artwork `assets/images/shraddha-chat-launcher-approved.webp` stays byte-for-byte unchanged. No CSS recreation of chat outline, tail or red dot.
- Soft, breathing golden `drop-shadow` halo and 5px vertical float on a slow 4.8-second cycle when idle and panel closed. Hover/focus pauses both cycles and gives a stable highlight; chat opening hides the launcher and animation.
- Respect `prefers-reduced-motion: reduce`: no keyframes or transition and a static light glow. No misleading unread-message counter, sound, intrusive banner, flashing or forced opening.
- CSS link includes a version query to prevent stale caching on GitHub Pages.
