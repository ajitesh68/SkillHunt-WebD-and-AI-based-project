import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#007bff',
    textDecoration: 'none',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 15px',
    fontSize: '14px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  const sectionStyleBase = {
    padding: '50px 20px',
    margin: '20px 0',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    color: '#fff',
  };

  const purpleToBlueStyle = {
    ...sectionStyleBase,
    background: 'linear-gradient(135deg, #6f42c1, #003366)',
  };

  const featureStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

  const imageStyle = {
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '30%',
    height: '30%',
    flex: '1',
    margin: '10px',
  };

  const textStyle = {
    flex: '1',
    margin: '10px',
    fontSize: '2rem',
  };

  const headingStyle = {
    fontWeight: '900', // Boldest font weight
    color: '#000',     // Dark color
    marginBottom: '30px',
    textAlign: 'center',
    fontSize: '2.5rem',
  };

  const faqStyle = {
    backgroundColor: '#6f42c1',
    color: '#fff',
    padding: '40px 20px',
  };

  const faqTitleStyle = {
    fontWeight: '900',
    textAlign: 'center',
    fontSize: '2rem',
    color: '#000', // Darkened color for better visibility
    marginBottom: '20px',
  };

  return (
    <div>
      {/* Header */}
      <header style={headerStyle}>
        <a href="/" style={logoStyle}>
          SkillHunt
        </a>
        <button style={buttonStyle} onClick={() => navigate('/login')}>Login / Sign Up</button>
      </header>

      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(45deg, #6f42c1, #003366)',
          color: '#fff',
          padding: '80px 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ ...headingStyle, fontSize: '3rem' }}>Welcome to SkillHunt</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto' }}>
          Discover hackathons, form teams, and create groundbreaking projects with like-minded individuals.
        </p>
        <button style={buttonStyle}>Get Started</button>
      </div>

      {/* Section 1: Explore Hackathons */}
      <div style={purpleToBlueStyle}>
        <h2 style={headingStyle}>Explore Hackathons</h2>
        <div style={featureStyle}>
          <img src="/image-1.png" alt="Explore Hackathons" style={imageStyle} />
          <div style={textStyle}>
            <p>Find and participate in exciting hackathons happening worldwide.</p>
          </div>
        </div>
      </div>

      {/* Section 2: Team Up */}
      <div style={purpleToBlueStyle}>
        <h2 style={headingStyle}>Team Up</h2>
        <div style={featureStyle}>
          <div style={textStyle}>
            <p>Connect with talented individuals to form your dream team.</p>
          </div>
          <img src="/image-2.png" alt="Team Up" style={imageStyle} />
        </div>
      </div>

      {/* Section 3: Showcase Projects */}
      <div style={purpleToBlueStyle}>
        <h2 style={headingStyle}>Showcase Projects</h2>
        <div style={featureStyle}>
          <img src="/image-3.png" alt="Showcase Projects" style={imageStyle} />
          <div style={textStyle}>
            <p>Display your projects to attract collaborators and gain recognition.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={faqStyle}>
        <h2 style={faqTitleStyle}>Frequently Asked Questions</h2>
        <div style={{ marginBottom: '20px' }}>
          <strong>Can I use SkillHunt to find teammates for specific Hackathons or project domains?</strong>
          <p>
            Absolutely! SkillHunt's Team Up and Explore Hackathons pages allow you to filter and search based on specific criteria such as project domain, required skills, and technologies involved. This makes it easier for you to find teammates who align with your project requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
