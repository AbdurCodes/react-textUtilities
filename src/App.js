import './App.css';
import TextForm from './componenets/TextForm';
import Navbar from './componenets/Navbar';
import About from './componenets/About';

function App() {
  return (
    <>
    <Navbar title={"TextUtilities"} about={"About Us"}/>
    {/* <Navbar myDict={{title: 'TextUtilities', about: 'About Us'}} /> */}
    <TextForm title="Enter your text below to analyze..."/>
    <hr />
    <About/>

    </>
  );
}

export default App;
