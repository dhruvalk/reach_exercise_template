import styles from "./App.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";
import OtherProducts from "./components/OtherProducts";
import RecycleInfo from "./components/RecycleInfo";
import Modal from './components/Modal';
import { useState } from "react";

function App() {
  const[show,setModal] = useState(false);
  const displayModal = () =>{
    setModal(true);
  }
  const hideModal = () =>{
    setModal(false);
  }




  return (
    <div className={styles.mainDiv} >
      <Header />
      <div className={styles.infoContainer} >
        <ProductInfo />
        <RecycleInfo />
        <OtherProducts />
      </div>
      <button onClick={displayModal}
        style={{ position: "absolute", bottom: 30, left: 5, zIndex: 999 } }
      >
        Show Modal
      </button>
      <div className={styles.modal}>
      { show &&
      <Modal  onClose={hideModal}/> }
      </div>
      <Footer />
    </div>
  );
}

export default App;
