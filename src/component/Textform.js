import React, { useState } from "react";

function Textform(props) {
  const handleuphookclick = () => {
    console.log("upper case was clicked " + text);
    let setText = text.toUpperCase();
    newtext(setText);
  };
  const getCount=(text)=> {
    return text.trim().split(/\s+/).length;
   }
  const handldownphookclick = () => {
    console.log("upper case was clicked " + text);
    let setText = text.toLowerCase();
    newtext(setText);
  };
  const handleclearclick = () => {
    console.log("upper case was clicked " + text);
    let setText = " ";
    newtext(setText);
  };
  const handleemailclick = (text) => {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    
  };
  const handledownhookclick = (event) => {
    console.log("on changed ");
    newtext(event.target.value);
  };
  const [text, newtext] = useState("enter text here");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handledownhookclick}
          id="floatingTextarea"
          rows="8"
        ></textarea>
        <label for="floatingTextarea"></label>
      </div>
      <div className="btn btn-primary mx-3" onClick={handleuphookclick}>
        convert to uppercase
      </div>
      <div className="btn btn-primary" onClick={handldownphookclick}>
        convert to lowercase
      </div>
      <div className="btn btn-primary mx-3" onClick={handleclearclick}>
        clear text
      </div>
      { <div className="btn btn-primary " onClick={handleemailclick}>
        extraxt email
      </div> }
      <div className="container">
        <p>
          <h1>Your text summary</h1>
          {getCount(text)} words and {text.length}characters
        </p>
        <h1>
          Time required to read 
        </h1>
        <p>
          {0.08*text.split(" ").length} minutes
        </p>
        <h1>Preview</h1>
        <p>{text}</p>
        <h1> email </h1>
        <p>{handleemailclick(text)}</p>
      </div>
    </div>
  );
}

export default Textform;
