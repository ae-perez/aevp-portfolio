// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import "./App.css"; // Import your CSS file

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} className="page" />
        <Route path="/about" element={<AboutPage />} className="page" />
        <Route path="/contact" element={<ContactPage />} className="page" />

        {/* Add more routes for additional pages */}
      </Routes>
    </Router>
  );
};

export default App;
