import React from "react";
import Products from "./Products";
import Footer from "./Footer";

export default function Categories() {
  return (
    <div className="main-container">
        {/* <div className="categories-background">
        <h1>Categories</h1>
      </div> */}
      <h1>categories</h1>
      <Products/>
      <Footer/>
    </div>

  );
}
