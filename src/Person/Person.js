import React from 'react';
import Radium from 'radium';
import './Person.css';

const person =(props)=>{
    const style={
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };
    return (
    <div className="Person" style={style}>
<p onClick={props.click}> I'm {props.name} and I am {props.age} years old</p>
    <h1>{props.children}</h1>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default Radium(person);