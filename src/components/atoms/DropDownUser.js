import React from "react";
import { Dropdown, Image } from "react-bootstrap";
import "./DropDownUser.css";
import bill from "../../assets/bill.png";
import user from "../../assets/user.png";
import logout from "../../assets/logout.png";
import path from "../../assets/path.png";
import polygon from "../../assets/Polygon.png";
import { useHistory } from "react-router";

const DropDownUser = (props) => {
  const onHide = () => props.setShowDropdown(false);
  let history = useHistory();

  const status = props.state.user.name;

  const handleLogout = () => {
    props.dispatch({ type: "LOGOUT" });
    history.push("/");
    onHide();
  };

  const handleClickProfile = () => {
    history.push("/profile");
    onHide();
  };

  const handleClickPayment = () => {
    history.push("/payment");
    onHide();
  };

  return (
    props.showDropdown && (
      <>
        {status !== "admin" ? (
          <div>
            <img className="polygon-dropdown" src={polygon} alt="" />
            <div onClick={onHide} className="overlay-dropdown" />
            <div className="container-dropdown rounded shadow">
              <Dropdown.Item onClick={handleClickProfile}>
                <Image src={user} className="mr-3 mb-1" />
                <span>
                  <b>Profile</b>
                </span>
              </Dropdown.Item>
              <Dropdown.Item onClick={handleClickPayment}>
                <Image src={bill} className="mr-3 mb-1" />
                <span>
                  <b>Pay</b>
                </span>
              </Dropdown.Item>
              <hr style={{ border: "1px #a8a8a8 solid" }} />
              <Dropdown.Item onClick={handleLogout}>
                <Image src={logout} className="mr-3 " />
                <span>
                  <b>Logout</b>
                </span>
              </Dropdown.Item>
            </div>
          </div>
        ) : (
          <div>
            <img className="polygon-dropdown" src={polygon} alt="" />
            <div onClick={onHide} className="overlay-dropdown" />
            <div className="container-dropdown-admin rounded shadow">
              <Dropdown.Item>
                <Image src={path} className="mr-3 mb-1" />
                <span>
                  <b>Trip</b>
                </span>
              </Dropdown.Item>
              <hr style={{ border: "1px #a8a8a8 solid" }} />
              <Dropdown.Item onClick={handleLogout}>
                <Image src={logout} className="mr-3 " />
                <span>
                  <b>Logout</b>
                </span>
              </Dropdown.Item>
            </div>
          </div>
        )}
      </>
    )
  );
};

export default DropDownUser;
