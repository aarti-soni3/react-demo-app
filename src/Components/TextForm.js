import React, { useState } from "react";
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text, setText] = useState("Enter The Text...");

    const HandleOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value);
    };

    const upperCase = () => {
        console.log("OnClick");
        const toUpperCase = text.toUpperCase();
        setText(toUpperCase);
    };

    const lowerCase = () => {
        console.log("OnClick");
        const toUpperCase = text.toLowerCase();
        setText(toUpperCase);
    };

    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea id="my-box" className="form-control" onChange={HandleOnChange} value={text} rows="5"></textarea><br />
                <button className="btn btn-primary mx-3" onClick={upperCase}>Convert To UpperCase</button>
                <button className="btn btn-primary" onClick={lowerCase}>Convert To LowerCase</button>
            </div>
            <div className="container">
                <h2>Your Text Summary </h2>
                <p>{text.split(" ").length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes To Read</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string,
}