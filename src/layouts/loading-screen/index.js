import React, { useState, useEffect } from 'react';
import './style.css';

export default function LoadingScreen({ time, children }) { // time in seconds
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const count = setTimeout(() => {
      setShowLoading(false);
    }, time * 1000);
    return () => clearTimeout(count);
  }, [time]);

  return (
    <>
      {showLoading ? (
        <div id="loading-screen" class="position-fixed">
          <div id="background-layer" class="w-100 h-100 d-flex justify-content-center align-items-center flex-column">
            <img src="images/loading_img.png" alt="" width="228" />
            <div id="aaa">AAA HERO-BASED STRATEGY GAME</div>
            <div id="loading-bar-container" class="position-relative mt-5">
              <div id="loading-bar-bg" class="position-absolute"></div>
              <div id="loading-bar" class="position-absolute" style={{ animation: `loading-bar ${time}s` }}></div >
            </div >
          </div >
        </div >
      ) : children
      }
    </>
  );
};
