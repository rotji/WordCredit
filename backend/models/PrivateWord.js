const mongoose = require('mongoose');

const privateWordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User
  word: { type: String, required: true },
  count: { type: Number, default: 1 }, // Tracks how often the word is used
  timestamp: { type: Date, default: Date.now } // When the word was used
});

const PrivateWord = mongoose.model('PrivateWord', privateWordSchema);

module.exports = PrivateWord;
