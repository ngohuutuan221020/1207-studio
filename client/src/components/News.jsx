import React, { useEffect } from "react";
import TopComponent from "./TopComponent";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TopComponent />
      News
    </div>
  );
};

export default News;
