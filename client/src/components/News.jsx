import React, { useEffect } from "react";
import TopComponent from "./TopComponent";
import Header from "../components/Sections/Header";
import Projects from "../components/Sections/Projects";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="news-container">
      <TopComponent />
      <Header />
      <Projects />
    </div>
  );
};

export default News;
