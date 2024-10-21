import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsAppButton";
import Cart from "./components/Cart";
import Alert from "@mui/material/Alert";

function App() {
  const [cart, setCart] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setAlertVisible(true);

    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  return (
    <Router>
      <NavBar />
      {alertVisible && (
        <Alert
        severity="success"
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)", // Centers the alert horizontally
          zIndex: 2000, // Ensures it stays on top
          justifyContent: "center",
          width: "fit-content", 
          backgroundColor:" #f5f5f5"
        }}
        >
          Item added to the cart
        </Alert>
      )}
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
