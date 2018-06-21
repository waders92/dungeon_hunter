const mongoose = require('mongoose');

var playerSchema = new mongoose.Schema ({
  player_name: {
    type: String,
    required: 'Field can not be blank'
  },
  character_name: {
    type: String,
    required: 'Field can not be blank'
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