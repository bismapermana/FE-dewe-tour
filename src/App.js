import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FooterComp from "./components/FooterComp";
import Landing from "./pages/Landing";
import NavbarComp from "./components/NavbarComp";
import TripDetail from "./pages/TripDetail";
import "./App.css";
import UserProfile from "./pages/user/UserProfile";
import Payment from "./pages/user/Payment";
import ListTransaction from "./pages/admin/ListTransaction";
import IncomeTrip from "./pages/admin/IncomeTrip";

const App = () => {
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <BrowserRouter>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/detail" component={TripDetail} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/list" component={ListTransaction} />
          <Route exact path="/income" component={IncomeTrip} />
        </Switch>
        <FooterComp />
      </BrowserRouter>
    </div>
  );
};

export default App;
