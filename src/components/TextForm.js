import React, { useState } from 'react'// hooks are used to use class based components


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const handleUpClick = () => {
        //console.log("Uppercase clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted To Uppercase','success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleDownClick = () => {
        let nt = text.toLowerCase();
        setText(nt);
        props.showAlert('Converted To Lowercase','success');
    }
    return (
        <>
            <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className={`mb-3 `}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className={`btn btn-${props.col.buttonColor} my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className={`btn btn-${props.col.buttonColor} my-2`} onClick={handleDownClick}>Convert to Lowercase</button>
                </div>
            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>
                    Your Text Summary
                </h1>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>
                    {.008 * text.split(" ").length} minutes read
                </p>
                <h2>
                    Text Preview
                </h2>
                <p>
                    {text}
                </p>
            </div>
        </>

    );
};