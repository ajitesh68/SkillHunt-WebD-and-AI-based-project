// models/team.js
const mongoose = require("mongoose");

// Team Schema
const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    description: {
        type: String, // Project description or additional info
    },
    leader: {
        type: String, // Email of the team leader
        required: true
    },
    event_id: {
        type: String, // Reference to the hackathon or event name
        required: true
    },
    members: [{
        user: {
            type: String, // Email of the user
            required: true
        },
        role: {
            type: String, // Role of the member (e.g., Leader, Member)
            default: "Member"
        }
    }]
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

// Member Schema for Find Members
const memberSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    hackathon: {
        type: String, // Associated hackathon or event
        required: true
    },
    skillSet: {
        type: [String], // Array of skills
        required: true
    }
}, {
    timestamps: true
});

// SkillHunt Schema for Find a SkillHunt
const skillHuntSchema = new mongoose.Schema({
    hackathonName: {
        type: String,
        required: true
    },  
    teamName: {
        type: String,
        required: true
    },
    email: {
        type: String, // Email of the user searching
        required: true
    }
}, {
    timestamps: true
});

const Team = mongoose.model("Team", teamSchema);
const Member = mongoose.model("Member", memberSchema);
const SkillHunt = mongoose.model("SkillHunt", skillHuntSchema);

module.exports = {
    Team,
    Member,
    SkillHunt
};
