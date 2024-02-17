// import logo from "./logo.svg";
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useEffect, useState } from 'react';

function App() {

  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = mode === "dark" ? "#042743" : "white";
  },[mode]);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode Enabled!");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("success", "Dark Mode Enabled!");
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtills" about="About TextUtills" mode={mode} toggleMode={toggleMode} /> 
      <Alert alert={alert}/>
      <div className='container my-3'> {/*</div> style={{ backgroundColor: mode === "dark" ? "#042743" : "white" }}>*/}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}
      </div >
    </>
  );
}

export default App;
