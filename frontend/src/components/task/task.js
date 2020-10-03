import React from "react";
import "./task.css";

export default function Task(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ backgroundColor: props.backgroundColor }} className="task">
      <h4 style={{ marginTop: 10, marginLeft: 15 }}>
        Add $109 to savings account
      </h4>
      <a style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
        <div
          style={{
            width: 25,
            height: 25,
            borderRadius: "50%",
            backgroundColor: "white",
            padding: 1,
          }}
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z" />
          </svg>
        </div>
        {open && (
          <svg
            class="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              class="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              class="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        )}
      </a>
    </div>
  );
}
