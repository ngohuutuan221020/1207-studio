import "./Home.scss";
import HomeVideo from "./HomeVideo";
import SwiperHome from "./SwiperHome";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
