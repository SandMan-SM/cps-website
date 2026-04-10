# CLAUDE.md — CPS Website

## What This Project Is
CPS (Comprehensive Psychological Services) is a Utah behavioral health clinic operating since 1986. This is their marketing website built with Next.js 16 + Tailwind CSS v4. Live at: psychandcustodyevaluations.com

## Stack
- **Framework**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, CSS variables (no Tailwind built-in colors)
- **Testing**: Playwright (screenshots)
- **Deploy**: `export PATH="/opt/homebrew/bin:$PATH" && npx vercel --prod --yes`

## Commands
```bash
npm run dev           # Dev server
npm run build         # Build (MUST pass before deploy)
npm run lint          # ESLint
npx playwright test   # Screenshot tests
```

## CRITICAL RULES — READ BEFORE TOUCHING ANY CODE
### 1. NO Animation Libraries
NEVER use framer-motion, AOS, or GSAP. CSS `transition-colors` / `transition-all` only.
`initial={{ opacity: 0 }}` with `whileInView` caused the entire site to go invisible. Never again.

### 2. NO Tailwind Built-in Colors
All colors use CSS variables from `app/globals.css`:
`bg-[var(--cps-blue)]`, `text-[var(--cps-gray-500)]`, `bg-[var(--cps-light)]`

### 3. ALL Spacing = 8pt Grid
Only multiples of 8px. Use: `p-2, p-4, p-6, p-8, p-10, p-12, p-16`
BANNED: `p-3, p-5, p-7, gap-3, gap-5, mb-3, mb-5, py-3.5`

## Agent Priorities (in order)
1. **Fix build** — `npm run build`, fix all errors
2. **Add missing service pages** — create individual pages for each service in `serviceCategories` array (they currently link to `/neuropsychologist-near-me`, `/adhd-evaluation-near-me`, etc. — these pages need to exist)
3. **SEO pages** — each service page needs: proper `<title>`, `<meta description>`, schema markup (LocalBusiness + MedicalBusiness JSON-LD)
4. **Contact form backend** — the contact form currently only does `setFormSubmitted(true)` — wire it to actually submit to an email or Supabase
5. **Google Maps embed** — add map embeds to the locations section for all 3 offices
6. **Accessibility** — add proper `aria-` labels, ensure color contrast ratios pass WCAG AA
7. **Playwright screenshots** — run at 375px, 768px, 1440px after any change, fix any issues
8. **Performance** — add image optimization via `next/image`, compress any large images in `public/`

## Design Rules (STRICT)
- Section padding: Hero `py-16 md:py-24`, Content `py-12 md:py-16`
- Container: `max-w-7xl mx-auto px-6 sm:px-8 lg:px-10`
- Cards: `p-6`, Grid gap: `gap-8`
- Buttons: `px-8 py-4 text-lg font-bold rounded-xl`
- All CSS variables defined in `app/globals.css` — add new ones there, never inline

## Do NOT Touch
- `.env` files
- Animation libraries — they are banned for this project
- `node_modules/`
- Built-in Tailwind color classes
