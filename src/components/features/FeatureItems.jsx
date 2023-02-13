import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { features } from "./featureList";

function FeatureItems() {
  const [active, setActive] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => active <= 4 && setActive(active + 1),
    onSwipedRight: () => active > 0 && setActive(active - 1),
  });

  console.log("active", active);

  return (
    <>
      <div className="features-list-wrap" {...handlers}>
        {features.map((feature, i) => (
          <div
            className={`feature-details 
            ${active === i ? "active" : ""} 
            ${active === i - 1 ? "prev" : ""} 
            ${active === i + 1 ? "next" : ""}
            `}
            key={i}
          >
            <img
              className="feature-icon"
              src={feature.icon}
              alt={feature.title}
            />
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-para">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="slider-button-wrap">
        {features.map((feature, i) => (
          <button
            key={i}
            className={`slider-button ${active == i && "active-slide"}`}
            onClick={() => setActive(i)}
          ></button>
        ))}
      </div>
    </>
  );
}

export default FeatureItems;
