import React from 'react';

const HomePage = () => {
  const sectionStyle = {
    padding: '50px 20px',
    margin: '20px 0',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
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
    maxWidth: '80%',
    height: 'auto',
    flex: '1',
    margin: '10px',
  };

  const textStyle = {
    flex: '1',
    margin: '10px',
    fontSize: '1.1rem',
  };

  const sectionTitleStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    fontWeight: '700',
    fontSize: '2.5rem',
    color: '#333',
  };

  const buttonStyle = {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '12px 25px',
    fontSize: '18px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const faqStyle = {
    backgroundColor: '#6f42c1',
    color: '#fff',
    padding: '40px 20px',
  };

  const faqTitleStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '20px',
  };

  const faqItemStyle = {
    marginBottom: '20px',
    fontSize: '1.1rem',
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(45deg, #6f42c1, #007bff)',
          color: '#fff',
          padding: '80px 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: '900' }}>Welcome to SkillHunt</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto' }}>
          Discover hackathons, form teams, and create groundbreaking projects with like-minded
          individuals.
        </p>
        <button style={buttonStyle}>Get Started</button>
      </div>

      {/* Section 1: Explore Hackathons */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Explore Hackathons</h2>
        <div style={featureStyle}>
          <img
            src="/image-1.png"
            alt="Explore Hackathons"
            style={imageStyle}
          />
          <div style={textStyle}>
            <p>Find and participate in exciting hackathons happening worldwide.</p>
          </div>
        </div>
      </div>

      {/* Section 2: Team Up */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Team Up</h2>
        <div style={featureStyle}>
          <div style={textStyle}>
            <p>Connect with talented individuals to form your dream team.</p>
          </div>
          <img
            src="/image-2.png"
            alt="Team Up"
            style={imageStyle}
          />
        </div>
      </div>

      {/* Section 3: Showcase Projects */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Showcase Projects</h2>
        <div style={featureStyle}>
          <img
            src="/image-3.png"
            alt="Showcase Projects"
            style={imageStyle}
          />
          <div style={textStyle}>
            <p>Display your projects to attract collaborators and gain recognition.</p>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div style={{ background: 'linear-gradient(45deg, #6f42c1, #007bff)', color: '#fff', padding: '50px 20px' }}>
        <h2 style={{ ...sectionTitleStyle, color: '#fff' }}>Join Us Today</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Don’t miss the opportunity to be part of something amazing. Start your SkillHunt journey
          now.
        </p>
        <div style={{ textAlign: 'center' }}>
          <button style={buttonStyle}>Sign Up</button>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={faqStyle}>
        <h2 style={faqTitleStyle}>Frequently Asked Questions</h2>
        <div style={faqItemStyle}>
          <strong>Q1: How can I join a hackathon?</strong>
          <p>A1: You can explore hackathons in the 'Explore Hackathons' section and register for events that match your interest.</p>
        </div>
        <div style={faqItemStyle}>
          <strong>Q2: How do I form a team?</strong>
          <p>A2: You can connect with like-minded individuals in the 'Team Up' section and invite them to join your project.</p>
        </div>
        <div style={faqItemStyle}>
          <strong>Q3: Can I showcase my past projects?</strong>
          <p>A3: Yes, in the 'Showcase Projects' section, you can display your projects to attract collaborators and potential employers.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
