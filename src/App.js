import './App.css';
import TextForm from './componenets/TextForm';
import Navbar from './componenets/Navbar';
import About from './componenets/About';
import React, { useState } from 'react';
import Alert from './componenets/Alert';



function App() {
  const [mode, setmode] =  useState("light");
  const [textColor, setTextColor] = useState('dark');
  const [switchText, setSwitchText] = useState('Enable dark mode');
  const [alert, setAlert] = useState({
    msg: '',
    type: ''
  });



  const showALert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert({
        msg: '',
        type: ''
      });
    }, 1500);
   }


  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      setTextColor('light');
      setSwitchText('Enable light mode');
      document.body.style.backgroundColor = '#212529';
      showALert("Dark mode enabled", "success");
    } 
    else{
      setmode('light');
      setTextColor('dark');
      setSwitchText('Enable dark mode');
      document.body.style.backgroundColor = 'white';
      showALert("Light mode enabled", "success");
    }
  }
 
  // ----------- Attention grabber text --------------
  // setInterval(() => {
  //   document.title = "Click here";
  // }, 100);
  // setInterval(() => {
  //   document.title = "Download";
  // }, 49);


  return (
    <>
    <Navbar mode={mode} switchText={switchText} title={"TextUtilities"} about={"About Us"} textColor={textColor} toggleMode={toggleMode}  />
    {/* <Navbar myDict={{title: 'TextUtilities', about: 'About Us'}} /> */}
    <Alert alert={alert} />
    <TextForm showALert={showALert} mode={mode} textColor={textColor} title="Enter your text below to analyze..."/>
    <hr />
    <About textColor={textColor}/>
    </>
  );
}

export default App;
