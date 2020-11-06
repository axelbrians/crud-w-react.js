import React, { useState } from 'react';

function TaskForm(props) {
  const [inputTask, setInput] = useState('');

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
          <div>
            
            <input
              type="text" 
              placeholder="Insert your task here"
              value={ inputTask }
              onChange={ handleChange } />
            
          </div>
        </form>
    );
};

export default TaskForm;