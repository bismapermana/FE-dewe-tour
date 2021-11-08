import React, { useState } from "react";
import Footer from "../components/Footer";
import CardContent from "../components/molecules/cards/CardContent";
import CardInformation from "../components/molecules/cards/CardInformation";
import NavbarComp from "../components/Navbars";

const Landing = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <NavbarComp search={search} setSearch={setSearch} />
      <div style={{ marginTop: "-50px", marginBottom: "80px" }}>
        <CardInformation />
      </div>

      <div className="text-center my-5">
        <h1>
          <b>Group Tour</b>
        </h1>
      </div>
      <CardContent search={search} />
      <Footer />
    </div>
  );
};

export default Landing;
