const mongoose = require('mongoose');

const publicWordSchema = new mongoose.Schema({
  word: { type: String, required: true },
  count: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PublicWord', publicWordSchema);
