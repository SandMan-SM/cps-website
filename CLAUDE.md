# Clinical and Professional Solutions — Utah

## Brand

- Name: **Clinical and Professional Solutions**
- Domain: `https://cpsutah.org`
- Purpose: a Utah-wide solutions navigation hub for health, home, business, legal and financial needs, families, education, careers, technology, and local resources.
- Partner statement is user-supplied: partnered with Utah Main Street to point people in the right direction and help them find the best possible services for their needs.
- Do not inherit the former organization's offices, phone numbers, email addresses, history, founder, awards, provider counts, credentials, or insurance claims.
- Public contact is through the solution-request form. `sitanim8@gmail.com` is the internal owner notification recipient, not a public contact address.
- Keep stable technical `cps` tenant, workflow, and table identifiers.

## Design

- Original Open Path mark: `/brand/open-path-mark.png`; wordmark is `components/BrandLogo.tsx`.
- Approved palette is red/burgundy and charcoal with warm white backgrounds.
- Existing Tailwind `teal-*` token names map to the red palette.
- Primary CTA: `#A1252B`; accent: `#AD3036`; dark: `#7F1C22`.
- Hero: original Utah community illustration `/brand/utah-solutions-hero.png`.
- Main solution cards use clean category artwork; representative journeys use new generated imagery.
- No legacy swirl logos, contact links, office maps, red texture assets, or blue brand palette.
- All generated scenes are illustrative and must never be presented as real clients, businesses, offices, or testimonials.

## Implementation

Next.js, TypeScript, React, and Tailwind. Keep layouts responsive and keyboard-accessible.
Use CSS transitions with reduced-motion support; no animation libraries.
Use the eight-point spacing scale for new layout work.

## Content and SEO

- Primary catalogue: 12 broad solution areas under `/solutions/[solution]`.
- Previous `/services/*` paths redirect to rebranded solution guidance pages.
- City pages describe community context and navigation, never office locations.
- Use truthful Organization, WebPage, Service, City, Breadcrumb, and FAQ schema.
- No LocalBusiness or MedicalClinic claims without verified new facts.
- Keep metadata, consent, manifest, icons, notifications, and plain-text summary consistent.

## Forms and release

- Consent: `cps-contact-consent-v2`.
- Hardened receiver: `/api/inbound/cps/appointments`; technical path remains stable.
- Development bridge is fixed to `127.0.0.1:3002`, development-only, and requires a shared local secret.
- Visible success requires confirmed database/CRM linkage and required notifications.
- Never use real test personal data or send test emails without authorized values.
- Do not modify local secret files.
- **Deployment remains paused until the user explicitly requests it.**
- Follow the user-supplied production-form release gate and federation protocol before any deploy or migration.
- Check TypeScript, production build, responsive browser behavior, and old identity/contact references before handing off.
