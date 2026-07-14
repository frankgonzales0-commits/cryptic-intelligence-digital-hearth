# Cryptic Intelligence Digital Hearth

Phase One technical foundation for the official Cryptic Intelligence website.
This project intentionally contains structural placeholder content rather than
the finished homepage or final marketing copy.

## Technology

- Next.js with the App Router
- TypeScript
- Tailwind CSS
- ESLint
- pnpm
- Static-first page architecture
- Netlify-compatible build configuration

## Local development

Requirements: Node.js 20.9 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

For local metadata URLs, copy `.env.example` to `.env.local`. Keep
`NEXT_PUBLIC_SITE_ENV=preview` until a production release is approved.

## Quality checks

```bash
pnpm lint
pnpm build
```

## GitHub connection

Create a new, empty GitHub repository. Do not initialize it with a README or
license. Then run:

```bash
git add .
git commit -m "Establish Digital Hearth foundation"
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the example repository URL with the new GitHub repository URL.

## Separate Netlify preview project

To avoid replacing the existing live site:

1. In Netlify, choose **Add new project** and **Import an existing project**.
2. Connect the new GitHub repository created for this project.
3. Create a brand-new Netlify project; do not link this repository to the
   existing production site.
4. Confirm the build command is `pnpm build` and the publish directory is
   `.next`. Netlify should detect Next.js automatically.
5. Add `NEXT_PUBLIC_SITE_URL` with the new preview project's Netlify URL.
6. Keep `NEXT_PUBLIC_SITE_ENV` set to `preview` so search engines are asked not
   to index the foundation.
7. Do not attach the existing production domain.

Netlify Deploy Previews can then be enabled for pull requests in **Project
configuration → Build & deploy → Continuous Deployment → Branches and deploy
contexts**.
