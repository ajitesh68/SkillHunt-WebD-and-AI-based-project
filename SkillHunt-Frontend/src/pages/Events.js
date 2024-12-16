import React, { useState, useEffect } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS for carousel functionality

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
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Default to current month
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to current year
  const [eventTypeFilter, setEventTypeFilter] = useState('All');
  const [skillLevelFilter, setSkillLevelFilter] = useState('All');

  useEffect(() => {
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

  const handleMonthChange = (e) => {
    setSelectedMonth(Number(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const matchesMonth = eventDate.getMonth() === selectedMonth;
    const matchesYear = eventDate.getFullYear() === selectedYear;
    const matchesType = eventTypeFilter === 'All' || event.type === eventTypeFilter;
    const matchesSkillLevel = skillLevelFilter === 'All' || event.skillRequired === skillLevelFilter;
    return matchesMonth && matchesYear && matchesType && matchesSkillLevel;
  });

  return (
    <div className="container-fluid" style={{ minHeight: '100vh', padding: 0, backgroundColor: '#1a1a2e', color: '#fff', overflowX: 'hidden' }}>
      <h1 className="text-center mb-4" style={{ color: '#e94560', border: '2px solid #e94560', padding: '10px', fontWeight: 'bold' }}>
        Upcoming Events
      </h1>

      {/* Carousel */}
      <div className="container mt-4">
        <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" style={{ height: '300px' }}>
            <div className="carousel-item active">
              <img 
                src="events1.jpeg" 
                className="d-block w-100" 
                alt="Event 1" 
                style={{ objectFit: 'cover', height: '300px' }} 
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Hackathon 2024</h5>
                <p>A 48-hour coding marathon with great prizes!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img 
                src="events2.jpeg" 
                className="d-block w-100" 
                alt="Event 2" 
                style={{ objectFit: 'cover', height: '300px' }} 
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Frontend WebDev Challenge</h5>
                <p>Build a responsive web application with React.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img 
                src="events3.webp" 
                className="d-block w-100" 
                alt="Event 3" 
                style={{ objectFit: 'cover', height: '300px' }} 
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>AI and Machine Learning Workshop</h5>
                <p>Learn the fundamentals of AI and ML.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Month and Year Selector */}
      <div className="mb-4">
        <div className="row">
          <div className="col-md-6">
            <label>Month: </label>
            <select className="form-select" onChange={handleMonthChange} value={selectedMonth}>
              <option value="0">January</option>
              <option value="1">February</option>
              <option value="2">March</option>
              <option value="3">April</option>
              <option value="4">May</option>
              <option value="5">June</option>
              <option value="6">July</option>
              <option value="7">August</option>
              <option value="8">September</option>
              <option value="9">October</option>
              <option value="10">November</option>
              <option value="11">December</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Year: </label>
            <select className="form-select" onChange={handleYearChange} value={selectedYear}>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>
        </div>
      </div>

      {/* Event Filters */}
      <div className="mb-4">
        <div className="row">
          <div className="col-md-6">
            <label>Event Type: </label>
            <select className="form-select" onChange={(e) => setEventTypeFilter(e.target.value)} value={eventTypeFilter}>
              <option value="All">All</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Coding Challenge">Coding Challenge</option>
              <option value="Workshop">Workshop</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Skill Level: </label>
            <select className="form-select" onChange={(e) => setSkillLevelFilter(e.target.value)} value={skillLevelFilter}>
              <option value="All">All</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card" style={{ backgroundColor: '#23234d' }}>
            <div className="card-body">
              <h4 className="card-title" style={{ color: '#e94560', fontWeight: 'bold' }}>
                Scheduled Events for {new Date(selectedYear, selectedMonth).toLocaleString('default', { month: 'long' })} {selectedYear}
              </h4>
              {filteredEvents.length === 0 ? (
                <p>No events available for the selected filters.</p>
              ) : (
                filteredEvents.map(event => (
                  <div key={event.id} className="card mb-4" style={{ backgroundColor: '#1a1a2e' }}>
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontWeight: 'bold', color: '#fff' }}>{event.title}</h5>
                      <p className="card-text" style={{ color: '#e94560', fontWeight: 'bold' }}>{event.description}</p>
                      <p className="card-text" style={{ color: '#fff' }}>Date: {new Date(event.date).toLocaleString()}</p>
                      <p className="card-text" style={{ color: '#fff' }}>Location: {event.location}</p>
                      <p className="card-text" style={{ color: '#fff' }}>Organizer: {event.organizer}</p>
                      {!event.isRegistered ? (
                        <button
                          className="btn btn-primary"
                          onClick={() => handleEventRegistration(event.id)}
                        >
                          Register
                        </button>
                      ) : (
                        <button
                          className="btn btn-danger"
                          onClick={() => handleEventDeregistration(event.id)}
                        >
                          Unregister
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
