const enableTracking = (req, res) => {
  const { userId } = req.body;
  res.json({ message: `Tracking enabled for user: ${userId}` });
};

module.exports = { enableTracking };
