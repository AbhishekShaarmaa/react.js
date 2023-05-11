// import logo from './logo.svg';
// import './App.css';

// import AboutUs from "./component/AboutUs";
import NavBar from "./component/NavBar";
import Textform from "./component/Textform";
import Alert from "./component/Alert";
import React, { useState } from "react";

function App() {

  // const [showalert, setshowalert] = UseState()
const [alert, setalert] = useState('null')
const [mode, setmode] = useState('lg')

const showalert=( message, type )=>{
  setalert(
     {
      message: message,
      type: type
     }

  )
}
const toggle =()=>
{
  if (mode==='lg') {
    setmode('dark')
    document.body.style.backgroundColor = 'black';
    showalert("aark has been enable , sucsses")
   
  } else {
    setmode('lg')
    
    document.body.style.backgroundColor = 'white';
    showalert("light has been enable , sucsses ")
  }
}


  return (
    <>
      <NavBar about="about us" mode={mode} toggle={toggle} />
      <div>
        <Alert alert={alert} />
      </div>
      <div className="container my-3" >
        <Textform heading="enter text" />
      </div>
      {/* <div className="container my-3" >
<AboutUs/>
</div> */}
    </>
  );
}

export default App;
