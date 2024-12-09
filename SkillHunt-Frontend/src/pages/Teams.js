import React, { useState } from "react";

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

  const handleFindTeamSubmit = () => {
    const { hackathonName, teamName, email } = findTeamFormData;
    if (!hackathonName || !teamName || !email) {
      alert("Please fill in all required fields for Find a SkillHunt.");
      return;
    }
    console.log("Find Team Form Submitted:", findTeamFormData);
    alert("Team search submitted successfully!");
    setFindTeamFormData({ hackathonName: "", teamName: "", email: "" });
  };

  const handleCreateTeamSubmit = () => {
    const { teamName, players, hackathon, email } = createTeamFormData;
    if (!teamName || !players || !hackathon || !email) {
      alert("Please fill in all required fields for Create a Team.");
      return;
    }
    console.log("Create Team Form Submitted:", createTeamFormData);
    alert("Team created successfully!");
    setCreateTeamFormData({
      teamName: "",
      players: "",
      hackathon: "",
      project: "",
      captions: "",
      email: "",
    });
  };

  const handleFindMembersSubmit = () => {
    const { username, hackathon, skillSet } = findMembersFormData;
    if (!username || !hackathon || !skillSet) {
      alert("Please fill in all required fields for Find Members.");
      return;
    }
    console.log("Find Members Form Submitted:", findMembersFormData);
    alert("Member search submitted successfully!");
    setFindMembersFormData({ username: "", hackathon: "", skillSet: "" });
  };

  // Box styles
  const boxStyle = {
    width: "350px",
    padding: "2rem",
    backgroundColor: "#E6E6FA", // Soft lavender for a less contrasting look
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
      {/* Navigation Bar */}
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
          <li
            onClick={() => handleTabChange("home")}
            style={{ cursor: "pointer" }}
          >
            Home
          </li>
          <li
            onClick={() => handleTabChange("findSkillHunt")}
            style={{ cursor: "pointer" }}
          >
            Find a SkillHunt
          </li>
          <li
            onClick={() => handleTabChange("createTeam")}
            style={{ cursor: "pointer" }}
          >
            Create a Team
          </li>
          <li
            onClick={() => handleTabChange("findMembers")}
            style={{ cursor: "pointer" }}
          >
            Find Members
          </li>
        </ul>
      </nav>

      {/* Dynamic Content Based on Active Tab */}
      {activeTab === "home" && (
        <div style={{ textAlign: "center", color: "#fff" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
            }}
          >
            Team Building at SkillHunt
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#f0f0f0",
              marginBottom: "2rem",
            }}
          >
            Learn how teamwork makes the dream work! Discover how you can find
            or create the best teams for hackathons, contests, and other exciting
            events.
          </p>
        </div>
      )}

      {activeTab === "findSkillHunt" && (
        <div style={boxStyle}>
          <h2
            style={{
              textAlign: "center",
              color: "#6A0DAD",
              fontWeight: "600",
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            Find a SkillHunt
          </h2>
          <form style={formStyle}>
            <input
              type="text"
              name="hackathonName"
              value={findTeamFormData.hackathonName}
              onChange={handleFindTeamChange}
              placeholder="Hackathon Name"
              style={inputStyle}
            />
            <input
              type="text"
              name="teamName"
              value={findTeamFormData.teamName}
              onChange={handleFindTeamChange}
              placeholder="Team Name"
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              value={findTeamFormData.email}
              onChange={handleFindTeamChange}
              placeholder="Email"
              style={inputStyle}
            />
            <button
              type="button"
              onClick={handleFindTeamSubmit}
              style={buttonStyle}
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {activeTab === "createTeam" && (
        <div style={boxStyle}>
          <h2
            style={{
              textAlign: "center",
              color: "#6A0DAD",
              fontWeight: "600",
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
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
              placeholder="Project Idea"
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              value={createTeamFormData.email}
              onChange={handleCreateTeamChange}
              placeholder="Your Email"
              style={inputStyle}
            />
            <button
              type="button"
              onClick={handleCreateTeamSubmit}
              style={buttonStyle}
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {activeTab === "findMembers" && (
        <div style={boxStyle}>
          <h2
            style={{
              textAlign: "center",
              color: "#6A0DAD",
              fontWeight: "600",
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            Find Members
          </h2>
          <form style={formStyle}>
            <input
              type="text"
              name="username"
              value={findMembersFormData.username}
              onChange={handleFindMembersChange}
              placeholder="Username"
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
              placeholder="Skill Set"
              style={inputStyle}
            />
            <button
              type="button"
              onClick={handleFindMembersSubmit}
              style={buttonStyle}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TeamManagement;
