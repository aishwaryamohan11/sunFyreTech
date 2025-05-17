"use client";
import React, { useEffect, useRef } from "react";
import styles from "./specification.module.scss";
import { Button } from "@mui/material";
import { gsap } from "gsap";

const Specification = ({ product }) => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((img, index) => {
      if (img) {
        gsap.fromTo(
          img,
          { x: -200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.3,
          }
        );
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Specification</div>
        {product?.datas?.map((item, index) => (
          <div key={index} className={styles.specificationWrapper}>
            <div className={styles.left}>
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={item?.productImg}
                alt="img"
                className={styles.img}
              />
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
