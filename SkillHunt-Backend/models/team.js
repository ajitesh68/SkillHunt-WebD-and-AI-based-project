// models/team.js
const mongoose = require('mongoose');

// Team Schema
const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
