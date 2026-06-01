import { useEffect } from "react";

export default function SplashScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <div style={styles.logoIcon}>🛍️</div>
        <h1 style={styles.brandName}>ShopEase</h1>
        <p style={styles.tagline}>Your style, delivered.</p>
      </div>
      <div style={styles.loader}>
        <div style={styles.loaderBar}></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100%",
    background: "linear-gradient(160deg, #6C63FF 0%, #3F3D56 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
  },
  logo: {
    textAlign: "center",
    animation: "fadeIn 0.8s ease",
  },
  logoIcon: { fontSize: "64px", marginBottom: "12px" },
  brandName: {
    color: "#fff",
    fontSize: "36px",
    fontWeight: "800",
    margin: 0,
    letterSpacing: "-1px",
  },
  tagline: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "14px",
    margin: "6px 0 0",
    fontWeight: "400",
  },
  loader: {
    width: "120px",
    height: "4px",
    background: "rgba(255,255,255,0.2)",
    borderRadius: "10px",
    overflow: "hidden",
  },
  loaderBar: {
    height: "100%",
    width: "60%",
    background: "#fff",
    borderRadius: "10px",
    animation: "slide 1.5s ease-in-out infinite",
  },
};
