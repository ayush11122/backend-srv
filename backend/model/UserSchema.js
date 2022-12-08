const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
    type: String,
        Required: true
    },
    email: {
        type: String,
        Required: true
    },
    phone: {
        type: Number,
        Required: true
    },
    gender: {
        type: String,
        Required: true
    },
    location: {
        type: String,
        Required: false
    }
});

const User = mongoose.model('USER', userSchema);
module.exports = User;