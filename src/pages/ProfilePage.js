import React from "react";

const ProfilePage = () => {
  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <h1 style={styles.navTitle}>Profile Dashboard</h1>
      </nav>

      <div style={styles.profilePage}>
        {/* Top Left Panel */}
        <div style={styles.topLeftPanel}>
          <h2 style={styles.panelHeader}>Profile Details</h2>
          <ul style={styles.list}>
            {Array.from({ length: 20 }, (_, i) => (
              <li key={i} style={styles.listItem}>
                Detail {i + 1}
              </li>
            ))}
          </ul>
        </div>

        {/* Top Right Panel */}
        <div style={styles.rightPanel}>
          <h2 style={styles.panelHeader}>Upcoming Events</h2>
          <ul style={styles.list}>
            {Array.from({ length: 10 }, (_, i) => (
              <li key={i} style={styles.listItem}>
                Event {i + 1} - Dec {i + 1}, 2024
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Right Panel */}
        <div style={styles.rightPanel}>
          <h2 style={styles.panelHeader}>Participated Projects</h2>
          <ul style={styles.list}>
            {Array.from({ length: 15 }, (_, i) => (
              <li key={i} style={styles.listItem}>
                Project {i + 1} - {i % 2 === 0 ? "Completed" : "Ongoing"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    background: "linear-gradient(to bottom right, #f7f7f7, #e2e2e2)",
  },
  navbar: {
    background: "#005bb5",
    color: "#ffffff",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  },
  navTitle: {
    margin: 0,
    fontSize: "20px",
  },
  profilePage: {
    display: "grid",
    gridTemplateColumns: "45% 1fr",
    gridTemplateRows: "50% 50%",
    gap: "8px", // Boxes closer together
    padding: "10px",
    boxSizing: "border-box",
    flex: 1,
  },
  topLeftPanel: {
    gridColumn: "1",
    gridRow: "span 2",
    background: "#ffffff",
    borderRadius: "8px",
    padding: "15px",
    overflowY: "auto", // Adds scrolling for this box
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  rightPanel: {
    background: "#ffffff",
    borderRadius: "8px",
    padding: "15px",
    overflowY: "auto", // Adds scrolling for this box
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  panelHeader: {
    fontSize: "16px",
    color: "#005bb5",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: "8px",
    fontSize: "14px",
    color: "#555555",
  },
};

export default ProfilePage;
