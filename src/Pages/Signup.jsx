import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setMsg({ text: 'All fields are mandatory.', type: 'error' });
      return;
    }

    // Simulate database lookup in LocalStorage
    const existingUsers = JSON.parse(localStorage.getItem('local_users')) || [];
    const userExists = existingUsers.some(u => u.email === formData.email);

    if (userExists) {
      setMsg({ text: 'An account with this email already exists.', type: 'error' });
      return;
    }

    // Save user to local data layer
    existingUsers.push(formData);
    localStorage.setItem('local_users', JSON.stringify(existingUsers));

    setMsg({ text: 'Account created successfully! Redirecting to login...', type: 'success' });
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '20px' }}>
      <form onSubmit={handleRegister} style={{ width: '100%', maxWidth: '400px', padding: '30px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', textAlign: 'center' }}>Create Account</h2>
        {msg.text && (
          <div style={{ padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '13px', background: msg.type === 'error' ? '#fdf2f2' : '#f0fdf4', color: msg.type === 'error' ? '#b91c1c' : '#15803d' }}>
            {msg.text}
          </div>
        )}
        <input type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px' }} required />
        <input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px' }} required />
        <input type="password" placeholder="Secure Password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '4px' }} required />
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#ff3f6c', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: '700', cursor: 'pointer' }}>SIGN UP</button>
        <p style={{ textAlign: 'center', fontSize: '13px', marginTop: '15px', color: '#666' }}>Already have an account? <Link to="/login" style={{ color: '#ff3f6c', textDecoration: 'none' }}>Login here</Link></p>
      </form>
    </div>
  );
}