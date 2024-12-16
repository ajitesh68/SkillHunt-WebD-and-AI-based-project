const express = require("express");
const router = express.Router();
const Team = require("../models/team");

// POST route to create a team (with extended fields like name, description, etc.)
router.post("/create", async (req, res) => {
  try {
    const { name, description, leader, members, event_id, skills } = req.body;

    // Basic validation to ensure required fields are provided
    if (!name) {
      return res.status(400).json({ error: "Team name is required!" });
    }

    // Create a new team document
    const team = new Team({
      id: Date.now().toString(), // Generating a unique ID (can be replaced by a better logic)
      name,
      description,
      leader,
      members,
      event_id,
      skills,
    });

    // Save the team to the database
    await team.save();
    
    res.status(201).json({ message: "Team created successfully!", team });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create the team. Please try again." });
  }
});

// GET route to fetch all teams (with population)
router.get("/", async (req, res) => {
  try {
    // Fetch all teams and populate leader and members fields
    const teams = await Team.find()
      .populate("leader", "name email") // Populate leader with specific fields
      .populate("members.user", "name email"); // Populate members with specific fields

    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST route to find a team (search by hackathon, team name, and email)
router.post("/find", async (req, res) => {
  const { hackathonName, teamName, email } = req.body;

  // Basic validation to ensure the necessary fields are provided
  if (!hackathonName || !teamName || !email) {
    return res.status(400).json({ error: "All fields (hackathonName, teamName, email) are required." });
  }

  try {
    // Search for the team by hackathonName, teamName, and email
    const team = await Team.findOne({
      name: teamName,
      event_id: hackathonName,
      "members.user": email, // Matching the user's email in the team members array
    })
      .populate("leader", "name email") // Populate leader with specific fields
      .populate("members.user", "name email"); // Populate members with specific fields

    if (!team) {
      return res.status(404).json({ error: "Team not found." });
    }

    // Return the found team
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST route to create a team (basic version, without skills)
router.post("/", async (req, res) => {
  try {
    const newTeam = new Team(req.body);
    const savedTeam = await newTeam.save();
    res.status(201).json(savedTeam);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to fetch all teams (basic version)
router.get("/all", async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
