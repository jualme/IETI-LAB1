import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from './TodoApp';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>TODO React App</h1>
        </p>
        <p>
          <TodoApp />
        </p>
        <br/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
