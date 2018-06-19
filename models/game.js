const mongoose = require('mongoose');

var playerSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: 'Name can not be blank!'
  },
  rounds: {
    type: Number,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

var PlayerScore = mongoose.model('PlayerScore', playerSchema);
module.exports = PlayerScore;