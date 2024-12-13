import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is loaded

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (response.data.token) {
        alert(response.data.message);
        localStorage.setItem("token", response.data.token); // Save token to localStorage
        navigate("/profile"); // Redirect to ProfilePage after successful login
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Login failed. Please try again.");
    }
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google OAuth integration
    alert("Continue with Google feature is coming soon!");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)", // Gradient background
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "350px",
          borderRadius: "10px",
          boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
          background: "#fff",
        }}
      >
        <h3 className="text-center mb-4" style={{ color: "#6a11cb" }}>
          SkillHunt Login
        </h3>

        {/* Display error messages */}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleLogin}>
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
              borderRadius: "30px",
              transition: "transform 0.2s ease, background-color 0.3s",
              backgroundColor: "#6a11cb",
              borderColor: "#6a11cb",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Login
          </button>
        </form>

        {/* Google Login Placeholder */}
        <div className="d-flex justify-content-center mt-4">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-light w-100 shadow-sm"
            style={{
              borderRadius: "30px",
              border: "1px solid #ddd",
              backgroundColor: "#fff",
              transition: "transform 0.2s ease, background-color 0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"
              alt="Google Logo"
              style={{ height: "20px", marginRight: "10px" }}
            />
            Continue with Google
          </button>
        </div>

        <div className="text-center mt-3">
          <a href="#" className="text-decoration-none" style={{ color: "#6a11cb" }}>
            Forgot Password?
          </a>
        </div>

        <div className="text-center mt-2">
          <span>Don't have an account? </span>
          <a href="/signup" className="text-decoration-none" style={{ color: "#6a11cb" }}>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
