# Bond Call — Marketing Website

Production-ready Next.js 14 (App Router) + Tailwind CSS marketing site.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — Home (hero, trusted-by, features, how it works, why choose, pricing, testimonials, FAQ, CTA)
- `/features`
- `/how-it-works`
- `/pricing`
- `/safety`
- `/faq`
- `/contact`

## Structure

```
src/
  app/            → routes (one folder per page)
  components/      → reusable UI (Navbar, Footer, Button, FeatureCard, PhoneMockup, Faq, BondLine, SectionHead, Logo)
  lib/content.ts   → shared copy/data (features, pricing, testimonials, FAQ)
```

## Design System

**Colors**
| Token | Hex |
|---|---|
| void (bg) | #07070C |
| surface | #0F0F17 |
| surface2 | #13131D |
| edge (border) | rgba(255,255,255,.08) |
| violet | #8B5CF6 |
| azure | #3B82F6 |
| ink (text) | #F5F5F7 |
| mist (secondary text) | #9497A6 |

**Typography**
- Display: Space Grotesk (headings)
- Body/UI: Inter
- Data/mono: JetBrains Mono (timers, stats)

**Spacing**: 8px base scale (8/16/24/32/48/64/96/128), all encoded as Tailwind utilities.

**Grid**: 12-col @1440 (80px margin), 8-col tablet (48px margin), 4-col mobile (20px margin) — implemented via `.wrap` max-width container + Tailwind grid utilities per breakpoint (`max-lg`, `max-md`, `max-sm`).

**Signature element — "Bond Line"**: an animated two-node waveform (see `BondLine.tsx`) used as a section divider; represents two people connecting on one live line. Recurs in the hero phone call UI and feature icon treatments.

**Components** are all in `src/components`, typed, and reusable across pages (e.g. `FeatureCard`, `SectionHead`, `Button`, `Faq`).

## Accessibility

- Visible focus rings (`:focus-visible`) on all interactive elements
- `prefers-reduced-motion` respected globally
- Color contrast tuned against WCAG AA on dark backgrounds (ink/mist text ratios checked against surface/void backgrounds)

## Notes

- Avatar/testimonial images use pravatar.cc placeholders — swap for real assets before launch.
- Replace `mailto:` links and form action in `/contact` with your real backend/email service.
- Extend `tailwind.config.ts` if you add new design tokens — colors/spacing are centralized there.
