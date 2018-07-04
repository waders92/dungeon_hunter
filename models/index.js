var mongoose = require('mongoose');
var dbUrl =  'mongodb://' + process.env.NAME + ':' + process.env.PASSWORD + '@ds123171.mlab.com:23171/dungeon-hunter';
mongoose.set('debug', true);
mongoose.connect(dbUrl);

mongoose.Promise = Promise;

module.exports.PlayerScore = require('./game');