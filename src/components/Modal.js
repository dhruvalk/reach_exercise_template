import React from "react";
import styles from "./Modal.module.css";
import {useState} from "react";
import Card from "./Card";

export default function Modal(props) {

  
  return (
    <div className={styles.modal}>
      <Card className={styles.content}>
      <h2>Welcome To Our Website!</h2>
        <div>We aim to make a difference in the world today, through sustainability and better recycling methods.</div>
        <div>
          <button class="toggle-button" id="centered-toggle-button" onClick ={props.onClose}>Close button</button>
        </div>
      </Card >
    </div>)
   
    
  }
