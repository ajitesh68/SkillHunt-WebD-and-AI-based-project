import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Example static data (replace with actual backend data)
const teamsData = [
  { name: "Team Alpha", description: "A team of experienced developers." },
  { name: "Team Beta", description: "A team of creative designers and developers." },
  { name: "Team Gamma", description: "A team working on AI-based projects." },
];

const membersData = [
  { name: "John Doe", skills: "JavaScript, React, Node.js" },
  { name: "Jane Smith", skills: "Python, AI, Machine Learning" },
  { name: "Sam Wilson", skills: "UI/UX Design, HTML, CSS" },
];

const hackathonsData = [
  { name: "Hackathon 2024", status: "Participating", time: "March 2024" },
  { name: "AI Challenge", status: "Participated", time: "June 2023" },
];

const achievementsData = [
  { title: "Winner of Codefest 2023", date: "January 2023" },
  { title: "Top 10 in Hackathon XYZ", date: "April 2022" },
];

const ProfilePage = () => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState(teamsData);
  const [members, setMembers] = useState(membersData);
  const [hackathons, setHackathons] = useState(hackathonsData);
  const [achievements, setAchievements] = useState(achievementsData);
  const [activeSection, setActiveSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering teams and members

  useEffect(() => {
    // Fetch data from the backend if needed
  }, []);

  const handleExploreTeams = () => {
    setActiveSection('teams');
  };

  const handleExploreMembers = () => {
    setActiveSection('members');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTeams = teams.filter(team => team.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredMembers = members.filter(member => member.name.toLowerCase().includes(searchTerm.toLowerCase()));

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

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 15px',
    fontSize: '14px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  const sectionStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '1200px',
  };

  const exploreButtonStyle = {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const exploreSectionStyle = {
    marginTop: '40px',
    padding: '30px 20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const listStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    textAlign: 'left',
  };

  const itemStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
  };

  const scrollableBoxStyle = {
    maxHeight: '300px',
    overflowY: 'auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    marginTop: '10px',
  };

  return (
    <div>
      {/* Header */}
      <header style={headerStyle}>
        <a href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff', textDecoration: 'none' }}>
          SkillHunt
        </a>
        <button style={buttonStyle} onClick={() => navigate('/login')}>
          Login / Sign Up
        </button>
      </header>

      {/* Profile Section */}
      <div style={sectionStyle}>
        <h1>Welcome to Your Profile</h1>
        <p style={{ fontSize: '1.5rem' }}>
          Manage your profile, explore teams, and connect with talented individuals.
        </p>
      </div>

      {/* Achievements Section */}
      <div style={sectionStyle}>
        <h2>Achievements</h2>
        <div style={scrollableBoxStyle}>
          {achievements.map((achievement, index) => (
            <div style={itemStyle} key={index}>
              <h4>{achievement.title}</h4>
              <p>{achievement.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hackathons Section */}
      <div style={sectionStyle}>
        <h2>Hackathons Participating / Participated</h2>
        <div style={scrollableBoxStyle}>
          {hackathons.map((hackathon, index) => (
            <div style={itemStyle} key={index}>
              <h4>{hackathon.name}</h4>
              <p>Status: {hackathon.status}</p>
              <p>Time: {hackathon.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Section */}
      <div style={exploreSectionStyle}>
        <h2>Explore</h2>
        <div>
          <button
            style={exploreButtonStyle}
            onClick={handleExploreTeams}
          >
            Explore Teams
          </button>
          <button
            style={exploreButtonStyle}
            onClick={handleExploreMembers}
          >
            Explore Members
          </button>
        </div>

        {/* Search Bar */}
        <div style={{ marginTop: '20px' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            style={{
              padding: '8px',
              fontSize: '14px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              width: '300px',
            }}
          />
        </div>

        {/* Conditional Rendering of Teams or Members */}
        {activeSection === 'teams' && (
          <div style={{ marginTop: '30px' }}>
            <h3>Teams</h3>
            <div style={scrollableBoxStyle}>
              {filteredTeams.map((team, index) => (
                <div style={itemStyle} key={index}>
                  <h4>{team.name}</h4>
                  <p>{team.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'members' && (
          <div style={{ marginTop: '30px' }}>
            <h3>Members</h3>
            <div style={scrollableBoxStyle}>
              {filteredMembers.map((member, index) => (
                <div style={itemStyle} key={index}>
                  <h4>{member.name}</h4>
                  <p>Skills: {member.skills}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
