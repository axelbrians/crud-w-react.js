import React, { useState } from 'react';

function TaskForm(props) {
  const [inputTask, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // if(!event.target.value){
    //   setInput('');
    //   return;
    // }

    props.onSubmit({
      task: inputTask,
      id: Math.floor(Math.random() * 1000000000)
    })

    setInput('');
  }

  const handleChange = event => {
    setInput(event.target.value);
  }

    return (
      <form 
        className="taskForm" 
        onSubmit={ handleSubmit }>
        <input
          type="text" 
          placeholder="inset your task here"
          value={ inputTask }
          className="taskInput"
          onChange={ handleChange } />

        <input type="submit" value="Add task" />
      </form>
    );
};

export default TaskForm;