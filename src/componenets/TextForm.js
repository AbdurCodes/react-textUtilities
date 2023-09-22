import React, {useState} from "react";


function TextForm(props) {
  // array destructuring
  // The useState hook returns an array with two elements: the current state value and a function to update that value
  const [text, setText] = useState(""); // initial text is ""
  // const [text, setText] = useState("Enter your text here");
  // text is state variable having default value of "Enter your text" which can be updated with setText
  const [history, setHistory] = useState([]); // initial history is []
  const [currentIndex, setCurrentIndex] = useState(-1); // initial currentIndex is -1



  const handleUC = () => {
    setText(text.toUpperCase());
    props.showALert("Text converted to UPPERCASE", "success");
  }

  const handleLC = () => {
    setText(text.toLowerCase());
    props.showALert("Text converted to lowercase", "success");
  }

  const handleSentenceCase = () => {
    const wholeText = [];
    const allSentences = text.split(". ");
    for (let i=0; i<allSentences.length; i++){
      const wordsList = allSentences[i].split(" ");
      const firstWord = wordsList[0][0].toUpperCase() + wordsList[0].slice(1);
      wordsList.shift()
      wordsList.unshift(firstWord)
      wholeText.push(wordsList.join(" "));
    setText(wholeText.join(". "));
    props.showALert("Text converted to Sentence case", "success");
    }
    
  }

  const handleCapitalizedCase = () => {
    const capitalizedCase = text.split(" ").map(e => e[0].toUpperCase() + e.slice(1).toLowerCase());
    setText(capitalizedCase.join(" "));
    props.showALert("Text converted to Title Case", "success");
  }
  
  const handleClear = () => {
    setText("");
    props.showALert("All text cleared", "success");
  }

  
  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setText(history[currentIndex - 1]);
    }

  }

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setText(history[currentIndex + 1]);
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showALert("Text copied to clipboard", "success")
  }

  const RemExtraSpaces = () => {
    const regexPattern = /[ ]+/g;
    const newText = text.split(regexPattern);
    setText(newText.join(" "));
    props.showALert("Extra spaces removed from text", "success")
  }

  const handleOChnage = (eventObject)=>{
    const newText = eventObject.target.value;
    setText(newText);
    setHistory([...history.slice(0, currentIndex + 1), text]);
    setCurrentIndex(currentIndex + 1);
    // eventObject is the event object passed to the function
    // eventObject.target represents the DOM element that triggered the event. In this case, it's the textarea element
    // eventObject.target.value retrieves the current value of the textarea
    
  }
  return (
    <>
    <div className="mb-3 mt-4 container">
      <h3 className={`text-${props.textColor}`} style={{display: "inline"}}>{props.title}</h3>
      <button className="mx-2 my-2" onClick={handleClear}>Clear text</button>
      <button className="mx-2 my-2" onClick={handleUndo}>Undo</button>
      <button className="mx-2 my-2 redo-button" onClick={handleRedo}>Redo</button>
      <textarea
      className="form-control"
        style={props.mode === 'dark' ? {backgroundColor: 'rgb(70 70 156)', color: 'white'} : {backgroundColor: 'white', color: 'black'}}
        id="textBox"  
        rows="7" 
        placeholder="Type or paste your text here..."
        value={text} 
        onChange={handleOChnage} 
      ></textarea>
      <button className="mt-3 btn btn-primary" onClick={handleUC}>UPPER CASE</button>
      <button className="mt-3 mx-3 btn btn-primary" onClick={handleLC}>lowercase</button>
      <button className="mt-3 btn btn-primary" onClick={handleCapitalizedCase}>Title Case</button>
      <button className="mt-3 mx-3 btn btn-primary" onClick={handleSentenceCase}>Sentence case</button>
      <button className="mt-3 btn btn-primary" onClick={handleCopy}>Copy text</button>
      <button className="mt-3 mx-3 btn btn-primary" onClick={RemExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className={`container my-4 text-${props.textColor}`}>
      <h2>Your text Summary</h2>
      <p>{text.length > 0 ? text.split(" ").length : "0"} word(s), {text.length} character(s)</p>
      <p>Number of sentence(s): {text.length > 0 ? text.split(". ").length : "0"}</p>
      <p>Text read time in seconds: {0.25 * (text.length > 0 ? text.split(" ").length : "0")}</p>
      <p>Text read time in minutes: {0.25 * (text.length > 0 ? text.split(" ").length : "0") / 60}</p>
      <h3>Preview of your Text</h3>
      <p>{text.length > 0 ? text : "Enter some text in the above field to preview here..."}</p>
    </div>
    </>
  );
  
}

export default TextForm;
