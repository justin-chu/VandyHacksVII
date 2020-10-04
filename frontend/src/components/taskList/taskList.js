import React, { useEffect, useState } from "react";
import Task from "../../components/task/task";
import { getTasks, updateBalance } from "../../utils/backend";
import { Popup } from "reactjs-popup";

const TaskList = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [tasks, setTasks] = useState([]);

  function completeTask() {
    closeModal();
    updateBalance(localStorage.getItem("username"), 50);
  }

  function getArrayfromString(String) {}

  useEffect(() => {
    async function fetchData() {
      const taskData = await getTasks();
      setTasks(taskData);
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
          <a onClick={() => setOpen((o) => !o)}>
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
