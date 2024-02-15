// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";

    } else {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
    }

  }

  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtills" about="About TextUtills" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
