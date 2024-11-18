import React, { useState, useEffect } from 'react';
import './Mentorship.css';
import MentorshipBanner from './assets/mentoring-banner.png'; // Corrected image path

const Mentorship = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMentor, setNewMentor] = useState({ name: '', skills: '', availability: '' });

  useEffect(() => {
    // Simulate fetching mentors from the backend
    setTimeout(() => {
      setMentors([
        { id: 1, name: 'John Doe', skills: ['React', 'Node.js'], availability: 'Weekends' },
        { id: 2, name: 'Jane Smith', skills: ['Python', 'Data Science'], availability: 'Evenings' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const addMentor = (e) => {
    e.preventDefault();
    if (newMentor.name && newMentor.skills && newMentor.availability) {
      setMentors([
        ...mentors,
        {
          id: mentors.length + 1,
          name: newMentor.name,
          skills: newMentor.skills.split(',').map((skill) => skill.trim()),
          availability: newMentor.availability,
        },
      ]);
      setNewMentor({ name: '', skills: '', availability: '' });
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <p>Loading mentors...</p>
      </div>
    );
  }

  return (
    <div className="mentorship-container">
      {/* Header Section */}
      <div className="mentorship-header" style={{ backgroundImage: `url(${MentorshipBanner})` }}>
        <h1>Mentorship Program</h1>
        <p>Connect with experienced mentors to enhance your skills and projects.</p>
      </div>

      {/* Mentor List Section */}
      <section className="mentors-section">
        <h2>OUR MENTORS</h2>
        <div className="mentors-grid">
          {mentors.map((mentor) => (
            <div className="mentor-card" key={mentor.id}>
              <h3>{mentor.name}</h3>
              <p><strong>Skills:</strong> {mentor.skills.join(', ')}</p>
              <p><strong>Availability:</strong> {mentor.availability}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Add Mentor Section */}
      <section className="add-mentor-section">
        <h2>ADD A MENTOR</h2>
        <form onSubmit={addMentor} className="mentor-form">
          <input
            type="text"
            placeholder="Name"
            value={newMentor.name}
            onChange={(e) => setNewMentor({ ...newMentor, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Skills (comma separated)"
            value={newMentor.skills}
            onChange={(e) => setNewMentor({ ...newMentor, skills: e.target.value })}
          />
          <input
            type="text"
            placeholder="Availability"
            value={newMentor.availability}
            onChange={(e) => setNewMentor({ ...newMentor, availability: e.target.value })}
          />
          <button type="submit">Add Mentor</button>
        </form>
      </section>
    </div>
  );
};

export default Mentorship;
