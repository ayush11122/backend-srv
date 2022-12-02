const mongoose = require('mongoose');

const UserSchema =new mongoose.scheme({
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
        type: string,
        Required: false
    }
})

const User = mongoose.Model('USER', userSchema);
module.exports = User;