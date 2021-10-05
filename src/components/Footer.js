import React from "react";
import styles from "./Footer.module.css";
import { useState } from "react";

export default function Footer() {
  const [show, setShow] = useState(true);
  const onClickHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={styles.footerContainer}>
      <div>
        {show && (
          // only if show is true then render component in brackets
          <div className={styles.columnComps}>
            <div className={styles.column}>
              <text className={styles.title}>Social Media</text>
              <text className={styles.body}>Instagram</text>
              <text className={styles.body}>Facebook</text>
              <text className={styles.body}>Twitter</text>
            </div>

            <div className={styles.column}>
              <text className={styles.title}>About Us</text>
              <text className={styles.body}>Mission Statement</text>
              <text className={styles.body}>Vision</text>
              <text className={styles.body}>Our Goals</text>
            </div>

            <div className={styles.column}>
              <text className={styles.title}>Contact Us</text>
              <text className={styles.body}>Live Chat</text>
              <text className={styles.body}>Location</text>
            </div>

            <div className={styles.column}>
              <text className={styles.title}>Quicklinks</text>
              <text className={styles.body}>Reviews</text>
              <text className={styles.body}>Recycle Now</text>
              <text className={styles.body}>Directions</text>
              <text className={styles.body}>Login</text>
              <text className={styles.body}>Help</text>
            </div>
          </div>
        )}

        <text className={styles.terms}>
          All rights reserved. Terms and Conditions apply.
        </text>

        <button className={styles.button} onClick={onClickHandler}>
          {show == true ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
