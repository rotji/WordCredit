const AnalyticsCache = require('../models/AnalyticsCache');

// Example function to fetch cached analytics or regenerate if expired
const getAnalyticsData = async (cacheKey, regenerateFunc) => {
  const cachedData = await AnalyticsCache.findOne({ cacheKey, expiresAt: { $gte: Date.now() } });

  if (cachedData) {
    return cachedData.data;
  }

  // If not cached, regenerate data
  const freshData = await regenerateFunc();
  const expiresAt = new Date(Date.now() + 3600000); // Cache expires in 1 hour

  // Save the new cache
  await AnalyticsCache.findOneAndUpdate(
    { cacheKey },
    { cacheKey, data: freshData, expiresAt },
    { upsert: true }
  );

  return freshData;
};

module.exports = { getAnalyticsData };
