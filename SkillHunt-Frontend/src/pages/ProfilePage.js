import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  
  console.log(user);
  console.log(user.email);

  return (
    <div
      className="vh-100 d-flex flex-column"
      style={{
        background: "linear-gradient(to bottom, #2c003e, #020d40)",
        color: "#ffffff",
        margin: "0",
        padding: "0",
        overflow: "hidden",
      }}
    >
      {/* Main Content */}
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="container-fluid px-0">
          <div className="row g-4 mx-0">
            {/* Profile Sidebar */}
            <div className="col-lg-4 col-md-5 px-0">
              <div
                className="card shadow-lg h-100"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "#ffffff",
                  borderRadius: "15px",
                }}
              >
                <div className="card-body text-center">
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
                  <h4 className="fw-bold">{user.name}</h4>
                  <p className="text-muted">{user.email}</p>
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
                  </div>

                  {/* Badges Section */}
                  <div className="mt-4">
                    <h6>Badges</h6>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      <span className="badge bg-warning text-dark">LeetCode</span>
                      <span className="badge bg-primary">HackerRank</span>
                      <span className="badge bg-success">GitHub Contributor</span>
                    </div>
                  </div>

                  {/* Settings */}
                  <div className="mt-4">
                    <button className="btn btn-outline-light btn-sm me-2">Edit Profile</button>
                    <button className="btn btn-outline-light btn-sm">Log Out</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Profile Content */}
            <div className="col-lg-8 col-md-7 px-0">
              <div className="row g-4 mx-0">
                {/* Bio Section */}
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
                      <h5 className="card-title fw-bold">Bio</h5>
                      <p>
                        Hi! I am John Doe, a passionate web developer specializing in
                        React and Node.js. I enjoy solving complex problems and
                        collaborating with teams to build impactful projects.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
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
                      <h5 className="card-title fw-bold">Skills</h5>
                      <p>React, Node.js, MongoDB, Express.js, Python, C++</p>
                    </div>
                  </div>
                </div>

                {/* Achievements Section */}
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
                      <h5 className="card-title fw-bold">Achievements</h5>
                      <ul>
                        <li>1st place in Hackathon XYZ 2023</li>
                        <li>Built an AI-based task tracker used by 500+ users</li>
                        <li>Contributed to 10+ open-source projects</li>
                      </ul>
                    </div>
                  </div>
                </div>

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
                    </div>
                  </div>
                </div>

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

export default ProfilePage;
