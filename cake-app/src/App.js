import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsAppButton";
import Cart from "./components/Cart";
import Alert from "@mui/material/Alert";
import CakeCategories from "./components/CakeCategories";



function App() {
  const [cart, setCart] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);

  // Retrieve cart from local storage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      // console.log("Retrieved cart from localStorage:", JSON.parse(storedCart));
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to local storage whenever the cart state changes
  useEffect(() => {
    if (cart.length > 0) { // Save only when there are items in the cart
      // console.log("Saving cart to localStorage:", cart);
      localStorage.setItem("cartItems", JSON.stringify(cart));
    }
  }, [cart]);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setAlertVisible(true);

    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  const handleRemoveFromCart = (updatedCart) => {
    setCart(updatedCart);
  };

  return (
    <Router>
      <NavBar cartCount={cart.length} />
      {alertVisible && (
        <Alert
          severity="success"
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2000,
            justifyContent: "center",
            width: "fit-content",
            backgroundColor: "#f5f5f5",
          }}
        >
          Item added to the cart
        </Alert>
      )}
      <Routes>
        
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />} />
        <Route
          path="/category/:categoryName"
          element={<CakeCategories onAddToCart={handleAddToCart} />}
        />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
