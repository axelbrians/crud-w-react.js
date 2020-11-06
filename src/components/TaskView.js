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

  const handleEditTask = (oneTask) => {
    if (!oneTask.task || /^\s*$/.test(oneTask.task)) {
      return;
    }

    const taskIndex = taskData.findIndex(element => element.id === oneTask.id);

    let newTaskData = [...taskData];

    newTaskData[taskIndex] = {...newTaskData[taskIndex], task: oneTask.task};

    setTask(newTaskData);
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
    <div className="">
      <h1>Today Task</h1>
      <TaskForm 
        onSubmit={ handleAddTask }
        placeHolder={ "Insert your task here" } />

      {/* component to show task hasnt been completed */}
      <TaskAdapter
        className=""
        task={ taskData }
        onCompletedTask={ handleCompletedTask }
        onEditTask={ handleEditTask } />

      
      <div className="completedTaskContainer">
      {/* button to toggle show and hidden completedTask */}
      <button
        onClick={ toggleCompletedTask }
        className={ btnClass }>
        Completed ({Object.keys(taskCompleted).length})
      </button>

      {/* component to show completedTask */}
      <TaskCompletedAdapter
        className={ completedClass }
        task={ taskCompleted } />

      
      </div>
      {/* end of completedTaskContainer */}

    </div>
  );
}


export default TaskView;