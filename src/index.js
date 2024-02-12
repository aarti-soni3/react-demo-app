import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
import About from './Components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <Navbar /> */}
        <Navbar title="TextUtills" about="About TextUtills" />
        <div className='container my-3'>
        {/* <TextForm heading="Enter the text to analyze" /> */}
        <About/>
        </div>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();