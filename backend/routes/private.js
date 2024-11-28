const express = require('express');
const { enableTracking, trackUserWord, getUserWords } = require('../controllers/privateController');

const router = express.Router();

// Enable or disable tracking for a user
router.post('/enable', enableTracking);

// Track words for a specific user
router.post('/track', trackUserWord);

// Get all tracked words for a specific user
router.get('/words/:userId', getUserWords);

module.exports = router;
