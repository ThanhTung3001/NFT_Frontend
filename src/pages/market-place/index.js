import React from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

export default function MarketPlace() {
  return (
    <div id="marketplace">
      <div id="background-layer">
        <Header />
        <div id="img-container">
          <div id="up-comming">COMING SOON </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
