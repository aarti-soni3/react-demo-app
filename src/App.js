// import logo from "./logo.svg";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  // Routes,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = mode === "dark" ? "#042743" : "white";
  }, [mode]);

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
      // document.title = "TextUtils Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing....";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1200);

    } else {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("success", "Dark Mode Enabled!");
      // document.title = "TextUtils Light Mode";
    }
  }

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Navbar title="TextUtills" about="About TextUtills" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'> {/*</div> style={{ backgroundColor: mode === "dark" ? "#042743" : "white" }}>*/}
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Charater Counter, Remove Extra Space " mode={mode} />
            </Route>
          </Switch>
        </div >
      </Router>
    </>
  );
}

export default App;
