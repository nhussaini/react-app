import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>I am a react app</h1>
       <Person name="Max" age="25"/>
       <Person name="nasr" age="60"/>
      </div>
    );
  }
}

export default App;
