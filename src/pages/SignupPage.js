import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is loaded

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password,
      });
      alert(response.data.message);
      navigate('/login'); // Redirect to login page after signup
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: 'linear-gradient(to right, #00c6ff, #0072ff)', // Gradient background
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: '350px',
          borderRadius: '10px',
          boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3 className="text-center mb-4" style={{ color: '#0072ff' }}>
          SkillHunt Sign Up
        </h3>

        {/* Error message display */}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              borderRadius: '30px',
              transition: 'transform 0.2s ease, background-color 0.3s',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-3">
          <span>Already have an account? </span>
          <a href="/login" className="text-decoration-none" style={{ color: '#0072ff' }}>
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
