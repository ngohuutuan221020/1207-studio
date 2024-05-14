import React, { useState } from "react";
import "./HomeVideo.scss";
import video from "../video/video.mp4";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { setControl } from "state";

const videoHome = process.env.REACT_APP_VIDEO;

function HomeVideo() {
  const dispatch = useDispatch();

  const [isControls, setControls] = useState(false);

  const handleClickBtn = () => {
    setControls(!isControls);
    dispatch(setControl());
  };

  return (
    <div className="home-video">
      <ReactPlayer
        url={videoHome || video}
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
