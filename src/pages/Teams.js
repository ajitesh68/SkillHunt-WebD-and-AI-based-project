import React, { useState } from "react";

const TeamCreation = () => {
  const [formData, setFormData] = useState({
    hackathonName: "",
    teamName: "",
    teamDescription: "",
    teamSkills: "",
    country: "",
    email: "",
    github: "",
    twitter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { hackathonName, teamName, email } = formData;
    if (!hackathonName || !teamName || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Team created successfully!");

    setFormData({
      hackathonName: "",
      teamName: "",
      teamDescription: "",
      teamSkills: "",
      country: "",
      email: "",
      github: "",
      twitter: "",
    });
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #007AFF, #4C82F0)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "450px",
          padding: "2rem",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#007AFF",
            fontWeight: "600",
            marginBottom: "1.5rem",
          }}
        >
          Find a SkillHunt
        </h2>
        <form>
          {/* Hackathon Name and Team Name */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ flex: 1 }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#4C4C4C",
                }}
              >
                Hackathon Name
              </label>
              <input
                type="text"
                name="hackathonName"
                value={formData.hackathonName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.5rem",
                  border: "1px solid #E5E5E5",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#4C4C4C",
                }}
              >
                Team Name
              </label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.5rem",
                  border: "1px solid #E5E5E5",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>

          {/* Team Description */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#4C4C4C",
              }}
            >
              Team Description
            </label>
            <textarea
              name="teamDescription"
              value={formData.teamDescription}
              onChange={handleChange}
              rows="3"
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.5rem",
                border: "1px solid #E5E5E5",
                borderRadius: "5px",
              }}
            ></textarea>
          </div>

          {/* Team Skills and Country */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ flex: 1 }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#4C4C4C",
                }}
              >
                Team Skills
              </label>
              <input
                type="text"
                name="teamSkills"
                placeholder="e.g., React, Node.js"
                value={formData.teamSkills}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.5rem",
                  border: "1px solid #E5E5E5",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#4C4C4C",
                }}
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.5rem",
                  border: "1px solid #E5E5E5",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>

          {/* Contact Email and GitHub URL */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ flex: 1 }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#4C4C4C",
                }}
              >
                Contact Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.5rem",
                  border: "1px solid #E5E5E5",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#4C4C4C",
                }}
              >
                GitHub URL
              </label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.5rem",
                  border: "1px solid #E5E5E5",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>

          {/* Twitter URL */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#4C4C4C",
              }}
            >
              Twitter URL (optional)
            </label>
            <input
              type="url"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.5rem",
                border: "1px solid #E5E5E5",
                borderRadius: "5px",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            style={{
              width: "100%",
              backgroundColor: "#007AFF",
              color: "#ffffff",
              fontWeight: "600",
              padding: "0.75rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#005FCC")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007AFF")}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeamCreation;