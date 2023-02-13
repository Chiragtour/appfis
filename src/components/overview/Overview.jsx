import React from "react";
import "./overview.css";
import Download from "../common/Download";
import { steps } from "./steps";
import Functionality from "./Functionality";

function Overview({ overviewRef }) {
  return (
    <div className="overview-wrap" ref={overviewRef}>
      <div className="how-it-works-wrap">
        <h1 className="how-it-works">How does this app works</h1>
        <div className="download-steps">
          {steps.map((step, i) => (
            <div className="steps" key={i}>
              <span className="index">{i + 1}</span>
              <div className="step-text">
                <h2 className="step-title">{step.title}</h2>
                <p className="step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Download
          parentClass={"download-app-centered"}
          imgClass={"store-image"}
        />
      </div>
      <Functionality />
    </div>
  );
}

export default Overview;
