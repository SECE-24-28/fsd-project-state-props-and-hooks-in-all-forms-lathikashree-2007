import React, { useState } from 'react';

export default function FAQ() {
  const [search, setSearch] = useState('');
  const [openIdx, setOpenIdx] = useState(null);

  const data = [
    { q: "How can I verify the status of an ongoing delivery processing pattern?", a: "Navigate inside your verified authenticated dashboard straight into '/orders' view layout to observe state updates directly synced from logistics middleware pipelines." },
    { q: "What parameters govern the orchestration of coupon matching processes?", a: "The frontend tracking matrix computes calculations instantaneously upon entering eligible identifiers, updating your checkout layout pricing mechanisms instantly." },
    { q: "Does FashionHub store raw alphanumeric text password records?", a: "No. The infrastructure utilizes standard bcrypt cryptographic configuration frameworks to encrypt password text strings before synchronization to MongoDB clusters." }
  ];

  const filtered = data.filter(item => item.q.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ maxWidth: '750px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: '800', marginBottom: '30px' }}>Frequently Asked Parameters</h1>
      <input type="text" placeholder="Filter questions by query criteria..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '25px', border: '1px solid #ddd', borderRadius: '6px' }} />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {filtered.map((item, idx) => (
          <div key={idx} style={{ border: '1px solid #eee', borderRadius: '6px', overflow: 'hidden' }}>
            <div onClick={() => setOpenIdx(openIdx === idx ? null : idx)} style={{ padding: '15px 20px', background: '#f9f9f9', cursor: 'pointer', fontWeight: '600', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{item.q}</span>
              <span>{openIdx === idx ? '−' : '+'}</span>
            </div>
            {openIdx === idx && <div style={{ padding: '15px 20px', fontSize: '14px', color: '#555', lineBreak: 'normal', borderTop: '1px solid #eee', background: '#fff' }}>{item.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}