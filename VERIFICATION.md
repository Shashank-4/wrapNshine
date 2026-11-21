# Verification

Verified locally on 28 September 2026 with Next.js 16.3.6.

- `npm run lint`: passed.
- `npm run build`: passed; homepage and icon prerendered.
- `npm run typecheck`: passed.
- Dependency installation audit: zero reported vulnerabilities.
- Browser checks at desktop (1440 × 900) and mobile (390 × 844): no horizontal overflow.
- Entry dialog dismisses and stays dismissed after reload in the same tab session.
- Full-screen navigation opens, closes and follows section anchors.
- Service selection updates the expanded panel and corresponding image.
- Project preview opens with the correct content; its enquiry link closes the dialog and reaches the form.
- Enquiry form generates a correct local brief with demo values; no submission is sent.
- Lenis is active in the browser; tested flows produced no browser console warnings or errors.

Reduced-motion handling is implemented in CSS and the Lenis setup, but OS-level reduced-motion mode was not toggled during these checks.

The R2 upload/admin backend and enquiry delivery remain intentionally unconfigured. See README.md.
