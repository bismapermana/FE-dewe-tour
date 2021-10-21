import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FooterComp from "./components/FooterComp";
import Landing from "./pages/Landing";
import NavbarComp from "./components/NavbarComp";
import TripDetail from "./pages/TripDetail";
import "./App.css";
import UserProfile from "./pages/user/UserProfile";

const App = () => {
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <BrowserRouter>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/detail" component={TripDetail} />
          <Route exact path="/profile" component={UserProfile} />
        </Switch>
        <FooterComp />
      </BrowserRouter>
    </div>
  );
};

export default App;
