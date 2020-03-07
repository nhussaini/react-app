import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age:28},
      {name: 'Manu', age:21},
      {name: 'Stephanie', age:88}
    ],
    showPersons:false
  }
  switchNameHandler= () =>{
    //console.log('was clicked!');
    this.setState({
      persons: [
      {name: 'Maxilium', age:28},
      {name: 'Manu', age:21},
      {name: 'Stephanie', age:88}
      ],
      
    })
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
      {name: 'Maxilium', age:28},
      {name: event.target.value, age:21},
      {name: 'Stephanie', age:88}
      ],
      
    })
  }

  togglePersonsHandler = () => {
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }
  render() {
    return (
      <div className="App">
       <h1>I am a react app</h1>
       <button onClick={this.togglePersonsHandler}>Switch Name!</button>
       { this.state.showPersons===true ?
         <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}> my hobby:soccer</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
       </div> : null
      }
      </div>
    );
  }
}

export default App;
