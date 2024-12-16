const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./db"); // Ensure this path points to your db.js
require("dotenv").config(); // Load environment variables from the .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
//connectDB(); // This will connect to MongoDB using the settings in db.js or a default URI

// Simulated project data (for reference if required)
const projects = [
  { id: 1, title: "AI Project", description: "Description of AI Project" },
  { id: 2, title: "Web Dev Project", description: "Description of Web Dev Project" },
];

// API route to fetch projects
app.get("/api/project", (req, res) => {
  res.status(200).json(projects);
});

// Import Routes
const authRoutes = require("./routes/auth"); // Import auth routes
const userRoutes = require("./routes/userRoutes"); // Import user routes
const teamRoutes = require("./routes/teamRoutes"); // Import team routes
const eventRoutes = require("./routes/eventRoutes"); // Import event routes

// Use Routes
app.use("/api/auth", authRoutes); // Mount auth routes under /api/auth
app.use("/api/users", userRoutes); // Mount user routes under /api/users
app.use("/api/teams", teamRoutes); // Mount team routes under /api/teams
app.use("/api/events", eventRoutes); // Mount event routes under /api/events

// Connect to MongoDB (updated)
mongoose.connect('mongodb://localhost:27017/skillhunt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.error(err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
