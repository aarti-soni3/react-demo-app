// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';

function App() {

  const [mode,setMode] = useState("dark");

  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtills" about="About TextUtills" mode={mode}/>
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
