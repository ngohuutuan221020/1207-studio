import { useEffect } from "react";
import "./Loader.scss";
import { preLoaderAnim } from "./Animated";

function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>1</span>
        <span>2</span>
        <span>0</span>
        <span>7</span>
        <span>studio</span>
      </div>
    </div>
  );
}

export default PreLoader;
