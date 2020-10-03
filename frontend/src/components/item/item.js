import React from "react";
import "./item.css";

export default function Item(props) {
  return (
    <a className="item">
      {props.owned ? (
        <div className="owned">
          <h5 style={{ color: "white", textAlign: "center", paddingTop: 3 }}>
            OWNED
          </h5>
        </div>
      ) : (
        <div className="not-owned">
          <h5 style={{ color: "white", textAlign: "center", paddingTop: 3 }}>
            $232
          </h5>
        </div>
      )}
    </a>
  );
}
