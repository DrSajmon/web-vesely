import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ maxWidth: '1000px', margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
      
      <h1 style={{ fontSize: '3.75rem', color: '#1e293b', marginBottom: '25px', letterSpacing: '-1px', lineHeight: '1.15', fontWeight: '900', textTransform: 'uppercase' }}>
        Stavíme vaši budoucnost <br />
        <span style={{ color: '#f97316' }}>precizně a bez starostí</span>
      </h1>
      
      <p style={{ fontSize: '1.3rem', color: '#475569', maxWidth: '750px', margin: '0 auto 45px auto', lineHeight: '1.65' }}>
        Zajišťujeme kompletní stavební práce, rodinné domy na klíč i rozsáhlé rekonstrukce. 
        Sázíme na férové jednání, dodržování termínů a stoprocentní řemeslnou kvalitu.
      </p>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/sluzby" style={{ backgroundColor: '#1e293b', color: '#fff', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.15rem', fontWeight: 'bold', border: '2px solid #f97316', textTransform: 'uppercase' }}>
          Naše stavební služby
        </Link>
        <Link href="/kontakt" style={{ backgroundColor: '#fff', color: '#1e293b', border: '2px solid #1e293b', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.15rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
          Nezávazná poptávka
        </Link>
      </div>

    </main>
  );
}