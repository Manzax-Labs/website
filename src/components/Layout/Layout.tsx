import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      <main className="flex-grow-1" style={{ paddingTop: '76px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
} 