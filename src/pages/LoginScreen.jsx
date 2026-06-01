import { useState } from "react";

export default function LoginScreen({ onDone }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>{isLogin ? "Welcome Back 👋" : "Create Account"}</h2>
        <p style={styles.subtitle}>{isLogin ? "Sign in to continue shopping" : "Join us and start shopping"}</p>
      </div>

      <div style={styles.form}>
        {!isLogin && (
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input style={styles.input} placeholder="John Doe" type="text" />
          </div>
        )}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input style={styles.input} placeholder="you@example.com" type="email"
            value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input style={styles.input} placeholder="••••••••" type="password"
            value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        {isLogin && <p style={styles.forgot}>Forgot password?</p>}
      </div>

      <button style={styles.btn} onClick={onDone}>
        {isLogin ? "Sign In" : "Create Account"}
      </button>

      <div style={styles.divider}><span>or continue with</span></div>
      <div style={styles.socials}>
        {["G", "f", "in"].map(s => (
          <button key={s} style={styles.socialBtn}>{s}</button>
        ))}
      </div>

      <p style={styles.switchText}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span style={styles.switchLink} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Sign In"}
        </span>
      </p>
    </div>
  );
}

const styles = {
  container: {
    height: "100%",
    overflowY: "auto",
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    background: "#fff",
  },
  header: { marginBottom: "4px" },
  title: { fontSize: "26px", fontWeight: "800", color: "#1a1a2e", margin: "0 0 6px" },
  subtitle: { fontSize: "14px", color: "#888", margin: 0 },
  form: { display: "flex", flexDirection: "column", gap: "16px" },
  inputGroup: { display: "flex", flexDirection: "column", gap: "6px" },
  label: { fontSize: "13px", fontWeight: "600", color: "#444" },
  input: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1.5px solid #e8e8e8",
    fontSize: "15px",
    outline: "none",
    background: "#fafafa",
    fontFamily: "inherit",
  },
  forgot: { textAlign: "right", fontSize: "13px", color: "#6C63FF", fontWeight: "600", cursor: "pointer", margin: 0 },
  btn: {
    padding: "16px",
    borderRadius: "16px",
    border: "none",
    background: "linear-gradient(135deg, #6C63FF, #3F3D56)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
  },
  divider: {
    textAlign: "center",
    color: "#ccc",
    fontSize: "13px",
    position: "relative",
  },
  socials: { display: "flex", gap: "12px", justifyContent: "center" },
  socialBtn: {
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    border: "1.5px solid #e8e8e8",
    background: "#fff",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    color: "#444",
  },
  switchText: { textAlign: "center", fontSize: "14px", color: "#888", margin: 0 },
  switchLink: { color: "#6C63FF", fontWeight: "700", cursor: "pointer" },
};
