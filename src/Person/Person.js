import React from 'react';
const person =(props)=>{
    return (
    <div className="Person">
<p onClick={props.click}> I'm {props.name} and I am {props.age} years old</p>
    <h1>{props.children}</h1>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person