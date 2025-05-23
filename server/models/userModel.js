const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    joinedOn: { type: Date, required: true, default: Date.now },
    lastActive: { type: Date, required: true, default: Date.now },
    notifications: [{
        message: String,
        read: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now }
    }],

    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true }],
    bio: { type: String },
    role:{default:'notAdmin'}



})

module.exports = mongoose.model('User', userSchema)