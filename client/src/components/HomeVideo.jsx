import React from "react";
import "./HomeVideo.scss";

import { useMediaQuery } from "@mui/material";
import IMG from "../assets/videoframe_0.png";
import videoHome from "../assets/video-bg.mp4";

function HomeVideo() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div
      className="home-video"
      style={{
        width: isMobile ? "100%" : "90%",
      }}
    >
      <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        loop
        muted
        autoPlay
        poster={IMG}
      >
        <source src={videoHome} type="video/mp4" />
      </video>
    </div>
  );
}

export default HomeVideo;
