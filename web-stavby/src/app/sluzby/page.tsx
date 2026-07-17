import React from 'react';

export const metadata = { 
  title: "Služby | Stavby Novák" 
};

export default function SluzbyPage() {
  return (
    <main style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '5px solid #f97316' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1e293b', margin: '0 0 10px 0', fontWeight: '900', textTransform: 'uppercase' }}>Co pro vás zajistíme</h1>
        <p style={{ color: '#64748b', fontSize: '1.125rem', marginBottom: '40px' }}>Zajistíme hladký průběh celé stavby od výkopových prací až po finální předání klíčů.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          <div style={{ padding: '25px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', borderLeft: '5px solid #1e293b' }}>
            <div style={{ fontSize: '1.75rem', marginBottom: '10px' }}>🏠</div>
            <h3 style={{ fontSize: '1.3rem', color: '#1e293b', margin: '0 0 10px 0', fontWeight: '700' }}>Rodinné domy na klíč</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#475569' }}>Kompletní realizace novostaveb podle vaší projektové dokumentace. Vyřídíme detaily a předáme vám dům připravený k okamžitému nastěhování.</p>
          </div>
          <div style={{ padding: '25px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', borderLeft: '5px solid #f97316' }}>
            <div style={{ fontSize: '1.75rem', marginBottom: '10px' }}>🧱</div>
            <h3 style={{ fontSize: '1.3rem', color: '#1e293b', margin: '0 0 10px 0', fontWeight: '700' }}>Hrubé stavby & Základy</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#475569' }}>Výkopy, armování a betonáž základových desek, přesné vyzdění obvodového zdiva a realizace stropních konstrukcí s absolutní geometrickou přesností.</p>
          </div>
          <div style={{ padding: '25px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', borderLeft: '5px solid #1e293b' }}>
            <div style={{ fontSize: '1.75rem', marginBottom: '10px' }}>🛠️</div>
            <h3 style={{ fontSize: '1.3rem', color: '#1e293b', margin: '0 0 10px 0', fontWeight: '700' }}>Rekonstrukce & Zateplení</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#475569' }}>Modernizace starších objektů, rekonstrukce bytových jader, kompletní zateplení fasád a opravy střech pro výrazné snížení energetické náročnosti budovy.</p>
          </div>
        </div>
      </div>
    </main>
  );
}