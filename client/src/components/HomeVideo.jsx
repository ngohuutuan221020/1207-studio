import React, { useState } from "react";
import "./HomeVideo.scss";
import { useDispatch } from "react-redux";
import { setControl } from "state";
import { useMediaQuery } from "@mui/material";
import IMG from "../assets/videoframe_0.png";
const videoHome = process.env.REACT_APP_VIDEO;

function HomeVideo() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const dispatch = useDispatch();

  const [isControls, setControls] = useState(false);

  const handleClickBtn = () => {
    setControls(!isControls);
    dispatch(setControl());
  };

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
        controls={isControls}
        poster={IMG}
      >
        <source src={videoHome} type="video/mp4" />
      </video>
      <button className="btn" onClick={handleClickBtn}>
        <p>1207</p>
      </button>
    </div>
  );
}

export default HomeVideo;
