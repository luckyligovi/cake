import React from "react";
import cakeLogo from "../image/cake-logo.jpeg";
import { Link } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <div style={{marginTop:"100px"}}>
      <hr style={{maxWidth:"1500px"}} />
      <SocialMediaIcons/>
      <div className="footer">
        <div className="company-info">
          <img src={cakeLogo} alt="logo" />
          <p style={{maxWidth:"500px"}}>
            We aimed to offer Nairobi smokers with alternatives. Our brand
            presents top-tier devices sourced globally, a 
            delectable array of flavors, a distinct customer service approach,
            all at an exceptionally friendly price point.
          </p>
        </div>

        <div className="products">
          <h2>PRODUCTS</h2>
          <p>black forest</p>
          <p>Wedding cakes</p>
          <p>Cup cakes</p>
        </div>
        <div className="company">
          <h2>Company</h2>
          <p> <Link className="links" to="/about">About us</Link> </p>
          <p> <Link className="links" to="/contact" >Contact us</Link> </p>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <p>@ligovilucky.gmail.com</p>
          <p>+254 798645012</p>
          <p>Utawala</p>
          
        </div>
      </div>
      <hr />
    </div>
  );
}
