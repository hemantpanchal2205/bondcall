const { generateToken } = require("../utils/token");
const { sendEmail } = require("../services/emailService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// ======================
// Register
// ======================
const register = async (req, res) => {
    try {
        const { fullName, username, email, password, gender } = req.body;

        if (!fullName || !username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All required fields are mandatory.",
            });
        }

        // Check Username
        const usernameExists = await User.findOne({ username });

        if (usernameExists) {
            return res.status(400).json({
                success: false,
                message: "Username already exists.",
            });
        }

        // Check Email
        const emailExists = await User.findOne({ email });

        if (emailExists) {
            return res.status(400).json({
                success: false,
                message: "Email already registered.",
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate Verification Token
        const verificationToken = generateToken();

        // Token Expiry (24 Hours)
        const verificationTokenExpires = new Date(
            Date.now() + 24 * 60 * 60 * 1000
        );

        // Create User
        const user = await User.create({
            fullName,
            username,
            email,
            password: hashedPassword,
            gender,
            loginProvider: "email",
            verificationToken,
            verificationTokenExpires,
        });

        res.status(201).json({
            success: true,
            message: "Registration Successful",
            user: {
                id: user._id,
                fullName: user.fullName,
                username: user.username,
                email: user.email,
                profileImage: user.profileImage,
                gender: user.gender,
                wallet: user.wallet,
                role: user.role,
                emailVerified: user.emailVerified,
            },
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// ======================
// Login
// ======================
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Username and Password are required.",
            });
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid Username or Password.",
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Invalid Username or Password.",
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                username: user.username,
                email: user.email,
                profileImage: user.profileImage,
                gender: user.gender,
                wallet: user.wallet,
                role: user.role,
            },
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// ======================
// Get Current User
// ======================
const getMe = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            user: req.user,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
const testEmail = async (req, res) => {
    try {
        await sendEmail({
            to: "harshitpanchal2205@gmail.com",
            subject: "Bond Call Test Email",
            html: `
        <h2>Bond Call</h2>
        <p>Congratulations! 🎉</p>
        <p>Your email service is working successfully.</p>
      `,
        });

        res.json({
            success: true,
            message: "Test email sent successfully.",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to send email.",
        });
    }
};

module.exports = {
    register,
    login,
    getMe,
    testEmail,
};