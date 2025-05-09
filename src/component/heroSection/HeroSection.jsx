import React from "react";
import styles from "./heroSection.module.scss";
import aboutUsImg from "../../asset/aboutus.png";
const HeroSection = () => {
  return (
    <div className={styles.container} id="aboutUs">
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <img src={aboutUsImg} alt="aboutPage" className={styles.image} />
        </div>
        <div className={styles.left}>
          {/* <h1 className={styles.subtitle}>TEDI India</h1> */}
          <h1 className={styles.title}>
            Powering the Future with Innovation and Sustainability
          </h1>
          {/* <h4 className={styles.minititle}>ISO 9001:2015 Certified Company</h4> */}
          <div className={styles.desc}>
            {/* <p className={styles.descTop}>margin-top: 555px;</p> */}
            <p className={styles.descBottom}>
              At SunFyreTech, we're driving innovation across multiple essential
              technologies to power a smarter, greener future. Based in India,
              we specialize in
              <span className={styles.span}>
                {" "}
                electric scooter development, CCTV installation and repair, and
                solar energy solutions
              </span>
              . Whether it's building eco-friendly mobility with our EV
              scooters, securing homes and businesses with reliable surveillance
              systems, or harnessing clean energy through solar panel
              installations, our mission is to deliver high-quality, affordable
              technology that makes a difference. At the heart of SunFyreTech is
              a passionate team committed to sustainability, security, and
              service excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
