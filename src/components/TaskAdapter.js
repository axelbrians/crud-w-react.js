import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          resetFun={ resetFun }
          placeHolder={ '' } />)
  }

  return(
    <div >
      {/* mappping each of unclompletedTask */}
      {props.task.map(
        (oneTask) => 
          <div 
            key={oneTask.id}
            className="taskCard"  >
            
            {oneTask.task}

            <div className="iconContainer" >
              {/* <button onClick={ () => props.onCompletedTask(oneTask) }>
                Done
              </button> */}
              <a onClick={ () => props.onCompletedTask(oneTask) }
              className="myIcon" >
              <FontAwesomeIcon icon="check" />
              </a>

              {/* <button onClick={ () => wrapperFun(oneTask) } >
                Edit
              </button> */}
              <a onClick={ () => wrapperFun(oneTask) }
              className="myIcon" >
              <FontAwesomeIcon icon="pen" />
              </a>

            </div>
          </div>)
          // end of single task contaier
        }
        {/* end of mapping */}
    </div>
    // end of list of Task container
  );
}

export default TaskAdapter;