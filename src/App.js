import React, { useState } from 'react';
import './App.css';

function App() {

const [fullName, setFullName] = useState({
  fname:'',
  lname:'',
});

  const inputEvent = (event)=>{
    console.log(event.target.value);
    console.log(event.target.name);
    console.log(event.target.placeholder);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue)=>{
      console.log("@@@@@@@@@@@@@@", preValue)

      // name is present input attribute name

      if(name === "fName"){
        return{
          fname: value,
          lname:preValue.lname
        };
      }else if(name === "lName"){
        return{
          fname: preValue.fname,
          lname:value
        };
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
            <input type="text" name="fName" placeholder="Enter Your Name" onChange={inputEvent} value={fullName.fname} />
            <br />

            <input type="text" name="lName" placeholder="Enter Your Last Name" onChange={inputEvent}  value={fullName.lname} />

            <button type="submit" >Click Me</button>
          </div>
      </form>
      </div>
    </>
    
  );
}

export default App;
