import React from "react";
import "./dashboard.css";
import Popup from "reactjs-popup";
import Zoom from "react-reveal/Zoom";
import Coin from "../../images/coin.gif";
import Item from "../../components/item/item";
import Task from "../../components/task/task";
import { getCustomerInfo } from "../../utils/backend";

export default function Dashboard() {
  const [category, setCategory] = React.useState("head");
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);
  const customer = getCustomerInfo();

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
            <Zoom>
              <a onClick={() => setOpen((o) => !o)}>
                <Task
                  task="Keep __ dollars more in your savings account"
                  backgroundColor="#706BFF"
                />
              </a>
              <a onClick={() => setOpen((o) => !o)}>
                <Task
                  task="Use credit card for ___ more purchases instead of checking"
                  backgroundColor="#FFBA08"
                />
              </a>
              <a onClick={() => setOpen((o) => !o)}>
                <Task
                  task="Spend ___ less on category (want)"
                  backgroundColor="#34A853"
                />
              </a>
              <a onClick={() => setOpen((o) => !o)}>
                <Task
                  task="Put ___ dollars in your investment account"
                  backgroundColor="#EC64DE"
                />
              </a>
              <a onClick={() => setOpen((o) => !o)}>
                <Task
                  task="Contribute ___ amount to RRSP"
                  backgroundColor="#1877F2"
                />
              </a>
              <a onClick={() => setOpen((o) => !o)}>
                <Task
                  task="Pay your ___ bill for this month"
                  backgroundColor="#706BFF"
                />
              </a>
              <a onClick={() => setOpen((o) => !o)}>
                <Task
                  task="Pay your ___ loan for this month"
                  backgroundColor="#FFBA08"
                />
              </a>
              <a onClick={() => setOpen((o) => !o)}>
                <Task
                  task="Keep __ dollars more in your savings account"
                  backgroundColor="#34A853"
                />
              </a>
              <a onClick={() => setOpen((o) => !o)}>
                <Task
                  task="Keep __ dollars more in your savings account"
                  backgroundColor="#EC64DE"
                />
              </a>
              <a onClick={() => setOpen((o) => !o)}>
                <Task
                  task="Keep __ dollars more in your savings account"
                  backgroundColor="#1877F2"
                />
              </a>
            </Zoom>
          </div>
        </div>
      </div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <p>Are you sure you have completed this task?</p>
          <div className="buttons">
            <a className="red-button" onClick={closeModal}>
              <h4 style={{ margin: 0, color: "white" }}>No</h4>
            </a>
            <a className="green-button" onClick={closeModal}>
              <h4 style={{ margin: 0, color: "white" }}>Yes</h4>
            </a>
          </div>
        </div>
      </Popup>
    </div>
  );
}
