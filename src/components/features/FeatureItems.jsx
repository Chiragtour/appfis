import React from "react";
import { features } from "./featureList";

function FeatureItems() {
  return (
    <div className="features-list-wrap">
      {features.map((feature, i) => (
        <div className="feature-details" key={i}>
          <img
            className="feature-icon"
            src={feature.icon}
            alt={feature.title}
          />
          <div className="feature-text">
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-para">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureItems;
