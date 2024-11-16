import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SkillHunt</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hackathons">Hackathons</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
