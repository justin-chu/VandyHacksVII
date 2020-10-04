import React, { useState } from "react";
import "./auth.css";
import { Link, useHistory } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { postLogin } from "../../utils/backend";

export default function Finances() {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div
				className="content"
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<div className="form" style={{ marginTop: 50 }}>
					<h2 style={{ margin: 0, marginBottom: 10 }}>Login</h2>
					<input
						placeholder="Username"
						type="text"
						className="form-control"
						name="username"
						id="username"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
					<input
						placeholder="Password"
						type="password"
						name="password"
						className="form-control"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button
						variant="light"
						block
						onClick={async () => {
							const user = await postLogin(userName, password);
							if (user) {
								history.push("/");
							} else {
							}
						}}
					>
						Submit
					</Button>
					<Link to="/signup">
						<p style={{ padding: 15 }}>Don't have an account?</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
