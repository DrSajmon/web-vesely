import React from 'react';

export const metadata = { title: "Reference | Stavby Novák" };

export default function ReferencePage() {
  return (
    <main style={{ maxWidth: '850px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '5px solid #f97316' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '30px', fontWeight: '900', textTransform: 'uppercase' }}>Naše realizované stavby</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ borderLeft: '5px solid #f97316', paddingLeft: '20px', backgroundColor: '#f8fafc', padding: '20px' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#1e293b' }}>Novostavba nízkoenergetického RD – Říčany</h4>
            <p style={{ fontSize: '1rem', color: '#475569', margin: '0 0 10px 0', fontStyle: 'italic' }}>
              "Realizace kompletní stavby na klíč včetně základové desky a střechy. Skvělá komunikace, stavba byla předána o dva týdny dříve oproti harmonogramu."
            </p>
            <span style={{ fontWeight: 'bold', color: '#94a3b8', fontSize: '0.85rem' }}>— Manželé Kučerovi, investoři</span>
          </div>
          <div style={{ borderLeft: '5px solid #1e293b', paddingLeft: '20px', backgroundColor: '#f8fafc', padding: '20px' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#1e293b' }}>Celková rekonstrukce prvorepublikové vily – Kladno</h4>
            <p style={{ fontSize: '1rem', color: '#475569', margin: '0 0 10px 0', fontStyle: 'italic' }}>
              "Kompletní sanace vlhkosti, nové stropy, vyzdívky a zateplení fasády při zachování historického rázu budovy. Profesionální přístup řemeslníků."
            </p>
            <span style={{ fontWeight: 'bold', color: '#94a3b8', fontSize: '0.85rem' }}>— Ing. Arch. Petr L.</span>
          </div>
        </div>
      </div>
    </main>
  );
}