import React from "react";
import Popup from "reactjs-popup";
import Confetti from "react-confetti";
import Coin from "../../images/coin.gif";
import "./item.css";
import { updateBalance } from "../../utils/backend";

export default function Item(props) {
	const [open, setOpen] = React.useState(false);
	const [confetti, setConfetti] = React.useState(0);
	const closeModal = () => setOpen(false);
	const [status, setStatus] = React.useState(props.status);
	const startConfetti = () => {
		setConfetti(300);
		setTimeout(() => {
			setConfetti(0);
		}, 3000);
	};

	return (
		<>
			<a
				onClick={() => {
					setOpen((o) => !o);
					console.log("clicked!");
				}}
				className="item"
			>
				<img
					src={require(`../../images/${props.image}.png`)}
					height={70}
					width={70}
					style={{ margin: 10 }}
				/>
				{status === 0 && (
					<div className="owned">
						<h5 className="owned-text">OWNED</h5>
					</div>
				)}
				{status === 1 && (
					<div className="not-owned">
						<h5 className="owned-text">$232</h5>
					</div>
				)}
				{status === 2 && (
					<div className="equipped">
						<h5 className="owned-text">EQUIPPED</h5>
					</div>
				)}
			</a>
			<Confetti numberOfPieces={confetti} />
			<Popup open={open} closeOnDocumentClick onClose={closeModal}>
				<div className="modal">
					<div className="item">
						<img
							src={require(`../../images/${props.image}.png`)}
							height={70}
							width={70}
							style={{ margin: 10 }}
						/>
					</div>
					<div style={{ marginTop: -10 }}>
						{status === 0 && <p>Equip this item?</p>}
						{status === 1 && (
							<p>
								Purchase this item for 232
								<img
									style={{ marginLeft: 2, marginTop: 5 }}
									src={Coin}
									height={18}
									width={18}
								/>
								{"  "}?
							</p>
						)}
						{status === 2 && (
							<p>
								Purchase this item for 232
								<img
									style={{ marginLeft: 2, marginTop: 5 }}
									src={Coin}
									height={18}
									width={18}
								/>
								{"  "}?
							</p>
						)}
					</div>
					<div className="buttons">
						<a className="red-button" onClick={closeModal}>
							<h4 style={{ margin: 0, color: "white" }}>No</h4>
						</a>
						<a
							className="green-button"
							onClick={() => {
								if (status == 1) {
									// updateBalance(
									// 	localStorage.getItem("username"),
									// 	-232
									// );

									setStatus(0);
								} else if (status == 2) {
									setStatus(0);
								} else if (status == 0) {
									if (props.category == "head") {
										props.changeHead(
											require(`../../images/${props.image}.png`)
										);
									} else if (props.category == "body") {
										props.changeBody(
											require(`../../images/${props.image}.png`)
										);
									} else if (props.category == "legs") {
										props.changeLegs(
											require(`../../images/${props.image}.png`)
										);
									} else if (props.category == "feet") {
										props.changeFeet(
											require(`../../images/${props.image}.png`)
										);
									} else if (props.category == "weapon") {
										props.changeWeapon(
											require(`../../images/${props.image}.png`)
										);
									}
									setStatus(2);
								}

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
