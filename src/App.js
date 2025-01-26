// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import FirstComp from './propContainer/FirstComp';
import SecondComp from './propContainer/SecondComp';
import ThirdComp from './propContainer/ThirdComp';
import FourthComp from './propContainer/FourthComp';

const user = {
  name : "Suresh",
  address:"Vizag",
  area:"Madhurawada"
}

function App() {
  // const [name,setName]= useState("Suresh React Js 2025 !!!!")
  // return (
  //  <div>
  //   <h2>Welcome to {name}</h2>
  //  </div>
  // );
  return(
    <>
    <FirstComp name={user.name} />
    <SecondComp name={user.address} />
    <ThirdComp name="sitaram" />
    <FourthComp name="swaroop" />
    </>
  )
}

export default App;
