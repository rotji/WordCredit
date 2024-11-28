const express = require('express');
const { getPublicData, getAnalyticsCache } = require('../controllers/publicController');

const router = express.Router();

// Get mock public data
router.get('/', getPublicData);

// Retrieve cached analytics
router.get('/analytics', getAnalyticsCache);

module.exports = router;
