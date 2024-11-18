import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the uploaded images
import HackathonBanner from './assets/hackathon-banner.png'; // Replace with the correct path to your first image
import HackathonIcons from './assets/hackathon-icons.png'; // Replace with the correct path to your second image

const HomePage = () => {
  return (
    <div
      style={{
        backgroundColor: '#cce7ff', // Light Blue Background
        position: 'relative',
        minHeight: '100vh',
        paddingBottom: '3rem',
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Overlay for better text contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light white overlay for contrast
          zIndex: -1,
        }}
      ></div>

      {/* Header Section */}
      <header
        className="header text-center py-5"
        style={{
          backgroundImage: `url(${HackathonBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
          paddingTop: '5rem',
        }}
      >
        <h1 className="display-4" style={{ fontWeight: 'bold' }}>
          SkillHunt
        </h1>
        <p className="lead" style={{ fontSize: '1.2rem' }}>
          Find the best hackathons, teams, and events.
        </p>
        <button
          className="cta-button btn btn-light btn-lg shadow"
          style={{
            fontWeight: 'bold',
            padding: '0.75rem 2rem',
            borderRadius: '30px',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Join Now
        </button>
      </header>

      {/* Features Section */}
      <section className="features py-5">
        <div className="container">
          <h2 className="text-center section-title mb-5" style={{ color: '#0072ff' }}>
            What We Offer
          </h2>
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="feature shadow-sm rounded p-4" style={{ backgroundColor: '#fff' }}>
                <img
                  src={HackathonIcons}
                  alt="Hackathons Icon"
                  className="img-fluid mb-3"
                  style={{ height: '60px' }}
                />
                <h3 className="feature-title" style={{ color: '#0072ff', fontWeight: 'bold' }}>
                  Hackathons
                </h3>
                <p>Join exciting hackathons and showcase your skills.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature shadow-sm rounded p-4" style={{ backgroundColor: '#fff' }}>
                <img
                  src={HackathonIcons}
                  alt="Teams Icon"
                  className="img-fluid mb-3"
                  style={{ height: '60px' }}
                />
                <h3 className="feature-title" style={{ color: '#0072ff', fontWeight: 'bold' }}>
                  Teams
                </h3>
                <p>Find teams for your next big project or event.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature shadow-sm rounded p-4" style={{ backgroundColor: '#fff' }}>
                <img
                  src={HackathonIcons}
                  alt="Events Icon"
                  className="img-fluid mb-3"
                  style={{ height: '60px' }}
                />
                <h3 className="feature-title" style={{ color: '#0072ff', fontWeight: 'bold' }}>
                  Events
                </h3>
                <p>Stay updated with the latest tech events happening around you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events py-5 bg-light">
        <div className="container">
          <h2 className="text-center section-title mb-5" style={{ color: '#0072ff' }}>
            Upcoming Events
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="event-card shadow-sm rounded p-4" style={{ backgroundColor: '#fff' }}>
                <h3 className="event-title" style={{ color: '#0072ff' }}>Hackathon 2024</h3>
                <p>Join the biggest coding event of the year!</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="event-card shadow-sm rounded p-4" style={{ backgroundColor: '#fff' }}>
                <h3 className="event-title" style={{ color: '#0072ff' }}>Tech Meetup</h3>
                <p>Network with industry professionals at this exciting meetup.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="event-card shadow-sm rounded p-4" style={{ backgroundColor: '#fff' }}>
                <h3 className="event-title" style={{ color: '#0072ff' }}>Startup Pitch Night</h3>
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
