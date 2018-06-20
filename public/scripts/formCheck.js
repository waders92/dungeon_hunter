function saveGame() {
  var player_name = document.gameForm.player.value;
  var character_name = document.gameForm.character.value;
  var rounds = document.gameForm.rounds.value;
  document.gameForm.submit();
}