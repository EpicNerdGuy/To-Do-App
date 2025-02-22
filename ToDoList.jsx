import React, { useState } from "react";
import "./styles.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function inputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]); // ✅ Store objects
      setNewTask("");
    }
  }

  function toggleTask(index) {
    let updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed; // ✅ Toggle completed state
    setTasks(updatedTasks);
  }

  function deleteTask(index) {
    let updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={inputChange}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            {task.text}
            <img
              src="/cross.png" // ✅ Ensure this image is inside the `public/` folder
              alt="Remove"
              width="20"
              height="20"
              style={{ cursor: "pointer", marginLeft: "10px" }}
              onClick={() => deleteTask(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

