import React from "react";
import AddForm from "../../components/atoms/AddForm";
import Footer from "../../components/Footer";
import NavbarComp from "../../components/Navbars";

const AddTrip = () => {
  return (
    <div>
      <NavbarComp />
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
      <Footer />
    </div>
  );
};

export default AddTrip;
