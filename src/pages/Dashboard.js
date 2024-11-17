import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      // Redirect to login if no token
      window.location.href = '/login';
    }

    // Fetch user data
    fetch('/api/user', { headers: { Authorization: `Bearer ${authToken}` } })
      .then((res) => res.json())
      .then((data) => setUserData(data));

    // Fetch upcoming events
    fetch('/api/events', { headers: { Authorization: `Bearer ${authToken}` } })
      .then((res) => res.json())
      .then((data) => setUpcomingEvents(data));

    // Fetch user teams
    fetch('/api/teams', { headers: { Authorization: `Bearer ${authToken}` } })
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div className="container py-5">
      <h1>Dashboard</h1>
      {userData && (
        <div className="card mb-4">
          <div className="card-body">
            <h2>Welcome, {userData.name}</h2>
            <p>Email: {userData.email}</p>
            <p>Interests: {userData.interests.join(', ')}</p>
            <p>Skills: {userData.skills.join(', ')}</p>
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      )}
      <h3>Upcoming Events</h3>
      <ul className="list-group mb-4">
        {upcomingEvents.map((event) => (
          <li key={event.id} className="list-group-item">
            {event.name} - {event.date}
          </li>
        ))}
      </ul>
      <h3>Your Teams</h3>
      <ul className="list-group">
        {teams.map((team) => (
          <li key={team.id} className="list-group-item">
            {team.name} - {team.project}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
