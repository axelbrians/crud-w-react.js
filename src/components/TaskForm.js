import React, { useState, useEffect, useRef } from 'react';

function TaskForm(props) {
  const [inputTask, setInput] = useState('');
  const taskInput = useRef(null);

  useEffect(() => {
    if (taskInput.current){
     taskInput.current.focus();
    }
  }, []);


  const handleSubmit = event => {
    event.preventDefault();

    if(!props.targetId){
      props.onSubmit({
        task: inputTask,
        id: Math.floor(Math.random() * 1000000000)
      })
    }else {
      props.onSubmit({
        task: inputTask,
        id: props.targetId
      });
      
      props.resetFun();
    }
    setInput('');
  }

  const handleChange = event => {
    setInput(event.target.value);
  }

    return (
        <form onSubmit={ handleSubmit }>
            <input
              className="taskInput"
              type="text" 
              placeholder={ props.placeHolder }
              value={ inputTask }
              onChange={ handleChange }
              ref={ taskInput } />
        </form>
    );
};

export default TaskForm;