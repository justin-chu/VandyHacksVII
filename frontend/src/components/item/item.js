import React from "react";
import Popup from "reactjs-popup";
import Confetti from "react-confetti";
import Coin from "../../images/coin.gif";
import "./item.css";

export default function Item(props) {
  const [open, setOpen] = React.useState(false);
  const [confetti, setConfetti] = React.useState(0);
  const closeModal = () => setOpen(false);

  const startConfetti = () => {
    setConfetti(300);
    setTimeout(() => {
      setConfetti(0);
    }, 3000);
  };

  return (
    <>
      <a onClick={() => setOpen((o) => !o)} className="item">
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
      <Confetti numberOfPieces={confetti} />
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <div className="item"></div>
          <div style={{ marginTop: -10 }}>
            <p>
              Purchase this item for 232
              <img
                style={{ marginLeft: 2 }}
                src={Coin}
                height={18}
                width={18}
              />
              {"  "}?
            </p>
          </div>
          <div className="buttons">
            <a className="red-button" onClick={closeModal}>
              <h4 style={{ margin: 0, color: "white" }}>No</h4>
            </a>
            <a
              className="green-button"
              onClick={() => {
                closeModal();
                startConfetti();
              }}
            >
              <h4 style={{ margin: 0, color: "white" }}>Yes</h4>
            </a>
          </div>
        </div>
      </Popup>
    </>
  );
}
