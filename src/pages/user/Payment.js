import React from "react";
import { Button } from "react-bootstrap";
import CardPayment from "../../components/molecules/CardPayment";

const Payment = () => {
  return (
    <div className="p-5">
      <CardPayment />
      <Button
        style={{ marginLeft: "1000px", width: "150px", color: "white" }}
        variant="warning"
      >
        PAY
      </Button>
    </div>
  );
};

export default Payment;
