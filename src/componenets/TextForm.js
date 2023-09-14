import React, {useState} from "react";

function TextForm(props) {
  // array destructuring
  // The useState hook returns an array with two elements: the current state value and a function to update that value
  const [text, setText] = useState("Enter your text here");
  // text is state variable having default value of "Enter your text" which can be updated with setText

  const handleUC = () => {
    setText(text.toUpperCase());
  }

  const handleLC = () => {
    setText(text.toLowerCase());
  }

  const handleOChnage = (eventObject)=>{
    setText(eventObject.target.value);
    // eventObject is the event object passed to the function
    // eventObject.target represents the DOM element that triggered the event. In this case, it's the textarea element
    // eventObject.target.value retrieves the current value of the textarea
  }

  return (
    <div className="mb-3 mt-4 container">
      <h3>{props.title}</h3>
      <textarea
        className="form-control" 
        id="textBox"  
        rows="7" 
        value={text} 
        onChange={handleOChnage} 
      ></textarea>
      <button className="mt-3 btn btn-primary" onClick={handleUC}>Convert to Uppercase</button>
      <button className="mt-3 mx-3 btn btn-primary" onClick={handleLC}>Convert to Lowercase</button>
    </div>
  );
}

export default TextForm;
