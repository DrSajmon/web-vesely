import React from 'react';

export const metadata = { 
  title: "O nás | Stavby Novák" 
};

export default function ONasPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '5px solid #f97316' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '20px', fontWeight: '900', textTransform: 'uppercase' }}>O naší firmě</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
          Jsme stabilní stavební firma s dlouholetou tradicí na českém trhu. Naším cílem je odbourat mýty o nespolehlivých stavebních firmách. Proto stavíme na absolutní transparentnosti, pevných rozpočtech a jasně definovaných termínech.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
          Disponujeme týmem zkušených a proškolených řemeslníků a vlastním moderním technickým vybavením. Každý projekt, ať už jde o malou zeď nebo rozsáhlý rodinný dům, kontroluje osobně náš certifikovaný stavbyvedoucí.
        </p>
      </div>
    </main>
  );
}