const express = require("express");
const router = express.Router();

const {
    register,
    login,
    getMe,
    testEmail,
} = require("../controllers/authController");

const protect = require("../middlewares/authMiddleware");

// Public Routes
router.post("/register", register);
router.post("/login", login);
router.get("/test-email", testEmail);

// Protected Routes
router.get("/me", protect, getMe);

module.exports = router;