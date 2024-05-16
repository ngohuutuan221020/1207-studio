import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

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
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const menuBtn = document.querySelector(".nav-menu-btn");
    const navigation = document.querySelector(".navigation");
    menuBtn.addEventListener("click", () => {
      navigation.classList.add("active");
    });
  }, []);
  const handleClickMenu = () => {
    if (showMenu) {
      let navigation = document.querySelector(".navigation");
      navigation.classList.add("active");
    } else {
      let navigation = document.querySelector(".navigation");
      navigation.classList.remove("active");
    }
    setShowMenu(!showMenu);
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
        <div
          className="nav-menu-btn"
          onClick={() => handleClickMenu()}
          style={{
            color: "white",
          }}
        >
          {showMenu ? <MdMenu /> : <MdClose />}
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
