import React, { useState } from 'react';
import TaskForm  from './TaskForm';
import TaskAdapter from './TaskAdapter';

function TaskView() {
  const [taskData, setTask] = useState([]);

  const addTask = (oneTask) => {
    const newTaskData = [oneTask, ...taskData];

    setTask(newTaskData);
    console.log(...taskData);
  };

  const deleteTask = (oneTask) => {
    

  }

  return (
    <div>
      <h1>Today Task</h1>
      <TaskForm 
        onSubmit={ addTask } />
      <TaskAdapter task={ taskData } />
    </div>
  );
}


export default TaskView;