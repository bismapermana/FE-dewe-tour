import React from "react";
import Footer from "../../components/Footer";
import CardPayment from "../../components/molecules/cards/CardPayment";
import CardUser from "../../components/molecules/cards/CardUser";
import NavbarComp from "../../components/Navbars";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div>
      <NavbarComp />
      <CardUser />
      <h1 style={{ margin: "70px  0 30px 230px" }}>History Trip</h1>
      <CardPayment />
      <Footer />
    </div>
  );
};

export default UserProfile;
