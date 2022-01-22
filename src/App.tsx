import React from 'react';

import './App.css';
import ToDoCard from './components/ToDoCard';

function App() {
  let title = 'hello';
  const date: Date = new Date();

  return (
    <div className="App">
      <header>
        <div>DO ME!</div>
        <div>
          <button>Add Item</button>
        </div>
      </header>
      <body>
        <div>
          <div>To Do</div>
          <ToDoCard title={title} date={date} />
        </div>
        <div>Completed</div>
      </body>
      <footer>
        <div>
          <a href="https://github.com/Josh1510/typescript-todo">
            github project
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
