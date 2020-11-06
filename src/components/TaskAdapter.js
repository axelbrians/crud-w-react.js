import React, { useState } from 'react';
import TaskForm from './TaskForm';

function TaskAdapter(props) {
  const [editStatus, setEditStatus] = useState(0);
  const [targetId, setTargetId] = useState();

  const wrapperFun = (oneTask) => {
    setEditStatus(1);

    setTargetId(oneTask.id);
  }

  const resetFun = () => {
    setEditStatus(0);

    setTargetId(0);
  }


  if(editStatus){
    return (
        <TaskForm 
          onSubmit={ props.onEditTask }
          targetId={ targetId }
          resetFun={ resetFun } />)
  }

  return(
    <div>
      {/* mappping each of unclompletedTask */}
      {props.task.map(
        (oneTask) => 
          <div key={oneTask.id}>
            
            {oneTask.task}

            {/* btn to move task to completedTask */}
            <button onClick={ () => props.onCompletedTask(oneTask) }>
              Done
            </button>

            <button onClick={ () => wrapperFun(oneTask) }>
              Edit
            </button>

          </div>)
          // end of single task contaier
        }
        {/* end of mapping */}
    </div>
    // end of list of Task container
  );
}

export default TaskAdapter;