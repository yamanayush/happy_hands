const express = require('express');
const { protect, restrictTo } = require('../controllers/authController');
const router = express.Router();

// Public routes
// Get all services
router.get('/', (req, res) => {
  res.json({ message: 'Get all services route' });
});

// Get single service
router.get('/:id', (req, res) => {
  res.json({ message: 'Get single service route' });
});

// Protected routes (admin only)
router.use(protect);
router.use(restrictTo('admin'));

// Add new service
router.post('/', (req, res) => {
  res.json({ message: 'Add service route' });
});

// Update service
router.put('/:id', (req, res) => {
  res.json({ message: 'Update service route' });
});

// Delete service
router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete service route' });
});

// Update service pricing
router.put('/:id/pricing', (req, res) => {
  res.json({ message: 'Update service pricing route' });
});

module.exports = router; 