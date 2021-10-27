import React from "react";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer";
import CardPayment from "../../components/molecules/CardPayment";
import NavbarComp from "../../components/Navbars";

const Payment = () => {
  return (
    <div className="p-5">
      <NavbarComp />
      <CardPayment />
      <Button
        style={{ marginLeft: "1000px", width: "150px", color: "white" }}
        variant="warning"
      >
        PAY
      </Button>
      <Footer />
    </div>
  );
};

export default Payment;
