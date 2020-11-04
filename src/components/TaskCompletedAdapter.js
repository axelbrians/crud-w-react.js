import React from 'react';

const TaskCompletedAdapter = (props) => (
  <div className={ props.className }>
    { props.isCompletedTask(props.task) }
  
  <ul>
    {/* mapping each of individual completedTask to holder */}
    {props.task.map(
      (oneTask) => 
        <li key={oneTask.id}>
          {oneTask.task}
        </li>)
        // end of each individual completedTask holder
    }
  </ul>
  {/* end of completedTask container */}

  </div>
  // end of container that hold title and list of completedTask
);

export default TaskCompletedAdapter;