import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";
import logo from "../image/cake_house_logo.png"



export default function Footer() {
  return (
    <div style={{marginTop:"100px"}}>
      <hr style={{maxWidth:"1500px"}} />
      <SocialMediaIcons/>
      <div className="footer">
        <div className="company-info">
          <img src={logo} alt="logo" width={60} />
          <p style={{maxWidth:"500px"}}>
          We aim to delight Nairobi cake lovers with unforgettable experiences. Our brand offers expertly crafted cakes, a variety of indulgent flavors, personalized designs for every occasion, and a customer-focused service approach—all at an affordable price.
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
    </div>
  );
}
