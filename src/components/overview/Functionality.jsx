import React from "react";
import { functionalities } from "./functionalities";
import "./functionality.css";

function Functionality() {
  return (
    <div className="functionality-scope">
      {functionalities.map((fn, i) => (
        <div className={`functionality ${i % 2 !== 0 ? "rtl" : ""}`} key={i}>
          <div className="functionality-visuals">
            <div
              className={`functionality-bg-design ${i % 2 !== 0 ? "rtl" : ""}`}
            />
            <img
              className={`functionality-image ${i % 2 !== 0 ? "rtl" : ""}`}
              src={fn.image}
              alt=""
            />
          </div>
          <div className={`functionality-text ${i % 2 !== 0 ? "rtl" : ""}`}>
            <h1 className="functionality-text-head">{fn?.title}</h1>
            <button className="functionality-button">
              {fn?.button?.action}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Functionality;
