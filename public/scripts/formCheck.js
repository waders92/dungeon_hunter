function saveGame() {
  var player_name = document.gameForm.player_name.value.toString();
  var character_name = document.gameForm.character_name.value.toString();
  var rounds = document.gameForm.rounds.value;
  document.gameForm.submit();
}