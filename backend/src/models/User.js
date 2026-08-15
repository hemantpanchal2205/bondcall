const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            default: null,
        },

        googleId: {
            type: String,
            default: null,
        },

        loginProvider: {
            type: String,
            enum: ["email", "google"],
            default: "email",
        },

        emailVerified: {
            type: Boolean,
            default: false,
        },

        // Email Verification
        verificationToken: {
            type: String,
            default: null,
        },

        verificationTokenExpires: {
            type: Date,
            default: null,
        },

        // Forgot Password
        resetPasswordToken: {
            type: String,
            default: null,
        },

        resetPasswordTokenExpires: {
            type: Date,
            default: null,
        },

        profileImage: {
            type: String,
            default: "",
        },

        gender: {
            type: String,
            enum: ["male", "female", "other"],
            default: "other",
        },

        wallet: {
            type: Number,
            default: 0,
        },

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },

        isOnline: {
            type: Boolean,
            default: false,
        },

        isBlocked: {
            type: Boolean,
            default: false,
        },

        lastSeen: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);