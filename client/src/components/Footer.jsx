import React from "react";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer-content">
        <a href="./" className="logo-footer">
          1207<span>studio</span>
        </a>
        <p>Make a concept daily</p>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy;{year}. Designed by{" "}
          <span
            onClick={() => {
              navigate("./manage");
            }}
          >
            1207 studio
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
