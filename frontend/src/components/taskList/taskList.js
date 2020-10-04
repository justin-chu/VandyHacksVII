import React, { useEffect, useState } from "react";
import Task from "../../components/task/task";
import { getTasks, updateBalance } from "../../utils/backend";
import { Popup } from "reactjs-popup";

const TaskList = () => {
	const [open, setOpen] = useState(false);
	const closeModal = () => setOpen(false);
	const [tasks, setTasks] = useState([]);
	const [currentTask, setCurrentTask] = useState(null);

	function completeTask() {
		closeModal();
		const parsedTasks = JSON.parse(localStorage.getItem("completedTasks"));
		let completedTasks = [];
		if (parsedTasks) completedTasks = [...parsedTasks, currentTask];

		localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

		setTasks(tasks.filter((task) => task != currentTask));
		updateBalance(localStorage.getItem("username"), 50);
	}

	useEffect(() => {
		async function fetchData() {
			const taskData = await getTasks();
			const parsedTasks = JSON.parse(
				localStorage.getItem("completedTasks")
			);
			const unfinishedTaskData = [];
			for (let task of taskData) {
				console.log(parsedTasks.includes(task), task);
				if (!parsedTasks.includes(task.slice(0, task.length - 1))) {
					unfinishedTaskData.push(task);
				}
			}
			console.log(parsedTasks);
			console.log(unfinishedTaskData);
			setTasks(unfinishedTaskData);
		}
		fetchData();
	}, []);

	let i = 0;
	const colors = ["#FFBA08", "#34A853", "#EC64DE", "#1877F2", "#706BFF"];

	return (
		<div>
			{tasks.map((task) => {
				i++;
				if (i === 5) {
					i = 0;
				}
				if (task.charAt(task.length - 1) === '"') {
					task = task.substring(0, task.length - 1);
				}
				if (task === "Pay this month's personal loan!") {
					task = task.concat("!");
				}
				return (
					<a
						onClick={() => {
							setOpen((o) => !o);
							setCurrentTask(task);
						}}
					>
						<Task task={task} backgroundColor={colors[i]} />
					</a>
				);
			})}
			<Popup open={open} closeOnDocumentClick onClose={closeModal}>
				<div className="modal-1">
					<p style={{ margin: 0, marginBottom: 15, marginTop: 5 }}>
						Are you sure you have completed this task?
					</p>
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
	);
};

export default TaskList;
