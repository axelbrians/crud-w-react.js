import React from 'react';

const TaskAdapter = (props) => (
  <ul>
    {props.task.map(
      (oneTask) => 
        <li key={oneTask.id}>
          {oneTask.task}
          <button 
            type="button" 
            onClick={ () => props.onDeleteTask(oneTask) } >
          done
        </button>
        </li>)
    }
  </ul>
);

export default TaskAdapter;