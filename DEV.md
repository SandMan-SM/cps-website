# DEV.md — CPS Website

## Stack
Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Vercel  
Domain: **psychandcustodyevaluations.com**  
Repo: `github.com/SandMan-SM/cps-website`

## Node Version
Node 20 LTS — locked via `.nvmrc`. If you use nvm: `nvm use` from the repo root.

## Dev Workflow

| Command | When to use |
|---------|-------------|
| `npm run dev` | Local hot-reload dev server (fast iteration) |
| `npm run build` | Full production build — must pass before any deploy |
| `npm run typecheck` | TypeScript check only, no emit — run before pushing |
| `npm run preview` | Force-push HEAD → `dev` branch → Vercel preview URL |
| `npx vercel --prod --yes` | Deploy to production (run `build` first) |
| `npx playwright test` | Screenshot tests at 375/768/1440px |

## Preview Workflow (stops local-dev freezes being a blocker)
```bash
npm run preview
```
Force-pushes your current HEAD to the `dev` branch on origin. Vercel automatically picks it up and builds a preview deployment. Check the Vercel dashboard (`cps-website` project → Deployments) for the live URL. The `dev` branch is created automatically on first run.

You can push from any branch state — WIP, mid-feature, whatever — without touching `main`.

## Deploy to Production
```bash
npm run build          # must pass clean
export PATH="/opt/homebrew/bin:$PATH" && npx vercel --prod --yes
```

## CRITICAL Rules (from CLAUDE.md — do not violate)
1. **No animation libraries** — no framer-motion, AOS, or GSAP. CSS `transition-colors` only.
2. **No Tailwind built-in colors** — all colors use CSS variables: `bg-[var(--cps-blue)]`, etc.
3. **8pt spacing grid only** — use `p-2/4/6/8/10/12/16`. Never `p-3`, `p-5`, `gap-3`, `mb-5`, etc.

## Pre-push Hook
A `.git/hooks/pre-push` hook runs `npm run typecheck` automatically before every push. If TypeScript has errors, the push is blocked. Fix errors, then retry.

To skip in an emergency (not recommended):
```bash
git push --no-verify
```

## Environment Variables
Set in Vercel dashboard. Never commit `.env*` files.  
Key vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO_EMAIL`, `NEWSLETTER_TO_EMAIL`, `NEXT_PUBLIC_OMNILEADS_API`

## DNS Checklist (psychandcustodyevaluations.com)
Verify in registrar / Cloudflare:
- [ ] MX records exist (so `cps@wecanhelpout.com` can receive mail)
- [ ] SPF record published
- [ ] DKIM key published
- [ ] DMARC record at minimum `p=quarantine`
- [ ] Google Search Console ownership verified
