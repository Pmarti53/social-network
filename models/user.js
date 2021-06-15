const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const User = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);


UserSchema.virtual('').get(function () {
    return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
});

const User = model('User', UserSchema);

module.exports = Pizza;