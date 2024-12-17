const express = require("express");
const cors = require("cors");
const connectDB = require("./db"); // Ensure this path points to your `db.js`
require("dotenv").config(); // Load environment variables from the .env file
const aiRouter = require('./routes/ai')
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Simulated project data (for reference if required)
const projects = [
  { id: 1, title: "AI Project", description: "Description of AI Project" },
  { id: 2, title: "Web Dev Project", description: "Description of Web Dev Project" },
];

// API route to fetch projects
app.get("/api/project", (req, res) => {
  res.status(200).json(projects);
});

// Define Routes
const authRoutes = require("./routes/auth"); // Import the auth routes
const userRoutes = require("./routes/userRoutes"); // Import the user routes
const teamRoutes = require("./routes/teamRoutes"); // Import the team routes
const eventRoutes = require("./routes/eventRoutes"); // Import the event routes

app.use("/api/auth", authRoutes); // Mount the auth routes under /api/auth
app.use("/api/users", userRoutes); // Mount the user routes under /api/users
app.use("/api/teams", teamRoutes); // Import and mount team routes
app.use("/api/events", eventRoutes); // Import and mount event routes

app.use('/api/ai/', aiRouter); // AI routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
