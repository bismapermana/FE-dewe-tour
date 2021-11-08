import React, { useContext, useState } from "react";
import { Nav, Navbar, Image, Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Avatar from "react-avatar";
import logo from "../../src/assets/logoDeweTour.png";
import ModalLogin from "./molecules/modals/ModalLogin";
import ModalRegister from "./molecules/modals/ModalRegister";
import SearchBar from "./SearchBar";
import "./Navbars.css";
import DropDownUser from "./atoms/DropDownUser";

const NavbarComp = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();
  const [state, dispatch] = useContext(AuthContext);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowDropdown = () => setShowDropdown(true);

  return (
    <div>
      {pathname === "/" ? (
        // -----------------------NAVBAR LANDING PAGE----------------------------
        <div className="Nav-landingPage">
          <Navbar collapseOnSelect expand="lg" className="mx-5">
            <Navbar.Brand
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              <Image src={logo} fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              {state.isLogin === true ? (
                //------------------- LOGIN --------------------------
                <Avatar
                  name={state.user.fullName}
                  className="rounded-circle"
                  size="40"
                  onClick={handleShowDropdown}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                //-----------------------IS NOT LOGIN --------------------------
                <Nav>
                  <Nav.Link>
                    <Button
                      variant="outline-light"
                      className="px-4 py-1"
                      onClick={handleShowLogin}
                    >
                      Sign In
                    </Button>
                  </Nav.Link>
                  <Nav.Link eventKey={2}>
                    <Button
                      variant="warning"
                      style={{ color: "black" }}
                      className="px-4 py-1"
                      onClick={handleShowRegister}
                    >
                      Sign Up
                    </Button>
                  </Nav.Link>
                </Nav>
              )}
            </Navbar.Collapse>
          </Navbar>
          <div
            style={{ color: "white", marginTop: "50px", marginLeft: "80px" }}
          >
            <h1>
              <b>Explore </b>
            </h1>
            <h1 style={{ fontWeight: "100", marginBottom: "50px" }}>
              YOUR AMAZING CITY TOGETHER
            </h1>
            <SearchBar search={props.search} setSearch={props.setSearch} />
          </div>
        </div>
      ) : (
        //---------------------NAVBAR IS NOT ON LANDING PAGE -------------------
        <div className="NavImage mb-4">
          <Navbar collapseOnSelect expand="lg" className="mx-5">
            <Navbar.Brand
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              <Image src={logo} fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              {state.isLogin === true ? (
                //----------------------IS LOGIN ----------------------------------
                <Avatar
                  name={state.user.fullName}
                  className="rounded-circle"
                  size="40"
                  onClick={handleShowDropdown}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                //----------------------IS NOT LOGIN -------------------------------
                <Nav>
                  <Nav.Link>
                    <Button
                      variant="outline-light"
                      className="px-4 py-1"
                      onClick={handleShowLogin}
                    >
                      Sign In
                    </Button>
                  </Nav.Link>
                  <Nav.Link eventKey={2}>
                    <Button
                      variant="warning"
                      style={{ color: "black" }}
                      className="px-4 py-1"
                      onClick={handleShowRegister}
                    >
                      Sign Up
                    </Button>
                  </Nav.Link>
                </Nav>
              )}
            </Navbar.Collapse>
          </Navbar>
        </div>
      )}
      <ModalLogin
        showLogin={showLogin}
        handleLogin={handleShowLogin}
        handleCloseLogin={handleCloseLogin}
        dispatch={dispatch}
        state={state}
      />
      <ModalRegister
        showRegister={showRegister}
        handleShowRegister={handleShowRegister}
        handleCloseRegister={handleCloseRegister}
      />

      <DropDownUser
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        dispatch={dispatch}
        state={state}
      />
    </div>
  );
};

export default NavbarComp;
