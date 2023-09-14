import React from 'react';

import PropTypes from 'prop-types'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    {/* <a className="navbar-brand" href="/">{props.myDict.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
          {/* <a className="nav-link active" aria-current="page" href="/">{props.myDict.about}</a> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Links</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Utilities
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Make Uppercase</a></li>
            <li><a className="dropdown-item" href="/">Make Lowercase</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Embolden</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href='/' aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
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
