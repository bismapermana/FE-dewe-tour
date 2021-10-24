import React, { useContext } from "react";
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
import AddTrip from "./pages/admin/AddTrip";
import { AuthContext } from "./context/AuthContext";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const [state] = useContext(AuthContext);
  console.log(state);

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <BrowserRouter>
        <Switch>
          {(() => {
            if (state.isLogin === false) {
              return (
                <>
                  <NavbarComp />
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/detail/:id" component={TripDetail} />
                  <Route exact component={PageNotFound} />
                  <FooterComp />
                </>
              );
            } else {
              return (
                <>
                  <NavbarComp />
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/detail/:id" component={TripDetail} />
                  <Route exact path="/profile" component={UserProfile} />
                  <Route exact path="/payment" component={Payment} />
                  <Route exact path="/list" component={ListTransaction} />
                  <Route exact path="/income" component={IncomeTrip} />
                  <Route exact path="/addtrip" component={AddTrip} />
                  <Route exact component={PageNotFound} />
                  <FooterComp />
                </>
              );
            }
          })()}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
