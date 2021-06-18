const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    writtenBy: {
        type: String
    },
    commentBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;