import React from "react";
import styles from "./navBar.module.scss";
import { menuData } from "../../data/dataSheet";
import logo from "../../asset/logo/sunFyreLogo.png";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (hash) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: hash } });
    } else {
      const target = document.getElementById(hash.replace("#", ""));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.right}>
          {menuData.map((item) => (
            <ul className={styles.order} key={item.id}>
              <li
                className={styles.list}
                onClick={() => handleClick(item.link)}
              >
                <span className={styles.link}>{item.list}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
