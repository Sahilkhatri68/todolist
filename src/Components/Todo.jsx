import React, { useEffect, useState } from "react";

function Todo() {
  const [tasks, setTask] = useState([]);
  const [newtask, setNewtask] = useState("");

  useEffect(() => {
    // code to get data from localstorage
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTask(storedTasks);
    }
    console.log(storedTasks);
  }, []);

  useEffect(() => {
    // code to add data into localstorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newtask.trim() === "") return;
    const task = {
      id: Date.now(),
      text: newtask,
      status: false,
    };
    setTask([...tasks, task]);
    setNewtask(""); //for empting new task
  };

  //   code to delete task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTask(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTask(updatedTasks);
  };

  return (
    <div>
      <h1>ToDO List</h1>
      <div>
        <input
          type="text"
          value={newtask}
          style={{
            padding: 5,
            fontSize: 20,
          }}
          placeholder="Please Enter New Task"
          onChange={(e) => setNewtask(e.target.value)}
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
      <br />
      <div>
        <table id="customers">
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.text}</td>
                <td>{task.status === false ? "Pending" : "Completed"}</td>
                <td>
                  <button
                    style={{
                      padding: 5,
                      fontSize: 20,
                      width: "100%",
                      cursor: "pointer",
                    }}
                    // onClick={deleteTask(task.id)}
                  >
                    Done
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Todo;
