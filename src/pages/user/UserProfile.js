import React from "react";
import CardPayment from "../../components/molecules/CardPayment";
import CardUser from "../../components/molecules/CardUser";

const UserProfile = () => {
  return (
    <div>
      <CardUser />
      <h1 style={{ margin: "130px  0 30px 230px" }}>History Trip</h1>
      <CardPayment />
    </div>
  );
};

export default UserProfile;
