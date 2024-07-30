import React from "react";
import background1207 from "../assets/background1207.jpg";
const TopComponent = () => {
  return (
    <div className="top-component" style={{ height: "10rem" }}>
      <div
        className="img"
        style={{
          backgroundImage: `url("${background1207}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>
    </div>
  );
};

export default TopComponent;
