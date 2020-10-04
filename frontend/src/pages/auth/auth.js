import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";

export default function Finances() {
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
          <h2 style={{ margin: 0, marginBottom: 10 }}>Login/Signup</h2>
          <textarea type="text" name="username" />
          <textarea type="password" name="password" />
          <Link to="/dashboard" className="button">
            <h4 style={{ margin: 0, color: "white" }}>Yes</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
