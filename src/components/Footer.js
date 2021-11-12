import React from "react";
import "./Footer.css";
import leaf from "../assets/leaf.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-style">
        <p
          className="text-center"
          style={{ color: "#FFFFFF", marginTop: "6px" }}
        >
          Copyright @ 2021 Dewe Tour - Bisma Permana - NIS. All Right Reserverd
        </p>
        <img src={leaf} alt="" className="image-footer" />
      </div>
    </div>
  );
};

export default Footer;
