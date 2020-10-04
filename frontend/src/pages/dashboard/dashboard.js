import React from "react";
import "./dashboard.css";
import Popup from "reactjs-popup";
import Zoom from "react-reveal/Zoom";
import Coin from "../../images/coin.gif";
import Item from "../../components/item/item";
import Task from "../../components/task/task";
import { getCustomerInfo } from "../../utils/backend";

export default function Dashboard() {
	const [category, setCategory] = React.useState(0);
	const [open, setOpen] = React.useState(false);
	const closeModal = () => setOpen(false);
	const customer = getCustomerInfo();
	// const renderItem = () => {

	// }

	// const renderTask = () => {
	//   return (

	//   )
	// }

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div className="content">
				<div className="left">
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
						}}
					>
						<h1>{customer.firstName}</h1>

						<div style={{ display: "flex", paddingTop: 38 }}>
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
						</div>
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
