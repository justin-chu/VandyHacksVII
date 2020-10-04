import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import Task from "../task/task";
import { getTransactions, updateBalance } from "../../utils/backend";
import { Popup } from "reactjs-popup";
import Transaction from "../transaction/transaction";

const TransactionList = () => {
	const [open, setOpen] = useState(false);
	const closeModal = () => setOpen(false);
	const [transactions, setTransactions] = useState([]);
	let stuff;
	function completeTask() {
		closeModal();
		updateBalance(localStorage.getItem("username"), 50);
	}

	useEffect(() => {
		async function fetchData() {
			const transactionData = await getTransactions();

			setTransactions((transactions) => [
				...transactions,
				transactionData,
			]);
			console.log(transactions);
		}

		fetchData();
	}, [transactions]);
	console.log(transactions);

	return (
		<div>
			<div>
				{/* #FFBA08 #34A853 #EC64DE #1877F2 #706BFF */}
				{/* {transactions.map((transaction) => (
					<h2>transaction.id</h2>
				))} */}
			</div>
			<Popup open={open} closeOnDocumentClick onClose={closeModal}>
				<div className="modal">
					<p>Are you sure you have completed this task?</p>
					<div className="buttons">
						<a className="red-button" onClick={closeModal}>
							<h4 style={{ margin: 0, color: "white" }}>No</h4>
						</a>
						<a className="green-button" onClick={completeTask}>
							<h4 style={{ margin: 0, color: "white" }}>Yes</h4>
						</a>
					</div>
				</div>
			</Popup>
		</div>
		// <div>
		// 	<h1>Tasklist works!</h1>
		// </div>
	);
};

export default TransactionList;
