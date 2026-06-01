import { useState } from "react";

const categories = ["All", "Men", "Women", "Kids", "Sport"];

export const products = [
  { id: 1, name: "Urban Hoodie", price: 1299, oldPrice: 1799, category: "Men", emoji: "🧥", rating: 4.5, reviews: 128, color: "#FF6B6B" },
  { id: 2, name: "Floral Dress", price: 899, oldPrice: 1299, category: "Women", emoji: "👗", rating: 4.8, reviews: 240, color: "#FFD93D" },
  { id: 3, name: "Sneaker Pro", price: 2499, oldPrice: 3299, category: "Sport", emoji: "👟", rating: 4.7, reviews: 312, color: "#6BCB77" },
  { id: 4, name: "Classic Tee", price: 499, oldPrice: 699, category: "Men", emoji: "👕", rating: 4.3, reviews: 89, color: "#4D96FF" },
  { id: 5, name: "Mini Skirt", price: 699, oldPrice: 999, category: "Women", emoji: "🩳", rating: 4.6, reviews: 155, color: "#C77DFF" },
  { id: 6, name: "Kids Jacket", price: 799, oldPrice: 1199, category: "Kids", emoji: "🧤", rating: 4.4, reviews: 67, color: "#FF9F1C" },
  { id: 7, name: "Track Pants", price: 999, oldPrice: 1399, category: "Sport", emoji: "🩲", rating: 4.2, reviews: 93, color: "#2EC4B6" },
  { id: 8, name: "Denim Jacket", price: 1899, oldPrice: 2499, category: "Men", emoji: "🥼", rating: 4.9, reviews: 201, color: "#E76F51" },
];

export default function HomeScreen({ navigate }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter(p =>
    (activeCategory === "All" || p.category === activeCategory) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <p style={styles.greeting}>Good morning 👋</p>
          <h2 style={styles.headerTitle}>Discover Products</h2>
        </div>
        <div style={styles.avatar}>JD</div>
      </div>

      {/* Search */}
      <div style={styles.searchBox}>
        <span>🔍</span>
        <input
          style={styles.searchInput}
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div style={styles.categories}>
        {categories.map(c => (
          <button
            key={c}
            style={{ ...styles.catBtn, ...(activeCategory === c ? styles.catActive : {}) }}
            onClick={() => setActiveCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Featured Banner */}
      {activeCategory === "All" && !search && (
        <div style={styles.banner}>
          <div>
            <p style={styles.bannerSub}>Limited Offer</p>
            <h3 style={styles.bannerTitle}>Up to 50% Off</h3>
            <button style={styles.bannerBtn} onClick={() => {}}>Shop Now →</button>
          </div>
          <span style={styles.bannerEmoji}>🛍️</span>
        </div>
      )}

      {/* Products Grid */}
      <div style={styles.sectionHeader}>
        <h3 style={styles.sectionTitle}>
          {activeCategory === "All" ? "All Products" : activeCategory}
        </h3>
        <span style={styles.seeAll}>{filtered.length} items</span>
      </div>

      <div style={styles.grid}>
        {filtered.map(product => (
          <div key={product.id} style={styles.card} onClick={() => navigate("product", product)}>
            <div style={{ ...styles.cardImg, background: `${product.color}22` }}>
              <span style={styles.cardEmoji}>{product.emoji}</span>
              <div style={styles.badge}>
                {Math.round((1 - product.price / product.oldPrice) * 100)}% OFF
              </div>
            </div>
            <div style={styles.cardBody}>
              <p style={styles.cardName}>{product.name}</p>
              <p style={styles.cardCategory}>{product.category}</p>
              <div style={styles.cardFooter}>
                <div>
                  <span style={styles.price}>₹{product.price}</span>
                  <span style={styles.oldPrice}>₹{product.oldPrice}</span>
                </div>
                <span style={styles.rating}>⭐ {product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { height: "100%", overflowY: "auto", padding: "16px", background: "#f8f8fc" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" },
  greeting: { fontSize: "13px", color: "#888", margin: "0 0 2px" },
  headerTitle: { fontSize: "22px", fontWeight: "800", color: "#1a1a2e", margin: 0 },
  avatar: {
    width: "44px", height: "44px", borderRadius: "14px",
    background: "linear-gradient(135deg, #6C63FF, #3F3D56)",
    color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: "700", fontSize: "14px",
  },
  searchBox: {
    display: "flex", alignItems: "center", gap: "10px",
    background: "#fff", borderRadius: "14px", padding: "12px 16px",
    marginBottom: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  searchInput: { border: "none", outline: "none", flex: 1, fontSize: "14px", fontFamily: "inherit", background: "transparent" },
  categories: { display: "flex", gap: "8px", marginBottom: "16px", overflowX: "auto", paddingBottom: "4px" },
  catBtn: {
    padding: "8px 18px", borderRadius: "20px", border: "1.5px solid #e0e0e0",
    background: "#fff", fontSize: "13px", fontWeight: "600", color: "#666", cursor: "pointer", whiteSpace: "nowrap",
  },
  catActive: { background: "#6C63FF", color: "#fff", border: "1.5px solid #6C63FF" },
  banner: {
    background: "linear-gradient(135deg, #6C63FF, #3F3D56)", borderRadius: "20px",
    padding: "20px", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center",
  },
  bannerSub: { color: "rgba(255,255,255,0.7)", fontSize: "12px", margin: "0 0 4px" },
  bannerTitle: { color: "#fff", fontSize: "22px", fontWeight: "800", margin: "0 0 12px" },
  bannerBtn: {
    padding: "8px 16px", borderRadius: "10px", border: "none",
    background: "#fff", color: "#6C63FF", fontSize: "13px", fontWeight: "700", cursor: "pointer",
  },
  bannerEmoji: { fontSize: "60px" },
  sectionHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" },
  sectionTitle: { fontSize: "17px", fontWeight: "700", color: "#1a1a2e", margin: 0 },
  seeAll: { fontSize: "13px", color: "#6C63FF", fontWeight: "600" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", paddingBottom: "80px" },
  card: {
    background: "#fff", borderRadius: "16px", overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)", cursor: "pointer",
  },
  cardImg: { height: "130px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" },
  cardEmoji: { fontSize: "56px" },
  badge: {
    position: "absolute", top: "8px", right: "8px",
    background: "#FF6B6B", color: "#fff", fontSize: "10px",
    fontWeight: "700", padding: "3px 7px", borderRadius: "8px",
  },
  cardBody: { padding: "10px 12px" },
  cardName: { fontSize: "14px", fontWeight: "700", color: "#1a1a2e", margin: "0 0 2px" },
  cardCategory: { fontSize: "11px", color: "#999", margin: "0 0 8px" },
  cardFooter: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  price: { fontSize: "15px", fontWeight: "800", color: "#6C63FF" },
  oldPrice: { fontSize: "11px", color: "#bbb", textDecoration: "line-through", marginLeft: "5px" },
  rating: { fontSize: "12px", fontWeight: "600", color: "#888" },
};
