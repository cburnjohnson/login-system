const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [3, 'Password must be longer']
    }
});

module.exports = mongoose.model('user', UserSchema);
