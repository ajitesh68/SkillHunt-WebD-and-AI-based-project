import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import './HomePage.css';  // Import custom CSS file for additional styling

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header text-center py-5 bg-primary text-white">
        <h1>Welcome to SkillHunt</h1>
        <p>Find the best hackathons, teams, and events.</p>
        <button className="cta-button btn btn-light btn-lg">Join Now</button>
      </header>

      {/* Features Section */}
      <section className="features py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="feature bg-light p-4 rounded shadow">
                <h2>Hackathons</h2>
                <p>Join exciting hackathons and showcase your skills.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature bg-light p-4 rounded shadow">
                <h2>Teams</h2>
                <p>Find teams for your next big project or event.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature bg-light p-4 rounded shadow">
                <h2>Events</h2>
                <p>Stay updated with the latest tech events happening around you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events py-5 bg-light">
        <div className="container">
          <h2 className="text-center">Upcoming Events</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <h3>Hackathon 2024</h3>
              <p>Join the biggest coding event of the year!</p>
            </li>
            <li className="list-group-item">
              <h3>Tech Meetup</h3>
              <p>Network with industry professionals at this exciting meetup.</p>
            </li>
            <li className="list-group-item">
              <h3>Startup Pitch Night</h3>
              <p>Pitch your startup idea to investors.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer text-center py-4 bg-dark text-white">
        <p>&copy; 2024 SkillHunt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;


