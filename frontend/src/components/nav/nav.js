import React, { useEffect, useState } from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Nav = (props) => {
	const [isAuthenticated, setIsAuthenticated] = useState(null);

	function isLoggedIn() {
		return localStorage.getItem("id") != null;
	}

	useEffect(() => {
		if (isLoggedIn()) setIsAuthenticated(true);
		else setIsAuthenticated(false);
	}, []);

	return (
		<nav>
			<ul>
				<li>
					<Link
						to="/"
						style={{
							fontWeight: "bold",
							color: "black",
							marginLeft: 20,
							marginRight: 20,
							padding: 0,
						}}
					>
						<img
							style={{ marginBottom: -30 }}
							src={Logo}
							height={42}
							width={180}
						/>
					</Link>
				</li>
				<li>
					<Link to="/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link to="/account">Account</Link>
				</li>

				{isAuthenticated ? (
					<li>
						<Link
							to="/auth"
							onClick={() => setIsAuthenticated(false)}
						>
							Log out
						</Link>
					</li>
				) : (
					<li>
						<Link
							to="/auth"
							onClick={() => setIsAuthenticated(true)}
						>
							Log in
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Nav;
