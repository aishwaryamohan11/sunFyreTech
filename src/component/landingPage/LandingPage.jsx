import React from "react";
import ev from "../../asset/product/ev.jpg";
import cctv from "../../asset/cctv.jpg";
import solar from "../../asset/small solar.jpeg";
// import bg from "../../asset/landingbg.png"; // No longer needed
import bgVideo from "../../asset/video.mp4"; // 🔄 Import your video here
import styles from "./landingPage.module.scss";
import { useNavigate } from "react-router-dom";

const showroomData = [
  { title: "EV", img: ev, link: "EV" },
  { title: "Solar", img: solar, link: "SOLAR" },
  { title: "CCTV", img: cctv, link: "CCTV" },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      id="home"
      style={{
        marginTop: "130px",
        position: "relative",
        height: "fit-content",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "40px",
      }}
    >
      {/* 🔽 Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2
        style={{
          textAlign: "center",
          fontSize: "38px",
          marginBottom: "8px",
          fontWeight: "bold",
          color: "white",
        }}
        className={styles.company}
      >
        SUNFYRE TECH
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          marginBottom: "32px",
          color: "white",
        }}
      >
        Welcomes you
      </p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {showroomData.map((item, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(0,0,0,0.25)",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            className={styles.over}
            onClick={() => navigate(`/products/${item.link.toLowerCase()}`)}
          >
            <div style={{ height: "250px", width: "100%" }}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div style={{ padding: "0px" }}>
              <h3 style={{ textAlign: "center" }}>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
