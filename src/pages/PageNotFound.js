import React from "react";
import { Image } from "react-bootstrap";
import image from "../assets/notfound.png";
import NavbarComp from "../components/Navbars";
import Footer from "../components/Footer";

const PageNotFound = () => {
  return (
    <div>
      <NavbarComp />
      <div className="d-flex justify-content-center mt-5">
        <div>
          <Image src={image} style={{ width: "500px" }} />
          <h1 style={{ textAlign: "center", color: "orange" }} className="mt-5">
            404 ERROR!
          </h1>
          <p style={{ textAlign: "center" }}>
            We can't find page what you're looking for
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
