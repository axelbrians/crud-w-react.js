import React from 'react';

const TaskAdapter = (props) => (
  <ul className="onGoingTask">
    {/* mappping each of unclompletedTask */}
    {props.task.map(
      (oneTask) => 
        <li key={oneTask.id}>
          {/* btn to move task to completedTask */}
          <button 
            type="button" 
            onClick={ () => props.onCompletedTask(oneTask) } >
          done
          </button>
          
          {oneTask.task}
        </li>)
        // end of single task contaier
    }
  </ul>
  // end of list of Task container
);

export default TaskAdapter;