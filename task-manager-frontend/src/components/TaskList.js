import React from 'react';
import axios from 'axios';

const TaskList = ({ fetchTasks, tasks }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`);
    fetchTasks();
  };

  const handleStatusChange = async (id, status) => {
    await axios.patch(`http://127.0.0.1:8000/api/tasks/${id}/`, { status });
    fetchTasks();
  };

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>
              <select
                value={task.status}
                onChange={(e) => handleStatusChange(task.id, e.target.value)}
              >
                <option value="TODO">To Do</option>
                <option value="INPROGRESS">In Progress</option>
                <option value="DONE">Done</option>
              </select>
            </td>
            <td>
              <button className="delete-button" onClick={() => handleDelete(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
