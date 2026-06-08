import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#111', color: '#fff', padding: '50px 4% 20px', marginTop: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ flex: '1 1 250px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '15px' }}>FASHION<span style={{ color: '#ff3f6c' }}>HUB</span></h3>
          <p style={{ fontSize: '13px', color: '#bbb', lineHeight: '1.6' }}>Discover premium curated style, modern seasonal trend profiles, and high-fidelity streetwear tailored with meticulous attention to detail.</p>
        </div>
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: '14px', marginBottom: '15px' }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'col', gap: '10px', fontSize: '13px' }}>
            <Link to="/about" style={{ color: '#bbb', textDecoration: 'none' }}>About Us</Link>
            <Link to="/contact" style={{ color: '#bbb', textDecoration: 'none' }}>Contact Us</Link>
            <Link to="/faq" style={{ color: '#bbb', textDecoration: 'none' }}>FAQ Hub</Link>
          </div>
        </div>
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: '14px', marginBottom: '15px' }}>Legal Policy</h4>
          <div style={{ display: 'flex', flexDirection: 'col', gap: '10px', fontSize: '13px' }}>
            <Link to="/privacy" style={{ color: '#bbb', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: '#bbb', textDecoration: 'none' }}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '30px 0 20px' }} />
      <p style={{ textAlign: 'center', fontSize: '12px', color: '#777', margin: 0 }}>&copy; 2026 FashionHub Engine. Formulated for high structural scaling.</p>
    </footer>
  );
}