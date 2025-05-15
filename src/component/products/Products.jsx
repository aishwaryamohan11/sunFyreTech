import React from "react";
import styles from "./products.module.scss";
import { useNavigate } from "react-router-dom";
import { productsData } from "../../data/dataSheet";
const Products = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container} id="products">
      <div className={styles.wrapper}>
        <div className={styles.title}> Products</div>
        <div className={styles.cardAdjust}>
          <div className={styles.cardContainer}>
            {productsData?.map((item) => (
              <div
                className={styles.cardWrapper}
                key={item.id}
                onClick={() => navigate(`/products/${item.link.toLowerCase()}`)}
                style={{ cursor: "pointer", textAlign: "center" }}
              >
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
                <div className={styles.bottom}>
                  <div className={styles.button}>Know More</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
