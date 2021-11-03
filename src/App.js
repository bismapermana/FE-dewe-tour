import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Landing from "./pages/Landing";
import TripDetail from "./pages/TripDetail";
import "./App.css";
import UserProfile from "./pages/user/UserProfile";
import Payment from "./pages/user/Payment";
import ListTransaction from "./pages/admin/ListTransaction";
import IncomeTrip from "./pages/admin/IncomeTrip";
import AddTrip from "./pages/admin/AddTrip";
import { AuthContext } from "./context/AuthContext";
import { API, setAuthToken } from "./config/api";

const App = () => {
  const [state, dispatch] = useContext(AuthContext);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return null;
        }
        setAuthToken(token);
        const getData = await API.get("/user");
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: getData.data.data,
        });
      } catch (error) {
        return null;
      }
    };
    checkUser();
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <BrowserRouter>
        {(() => {
          if (state.isLogin === false) {
            //-----------------------------------IS NOT LOGIN ---------------------------------------------------------
            return (
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/detail/:id" component={TripDetail} />
                <Route component={PageNotFound} />
              </Switch>
            );
          } else {
            //--------------------------------IS LOGIN ------------------------------------------------------------
            return (
              <>
                {state.user.status !== "admin" ? (
                  //-------------------------------------IS NOT ADMIN ----------------------------------------
                  <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/detail/:id" component={TripDetail} />
                    <Route exact path="/profile" component={UserProfile} />
                    <Route exact path="/payment" component={Payment} />
                  </Switch>
                ) : (
                  //-------------------------------------IS ADMIN -----------------------------------
                  <Switch>
                    <Route exact path="/income" component={IncomeTrip} />
                    <Route exact path="/list" component={ListTransaction} />
                    <Route exact path="/addtrip" component={AddTrip} />
                    <Route exact path="/" component={Landing} />
                  </Switch>
                )}
              </>
            );
          }
        })()}
      </BrowserRouter>
    </div>
  );
};

export default App;
