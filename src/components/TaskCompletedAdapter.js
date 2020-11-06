import React from 'react';

const TaskCompletedAdapter = (props) => (
  
  <div className={ props.className }>
    {/* mapping each of individual completedTask to holder */}
    {props.task.map(
      (oneTask) => 
        <div 
          key={oneTask.id}
          className="taskCompleted"  >
          {oneTask.task}
        </div>)
        // end of each individual completedTask holder
    }
  </div>
  //  end of completedTask container
);

export default TaskCompletedAdapter;