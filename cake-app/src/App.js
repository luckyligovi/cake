import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
