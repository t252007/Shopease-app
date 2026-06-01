const menuItems = [
  { icon: "📦", label: "My Orders", badge: "3" },
  { icon: "📍", label: "Delivery Addresses" },
  { icon: "💳", label: "Payment Methods" },
  { icon: "🔔", label: "Notifications", badge: "5" },
  { icon: "❤️", label: "Wishlist" },
  { icon: "⚙️", label: "Settings" },
  { icon: "🚪", label: "Sign Out", danger: true },
];

export default function ProfileScreen() {
  return (
    <div style={styles.container}>
      {/* Profile Card */}
      <div style={styles.profileCard}>
        <div style={styles.avatar}>JD</div>
        <div>
          <h3 style={styles.name}>John Doe</h3>
          <p style={styles.email}>john.doe@example.com</p>
        </div>
        <button style={styles.editBtn}>Edit ✏️</button>
      </div>

      {/* Stats */}
      <div style={styles.stats}>
        {[["23", "Orders"], ["4.8", "Rating"], ["₹12K", "Spent"]].map(([val, label]) => (
          <div key={label} style={styles.stat}>
            <span style={styles.statVal}>{val}</span>
            <span style={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div style={styles.menu}>
        {menuItems.map(item => (
          <div key={item.label} style={{ ...styles.menuItem, ...(item.danger ? styles.danger : {}) }}>
            <span style={styles.menuIcon}>{item.icon}</span>
            <span style={styles.menuLabel}>{item.label}</span>
            <div style={styles.menuRight}>
              {item.badge && <span style={styles.badgePill}>{item.badge}</span>}
              {!item.danger && <span style={styles.chevron}>›</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { height: "100%", overflowY: "auto", padding: "16px 16px 100px", background: "#f8f8fc" },
  profileCard: {
    display: "flex", alignItems: "center", gap: "14px",
    background: "#fff", borderRadius: "20px", padding: "16px",
    marginBottom: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
  },
  avatar: {
    width: "56px", height: "56px", borderRadius: "16px",
    background: "linear-gradient(135deg, #6C63FF, #3F3D56)",
    color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: "700", fontSize: "18px", flexShrink: 0,
  },
  name: { fontSize: "17px", fontWeight: "700", color: "#1a1a2e", margin: "0 0 4px" },
  email: { fontSize: "13px", color: "#999", margin: 0 },
  editBtn: {
    marginLeft: "auto", padding: "8px 14px", borderRadius: "10px",
    border: "1.5px solid #6C63FF", background: "#f0efff",
    color: "#6C63FF", fontSize: "12px", fontWeight: "700", cursor: "pointer",
  },
  stats: {
    display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
    background: "#fff", borderRadius: "16px", padding: "16px",
    marginBottom: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    textAlign: "center",
  },
  stat: { display: "flex", flexDirection: "column", gap: "4px" },
  statVal: { fontSize: "20px", fontWeight: "800", color: "#6C63FF" },
  statLabel: { fontSize: "12px", color: "#999" },
  menu: { display: "flex", flexDirection: "column", gap: "4px" },
  menuItem: {
    display: "flex", alignItems: "center", gap: "14px",
    background: "#fff", borderRadius: "14px", padding: "16px",
    cursor: "pointer",
  },
  danger: { background: "#FFF5F5" },
  menuIcon: { fontSize: "22px", width: "28px", textAlign: "center" },
  menuLabel: { flex: 1, fontSize: "15px", fontWeight: "500", color: "#1a1a2e" },
  menuRight: { display: "flex", alignItems: "center", gap: "6px" },
  badgePill: {
    background: "#6C63FF", color: "#fff", fontSize: "11px",
    fontWeight: "700", padding: "2px 8px", borderRadius: "20px",
  },
  chevron: { fontSize: "22px", color: "#ccc", fontWeight: "300" },
};
