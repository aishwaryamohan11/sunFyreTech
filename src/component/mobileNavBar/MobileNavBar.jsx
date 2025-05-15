import React, { useState } from "react";
import styles from "./mobileNavBar.module.scss";
import logo from "../../asset/logo/sunFyreLogo.png";
import { IconButton } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AutoAwesomeMosaicRoundedIcon from "@mui/icons-material/AutoAwesomeMosaicRounded";
import { menuData } from "../../data/dataSheet";
import { useNavigate, useLocation } from "react-router-dom";

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (hash) => {
    setOpen(false);
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
    <div className={styles.mobileContainer}>
      <div className={styles.mobileWrapper}>
        <div className={styles.left}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.right}>
          <AutoAwesomeMosaicRoundedIcon
            classes={{ root: styles.button }}
            onClick={() => setOpen(true)}
          />
        </div>

        {open && (
          <div className={styles.menuOverLay}>
            <div className={styles.menuOverLayContainer}>
              <div className={styles.menuOverLayWrapper}>
                <div className={styles.top}>
                  <div className={styles.innerleft}>
                    <img src={logo} alt="logo" className={styles.logo} />
                  </div>
                  <div className={styles.right}>
                    <IconButton
                      onClick={() => setOpen(false)}
                      className={styles.left}
                    >
                      <CancelOutlinedIcon className={styles.closeButton} />
                    </IconButton>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <ul className={styles.navWrapper}>
                    {menuData.map((nav) => (
                      <li
                        className={styles.nav}
                        key={nav.id}
                        // onClick={() => setOpen(false, nav.link)}
                        onClick={() => handleClick(nav.link)}
                      >
                        <a className={styles.link} href={nav.link}>
                          {nav.list}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.blurCard} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavBar;
