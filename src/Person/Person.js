import React from 'react';
const person =(props)=>{
    return (
    <div>
    <h1>I am {props.name} and {props.age} years old</h1>
    <h1>{props.children}</h1>
    </div>
    )
}

export default person