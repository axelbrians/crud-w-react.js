import React, { useState } from 'react';
import TaskForm  from './TaskForm';
import TaskAdapter from './TaskAdapter';
import TaskCompletedAdapter from './TaskCompletedAdapter';

function TaskView() {
  const [taskData, setTask] = useState([])
  const [taskCompleted, setTaskCompleted] = useState([])
  const [isHidden, setIsHidden ] = useState(true)


  
  const [completedClass, setCompletedClass] = useState('completedTaskViewDisable')
  const [btnClass, setBtnClass] = useState("btnPosition")

  // handle task that want to be added to lsit
  const handleAddTask = (oneTask) => {
    if (!oneTask.task || /^\s*$/.test(oneTask.task)) {
      return;
    }

    const newTaskData = [oneTask, ...taskData];

    setTask(newTaskData);
    // console.log(...taskData);
  };

  // handle task that has been done
  const handleCompletedTask = (oneTask) => {
    const newTaskCompleted = [oneTask, ...taskCompleted];

    setTaskCompleted(newTaskCompleted);
    // console.log(...taskCompleted);

    const newTaskData = taskData.filter(
      taskData => taskData.id !== oneTask.id);
     
    setTask(newTaskData);
  }

  // check if there is any completed task
  const isCompletedTask = (props) => {
    // if(Object.keys(props).length !== 0){
    //   return <h3>Completed Task</h3>
    // } else {
    //   return <h3>No Completed Task</h3>
    // }
    console.log(Object.keys(props).length)
  }

  // function to toggle completed class name
  const toggleCompletedTask = () => {
    if(isHidden) {
      setCompletedClass("completedTaskViewEnable")
      setBtnClass("btnPositionClicked")
      setIsHidden(false)
    }else {
      setCompletedClass("completedTaskViewDisable")
      setBtnClass("btnPosition")
      setIsHidden(true)
    }
  }


  return (
    <div>
      <h1>Today Task</h1>
      <TaskForm onSubmit={ handleAddTask } />

      {/* component to show task hasnt been completed */}
      <TaskAdapter
        className=""
        task={ taskData }
        onCompletedTask={ handleCompletedTask } />

      
      <div className="completedTaskContainer">
      {/* button to toggle show and hidden completedTask */}
      <button
        onClick={ toggleCompletedTask }
        className={ btnClass }>
        Completed ({Object.keys(taskCompleted).length})
      </button>

      {/* component to show completedTask */}
      <TaskCompletedAdapter
        isCompletedTask={ isCompletedTask }
        className={ completedClass }
        task={ taskCompleted } />

      
      </div>
      {/* end of completedTaskContainer */}

    </div>
  );
}


export default TaskView;