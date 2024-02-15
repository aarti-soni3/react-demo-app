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

    const handleCopy = () => {
        var txt = document.getElementById("my-box");
        txt.select();
        navigator.clipboard.writeText(txt.value);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
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
            <div className="mb-3" style={{ color: props.mode === "dark" ? "white" : "black" }} >
                <h1>{props.heading}</h1>
                <textarea id="my-box" className="form-control" style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "light" ? "black" : "white" }} onChange={HandleOnChange} value={text} rows="5" ></textarea><br />
                <button className="btn btn-primary mx-3" onClick={upperCase}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={lowerCase}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={titleCase}>Convert To TitleCase</button>
                <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-3" onClick={clearText}>Clear Text</button>
            </div>
            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2  >Your Text Summary </h2>
                <p>{text.split(" ").length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes To Read</p>

                <h2>Preview</h2>
                <p>{text.length>0 ?text: "Enter To Preview Something..."}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string
}