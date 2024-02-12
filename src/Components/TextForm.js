import React, { useState } from "react";
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text, setText] = useState("Enter the text...");

    const HandleOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value);
    };

    const upperCase = () => {
        const toUpperCase = text.toUpperCase();
        setText(toUpperCase);
    };

    const titleCase = () => {
        let newText = text.split(" ").map(word => CapitalizeFirstLetter(word)).join(" ");
        setText(newText);
    };

    const clearText = () => {
        const newText = "";
        setText(newText);
    }

    const CapitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    const lowerCase = () => {
        const toUpperCase = text.toLowerCase();
        setText(toUpperCase);
    };

    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea id="my-box" className="form-control" onChange={HandleOnChange} value={text} rows="5"></textarea><br />
                <button className="btn btn-primary mx-3" onClick={upperCase}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={lowerCase}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={titleCase}>Convert To TitleCase</button>
                <button className="btn btn-primary mx-3" onClick={clearText}>Clear Text</button>
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
    heading: PropTypes.string
}