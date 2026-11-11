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
- Fonts: Cormorant Garamond (headings), Jost (text) via `next/font`

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
  globals.css          Tailwind entry + brand tokens (--pn-*)
  data.ts              Services and founders
  opengraph-image.tsx  1200×630 social card in brand colours
  icon.png             PN monogram favicon (+ apple-icon.png)
  api/contact/route.ts Contact form endpoint
components/
  Nav.tsx
  Logo.tsx             Text wordmark PRIMUS NARRATIVE
  Hero.tsx
  SectionIntro.tsx     Label + heading + lead block
  Services.tsx
  Studio.tsx
  Founders.tsx
  Location.tsx
  Contact.tsx
  ContactForm.tsx
  Footer.tsx
```

## Design

Follows **Primus Narrative Brand Guidelines 2026** (Google Drive ›
Primus Narrative Brand 2026; `04 Website` holds the reference homepage and
`tokens.css`).

- Colours: burgundy `#542536`, cream `#F4EFE7`, ice `#CDE5EF` (colour blocks
  only, never text on light), ink `#1F1A1C`, taupe `#6B6159`, line `#D8CFC4`.
  Tokens live in `app/globals.css` and are mapped to Tailwind colours.
- Type: Cormorant Garamond 500 for headings, 700 for the accent word; Jost for
  everything else. No italics, no monospace labels.
- Square corners, one burgundy button per screen, partner portraits in black
  and white at 4:3.

## Founders

- [Slava Baranskyi](https://www.linkedin.com/in/baranskiy/) — Founding Partner, Marketing & Growth
- [Anna Pavlova](https://www.linkedin.com/in/anna-pavlova-08001731/) — Founding Partner, Strategic Communications
