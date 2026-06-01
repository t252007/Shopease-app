import { useState } from "react";

const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["#6C63FF", "#FF6B6B", "#6BCB77", "#FFD93D"];

export default function ProductDetail({ product, addToCart, onBack, navigate }) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={styles.container}>
      {/* Hero */}
      <div style={{ ...styles.hero, background: `${product.color}22` }}>
        <button style={styles.backBtn} onClick={onBack}>←</button>
        <button style={styles.wishBtn}>🤍</button>
        <div style={styles.heroEmoji}>{product.emoji}</div>
        <div style={styles.badge}>{Math.round((1 - product.price / product.oldPrice) * 100)}% OFF</div>
      </div>

      {/* Content */}
      <div style={styles.content}>
        <div style={styles.topRow}>
          <div>
            <p style={styles.category}>{product.category}</p>
            <h2 style={styles.name}>{product.name}</h2>
          </div>
          <div style={styles.ratingBox}>
            <span style={styles.star}>⭐</span>
            <span style={styles.ratingVal}>{product.rating}</span>
            <span style={styles.reviews}>({product.reviews})</span>
          </div>
        </div>

        <div style={styles.priceRow}>
          <span style={styles.price}>₹{product.price}</span>
          <span style={styles.oldPrice}>₹{product.oldPrice}</span>
        </div>

        <p style={styles.desc}>
          Premium quality {product.name.toLowerCase()} crafted for modern style.
          Comfortable fit, durable material — perfect for everyday wear.
        </p>

        {/* Size */}
        <p style={styles.label}>Select Size</p>
        <div style={styles.sizeRow}>
          {sizes.map(s => (
            <button
              key={s}
              style={{ ...styles.sizeBtn, ...(selectedSize === s ? styles.sizeActive : {}) }}
              onClick={() => setSelectedSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Color */}
        <p style={styles.label}>Select Color</p>
        <div style={styles.colorRow}>
          {colors.map(c => (
            <button
              key={c}
              style={{ ...styles.colorBtn, background: c, outline: selectedColor === c ? `3px solid ${c}` : "none", outlineOffset: "3px" }}
              onClick={() => setSelectedColor(c)}
            />
          ))}
        </div>

        {/* Qty + Cart */}
        <div style={styles.footer}>
          <div style={styles.qtyBox}>
            <button style={styles.qtyBtn} onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <span style={styles.qtyVal}>{qty}</span>
            <button style={styles.qtyBtn} onClick={() => setQty(qty + 1)}>+</button>
          </div>
          <button style={{ ...styles.cartBtn, background: added ? "#6BCB77" : "#6C63FF" }} onClick={handleAddToCart}>
            {added ? "✓ Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { height: "100%", overflowY: "auto", background: "#fff" },
  hero: {
    height: "280px", display: "flex", alignItems: "center", justifyContent: "center",
    position: "relative", borderBottomLeftRadius: "32px", borderBottomRightRadius: "32px",
  },
  backBtn: {
    position: "absolute", top: "16px", left: "16px",
    width: "40px", height: "40px", borderRadius: "12px",
    border: "none", background: "rgba(255,255,255,0.9)", fontSize: "18px",
    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
  },
  wishBtn: {
    position: "absolute", top: "16px", right: "16px",
    width: "40px", height: "40px", borderRadius: "12px",
    border: "none", background: "rgba(255,255,255,0.9)", fontSize: "18px",
    cursor: "pointer",
  },
  heroEmoji: { fontSize: "120px" },
  badge: {
    position: "absolute", bottom: "20px", right: "20px",
    background: "#FF6B6B", color: "#fff", fontSize: "12px",
    fontWeight: "700", padding: "4px 10px", borderRadius: "10px",
  },
  content: { padding: "20px", paddingBottom: "100px" },
  topRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" },
  category: { fontSize: "12px", color: "#999", margin: "0 0 4px", fontWeight: "600" },
  name: { fontSize: "22px", fontWeight: "800", color: "#1a1a2e", margin: 0 },
  ratingBox: { display: "flex", alignItems: "center", gap: "3px", background: "#FFF8E1", padding: "6px 10px", borderRadius: "10px" },
  star: { fontSize: "14px" },
  ratingVal: { fontSize: "14px", fontWeight: "700", color: "#F59E0B" },
  reviews: { fontSize: "12px", color: "#999" },
  priceRow: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" },
  price: { fontSize: "28px", fontWeight: "800", color: "#6C63FF" },
  oldPrice: { fontSize: "16px", color: "#bbb", textDecoration: "line-through" },
  desc: { fontSize: "14px", color: "#666", lineHeight: "1.7", marginBottom: "20px" },
  label: { fontSize: "13px", fontWeight: "700", color: "#1a1a2e", marginBottom: "10px" },
  sizeRow: { display: "flex", gap: "8px", marginBottom: "20px" },
  sizeBtn: {
    width: "48px", height: "48px", borderRadius: "12px",
    border: "1.5px solid #e0e0e0", background: "#fff",
    fontSize: "13px", fontWeight: "600", color: "#555", cursor: "pointer",
  },
  sizeActive: { border: "2px solid #6C63FF", color: "#6C63FF", background: "#f0efff" },
  colorRow: { display: "flex", gap: "12px", marginBottom: "28px" },
  colorBtn: { width: "28px", height: "28px", borderRadius: "50%", border: "none", cursor: "pointer" },
  footer: { display: "flex", gap: "12px", alignItems: "center" },
  qtyBox: {
    display: "flex", alignItems: "center", gap: "16px",
    background: "#f5f5fa", borderRadius: "14px", padding: "10px 16px",
  },
  qtyBtn: { border: "none", background: "transparent", fontSize: "20px", fontWeight: "700", cursor: "pointer", color: "#6C63FF" },
  qtyVal: { fontSize: "16px", fontWeight: "700" },
  cartBtn: {
    flex: 1, padding: "16px", borderRadius: "16px", border: "none",
    color: "#fff", fontSize: "15px", fontWeight: "700", cursor: "pointer",
    transition: "background 0.3s ease",
  },
};
