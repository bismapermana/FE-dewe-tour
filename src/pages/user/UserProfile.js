import React from "react";
import Footer from "../../components/Footer";
import CardPayment from "../../components/molecules/CardPayment";
import CardUser from "../../components/molecules/CardUser";
import NavbarComp from "../../components/Navbars";

const UserProfile = () => {
  return (
    <div>
      <NavbarComp />
      <CardUser />
      <h1 style={{ margin: "130px  0 30px 230px" }}>History Trip</h1>
      <CardPayment />
      <Footer />
    </div>
  );
};

export default UserProfile;
