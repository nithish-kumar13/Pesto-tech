import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState('ALL');

  const fetchTasks = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/tasks/');
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter(task => 
    filterStatus === 'ALL' || task.status === filterStatus
  );

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <TaskList fetchTasks={fetchTasks} tasks={filteredTasks} />
    </div>
  );
};

export default App;
