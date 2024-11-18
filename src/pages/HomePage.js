import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; // Ensure custom CSS exists for fine-tuning

// Import the uploaded images
import HackathonBanner from './assets/hackathon-banner.png'; // Replace with the correct path to your first image
import HackathonIcons from './assets/hackathon-icons.png'; // Replace with the correct path to your second image

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header
        className="header text-center py-5"
        style={{
          backgroundImage: `url(${HackathonBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
        }}
      >
        <h1 className="display-4">Welcome to SkillHunt</h1>
        <p className="lead">Find the best hackathons, teams, and events.</p>
        <button className="cta-button btn btn-light btn-lg shadow">Join Now</button>
      </header>

      {/* Features Section */}
      <section className="features py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">What We Offer</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="feature bg-white p-4 rounded shadow-sm">
                <img
                  src={HackathonIcons}
                  alt="Hackathons Icon"
                  className="img-fluid mb-3"
                  style={{ height: '80px' }}
                />
                <h3>Hackathons</h3>
                <p>Join exciting hackathons and showcase your skills.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature bg-white p-4 rounded shadow-sm">
                <img
                  src={HackathonIcons}
                  alt="Teams Icon"
                  className="img-fluid mb-3"
                  style={{ height: '80px' }}
                />
                <h3>Teams</h3>
                <p>Find teams for your next big project or event.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature bg-white p-4 rounded shadow-sm">
                <img
                  src={HackathonIcons}
                  alt="Events Icon"
                  className="img-fluid mb-3"
                  style={{ height: '80px' }}
                />
                <h3>Events</h3>
                <p>Stay updated with the latest tech events happening around you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events py-5">
        <div className="container">
          <h2 className="text-center mb-4">Upcoming Events</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="event-card bg-white p-3 rounded shadow-sm">
                <h3>Hackathon 2024</h3>
                <p>Join the biggest coding event of the year!</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="event-card bg-white p-3 rounded shadow-sm">
                <h3>Tech Meetup</h3>
                <p>Network with industry professionals at this exciting meetup.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="event-card bg-white p-3 rounded shadow-sm">
                <h3>Startup Pitch Night</h3>
                <p>Pitch your startup idea to investors.</p>
              </div>
            </div>
          </div>
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
