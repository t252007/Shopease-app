const tabs = [
  { id: "home", icon: "🏠", label: "Home" },
  { id: "cart", icon: "🛒", label: "Cart" },
  { id: "profile", icon: "👤", label: "Profile" },
];

export default function BottomNav({ activeTab, onTabChange, cartCount }) {
  return (
    <div style={styles.nav}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          style={{ ...styles.tab, ...(activeTab === tab.id ? styles.activeTab : {}) }}
          onClick={() => onTabChange(tab.id)}
        >
          <div style={styles.iconWrap}>
            <span style={styles.icon}>{tab.icon}</span>
            {tab.id === "cart" && cartCount > 0 && (
              <span style={styles.cartBadge}>{cartCount}</span>
            )}
          </div>
          <span style={{ ...styles.label, color: activeTab === tab.id ? "#6C63FF" : "#bbb" }}>
            {tab.label}
          </span>
          {activeTab === tab.id && <div style={styles.indicator} />}
        </button>
      ))}
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    background: "#fff",
    borderTop: "1px solid #f0f0f0",
    padding: "8px 0 12px",
    flexShrink: 0,
    boxShadow: "0 -4px 20px rgba(0,0,0,0.06)",
  },
  tab: {
    flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
    gap: "2px", border: "none", background: "transparent", cursor: "pointer",
    padding: "4px 0", position: "relative",
  },
  activeTab: {},
  iconWrap: { position: "relative", display: "flex" },
  icon: { fontSize: "24px" },
  cartBadge: {
    position: "absolute", top: "-4px", right: "-6px",
    background: "#FF6B6B", color: "#fff", fontSize: "10px",
    fontWeight: "700", width: "16px", height: "16px",
    borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
  },
  label: { fontSize: "11px", fontWeight: "600" },
  indicator: {
    position: "absolute", bottom: "-8px", left: "50%",
    transform: "translateX(-50%)",
    width: "20px", height: "3px", background: "#6C63FF", borderRadius: "10px",
  },
};
