# SP-CHAT-001 Shraddha in the existing Component Lab

Source: sabpuja/theme lab-source. Public lab after manual deployment: https://lab.srv2005300.hstgr.cloud/theme/components/chatbot/.

Design source: https://lab.srv2005300.hstgr.cloud/theme/foundations/ and sabpuja/design-system. Approved emblem asset is already available at /theme/assets/images/sabpuja-chat-emblem.svg and was verified identical to the design-system official emblem.

The component is scripted-only and has no model/Shopify/customer-data connection. Demo links are inert and cannot be used as live navigation. Preserve 8 states, 5 page contexts, 3 languages, focus/reduced motion and compact launcher. The approved SP-CHAT-001C is a 52px official Sabpuja-emblem speech bubble with a small saffron first-visit attention dot and hover/focus tooltip. The decorative dot does not mean unread messages and disappears after the visitor opens the preview chat. Production unread status must be backed by real message state. The approved SVG remains unmodified.

Deployment: use the reviewed manual-only runbook in sabpuja/Process-and-Workflows/workflows/deployment/publish-component-lab-to-vps/WORKFLOW.md after approval and merge to lab-source. No GitHub Actions or Shopify live theme changes.

QA remaining after merge: browser inspection of 320px through desktop, awkward widths, 200% zoom, Hindi and Hinglish, keyboard Escape/Tab/focus, reduced motion, page scroll, all states, and manual Hostinger deployment/HTTP verification.
