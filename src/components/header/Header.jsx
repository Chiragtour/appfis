import React from "react";
import NavbarComponent from "../navbar/Navbar";
import "./header.css";
import Download from "../common/Download";

function Header({ homeRef }) {
  return (
    <div className="header-main" ref={homeRef}>
      <div className="header-content">
        <h3 className="intro-text">
          Manage your clients, <br />
          Sales, Contracts and billing in one app
        </h3>
      </div>
      <Download parentClass={"download-app"} imgClass={"store-icon"} />
    </div>
  );
}

export default Header;
