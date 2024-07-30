import React, { useEffect } from "react";
import "./ScrollToTop.scss";
const ScrollToTop = () => {
  useEffect(() => {
    let calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");

      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      if (pos > 100) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }
      scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient( #a4b0be ${scrollValue}%, #2f3542 ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
  }, []);
  return (
    <div id="progress">
      <span id="progress-value"></span>
    </div>
  );
};

export default ScrollToTop;
