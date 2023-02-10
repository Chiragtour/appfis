import React, { useState } from "react";
import { features } from "./featureList";

function FeatureItems() {
  const [active, setActive] = useState(0);
  return (
    <div className="features-list-wrap">
      {features.map((feature, i) => (
        <div className={`feature-details ${active == i && "active"}`} key={i}>
          <img
            className="feature-icon"
            src={feature.icon}
            alt={feature.title}
          />
          <h2 className="feature-title">{feature.title}</h2>
          <p className="feature-para">{feature.description}</p>
        </div>
      ))}
      <div style={{ position: "relative", left: "75%" }}>
        {features.map((feature, i) => (
          <button
            key={i}
            style={{
              position: "absolute",
              bottom: 0,
              left: `${10 * (i + 1)}%`,
              backgroundColor: active == i && "red",
            }}
            onClick={() => setActive(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FeatureItems;
