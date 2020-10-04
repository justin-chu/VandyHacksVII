import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Coin from "../../images/coin.gif";
import Avatar from "../../images/avatar.png";
import Item from "../../components/item/item";
import { getCustomerInfo, updateBalance } from "../../utils/backend";
import Zoom from "react-reveal/Zoom";
import { useMediaQuery } from "react-responsive"
import TaskList from "../../components/taskList/taskList";

export default function Dashboard() {
	const [category, setCategory] = useState("head");
	const [head, setHead] = useState(require("../../images/head/3.png"));
	const [body, setBody] = useState(require(`../../images/body/2.png`));
	const [legs, setLegs] = useState(require(`../../images/legs/0.png`));
	const [feet, setFeet] = useState(require(`../../images/feet/9.png`));
	const [weapon, setWeapon] = useState(require(`../../images/weapon/2.png`));

	const customer = getCustomerInfo();

	useEffect(() => {}, [customer.balance]);

	// const renderItem = () => {
	const getItems = (category) => {
		let content = [];

		for (let i = 0; i < 15; i++) {
			content.push(
				<Item
					status={1}
					image={`${category}/${i}`}
					category={category}
					changeBalance={updateBalance}
					changeHead={setHead}
					changeBody={setBody}
					changeLegs={setLegs}
					changeFeet={setFeet}
					changeWeapon={setWeapon}
				/>
			);
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
								left: -496,
								width: 400,
							}}
						>
							{customer.firstName} {customer.lastName}
							<img
								style={{ marginLeft: 10, marginBottom: -5 }}
								src={Avatar}
								height={40}
								width={40}
							/>
						</h1>
						<div style={{ display: "flex", marginTop: 38 }}>
							<h4 style={{ margin: 0, marginRight: 5 }}>
								{customer.balance}
							</h4>
							<img src={Coin} height={20} width={20} />
						</div>
					</div>
					<div className="panel1">
						<img
							src={head}
							height={70}
							width={70}
							style={{ margin: 10 }}
						/>
						<img
							src={body}
							height={70}
							width={70}
							style={{ margin: 10 }}
						/>
						<img
							src={legs}
							height={70}
							width={70}
							style={{ margin: 10 }}
						/>
						<img
							src={feet}
							height={70}
							width={70}
							style={{ margin: 10 }}
						/>
						<img
							src={weapon}
							height={70}
							width={70}
							style={{ margin: 10 }}
						/>
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
										fontWeight:
											category === "head" ? "bold" : "",
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
										fontWeight:
											category === "body" ? "bold" : "",
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
										fontWeight:
											category === "legs" ? "bold" : "",
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
										fontWeight:
											category === "feet" ? "bold" : "",
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
										fontWeight:
											category === "weapon" ? "bold" : "",
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
