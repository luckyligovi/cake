import React from "react";
import cakeTypes from "../image/types-of-cake-18-jpg.jpg";
import Offers from "./Offers";
import Footer from "./Footer";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
export default function Contact() {
  return (
    <div>
      <div className="contact-background">
        <h1>CONTACT US</h1>
      </div>
      <div className="infor-container">
        <img
          src={cakeTypes}
          alt="cake-types"
          style={{ width: "300px", height: "auto", borderRadius: "20px" }}
        />
        <div className="contacts">
          <h1>contact Us</h1>
          <p>
            Get in touch with us for inquiries or business proposals. <br />{" "}
            We'll get back to you!
          </p>
          <h2>Address</h2>
          <p>Star Mall, Nairobi CBD, Kenya.</p>

          {/* <div>
            <h2><LocalPhoneRoundedIcon/>Phone</h2>
            <p> +254 721 475 1 43</p>
          </div> */}

          <h2>Phone</h2>
          <p>+254 721 475 1 43</p>

          <h2>Email</h2>
          <p>info@vapespot.co.ke</p>
        </div>
      </div>
      <Offers />
      <Footer />
    </div>
  );
}
