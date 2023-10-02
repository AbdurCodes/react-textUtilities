import React from 'react';

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Navbar(props) {
const toggleBlue = () => {
  document.body.style.backgroundColor = '#619da9';
}
const toggleRed = () => {
  document.body.style.backgroundColor = '#b55987';
}
const toggleGreen = () => {
  document.body.style.backgroundColor = '#52a37d';
}



  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    {/* <a className="navbar-brand" href="/">{props.myDict.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
          {/* <a className="nav-link active" aria-current="page" href="/">{props.myDict.about}</a> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Links</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dark Flavors
          </a>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={toggleBlue}>Blue dark mode</button></li>
            <li><button className="dropdown-item" onClick={toggleGreen}>Green dark mode</button></li>
            <li><button className="dropdown-item" onClick={toggleRed}>Red dark mode</button></li>
          </ul>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled" href='/' aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <div className="bg-primary mx-1" onClick={()=>props.bgPallete('primary')} style={{width: '30px', height: '30px', cursor: 'pointer'}}></div>
      <div className="bg-success mx-1" onClick={()=>props.bgPallete('success')} style={{width: '30px', height: '30px', cursor: 'pointer'}}></div>
      <div className="bg-danger mx-1" onClick={()=>props.bgPallete('danger')} style={{width: '30px', height: '30px', cursor: 'pointer'}}></div>
      <div className="bg-warning mx-1" onClick={()=>props.bgPallete('warning')} style={{width: '30px', height: '30px', cursor: 'pointer'}}></div>

      <div className={`form-check form-switch mx-3 text-${props.textColor}`}>
      <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.switchText}</label>
    </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search here" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


  )
}

export default Navbar;



// types of the props
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  };

// default values of the props
Navbar.defaultProps = {
    title: "Plz enter title",
    about: "Plz enter about us",
}
