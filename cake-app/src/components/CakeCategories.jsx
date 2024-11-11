import React from "react";
import Products from "./Products";
import Footer from "./Footer";

export default function CakeCategories({onAddToCart={onAddToCart} }) {
  return (
    <div>
      <div className="main-container">
        <h1>categories</h1>
        <Products onAddToCart={onAddToCart} />
        <Footer/>
      </div>
    </div>
  );
}
