// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import the HomePage component
import LoginPage from './pages/LoginPage'; // Import the LoginPage component
import SignupPage from './pages/SignupPage'; // Import the SignupPage component
import './App.css'; // Optional: Import any global styles

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* Login Page Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Signup Page Route */}
        <Route path="/signup" element={<SignupPage />} />

        {/* You can add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;



