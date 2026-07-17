import React from 'react';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
  title: "Stavby Novák | Realizace a rekonstrukce staveb",
  description: "Kompletní stavební činnost, rodinné domy na klíč, rekonstrukce a hrubé stavby s důrazem na kvalitu.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f1f5f9', color: '#334155', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <header style={{ backgroundColor: '#1e293b', color: '#fff', position: 'sticky', top: 0, zIndex: 1000, borderBottom: '4px solid #f97316', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', textDecoration: 'none', letterSpacing: '-0.5px', textTransform: 'uppercase' }}>
              Stavby <span style={{ color: '#f97316' }}>Novák</span>
            </Link>
            <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
              <Link href="/" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '600' }}>Domů</Link>
              <Link href="/sluzby" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '600' }}>Služby</Link>
              <Link href="/reference" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '600' }}>Reference</Link>
              <Link href="/o-nas" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '600' }}>O nás</Link>
              <Link href="/kontakt" style={{ backgroundColor: '#f97316', color: '#fff', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Kontakt</Link>
            </nav>
          </div>
        </header>

        <div style={{ flex: 1 }}>
          {children}
        </div>

        <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '40px 20px', marginTop: '60px', borderTop: '1px solid #334155', fontSize: '0.875rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
              <div>
                <strong style={{ color: '#fff', fontSize: '1.1rem', textTransform: 'uppercase' }}>Stavby Novák</strong>
                <p style={{ marginTop: '5px', color: '#cbd5e1' }}>Spolehlivý partner pro vaši stavbu od základů po střechu.</p>
              </div>
              <div style={{ display: 'flex', gap: '25px' }}>
                <Link href="/sluzby" style={{ color: '#94a3b8', textDecoration: 'none' }}>Služby</Link>
                <Link href="/reference" style={{ color: '#94a3b8', textDecoration: 'none' }}>Reference</Link>
                <Link href="/kontakt" style={{ color: '#94a3b8', textDecoration: 'none' }}>Kontakt</Link>
              </div>
            </div>
            <hr style={{ border: 0, borderTop: '1px solid #1e293b', margin: '10px 0' }} />
            <p style={{ textAlign: 'center', margin: 0, fontSize: '0.75rem', color: '#64748b' }}>
              &copy; {new Date().getFullYear()} Stavby Novák. Všechna práva vyhrazena. | Realizace staveb s garancí kvality.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}