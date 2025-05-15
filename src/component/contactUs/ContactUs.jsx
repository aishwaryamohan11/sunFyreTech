import styles from "./contactUs.module.scss";
import { iconData } from "../../data/dataSheet";
import * as React from "react";

const ContactUs = () => {
  return (
    <div className={styles.container} id="contactUs">
      <div
        style={{
          color: "#eca415",
          textAlign: "center",
          fontSize: "45px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          marginBottom:"55px"
        }}
      >
        Contact Us
      </div>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          {iconData.map((item) => (
            <div className={styles.icon} key={item?.id}>
              <a
                href={item?.link}
                target="_blank"
                rel="noreferrer"
                className={styles.iconStyle}
              >
                {" "}
                {item?.icon}
              </a>
            </div>
          ))}
        </div>

        <div className={styles.right}>
          <div className={styles.mapWrapper}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3783.6665666726326!2d73.81918727487947!3d18.49875656984082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x3bc2bfeacf490eab%3A0x84b9062543fdf150!2sSunfire%20Technologies%20Pvt.%20Ltd.%2C%20Giridhar%20Avenue%2C%202nd%20Floor%20S.No.20%2F2%20Plot%20No.R1%2CCTS%20No.677%2C%20opposite%20to%20City%20Pride%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!3m2!1d18.4987515!2d73.8217622!5e0!3m2!1sen!2sin!4v1746595340377!5m2!1sen!2sin"
              width="600"
              height="450"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
