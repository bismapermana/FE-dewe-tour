import React, { useContext, useState } from "react";
import { Nav, Navbar, Image, Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Avatar from "react-avatar";
import data from "../json/user.json";
import logo from "../../src/assets/logoDeweTour.png";
import ModalLogin from "./molecules/Modals/ModalLogin";
import ModalRegister from "./molecules/Modals/ModalRegister";
import SearchBar from "./molecules/SearchBar";
import "./NavbarComp.css";

const NavbarComp = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();
  const [state, dispatch] = useContext(AuthContext);

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  return (
    <div>
      {pathname === "/" ? (
        // -----------------------NAVBAR LANDING PAGE----------------------------
        <div className="Nav-landingPage">
          <Navbar collapseOnSelect expand="lg" className="mx-5">
            <Navbar.Brand onClick={() => history.push("/")}>
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
                  name={state.user.name}
                  className="rounded-circle"
                  size="40"
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
            <SearchBar />
          </div>
        </div>
      ) : (
        //---------------------NAVBAR IS NOT LANDING PAGE -------------------
        <div className="NavImage mb-4">
          <Navbar collapseOnSelect expand="lg" className="mx-5">
            <Navbar.Brand onClick={() => history.push("/")}>
              <Image src={logo} fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              {state.isLogin === true ? (
                //----------------------IS LOGIN ----------------------------------
                <p bg-dark>profile</p>
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
        data={data}
      />
      <ModalRegister
        showRegister={showRegister}
        handleShowRegister={handleShowRegister}
        handleCloseRegister={handleCloseRegister}
      />
    </div>
  );
};

export default NavbarComp;
