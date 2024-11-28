const getPublicData = (req, res) => {
  res.json({ message: 'Public data fetched successfully!' });
};

module.exports = { getPublicData };
