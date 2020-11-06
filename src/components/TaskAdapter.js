import React, { useState } from 'react';
import TaskForm from './TaskForm';

function TaskAdapter(props) {

  return(
    <div className="taskContainer">
      {/* mappping each of unclompletedTask */}
      {props.task.map(
        (oneTask) => 
          <div
            className="taskCard" 
            key={oneTask.id}>
            
            {oneTask.task}

            {/* btn to move task to completedTask */}
            <a onClick={ () => props.onCompletedTask(oneTask) }
              className="iconHolder" >
            <i></i>
            </a>

          </div>)
          // end of single task contaier
        }
        {/* end of mapping */}
    </div>
    // end of list of Task container
  );
}

export default TaskAdapter;