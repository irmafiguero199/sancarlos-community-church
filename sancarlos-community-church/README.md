# San Carlos Community Church — Website

Official website of **San Carlos Community Church**, a registered 501(c)(3) nonprofit organization (EIN 27-3389686), PO Box 131598, Tyler, TX 75713-1598. Email: admin@sancarloscommunitychurch.bond

Built with **React 18 + Vite + Tailwind CSS + React Router DOM + React Helmet Async + Lucide React**.

## Quick start

```bash
npm install
npm run dev      # local development
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Deploy

Any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or your own server):
build output is the `dist/` folder. Point the domain `www.sancarloscommunitychurch.bond` to your host.

## Before submitting to Google Workspace for Nonprofits

1. Replace the value of `google-site-verification` in `index.html` with the code from Google Search Console.
2. Verify every fact on the site (dates, names of board members, partner organizations, impact numbers) and adjust them to the real records of the church.
3. Make sure the domain DNS points to this site and that `https://www.sancarloscommunitychurch.bond` loads without errors.
4. The EIN (27-3389686) appears in the header, footer, About, Contact, Registration Information, Donate, Privacy Policy and Terms pages.

## Structure

- `public/` — static assets: sitemap, robots, manifest, 404 page, images
- `src/components/` — Header (top bar with EIN + address), Footer, Hero, Newsletter, etc.
- `src/pages/` — 14 pages including the critical Registration Information page
- `src/seo/OrganizationSchema.jsx` — Schema.org NGO JSON-LD with taxID
