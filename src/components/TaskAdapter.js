import React from 'react';

const TaskAdapter = props => (
  <ul>
    {props.task.map(
      (oneTask) => 
      <li key={oneTask.id}>{oneTask.task}</li>)
    }
  </ul>
);

export default TaskAdapter;