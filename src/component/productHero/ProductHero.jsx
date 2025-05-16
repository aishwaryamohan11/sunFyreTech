import React from "react";
import InfoCard from "../infoCard/InfoCard";
import styles from "./productHero.module.scss";

const ProductHero = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img src={product?.fullimg} alt="solarhero" className={styles.img} />
          <img
            src={product?.mbimg}
            alt="solarhero"
            className={styles.mbimg}
          />
        </div>
        <div className={styles.right}>
          <InfoCard
            miniHeading="Reliable Solar Installation & Repair Services – Power Your Future with Confidence"
            desc1="Harness the power of the sun with our expert solar installation and repair services. Whether you're setting up a new solar system or need maintenance and troubleshooting for an existing one, we provide trusted solutions tailored to your energy needs."
          />
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
