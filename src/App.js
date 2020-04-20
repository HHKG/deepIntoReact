import React from 'react';
import logo from './logo.svg';
import './App.css';
import List1 from './pages/List';
import List2 from './pages/List2';
import MyComponent from '../src/pages/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
      <List1></List1>
      <List2></List2>
    </div>
    <MyComponent></MyComponent>
    </div>
  );
}

export default App;
