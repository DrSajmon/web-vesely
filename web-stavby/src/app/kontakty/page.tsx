import React from 'react';

export const metadata = { title: "Kontakt | Stavby Novák" };

export default function KontaktPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '5px solid #f97316' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '15px', fontWeight: '900', textTransform: 'uppercase' }}>Pojďme stavět společně</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '40px' }}>Zašlete nám svůj projekt, vypracujeme vám detailní položkový rozpočet zcela zdarma.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' }}>Poptávky a rozpočty</div>
            <a href="mailto:info@stavbynovak.cz" style={{ fontSize: '1.25rem', color: '#f97316', textDecoration: 'none', fontWeight: 'bold' }}>info@stavbynovak.cz</a>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' }}>Hlavní stavbyvedoucí</div>
            <a href="tel:+420777123456" style={{ fontSize: '1.25rem', color: '#1e293b', textDecoration: 'none', fontWeight: 'bold' }}>+420 777 123 456</a>
          </div>
        </div>
      </div>
    </main>
  );
}