import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Teams from './pages/Teams';
import Mentorship from './pages/Mentorship';
import Notifications from './pages/Notifications';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/notifications" element={<Notifications />} />
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
