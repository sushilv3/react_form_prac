import React, { useState } from 'react';
import './App.css';

function App() {

const[name, setName] = useState();
const[newName, setNewName] = useState();

const[lastName,setLastName] = useState();
const[newLastName,setNewLastName] = useState();

  const inputEvent = (event)=>{
    console.log(event.target.value);
    setName(event.target.value);
  };


  const inputEventTwo = (event)=>{
    setLastName(event.target.value);
  };

  const onSubmit = (event) =>{
    event.preventDefault();

    setNewName(name);
    setNewLastName(lastName);
  };
  return (
    <>
    <div className="main_div">
      <form onSubmit={onSubmit} >
          <div>
            <h1>Hello, {newName} {newLastName}</h1>
            <input type="text" placeholder="Enter Your Name" onChange={inputEvent}  value={name} />
            <br />

            <input type="text" placeholder="Enter Your Last Name" onChange={inputEventTwo}  value={lastName} />
            <button type="submit" >Click Me</button>
          </div>
      </form>
      </div>
    </>
    
  );
}

export default App;
