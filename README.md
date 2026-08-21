# Dr. Kimberly Word — Holding Page

A responsive Next.js (App Router) holding page for Dr. Kimberly Word. Visitors can join an invitation list; their email is added to a Resend Audience and an invitation email is sent automatically.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Resend (email + audiences)
- Zod (form validation)

## Page Structure

The site is a single-page layout with three sections:

1. **Hero** — Blue banner with K/W monogram logo, hero photo of Dr. Kimberly Word, overlapping "Dr. KIMBERLY" / "WORD" headings, and "Something Beautiful is Coming" taglines with gold sparkle accents.
2. **Message** — Ivory-light section with a personal message about the upcoming space.
3. **Email Form** — Ivory section with an email signup form, "Join the List" button, success modal, sparkle accent, and copyright footer.

## Responsive Design

The layout adapts across three breakpoints:

- **Mobile** (below 700px) — Logo centered at top, photo with overlapping headings, single tagline with sparkle below the photo, compact vertical layout.
- **Tablet** (700px–1023px) — Logo top-left, side taglines with sparkles flanking the photo, vertically centered layout at ~70vh.
- **Desktop** (1024px+) — Full-height hero, larger logo, wider photo, side taglines positioned further from center.

## Assets

- `public/hero_latest.jpg` — Cropped hero photo (860×1080)
- `public/logo.svg` — K/W monogram with horizontal divider
- `public/sparkle.svg` — Eight-pointed gold starburst
- `src/app/icon.svg` — Favicon (K/W monogram on blue background)

## Colors

| Token | Hex | Usage |
|---|---|---|
| `hero-blue` | `#185D8A` | Hero section background |
| `gold` | `#C9A227` | Headings, logo, accents |
| `gold-light` | `#D8B84A` | Taglines, button gradient |
| `ivory-light` | `#F9F6F0` | Message section background |
| `ivory` | `#F2EDE5` | Email form section background |
| `forest` | `#3D6B4F` | Form labels, microcopy |
| `forest-muted` | `#4A7C59` | Footer text |

## Fonts

- **Cormorant Garamond** (serif) — Headings, taglines, message text
- **Inter** (sans-serif) — Form labels, buttons, body copy

Configured via Google Fonts in `src/app/layout.tsx` and mapped to Tailwind's `font-serif` / `font-sans` in `src/app/globals.css`.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` from the example:

```bash
cp .env.local.example .env.local
```

3. Fill in the environment variables:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_AUDIENCE_ID=aud_xxxxxxxxxxxx
EMAIL_FROM="Dr. Kimberly Word <onboarding@resend.dev>"
```

> **Note:** For Resend to send from a custom domain, you must verify the domain in the Resend dashboard. Until then, you can test with a `@resend.dev` address.

4. Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

## Building

```bash
npm run build
```

## Linting

```bash
npm run lint
```

## Deploying to Vercel

1. Add the environment variables from `.env.local` to the Vercel project settings.

2. Verify your Resend sending domain and update `EMAIL_FROM` to a custom address (e.g., `Dr. Kimberly Word <hello@drkimberlyword.com>`).

3. Deploy — the site is statically generated with a single `/` route and a server action for email signup.

## Customization

- **Colors and fonts** — `src/app/globals.css` and `src/app/layout.tsx`
- **Page sections** — `src/app/sections/Hero.tsx`, `Message.tsx`, `EmailForm.tsx`
- **Email template** — `src/app/actions.ts` (inline HTML)
- **Success modal** — `src/app/components/SuccessModal.tsx`
- **Sparkle component** — `src/app/components/Sparkle.tsx`
