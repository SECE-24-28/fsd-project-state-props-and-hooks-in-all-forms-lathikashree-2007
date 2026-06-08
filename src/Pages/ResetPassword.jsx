import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const [payload, setPayload] = useState({ token: '', password: '' });
  const [status, setStatus] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    const savedTokenData = JSON.parse(localStorage.getItem('reset_token'));

    if (!savedTokenData || savedTokenData.token !== payload.token.trim()) {
      setStatus({ text: 'Invalid token key parameter.', type: 'error' });
      return;
    }

    if (Date.now() > savedTokenData.expires) {
      setStatus({ text: 'This token has expired.', type: 'error' });
      return;
    }

    let existingUsers = JSON.parse(localStorage.getItem('local_users')) || [];
    existingUsers = existingUsers.map(u => {
      if (u.email === savedTokenData.email) {
        return { ...u, password: payload.password };
      }
      return u;
    });

    localStorage.setItem('local_users', JSON.stringify(existingUsers));
    localStorage.removeItem('reset_token');

    setStatus({ text: 'Password cleanly updated! Redirecting to login...', type: 'success' });
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', padding: '20px' }}>
      <form onSubmit={handleReset} style={{ width: '100%', maxWidth: '400px', padding: '30px', background: '#fff', borderRadius: '8px', border: '1px solid #eee' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px', textAlign: 'center' }}>Execute Password Reset</h2>
        {status.text && <div style={{ padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '13px', background: status.type === 'error' ? '#fdf2f2' : '#f0fdf4', color: status.type === 'error' ? '#b91c1c' : '#15803d' }}>{status.text}</div>}
        <input type="text" placeholder="Paste Security Recovery Token" value={payload.token} onChange={e => setPayload({...payload, token: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px' }} required />
        <input type="password" placeholder="Type New Secure Password" value={payload.password} onChange={e => setPayload({...payload, password: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '4px' }} required />
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#ff3f6c', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: '600' }}>CONFIRM UPDATE</button>
      </form>
    </div>
  );
}