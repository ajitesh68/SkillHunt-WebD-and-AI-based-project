// routes/teamRouter.js
const express = require('express');
const { Team, Member, SkillHunt } = require('../models/team'); // Import Models

const router = express.Router();

// Create a team
router.post('/create', async (req, res) => {
  try {
    // Destructure request body
    const { name, description, leader, event_id, members } = req.body;

    // Create a new team document
    const newTeam = new Team({
      name,
      description,
      leader,
      event_id,
      members,
    });

    // Save the team to MongoDB
    const savedTeam = await newTeam.save();
    console.log("Saved team:", savedTeam); // Add this line to check if saving is successful

    // Respond with the saved team
    res.status(201).json({
      message: "Team created successfully!",
      team: savedTeam,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create the team", error });
  }
});

// Find a team in SkillHunt
router.post('/find', async (req, res) => {
    const { hackathonName, teamName, email } = req.body;

    try {
        const newSkillHunt = new SkillHunt({
            hackathonName,
            teamName,
            email
        });

        await newSkillHunt.save();
        res.status(200).json({ message: 'SkillHunt search submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to submit skillhunt search', error: error.message });
    }
});

// Find members based on username, hackathon, and skillset
router.post('/find-members', async (req, res) => {
    const { username, hackathon, skillSet } = req.body;

    try {
        const newMemberSearch = new Member({
            username,
            hackathon,
            skillSet
        });

        await newMemberSearch.save();
        res.status(200).json({ message: 'Member search submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to submit member search', error: error.message });
    }
});

module.exports = router;
