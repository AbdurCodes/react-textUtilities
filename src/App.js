import "./App.css";
import TextForm from "./componenets/TextForm";
import Navbar from "./componenets/Navbar";
import About from "./componenets/About";
import React, { useState } from "react";
import Alert from "./componenets/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [textColor, setTextColor] = useState("dark");
  const [switchText, setSwitchText] = useState("Enable dark mode");
  const [alert, setAlert] = useState({
    msg: "",
    type: "",
  });

  const showALert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert({
        msg: "",
        type: "",
      });
    }, 1500);
  };


  const removeColorClass = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }

  const bgPallete = (colorClass) => {
    // console.log(colorClass);
    removeColorClass();
    document.body.classList.add('bg-'+ colorClass);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setTextColor("light");
      setSwitchText("Enable light mode");
      document.body.style.backgroundColor = "#212529";
      showALert("Dark mode enabled", "success");
    } else {
      setmode("light");
      setTextColor("dark");
      setSwitchText("Enable dark mode");
      document.body.style.backgroundColor = "white";
      showALert("Light mode enabled", "success");
    }
  };

  // ----------- Attention grabber text --------------
  // setInterval(() => {
  //   document.title = "Click here";
  // }, 100);
  // setInterval(() => {
  //   document.title = "Download";
  // }, 49);

  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          switchText={switchText}
          title={"TextUtilities"}
          about={"About Us"}
          textColor={textColor}
          toggleMode={toggleMode}
          bgPallete={bgPallete}
        />
        {/* <Navbar myDict={{title: 'TextUtilities', about: 'About Us'}} /> */}
        <Alert alert={alert} />

        <hr />
        <hr />

        <Routes>

          <Route path="/" exact element={ <TextForm
              showALert={showALert}
              mode={mode}
              textColor={textColor}
              title="Enter your text below to analyze..."
            /> }
          />
         

          <Route path="/about" exact element={<About about={"About"} mode={mode} textColor={textColor} />}/>
  

        </Routes>
        
      </Router>
    </>
  );
}

export default App;
