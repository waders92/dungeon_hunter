const db = require('../models');

exports.getHomePage = function(req, res){
  res.render('index.hbs');
}


exports.createGame = function(req, res) {
  db.PlayerScore.create(req.body)
  .then(function(){
    res.render('confirmation');
  })
  .catch(function(err){
    res.send(err);
  });
}

exports.showScores =  function(req, res) {
  db.PlayerScore.find().sort({ rounds: +1 })
  .then(function(score){
    res.render('scores', { result: score } );
  })
  .catch(function(err){
    res.send(err);
  });  
}

module.exports = exports;