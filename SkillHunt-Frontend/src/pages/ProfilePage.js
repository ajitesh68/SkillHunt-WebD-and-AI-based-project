import React from "react";

const ProfilePage = () => {
  return (
    <div
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
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="d-flex flex-grow-1 justify-content-between p-4">
        <div className="container-fluid">
          <div className="row mx-0">
            {/* Profile Sidebar (Left) */}
            <div className="col-lg-4 col-md-5 d-flex justify-content-center align-items-start mb-4">
              <div
                className="card shadow-lg w-100"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "#ffffff",
                  borderRadius: "15px",
                }}
              >
                <div className="card-body text-center">
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
                  </div>
                </div>
              </div>
            </div>

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
                    </div>
                  </div>
                </div>

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

// Common card styles for consistency
const cardStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "#ffffff",
  borderRadius: "15px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
};

export default ProfilePage;
