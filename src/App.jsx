import { useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import OnboardingScreen from "./pages/OnboardingScreen";
import LoginScreen from "./pages/LoginScreen";
import HomeScreen from "./pages/HomeScreen";
import ProductDetail from "./pages/ProductDetail";
import CartScreen from "./pages/CartScreen";
import ProfileScreen from "./pages/ProfileScreen";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [screen, setScreen] = useState("splash");
  const [activeTab, setActiveTab] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const navigate = (s, data = null) => {
    if (s === "product") setSelectedProduct(data);
    setScreen(s);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) return prev.map((p) => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const mainScreens = ["home", "cart", "profile"];

  const renderScreen = () => {
    switch (screen) {
      case "splash": return <SplashScreen onDone={() => navigate("onboarding")} />;
      case "onboarding": return <OnboardingScreen onDone={() => navigate("login")} />;
      case "login": return <LoginScreen onDone={() => navigate("home")} />;
      case "home": return <HomeScreen navigate={navigate} />;
      case "product": return <ProductDetail product={selectedProduct} addToCart={addToCart} onBack={() => navigate("home")} navigate={navigate} />;
      case "cart": return <CartScreen cart={cart} setCart={setCart} navigate={navigate} />;
      case "profile": return <ProfileScreen navigate={navigate} />;
      default: return <HomeScreen navigate={navigate} />;
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(tab);
  };

  return (
    <div style={styles.viewport}>
      <div style={styles.phone}>
        <div style={styles.statusBar}>
          <span>9:41</span>
          <span>● ● ●</span>
        </div>
        <div style={styles.screenArea}>
          {renderScreen()}
        </div>
        {mainScreens.includes(screen) && (
          <BottomNav activeTab={activeTab} onTabChange={handleTabChange} cartCount={cart.reduce((a, b) => a + b.qty, 0)} />
        )}
      </div>
    </div>
  );
}

const styles = {
  viewport: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
  },
  phone: {
    width: "390px",
    height: "844px",
    background: "#fff",
    borderRadius: "50px",
    overflow: "hidden",
    boxShadow: "0 40px 80px rgba(0,0,0,0.4), inset 0 0 0 2px #e0e0e0",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  statusBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px 0",
    fontSize: "12px",
    fontWeight: "600",
    color: "#222",
    flexShrink: 0,
  },
  screenArea: {
    flex: 1,
    overflow: "hidden",
    position: "relative",
  },
};
