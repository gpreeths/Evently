const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'
        },
        address: { type: String }
    },
    category: { type: String, required: true, },
    postedby: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comments: [{
        text: { type: String, required: true },
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        createdAt: { type: Date, default: Date.now }
    }],
    description: { type: String, required: true, },
    date: { type: Date, required: true, },
    isApproved: { type: Boolean, default: false },
    image: { type: String, required: true, },
    createdAt: { type: Date, default: Date.now },
    lastUpdated: { type: Date, default: Date.now }

})

module.exports = mongoose.model('Event', eventSchema)