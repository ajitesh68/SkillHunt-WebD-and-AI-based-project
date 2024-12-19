/*const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const projectRoutes = require("./routes/project");
const userRoutes = require("./routes/userRoutes");
const teamRoutes = require("./routes/teamRoutes");
const eventRoutes = require("./routes/eventRoutes");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing for request bodies

// MongoDB Connection
console.log("mongo uri ", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Database connection error:", err));

// Routes
app.use("/api/auth", authRoutes); // Auth routes (signup, login, etc.)
app.use("/api/project", projectRoutes); // Project routes
app.use("/api/users", userRoutes); // User routes
app.use("/api/teams", teamRoutes); // Team routes
app.use("/api/events", eventRoutes); // Event routes

// Basic test route to check if the server is running
app.get("/", (req, res) => {
  res.send("SkillHunt API is running");
});

// New standalone routes for teams
app.get("/teams", (req, res) => {
  res.json({ message: "Teams fetched successfully!" });
});

app.post("/teams/create", (req, res) => {
  res.json({ message: "Team created successfully!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const projectRoutes = require("./routes/project");
const userRoutes = require("./routes/userRoutes");
const teamRoutes = require("./routes/teamRoutes");
const eventRoutes = require("./routes/eventRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

console.log("mongo uri ", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Database connection error:", err));

app.use("/api/auth", authRoutes); 
app.use("/api/project", projectRoutes); 
app.use("/api/users", userRoutes); 
app.use("/api/teams", teamRoutes); // Ensure this route is correct
app.use("/api/events", eventRoutes);

app.get("/", (req, res) => {
  res.send("SkillHunt API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
