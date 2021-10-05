import React from "react";
import Card from "./Card";
import { useState } from 'react';
import styles from "./OtherProducts.module.css";
import image1 from "../assets/choc_milk.jpg"
import image2 from "../assets/strawberry_milk.jpg"
import image3 from "../assets/carton_milk.jpg"


export default function OtherProducts() {

  const images = [
    image1,
    image2,
    image3
  ]

  const [counter, setCounter] = useState(0)

  const increaseHandler=()=>{
    setCounter((prev)=>prev+1);
  }

  const decreaseHandler=()=>{
    setCounter((prev)=>prev-1);
  }

  return (
    <Card className={styles.card}>
      <div className={styles["frame"]}>
        <div className={styles["heading"]}>Other Products</div>
          <div className={styles["gallery"]}>
              <button 
                onClick={decreaseHandler}
                disabled={counter<=0} 
                className={styles["button"]}>Prev</button>
              <img src={images[counter]}/>
              <button 
                onClick={increaseHandler}
                disabled={counter>=2} 
                className={styles["button"] }>Next</button>
          </div>
      </div>
    </Card>
  );
}
