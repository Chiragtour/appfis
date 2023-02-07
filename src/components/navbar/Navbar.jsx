import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src="/assets/logo.png" alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
          <a className="nav-link" href="">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            Overview
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            Contact
          </a>
        </li>
      </ul>
      <button className="sign-in">Sign in</button>
    </div>
  );
}

export default Navbar;
