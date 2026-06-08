import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ cartCount = 0, isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '15px 4%', position: 'sticky', top: 0, zIndex: 1000,
      borderBottom: '1px solid rgba(255,255,255,0.1)', background: '#111111', color: '#ffffff'
    }}>
      {/* BRAND LOGO */}
      <div style={{ fontWeight: 800, fontSize: '22px', letterSpacing: '1px' }}>
        <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>FASHION<span style={{ color: '#ff3f6c' }}>HUB</span></Link>
      </div>

      {/* CENTRAL NAVIGATION LINKS */}
      <div style={{ display: 'flex', gap: '20px', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        <Link to="/" style={styles.navLink}>Home</Link>
        
        {/* FIXED: Individual direct routing links for each inventory category segment */}
        <Link to="/category/men" style={styles.navLink}>Men</Link>
        <Link to="/category/women" style={styles.navLink}>Women</Link>
        <Link to="/category/kids" style={styles.navLink}>Kids</Link>
        <Link to="/category/accessories" style={styles.navLink}>Accessories</Link>
        
        <Link to="/about" style={styles.navLink}>About Us</Link>
        <Link to="/contact" style={styles.navLink}>Contact</Link>
        <Link to="/faq" style={styles.navLink}>FAQ</Link>
      </div>

      {/* USER ACCOUNT ACTIONS */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {isAuthenticated ? (
          <>
            <Link to="/profile" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '14px' }}>Profile</Link>
            <Link to="/orders" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '14px' }}>Orders</Link>
            <button onClick={onLogout} style={{
              background: '#ff3f6c', color: '#fff', border: 'none', padding: '8px 16px',
              borderRadius: '4px', cursor: 'pointer', fontWeight: 600, fontSize: '13px'
            }}>Logout</button>
          </>
        ) : (
          <button onClick={() => navigate('/login')} style={{
            background: 'transparent', color: '#ffffff', border: '1px solid #ffffff',
            padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, fontSize: '13px'
          }}>Login</button>
        )}
      </div>
    </nav>
  );
}

// Clean internal styles object to keep link code neat and maintainable
const styles = {
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  }
};