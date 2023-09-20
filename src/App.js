import './App.css';
import TextForm from './componenets/TextForm';
import Navbar from './componenets/Navbar';
import About from './componenets/About';
import React, { useState } from 'react';



function App() {
  const [mode, setmode] =  useState("light");
  const [textColor, setTextColor] = useState('dark');
  const [switchText, setSwitchText] = useState('Enable dark mode');




  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      setTextColor('light');
      setSwitchText('Enable light mode');
      document.body.style.backgroundColor = '#212529';
    } 
    else{
      setmode('light');
      setTextColor('dark');
      setSwitchText('Enable dark mode');
      document.body.style.backgroundColor = 'white';
    }
  }
 
  


  return (
    <>
    <Navbar mode={mode} switchText={switchText} title={"TextUtilities"} about={"About Us"} textColor={textColor} toggleMode={toggleMode}  />
    {/* <Navbar myDict={{title: 'TextUtilities', about: 'About Us'}} /> */}
    <TextForm mode={mode} textColor={textColor} title="Enter your text below to analyze..."/>
    <hr />
    <About textColor={textColor}/>
    </>
  );
}

export default App;
