import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Navbars from "./components/Navbars";
import TripDetail from "./pages/TripDetail";
import "./App.css";
import UserProfile from "./pages/user/UserProfile";
import Payment from "./pages/user/Payment";
import ListTransaction from "./pages/admin/ListTransaction";
import IncomeTrip from "./pages/admin/IncomeTrip";
import AddTrip from "./pages/admin/AddTrip";
import { AuthContext } from "./context/AuthContext";
import ModalApprove from "./components/molecules/Modals/ModalApprove";

const App = () => {
  const [state] = useContext(AuthContext);

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <BrowserRouter>
        <Switch>
          {(() => {
            if (state.isLogin === false) {
              //-----------------------------------IS NOT LOGIN ---------------------------------------------------------
              return (
                <>
                  <Navbars />
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/detail/:id" component={TripDetail} />
                  <Route exact path="/modal" component={ModalApprove} />
                  <Footer style={{ height: "100vh" }} />
                </>
              );
            } else {
              //--------------------------------IS LOGIN ------------------------------------------------------------
              return (
                <>
                  {state.user.name !== "admin" ? (
                    //-------------------------------------IS NOT ADMIN ----------------------------------------
                    <>
                      <Navbars />
                      <Route exact path="/" component={Landing} />
                      <Route exact path="/detail/:id" component={TripDetail} />
                      <Route exact path="/profile" component={UserProfile} />
                      <Route exact path="/payment" component={Payment} />
                      <Footer style={{ height: "100vh" }} />
                    </>
                  ) : (
                    //-------------------------------------IS ADMIN -----------------------------------
                    <>
                      <Navbars />
                      <Route exact path="/income" component={IncomeTrip} />
                      <Route exact path="/list" component={ListTransaction} />
                      <Route exact path="/addtrip" component={AddTrip} />
                      <Footer style={{ height: "100vh" }} />
                    </>
                  )}
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
