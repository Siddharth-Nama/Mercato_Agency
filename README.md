# Mercato Agency - Landing Page Project

This repository contains the landing page I built during my internship at Mercato Agency. It's a showcase of my work developing their modern digital marketing website using Next.js, demonstrating both technical skills and business understanding. The site presents Mercato Agency's services including content creation, graphic design, video editing, SEO, and Shopify store setup.

> Note: This is an example project created as part of my internship experience at Mercato Agency.

## For non-technical visitors

- What this is: a company website that explains Mercato Agency's services, shows sample work, and provides contact forms so potential clients can get in touch.
- Who it's for: business owners, marketing managers, and anyone looking for digital marketing services.
- How to use it: browse the pages in the site (Services, About, Contact). Use the contact form to request quotes or schedule a meeting.

If you just want to view the site, you can find a deployed version (if available) at the URL provided by the agency. If you received this repository from Mercato Agency, it's mainly useful if you want to run or modify the site.

## What’s included (high level)

- Public marketing pages: home, services (SEO, content creation, graphic design, video editing, Shopify stores), FAQ, contact.
- Reusable UI components and design system using Tailwind CSS.
- Contact/email integrations and simple forms to collect leads.
- Media assets (images, logos, a sample video) in the `public/` folder.

## Tech overview (short, non-technical)

- Framework: Next.js — a modern React-based framework for building fast websites.
- Styling: Tailwind CSS — utility-first CSS for consistent styles.
- Language: TypeScript — JavaScript with helpful type checks.
- Hosting: usually deployed to platforms like Vercel or Netlify (this project includes Vercel analytics).

## Screenshots

Below are a few screenshots and visual samples from the site. These images are stored in the repository under `public/images/` and are suitable to include in the README.

- Homepage sample

![Homepage sample](/public/images/homepage.png)

## For developers / technical details

This section documents the tools, scripts, and how to run the project locally.

Project highlights

- Next.js 14 (React 18) with the App Router (the `app/` directory)
- Tailwind CSS for styling and animations (see `tailwind.config.ts`)
- TypeScript configured via `tsconfig.json`
- Several UI libraries used: Radix UI primitives, Framer Motion, Lucide icons, react-hook-form, and more.

Key files

- `package.json` — project metadata, dependencies and npm scripts.
- `next.config.mjs` — Next.js configuration (image domains configured).
- `tailwind.config.ts` and `postcss.config.js` — Tailwind and PostCSS setup.
- `tsconfig.json` — TypeScript compiler options.
- `app/layout.tsx` — root layout including fonts and analytics.
- `public/` — static assets like images, logos, and the sample `video.mp4`.

Dependencies (not exhaustive)

- Core: next, react, react-dom
- Styling: tailwindcss, postcss, autoprefixer, tailwindcss-animate
- UI / helpers: framer-motion, radix-ui packages, lucide-react, react-icons, clsx
- Forms & validation: react-hook-form, zod, @hookform/resolvers
- Utilities: nodemailer (server email), @vercel/analytics

Scripts

- dev: run a local development server
- build: compile the production build
- start: run the production server
- lint: run Next.js ESLint rules

How to run locally (developer-friendly)

1. Prerequisites

- Node.js (recommended 18+) installed on your machine
- npm (bundled with Node) or pnpm/yarn if you prefer

2. Install dependencies

```powershell
npm install
```

3. Run the dev server

```powershell
npm run dev
```

4. Open the site

Visit http://localhost:3000 in your browser.

Notes on TypeScript

- TypeScript is enabled and configured in `tsconfig.json`. The project uses strict mode for better type safety.

Environment variables and email

- The project includes `nodemailer` and a contact API route. To send emails from the local environment you will need to provide email credentials (SMTP) as environment variables. The repository's `app/api/contact` directory (or similar) handles form submissions — check there for variable names like `SMTP_USER`, `SMTP_PASS`, `EMAIL_TO`, etc.

Images and external domains

- `next.config.mjs` lists allowed external image domains (Flowbite S3 and Unsplash). If the site fails to load external images, add the domain to `images.domains`.

Deployment

- Recommended: Vercel (created by the Next.js team). The repository is ready for Vercel deployments. Link your GitHub repo to Vercel, set any required environment variables (SMTP, analytics keys), and deploy.

- Alternative hosts: Netlify (with adapter), or traditional Node.js hosts.

Troubleshooting

- If you see type errors: run `npm run dev` and read the terminal for TypeScript errors.
- If Tailwind styles don't update: ensure `postcss` and `tailwindcss` are installed and your editor has no caching issues.
- If images are blocked: confirm `next.config.mjs` contains the external domain.

Contributing

- Open a pull request with a clear description of the change.
- Keep UI and styles consistent with existing Tailwind patterns.

License & author

- This repo belongs to Mercato Agency. For license and ownership, check with the repository owner.

