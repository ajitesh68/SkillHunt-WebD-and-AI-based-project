import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace with your actual backend URL

const TeamManagement = () => {
  const [activeTab, setActiveTab] = useState("home");

  // Form data states
  const [findTeamFormData, setFindTeamFormData] = useState({
    hackathonName: "",
    teamName: "",
    email: "",
  });

  const [createTeamFormData, setCreateTeamFormData] = useState({
    teamName: "",
    description: "",
    leader: "",
    event_id: "",
    members: [{ user: "", role: "Leader" }],
  });

  const [findMembersFormData, setFindMembersFormData] = useState({
    username: "",
    hackathon: "",
    skillSet: "",
  });

  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Form field change handlers
  const handleFindTeamChange = (e) => {
    const { name, value } = e.target;
    setFindTeamFormData({ ...findTeamFormData, [name]: value });
  };

  const handleCreateTeamChange = (e) => {
    const { name, value } = e.target;
    if (name === "members") {
      setCreateTeamFormData({
        ...createTeamFormData,
        members: [{ user: value, role: "Leader" }],
      });
    } else {
      setCreateTeamFormData({ ...createTeamFormData, [name]: value });
    }
  };

  const handleFindMembersChange = (e) => {
    const { name, value } = e.target;
    setFindMembersFormData({ ...findMembersFormData, [name]: value });
  };

  // Submit handlers
  const handleFindTeamSubmit = async () => {
    const { hackathonName, teamName, email } = findTeamFormData;
    if (!hackathonName || !email) {
      alert("Please fill in all required fields for Find a SkillHunt.");
      return;
    }
    try {
      const response = await axios.post(`${API_BASE_URL}/api/teams/find`, {
        hackathonName,
        teamName,
        email,
      });
      console.log("Find Team Response:", response.data);
      setSearchResults(response.data.teams); // Update the state with search results
    } catch (error) {
      console.error("Error finding team:", error.response?.data || error.message);
      alert("Failed to find the team. Please try again.");
    }
    setFindTeamFormData({ hackathonName: "", teamName: "", email: "" });
  };

  const handleCreateTeamSubmit = async () => {
    const { teamName, description, leader, event_id } = createTeamFormData;
    if (!teamName || !description || !leader || !event_id) {
      alert("Please fill in all required fields for Create a Team.");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/teams/create`, {
        teamName,
        description,
        leader,
        event_id,
        members: [{ user: leader, role: "Leader" }],
      });
      console.log("Team Created:", response.data);
      alert("Team created successfully!");
      setCreateTeamFormData({
        teamName: "",
        description: "",
        leader: "",
        event_id: "",
        members: [{ user: "", role: "Leader" }],
      });
    } catch (error) {
      console.error("Error creating team:", error.response?.data || error.message);
      alert("Failed to create the team. Please try again.");
    }
  };

  const handleFindMembersSubmit = async () => {
    const { username, hackathon, skillSet } = findMembersFormData;
    if (!username || !hackathon || !skillSet) {
      alert("Please fill in all required fields for Find Members.");
      return;
    }
    try {
      const response = await axios.post(`${API_BASE_URL}/api/members/find`, {
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

      {activeTab === "findSkillHunt" && (
        <div style={boxStyle}>
          <h2 style={{ textAlign: "center", color: "#6A0DAD", fontWeight: "600", fontSize: "1.5rem", marginBottom: "1.5rem" }}>
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
              placeholder="Your Email"
              style={inputStyle}
            />
            <button type="button" onClick={handleFindTeamSubmit} style={buttonStyle}>
              Search Team
            </button>
          </form>

          {searchResults.length > 0 && (
            <div style={{ marginTop: "2rem" }}>
              <h3 style={{ textAlign: "center", color: "#6A0DAD", fontWeight: "600", fontSize: "1.3rem" }}>
                Search Results
              </h3>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {searchResults.map((team) => (
                                    <li key={team._id} style={{ marginBottom: "1rem", backgroundColor: "#f0f0f0", padding: "1rem", borderRadius: "5px" }}>
                                      <strong>Team Name:</strong> {team.teamName}<br />
                                      <strong>Description:</strong> {team.description}<br />
                                      <strong>Leader:</strong> {team.leader}<br />
                                      <strong>Event ID:</strong> {team.event_id}
                                    </li>
                ))}
              </ul>
            </div>
          )}
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
              type="text"
              name="description"
              value={createTeamFormData.description}
              onChange={handleCreateTeamChange}
              placeholder="Project Description"
              style={inputStyle}
            />
            <input
              type="email"
              name="leader"
              value={createTeamFormData.leader}
              onChange={handleCreateTeamChange}
              placeholder="Team Leader Email"
              style={inputStyle}
            />
            <input
              type="text"
              name="event_id"
              value={createTeamFormData.event_id}
              onChange={handleCreateTeamChange}
              placeholder="Hackathon/Event ID"
              style={inputStyle}
            />
            <button type="button" onClick={handleCreateTeamSubmit} style={buttonStyle}>
              Create Team
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







/*import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace with your actual backend URL

const TeamManagement = () => {
  const [activeTab, setActiveTab] = useState("home");

  // Form data states
  const [findTeamFormData, setFindTeamFormData] = useState({
    hackathonName: "",
    teamName: "",
    email: "",
  });

  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFindTeamChange = (e) => {
    const { name, value } = e.target;
    setFindTeamFormData({ ...findTeamFormData, [name]: value });
  };

  const handleFindTeamSubmit = async () => {
    const { hackathonName, teamName, email } = findTeamFormData;
    if (!hackathonName || !email) {
      alert("Please fill in all required fields for Find a SkillHunt.");
      return;
    }
    try {
      const response = await axios.post(`${API_BASE_URL}/api/teams/find`, {
        hackathonName,
        teamName,
        email,
      });
      console.log("Find Team Response:", response.data);
      setSearchResults(response.data.teams); // Update the state with search results
    } catch (error) {
      console.error("Error finding team:", error.response?.data || error.message);
      alert("Failed to find the team. Please try again.");
    }
    setFindTeamFormData({ hackathonName: "", teamName: "", email: "" });
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

      {activeTab === "findSkillHunt" && (
        <div style={boxStyle}>
          <h2 style={{ textAlign: "center", color: "#6A0DAD", fontWeight: "600", fontSize: "1.5rem", marginBottom: "1.5rem" }}>
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
              placeholder="Your Email"
              style={inputStyle}
            />
            <button type="button" onClick={handleFindTeamSubmit} style={buttonStyle}>
              Search Team
            </button>
          </form>

          {searchResults.length > 0 && (
            <div style={{ marginTop: "2rem" }}>
              <h3 style={{ textAlign: "center", color: "#6A0DAD", fontWeight: "600", fontSize: "1.3rem" }}>
                Search Results
              </h3>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {searchResults.map((team) => (
                  <li key={team._id} style={{ marginBottom: "1rem", backgroundColor: "#f0f0f0", padding: "1rem", borderRadius: "5px" }}>
                    <strong>Team Name:</strong> {team.teamName}<br />
                    <strong>Description:</strong> {team.description}<br />
                    <strong>Leader:</strong> {team.leader}<br />
                    <strong>Event ID:</strong> {team.event_id}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamManagement;*/




/*import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace with your actual backend URL

const TeamManagement = () => {
  const [activeTab, setActiveTab] = useState("home");

  // Form data states
  const [findTeamFormData, setFindTeamFormData] = useState({
    hackathonName: "",
    teamName: "",
    email: "",
  });

  const [createTeamFormData, setCreateTeamFormData] = useState({
    teamName: "",
    description: "",
    leader: "",
    event_id: "",
    members: [{ user: "", role: "Leader" }],
  });

  const [findMembersFormData, setFindMembersFormData] = useState({
    username: "",
    hackathon: "",
    skillSet: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Form field change handlers
  const handleFindTeamChange = (e) => {
    const { name, value } = e.target;
    setFindTeamFormData({ ...findTeamFormData, [name]: value });
  };

  const handleCreateTeamChange = (e) => {
    const { name, value } = e.target;
    if (name === "members") {
      setCreateTeamFormData({
        ...createTeamFormData,
        members: [{ user: value, role: "Leader" }],
      });
    } else {
      setCreateTeamFormData({ ...createTeamFormData, [name]: value });
    }
  };

  const handleFindMembersChange = (e) => {
    const { name, value } = e.target;
    setFindMembersFormData({ ...findMembersFormData, [name]: value });
  };

  // Submit handlers
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
    const { teamName, description, leader, event_id } = createTeamFormData;
    if (!teamName || !description || !leader || !event_id) {
      alert("Please fill in all required fields for Create a Team.");
      return;
    }
  
    try {
      const response = await axios.post(`${API_BASE_URL}/api/teams/create`, {
        teamName,
        description,
        leader,
        event_id,
        members: [{ user: leader, role: "Leader" }],
      });
      console.log("Team Created:", response.data);
      alert("Team created successfully!");
      setCreateTeamFormData({
        teamName: "",
        description: "",
        leader: "",
        event_id: "",
        members: [{ user: "", role: "Leader" }],
      });
    } catch (error) {
      console.error("Error creating team:", error.response?.data || error.message);
      alert("Failed to create the team. Please try again.");
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
              type="text"
              name="description"
              value={createTeamFormData.description}
              onChange={handleCreateTeamChange}
              placeholder="Project Description"
              style={inputStyle}
            />
            <input
              type="email"
              name="leader"
              value={createTeamFormData.leader}
              onChange={handleCreateTeamChange}
              placeholder="Team Leader Email"
              style={inputStyle}
            />
            <input
              type="text"
              name="event_id"
              value={createTeamFormData.event_id}
              onChange={handleCreateTeamChange}
              placeholder="Hackathon/Event ID"
              style={inputStyle}
            />
            <button type="button" onClick={handleCreateTeamSubmit} style={buttonStyle}>
              Create Team
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

export default TeamManagement;*/
