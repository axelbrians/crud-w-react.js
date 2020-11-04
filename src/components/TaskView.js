import React, { useState } from 'react';
import TaskForm  from './TaskForm';
import TaskAdapter from './TaskAdapter';
import TaskCompletedAdapter from './TaskCompletedAdapter';

function TaskView() {
  const [taskData, setTask] = useState([]);
  const [taskCompleted, setTaskCompleted] = useState([]);
  const [completedClass, setCompletedClass ] = useState("completedTaskViewDisable")

  // handle task that want to be added to lsit
  const handleAddTask = (oneTask) => {
    const newTaskData = [oneTask, ...taskData];

    setTask(newTaskData);
    // console.log(...taskData);
  };

  // handle task that has been done
  const handleCompletedTask = (oneTask) => {
    const newTaskCompleted = [oneTask, ...taskCompleted];

    setTaskCompleted(newTaskCompleted);
    console.log(...taskCompleted);

    const newTaskData = taskData.filter(
      taskData => taskData.id !== oneTask.id);
     
    setTask(newTaskData);
  }

  // check if there is any completed task
  const isCompletedTask = (props) => {
    if(Object.keys(props).length !== 0){
      return <h3>Completed Task</h3>
    } else {
      return null;
    }
  }

  // function to toggle completed class name
  const toggleCompletedTask = () => {
    if(completedClass === "completedTaskViewEnable") {
      setCompletedClass("completedTaskViewDisable");
    }else {
      setCompletedClass("completedTaskViewEnable");
    }
  }


  return (
    <div>
      <h1>Today Task</h1>
      <TaskForm onSubmit={ handleAddTask } />

      {/* button to toggle show and hidden completedTask */}
      <button
        onClick={ toggleCompletedTask } >
        Show completed task
      </button>

      {/* component to show task hasnt been completed */}
      <TaskAdapter
        className=""
        task={ taskData }
        onCompletedTask={ handleCompletedTask } />
      
      {/* component to show completedTask */}
      <TaskCompletedAdapter
        isCompletedTask={ isCompletedTask }
        className={ completedClass }
        task={ taskCompleted } />
    </div>
  );
}


export default TaskView;