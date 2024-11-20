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

  const pageStyle = {
    background: 'linear-gradient(135deg, #6f42c1, #003366)',
    minHeight: '100vh',
    padding: '20px',
    color: '#fff',
  };

  const sectionStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '1200px',
  };

  const featureStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '30px',
  };

  const imageStyle = {
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '30%',
  };

  const textStyle = {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    flex: '1',
    textAlign: 'left',
  };

  const headingStyle = {
    fontWeight: '900',
    fontSize: '3rem',
    marginBottom: '20px',
  };

  const faqStyle = {
    marginTop: '50px',
    padding: '40px 20px',
    textAlign: 'center',
    color: '#fff',
  };

  const faqTitleStyle = {
    fontWeight: '900',
    fontSize: '2.5rem',
    marginBottom: '30px',
  };

  return (
    <div style={pageStyle}>
      {/* Header */}
      <header style={headerStyle}>
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
        <button style={{ ...buttonStyle, marginTop: '20px' }}>Get Started</button>
      </div>

      {/* Section 1: Explore Hackathons */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Explore Hackathons</h2>
        <div style={featureStyle}>
          <img src="/image-1.png" alt="Explore Hackathons" style={imageStyle} />
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
          <img src="/image-2.png" alt="Team Up" style={imageStyle} />
        </div>
      </div>

      {/* Section 3: Showcase Projects */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Showcase Projects</h2>
        <div style={featureStyle}>
          <img src="/image-3.png" alt="Showcase Projects" style={imageStyle} />
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
  );
};

export default HomePage;
