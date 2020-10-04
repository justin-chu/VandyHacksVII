import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import Task from "../../components/task/task";
import { getTasks } from "../../utils/backend";
import { Popup } from "reactjs-popup";

const TaskList = () => {
	const [open, setOpen] = useState(false);
	const closeModal = () => setOpen(false);
	const [tasks, setTasks] = useState([]);
	let taskList;
	useEffect(() => {
		async function fetchData() {
			const taskData = await getTasks();
			setTasks(tasks.push(...taskData));
			console.log(tasks);
		}
		fetchData();
	}, []);

	return (
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
		</Zoom>
		// <div>
		// 	<h1>Tasklist works!</h1>
		// </div>
	);
};

export default TaskList;
