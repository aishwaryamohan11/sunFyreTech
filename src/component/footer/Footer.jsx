import React from "react";
import styles from "./footer.module.scss";
import { menuData } from "../../data/dataSheet";
import logo from "../../asset/logo/sunFyreLogo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
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
          <img src={logo} alt="logo" className={styles.img} />
        </div>
        <div className={styles.middle}>
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
        <div className={styles.right}>
          {" "}
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} &nbsp;
            <a
              href="https://wa.me/7339102942?text=Hi"
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit" }}
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
