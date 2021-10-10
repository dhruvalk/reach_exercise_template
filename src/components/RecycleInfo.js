import React from "react";
import Card from "./Card";
import { useState } from 'react';
import styles from "./RecycleInfo.module.css";

export default function RecycleInfo() {

  const [step, setStep] = useState(0)
  
  const steps = [
    "1. Leave the bottle cap on", 
    "2. Rinse the bottle", 
    "3. Recycle in bin", 
    "4. Recycling Completed!"
  ]

  const nextStep=()=>{
    setStep((prev)=>prev+1);
  }

  const reset=()=>{
    setStep(0)
  }

  const nextStepBtn=()=> {
    return (
    <button 
      onClick={nextStep}
      className={styles["button"]}>Next Step</button>
    )
  }

  const resetBtn=()=> {
    return (
    <button 
      onClick={reset}
      className={styles["button"]}>Reset</button>
    )
  }

  return <Card className={styles.card}>
      <div className={styles["frame"]}>
        <div className={styles["heading"]}>Steps to Recycle</div>
          <div className={styles["gallery"]}>
            <div className={styles["step"]}>
              {steps[step]}</div>
            {step === 3 ? resetBtn() : nextStepBtn()}
          </div>
      </div>
    </Card>;
}
