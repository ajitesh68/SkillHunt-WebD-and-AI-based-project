import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import Teams from './pages/Teams';
import Mentorship from './pages/Mentorship';
import Notifications from './pages/Notifications';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#007bff', color: 'white' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
        <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
        <li><Link to="/profilepage" style={{ color: 'white' }}>Profile</Link></li>
        <li><Link to="/teams" style={{ color: 'white' }}>Teams</Link></li>
        <li><Link to="/dashboard" style={{ color: 'white' }}>Dashboard</Link></li>
        <li><Link to="/mentorship" style={{ color: 'white' }}>Mentorship</Link></li>
        <li><Link to="/notifications" style={{ color: 'white' }}>Notifications</Link></li>
      </ul>
    </nav>
  );
}

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Simulated auth
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/teams" element={<ProtectedRoute element={<Teams />} />} />
        <Route path="/mentorship" element={<ProtectedRoute element={<Mentorship />} />} />
        <Route path="/notifications" element={<ProtectedRoute element={<Notifications />} />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route
          path="*"
          element={
            <div className="not-found">
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
