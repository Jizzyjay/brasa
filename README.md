# Brasa

A premium food-delivery landing page for a fictional Lagos kitchen. Built as a frontend portfolio piece with Next.js App Router, TypeScript, and Tailwind CSS.

The brand, copy, and layout are original. The page takes visual cues from a food-delivery composition (hero photography, floating stats, category row, dish grid) without copying a live product.

## Features

- Sticky floating navbar with search, bag, and a full-screen mobile menu
- Hero with primary/secondary CTAs and floating rating, delivery, and dish cards
- Filterable menu with naira pricing and add-to-bag
- Cart sheet with quantity controls
- Promo, how-it-works, about, reviews, closing CTA, and footer newsletter
- Motion (Framer Motion) springs, press feedback, and reduced-motion support

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- TypeScript
- Tailwind CSS v4
- [Motion](https://motion.dev) (`motion/react`)
- [Lucide React](https://lucide.dev) icons
- Unsplash photography via `next/image`

## Getting started

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If that port is already in use, Next.js will pick the next one (often `3001`).

```bash
npm run build
npm start
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
app/
  page.tsx          # Landing page composition
  layout.tsx        # Fonts, metadata, providers
  globals.css       # Design tokens and base styles
  icon.svg          # Brasa favicon
components/         # Page sections and shared UI
lib/
  data.ts           # Dishes, categories, testimonials
  types.ts
  motion.ts         # Spring presets
```

Menu items, categories, and reviews live in `lib/data.ts`. Interactive pieces (nav, cart, search, add-to-bag) are client components; the page itself stays a Server Component.

## Notes

Brasa is a demo brand, not a real restaurant. Orders, the newsletter, and social links do not process live payments or signups.

Food images load from `images.unsplash.com` (allowed in `next.config.ts`), so the first visit needs a network connection.
