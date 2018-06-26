$(document).ready(function() {
  $("#fighter").click(function() {
    $("#fighter").hide("fast");
    $("#warrior-image").show("fast");
    $("#character-name").show("fast");
  });
});

$("#all-stats").click(function() {
  $("#all-stats").hide("slow");
  $("#adventure-btn").show("slow");
});

$("#character-name").click(function() {
  $("#character-name").hide("fast");
  $("#random-name").show("fast");
  $("#character-stats").show("fast");
  $("#roll-intro").show("fast");
  $("#all-stats").show("fast");
  
});

$("#adventure-btn").click(function(){
  $("#adventure-btn").hide("fast");
  $("#enemy-section").show("fast");
  $("#starting-map").show("fast");
  $("#action-buttons").show("fast");
  $("#remove-create-label").hide("fast");
})