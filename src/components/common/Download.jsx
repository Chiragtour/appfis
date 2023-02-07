import React from "react";

function Download({ parentClass, imgClass }) {
  return (
    <div className={parentClass}>
      <img
        className={imgClass}
        src="/assets/icons/download/app_store.png"
        alt="app store"
      />
      <img
        className={imgClass}
        src="/assets/icons/download/play_store.png"
        alt="play store"
      />
    </div>
  );
}

export default Download;
