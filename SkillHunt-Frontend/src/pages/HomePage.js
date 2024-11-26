import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const pageStyle = {
    backgroundColor: '#1a1a2e', // Solid background color
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  };

  const wrapperStyle = {
    backgroundColor: '#1a1a2e',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    overflowX: 'hidden', // Prevent horizontal scroll
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: '#16213e',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#e94560',
    textDecoration: 'none',
  };

  const buttonStyle = {
    backgroundColor: '#e94560',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '14px',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const sectionStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '1200px',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#fff',
  };

  const textStyle = {
    fontSize: '1.2rem',
    lineHeight: '2rem',
    textAlign: 'left',
    color: '#ddd',
    marginTop: '20px',
  };

  const featureStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '30px',
  };

  const faqStyle = {
    marginTop: '50px',
    padding: '40px 20px',
    textAlign: 'center',
    color: '#fff',
    borderTop: '2px solid #e94560',
  };

  const faqTitleStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#e94560',
  };

  return (
    <div style={wrapperStyle}>
      <div style={pageStyle}>
        {/* Navigation Bar */}
        <header style={navbarStyle}>
          <a href="/" style={logoStyle}>
            SkillHunt
          </a>
          <button style={buttonStyle} onClick={() => navigate('/login')}>
            Login / Sign Up
          </button>
        </header>

        {/* Hero Section */}
        <div style={sectionStyle}>
          <h1 style={headingStyle}>Welcome to SkillHunt</h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            Discover hackathons, form teams, and create groundbreaking projects with like-minded individuals.
          </p>
          <button
            style={{ ...buttonStyle, marginTop: '20px' }}
            onClick={() => navigate('/profile')}
          >
            Get Started
          </button>
        </div>

        {/* Section 1: Explore Hackathons */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Explore Hackathons</h2>
          <div style={featureStyle}>
            <img src="/image-1.png" alt="Explore Hackathons" style={{ maxWidth: '30%', display: 'block' }} />
            <p style={textStyle}>
              Find and participate in exciting hackathons happening worldwide. With SkillHunt, you can explore a range of hackathons tailored to your interests and skill set.
            </p>
          </div>
        </div>

        {/* Section 2: Team Up */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Team Up</h2>
          <div style={featureStyle}>
            <p style={textStyle}>
              Connect with talented individuals to form your dream team. SkillHunt's unique platform helps you find the perfect teammates for your next big project.
            </p>
            <img src="/image-2.png" alt="Team Up" style={{ maxWidth: '30%', display: 'block' }} />
          </div>
        </div>

        {/* Section 3: Showcase Projects */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Showcase Projects</h2>
          <div style={featureStyle}>
            <img src="/image-3.png" alt="Showcase Projects" style={{ maxWidth: '30%', display: 'block' }} />
            <p style={textStyle}>
              Display your projects to attract collaborators and gain recognition. Build a portfolio that stands out in the competitive world of technology and innovation.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={faqStyle}>
          <h2 style={faqTitleStyle}>Frequently Asked Questions</h2>
          <div>
            <strong>Can I use SkillHunt to find teammates for specific Hackathons or project domains?</strong>
            <p>
              Absolutely! SkillHunt's Team Up and Explore Hackathons pages allow you to filter and search based on specific criteria such as project domain, required skills, and technologies involved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
