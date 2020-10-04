import React, { useEffect, useState } from "react";
import "./signup.css";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Bounce from "react-reveal";
import { postLogin } from "../../utils/backend";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function refreshPage() {
    window.location.reload();
  }
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="content"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Bounce top>
          <div className="form-1" style={{ marginTop: 50 }}>
            <h2 style={{ margin: 0, marginBottom: 10, marginTop: 30 }}>
              Signup
            </h2>
            <input
              placeholder="Username"
              type="text"
              className="input"
              name="username"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              placeholder="Email"
              type="text"
              className="input"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="First Name"
              type="text"
              className="input"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              placeholder="Last Name"
              type="text"
              className="input"
              name="username"
              id="username"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="light"
              block
              className="submit-button"
              onClick={async () => {
                const user = await postLogin(userName, password);

                if (user) {
                  history.push("/dashboard");
                } else {
                  alert("Username or password is incorrect");
                }
              }}
            >
              Submit
            </Button>
            <Link style={{ marginBottom: 20 }} to="/login">
              <p>Already have an account?</p>
            </Link>
          </div>
        </Bounce>
      </div>
    </div>
  );
}
