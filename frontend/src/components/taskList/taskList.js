import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import Task from "../../components/task/task";
import { getTasks, updateBalance } from "../../utils/backend";
import { Popup } from "reactjs-popup";

const TaskList = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [tasks, setTasks] = useState([]);
  let taskList;

  function completeTask() {
    closeModal();
    console.log(localStorage.getItem("username"));
    updateBalance(localStorage.getItem("username"), 50);
  }

  function getArrayfromString(String) {}

  useEffect(() => {
    async function fetchData() {
      const taskData = await getTasks();
      console.log(taskData);
      setTasks(taskData);
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* <Zoom> */}
      {/* #FFBA08 #34A853 #EC64DE #1877F2 #706BFF */}
      {tasks.map((task) => (
        <a onClick={() => setOpen((o) => !o)}>
          <Task task={task} backgroundColor="#706BFF" />
        </a>
      ))}
      {/* </Zoom> */}
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

export default TaskList;
