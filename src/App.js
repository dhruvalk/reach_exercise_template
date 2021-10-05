import styles from "./App.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";
import OtherProducts from "./components/OtherProducts";
import RecycleInfo from "./components/RecycleInfo";

function App() {
  return (
    <div className={styles.mainDiv}>
      <Header />
      <div className={styles.infoContainer}>
        <ProductInfo />
        <RecycleInfo />
        <OtherProducts />
      </div>
      <button
        style={{ position: "absolute", bottom: 30, left: 5, zIndex: 999 }}
      >
        Show Modal
      </button>
      <Footer />
    </div>
  );
}

export default App;
