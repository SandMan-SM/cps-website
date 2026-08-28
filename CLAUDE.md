# CLAUDE.md — CPS Utah Website

**READ THIS BEFORE TOUCHING ANYTHING.**

## Brand & Identity
- **Brand:** Comprehensive Psychological Services (CPS) Utah
- **Domain:** `https://www.cpsutah.com`
- **Primary CTA button:** `.cps-button-art` class (burgundy with CPS red texture)
- **Color system:** Tailwind `teal-*` (warm clinical burgundy/rose range) + `sand-*` neutrals
  - Primary CTA: `bg-band` / `.cps-button-art` = `#8f1f24` burgundy
  - Accent: `teal-600` = `#ad3036` warm red
  - Background: `#fffdfb` warm white
  - Text: `#171112` near-black
- **Font:** System sans-serif (`var(--font-sans)`)
- **Hero:** `.hero-photo` class uses `/cps-hero.jpg` with gradient overlay
- **NO** Tailwind color utilities (`bg-blue-500`, etc.) — use CSS variables or Tailwind extended palette

## Tech Stack
- Next.js 16 (Turbopack), TypeScript, Tailwind CSS v4
- Supabase, Vercel deployment
- Playwright for E2E screenshot tests
- `nodemailer` for contact form email via SMTP

## Critical Rules

### Build & Deploy
1. `npm run build` MUST pass before any commit
2. Deploy ONLY via `git push` to Vercel — never `vercel --prod` manually
3. Never modify `.env` files — API keys live there

### Spacing (8pt grid — NON-NEGOTIABLE)
**BANNED:** `p-3, p-5, p-7, gap-3, gap-5, mb-3, mb-5, py-3.5`
**ALLOWED:** `p-2, p-4, p-6, p-8, p-10, p-12, p-16` (multiples of 8px)

### Colors — CSS Variables or Tailwind extended palette only
This project uses Tailwind's extended palette, NOT CSS variables from globals.css.
Use: `bg-teal-600`, `text-sand-500`, `bg-band`, `.cps-button-art`
Do NOT use arbitrary values like `bg-[#1f7cec]` — use the extended color tokens.

### No Animation Libraries
BANNED: `framer-motion`, `AOS`, `GSAP`. CSS transitions only:
```tsx
transition-colors
transition-all duration-300
hover:-translate-y-1 hover:shadow-cardHover
```

### Accessibility (Every Page)
- All `<button>` and `<a>` elements must have `aria-label` if no visible text
- All images must have `alt` text
- Color contrast must pass WCAG AA
- Forms must have `<label>` elements with proper `htmlFor`/`id` associations
- Dialogs must have `aria-modal`, `aria-labelledby`

### SEO (Every Service/City Page)
- `generateMetadata()` with `title`, `description`, `openGraph`, `twitter`
- JSON-LD: LocalBusiness + MedicalBusiness schema
- FAQSchema for service pages
- BreadcrumbSchema for city/service pages

## Key Routes
```
/                              → Homepage
/services/[service]            → Service pages (generateStaticParams)
/utah/[city]                   → City pages (generateStaticParams, 37 cities)
/service-area                  → Service area overview
/blog, /blog/[slug]             → Blog
/booknow                       → Booking page (BookNowPopup dialog)
/privacy, /terms               → Legal pages
```

## Components
- `Header.tsx` — Nav with logo, aria-labels on icon links
- `Footer.tsx` — Links with aria-labels
- `BookNowPopup.tsx` + `BookNowForm.tsx` — Modal booking form
- `Services.tsx` — Service cards
- `SuccessStories.tsx` — Testimonials
- `ContactSection.tsx` — Contact form → `/api/lead`

## API Routes
- `POST /api/lead` — Contact form submission
- `POST /api/subscribe` — Newsletter signup

## Playwright Tests
```bash
npx playwright test   # 45 tests: 5 pages × 3 breakpoints (mobile/tablet/desktop)
```
Tests check for console errors at domcontentloaded + 2s wait. All must pass before commit.

## Deploy Checklist
- [ ] `npm run build` passes
- [ ] No banned Tailwind spacing classes
- [ ] No TypeScript errors
- [ ] All 45 Playwright tests pass
- [ ] No console errors on key pages
- [ ] All images have alt text
- [ ] All buttons/links have aria-labels
- [ ] SEO metadata on all new pages
- [ ] JSON-LD schemas on service/city pages
- [ ] Committed and pushed to git
