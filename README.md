# Welcome to 🍃 [Nextwind](https://github.com/en3sis/nextwind)!

TypeScript base project with Next.JS as React framework, Supabase with PostgreSQL as database, TailwindCSS as style library, and Zustand for state-management.

## 🧬 General

### Features:

- Next 13 with app directory (BETA)
- GitHub Auth with Next-Auth and Supabase
- Absolute Imports and Module path aliases for Next.js
- Initial state example for Zustand
- Prettier & ESLint rules

### Other dependencies:

- Zustand: https://github.com/pmndrs/zustand
- Tailwind CSS: https://tailwindcss.com/
- Next-Auth: https://next-auth.js.org/
- Supabase: https://supabase.io/

---

## 🪬 Getting Started

### Supabase

We're using Supabase with Next-Auth for authentication and authorization.

For the integration, check and following the steps in Next-Auth documentation: https://next-auth.js.org/adapters/supabase

Once you have your Supabase Instance and configuration, you can [generate the types](https://supabase.com/docs/guides/database/api/generating-types) for your database:
`supabase gen types typescript --project-id "YOUR_INSTANCE" --schema public > types/database.types.ts`

### Development

```bash
# Install dependencies
yarn install
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
