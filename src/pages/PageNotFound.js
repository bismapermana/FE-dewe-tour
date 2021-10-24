import React from "react";
import page from "../assets/notfound.jpg";
import { Image } from "react-bootstrap";

const PageNotFound = () => {
  return (
    <div>
      <Image src={page} fluid rounded />
    </div>
  );
};

export default PageNotFound;
