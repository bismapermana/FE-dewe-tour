import React from "react";
import FooterComp from "./components/FooterComp";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <Landing />
      <FooterComp />
    </div>
  );
};

export default App;
