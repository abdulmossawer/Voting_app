const mongoose = require('mongoose');
const { type } = require('os');


// Define the Candidate scheemas
const candidateSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    party: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    isCriminal: {
        type: Boolean,
        default: false
    },

    bankBalance: {
        type: Number,
        min: [100000, 'Balance cannot be less than 1 lakh'] // Set minimum balance to 1 lakh
    },

    votes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },

            votedAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],

    voteCount: {
        type: Number,
        default: 0
    }

});


//Create a user model
const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;