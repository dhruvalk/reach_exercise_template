import React from "react";
import Card from "./Card";
import styles from "./ProductInfo.module.css";

export default function ProductInfo() {
  return (
    <Card className={styles.card}>
      <div>This is the product info card</div>
    </Card>
  );
}
