import React from "react";
import Navbar from "../navbar/Navbar";
import "./header.css";

function Header() {
  return (
    <div className="header-main">
      <Navbar />
      <div className="header-content">
        <h3 className="intro-text">
          Manage your clients, <br />
          Sales, Contracts and billing in one app
        </h3>
      </div>
      <div className="download-app">
        <img
          className="store-icon"
          src="/assets/icons/download/app_store.png"
          alt="app store"
        />
        <img
          className="store-icon"
          src="/assets/icons/download/play_store.png"
          alt="play store"
        />
      </div>
    </div>
  );
}

export default Header;
