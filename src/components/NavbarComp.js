import React, { useState } from "react";
import { Nav, Navbar, Image, Button } from "react-bootstrap";
import logo from "../../src/assets/logoDeweTour.png";
import ModalLogin from "./molecules/Modals/ModalLogin";
import ModalRegister from "./molecules/Modals/ModalRegister";

import SearchBar from "./molecules/SearchBar";
import "./NavbarComp.css";

const NavbarComp = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

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
    <div className="NavImage">
      <Navbar collapseOnSelect expand="lg" className="mx-5">
        <Navbar.Brand href="/">
          <Image src={logo} fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
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
        </Navbar.Collapse>
      </Navbar>
      <div style={{ color: "white", marginTop: "50px", marginLeft: "80px" }}>
        <h1>
          <b>Explore </b>
        </h1>
        <h1 style={{ fontWeight: "100", marginBottom: "50px" }}>
          YOUR AMAZING CITY TOGETHER
        </h1>
        <SearchBar />
      </div>
      <ModalLogin
        showLogin={showLogin}
        handleLogin={handleShowLogin}
        handleCloseLogin={handleCloseLogin}
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
