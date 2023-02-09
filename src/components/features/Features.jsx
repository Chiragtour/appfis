import React from "react";
import "./features.css";
import FeatureItems from "./FeatureItems";

function Features({ featuresRef }) {
  return (
    <div className="features-wrap" ref={featuresRef}>
      <div className="features-heading">
        <h1>
          <span className="dark-text">
            Popular features that
            <br />
          </span>
          <span className="blue-text">blows your mind</span>
        </h1>
        <br />
      </div>
      <div className="features-main">
        <div className="features-image">
          <img src="/assets/features.png" alt="features" />
        </div>
        <FeatureItems />
      </div>
    </div>
  );
}

export default Features;
