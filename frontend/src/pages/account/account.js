import React from "react";
import "./account.css";

export default function Finances() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="content">
        <div className="left">
          <div style={{ display: "flex", marginRight: 240 }}>
            <h1 style={{ marginBottom: 10, marginRight: 20 }}>Customer Name</h1>
            <a
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                textDecorationColor: "grey",
              }}
            >
              <p
                style={{
                  margin: 0,
                  marginTop: 37,
                  color: "grey",
                }}
              >
                Log out
              </p>
            </a>
          </div>
          <div className="account1"></div>
          <div className="account2"></div>
        </div>
        <div className="right">
          <h1 style={{ marginBottom: 10, fontWeight: 100 }}>Goals</h1>
          <div className="account3"></div>
        </div>
      </div>
    </div>
  );
}
