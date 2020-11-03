import React, { useState } from 'react';
import TaskForm  from './TaskForm';
import TaskAdapter from './TaskAdapter';

function TaskView() {
  const [taskData, setTask] = useState([]);

  const handleAddTask = (oneTask) => {
    const newTaskData = [oneTask, ...taskData];

    setTask(newTaskData);
    console.log(...taskData);
  };

  const handleDeleteTask = (oneTask) => {
    const newTaskData = taskData.filter(
      taskData => taskData.id !== oneTask.id);
     
    setTask(newTaskData);
  }

  return (
    <div>
      <h1>Today Task</h1>
      <TaskForm 
        onSubmit={ handleAddTask } />
      <TaskAdapter 
        task={ taskData }
        onDeleteTask={ handleDeleteTask } />
    </div>
  );
}


export default TaskView;