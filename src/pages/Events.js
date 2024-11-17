import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="container py-5">
      <h1>Events</h1>
      <ul className="list-group">
        {events.map((event) => (
          <li key={event.id} className="list-group-item">
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>
              Date: {event.date}, Time: {event.time}
            </p>
            <button className="btn btn-success">Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
