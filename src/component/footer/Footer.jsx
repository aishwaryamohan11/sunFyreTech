import React from "react";
import styles from "./footer.module.scss";
import { menuData } from "../../data/dataSheet";
import logo from "../../asset/logo/sunFyreLogo.png";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img src={logo} alt="logo" className={styles.img} />
        </div>
        <div className={styles.middle}>
          {menuData?.map((item) => (
            <ul className={styles.order}>
              {" "}
              <li className={styles.list} key={item?.id}>
                <a href={item?.link} className={styles.link}>
                  {item?.list}
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div className={styles.right}>
          {" "}
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} &nbsp;
            <a
              href="https://wa.me/7339102942?text=Hi"
              target="_blank"
              rel="noreferrer"
            >
              Aishwarya
            </a>{" "}
            &nbsp; All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
