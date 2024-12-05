import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  return (
    <div
<<<<<<< HEAD
      className="vh-100 d-flex flex-column"
      style={{
        background: "linear-gradient(to bottom, #2c003e, #020d40)", // Dark purple to dark blue gradient
        color: "#ffffff",
        margin: "0", // Remove margins
        padding: "0", // Remove paddings
        overflow: "hidden", // Prevent scrollbars if not necessary
      }}
    >
      {/* Navigation Bar */}
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent navbar
        }}
      >
=======
      className=" d-flex flex-column"
      style={{
        background: "linear-gradient(to bottom, #2c003e, #020d40)",
        color: "#ffffff",
        margin: "0",
        padding: "0",
        overflow: "hidden",
      }}
    >
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
>>>>>>> da82d61430a7e286a1a950fe38c01eea4ea495dc
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-danger" href="/">
            SkillHunt
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
<<<<<<< HEAD
                <a className="nav-link text-white" href="/explore">
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/teams">
                  Teams
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/events">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/notifications">
                  Notifications
                </a>
=======
                <a className="nav-link text-white" href="/explore">Explore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/teams">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/events">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/notifications">Notifications</a>
>>>>>>> da82d61430a7e286a1a950fe38c01eea4ea495dc
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
<<<<<<< HEAD
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="container-fluid px-0">
          <div className="row g-4 mx-0">
            {/* Profile Sidebar */}
            <div className="col-lg-4 col-md-5 px-0">
              <div
                className="card shadow-lg h-100"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent card background
=======
      <div className="d-flex flex-grow-1 justify-content-between p-4">
        <div className="container-fluid">
          <div className="row mx-0">
            {/* Profile Sidebar (Left) */}
            <div className="col-lg-4 col-md-5 d-flex justify-content-center align-items-start mb-4">
              <div
                className="card shadow-lg w-100"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
>>>>>>> da82d61430a7e286a1a950fe38c01eea4ea495dc
                  color: "#ffffff",
                  borderRadius: "15px",
                }}
              >
                <div className="card-body text-center">
<<<<<<< HEAD
                  <img
                    src="https://via.placeholder.com/150"
                    alt="User"
                    className="rounded-circle mb-3"
                    style={{
                      width: "120px",
                      height: "120px",
                      border: "5px solid #e63946",
                    }}
                  />
                  <h4 className="fw-bold">John Doe</h4>
                  <p className="text-muted">@johndoe</p>
                  <p className="small">
                    Passionate developer with a love for web development and
                    team building.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-danger btn-sm"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-danger btn-sm"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-danger btn-sm"
                    >
                      GitHub
                    </a>
=======
                  <div className="bg-gray-200 border-2 border-dashed rounded-circle w-32 h-32 mx-auto mb-3"></div>
                  <h4 className="fw-bold">John Doe</h4>
                  <p className="text-muted">@johndoe</p>
                  <p className="mb-3">
                    Passionate developer with a love for web development and team building.
                  </p>
                  <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-danger btn-sm">Twitter</button>
                    <button className="btn btn-danger btn-sm">LinkedIn</button>
                    <button className="btn btn-danger btn-sm">GitHub</button>
>>>>>>> da82d61430a7e286a1a950fe38c01eea4ea495dc
                  </div>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Main Profile Content */}
            <div className="col-lg-8 col-md-7 px-0">
              <div className="row g-4 mx-0">
                {/* Profile Details */}
                <div className="col-12">
                  <div
                    className="card shadow-lg"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      color: "#ffffff",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Profile Details</h5>
                      <div className="row">
                        <div className="col-sm-6">
                          <p>
                            <strong>Email:</strong> john.doe@gmail.com
                          </p>
                          <p>
                            <strong>Location:</strong> New York, USA
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <p>
                            <strong>Skills:</strong> React, Node.js, MongoDB
                          </p>
                          <p>
                            <strong>Member Since:</strong> Jan 2023
                          </p>
                        </div>
                      </div>
=======
            {/* Profile Details (Right, Shifted to the right corner) */}
            <div className="col-lg-7 col-md-7 offset-lg-1">
              <div className="row">
                {/* Profile Details Card */}
                <div className="col-12 mb-4">
                  <div className="card shadow-lg" style={cardStyle}>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Profile Details</h5>
                      <hr />
                      <p><strong>Full Name:</strong> John Doe</p>
                      <p><strong>Email:</strong> john.doe@gmail.com</p>
                      <p><strong>Skills:</strong> React, Node.js, MongoDB</p>
                      <p><strong>Member Since:</strong> Jan 2023</p>
>>>>>>> da82d61430a7e286a1a950fe38c01eea4ea495dc
                    </div>
                  </div>
                </div>

<<<<<<< HEAD
                {/* Other Content */}
                <div className="col-md-6">
                  <div
                    className="card shadow-lg h-100"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      color: "#ffffff",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Upcoming Events</h5>
                      <p>Hackathon - Dec 2024</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="card shadow-lg h-100"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      color: "#ffffff",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Completed Projects</h5>
                      <p>Project - AI Tracker</p>
=======
                {/* Project Status Card */}
                <div className="col-md-6 mb-4">
                  <div className="card shadow-lg" style={cardStyle}>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Project Status</h5>
                      <hr />
                      <p><strong>Web Design:</strong> In Progress</p>
                      <p><strong>Backend API:</strong> Completed</p>
                    </div>
                  </div>
                </div>

                {/* Another Project Status Card (If needed) */}
                <div className="col-md-6 mb-4">
                  <div className="card shadow-lg" style={cardStyle}>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Additional Projects</h5>
                      <hr />
                      <p><strong>Mobile App:</strong> Pending</p>
                      <p><strong>DevOps Setup:</strong> In Progress</p>
>>>>>>> da82d61430a7e286a1a950fe38c01eea4ea495dc
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
=======
// Common card styles for consistency
const cardStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "#ffffff",
  borderRadius: "15px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
};

>>>>>>> da82d61430a7e286a1a950fe38c01eea4ea495dc
export default ProfilePage;
