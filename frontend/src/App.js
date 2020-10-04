import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard";
import Account from "./pages/account/account";
import Auth from "./pages/auth/auth";
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

          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/logout">
            <Auth />
          </Route>

          <ProtectedRoute exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}
