import React from 'react';
import classes from  './Person.css';




const person =(props)=>{
  console.log('[person.js] rendering ..');
    return (
    //<div className="Person" style={style}>
        <div className={classes.Person}>
          <p onClick={props.click}> I'm {props.name} and I am {props.age} years old</p>
          <h1>{props.children}</h1>
          <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person;