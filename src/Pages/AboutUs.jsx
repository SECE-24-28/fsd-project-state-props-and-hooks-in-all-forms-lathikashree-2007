import React from 'react';

export default function AboutUs() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', lineHeight: '1.7' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>About FashionHub</h1>
        <p style={{ color: '#666', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>Setting the standard for modern scaling digital architecture layouts in curated high-fidelity consumer apparel design spaces.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '60px' }}>
        <div style={{ padding: '25px', background: '#f9f9f9', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ff3f6c' }}>Our Mission</h3>
          <p style={{ fontSize: '14px', color: '#444' }}>To seamlessly provision responsive consumer interfaces combined with securely integrated database parameters, minimizing transactional latency parameters across all client actions.</p>
        </div>
        <div style={{ padding: '25px', background: '#f9f9f9', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111' }}>Our Vision</h3>
          <p style={{ fontSize: '14px', color: '#444' }}>To define modern structural patterns for fashion deployment spaces, synthesizing retro cinematic styling components with robust visual framework scaling principles.</p>
        </div>
      </div>

      <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '25px', textAlign: 'center' }}>Engineering Core Group</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {['Alex Harrison', 'Sarah Jenkins', 'Marcus Vance'].map((name, idx) => (
          <div key={idx} style={{ width: '200px', textAlign: 'center', padding: '20px', border: '1px solid #eee', borderRadius: '6px' }}>
            <div style={{ width: '70px', height: '70px', background: '#111', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '700' }}>FH</div>
            <h4 style={{ margin: '0 0 5px', fontSize: '15px' }}>{name}</h4>
            <p style={{ margin: 0, fontSize: '12px', color: '#777' }}>Lead Architecture Associate</p>
          </div>
        ))}
      </div>
    </div>
  );
}