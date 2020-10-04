import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/dashboard/dashboard";
import Account from "./pages/account/account";
import Auth from "./pages/auth/auth";
import { isLoggedIn } from "./utils/backend";

export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link
								to="/"
								style={{
									fontWeight: "bold",
									color: "black",
									marginLeft: 10,
								}}
							>
								Website Name
							</Link>
						</li>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<li>
							<Link to="/account">Account</Link>
						</li>
						{isLoggedIn() ? (
							<li>
								<Link to="/auth">Log in</Link>
							</li>
						) : (
							<li>
								<Link to="/logout">Log out</Link>
							</li>
						)}
					</ul>
				</nav>

				<Switch>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route path="/account">
						{isLoggedIn() ? <Auth /> : <Account />}
					</Route>
					<Route path="/auth">
						<Auth />
					</Route>
					<Route path="/logout">
						<Auth />
					</Route>
					<Route path="/">
						{isLoggedIn() ? <Auth /> : <Dashboard />}
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
