import React from "react";
import polygon from "../../assets/Polygon.png";
import "./DropDownNotification.css";

const DropDownNotification = (props) => {
  return (
    props.showDropdownNotification && (
      <div>
        <img src={polygon} alt="" className="polygon-notification" />
        <div
          onClick={props.handleCloseDropdownNotification}
          className="overlay-dropdown"
        />
        <div className="container-dropdown-notification"></div>
      </div>
    )
  );
};

export default DropDownNotification;
