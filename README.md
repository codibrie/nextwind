# Welcome to 🍃 [Nextwind](https://github.com/en3sis/nextwind)!

Discover a robust full-stack web development starter project built with TypeScript, Next.JS, Supabase, PostgreSQL, TailwindCSS, and Zustand! This project offers a powerful foundation for building modern web applications with ease, providing developers with optimized performance, easy-to-use APIs, customizable styling, and simplified state management.

[Zustand](https://github.com/pmndrs/zustand) | [TailwindCSS](https://tailwindcss.com/) | [Next-Auth](https://next-auth.js.org/) | [Supabase](https://supabase.io/)

## 🧬 General

### Features:

- Next 13 with the option to enable/disable the app directory.
- GitHub Authentication implemented with Next-Auth and Supabase, providing a secure and streamlined authentication process.
- Absolute Imports and Module Path Aliases for Next.js, improving code readability and reducing import complexity.
- Zustand Initial State Example, providing a clear example of how to use Zustand for state management.
- Prettier & ESLint Rules, ensuring a consistent and clean codebase.
- Easy Deployment with Docker or Vercel, enabling fast and easy deployment options for your project.
- Uses Yarn for package management, providing a fast and reliable package manager for your project.

---

## 🪬 Getting Started

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

### Supabase

We're using Supabase with Next-Auth for authentication and authorization.

For the integration, check and following the steps in Next-Auth documentation: https://next-auth.js.org/adapters/supabase

After setting up your Supabase instance and configuration, generating types for your database is an important step towards improving your development workflow. By generating types, you can ensure type safety and catch potential errors earlier in the development process.

To generate types for your Supabase database, follow these steps:

1. Open your terminal and navigate to the root directory of your project.
2. Run the following command:

```bash
supabase gen types typescript --project-id "YOUR_INSTANCE" --schema public > types/database.types.ts
# Replace "YOUR_INSTANCE" with your actual Supabase instance ID.
```

3. This command will generate TypeScript types for all the tables in the public schema of your Supabase database, and output them to the `types/database.types.ts` file. You can modify the command to include other schemas as needed.
4. Import the generated types in your code using the following syntax:

```typescript
import { Database } from '@types/database.types.ts'
```

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
