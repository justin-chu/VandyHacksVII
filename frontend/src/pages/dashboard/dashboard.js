import React from "react";
import "./dashboard.css";
import Item from "../../components/item/item";
import Task from "../../components/task/task";

export default function Dashboard() {
  const [category, setCategory] = React.useState(0);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="content">
        <div className="left">
          <h1 style={{ marginBottom: 10, marginRight: 315 }}>Customer Name</h1>
          <div className="panel1"></div>
          <div className="panel2">
            <div className="categories">
              <a
                onClick={() => setCategory(0)}
                style={{ cursor: "pointer", marginRight: 25 }}
              >
                <p
                  style={{
                    marginTop: 0,
                    fontWeight: category === 0 ? "bold" : "",
                  }}
                >
                  Head
                </p>
              </a>
              <a
                onClick={() => setCategory(1)}
                style={{ cursor: "pointer", marginRight: 25 }}
              >
                <p
                  style={{
                    marginTop: 0,
                    fontWeight: category === 1 ? "bold" : "",
                  }}
                >
                  Body
                </p>
              </a>
              <a
                onClick={() => setCategory(2)}
                style={{ cursor: "pointer", marginRight: 25 }}
              >
                <p
                  style={{
                    marginTop: 0,
                    fontWeight: category === 2 ? "bold" : "",
                  }}
                >
                  Legs
                </p>
              </a>
              <a
                onClick={() => setCategory(3)}
                style={{ cursor: "pointer", marginRight: 25 }}
              >
                <p
                  style={{
                    marginTop: 0,
                    fontWeight: category === 3 ? "bold" : "",
                  }}
                >
                  Feet
                </p>
              </a>
              <a
                onClick={() => setCategory(4)}
                style={{ cursor: "pointer", marginRight: 25 }}
              >
                <p
                  style={{
                    marginTop: 0,
                    fontWeight: category === 4 ? "bold" : "",
                  }}
                >
                  Weapon
                </p>
              </a>
            </div>
            <div className="items">
              <Item owned={true} />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </div>
        </div>

        <div className="right">
          <h1 style={{ marginBottom: 10, fontWeight: 100 }}>Tasks</h1>
          <div className="panel3">
            <Task backgroundColor="#706BFF" />
            <Task backgroundColor="#FFBA08" />
            <Task backgroundColor="#34A853" />
            <Task backgroundColor="#EC64DE" />
            <Task backgroundColor="#1877F2" />
            <Task backgroundColor="#706BFF" />
            <Task backgroundColor="#FFBA08" />
            <Task backgroundColor="#34A853" />
            <Task backgroundColor="#EC64DE" />
            <Task backgroundColor="#1877F2" />
            <Task backgroundColor="#706BFF" />
            <Task backgroundColor="#FFBA08" />
          </div>
        </div>
      </div>
    </div>
  );
}
