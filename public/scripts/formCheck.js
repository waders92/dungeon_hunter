function saveGame() {
  var player_name = document.gameForm.player_name.value.toString();
  var character_name = document.gameForm.character_name.value.toString();
  var rounds = document.gameForm.rounds.value;
  var remaining_hitpoints = document.gameForm.remaining_hitpoints.value;
  document.gameForm.submit();
}