// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';  // Import custom CSS file for styling

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <h1>Welcome to SkillHunt</h1>
        <p>Find the best hackathons, teams, and events.</p>
        <button className="cta-button">Join Now</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h2>Hackathons</h2>
          <p>Join exciting hackathons and showcase your skills.</p>
        </div>
        <div className="feature">
          <h2>Teams</h2>
          <p>Find teams for your next big project or event.</p>
        </div>
        <div className="feature">
          <h2>Events</h2>
          <p>Stay updated with the latest tech events happening around you.</p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>
            <h3>Hackathon 2024</h3>
            <p>Join the biggest coding event of the year!</p>
          </li>
          <li>
            <h3>Tech Meetup</h3>
            <p>Network with industry professionals at this exciting meetup.</p>
          </li>
          <li>
            <h3>Startup Pitch Night</h3>
            <p>Pitch your startup idea to investors.</p>
          </li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 SkillHunt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

