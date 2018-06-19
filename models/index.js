var mongoose = require('mongoose');
var dbUrl =  'mongodb://localhost:27017/dungeon-hunter';
mongoose.set('debug', true);
mongoose.connect(dbUrl);

mongoose.Promise = Promise;

module.exports.PlayerScore = require('./game');