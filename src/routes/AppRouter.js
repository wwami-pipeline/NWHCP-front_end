import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "../Components/About/About";
import { SignIn } from "../Components/Account/SignIn";
import { Header } from "../Components/Header/Header";
import Results from "../Components/Results/Results";
import SingleResult from "../Components/SingleResult/SingleResult";
import SignUp from "../Components/Account/SignUp";
import { AccountSettings } from "../Components/Account/AccountSettings";
import Footer from "../Components/Footer/Footer";
import { PrivateRoute } from "./PrivateRoute";
import HowTo from "../Components/HowTo/HowTo";
import { AchieveYourFuture } from "../Components/AchieveYourFuture/AchieveYourFuture";
import { Program } from "../Components/Program/Program";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Header />
        {/* <div className="push"></div> */}
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/how-to" component={HowTo} />
          <Route exact path="/search" component={Results} />
          <Route exact path="/single-result" component={SingleResult} />
          <Route
            exact
            path="/achieve-your-future"
            component={AchieveYourFuture}
          ></Route>
          <Route exact path="/show-program" component={Program}></Route>
          <Route exact path="/signin" component={SignIn}>
            {/* {user ? <SignOutButton setUser={this.setUser} setAuthToken={this.setAuthToken} />
                        :
                        <SignIn setPage={this.setPage} setAuthToken={this.setAuthToken} setUser={this.setUser} />
    
                    } */}
          </Route>
          <Route exact path="/signup" component={SignUp}>
            {/* {user ? <SignOutButton setUser={this.setUser} setAuthToken={this.setAuthToken} />
                        :
                        <SignUp setPage={this.setPage} setAuthToken={this.setAuthToken} setUser={this.setUser} />
                    } */}
          </Route>
          {/* <Route exact path="/account-settings" component={AccountSettings} /> */}
          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/account-settings"
            component={AccountSettings}
          />
          <Route
            exact
            path="/account-settings"
            render={() => (
              <AccountSettings
                user={{
                  FirstName: "Cody",
                  LastName: "Park",
                  JoinDate: "02-02-2021",
                  Email: "cody123@gmail.com",
                  Status: "Confirmed",
                }}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
