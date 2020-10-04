import React from "react";
import "./transaction.css";

export default function Transaction(props) {
  return (
    <div>
      <a
        style={{
          cursor: "pointer",
          backgroundColor: "#e9ecef",
        }}
        className="transaction"
      >
        <p
          style={{
            marginTop: 12,
            marginLeft: 15,
            fontSize: 15,
            color: "black",
            display: "grid",
            gridTemplateColumns: "100px 320px 100px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>{props.date}</span>
          <span>{props.description}</span>
          <span style={{ fontStyle: "italic" }}>${props.amount}</span>
        </p>
      </a>
    </div>
  );
}
