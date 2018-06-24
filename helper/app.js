const db = require('../models');
var moment = require('moment');

exports.createGame = function(req, res) {
  db.PlayerScore.create(req.body)
  .then(function(){
    res.render('index');
  })
  .catch(function(err){
    res.send(err);
  });
}

exports.showScores =  function(req, res) {
  db.PlayerScore.find().sort({ rounds: +1 })
  .then(function(score){
    res.render('scores', { result: score, moment: moment } );
  })
  .catch(function(err){
    res.send(err);
  });  
}

module.exports = exports;