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
        className="task"
      >
        <h4
          style={{
            marginTop: 12,
            marginLeft: 15,
            fontSize: 15,
            color: "black",
          }}
        >
          {props.amount}
          {props.date}
          {props.description}
        </h4>
      </a>
    </div>
  );
}
