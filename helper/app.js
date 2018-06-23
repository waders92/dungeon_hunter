const db = require('../models');

exports.createGame = function(req, res) {
  db.PlayerScore.create(req.body)
  .then(function(newGame){
    res.status(201).json(newGame);
  })
  .catch(function(err){
    res.send(err);
  });
}

exports.showScores = function(req, res) {
  db.PlayerScore.find()
  .then(function(data){
    res.render('scores.hbs');
  });

}

module.exports = exports;