import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;

    scrollTop >= 250
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };
  return (
    <div className="header">
      <div className="nav-bar">
        <div
          className="logo"
          onClick={() => {
            navigate("./home");
          }}
        >
          1207
        </div>
        <div className="navigation">
          <div className="nav-items">
            <div
              onClick={() => {
                navigate("./home");
              }}
            >
              Home
            </div>
            <div
              onClick={() => {
                navigate("./projects");
              }}
            >
              Projects
            </div>
            <div
              onClick={() => {
                navigate("./news");
              }}
            >
              News
            </div>
            <div
              onClick={() => {
                navigate("./contact");
              }}
            >
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
