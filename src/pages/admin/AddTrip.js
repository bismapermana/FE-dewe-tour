import React from "react";
import AddForm from "../../components/atoms/AddForm";

const AddTrip = () => {
  return (
    <div>
      <p
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          marginLeft: "60px",
          marginTop: "40px",
        }}
      >
        Add Trip
      </p>
      <div className="d-flex justify-content-center">
        <AddForm />
      </div>
    </div>
  );
};

export default AddTrip;
