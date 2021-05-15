import React, { useState } from 'react';
import './App.css';

function App() {

const[name, setName] = useState();
const[fullName, setFullName] = useState();

  const inputEven = (event)=>{
    console.log(event.target.value);
    setName(event.target.value)
  };

  const onSubmit = () =>{
    setFullName(name);
  }
  return (
    <>
      <div>
         <h1>Hello {fullName}</h1>
         <input type="text" placeholder="Enter Your Name" onChange={inputEven}  value={name}/>
         <button onClick={onSubmit} >Click Me</button>
      </div>
    </>
  );
}

export default App;
