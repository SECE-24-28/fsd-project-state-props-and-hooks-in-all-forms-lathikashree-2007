import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login({ onLoginSuccess, isAuthenticated }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const cleanEmail = email.trim().toLowerCase();

    // 1. If it's the admin email, instantly log in as admin (password can be anything)
    if (cleanEmail === "admin@fashionhub.com") {
      alert("⚡ Welcome back, Administrator. (Any Password Accepted)");
      onLoginSuccess({ 
        name: "Admin Manager", 
        email: cleanEmail, 
        role: "admin" 
      });
      navigate('/admin');
      return;
    }

    // 2. For ANY other email/password combination, auto-generate a valid user profile instantly
    // Extracting a clean display name from the email prefix (e.g., "john" from "john@gmail.com")
    const emailPrefix = cleanEmail.split('@')[0];
    const generatedName = emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1);

    const universalUser = {
      name: generatedName || "Premium Shopper",
      email: cleanEmail,
      phone: "9876543210",
      address: "402, Sapphire Block, Bangalore - 560102"
    };

    alert(`👋 Welcome back, ${universalUser.name}! (Universal Access Bypass)`);
    onLoginSuccess(universalUser);
    navigate('/profile');
  };

  return (
    <div style={styles.authWrapper}>
      <h2 style={{ marginBottom: '8px', fontSize: '26px', fontWeight: 'bold' }}>Sign In</h2>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>Access your personalized user profile and track your orders.</p>
      
      <form onSubmit={handleLoginSubmit} style={styles.formStructure}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email Address *</label>
          <input type="email" required placeholder="any-email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.field} />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Account Password *</label>
          <input type="password" required placeholder="anything-works" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.field} />
        </div>

        <div style={{ textAlign: 'right', margin: '-5px 0 10px 0' }}>
          <Link to="/forgot-password" style={styles.inlineLink}>Forgot Password?</Link>
        </div>

        <button type="submit" style={styles.primaryBtn}>Secure Login</button>
      </form>

      <div style={styles.footerPrompt}>
        Don't have an account yet? <Link to="/signup" style={styles.boldLink}>Create Account</Link>
      </div>
    </div>
  );
}

const styles = {
  authWrapper: { maxWidth: '420px', margin: '70px auto', padding: '35px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fff', color: '#1a202c', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', fontFamily: 'sans-serif' },
  formStructure: { display: 'flex', flexDirection: 'column', gap: '18px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' },
  label: { fontSize: '13px', fontWeight: '600', color: '#4a5568' },
  field: { padding: '12px', borderRadius: '5px', border: '1px solid #cbd5e0', fontSize: '14px', backgroundColor: '#fff', color: '#2d3748', outline: 'none' },
  inlineLink: { fontSize: '13px', color: '#3182ce', textDecoration: 'none' },
  primaryBtn: { padding: '13px', backgroundColor: '#1a202c', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' },
  footerPrompt: { marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #edf2f7', fontSize: '14px', textAlign: 'center', color: '#718096' },
  boldLink: { color: '#3182ce', fontWeight: 'bold', textDecoration: 'none' }
};