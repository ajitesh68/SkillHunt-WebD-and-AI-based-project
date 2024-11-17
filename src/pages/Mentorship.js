import React, { useState, useEffect } from 'react';
import './Mentorship.css'; // Optional custom styles

const Mentorship = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div>Loading mentors...</div>;

  return (
    <div className="mentorship-container">
      <h1>Mentorship Program</h1>
      <p>Connect with experienced mentors to enhance your skills and projects.</p>
      <ul className="mentors-list">
        {mentors.map((mentor) => (
          <li key={mentor.id}>
            <h3>{mentor.name}</h3>
            <p>Skills: {mentor.skills.join(', ')}</p>
            <p>Availability: {mentor.availability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mentorship;
