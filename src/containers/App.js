import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from '../components/Persons/Person/Person';


const StyledButton = styled.button`
background-color: green;
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
&:hover{
  background-color: lightgreen;
  color: black;
}
`;
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
      const person= {... this.state.persons[personIndex]};
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let persons=null;

    if (this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person,index) => {
          return <Person
          click={()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangedHandler(event,person.id)}
          />
        })}
     </div>
      );
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    let classes = [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
    
      <div className="App">
       <h1>I am a react app</h1>
       <p class={classes.join(' ')}>this is really working!</p>
       <StyledButton onClick={this.togglePersonsHandler}>Toggle Persons!</StyledButton>
       {persons} 
       
        
      
      </div>
    
    );
  }
}

export default App;