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
      <Footer />
    </div>
  );
}

export default App;
