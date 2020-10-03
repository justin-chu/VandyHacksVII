import React from "react";
import "./dashboard.css";
import Task from "../../components/task/task";

export default function Dashboard() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="content">
        <div className="left">
          <h1 style={{ marginBottom: 10 }}>Customer Name</h1>
          <div className="panel1"></div>
          <div className="panel2"></div>
        </div>
        <div className="right">
          <div className="panel3">
            <Task />
          </div>
        </div>
      </div>
    </div>
  );
}
