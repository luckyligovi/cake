import React from "react";
import cupCake from "../image/black-forest-cuo-cake.jpg";
import blackForest from "../image/black-forest.jpeg";
import weddingCake from "../image/wedding-cake.jpeg";
import graduationCake from "../image/graduation.jpeg";
import Footer from "./Footer";
import Products from "./Products";
import Categories from "./Categories";

export default function Home({ onAddToCart }) {  // Added destructuring for onAddToCart here
  const categoriesData = [
    { image: blackForest, alt: "Black Forest Cake", title: "Classic Cakes" },
    { image: graduationCake, alt: "Graduation Cake", title: "Cheesecakes" },
    { image: cupCake, alt: "Cup Cake", title: "Specialty Cakes" },
    { image: weddingCake, alt: "Wedding Cake", title: "Mini & Individual Cakes" },
  ];

  return (
    <div>
      <div className="main-container">
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
          <h1 style={{ marginBottom: "50px" }}>POPULAR CATEGORIES</h1>
          <div className="categories">
            {categoriesData.map((category, index) => (
              <Categories
                key={index}  // Added a unique key here
                image={category.image}
                alt={category.alt}
                title={category.title}
              />
            ))}
          </div>
          <h2>Some of our products</h2>
          <Products onAddToCart={onAddToCart}  showFooter={false}  />  {/* Uncommented this line */}
        </div>
        <h2>New arrivals</h2>
        <Products onAddToCart={onAddToCart}  showFooter={false} />
      </div>
      <Footer />
    </div>
  );
}
