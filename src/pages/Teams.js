import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Teams = () => {
  const [users, setUsers] = useState([]);
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    // Fetch users for matchmaking
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const createTeam = () => {
    // Create team API
    fetch('/api/teams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: teamName }),
    }).then(() => alert('Team created!'));
  };

  return (
    <div className="container py-5">
      <h1>Team Formation</h1>
      <div className="mb-4">
        <h3>Create a Team</h3>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <button className="btn btn-primary" onClick={createTeam}>
          Create Team
        </button>
      </div>
      <h3>Find Teammates</h3>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name} - Skills: {user.skills.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
