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

  const boxStyle = {
    backgroundColor: '#f5faff', // Light blue
    border: '2px solid #007bff', // Blue border
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
  };

  const titleStyle = {
    color: '#007bff', // Blue color for text
    fontWeight: 'bold',
  };

  const cardStyle = {
    backgroundColor: '#ffffff', // White background
    border: '1px solid #007bff', // Blue border
    borderRadius: '10px',
    marginBottom: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    border: 'none',
    color: '#ffffff',
    transition: 'all 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
    transform: 'translateY(-3px)',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div className="container py-5">
      <div style={boxStyle}>
        <h1 style={titleStyle} className="text-center mb-4">Upcoming Events</h1>
        <div className="row g-4">
          {events.map((event) => (
            <div key={event.id} className="col-md-6 col-lg-4">
              <div
                className="card"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = cardHoverStyle.transform;
                  e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.name}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
                  />
                )}
                <div className="card-body">
                  <h3 className="card-title" style={titleStyle}>{event.name}</h3>
                  <p className="card-text">{event.description}</p>
                  <p className="card-text">
                    <strong>Date:</strong> {event.date} <br />
                    <strong>Time:</strong> {event.time}
                  </p>
                  <p className="card-text">
                    <strong>Location:</strong> {event.location || 'Online'}
                  </p>
                  <button
                    className="btn"
                    style={buttonStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
                      e.currentTarget.style.transform = buttonHoverStyle.transform;
                      e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
