# Dr. Kimberly Word — Holding Page

A Next.js (App Router) holding page for Dr. Kimberly Word. Visitors can join an invitation list; their email is added to a Resend Audience and an invitation email is sent automatically.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Resend (email + audiences)
- Zod (form validation)

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

## Before Deploying to Vercel

1. Replace the placeholder assets in `public/`:
   - `hero-placeholder.svg` — high-resolution photo of Dr. Kimberly Word
   - `logo.svg` — the K/W monogram logo
   - `sparkle.svg` — the gold sparkle graphic

2. Add the environment variables from `.env.local` to the Vercel project settings.

3. Verify your Resend sending domain and update `EMAIL_FROM` to a custom address (e.g., `Dr. Kimberly Word <hello@drkimberlyword.com>`).

## Customization

- Colors and fonts are configured in `src/app/globals.css` and `src/app/layout.tsx`.
- Page sections live in `src/app/sections/`.
- The email template is in `src/app/actions.ts`.
