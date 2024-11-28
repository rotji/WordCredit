const mongoose = require('mongoose');

const analyticsCacheSchema = new mongoose.Schema({
  cacheKey: { type: String, unique: true, required: true }, // Unique key for caching (e.g., userId + time range)
  data: { type: mongoose.Schema.Types.Mixed, required: true }, // JSON object for cached analytics
  createdAt: { type: Date, default: Date.now }, // Cache creation time
  expiresAt: { type: Date, required: true } // Cache expiry time
});

const AnalyticsCache = mongoose.model('AnalyticsCache', analyticsCacheSchema);

module.exports = AnalyticsCache;
