import React, { Component } from 'react';
import classes from  './App.css';
import Persons from '../components/Persons/Persons';



class App extends Component {
  state = {
    persons: [
      {id:'fda',name: 'Max', age:28},
      {id:'ghdfg',name: 'Manu', age:21},
      {id:'gfsdv',name: 'Stephanie', age:88}
    ],
    showPersons:false
  }
  

  nameChangedHandler = (event,id) =>{
    const personIndex=this.state.persons.findIndex(p =>{
      return p.id===id;
    });
      const person= {...this.state.persons[personIndex]};
      person.name=event.target.value;

      const persons= [...this.state.persons];
      persons[personIndex] = person;

    
    this.setState({
      persons:persons
    })
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons}); 
  }

  togglePersonsHandler = () => {
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }
  render() {

    let persons=null;
    let btnClass = [classes.Button];

    if (this.state.showPersons){
      persons=(
        <div>
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
          
     </div>
      );
        btnClass.push(classes.Red);
    }
    let assignedClasses = [];
    if(this.state.persons.length<=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length<=1){
      assignedClasses.push(classes.bold);
    }
    return (
    
      <div className="classes.App">
        <h1>I am a react app</h1>
        <p class={assignedClasses.join(' ')}>this is really working!</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>Toggle Persons!</button>
       {persons} 
       
        
      
      </div>
    
    );
  }
}

export default App;
