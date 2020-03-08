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
    let persons=null;

    if (this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map(person => {
          return <Person
            name={person.name}
            age={person.age}
          />
        })}
     </div>
      );
    }
    return (
      <div className="App">
       <h1>I am a react app</h1>
       <button onClick={this.togglePersonsHandler}>Switch Name!</button>
       {persons} 
       
        
      
      </div>
    );
  }
}

export default App;
