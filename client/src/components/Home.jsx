import "./Home.scss";
import HomeVideo from "./HomeVideo";
import SwiperHome from "./SwiperHome";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <HomeVideo />
        <SwiperHome />
      </div>
    </>
  );
};

export default Home;
