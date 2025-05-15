const express = require('express');
const { protect, restrictTo } = require('../controllers/authController');
const router = express.Router();

// All customer routes require authentication
router.use(protect);

// Get all customers (admin only)
router.get('/', restrictTo('admin'), (req, res) => {
  res.json({ message: 'Get all customers route' });
});

// Get customer profile
router.get('/profile', (req, res) => {
  res.json({ message: 'Get customer profile route' });
});

// Update customer profile
router.put('/profile', (req, res) => {
  res.json({ message: 'Update customer profile route' });
});

// Get customer booking history
router.get('/booking-history', (req, res) => {
  res.json({ message: 'Get customer booking history route' });
});

module.exports = router; 