const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        ref: 'User',
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String, 
        required: function() {
            return !this.googleId && !this.githubId;
        },
        select: false
    },
    googleId: {
        type: String, 
        sparse: true
    },
    githubId: {
        type: String, 
        sparse: true
    },
    avatar: {
        type: String,
        default: ''
    }, 
    role: {
        type: String, 
        enum: ['user', 'admin', 'employee'],
        default: 'user'
    }, 
    createdAt: {
        type: Date, 
        default: Date.now
    }
});

UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch(err) {
        next(err);
    }
});

UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);