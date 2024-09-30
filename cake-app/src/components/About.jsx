import React from "react";
import cakeTypes from "../image/types-of-cake-18-jpg.jpg";

export default function About() {
  return (
    <div>
      <div className="about-background">
        <h1>ABOUT US</h1>
      </div>
      <div className="infor-container">
        <img
          src={cakeTypes}
          alt="cake-types"
          style={{ width: "300px", height: "auto" ,borderRadius:"20px" }}
        />
        <div>
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
            repellendus?
          </p>
        </div>
      </div>
    </div>
  );
}
