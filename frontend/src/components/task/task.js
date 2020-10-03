import React from "react";
import "./task.css";

export default function Task(props) {
  return (
    <div>
      <a
        style={{ cursor: "pointer", backgroundColor: props.backgroundColor }}
        className="task"
      >
        <h4 style={{ marginTop: 10, marginLeft: 15 }}>{props.task}</h4>
      </a>
    </div>
  );
}
