const db = require('../models');

exports.createGame = function(req, res) {
  console.log(req.body);
  db.PlayerScore.create(req.body)
  .then(function(newGame){
    res.status(201).json(newGame);
  })
  .catch(function(err){
    res.send(err);
  });
}

module.exports = exports;