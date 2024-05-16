import React, { useEffect } from "react";
import TopComponent from "./TopComponent";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TopComponent />
      Projects
    </div>
  );
};

export default Projects;
