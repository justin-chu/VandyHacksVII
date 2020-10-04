import React, { useState } from "react";
import "./dashboard.css";
import Coin from "../../images/coin.gif";
import Avatar from "../../images/avatar.png";
import Item from "../../components/item/item";
import { getCustomerInfo } from "../../utils/backend";
import TaskList from "../../components/taskList/taskList";

export default function Dashboard() {
  const [category, setCategory] = useState("head");

  const customer = getCustomerInfo();

  // const renderItem = () => {
  const getItems = (category) => {
    let content = [];

    for (let i = 0; i < 15; i++) {
      content.push(<Item owned={true} image={`${category}/${i}`} />);
    }

    return content;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="content">
        <div className="left">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              marginBottom: 14,
            }}
          >
            <h1
              style={{
                position: "absolute",
                left: -500,
                width: 400,
              }}
            >
              {customer.firstName} {customer.lastName}
            </h1>
            <div style={{ display: "flex", marginTop: 38 }}>
              <h4 style={{ margin: 0, marginRight: 5 }}>3200</h4>
              <img src={Coin} height={20} width={20} />
            </div>
          </div>
          <div className="panel1"></div>
          <div className="panel2">
            <div className="categories">
              <a
                onClick={() => setCategory("head")}
                style={{ cursor: "pointer", marginRight: 25 }}
              >
                <p
                  style={{
                    marginTop: 0,
                    fontWeight: category === "head" ? "bold" : "",
                  }}
                >
                  Head
                </p>
              </a>
              <a
                onClick={() => setCategory("body")}
                style={{ cursor: "pointer", marginRight: 25 }}
              >
                <p
                  style={{
                    marginTop: 0,
                    fontWeight: category === "body" ? "bold" : "",
                  }}
                >
                  Body
                </p>
              </a>
              <a
                onClick={() => setCategory("legs")}
                style={{ cursor: "pointer", marginRight: 25 }}
              >
                <p
                  style={{
                    marginTop: 0,
                    fontWeight: category === "legs" ? "bold" : "",
                  }}
                >
                  Legs
                </p>
              </a>
              <a
                onClick={() => setCategory("feet")}
                style={{ cursor: "pointer", marginRight: 25 }}
              >
                <p
                  style={{
                    marginTop: 0,
                    fontWeight: category === "feet" ? "bold" : "",
                  }}
                >
                  Feet
                </p>
              </a>
              <a
                onClick={() => setCategory("weapon")}
                style={{ cursor: "pointer", marginRight: 25 }}
              >
                <p
                  style={{
                    marginTop: 0,
                    fontWeight: category === "weapon" ? "bold" : "",
                  }}
                >
                  Weapon
                </p>
              </a>
            </div>
            <div className="items">{getItems(category)}</div>
          </div>
        </div>

        <div className="right">
          <h1 style={{ marginBottom: 10, fontWeight: 100 }}>Tasks</h1>
          <div className="panel3">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}
