import React from 'react';

const TaskAdapter = (props) => (
  <ul>
    {/* mappping each of unclompletedTask */}
    {props.task.map(
      (oneTask) => 
        <li key={oneTask.id}>
          {oneTask.task}
          <button 
            type="button" 
            onClick={ () => props.onCompletedTask(oneTask) } >
          done
          </button>
        </li>)
        // end of single task contaier
    }
  </ul>
  // end of list of Task container
);

export default TaskAdapter;