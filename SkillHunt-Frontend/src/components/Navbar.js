import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">SkillHunt</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;