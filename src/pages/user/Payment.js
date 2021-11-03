import React from "react";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer";
import CardPayment from "../../components/molecules/cards/CardPayment";
import NavbarComp from "../../components/Navbars";

const Payment = () => {
  return (
    <>
      <NavbarComp />
      <div className="p-5">
        <CardPayment />
        <Button
          style={{ marginLeft: "1000px", width: "150px", color: "white" }}
          variant="warning"
        >
          PAY
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
