$(document).ready(function() {
  $("#fighter").click(function() {
    $("#fighter").hide("fast");
    $("#warrior-image").show("fast");
    $("#character-name").show("fast");
  });
});

$("#constitution").click(function() {
  $("#constitution").hide("slow");
  $("#strength").show("fast");
});

$("#strength").click(function() {
  $("#strength").hide("slow");
  $("#dexterity").show("fast");
});

$("#dexterity").click(function() {
  $("#dexterity").hide("slow");
  $("#intelligence").show("fast");
});

$("#intelligence").click(function() {
  $("#intelligence").hide("slow");
  $("#hitpoints").show("fast");
});

$("#hitpoints").click(function() {
  $("#hitpoints").hide("slow");
  $("#adventure-btn").show("fast");
  $("#roll-intro").hide("fast");
});

$("#character-name").click(function() {
  $("#character-name").hide("fast");
  $("#random-name").show("fast");
  $("#character-stats").show("fast");
  $("#roll-intro").show("fast");
  $("#constitution").show("fast");
});

$("#adventure-btn").click(function(){
  $("#adventure-btn").hide("fast");
  $("#enemy-section").show("fast");
  $("#starting-map").show("fast");
  $("#action-buttons").show("fast");
  $("#remove-create-label").hide("fast");
})