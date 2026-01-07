# ICDITSD Conference Website

A multi-language conference website built with Next.js App Router, TypeScript, TailwindCSS, and next-intl. The site supports Arabic (RTL), English, and French.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site. The default locale is `/ar`.

## Project Structure

- `app/[locale]/*` — localized routes and pages
- `messages/*.json` — translations for Arabic, English, and French
- `components/` — shared UI components
- `public/` — placeholder imagery (replace with real assets)

## Adding Real Images

1. Replace the SVG placeholders in `public/` with your own images.
2. Update `Image` components in the pages to point to your new assets.
3. Ensure alt text remains descriptive and accessible.

## Updating Content

All content is stored in the locale message files:
- `messages/ar.json`
- `messages/en.json`
- `messages/fr.json`

Edit the messages to update copy or translations.
