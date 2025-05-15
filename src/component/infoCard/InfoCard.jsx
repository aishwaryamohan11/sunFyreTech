import React from "react";
import styles from "./infoCard.module.scss";
const InfoCard = ({ miniHeading, desc1, backgroundColor }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper} styles={{ backgroundColor: "green" }}>
        <div className={styles.infoContainer}>
          <h5 className={styles.minHeading}>{miniHeading}</h5>
          <p className={styles.desc1}>{desc1}</p>
        </div>
        <div
          className={styles.bgCard}
          style={{ backgroundColor: backgroundColor }}
        />
      </div>
    </div>
  );
};

export default InfoCard;
