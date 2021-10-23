import React from "react";
import CardContent from "../../components/molecules/CardContent";
import { Button } from "react-bootstrap";

const IncomeTrip = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-between px-5 mt-5  "
        style={{ marginBottom: "-70px" }}
      >
        <h1>
          <b>Income Trip</b>
        </h1>
        <Button variant="warning" className="px-5" style={{ color: "white" }}>
          <b> Add Trip</b>
        </Button>
      </div>
      <CardContent />
    </div>
  );
};

export default IncomeTrip;
