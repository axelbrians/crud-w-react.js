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
      <div className="myFormContainer">
        <form 
          className=""
          onSubmit={ handleSubmit }>
          <div className="myFormGroup">
            
            <input
              type="text" 
              placeholder="Insert your task here"
              value={ inputTask }
              className="myInput"
              onChange={ handleChange } />
            
          </div>
        </form>
      </div>
    );
};

export default TaskForm;