import React from "react";
import CardContent from "../components/molecules/CardContent";
import CardInformation from "../components/molecules/CardInformation";

const landing = () => {
  return (
    <div>
      <div style={{ marginTop: "-50px", marginBottom: "80px" }}>
        <CardInformation />
      </div>

      <div className="text-center my-5">
        <h1>
          <b>Group Tour</b>
        </h1>
      </div>
      <CardContent />
    </div>
  );
};

export default landing;
