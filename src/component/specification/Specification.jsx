import React from "react";
import styles from "./specification.module.scss";
import { Button } from "@mui/material";

const Specification = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Specification</div>
        {product?.datas?.map((item) => (
          <div className={styles.specificationWrapper}>
            <div className={styles.left}>
              <img src={item?.productImg} alt="img" className={styles.img} />
            </div>
            <div className={styles.right}>
              <div className={styles.heading}>{item?.heading}</div>
              <div className={styles.desc}>{item?.desc}</div>
              <div className={styles.buttonContainer}>
                <Button variant="contained" className={styles.button}>
                  Know More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specification;
