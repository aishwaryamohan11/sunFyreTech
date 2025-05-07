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
            Shaping the Future of Vehicle Safety and Automotive Solutions{" "}
          </h1>
          <h4 className={styles.minititle}>ISO 9001:2015 Certified Company</h4>
          <div className={styles.desc}>
            <p className={styles.descTop}>
              Founded in 2012, TEDI India Pvt Ltd is an ISO 9001:2015 and ISO/TS
              16949:2009 certified company that has been a key player in the
              automotive industry for over a decade. Our focus is on
              manufacturing and marketing a wide range of Vehicle Safety
              products and Automotive solutions. We proudly serve both
              government and private vehicles, offering products like Auto
              Dippers, Speed Limiting Devices, GPS Vehicle Location Tracking
              Systems, Vehicle CCTV Cameras, PUC-Vehicle Emission Testing
              Equipment&apos;s, HSRP-High Security Registration Number Plates,
              Vehicle Fire Safety Products that adhere to the highest safety
              standards set by ICAT and ARAI.
            </p>
            <p className={styles.descBottom}>
              TEDI India holds 35% market share in road safety and Vehicle
              Safety products and is expanding its offerings. We launched TEDI
              Electric Vehicles, entering the electric two-wheeler market with
              sustainable, high-performance designs. Our 600 employees and
              extensive distributor network provide excellent customer service.
              Committed to enhancing road safety, TEDI India invests in research
              and innovation to meet the automotive sector&apos;s evolving
              needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
