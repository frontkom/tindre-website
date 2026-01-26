# Agent instructions (Tindre website)

## Conventions (file names)
- Prefer a single root `AGENTS.md` for cross-tool agent instructions (widely supported by Copilot/Cursor/Codex).
- Tool-specific alternatives exist (e.g. `.github/copilot-instructions.md`, `.cursor/rules/*`), but keep guidance centralized here unless you truly need tool-specific behavior.

## Project overview
- Next.js App Router site with **URL-based locales**: `/no/...` and `/en/...`.
- Locale redirect lives in `proxy.ts` (root `/` redirects to a locale).

## Routing + i18n (must follow)
- **All routes live under** `src/app/[lang]/...` and must support both locales via `generateStaticParams`.
- **Never re-introduce non-localized routes** under `src/app/*` (outside `[lang]`).
- **All user-facing strings must be translated**:
  - Add keys in `src/i18n/messages.ts` (group by feature, e.g. `nav.*`, `footer.*`, `pages.pricing.*`).
  - In server components/pages: read `lang` from `params` and use `getMessages(lang)`.
  - In client components: do **not** import server-only APIs. Pass `lang` and any translated strings as props.

## Components (when to extract)
- Reuse shared UI through `src/components/*` when it’s used in 2+ places or is a “design primitive”.
- Keep layout chrome in components:
  - Header: `src/components/SiteHeader.tsx`
  - Footer: `src/components/SiteFooter.tsx`
- Use the shared button:
  - `src/components/Button.tsx` is the only source of truth for button styling.

## Styling / theming (must follow)
- Tailwind CSS v4.
- Fonts:
  - Main font: **DM Sans** (via font variables in `src/app/[lang]/layout.tsx`)
  - Headings (`h1..h6`): **Crimson Text** (set in `src/app/globals.css`)
- Buttons:
  - Rounded (`rounded-full`), `text-sm` (14px), `font-semibold`, `tracking-tight`, **no uppercase**.
  - Demo buttons use `withArrow` (arrow is smaller and slightly lowered).

## Validation
- Run `npm run build` after meaningful changes.
- Keep server/client boundaries clean (don’t import `next/headers` or other server-only modules into client components).

