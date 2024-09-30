import React from "react";
import cupCake from "../image/black-forest-cuo-cake.jpg";
import blackForest from "../image/black-forest.jpeg";
import weddingCake from "../image/wedding-cake.jpeg";
import graduationCake from "../image/graduation.jpeg";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
    <div className="home-ciontainer">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="background-image"
      >
        <div>
          <h2>BLACK FOREST CAKE HOUSE</h2>
          <h1>Baked Today for Today!</h1>
          <h6>
            <i>
              Savor Our Range Of Freshly Baked Cakes <br />
              With A Blend Of Mouth-Watering Flavors
            </i>
          </h6>
        </div>
      </div>
      <div className="category-container">
        <h1 style={{marginBottom:"50px"}} >POPULAR CATEGORIES</h1>
        <div className="categories">
          <div>
            <img
              className="category-images"
              src={blackForest}
              alt="Black Forest Cake"
            />
            <h3>Black forest</h3>
          </div>
          <div>
            <img
              className="category-images"
              src={graduationCake}
              alt="Black Forest Cake"
            />
            <h3>graduation cake</h3>
          </div>
          <div>
            <img className="category-images" src={cupCake} alt="cup-cake" />
            <h3>Cup cake</h3>
          </div>
          <div>
            <img
              className="category-images"
              src={weddingCake}
              alt="Black Forest Cake"
            />
            <h3>weeding</h3>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
