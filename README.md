# Welcome to 🍃 [Nextwind](https://github.com/en3sis/nextwind)!

TypeScript base project with Next.JS as React framework, Supabase with PostgreSQL as database, TailwindCSS as style library, and Zustand for state-management.

## 🧬 General

### Features:

- Next 13 with app directory disabled for now (you can enable it)
- GitHub Auth with Next-Auth and Supabase
- Absolute Imports and Module path aliases for Next.js
- Initial state example for Zustand
- Prettier & ESLint rules

Other libraries used:
[Zustand](https://github.com/pmndrs/zustand) | [TailwindCSS](https://tailwindcss.com/) | [Next-Auth](https://next-auth.js.org/) | [Supabase](https://supabase.io/)

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
# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Production

You can deploy your application with [Vercel](https://vercel.com/) or [Docker](https://www.docker.com/)
The image build will be in `standalone` mode with a very small image size.

```bash
# Builds the image, starts the container and expose the app vía nginx
docker-compose up -d

# Stop the container
docker-compose down
```

If you need to rebuild the image, you can use the following command:
`docker-compose up -d --build webapp`
