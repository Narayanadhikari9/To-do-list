import React, { useState } from "react";
import "./App.css";
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index]);
  };

  const saveEditedTask = () => {
    if (editedTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = editedTask;
      setTasks(updatedTasks);
      setEditingIndex(null);
    }
  };

  return (
    <div>
      <h1 className="header">To Do List</h1>
      <div className="mainSearch">
        <input
          type="text"
          placeholder="Whats is today task?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={saveEditedTask}>Save</button>
              </div>
            ) : (
              <div className="searchButton">
                {task}

                <button onClick={() => startEditing(index)}>✎</button>
                <button onClick={() => removeTask(index)}>❌</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
