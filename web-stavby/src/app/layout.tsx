import React, { type ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Veselý a Poslední domy | Realizace a rekonstrukce staveb",
  description: "Stavíme vaši budoucnost. Precizně a bez starostí.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f8fafc', color: '#334155', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* TEMNĚ MODRÁ HLAVIČKA S ORANŽOVÝM DETAILEM */}
        <header style={{ backgroundColor: '#0b192c', color: '#fff', position: 'sticky', top: 0, zIndex: 1000, borderBottom: '3px solid #f97316', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
            {/* LOGO */}
            <Link href="/" style={{ fontSize: '1.25rem', fontWeight: '900', color: '#fff', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
              VESELÝ A POSLEDNÍ <span style={{ color: '#f97316' }}>DOMY</span>
            </Link>
            
            {/* MENU */}
            <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Link href="/" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: '500', textTransform: 'uppercase', fontSize: '0.8rem' }}>Domů</Link>
              <Link href="/sluzby" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: '500', textTransform: 'uppercase', fontSize: '0.8rem' }}>Služby</Link>
              <Link href="/reference" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: '500', textTransform: 'uppercase', fontSize: '0.8rem' }}>Reference</Link>
              <Link href="/o-nas" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: '500', textTransform: 'uppercase', fontSize: '0.8rem' }}>O nás</Link>
              
              {/* ORANŽOVÉ TLAČÍTKO KONTAKT */}
              <Link href="/kontakt" style={{ backgroundColor: '#f97316', color: '#fff', padding: '8px 18px', borderRadius: '4px', textDecoration: 'none', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.8rem', border: '1px solid #fff' }}>
                KONTAKT
              </Link>
            </nav>
          </div>
        </header>

        {/* VNITŘEK STRÁNEK */}
        <div style={{ flex: 1 }}>
          {children}
        </div>

        {/* PATIČKA */}
        <footer style={{ backgroundColor: '#0b192c', color: '#94a3b8', padding: '40px 20px', marginTop: '60px', borderTop: '1px solid #1e293b', fontSize: '0.875rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
              <div>
                <strong style={{ color: '#fff', fontSize: '1.1rem', textTransform: 'uppercase' }}>Veselý a Poslední domy</strong>
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
              &copy; {new Date().getFullYear()} Veselý a Poslední domy. Všechna práva vyhrazena. | Realizace staveb s garancí kvality.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}