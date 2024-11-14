// app/layout.tsx

'use client';  // Marking this as a Client Component

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import HeaderPanel from '@/components/HeaderPanel';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  return (
    <SessionProvider>
      <div className="layout">

        <Header  />
        <HeaderPanel />
        {children}
        <Footer />

      </div>
    </SessionProvider>
  );
}
