import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Teams = () => {
  const [users, setUsers] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [hackathons, setHackathons] = useState([]);
  const [selectedHackathon, setSelectedHackathon] = useState('');

  useEffect(() => {
    // Fetch users for matchmaking
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));

    // Fetch hackathon/events data
    fetch('/api/hackathons')
      .then((res) => res.json())
      .then((data) => setHackathons(data));
  }, []);

  const createTeam = () => {
    if (!teamName || !selectedHackathon) {
      alert('Please fill in all required fields.');
      return;
    }

    fetch('/api/teams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: teamName, hackathon: selectedHackathon }),
    }).then(() => {
      alert('Team created!');
      setTeamName('');
      setSelectedHackathon('');
    });
  };

  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#cce7ff', // Light Blue Background
        position: 'relative',
        minHeight: '100vh',
        padding: '2rem',
        color: '#333',
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

      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          color: '#333',
        }}
        className="container py-5"
      >
        <h1 style={{ color: '#0072ff', fontWeight: 'bold', textAlign: 'center' }} className="mb-4">
          Team Formation
        </h1>

        {/* Create Team Section */}
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            marginBottom: '2rem',
          }}
        >
          <h3 style={{ color: '#0072ff', fontWeight: 'bold' }}>Create a Team</h3>
          <div className="form-group mb-3">
            <label htmlFor="teamName" style={{ fontWeight: 'bold', color: '#333' }}>
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              className="form-control"
              placeholder="Enter team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              style={{
                border: '2px solid #0072ff',
                borderRadius: '4px',
                padding: '0.5rem',
              }}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="hackathonSelect" style={{ fontWeight: 'bold', color: '#333' }}>
              Select Hackathon/Event
            </label>
            <select
              id="hackathonSelect"
              className="form-control"
              value={selectedHackathon}
              onChange={(e) => setSelectedHackathon(e.target.value)}
              style={{
                border: '2px solid #0072ff',
                borderRadius: '4px',
                padding: '0.5rem',
              }}
            >
              <option value="">Choose an event...</option>
              {hackathons.map((hackathon) => (
                <option key={hackathon.id} value={hackathon.id}>
                  {hackathon.name} - {hackathon.date} ({hackathon.location})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={createTeam}
            style={{
              backgroundColor: '#0072ff',
              color: '#ffffff',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '4px',
              padding: '0.75rem 1.5rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            className="btn btn-lg"
          >
            Create Team
          </button>
        </div>

        {/* Teammates Section */}
        <div>
          <h3 style={{ color: '#0072ff', fontWeight: 'bold' }} className="mb-4">
            Find Teammates
          </h3>
          <ul className="list-group">
            {users.map((user) => (
              <li
                key={user.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '1rem',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
                className="list-group-item"
              >
                <strong style={{ color: '#0072ff' }}>{user.name}</strong>
                <p style={{ margin: '0.2rem 0', color: '#555' }}>
                  Skills: {user.skills.join(', ')}
                </p>
                <p style={{ margin: '0.2rem 0', color: '#555' }}>
                  Looking for: {user.interests}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Teams;
