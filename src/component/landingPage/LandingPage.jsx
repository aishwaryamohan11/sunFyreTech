import React from "react";
import ev from "../../asset/small ev.jpeg";
import cctv from "../../asset/smallcctv.png";
import solar from "../../asset/small solar.jpeg";
import bg from "../../asset/landingbg.png";

const showroomData = [
  { title: "EV", img: ev },
  { title: "Solar", img: solar },
  { title: "CCTV", img: cctv },
];

const LandingPage = () => {
  return (
    <div
      id="home"
      style={{
        marginTop: "130px",
        // position: "relative",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "fit-content",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // alignItems: "flex-end", // Align content to bottom
        justifyContent: "center", // Center horizontally
        paddingBottom: "40px", // Spacing from bottom
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "38px",
          marginBottom: "8px",
          fontWeight: "bold",
          color: "black",
        }}
      >
        SUNFYRE TECH
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          marginBottom: "32px",
          color: "black",
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
          >
            <div style={{ height: "180px", width: "100%" }}>
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

            <div style={{ padding: "16px" }}>
              <h3 style={{ textAlign: "center" }}>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
