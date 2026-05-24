# Glow & Shine Beauty Parlour

Next.js website for [sonypalour.com](https://sonypalour.com/).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |

## Project structure

- `app/` — Next.js App Router (layout, page, global CSS)
- `components/` — React sections (Hero, Services, Booking, etc.)
- `lib/data.ts` — Site content and SEO schema
- `public/` — Static assets (hero image)
- `legacy/index.html` — Original single-file site (backup)

## Deploy

Works on [Vercel](https://vercel.com), Netlify, or any Node host:

```bash
npm run build
npm run start
```

For static export, add `output: 'export'` to `next.config.ts` if your host only serves static files.

## Deploy on Vercel

This is a **Next.js** app. Vercel must use the Next.js preset (not a static site).

1. **Project Settings → General → Framework Preset:** `Next.js`
2. **Project Settings → Build & Development Settings:**
   - **Build Command:** `npm run build` (or leave default)
   - **Output Directory:** leave **empty** (do not set `public` or `out`)
   - **Install Command:** `npm install`
3. **Root Directory:** leave empty (repo root)
4. Push to GitHub, then **Redeploy** from the Vercel dashboard

If you see `404: NOT_FOUND` with a Vercel error box, the output directory is usually wrong — clear it and redeploy.

Custom domain `sonypalour.com` should point to this Vercel project under **Settings → Domains**.
