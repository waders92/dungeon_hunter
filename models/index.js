var mongoose = require('mongoose');
var keys = require('../keys.js');
var dbUrl =  'mongodb://' + keys.NAME + ':' + keys.PASSWORD + '@ds123171.mlab.com:23171/dungeon-hunter';
mongoose.set('debug', true);
mongoose.connect(dbUrl);

mongoose.Promise = Promise;

module.exports.PlayerScore = require('./game');