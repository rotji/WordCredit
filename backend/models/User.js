const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  wordsTracked: [
    {
      word: { type: String, required: true },
      count: { type: Number, default: 0 },
    },
  ],
});

module.exports = mongoose.model('User', userSchema);