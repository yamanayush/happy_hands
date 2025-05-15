const express = require('express');
const { register, login, getCurrentUser, protect } = require('../controllers/authController');
const router = express.Router();

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Get current user route (protected)
router.get('/me', protect, getCurrentUser);

module.exports = router; 