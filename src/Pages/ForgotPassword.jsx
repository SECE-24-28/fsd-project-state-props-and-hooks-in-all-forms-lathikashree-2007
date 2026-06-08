import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleForgot = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('local_users')) || [];
    const user = existingUsers.find(u => u.email === email);

    if (!user) {
      setInfo({ text: 'No user found with this email location.', type: 'error' });
      return;
    }

    const mockToken = "RESET-" + Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem('reset_token', JSON.stringify({ email, token: mockToken, expires: Date.now() + 600000 }));

    setInfo({ text: `Success! Copy your recovery token: ${mockToken}`, type: 'success' });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', padding: '20px' }}>
      <form onSubmit={handleForgot} style={{ width: '100%', maxWidth: '400px', padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #eee' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '10px', textAlign: 'center' }}>Recover Password</h2>
        <p style={{ fontSize: '13px', color: '#666', textAlign: 'center', marginBottom: '20px' }}>Enter your email to generate a secure simulation reset verification token.</p>
        {info.text && <div style={{ wordBreak: 'break-all', padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '12px', background: info.type === 'error' ? '#fdf2f2' : '#f0fdf4', color: info.type === 'error' ? '#b91c1c' : '#15803d' }}>{info.text}</div>}
        <input type="email" placeholder="Registered Email Address" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '4px' }} required />
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#111', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: '600' }}>GET RECOVERY TOKEN</button>
        <p style={{ textAlign: 'center', fontSize: '13px', marginTop: '15px' }}><a href="/reset-password" style={{ color: '#ff3f6c', textDecoration: 'none' }}>Have a token? Reset password here</a></p>
      </form>
    </div>
  );
}