import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app= props => {
  const [ personsState, setPersonsState]=useState(//this is a new feature in javascript, called array destructring
     {
      persons: [
        {name: 'Max', age:28},
        {name: 'Manu', age:21},
        {name: 'Stephanie', age:88}
      ],
      otherState: 'some other value'  
    }); 

    const switchNameHandler= () =>{
      //console.log('was clicked!');
      setPersonsState({
        persons: [
        {name: 'Maxilium', age:28},
        {name: 'Manu', age:21},
        {name: 'Stephanie', age:5}
        ]
      });
    };
  

  
    return (
      <div className="App">
       <h1>I am a react app</h1>
       <button onClick={switchNameHandler}>Switch Name!</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> my hobby:soccer</Person>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
   
}

export default app;




