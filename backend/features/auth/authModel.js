const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema);