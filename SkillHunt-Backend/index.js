const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/project');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing for request bodies

// Routes
app.use('/api/auth', authRoutes); // Auth routes (signup, login, etc.)
app.use('/api/project', projectRoutes); // Project routes

// MongoDB Connection
console.log("mongo uri ", process.env.MONGO_URI);

/*mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Database connection error:', err)); */

// Basic test route to check if the server is running
app.get('/', (req, res) => {
  res.send('SkillHunt API is running');
});

// New standalone routes
app.get("/teams", (req, res) => {
  res.json({ message: "Teams fetched successfully!" });
});

app.post("/teams/create", (req, res) => {
  res.json({ message: "Team created successfully!" });
});

// Start the server
const PORT = process.env.PORT || 5000;
/*app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/
