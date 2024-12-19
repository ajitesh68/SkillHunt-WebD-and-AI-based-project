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

    {/* Carousel Section */}
<div id="eventCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
  <div className="carousel-inner" style={{ height: '300px' }}>
    <div
      className="carousel-item active"
      style={{ cursor: 'pointer' }}
      onClick={() => window.open('https://www.sih.gov.in/', '_blank')}
    >
      <img
        src="events1.jpeg"
        className="d-block w-100"
        alt="Event 1"
        style={{ objectFit: 'cover', height: '100%' }}
      />
    </div>
    <div
      className="carousel-item"
      style={{ cursor: 'pointer' }}
      onClick={() => window.open('https://www.hackerearth.com/challenges/', '_blank')}
    >
      <img
        src="events2.jpeg"
        className="d-block w-100"
        alt="Event 2"
        style={{ objectFit: 'cover', height: '100%' }}
      />
    </div>
    <div
      className="carousel-item"
      style={{ cursor: 'pointer' }}
      onClick={() => window.open('https://machinehack.com/hackathons/', '_blank')}
    >
      <img
        src="events3.webp"
        className="d-block w-100"
        alt="Event 3"
        style={{ objectFit: 'cover', height: '100%' }}
      />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#eventCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#eventCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


      {/* Filters Section */}
      <div className="d-flex justify-content-around align-items-center flex-wrap mb-4" style={{ gap: '15px' }}>
        <div>
          <label style={{ fontWeight: 'bold', color: '#fff' }}>Month: </label>
          <select
            className="form-select"
            onChange={handleMonthChange}
            value={selectedMonth}
            style={{
              width: '120px',
              backgroundColor: '#6a0dad',
              color: '#000',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
            }}
          >
            <option value="0">Jan</option>
            <option value="1">Feb</option>
            <option value="2">Mar</option>
            <option value="3">Apr</option>
            <option value="4">May</option>
            <option value="5">Jun</option>
            <option value="6">Jul</option>
            <option value="7">Aug</option>
            <option value="8">Sep</option>
            <option value="9">Oct</option>
            <option value="10">Nov</option>
            <option value="11">Dec</option>
          </select>
        </div>
        <div>
          <label style={{ fontWeight: 'bold', color: '#fff' }}>Year: </label>
          <select
            className="form-select"
            onChange={handleYearChange}
            value={selectedYear}
            style={{
              width: '120px',
              backgroundColor: '#6a0dad',
              color: '#000',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
            }}
          >
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>
        <div>
          <label style={{ fontWeight: 'bold', color: '#fff' }}>Event Type: </label>
          <select
            className="form-select"
            onChange={(e) => setEventTypeFilter(e.target.value)}
            value={eventTypeFilter}
            style={{
              width: '150px',
              backgroundColor: '#6a0dad',
              color: '#000',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
            }}
          >
            <option value="All">All</option>
            <option value="Hackathon">Hackathon</option>
            <option value="Coding Challenge">Coding</option>
            <option value="Workshop">Workshop</option>
          </select>
        </div>
        <div>
          <label style={{ fontWeight: 'bold', color: '#fff' }}>Skill Level: </label>
          <select
            className="form-select"
            onChange={(e) => setSkillLevelFilter(e.target.value)}
            value={skillLevelFilter}
            style={{
              width: '150px',
              backgroundColor: '#6a0dad',
              color: '#000',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
            }}
          >
            <option value="All">All</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Event Cards */}
      <div className="row">
        {filteredEvents.map((event) => (
          <div key={event.id} className="col-md-4 mb-4">
            <div className="card bg-dark text-white">
              <img src={`https://via.placeholder.com/400x200?text=${event.title}`} className="card-img" alt={event.title} />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="card-title" style={{ color: '#fff' }}>{event.title}</h5>
                <p className="card-text" style={{ color: '#e94560' }}>
                  <FaRegCalendarAlt /> {new Date(event.date).toLocaleDateString()}
                </p>
                <button
                  className={`btn ${event.isRegistered ? 'btn-danger' : 'btn-success'}`}
                  onClick={() => event.isRegistered ? handleEventDeregistration(event.id) : handleEventRegistration(event.id)}
                >
                  {event.isRegistered ? 'Unregister' : 'Register'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
