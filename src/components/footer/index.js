import React from "react";
import { Link } from 'react-router-dom';
import Stores from "../stores";
import Socials from '../socials';
import './style.css';

export default function Footer() {
  return (
    <div id="footer">
      <div  class="container d-block">
      <div id="first-row">
        <Socials />
        <Stores />
      </div>
      <div id="divider"></div>
      <div id="second-row" class="d-flex justify-content-between">
        <div class="d-flex">
          <div class="content-item">
            <h5>Main</h5>
            <Link to="/"><div>Home</div></Link>
            <Link to="/about"><div>About Us</div></Link>
            <Link to="/team"><div>Our Team</div></Link>
            <Link to="/guide"><div>Guide</div></Link>
            <Link to="/market-place"><div>Marketplace</div></Link>
          </div>
          <div class="content-item">
            <h5>Explore</h5>
            <div class="empty">Players</div>
            <div class="empty">Clan Castle</div>
            <div class="empty">Analytics</div>
            <div class="empty">Leaderboards</div>
            <div class="empty">IMS Pass</div>
          </div>
          <div class="content-item">
            <h5>Token</h5>
            <div class="empty">Mint NFTs</div>
            <Link to="/staking"><div>Staking</div></Link>
            <div class="empty">Learn more</div>
            <div class="empty">Sapphire Bridge</div>
            <div class="empty">Governance</div>
          </div>
          <div class="content-item">
            <Link to="/about"><h5>About</h5></Link>
            <Link to="/privacy"><div>Privacy Policy</div></Link>
            <Link to="/term"><div>Term and Conditions</div></Link>
            <Link to="/dis-claim"><div>Disclaimer</div></Link>
            <div class="empty">Help & Support</div>
            <div class="empty">Art Gallery</div>
          </div >
        </div >
        <div id="third-row" class="d-flex flex-column justify-content-end">
          <img src="images/Logo 1.png" width="120px" alt="" />
          <div class="text text-right">@ Copyright CG3D Studio</div>
        </div>
      </div >
      </div>
    </div >
  );
}
