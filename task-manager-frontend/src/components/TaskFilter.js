import React from 'react';

const TaskFilter = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="task-filter">
      <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="ALL">All</option>
        <option value="TODO">To Do</option>
        <option value="INPROGRESS">In Progress</option>
        <option value="DONE">Done</option>
      </select>
    </div>
  );
};

export default TaskFilter;
