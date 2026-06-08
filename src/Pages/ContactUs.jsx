import React, { useState } from 'react';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    
    const existingInquiries = JSON.parse(localStorage.getItem('local_inquiries')) || [];
    existingInquiries.push({ ...form, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem('local_inquiries', JSON.stringify(existingInquiries));

    setStatus('Inquiry captured and stored locally within application state records!');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: '800', marginBottom: '40px' }}>Connect Infrastructure Layer</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div style={{ padding: '20px', background: '#fff', border: '1px solid #eee', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '20px', fontSize: '18px' }}>Emit Query Payload</h3>
          {status && <div style={{ padding: '10px', background: '#f0fdf4', color: '#15803d', borderRadius: '4px', marginBottom: '15px', fontSize: '13px' }}>{status}</div>}
          <form onSubmit={handleInquirySubmit}>
            <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px' }} required />
            <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px' }} required />
            <input type="text" placeholder="Subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px' }} required />
            <textarea placeholder="Message Body Content" value={form.message} onChange={e => setForm({...form, message: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px', height: '100px', resize: 'none' }} required></textarea>
            <button type="submit" style={{ width: '100%', padding: '12px', background: '#ff3f6c', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: '700' }}>TRANSMIT INQUIRY</button>
          </form>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ padding: '25px', background: '#111', color: '#fff', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 15px', color: '#ff3f6c' }}>Physical Office Location</h4>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>📍 402, Sapphire Block, Bangalore - 560102</p>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>📞 Phone: +91 98765 43210</p>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>✉️ Mail: support@fashionhub.com</p>
          </div>
          <div style={{ height: '200px', background: '#eaeaea', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#777', fontSize: '13px', border: '1px dashed #ccc' }}>
            [Interactive Geolocation Map Pipeline Container Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
}