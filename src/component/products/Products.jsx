import React from "react";
import styles from "./products.module.scss";
import { productsData } from "../../data/dataSheet";
const Products = () => {
  return (
    <div className={styles.container} id="products">
      <div className={styles.wrapper}>
        <div className={styles.title}> Products</div>
        <div className={styles.cardAdjust}>
          <div className={styles.cardContainer}>
            {productsData?.map((item) => (
              <div className={styles.cardWrapper}>
                {" "}
                <div className={styles.top}>
                  <div className={styles.topTop}>
                    {" "}
                    <img
                      src={item?.img}
                      alt="products"
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.topBottom}>{item?.title}</div>
                </div>{" "}
                {/* <div className={styles.bottom}>
                  <div className={styles.button}>Know More</div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
