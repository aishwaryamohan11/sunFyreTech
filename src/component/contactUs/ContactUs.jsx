import styles from "./contactUs.module.scss";
import { iconData } from "../../data/dataSheet";
import * as React from "react";

const ContactUs = () => {
  return (
    <div className={styles.container} id="contactUs">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2342908553696!2d80.14010442572295!3d12.956854365200039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e4ccf1b3981%3A0x26be7a6171ea21ab!2sSuper%20Saravana%20Stores%20-%20Chrompet!5e0!3m2!1sen!2sin!4v1746455041587!5m2!1sen!2sin"
              title="Google Map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
