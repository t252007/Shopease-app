export default function CartScreen({ cart, setCart, navigate }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev.map(p => p.id === id ? { ...p, qty: Math.max(0, p.qty + delta) } : p)
        .filter(p => p.qty > 0)
    );
  };

  if (cart.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <div style={styles.emptyEmoji}>🛒</div>
        <h3 style={styles.emptyTitle}>Cart is empty</h3>
        <p style={styles.emptyDesc}>Add some products and they'll appear here.</p>
        <button style={styles.shopBtn} onClick={() => navigate("home")}>Browse Products</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Cart</h2>
      <p style={styles.subtitle}>{cart.length} item{cart.length > 1 ? "s" : ""}</p>

      <div style={styles.list}>
        {cart.map(item => (
          <div key={item.id} style={styles.item}>
            <div style={{ ...styles.itemImg, background: `${item.color}22` }}>
              <span style={{ fontSize: "40px" }}>{item.emoji}</span>
            </div>
            <div style={styles.itemInfo}>
              <p style={styles.itemName}>{item.name}</p>
              <p style={styles.itemPrice}>₹{item.price}</p>
            </div>
            <div style={styles.qtyControls}>
              <button style={styles.qBtn} onClick={() => updateQty(item.id, -1)}>−</button>
              <span style={styles.qNum}>{item.qty}</span>
              <button style={styles.qBtn} onClick={() => updateQty(item.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div style={styles.summary}>
        <div style={styles.summaryRow}>
          <span style={styles.summaryLabel}>Subtotal</span>
          <span style={styles.summaryVal}>₹{total}</span>
        </div>
        <div style={styles.summaryRow}>
          <span style={styles.summaryLabel}>Delivery</span>
          <span style={{ ...styles.summaryVal, color: "#6BCB77" }}>FREE</span>
        </div>
        <div style={{ ...styles.summaryRow, borderTop: "1.5px dashed #eee", paddingTop: "12px", marginTop: "4px" }}>
          <span style={{ ...styles.summaryLabel, fontWeight: "700", color: "#1a1a2e" }}>Total</span>
          <span style={{ ...styles.summaryVal, fontSize: "20px", color: "#6C63FF" }}>₹{total}</span>
        </div>
      </div>

      <button style={styles.checkoutBtn}>Proceed to Checkout →</button>
    </div>
  );
}

const styles = {
  container: { height: "100%", overflowY: "auto", padding: "16px 16px 100px", background: "#f8f8fc" },
  title: { fontSize: "24px", fontWeight: "800", color: "#1a1a2e", margin: "0 0 4px" },
  subtitle: { fontSize: "14px", color: "#999", marginBottom: "20px" },
  emptyContainer: {
    height: "100%", display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", padding: "32px", gap: "12px",
  },
  emptyEmoji: { fontSize: "80px" },
  emptyTitle: { fontSize: "22px", fontWeight: "700", color: "#1a1a2e", margin: 0 },
  emptyDesc: { fontSize: "14px", color: "#999", textAlign: "center" },
  shopBtn: {
    marginTop: "8px", padding: "14px 28px", borderRadius: "14px",
    border: "none", background: "#6C63FF", color: "#fff",
    fontSize: "15px", fontWeight: "700", cursor: "pointer",
  },
  list: { display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" },
  item: {
    display: "flex", alignItems: "center", gap: "12px",
    background: "#fff", borderRadius: "16px", padding: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  itemImg: { width: "64px", height: "64px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" },
  itemInfo: { flex: 1 },
  itemName: { fontSize: "14px", fontWeight: "700", color: "#1a1a2e", margin: "0 0 4px" },
  itemPrice: { fontSize: "15px", fontWeight: "700", color: "#6C63FF", margin: 0 },
  qtyControls: { display: "flex", alignItems: "center", gap: "10px" },
  qBtn: {
    width: "30px", height: "30px", borderRadius: "8px",
    border: "1.5px solid #e0e0e0", background: "#fff",
    fontSize: "16px", fontWeight: "700", cursor: "pointer", color: "#6C63FF",
  },
  qNum: { fontSize: "15px", fontWeight: "700", minWidth: "16px", textAlign: "center" },
  summary: {
    background: "#fff", borderRadius: "16px", padding: "16px",
    marginBottom: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  summaryRow: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" },
  summaryLabel: { fontSize: "14px", color: "#888" },
  summaryVal: { fontSize: "15px", fontWeight: "700", color: "#1a1a2e" },
  checkoutBtn: {
    width: "100%", padding: "16px", borderRadius: "16px", border: "none",
    background: "linear-gradient(135deg, #6C63FF, #3F3D56)", color: "#fff",
    fontSize: "16px", fontWeight: "700", cursor: "pointer",
  },
};
