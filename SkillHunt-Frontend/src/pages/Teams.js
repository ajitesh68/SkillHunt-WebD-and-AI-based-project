import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace with your actual backend URL

const TeamManagement = () => {
  const [activeTab, setActiveTab] = useState("home");

  const [findTeamFormData, setFindTeamFormData] = useState({
    hackathonName: "",
    teamName: "",
    email: "",
  });

  const [createTeamFormData, setCreateTeamFormData] = useState({
    teamName: "",
    players: "",
    hackathon: "",
    project: "",
    captions: "",
    email: "",
  });

  const [findMembersFormData, setFindMembersFormData] = useState({
    username: "",
    hackathon: "",
    skillSet: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFindTeamChange = (e) => {
    const { name, value } = e.target;
    setFindTeamFormData({ ...findTeamFormData, [name]: value });
  };

  const handleCreateTeamChange = (e) => {
    const { name, value } = e.target;
    setCreateTeamFormData({ ...createTeamFormData, [name]: value });
  };

  const handleFindMembersChange = (e) => {
    const { name, value } = e.target;
    setFindMembersFormData({ ...findMembersFormData, [name]: value });
  };

  const handleFindTeamSubmit = async () => {
    const { hackathonName, teamName, email } = findTeamFormData;
    if (!hackathonName || !teamName || !email) {
      alert("Please fill in all required fields for Find a SkillHunt.");
      return;
    }
    try {
      const response = await axios.post(`${API_BASE_URL}/teams/find`, {
        hackathonName,
        teamName,
        email,
      });
      console.log("Find Team Response:", response.data);
      alert("Team search submitted successfully!");
    } catch (error) {
      console.error("Error finding team:", error.response?.data || error.message);
      alert("Failed to find the team. Please try again.");
    }
    setFindTeamFormData({ hackathonName: "", teamName: "", email: "" });
  };

  const handleCreateTeamSubmit = async () => {
    const { teamName, players, hackathon, project, email } = createTeamFormData;
    if (!teamName || !players || !hackathon || !email) {
      alert("Please fill in all required fields for Create a Team.");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/teams/create`, {
        name: teamName,
        description: project,
        leader: email,
        members: [{ user: email, role: "Leader" }], // Add leader role initially
        event_id: hackathon,
      });
      console.log("Team Created:", response.data);
      alert("Team created successfully!");
      setCreateTeamFormData({
        teamName: "",
        players: "",
        hackathon: "",
        project: "",
        captions: "",
        email: "",
      });
    } catch (error) {
      console.error("Error creating team:", error.response?.data || error.message);
      alert("Failed to create the team. Please try again.");
    }
  };

  const fetchTeams = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/teams`);
      console.log("Teams fetched:", response.data);
    } catch (error) {
      console.error("Error fetching teams:", error.response?.data || error.message);
    }
  };

  const handleFindMembersSubmit = async () => {
    const { username, hackathon, skillSet } = findMembersFormData;
    if (!username || !hackathon || !skillSet) {
      alert("Please fill in all required fields for Find Members.");
      return;
    }
    try {
      const response = await axios.post(`${API_BASE_URL}/members/find`, {
        username,
        hackathon,
        skillSet,
      });
      console.log("Find Members Response:", response.data);
      alert("Member search submitted successfully!");
    } catch (error) {
      console.error("Error finding members:", error.response?.data || error.message);
      alert("Failed to find members. Please try again.");
    }
    setFindMembersFormData({ username: "", hackathon: "", skillSet: "" });
  };

  const boxStyle = {
    width: "350px",
    padding: "2rem",
    backgroundColor: "#E6E6FA",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    marginBottom: "2rem",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #E5E5E5",
    borderRadius: "5px",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#007AFF",
    color: "#ffffff",
    fontWeight: "600",
    padding: "0.75rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #6A0DAD, #8A2BE2)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <nav style={{ marginBottom: "2rem" }}>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "2rem",
            fontSize: "1.2rem",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          <li onClick={() => handleTabChange("home")}>Home</li>
          <li onClick={() => handleTabChange("findSkillHunt")}>Find a SkillHunt</li>
          <li onClick={() => handleTabChange("createTeam")}>Create a Team</li>
          <li onClick={() => handleTabChange("findMembers")}>Find Members</li>
        </ul>
      </nav>

      {activeTab === "home" && (
        <div style={{ textAlign: "center", color: "#fff" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "1.5rem" }}>
            Team Building at SkillHunt
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#f0f0f0", marginBottom: "2rem" }}>
            Learn how teamwork makes the dream work! Discover how you can find
            or create the best teams for hackathons, contests, and other exciting
            events.
          </p>
        </div>
      )}

      {activeTab === "createTeam" && (
        <div style={boxStyle}>
          <h2 style={{ textAlign: "center", color: "#6A0DAD", fontWeight: "600", fontSize: "1.5rem", marginBottom: "1.5rem" }}>
            Create a Team
          </h2>
          <form style={formStyle}>
            <input
              type="text"
              name="teamName"
              value={createTeamFormData.teamName}
              onChange={handleCreateTeamChange}
              placeholder="Team Name"
              style={inputStyle}
            />
            <input
              type="number"
              name="players"
              value={createTeamFormData.players}
              onChange={handleCreateTeamChange}
              placeholder="Number of Players"
              style={inputStyle}
            />
            <input
              type="text"
              name="hackathon"
              value={createTeamFormData.hackathon}
              onChange={handleCreateTeamChange}
              placeholder="Hackathon Name"
              style={inputStyle}
            />
            <input
              type="text"
              name="project"
              value={createTeamFormData.project}
              onChange={handleCreateTeamChange}
              placeholder="Project Description"
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              value={createTeamFormData.email}
              onChange={handleCreateTeamChange}
              placeholder="Email"
              style={inputStyle}
            />
            <button type="button" onClick={handleCreateTeamSubmit} style={buttonStyle}>
              Submit
            </button>
          </form>
        </div>
      )}

      {activeTab === "findMembers" && (
        <div style={boxStyle}>
          <h2 style={{ textAlign: "center", color: "#6A0DAD", fontWeight: "600", fontSize: "1.5rem", marginBottom: "1.5rem" }}>
            Find Members
          </h2>
          <form style={formStyle}>
            <input
              type="text"
              name="username"
              value={findMembersFormData.username}
              onChange={handleFindMembersChange}
              placeholder="Your Name"
              style={inputStyle}
            />
            <input
              type="text"
              name="hackathon"
              value={findMembersFormData.hackathon}
              onChange={handleFindMembersChange}
              placeholder="Hackathon Name"
              style={inputStyle}
            />
            <input
              type="text"
              name="skillSet"
              value={findMembersFormData.skillSet}
              onChange={handleFindMembersChange}
              placeholder="Skills Needed"
              style={inputStyle}
            />
            <button type="button" onClick={handleFindMembersSubmit} style={buttonStyle}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TeamManagement;
