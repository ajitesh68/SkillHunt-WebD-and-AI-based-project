import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Set to true if token exists
  }, []);

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token
    setIsLoggedIn(false);
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">SkillHunt</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hackathons">Hackathons</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/mentorship">Mentorship</Link></li>
        <li>
          {isLoggedIn ? (
            <div className="dropdown">
              <button className="dropbtn">Account</button>
              <div className="dropdown-content">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/notifications">Notifications</Link>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
