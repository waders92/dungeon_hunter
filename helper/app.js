const db = require('../models');

exports.createGame = function(req, res) {
  db.PlayerScore.create(req.body)
  .then(function(){
    res.render('scores.hbs');
  })
  .catch(function(err){
    res.send(err);
  });
}

exports.showScores =  function(req, res) {
  db.PlayerScore.find()
  .then(function(score){
    res.render('scores', { result: score} );
  })
  .catch(function(err){
    res.send(err);
  });  
}

module.exports = exports;