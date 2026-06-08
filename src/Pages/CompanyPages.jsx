import React, { useState } from 'react';

const pageStyle = { maxWidth: '750px', margin: '50px auto', padding: '30px', fontFamily: 'sans-serif', lineHeight: '1.6' };
const inputStyle = { padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', width: '100%', boxSizing: 'border-box' };

export function AboutUs() {
  return (
    <div style={pageStyle}>
      <h2>About Our Store</h2>
      <p>Welcome to our storefront hub! We are dedicated to providing the absolute best collections of curated modern styles across menswear, designer womenswear, and premium kid's garments.</p>
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <div style={pageStyle}>
      <h2>Privacy Policy</h2>
      <p>Your user privacy is completely safe with us. All transactional data, profiles, and shopping bag choices are managed right in your local browser sandbox context via `localStorage` arrays.</p>
    </div>
  );
}

export function TermsConditions() {
  return (
    <div style={pageStyle}>
      <h2>Terms & Conditions</h2>
      <p>By interacting with this app, you acknowledge that all pricing states and catalogs reflect local simulation data models. Checkout transactions are mocked out safely without physical financial charges.</p>
    </div>
  );
}

export function FAQ() {
  const FAQsList = [
    { q: "How do I add products to my tracking view?", a: "Simply browse through our visual product catalogs, select your preferred variables, and hit Add to Bag." },
    { q: "How long does shipping standard delivery take?", a: "Mock packaging operations typically complete processing tasks within 2 to 3 days." }
  ];
  return (
    <div style={pageStyle}>
      <h2>Frequently Asked Questions (FAQ)</h2>
      {FAQsList.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
          <h4 style={{ color: '#007bff', margin: '0 0 5px 0' }}>❓ {item.q}</h4>
          <p style={{ margin: 0 }}>{item.a}</p>
        </div>
      ))}
    </div>
  );
}

export function ContactUs() {
  const [sent, setSent] = useState(false);
  return (
    <div style={pageStyle}>
      <h2>Contact Us</h2>
      {sent ? (
        <p style={{ padding: '15px', backgroundColor: '#e6f9ed', color: '#28a745', borderRadius: '4px', fontWeight: 'bold' }}>✉️ Your custom ticket has been logged successfully!</p>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Your Name" required style={inputStyle} />
          <input type="email" placeholder="Email Address" required style={inputStyle} />
          <textarea placeholder="How can we help you today?" required rows="4" style={inputStyle} />
          <button type="submit" style={{ padding: '12px', backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Send Message</button>
        </form>
      )}
    </div>
  );
}