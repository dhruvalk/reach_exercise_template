import React from "react";
import styles from "./Footer.module.css";
import { useState } from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

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
              <div className={styles.socials}>
                <img className={styles.icon} src={instagram} />
                <text className={styles.body}>Instagram</text>
              </div>

              <div className={styles.socials}>
                <img className={styles.icon} src={facebook} />
                <text className={styles.body}>Facebook</text>
              </div>

              <div className={styles.socials}>
                <img className={styles.icon} src={twitter} />
                <text className={styles.body}>Twitter</text>
              </div>
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
