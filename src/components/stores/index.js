import React from 'react';
import './style.css';

export default function Stores() {
  return (
    <div class="stores">
      <div class="store">
        <img src="images/Apple.png" alt="apple" />
        <div>Download on the <br /><span>APP STORE</span></div>
      </div>
      <div class="store">
        <img src="images/Chplay.png" alt="chplay" />
        <div>Get it on <br /><span>GOOGLE PLAY</span></div>
      </div>
    </div>
  );
};
