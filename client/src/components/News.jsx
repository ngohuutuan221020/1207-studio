import React, { useEffect } from "react";
import TopComponent from "./TopComponent";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="news-container">
      <TopComponent />
      news
    </div>
  );
};

export default News;
