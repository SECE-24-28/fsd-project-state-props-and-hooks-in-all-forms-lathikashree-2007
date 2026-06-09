import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

// 1. Give toggleWishlist a default empty fallback arrow function inside the destructured arguments
function ProductCard({ product, addToCart, toggleWishlist = () => {} }) {
  
  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (addToCart) addToCart(product);
  };

  const handleWishlistClick = (e) => {
    // Prevent the card from routing to the product page when clicking the heart!
    e.stopPropagation();
    e.preventDefault();
    
    // 2. Safe check execution guard
    if (typeof toggleWishlist === 'function') {
      toggleWishlist(product);
    } else {
      console.warn("toggleWishlist prop was not passed down to this ProductCard correctly.");
    }
  };

  if (!product) return null;

  return (
    <div className="product-card" style={styles.card}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={styles.imgContainer}>
          <img src={product.img} alt={product.name} style={styles.image} />
          
          {/* MOVE HEART BUTTON INSIDE CARD CONTAINER WITH EXPLICIT CLICK ISOLATION */}
          <button 
            onClick={handleWishlistClick} 
            style={styles.heartButton}
          >
            ❤️
          </button>
        </div>

        <div style={{ padding: '15px' }}>
          <h4 style={styles.title}>{product.name}</h4>
          <p style={styles.price}>₹{product.price}</p>
        </div>
      </Link>

      <div style={{ padding: '0 15px 15px' }}>
        <button onClick={handleAddToCartClick} style={styles.bagBtn}>
          Add to Bag
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: { background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', position: 'relative' },
  imgContainer: { height: '280px', overflow: 'hidden', position: 'relative' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  heartButton: { position: 'absolute', top: '10px', right: '10px', background: '#fff', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 },
  title: { fontSize: '0.95rem', margin: '0 0 5px 0', color: '#333' },
  price: { fontWeight: '700', margin: 0, color: '#111' },
  bagBtn: { width: '100%', padding: '10px', background: '#ff3f6c', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }
};

export default ProductCard;