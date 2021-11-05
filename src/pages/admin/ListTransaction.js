import React from "react";
import TableTransaction from "../../components/atoms/TableTransaction";
import Footer from "../../components/Footer";
import NavbarComp from "../../components/Navbars";

const ListTransaction = () => {
  return (
    <div>
      <NavbarComp />
      <div className="d-flex justify-content-center py-5 ">
        <div style={{ width: "1200px", minHeight: "100vh" }}>
          <TableTransaction />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListTransaction;
