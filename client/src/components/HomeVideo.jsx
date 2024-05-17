import React, { useState } from "react";
import "./HomeVideo.scss";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { setControl } from "state";
import { useMediaQuery } from "@mui/material";

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
      <ReactPlayer
        url={videoHome}
        loop={true}
        muted={true}
        playing={true}
        width={"100%"}
        height={"100%"}
        controls={isControls}
      />

      <button className="btn" onClick={handleClickBtn}>
        <p>1207</p>
      </button>
    </div>
  );
}

export default HomeVideo;
