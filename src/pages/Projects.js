import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="container py-5">
      <h1>Project Showcase</h1>
      <ul className="list-group">
        {projects.map((project) => (
          <li key={project.id} className="list-group-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
