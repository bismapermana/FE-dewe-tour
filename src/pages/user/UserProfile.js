import React from "react";
import CardHistoryTrip from "../../components/molecules/CardHistoryTrip";
import CardUser from "../../components/molecules/CardUser";

const UserProfile = () => {
  return (
    <div>
      <CardUser />
      <CardHistoryTrip />
    </div>
  );
};

export default UserProfile;
