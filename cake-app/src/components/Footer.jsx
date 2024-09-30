import React from "react";
import cakeLogo from "../image/cake-logo.jpeg"


export default function Footer() {
  return (
    <div className="footer">
      <div className="company-info" >
        <img src={cakeLogo} alt="logo"/>
        <p>
          We aimed to offer Nairobi smokers with alternatives. Our brand
          presents top-tier devices sourced globally, a <br />
          delectable array of flavors, a distinct customer service approach, all
          at an exceptionally friendly price point.
        </p>
      </div>

      <div className="products">
        <h2>PRODUCTS</h2>
        <h6>Wedding cakes</h6>
        <h6>Wedding cakes</h6>
        <h6>Wedding cakes</h6>
        <h6>Wedding cakes</h6>
        <h6>Wedding cakes</h6>
      </div>
      <div className="company">
        <h2>Company</h2>
        <h6>Wedding cakes</h6>
        <h6>Wedding cakes</h6>
        <h6>Wedding cakes</h6>
        <h6>Wedding cakes</h6>
        <h6>Wedding cakes</h6>
      </div>
      <div className="contact" >
        <h2>Contact</h2>
        <h6>Wedding cakes</h6>
        <h6>Wedding cakes</h6>
        <h6>Wedding cakes</h6>
        <h6>Wedding cakes</h6>
        <h6>Wedding cakes</h6>
      </div>
    </div>
  );
}
