import React, { useState } from "react";
import styles from "./mobileNavBar.module.scss";
import logo from "../../asset/logo/sunFyreLogo.png";
import { IconButton } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AutoAwesomeMosaicRoundedIcon from "@mui/icons-material/AutoAwesomeMosaicRounded";
import { menuData } from "../../data/dataSheet";

// const navData = [
//   { id: 1, title: "Home", link: "/" },
//   { id: 2, title: "About Us", link: "/aboutUs" },
//   { id: 3, title: "Products", link: "/products" },
//   { id: 4, title: "Downloads", link: "/downloads" },
//   { id: 5, title: "Contact Us", link: "#contactUs" },
// ];

const MobileNavBar = () => {
  //   const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);
  //   const router = useRouter();

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const position = window.pageYOffset;
  //       setScrollPosition(position);
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    // if (router.pathname === "/") {
    //   document
    //     .getElementById("contactUs")
    //     ?.scrollIntoView({ behavior: "smooth" });
    // } else {
    //   router.push("/#contactUs");
    // }
    setOpen(false);
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
                        onClick={() => setOpen(false)}
                      >
                        {nav.list === "Contact Us" ? (
                          <a href={nav.link} onClick={handleContactClick}>
                            {nav.list}
                          </a>
                        ) : (
                          <a className={styles.link} href={nav.link}>
                            {nav.list}
                          </a>
                        )}
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
