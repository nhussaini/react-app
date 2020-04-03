import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';




class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] contructor');
  }
  state = {
    persons: [
      {id:'fda',name: 'Max', age:28},
      {id:'ghdfg',name: 'Manu', age:21},
      {id:'gfsdv',name: 'Stephanie', age:88}
    ],
    showPersons:false
  }

  static getDerivedStateFromProps(props,state){
    console.log('[app.js] getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('[apps.js] componentDidMount');
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
    console.log('[app.js] render');

    let persons=null;
  

    if (this.state.showPersons){
      persons=
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;    
    }
  
    return (
    
      <div className="classes.App">
       <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/> 
       {persons} 

       
        
      
      </div>
    
    );
  }
}

export default App;
