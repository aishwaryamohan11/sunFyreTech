import React from "react";
import MobileNavBar from "../mobileNavBar/MobileNavBar";
import NavBar from "../navBar/NavBar";
import styles from "./commanNavBar.module.scss";

const CommanNavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <NavBar />
      </div>
      <div className={styles.bottom}>
        <MobileNavBar />
      </div>
    </div>
  );
};

export default CommanNavBar;
