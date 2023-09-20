import React, { useState } from "react";

export default function About(props) {

  const [changeTheme, setTheme] = useState({
    color: "black",
    backgroundColor: "white"
  });

  const [btnText, setBtnText] = useState("Enable dark theme");

  const toggleTheme = () => {
    if (changeTheme.color === "black" && changeTheme.backgroundColor === "white") {
      setTheme({
        color: "white",
        backgroundColor: "black",
        border: '1px solid white'
      });
      setBtnText("Enable light theme");
    }
    else{
      setTheme({
        color: "black",
        backgroundColor: "white",
        border: '1px solid black'
      });
      setBtnText("Enable dark theme");
    }
  }



  return (
    <>
    
    <div className="container mt-5">
    <h2 className={`text-${props.textColor}`} id="aboutUs">About Us</h2>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={changeTheme}>
          <h2 className="accordion-header">
            <button
              style={changeTheme}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What this website is all about?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={changeTheme}>
          <h2 className="accordion-header">
            <button
            style={changeTheme}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What is allowed and what is not?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={changeTheme}>
          <h2 className="accordion-header">
            <button
            style={changeTheme}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Are there pro-options available for clients?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <button type="button" onClick={toggleTheme} className="btn btn-primary my-2 mb-5" >{btnText}</button>
    </div>
    </>
  );
}
