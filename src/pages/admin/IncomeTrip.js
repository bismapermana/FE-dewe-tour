import React from "react";
import CardContent from "../../components/molecules/cards/CardContent";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import NavbarComp from "../../components/Navbars";
import Footer from "../../components/Footer";

const IncomeTrip = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/addtrip");
  };

  return (
    <div>
      <NavbarComp />
      <div
        className="d-flex justify-content-between px-5 mt-5  "
        style={{ marginBottom: "-50px" }}
      >
        <h1>
          <b>Income Trip</b>
        </h1>
        <Button
          variant="warning"
          className="px-5"
          style={{ color: "white" }}
          onClick={handleClick}
        >
          <b> Add Trip</b>
        </Button>
      </div>
      <CardContent />
      <Footer />
    </div>
  );
};

export default IncomeTrip;
