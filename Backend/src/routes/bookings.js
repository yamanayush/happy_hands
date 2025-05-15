const express = require('express');
const { protect, restrictTo } = require('../controllers/authController');
const router = express.Router();

// Placeholder routes (we'll implement the controllers later)
router.use(protect); // All booking routes require authentication

// Get all bookings
router.get('/', restrictTo('admin', 'staff'), (req, res) => {
  res.json({ message: 'Get all bookings route' });
});

// Get user's bookings
router.get('/my-bookings', (req, res) => {
  res.json({ message: 'Get user bookings route' });
});

// Create new booking
router.post('/', (req, res) => {
  res.json({ message: 'Create booking route' });
});

// Get single booking
router.get('/:id', (req, res) => {
  res.json({ message: 'Get single booking route' });
});

// Update booking
router.put('/:id', (req, res) => {
  res.json({ message: 'Update booking route' });
});

// Delete booking
router.delete('/:id', restrictTo('admin'), (req, res) => {
  res.json({ message: 'Delete booking route' });
});

module.exports = router; 