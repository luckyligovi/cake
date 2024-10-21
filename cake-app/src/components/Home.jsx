import React from "react";
import cupCake from "../image/black-forest-cuo-cake.jpg";
import blackForest from "../image/black-forest.jpeg";
import weddingCake from "../image/wedding-cake.jpeg";
import graduationCake from "../image/graduation.jpeg";
import Footer from "./Footer";
import Products from "./Products";
import Categories from "./Categories";

export default function Home(props) {
  const categoriesData = [
    { image: blackForest, alt: "Black Forest Cake", title: "Black forest" },
    { image: graduationCake, alt: "Graduation Cake", title: "Graduation Cake" },
    { image: cupCake, alt: "Cup Cake", title: "Cup Cake" },
    { image: weddingCake, alt: "Wedding Cake", title: "Wedding" },
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
                // key={index}
                image={category.image}
                alt={category.alt}
                title={category.title}
              />
            ))}
          </div>
          <Products onAddToCart={props.onAddToCart}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
