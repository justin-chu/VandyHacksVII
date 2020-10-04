import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard";
import Account from "./pages/account/account";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import { ProtectedRoute } from "./utils/protected.route";
import Nav from "./components/nav/nav";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/account" component={Account} />

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          <ProtectedRoute exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}
