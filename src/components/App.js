import React from 'react';
import './App.css';
import TaskView from './TaskView';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="taskAppContainer">
      <TaskView />
    </div>
  );
}

export default App;
