import React from "react";
import Card from "./Card";
import styles from "./OtherProducts.module.css";

export default function OtherProducts() {
  return (
    <Card className={styles.card}>
      <div>This is other products card</div>
    </Card>
  );
}
