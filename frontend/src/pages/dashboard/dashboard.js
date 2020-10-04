import React, { useState } from "react";
import "./dashboard.css";
import Coin from "../../images/coin.gif";
import Item from "../../components/item/item";
import { getCustomerInfo } from "../../utils/backend";
import TaskList from "../../components/taskList/taskList";

export default function Dashboard() {
	const [category, setCategory] = useState(0);

	const customer = getCustomerInfo();

	// const renderItem = () => {

	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div className="content">
				<div className="left">
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<h1 style={{ marginBottom: 10, marginRight: 255 }}>
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
								onClick={() => setCategory(0)}
								style={{ cursor: "pointer", marginRight: 25 }}
							>
								<p
									style={{
										marginTop: 0,
										fontWeight:
											category === 0 ? "bold" : "",
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
										fontWeight:
											category === 1 ? "bold" : "",
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
										fontWeight:
											category === 2 ? "bold" : "",
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
										fontWeight:
											category === 3 ? "bold" : "",
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
										fontWeight:
											category === 4 ? "bold" : "",
									}}
								>
									Weapon
								</p>
							</a>
						</div>
						<div className="items">
							{/* {{for(let i=0; i<15; i++) {
        return <Item owned={true} image={`weapon/${n}`} />
      })}} */}

							<Item owned={true} image={`weapon/1`} />
							<Item owned={false} image={`weapon/2`} />
							<Item owned={false} image={`weapon/3`} />
							<Item owned={true} image={`weapon/4`} />
							<Item owned={false} image={`weapon/5`} />
							<Item owned={true} image={`weapon/6`} />
							<Item owned={true} image={`weapon/7`} />
							<Item owned={true} image={`weapon/8`} />
						</div>
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
