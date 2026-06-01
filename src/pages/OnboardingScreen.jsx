import { useState } from "react";

const slides = [
  {
    emoji: "👗",
    title: "Discover Fashion",
    desc: "Explore thousands of styles curated just for you.",
    bg: "#FFF3E0",
    accent: "#FF6F00",
  },
  {
    emoji: "🚀",
    title: "Fast Delivery",
    desc: "Get your orders delivered to your doorstep in 24 hours.",
    bg: "#E8F5E9",
    accent: "#2E7D32",
  },
  {
    emoji: "🔒",
    title: "Secure Payments",
    desc: "Shop with confidence using our 100% secure payment system.",
    bg: "#EDE7F6",
    accent: "#512DA8",
  },
];

export default function OnboardingScreen({ onDone }) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <div style={{ ...styles.container, background: slide.bg }}>
      <div style={styles.skipBtn} onClick={onDone}>Skip</div>
      <div style={styles.emojiBox}>{slide.emoji}</div>
      <div style={styles.text}>
        <h2 style={{ ...styles.title, color: slide.accent }}>{slide.title}</h2>
        <p style={styles.desc}>{slide.desc}</p>
      </div>
      <div style={styles.dots}>
        {slides.map((_, i) => (
          <div key={i} style={{ ...styles.dot, background: i === index ? slide.accent : "#ccc", width: i === index ? "24px" : "8px" }} />
        ))}
      </div>
      <button
        style={{ ...styles.btn, background: slide.accent }}
        onClick={() => index < slides.length - 1 ? setIndex(index + 1) : onDone()}
      >
        {index < slides.length - 1 ? "Next →" : "Get Started"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    gap: "24px",
    transition: "background 0.4s ease",
    position: "relative",
  },
  skipBtn: {
    position: "absolute",
    top: "16px",
    right: "24px",
    fontSize: "14px",
    color: "#888",
    cursor: "pointer",
    fontWeight: "600",
  },
  emojiBox: {
    fontSize: "100px",
    lineHeight: 1,
  },
  text: { textAlign: "center" },
  title: {
    fontSize: "28px",
    fontWeight: "800",
    margin: "0 0 10px",
  },
  desc: {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.6",
    maxWidth: "280px",
    margin: "0 auto",
  },
  dots: {
    display: "flex",
    gap: "6px",
    alignItems: "center",
  },
  dot: {
    height: "8px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  },
  btn: {
    width: "100%",
    maxWidth: "300px",
    padding: "16px",
    borderRadius: "16px",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    letterSpacing: "0.5px",
  },
};
