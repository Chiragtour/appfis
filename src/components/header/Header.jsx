import React from "react";
import Navbar from "../navbar/Navbar";
import "./header.css";
import Download from "../common/Download";

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
      <Download parentClass={"download-app"} imgClass={"store-icon"} />
    </div>
  );
}

export default Header;
