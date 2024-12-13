import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const fakeEvents = [
  {
    id: 1,
    title: 'Hackathon 2024',
    date: '2024-12-20T10:00:00',
    description: 'A 48-hour coding marathon with great prizes!',
    location: 'Online',
    organizer: 'TechHub',
    rules: 'No plagiarism, follow event schedule.',
    isRegistered: false,
    type: 'Hackathon',
  },
  {
    id: 2,
    title: 'Frontend WebDev Challenge',
    date: '2024-12-25T08:00:00',
    description: 'Build a responsive web application with React.',
    location: 'Online',
    organizer: 'DevCommunity',
    rules: 'Use React and follow UI guidelines.',
    isRegistered: false,
    type: 'Coding Challenge',
  },
  {
    id: 3,
    title: 'AI and Machine Learning Workshop',
    date: '2024-12-22T14:00:00',
    description: 'A workshop focusing on the fundamentals of AI and ML.',
    location: 'Offline',
    organizer: 'AI Innovators',
    rules: 'Bring your laptop and basic knowledge of Python.',
    isRegistered: true,
    type: 'Workshop',
  },
];

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [eventTypeFilter, setEventTypeFilter] = useState('All');
  const [skillLevelFilter, setSkillLevelFilter] = useState('All');

  useEffect(() => {
    // Replace this with an API call to fetch events
    setEvents(fakeEvents);
  }, []);

  const handleEventRegistration = (eventId) => {
    setEvents(events.map(event =>
      event.id === eventId ? { ...event, isRegistered: true } : event
    ));
    alert('You have successfully registered for the event!');
  };

  const handleEventDeregistration = (eventId) => {
    setEvents(events.map(event =>
      event.id === eventId ? { ...event, isRegistered: false } : event
    ));
    alert('You have unregistered from the event.');
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEventDetails(true);
  };

  const handleCloseDetails = () => {
    setShowEventDetails(false);
    setSelectedEvent(null);
  };

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date).toLocaleDateString();
    const selectedDateString = selectedDate.toLocaleDateString();
    const matchesDate = eventDate === selectedDateString;
    const matchesType = eventTypeFilter === 'All' || event.type === eventTypeFilter;
    const matchesSkillLevel = skillLevelFilter === 'All' || event.skillRequired === skillLevelFilter;
    return matchesDate && matchesType && matchesSkillLevel;
  });

  return (
    <div style={{ padding: '20px' }}>
      {/* Navigation Bar */}
      <nav style={{ backgroundColor: '#333', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: '#fff' }}>SkillHunt</h2>
        <div>
          <Link to="/profile" style={{ color: '#fff', padding: '10px', textDecoration: 'none' }}>Profile</Link>
          <Link to="/events" style={{ color: '#fff', padding: '10px', textDecoration: 'none' }}>Events</Link>
          <Link to="/teams" style={{ color: '#fff', padding: '10px', textDecoration: 'none' }}>Teams</Link>
        </div>
      </nav>

      <h1>Upcoming Events</h1>

      {/* Event Filters */}
      <div style={{ marginBottom: '20px' }}>
        <label>Event Type: </label>
        <select onChange={(e) => setEventTypeFilter(e.target.value)} value={eventTypeFilter}>
          <option value="All">All</option>
          <option value="Hackathon">Hackathon</option>
          <option value="Coding Challenge">Coding Challenge</option>
          <option value="Workshop">Workshop</option>
        </select>
        
        <label> Skill Level: </label>
        <select onChange={(e) => setSkillLevelFilter(e.target.value)} value={skillLevelFilter}>
          <option value="All">All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* Event Calendar */}
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <Calendar onChange={handleSelectDate} value={selectedDate} />
      </div>

      {/* List of Events for the selected date and filtered by type */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredEvents.length === 0 && <p>No events for the selected date and filters.</p>}
        {filteredEvents.map(event => (
          <div key={event.id} 
               style={{ 
                 border: '1px solid #ddd', 
                 padding: '10px', 
                 borderRadius: '8px', 
                 cursor: 'pointer', 
                 backgroundColor: '#f9f9f9' }} 
               onClick={() => handleEventClick(event)}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <button 
              style={{
                padding: '8px 16px', 
                backgroundColor: event.isRegistered ? '#8e8e8e' : '#4caf50', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer', 
                marginTop: '10px'
              }}
              disabled={event.isRegistered}
              onClick={(e) => {
                e.stopPropagation();
                handleEventRegistration(event.id);
              }}
            >
              {event.isRegistered ? 'Registered' : 'Register'}
            </button>
            {event.isRegistered && (
              <button 
                style={{
                  padding: '8px 16px', 
                  backgroundColor: '#f44336', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '5px', 
                  cursor: 'pointer', 
                  marginTop: '10px'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleEventDeregistration(event.id);
                }}
              >
                Unregister
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Event Details Modal */}
      {showEventDetails && selectedEvent && (
        <div style={{
          position: 'fixed',
          top: '0', left: '0', right: '0', bottom: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{
            background: 'white', 
            padding: '20px', 
            borderRadius: '8px', 
            maxWidth: '600px', 
            width: '100%'
          }}>
            <h2>{selectedEvent.title}</h2>
            <p><strong>Organizer:</strong> {selectedEvent.organizer}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p><strong>Date:</strong> {new Date(selectedEvent.date).toLocaleString()}</p>
            <p><strong>Description:</strong> {selectedEvent.description}</p>
            <p><strong>Rules:</strong> {selectedEvent.rules}</p>
            <div style={{ marginTop: '20px' }}>
              <h3>Event Discussions</h3>
              <div style={{ marginBottom: '10px' }}>
                <input 
                  type="text" 
                  placeholder="Join the discussion..." 
                  style={{
                    width: '100%', 
                    padding: '10px', 
                    border: '1px solid #ddd', 
                    borderRadius: '5px'
                  }}
                />
                <button style={{
                  padding: '8px 16px', 
                  backgroundColor: '#4caf50', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '5px', 
                  marginTop: '10px'
                }}>Post</button>
              </div>
            </div>
            <button 
              onClick={handleCloseDetails} 
              style={{
                backgroundColor: '#f44336', 
                color: 'white', 
                padding: '10px 20px', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
