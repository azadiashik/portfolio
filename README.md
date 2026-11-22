# Ashikul portfolio: quick guide
1. Run `npm install` then `npm run dev` to preview at http://localhost:3000
2. Update text: open `lib/content.ts` (experience, skills, certifications, contact, domain `url`). Or manage Projects in Sanity (see below).
3. CV: replace `public/Md_Ashikul_Islam_CV.pdf` with a new PDF of the same name.
4. Photo: not shown yet. Tell Claude to add the photo slot, or put `photo.jpg` in `public/`.
## Deploy
GitHub: create account, New repository, upload this folder's files. Vercel: sign in with GitHub, Add New Project, pick the repo, Deploy. Every GitHub change redeploys. Domain: Vercel project, Settings, Domains.
## Sanity (CMS for projects)
Create a free project at sanity.io, copy `sanity/` into a studio (`npm create sanity@latest`) using these schemas, paste your project ID into `sanity.config.ts`, then add `NEXT_PUBLIC_SANITY_PROJECT_ID` in Vercel, Settings, Environment Variables. Without it, the site uses `lib/content.ts`.
