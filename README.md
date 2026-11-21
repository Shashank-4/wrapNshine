# wrapNshine

A Next.js App Router / React / TypeScript automotive studio site with Lenis smooth scrolling. The layout takes inspiration from Forge Automotive's cinematic pacing, dark editorial design, expressive serif type, entry screen, image sections and full-screen navigation. All written copy and the wrapNshine wordmark are original. No Forge assets or source code are included.

## Run locally

Requires Node.js 20.9+ and npm (Node.js 22 LTS or newer recommended).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview:

```sh
npm run build
npm start
```

Verification commands: `npm run lint`, `npm run typecheck`, `npm run build`.

## Structure

- `src/app/page.tsx`: page composition, editorial sections.
- `src/app/globals.css`: design tokens, layout, responsive breakpoints, animations.
- `src/components/`: header/navigation, entry screen, media, scrolling, service accordion, project dialog, enquiry form and footer.
- `src/content/site.ts`: typed image catalogue, navigation, services, principles and gallery records.
- `src/lib/media.ts`: stable image contract and local/R2 URL resolution.
- `public/images/`: locally served placeholder photographs; see `ASSETS.md`.

Fonts are self-hosted through Fontsource. No browser request to Google Fonts is required. All core content is server rendered. Motion respects reduced-motion preferences; native scrolling works when Lenis is disabled. Native dialogs provide modal focus handling and Escape dismissal. The entry screen appears once per browser tab session and uses session storage only; no analytics or tracking cookies are installed.

## Replacing imagery / preparing for R2

Each `MediaAsset` has an immutable `id`, fallback `src`, descriptive `alt`, dimensions, optional `position`, and optional `r2Key`. Every displayed image goes through `Media` and `mediaUrl()`.

1. Upload an image to an R2 bucket exposed through your public asset delivery domain.
2. Set `NEXT_PUBLIC_MEDIA_BASE_URL=https://media.your-domain.example` in `.env.local`.
3. Add `r2Key: 'images/your-image.webp'` to its record in `src/content/site.ts` and update its alt text and dimensions.
4. Restart development or rebuild production. Without a delivery URL or key the local file remains in use. An absolute public HTTPS URL can also be set directly as `src`.

Images currently use direct delivery (`unoptimized`) so both local files and future R2 URLs work without an open Next image-host allowlist. Generate suitably sized WebP/AVIF variants in the future upload pipeline and serve them from R2; enable Next image optimization with an explicit hostname allowlist if desired.

The future admin portal should persist these same records in a database or content store. R2 stores the image bytes, not the editable service/project records. Keep draft/published records separate. A protected server endpoint should authenticate the administrator, validate MIME type, extension and size, generate an immutable object key, then issue a short-lived presigned upload URL. Validate the completed upload before saving/publishing the record, and revalidate the public page. Never expose R2 credentials in browser code. Environment placeholders are provided in `.env.example`; no credentials or upload API are included yet.

Cloudflare documentation: https://developers.cloudflare.com/r2/objects/upload-objects/

## Before going live

- Replace placeholder photos and concept projects with owned business imagery and genuine work.
- Connect the enquiry form to an actual inbox/CRM or server-side handler. Currently it generates a local copyable brief and explicitly does **not** send or store submissions.
- Add verified business contact details, privacy/legal content appropriate to the final service, and domain-specific metadata.
- Remove the deliberate `noindex` setting in `src/app/layout.tsx` when ready for public indexing.
- The admin portal, authentication, R2 upload flow and production deployment are future integration work, not enabled demo endpoints.
