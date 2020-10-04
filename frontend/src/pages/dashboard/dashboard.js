import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Coin from "../../images/coin.gif";
import Avatar from "../../images/avatar.png";
import Item from "../../components/item/item";
import Zoom from "react-reveal/Zoom";
import { useMediaQuery } from "react-responsive";
import { getCustomerInfo } from "../../utils/backend";
import TaskList from "../../components/taskList/taskList";

export default function Dashboard() {
  const [category, setCategory] = useState("head");

  const customer = getCustomerInfo();

  useEffect(() => {}, [customer.balance]);

  // const renderItem = () => {
  const getItems = (category) => {
    let content = [];

    for (let i = 0; i < 15; i++) {
      content.push(<Item status={2} image={`${category}/${i}`} />);
    }

    return content;
  };

  const isDesktop = useMediaQuery({ minWidth: 1201 });
  const isTablet = useMediaQuery({ maxWidth: 1200 });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="content"
        style={{
          flexDirection: isTablet ? "column" : "row",
          alignItems: isTablet ? "center" : "",
        }}
      >
        <div
          className="left"
          style={{ alignItems: isTablet ? "center" : "flex-end" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: 556,
              position: "relative",
              marginBottom: -12,
            }}
          >
            <h1>
              {customer.firstName} {customer.lastName}
              <img
                style={{ marginLeft: 10, marginBottom: -5 }}
                src={Avatar}
                height={40}
                width={40}
              />
            </h1>
            <div style={{ display: "flex", marginTop: 38 }}>
              <h4 style={{ margin: 0, marginRight: 5 }}>{customer.balance}</h4>
              <img src={Coin} height={20} width={20} />
            </div>
          </div>
          <div className="panel1">
            <Zoom>
              <img
                src={require(`../../images/head/3.png`)}
                height={70}
                width={70}
                style={{ margin: 10 }}
              />
              <img
                src={require(`../../images/body/2.png`)}
                height={70}
                width={70}
                style={{ margin: 10 }}
              />
              <img
                src={require(`../../images/legs/0.png`)}
                height={70}
                width={70}
                style={{ margin: 10 }}
              />
              <img
                src={require(`../../images/feet/9.png`)}
                height={70}
                width={70}
                style={{ margin: 10 }}
              />
              <img
                src={require(`../../images/weapon/2.png`)}
                height={70}
                width={70}
                style={{ margin: 10 }}
              />
            </Zoom>
          </div>
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

        <div
          className="right"
          style={{ alignItems: isTablet ? "center" : "flex-start" }}
        >
          <h1 style={{ marginBottom: 10, fontWeight: 100 }}>Tasks</h1>
          <div className="panel3">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}
