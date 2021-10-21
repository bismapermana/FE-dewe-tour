import React from "react";
import CardContent from "../../components/molecules/CardContent";
import { Button } from "react-bootstrap";

const IncomeTrip = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Income Trip</h1>
        <Button variant="warning" style={{ color: "white" }}>
          Add Trip
        </Button>
      </div>
      <CardContent />
    </div>
  );
};

export default IncomeTrip;
