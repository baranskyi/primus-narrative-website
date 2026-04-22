# Primus Narrative — Website

Next.js 16 (App Router) website for **Primus Narrative**, a Dubai-based
consultancy in marketing strategy, public and corporate communications, and
digital growth.

Registered in the **Meydan Free Zone, Dubai, UAE**.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS 3
- TypeScript 5
- Fonts: Fraunces (serif), Inter (sans), JetBrains Mono

## Setup

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
npm run start
```

## Contact form

The form posts JSON to `/api/contact`.

- If the environment variable `CONTACT_WEBHOOK_URL` is set, submissions are
  forwarded there (use Zapier, Make, Slack webhook, or your own endpoint).
- Otherwise, submissions are appended to `.data/contact-submissions.jsonl`
  (local only, not committed).

## Structure

```
app/
  layout.tsx           Root layout, fonts, metadata
  page.tsx             Home page composition
  globals.css          Tailwind entry + design tokens
  data.ts              Services, founders, capability tags
  api/contact/route.ts Contact form endpoint
components/
  Nav.tsx
  Hero.tsx
  Marquee.tsx
  Services.tsx
  Studio.tsx
  Founders.tsx
  Location.tsx
  Contact.tsx
  ContactForm.tsx
  Footer.tsx
```

## Design

Editorial, warm-neutral aesthetic inspired by the Claude Design "CORA" design
system: cream canvas, deep ink type, ochre accent, Fraunces display serif,
hairline rules and generous whitespace. CORA brand content is **not** used.

## Founders

- [Slava Baranskyi](https://www.linkedin.com/in/baranskiy/) — Founding Partner, Marketing & Growth
- [Anna Pavlova](https://www.linkedin.com/in/anna-pavlova-08001731/) — Founding Partner, Strategic Communications
