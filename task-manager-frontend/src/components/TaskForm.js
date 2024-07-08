import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("TODO");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:8000/api/tasks/", {
      title,
      description,
      status,
    });
    setTitle("");
    setDescription("");
    setStatus("TODO");
    fetchTasks();
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="TODO">To Do</option>
          <option value="INPROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </Card>
  );
};

export default TaskForm;
