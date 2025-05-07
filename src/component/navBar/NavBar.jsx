import React from "react";
import styles from "./navBar.module.scss";
import { menuData } from "../../data/dataSheet";
import logo from "../../asset/logo/sunFyreLogo.png";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.right}>
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
      </div>
    </div>
  );
};

export default NavBar;
