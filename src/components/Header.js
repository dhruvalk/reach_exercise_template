import React from "react";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [color, setColor] = useState("white");


  return (
    < div >
      <header style={{ background: color, color: setColor }} className={styles.header} >

        <div className={styles.title}>
          Recycle Company
        </div>
        <div onClick={() => { setColor(prev => prev === "white" ? "lightgreen" : "white") }} className={styles.navigation}>
          <text className={styles.navigationBody}>Home</text>
          <text className={styles.navigationBody}>Profile</text>
          <text className={styles.navigationBody}>Settings</text>
          <text className={styles.navigationBody}>Change</text>
        </div>


      </header>;
    </div >
  )
}


// export default function Header() {
//   const [color, setColor] = useState("white");


//   return (
//     < div >
//       <header style={{ background: color, color: setColor }} className='header' >

//         <div className={styles.title}>
//           Recycle Company
//         </div>
//         <div onClick={() => { setColor("lightgreen") }} className={styles.navigation}>
//           <text className={styles.navigationBody}>Home</text>
//           <text className={styles.navigationBody}>Profile</text>
//           <text className={styles.navigationBody}>Settings</text>
//           <text className={styles.navigationBody}>Change</text>
//         </div>


//       </header>;
//     </div >
//   )
// }