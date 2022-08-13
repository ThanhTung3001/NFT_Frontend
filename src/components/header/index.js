import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { resources, defaultLng } from '../../i18n';
import './style.css';

export default function Header() {
  const { i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  }
  const checkIfActivePage = (path) => {
    return window.location.pathname === path;
  };
  return (
    <div id="header" class="container">
      <div class="logo">
        <img alt="logo" src="images/Logo 1.png" />
      </div>
      <div class="menu">
        <Link class={'menu-item ' + (checkIfActivePage('/') ? 'active' : '')} to="/">
          <div class="text">Home</div>
        </Link>
        <Link class={'menu-item ' + (checkIfActivePage('/about') ? 'active' : '')} to="/about">
          <div class="text">About</div>
          <svg class="arrow-down" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.285156 0.800049L4.31592 5.00005L8.34668 0.800049" />
          </svg>
        </Link>
        <Link class={'menu-item ' + (checkIfActivePage('/team') ? 'active' : '')} to="/team">
          <div class="text">
            Team
            {/* <div class="soon">
              SOON!
            </div> */}
          </div>
          
        </Link>
        <Link class={'menu-item ' + (checkIfActivePage('/staking') ? 'active' : '')} to="/staking">
          <div class="text">
            Staking
            <div class="soon">
              SOON!
            </div>
          </div>
          
        </Link>
        <Link class={'menu-item ' + (checkIfActivePage('#') ? 'active' : '')} to="/market-place">
          <div class="text">Marketplace
            <div class="soon">
              SOON!
            </div>
          </div>
        </Link>
        <Link class={'menu-item ' + (checkIfActivePage('#') ? 'active' : '')} to="#">
          <div class="text">Token<div class="soon">
              SOON!
            </div></div>
          
        </Link>
        <a target="_blank" class={'menu-item ' + (checkIfActivePage('/whitePaper') ? 'active' : '')} href="https://rise-of-immortals.gitbook.io/rise-of-immortals/rise-of-immortals/what-is-rise-of-immortals">
          <div class="text">
          Whitepaper
            
          </div>
         
        </a>
      </div>
      <button id="btn-join-discord">
        Connect to Wallet
      </button>
      {/* <select id="languages" value={i18n.language} onChange={changeLanguage}>
        {Object.keys(resources).map((lang) => (
          <option value={lang}>{resources[lang].label}</option>
        ))}
      </select> */}
      
    </div >
  );
}
