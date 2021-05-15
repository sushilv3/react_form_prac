import React, { useState } from 'react';
import './App.css';

function App() {

const [fullName, setFullName] = useState({
  fname:'',
  lname:'',
  email:'',
  mnumber:''
});

  const inputEvent = (event)=>{
    console.log(event.target.value);
    console.log(event.target.name);
    console.log(event.target.placeholder);

    // const value = event.target.value;
    // const name = event.target.name;

    // array destructuring
    const {value, name} = event.target;

    setFullName((preValue)=>{
      console.log("@@@@@@@@@@@@@@", preValue);
      
      return{
        ...preValue,
        [name]: value,
      }
    });
  };

  const onSubmit = (event) =>{
    event.preventDefault();
    alert('form submitted');
  };

  return (
    <>
    <div className="main_div">
      <form onSubmit={onSubmit} >
          <div>
            <h1>Hello, {fullName.fname} {fullName.lname}</h1>
            <p>{fullName.email} {fullName.mnumber}</p>
            <input type="text" name="fname" placeholder="Enter Your Name" onChange={inputEvent} value={fullName.fname} />
            <br />

            <input type="text" name="lname" placeholder="Enter Your Last Name" onChange={inputEvent}  value={fullName.lname} />

            <input type="email" name="email" placeholder="Enter Your E mail" onChange={inputEvent}  value={fullName.email} />

            <input type="number" name="mnumber" placeholder="Enter Your Moobile Number" onChange={inputEvent}  value={fullName.mnumber} />

            <button type="submit" >Click Me</button>
          </div>
      </form>
      </div>
    </>
    
  );
}

export default App;
