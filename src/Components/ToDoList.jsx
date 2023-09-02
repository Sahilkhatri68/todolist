// ------------------------------------------------------------------------
import React, { useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Load tasks from local storage on initial render
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <div className="add-task ">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          style={{
            padding: 5,
            fontSize: 20,
          }}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          style={{
            padding: 5,
            fontSize: 20,
          }}
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <table id="customers">
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {/* <ul> */}
        {tasks.map((task) => (
          <tr key={task.id}>
            <td key={task.id}>{task.id}</td>
            <td
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>{task.text}</div>
              <div>
                <button onClick={() => toggleComplete(task.id)}>
                  <AiOutlineCheck />
                </button>
              </div>
            </td>
            <td> {task.completed === false ? "Pending" : "Done"} </td>
            <td>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
        {/* </ul> */}
      </table>
    </div>
  );
};

export default TodoList;
