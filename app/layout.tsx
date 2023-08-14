import { FC } from 'react';
import { Metadata } from 'next/head';
import ClientSessionProvider from '../components/auth/session-provider';
import Menu from '@/components/menu';
import { getSession, Session } from '../path-to-your-auth-utils'; // Import the actual path to your auth utilities
import '../global.css';

const metadata: Metadata = {
  title: '🍃 Nextwind',
  description:
    'Introducing a powerful and efficient full-stack web development starter project built with TypeScript, Next.JS, Supabase, PostgreSQL, TailwindCSS, and Zustand!',
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const session = await getSession();

  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className="bg-[#081113] text-gray-300">
        <ClientSessionProvider session={session}>
          <Menu />
          <div className="container grid mx-auto max-w-5xl h-screen">{children}</div>
        </ClientSessionProvider>
      </body>
    </div>
  );
};

export default Layout;
