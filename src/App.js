import React from 'react';
import logo from './logo.svg';

import './App.css';
import HelloWorld from './Hello.js';

// function App(props) {
function App({name, age}) {
  return <div>Hello from App.js!

            <div>I LOVE U {name}, Aged: {age}</div>

            <br/>

            <HelloWorld name={name}></HelloWorld>
            
        </div>
}

export default App;

